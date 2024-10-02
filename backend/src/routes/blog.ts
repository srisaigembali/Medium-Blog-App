import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { createBlog, updateBlog } from "../zod";

export const blogRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string;
		JWT_SECRET: string;
	};
	Variables: { userId: any };
}>();

blogRouter.use(async (c, next) => {
	try {
		const jwt = c.req.header("Authorization");
		if (!jwt) {
			c.status(401);
			return c.json({ error: "please provide jwt" });
		}
		const token = jwt.split(" ")[1];
		const payload = await verify(token, c.env.JWT_SECRET);
		if (!payload) {
			c.status(401);
			return c.json({ error: "unauthorized" });
		}
		c.set("userId", payload.id);
		await next();
	} catch (e) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
});

blogRouter.post("/", async (c) => {
	const userId = c.get("userId");
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const body = await c.req.json();

	const { success } = createBlog.safeParse(body);
	if (!success) {
		c.status(411);
		return c.json("Inputs are invalid");
	}

	const post = await prisma.post.create({
		data: {
			title: body.title,
			content: body.content,
			authorId: userId,
		},
	});
	return c.json({
		id: post.id,
	});
});

blogRouter.put("/", async (c) => {
	const userId = c.get("userId");
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const body = await c.req.json();

	const { success } = updateBlog.safeParse(body);
	if (!success) {
		c.status(411);
		return c.json("Inputs are invalid");
	}

	await prisma.post.update({
		where: {
			id: body.id,
			authorId: userId,
		},
		data: {
			title: body.title,
			content: body.content,
		},
	});

	return c.text("updated post");
});

blogRouter.get("/bulk", async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const posts = await prisma.post.findMany({
		select: {
			content: true,
			title: true,
			id: true,
			author: {
				select: {
					name: true,
				},
			},
		},
	});

	return c.json({ posts });
});

blogRouter.get("/:id", async (c) => {
	const id = c.req.param("id");
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const post = await prisma.post.findUnique({
		where: {
			id,
		},
		select: {
			id: true,
			title: true,
			content: true,
			author: {
				select: {
					name: true,
				},
			},
		},
	});

	return c.json({ post });
});

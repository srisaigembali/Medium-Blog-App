import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { FullBlog } from "../components/FullBlog";
import { AppBar } from "../components/AppBar";
import { FullBlogSkeleton } from "../components/FullBlogSkeleton";

export const Blog = () => {
	const { id } = useParams();
	const { loading, blog } = useBlog({
		id: String(id || ""),
	});

	if (loading) {
		return (
			<div>
				<AppBar />
				<div className='flex justify-center'>
					<FullBlogSkeleton />
				</div>
			</div>
		);
	}

	return (
		<div>
			<AppBar />
			<FullBlog
				title={blog?.title}
				content={blog?.content}
				authorName={blog?.author.name}
			/>
		</div>
	);
};

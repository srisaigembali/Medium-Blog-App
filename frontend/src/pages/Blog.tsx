import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { FullBlog } from "../components/FullBlog";

export const Blog = () => {
	const { id } = useParams();
	const { loading, blog } = useBlog({
		id: String(id || ""),
	});

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<FullBlog
				title={blog?.title}
				content={blog?.content}
				authorName={blog?.author.name}
			/>
		</div>
	);
};

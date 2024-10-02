import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

interface blogCardProps {
	id: string;
	authorName: string;
	title: string;
	content: string;
	publishedDate: string;
}

export const BlogCard = ({ authorName, title, content, publishedDate, id }: blogCardProps) => {
	return (
		<Link to={`/blog/${id}`}>
			<div className='border-b-2 border-slate-200 pb-4 p-4 max-w-screen-md'>
				<div className='flex'>
					<Avatar name={authorName} />
					<div className='pl-2 text-xs flex justify-center flex-col'>{authorName}</div>
					<div className='pl-2 text-xs text-slate-500 flex justify-center flex-col'>&#9679;</div>
					<div className='pl-2 text-xs text-slate-500 flex justify-center flex-col'>
						{publishedDate}
					</div>
				</div>
				<div className='text-xl font-bold pt-2'>{title}</div>
				<div className='text-md font-normal'>{content.slice(0, 100) + "..."}</div>
				<div className='text-slate-500 text-sm pt-4'>{`${Math.ceil(
					content.length / 100
				)} min read`}</div>
			</div>
		</Link>
	);
};

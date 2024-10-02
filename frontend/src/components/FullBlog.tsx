import { AppBar } from "./AppBar";
import { Avatar } from "./Avatar";

interface blogProps {
	title: string | undefined;
	content: string | undefined;
	authorName: string | undefined;
}

export const FullBlog = ({ title, content, authorName }: blogProps) => {
	return (
		<div>
			<AppBar />
			<div className='flex justify-center'>
				<div className='grid grid-cols-12 px-10 w-full mt-6 max-w-screen-xl'>
					<div className='col-span-8'>
						<div className='text-5xl font-extrabold'>{title}</div>
						<div className='text-slate-500 pt-3'>Posted on 6th December 2026</div>
						<div className='pt-4'>{content}</div>
					</div>
					<div className='col-span-4'>
						<div className='text-slate-600 text-lg'>Author</div>
						<div className='flex w-full'>
							<div className='flex justify-center flex-col p-2'>
								<Avatar
									name={authorName || "Anonymous"}
									size={8}
								/>
							</div>
							<div className='p-2'>
								<div className='font-bold text-2xl'>{authorName || "Anonymous"}</div>
								<div className='pt-2 text-slate-600'>
									Random catch phrase about author's ability to catch the user's attention
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

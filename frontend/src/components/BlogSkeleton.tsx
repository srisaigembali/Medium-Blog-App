export const BlogSkeleton = () => {
	return (
		<div className='mt-3'>
			<div
				role='status'
				className='animate-pulse'
			>
				<div className='border-b-2 border-slate-200 pb-4 p-4 w-screen max-w-screen-md'>
					<div className='flex'>
						<div className='h-2.5 bg-gray-200 rounded-full w-48 mb-4'></div>
						<div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>
						<div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>
					</div>
					<div className='text-xl font-bold pt-2'>
						<div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>
					</div>
					<div className='text-md font-normal'>
						<div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>
					</div>
					<div className='text-slate-500 text-sm pt-4'>
						<div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>
					</div>
				</div>
			</div>
			<span className='sr-only'>Loading...</span>
		</div>
	);
};

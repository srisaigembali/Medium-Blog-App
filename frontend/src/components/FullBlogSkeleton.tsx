export const FullBlogSkeleton = () => {
	return (
		<div>
			<div className='flex justify-center'>
				<div className='grid grid-cols-12 px-10 mt-8 w-screen max-w-screen-xl'>
					<div className='col-span-8'>
						<div className='text-5xl font-extrabold'>
							<div className='h-2.5 bg-gray-200 rounded-full w-48 mb-4'></div>
						</div>
						<div className='text-slate-500 pt-3'>
							<div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>
						</div>
						<div className='pt-4'>
							<div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>{" "}
							<div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>
						</div>
					</div>
					<div className='col-span-4 ml-6'>
						<div className='text-slate-600 text-lg'>
							<div className='h-2.5 bg-gray-200 rounded-full w-32 mb-2'></div>
						</div>
						<div className='flex w-full'>
							<div className='flex justify-center flex-col p-2'>
								<svg
									className='w-10 h-10 me-3 text-gray-200'
									aria-hidden='true'
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'
									viewBox='0 0 20 20'
								>
									<path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z' />
								</svg>
							</div>
							<div className='p-2'>
								<div className='font-bold text-2xl'>
									<div className='h-2.5 bg-gray-200 rounded-full w-32 mb-2'></div>
								</div>
								<div className='pt-2 text-slate-600'>
									<div className='w-48 h-2 bg-gray-200 rounded-full'></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<span className='sr-only'>Loading...</span>
		</div>
	);
};

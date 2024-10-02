import { Avatar } from "./Avatar";

export const AppBar = () => {
	return (
		<div className='border-b flex justify-between px-10 py-4'>
			<div className='flex flex-col justify-center'>Medium</div>
			<div>
				<Avatar
					name='harkirat'
					size={8}
				/>
			</div>
		</div>
	);
};

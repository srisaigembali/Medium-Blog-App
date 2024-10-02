import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

export const AppBar = () => {
	return (
		<div className='border-b flex justify-between px-10 py-4'>
			<Link to={"/blogs"}>
				<div className='flex flex-col justify-center'>Medium</div>
			</Link>
			<div>
				<Avatar
					name='harkirat'
					size={8}
				/>
			</div>
		</div>
	);
};

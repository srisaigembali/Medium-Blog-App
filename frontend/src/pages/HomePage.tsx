import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../atoms/AuthState";

export const HomePage = () => {
	const auth = useRecoilValue(authState);

	return (
		<div>
			<div className='border-b flex justify-between px-10 py-4'>
				<div className='flex flex-col justify-center'>
					<Link
						to={"/blogs"}
						className='flex'
					>
						<FontAwesomeIcon
							icon={faMedium}
							className='h-8'
						/>
						<p className='flex flex-col justify-center ml-4 text-lg font-medium'>Medium</p>
					</Link>
				</div>

				{auth !== "" ? (
					<div>
						<button
							type='button'
							className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-900 hover:text-white focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2'
						>
							Logout
						</button>
					</div>
				) : (
					<div>
						<Link to={"/signin"}>
							<button
								type='button'
								className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-900 hover:text-white focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2'
							>
								Login
							</button>
						</Link>
						<Link to={"/signup"}>
							<button
								type='button'
								className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-900 hover:text-white focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2'
							>
								Signup
							</button>
						</Link>
					</div>
				)}
			</div>
			<div className='mt-4 flex justify-between'>
				<div className='pt-24 pl-60'>
					<div className='text-8xl font-bold'>Human</div>
					<div className='text-8xl font-bold mb-14'>stories & ideas</div>
					<div className='text-2xl mb-14'>
						A place to read, write, and deepen your understanding
					</div>
					<Link to={auth === "" ? "/signin" : "/blogs"}>
						<button
							type='button'
							className='text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-10 py-2 me-2 mb-2'
						>
							Start Reading
						</button>
					</Link>
				</div>
				<img
					src='https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png'
					alt='homebackground'
					className='max-w-md'
				/>
			</div>
		</div>
	);
};

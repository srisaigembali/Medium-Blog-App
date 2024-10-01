import { Link } from "react-router-dom";
import { InputBox } from "./InputBox";
import { useState } from "react";
import { Button } from "./Button";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
	const [postInputs, setPostInputs] = useState({
		name: "",
		username: "",
		password: "",
	});

	return (
		<div className='h-screen flex justify-center flex-col'>
			<div className='flex justify-center'>
				<div>
					<div className='px-10'>
						<div className='text-3xl font-bold mb-1'>
							{type === "signup" ? "Create an account" : "Log into account"}
						</div>
						<div className='text-slate-500 mb-6 text-center'>
							{type === "signup" ? "Already have an account?" : "Don't have an account?"}
							<Link
								to={type === "signup" ? "/signin" : "/signup"}
								className='underline pl-2'
							>
								{type === "signup" ? "Login" : "signup"}
							</Link>
						</div>
					</div>
					<div>
						<InputBox
							label='Username'
							placeholder='Enter your username'
							onChange={(e) => {
								setPostInputs({
									...postInputs,
									name: e.target.value,
								});
							}}
						/>
						<InputBox
							label='Email'
							placeholder='m@example.com'
							onChange={(e) => {
								setPostInputs({
									...postInputs,
									username: e.target.value,
								});
							}}
						/>
						<InputBox
							label='Password'
							placeholder=''
							type='password'
							onChange={(e) => {
								setPostInputs({
									...postInputs,
									password: e.target.value,
								});
							}}
						/>
					</div>
					<div>
						<Button btnTxt={type === "signup" ? "Sign Up" : "Sign In"} />
					</div>
				</div>
			</div>
		</div>
	);
};

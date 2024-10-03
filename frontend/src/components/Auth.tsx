import { InputBox } from "./InputBox";
import { useState } from "react";
import { Button } from "./Button";
import { Header } from "./Header";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
	const [postInputs, setPostInputs] = useState({
		name: "",
		email: "",
		password: "",
	});

	const navigate = useNavigate();

	const sendRequest = async () => {
		try {
			const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type}`, postInputs);
			if (response.status === 200) toast.success(response.data.message);
			else toast.error(response.data.message);
			const token = response.data;
			localStorage.setItem("token", token.jwt);
			navigate("/blogs");
		} catch (error) {
			toast.error("Error while signing up");
		}
	};

	return (
		<div>
			<div className='h-screen flex justify-center flex-col'>
				<div className='flex justify-center'>
					<div>
						<div className='px-10'>
							{type === "signup" ? (
								<Header
									heading='Create an account'
									subheading='Already have an account?'
									to='/signin'
									linkText='Login'
								/>
							) : (
								<Header
									heading='Log into account'
									subheading="Don't have an account?"
									to='/signup'
									linkText='Signup'
								/>
							)}
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
										email: e.target.value,
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
							<Button
								btnTxt={type === "signup" ? "Sign Up" : "Sign In"}
								onclick={sendRequest}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

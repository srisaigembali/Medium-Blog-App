import axios from "axios";
import { AppBar } from "../components/AppBar";
import { BACKEND_URL } from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const Publish = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const navigate = useNavigate();

	const handlePublishBlog = async () => {
		const response = await axios.post(
			`${BACKEND_URL}/api/v1/blog`,
			{ title, content },
			{
				headers: {
					Authorization: "Bearer " + localStorage.getItem("token"),
				},
			}
		);
		if (response.status === 200) toast.success(response.data.message);
		else toast.error(response.data.message);
		navigate(`/blog/${response.data.id}`);
	};

	return (
		<div>
			<AppBar />
			<div className='flex justify-center'>
				<div className='max-w-screen-md w-full mt-4'>
					<input
						type='text'
						className='outline-none mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
						placeholder='Title'
						onChange={(e) => setTitle(e.target.value)}
					/>
					<textarea
						id='editor'
						rows={8}
						className='border border-gray-300 rounded-lg outline-none block w-full text-sm text-gray-800 bg-gray-50 border-1 px-3 py-2 focus:ring-blue-500 focus:border-blue-500'
						placeholder='Write an article...'
						required
						onChange={(e) => setContent(e.target.value)}
					></textarea>
					<button
						onClick={handlePublishBlog}
						type='submit'
						className='mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800'
					>
						Publish blog
					</button>
				</div>
			</div>
		</div>
	);
};

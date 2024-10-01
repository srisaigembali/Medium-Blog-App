import { ChangeEvent } from "react";

interface inputProps {
	label: string;
	placeholder: string;
	type?: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputBox = ({ label, placeholder, type, onChange }: inputProps) => {
	return (
		<div className='mb-4'>
			<label
				htmlFor={label}
				className='block mb-2 text-sm font-semibold text-gray-900'
			>
				{label}
			</label>
			<input
				type={type || "text"}
				id={label}
				className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
				placeholder={placeholder}
				required
				onChange={onChange}
			/>
		</div>
	);
};

import { Link } from "react-router-dom";

type headerProps = {
	heading: string;
	subheading: string;
	to: string;
	linkText: string;
};

export const Header = ({ heading, subheading, to, linkText }: headerProps) => {
	return (
		<div>
			<div className='text-3xl font-bold mb-1'>{heading}</div>
			<div className='text-slate-500 mb-6 text-center'>
				{subheading}
				<Link
					to={to}
					className='underline pl-2'
				>
					{linkText}
				</Link>
			</div>
		</div>
	);
};

import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";

export const Blogs = () => {
	return (
		<div>
			<AppBar />
			<div className='flex justify-center'>
				<div className='max-w-xl'>
					<BlogCard
						authorName={"Harkirat singh"}
						title={
							"How an ugly single page website makes $5000 a month without affiliate marketing"
						}
						content={
							"How an ugly single page website makes $5000 a month without affiliate marketing How an ugly single page website makes $5000 a month without affiliate marketing"
						}
						publishedDate={"Dec 1, 2026"}
					/>
					<BlogCard
						authorName={"Harkirat singh"}
						title={
							"How an ugly single page website makes $5000 a month without affiliate marketing"
						}
						content={
							"How an ugly single page website makes $5000 a month without affiliate marketing How an ugly single page website makes $5000 a month without affiliate marketing"
						}
						publishedDate={"Dec 1, 2026"}
					/>
					<BlogCard
						authorName={"Harkirat singh"}
						title={
							"How an ugly single page website makes $5000 a month without affiliate marketing"
						}
						content={
							"How an ugly single page website makes $5000 a month without affiliate marketing How an ugly single page website makes $5000 a month without affiliate marketing"
						}
						publishedDate={"Dec 1, 2026"}
					/>
				</div>
			</div>
		</div>
	);
};

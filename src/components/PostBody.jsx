
import { Link } from "react-router-dom";

export default function PostBody({ content, title, image }) {
	return (
		<div className="flex gap-4 ml-3">
			<div className="w-full">
				<h2 className="font-bold mb-2 text-2xl">
					<Link to={title} className="hover:underline">{title}</Link>
				</h2>
				<p className="line-clamp-3"><b>{content}</b></p>
			</div>
			<div className="w-[250px] h-[100px]">
				<img src={image} className="rounded w-full h-full object-cover object-center" />
			</div>
		</div>
	);
}
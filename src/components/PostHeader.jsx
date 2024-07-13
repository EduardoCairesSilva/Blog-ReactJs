import { Link } from "react-router-dom";

export default function PostHeader({ authorName, authorProfile, authorUsername, postDate }) {
    return (
        <div className="flex items-center gap-2">
            <img src={authorProfile}
                className="rounded-full w-10 h-10 object-cover object-top ml-3" />
            <Link to="/author/:username" className="underline">{authorName}</Link>
            <span>-</span>
            <span>{postDate}</span>
        </div>
    );
}
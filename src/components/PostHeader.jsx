export default function PostHeader() {
    return (
        <div className="flex items-center gap-2">
            <img src="/public/assets/joshua-kettle-7zF8bzGbqcU-unsplash.jpg"
                className="rounded-full w-12 h-12 object-cover object-top ml-3" />
            <a href="#" className="underline font-bold text-gray-500">Fulano de tal</a>
            <span className="font-bold text-gray-500"> - </span>
            <span className="font-bold text-gray-500">20/10/2023</span>
        </div>
    );
}
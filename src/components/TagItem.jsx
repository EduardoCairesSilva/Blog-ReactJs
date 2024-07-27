export default function TagItem({ name, href = '#' }) {
    return (
        <li className="bg-gray-200 hover:bg-gray-300 rounded dark:bg-slate-700 dark:text-white">
            <a className="py-2 px-4 inline-block" href={href}>{name}</a>
        </li>
    )
}
export default function LatestItem({ name, href = '#' }) {
    return (
        <li className="p-2">
            <a className="text-black dark:text-white" href={href}>{name}</a>
        </li>
    )
}
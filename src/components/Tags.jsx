export default function Tags() {
    const numbers = ['Javascript', 'PHP+LARAVEL', 'JS', 'Programação', 'Node.js'];
    const listItems = numbers.map((number) =>
        <li key={number.toString()} className="py-2 my-2 border-2 border-sky-400 rounded-md w-32 text-red-600 font-bold bg-black flex justify-center">
            <a href="#">{number}</a>
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

export default function Layout({children}) {
    return (
        <div className="flex py-20 px-10 col-span-10">
            {children}
        </div>
    );
}
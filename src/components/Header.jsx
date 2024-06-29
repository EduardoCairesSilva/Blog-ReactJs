export default function Header({ children, className }) {
    return (
        <Header className={className}>
            {children}
        </Header>
    );
}
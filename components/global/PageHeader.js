export default function PageHeader({ children }) {
    return (
        <h1 className="text-uppercase display-1">
            <span className="ff-imbue">Agustin Forero/</span><span className="ff-krona-one">{children}</span>
        </h1>
    )
}
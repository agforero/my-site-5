export default function PushLeft({ children }) {
    return (
        <>
            <div className="d-lg-block d-md-none d-sm-none d-none w-75">
                {children}
            </div>
            <div className="d-lg-none d-md-block d-sm-block d-block w-100">
                {children}
            </div>
        </>
    )
}
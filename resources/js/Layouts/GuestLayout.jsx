import { Link } from "@inertiajs/react";

export default function GuestLayout({ children }) {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <div className="container">
                    <Link className="navbar-brand" href="/">
                        Laravel React Starter
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarCollapse"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    href="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/register">
                                    Register
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/login">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main className="container">{children}</main>
        </>
    );
}

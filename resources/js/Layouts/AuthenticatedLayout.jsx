import React from "react";
import { Link } from "@inertiajs/react";

export default function AuthenticatedLayout({ children }) {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <div className="container">
                    <Link className="navbar-brand" href="/dashboard">
                        Dashboard
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
                        <span className="navbar-toggler-icon"></span>
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
                                    href="/dashboard"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/profile">
                                    Profile
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    href="/logout"
                                    as={"button"}
                                    method={"post"}
                                >
                                    Logout
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

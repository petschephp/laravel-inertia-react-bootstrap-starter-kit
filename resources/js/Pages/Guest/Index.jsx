import { Head, Link } from "@inertiajs/react";
import GuestLayout from "../../Layouts/GuestLayout.jsx";

export default function Index() {
    return (
        <>
            <GuestLayout>
                <Head title={"Home"} />
                <div className="bg-body-tertiary p-5 rounded mt-3">
                    <h1>Welcome</h1>
                    <p className="lead">Sample text here.</p>
                    <Link
                        className="btn btn-lg btn-primary"
                        href="/login"
                        role="button"
                    >
                        Login
                    </Link>
                </div>
            </GuestLayout>
        </>
    );
}

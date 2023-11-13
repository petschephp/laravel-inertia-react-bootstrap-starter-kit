import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post("/email/verification-notification");
    };

    return (
        <AuthenticatedLayout>
            <Head title="Email Verification" />
            <div className={"row"}>
                <div className={"col-md-6 mx-auto"}>
                    <div className="mb-4 text-sm">
                        Thanks for signing up! Before getting started, could you
                        verify your email address by clicking on the link we
                        just emailed to you? If you didn't receive the email, we
                        will gladly send you another.
                    </div>

                    {status === "verification-link-sent" && (
                        <div className="mb-4 text-success">
                            A new verification link has been sent to the email
                            address you provided during registration.
                        </div>
                    )}

                    <form onSubmit={submit}>
                        <div className="mt-4 flex items-center">
                            <PrimaryButton
                                className={"btn btn-primary"}
                                disabled={processing}
                            >
                                Resend Verification Email
                            </PrimaryButton>

                            <Link
                                href={"logout"}
                                method="post"
                                as="button"
                                className="btn"
                            >
                                Log Out
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

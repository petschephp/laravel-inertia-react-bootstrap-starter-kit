import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Fade } from "react-bootstrap";
import React, { useState } from "react";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const [openTransition, setOpenTransition] = useState(false);

    const user = usePage()?.props?.auth?.user;
    const $page = usePage();
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user?.name,
            email: user?.email,
        });

    const submit = (e) => {
        e.preventDefault();

        patch("profile");
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Profile Information
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className={
                            "form-control " +
                            ($page?.props?.errors?.name ? "is-invalid" : "")
                        }
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div className={"mt-4"}>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className={
                            "form-control " +
                            ($page?.props?.errors?.email ? "is-invalid" : "")
                        }
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 ">
                            Your email address is unverified.
                            <Link
                                href={"/email/verification-notification"}
                                method="post"
                                as="button"
                                className="btn btn-sm"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 text-sm text-success">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="mt-4 d-flex align-items-center">
                    <div className={"float-start"}>
                        <PrimaryButton disabled={processing}>
                            Save
                        </PrimaryButton>
                    </div>
                    <div className={"float-start px-3"}>
                        <Fade in={recentlySuccessful}>
                            <div
                                id="example-fade-text"
                                className={"align-middle"}
                            >
                                Saved.
                            </div>
                        </Fade>
                    </div>
                </div>
            </form>
        </section>
    );
}

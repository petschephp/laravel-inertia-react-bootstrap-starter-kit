import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm, usePage } from "@inertiajs/react";

export default function ResetPassword({ token, email }) {
    const $page = usePage();
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post("/reset-password");
    };

    return (
        <GuestLayout>
            <Head title="Reset Password" />
            <div className={"row"}>
                <div className={"col-md-6 mx-auto"}>
                    <form onSubmit={submit}>
                        <div>
                            <InputLabel
                                htmlFor="email"
                                value="Email"
                                className={"form-label"}
                            />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className={
                                    "form-control " +
                                    ($page?.props?.errors?.name
                                        ? "is-invalid"
                                        : "")
                                }
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className={
                                    "form-control " +
                                    ($page?.props?.errors?.password
                                        ? "is-invalid"
                                        : "")
                                }
                                autoComplete="new-password"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Confirm Password"
                            />

                            <TextInput
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className={"form-control"}
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value,
                                    )
                                }
                            />

                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>

                        <div className={"flex items-center justify-end mt-4"}>
                            <PrimaryButton
                                className="btn btn-primary"
                                disabled={processing}
                            >
                                Reset Password
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}

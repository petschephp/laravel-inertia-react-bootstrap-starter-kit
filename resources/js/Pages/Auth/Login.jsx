import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm, usePage } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const {
        data,
        setData,
        post,
        processing,
        errors: { email, password },
        reset,
    } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const $page = usePage();

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post("/login");
    };

    return (
        <GuestLayout>
            <Head title={"Log in"} />

            {status && (
                <div className={"mb-4 text-sm text-success"}>{status}</div>
            )}

            <div className={"row"}>
                <div className={"col-sm-6 mx-auto"}>
                    <form onSubmit={submit}>
                        <div className="">
                            <InputLabel
                                htmlFor={"email"}
                                value={"Email"}
                                className={"form-label"}
                            />

                            <TextInput
                                id={"email"}
                                type={"email"}
                                name={"email"}
                                value={data.email}
                                className={
                                    "form-control " +
                                    ($page?.props?.errors?.email
                                        ? "is-invalid"
                                        : "")
                                }
                                autoComplete={"username"}
                                isFocused={true}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />

                            <InputError message={email} className="mt-2" />
                        </div>
                        <div className="">
                            <InputLabel htmlFor="password" value="Password" />

                            <TextInput
                                id={"password"}
                                type={"password"}
                                name={"password"}
                                value={data.password}
                                className={
                                    "form-control " +
                                    ($page?.props?.errors?.password
                                        ? "is-invalid"
                                        : "")
                                }
                                autoComplete={"current-password"}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />

                            <InputError message={password} className={"mt-2"} />
                        </div>
                        <div className={"checkbox mb-3"}>
                            <div className="">
                                <label className="">
                                    <Checkbox
                                        name={"remember"}
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData(
                                                "remember",
                                                e.target.checked,
                                            )
                                        }
                                    />
                                    <span className={"ms-2"}>Remember me</span>
                                </label>
                            </div>
                            <div
                                className={"flex items-center justify-end mt-4"}
                            >
                                <PrimaryButton
                                    className={"btn btn-primary"}
                                    disabled={processing}
                                >
                                    Log in
                                </PrimaryButton>
                                {canResetPassword && (
                                    <Link
                                        href={"/forgot-password"}
                                        className={"mx-2"}
                                    >
                                        Forgot your password?
                                    </Link>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}

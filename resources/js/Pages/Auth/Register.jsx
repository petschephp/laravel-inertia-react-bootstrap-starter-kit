import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm, usePage } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const $page = usePage();

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post("/register");
    };

    return (
        <GuestLayout>
            <Head title={"Register"} />
            <div className={"row"}>
                <div className={"col-md-6 mx-auto"}>
                    <form onSubmit={submit}>
                        <div className="">
                            <InputLabel
                                htmlFor={"name"}
                                value={"Name"}
                                className={"form-label"}
                            />

                            <TextInput
                                id={"name"}
                                name={"name"}
                                value={data.name}
                                className={
                                    "form-control " +
                                    ($page?.props?.errors?.name
                                        ? "is-invalid"
                                        : "")
                                }
                                autoComplete={"name"}
                                isFocused={true}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.name}
                                className={"mt-2"}
                            />
                        </div>

                        <div className={"mt-4"}>
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
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.email}
                                className={"mt-2"}
                            />
                        </div>

                        <div className={"mt-4"}>
                            <InputLabel
                                htmlFor={"password"}
                                value={"Password"}
                                className={"form-label"}
                            />

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
                                autoComplete={"new-password"}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.password}
                                className={"mt-2"}
                            />
                        </div>

                        <div className={"mt-4"}>
                            <InputLabel
                                htmlFor={"password_confirmation"}
                                value={"Confirm Password"}
                                className={"form-label"}
                            />

                            <TextInput
                                id={"password_confirmation"}
                                type={"password"}
                                name={"password_confirmation"}
                                value={data.password_confirmation}
                                className={"form-control"}
                                autoComplete={"new-password"}
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value,
                                    )
                                }
                            />

                            <InputError
                                message={errors.password_confirmation}
                                className={"mt-2"}
                            />
                        </div>

                        <div className={"flex items-center justify-end mt-4"}>
                            <PrimaryButton
                                className={"btn btn-primary"}
                                disabled={processing}
                            >
                                Register
                            </PrimaryButton>
                            <Link href={"/login"} className={"mx-2"}>
                                Already registered?
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}

import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import { Head, useForm, usePage } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const $page = usePage();

    const submit = (e) => {
        e.preventDefault();

        post("/forgot-password");
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className="row">
                <div className={"col-md-6 mx-auto"}>
                    <div className="mb-4 text-sm text-gray-600">
                        Forgot your password? No problem. Just let us know your
                        email address and we will email you a password reset
                        link that will allow you to choose a new one.
                    </div>
                    {status && (
                        <div className="mb-4 text-sm text-success">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit}>
                        <div>
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className={
                                    "form-control " +
                                    ($page?.props?.errors?.email
                                        ? "is-invalid"
                                        : "")
                                }
                                isFocused={true}
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
                            <PrimaryButton
                                type={"submit"}
                                disabled={processing}
                            >
                                Email Password Reset Link
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}

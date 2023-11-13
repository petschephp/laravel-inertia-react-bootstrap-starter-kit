import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout>
            <Head title="Profile" />

            <div className="py-12">
                <div className="">
                    <div className="p-4 shadow">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className=""
                        />
                    </div>

                    <div className="p-4 mt-4 shadow">
                        <UpdatePasswordForm className="" />
                    </div>

                    <div className="p-4 mt-4 bg-white shadow">
                        <DeleteUserForm className="" />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

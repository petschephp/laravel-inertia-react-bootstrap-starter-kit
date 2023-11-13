import React, { useRef, useState } from "react";
import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";

import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { Button, Modal } from "react-bootstrap";

export default function DeleteUserForm({ className = "" }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: "",
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy("/profile", {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <section className={`${className}`}>
            <header>
                <h2 className="text-lg">Delete Account</h2>

                <p className="mt-1 text-sm">
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. Before deleting your account,
                    please download any data or information that you wish to
                    retain.
                </p>
            </header>

            <DangerButton onClick={confirmUserDeletion}>
                Delete Account
            </DangerButton>

            <Modal show={confirmingUserDeletion} onHide={closeModal} size="lg">
                <form onSubmit={deleteUser} className="p-6">
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {" "}
                            Are you sure you want to delete your account?
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className="mt-1 text-sm ">
                            Once your account is deleted, all of its resources
                            and data will be permanently deleted. Please enter
                            your password to confirm you would like to
                            permanently delete your account.
                        </p>

                        <div className="mt-6">
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                ref={passwordInput}
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                className="form-control"
                                isFocused
                                placeholder="Password"
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="default" onClick={closeModal}>
                            Close
                        </Button>
                        <DangerButton disabled={processing} type={"submit"}>
                            Delete Account
                        </DangerButton>
                    </Modal.Footer>
                </form>
            </Modal>
        </section>
    );
}

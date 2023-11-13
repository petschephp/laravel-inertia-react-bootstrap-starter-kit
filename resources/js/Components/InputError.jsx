export default function InputError({ message, className = "", ...props }) {
    return message ? (
        <p
            {...props}
            className={"text-sm text-red invalid-feedback " + className}
        >
            {message}
        </p>
    ) : null;
}

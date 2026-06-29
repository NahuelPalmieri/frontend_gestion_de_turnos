import Input from "./Input";

export default function FormField({
    label,
    type = "text",
    name,
    value,
    onChange,
    placeholder,
    required = false,
    error = ""
}) {
    return (
        <div className="form-field">

            {label && (
                <label htmlFor={name}>
                    {label}
                </label>
            )}

            <Input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />

            {error && (
                <small className="field-error">
                    {error}
                </small>
            )}

        </div>
    );
}
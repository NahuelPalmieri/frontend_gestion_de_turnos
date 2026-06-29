import "../../styles/input.css";

export default function Input({
    type = "text",
    placeholder,
    value,
    onChange,
    name,
    required = false,
    autoComplete = "off"
}) {
    return (
        <input
            className="input"
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            autoComplete={autoComplete}
        />
    );
}
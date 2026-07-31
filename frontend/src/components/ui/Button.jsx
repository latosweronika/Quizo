function Button({
    children,
    type = "button",
    onClick,
    className = "",
    disabled = false,
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            style={{ backgroundColor: "var(--primary)"}}
            className={`
                w-full rounded-lg px-4 py-3
                font-semibold text-white
                transition hover:opacity-90
                disabled:opacity-50
                disabled:cursor-not-allowed
                ${className}`}
        >
            {children}
        </button>
    )
}

export default Button;
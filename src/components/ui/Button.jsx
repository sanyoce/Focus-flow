export function Button({ variant, type, onClick, className, disabled, children }){
    const base = "px-4 py-2 rounded-lg transition bg-gray-300"

    const variants = {
        primary: "bg-purple-500 text-white hover:bg-purple-600",
        secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
        danger: "bg-red-500 text-white hover:bg-red-600"
    }

    const disabledStyle = disabled
        ? "opacity-50 cursor-not-allowed"
        : ""

    return(
        <button
            className={`${base} ${variants[variant]} ${disabledStyle} ${className || ""}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}
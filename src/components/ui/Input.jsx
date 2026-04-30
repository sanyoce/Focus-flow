export function Input({ label, type, value, placeholder, onChange, className, id }){

    const base = "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
    const baseForLabel = "text-sm text-gray-600 mb-1"

    return(
        <div className="flex flex-col gap-1">

            {label && (
                <label
                htmlFor={id}
                className={baseForLabel}
                >
                    {label}
                </label>
            )}

            <input 
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={`${base} ${className || ""}`}
                id={id}
            />
            
        </div>
    )

}
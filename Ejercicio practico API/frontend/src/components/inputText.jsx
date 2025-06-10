const InputText = ({ name, label, placeholder, type = "text", register, error }) => {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-800 mb-1"
      >
        {label}
      </label>
      <div>
        <input
  id={name}
  {...register(name, { required: `${label} es requerido` })}
  placeholder={placeholder}
  type={type}
  step={type === "number" ? "any" : undefined} // 👈 Solo se aplica si es de tipo number
  className={`
    block w-full rounded-lg border px-4 py-2 text-gray-900 shadow-sm
    transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
    ${error ? "border-red-500" : "border-gray-300"}
  `}
/>

        {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
      </div>
    </div>
  );
};

export default InputText;

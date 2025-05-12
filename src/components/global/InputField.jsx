

const InputField = ({ label, name, type = 'text', placeholder, value, onChange, isTextArea = false }) => {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={name} className="md:text-lg text-white font-medium">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={5}
          className="bg-[#2c2c2e] text-white rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="bg-[#2c2c2e] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
        />
      )}
    </div>
  );
};

export default InputField;

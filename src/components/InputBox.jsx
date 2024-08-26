export function InputBox({ label, placeholder, onChange }) {
    return (
      <div>
        <div className="text-sm font-medium text-left py-2">
          {label}
        </div>
        <input
          onChange={onChange}
          placeholder={placeholder}
          className="w-full p-2 border border-gray-300 rounded-lg text-base"
        />
      </div>
    );
  }
  
import { useState } from "react";
import {Eye, EyeOff} from "lucide-react";

function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}) {
    
  const [ showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div >
      {label && (
        <label className="mb-2 block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="
            w-full rounded-lg
            border border-slate-300
            px-4 py-3
            pr-12
            outline-none
            transition
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-200
          "
        />
        {isPassword && (
          <button type="button" 
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute inset-y-0 right-3 flex items-center text-slate-500 hover:text-slate-700">
            {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
          </button>
        )}
      </div>
    </div>
  );
}

export default Input;
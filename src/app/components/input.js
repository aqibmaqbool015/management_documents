import Image from "next/image";
import { useState } from "react";

const CustomInput = ({
  label,
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
  labelClass,
  icon,
  error,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const inputType =
    type === "password" ? (isPasswordVisible ? "text" : "password") : type;

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const image = {
    eyeOff: "/eye-off.svg",
    eye: "/eye.svg",
  };

  return (
    <div className="mt-[12px]">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <div className="relative">
        <input
          type={inputType}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`mt-1 block w-full px-10 py-3 shadow-sm placeholder-customDarkGray focus:outline-none 
                      focus:ring-indigo-500 focus:border-indigo-500 border border-[#CFCFCF] rounded-[8px]
                      ${error ? "border-red-500" : ""}`}
        />
        <Image
          width={10}
          height={10}
          src={icon}
          alt=""
          className="w-[20px] h-[20px] inline-block object-contain absolute left-3 top-4"
        />

        {type === "password" && (
          <Image
            width={10}
            height={10}
            src={isPasswordVisible ? image.eye : image.eyeOff}
            alt=""
            className="w-[20px] h-[20px] object-contain absolute right-3 top-4 cursor-pointer"
            onClick={togglePasswordVisibility}
          />
        )}
      </div>
      {error && <p className="text-customRed text-sm mt-1">{error}</p>}
    </div>
  );
};

export default CustomInput;

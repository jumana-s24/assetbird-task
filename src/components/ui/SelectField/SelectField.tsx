import React from "react";
import { useForm, UseFormRegister } from "react-hook-form";
import InfoIcon from "../InfoIcon/InfoIcon";

interface Props {
  label: string;
  name: string;
  options: string[];
  defaultValue?: string;
  required?: boolean;
  showInfoIcon?: boolean;
  tooltipText?: string;
  className?: string;
  register: UseFormRegister<any>;
  errors: any;
}

export const SelectField: React.FC<Props> = ({
  label,
  name,
  options,
  register,
  errors,
  required = false,
  showInfoIcon = false,
  tooltipText,
  defaultValue = "",
  className = "",
}) => {
  return (
    <div className={`${className} relative mr-4 mt-10 md:mt-0`}>
      <select
        {...register(name, { required })}
        id={name}
        defaultValue={defaultValue}
        className={`peer h-10 w-full border-b-2 border-gray-100 bg-white text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-500 ${
          errors[name] ? "border-red-500" : ""
        }`}
      >
        <option value="">
          {showInfoIcon && tooltipText && (
            <InfoIcon tooltipText={tooltipText} />
          )}
          {defaultValue}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label
        htmlFor={name}
        className="absolute left-0 -top-3.5 text-gray-400 text-xs transition-all duration-200 
        peer-placeholder-shown:top-2 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gray-400
        peer-focus:-top-3.5 peer-focus:text-xs"
      >
        {label}
      </label>
      <div className="absolute right-0 top-2">
        {showInfoIcon && tooltipText && <InfoIcon tooltipText={tooltipText} />}
      </div>
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};
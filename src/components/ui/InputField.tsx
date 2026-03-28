"use client";
import { IconType } from "react-icons";

type Props = {
  placeholder: string;
  register: any;
  name: string;
  icon: IconType;
  error?: any;
  type?: string;
};

export default function InputField({
  placeholder,
  register,
  name,
  icon: Icon,
  error,
  type = "text",
}: Props) {
  return (
    <div>
      <div
        className={`flex items-center gap-2 px-3 py-2 rounded-md border
        ${error ? "border-red-500" : "border-gray-600"}
        bg-transparent`}
      >
        <Icon className="text-gray-400 text-sm" />

        <input
          type={type}
          placeholder={placeholder}
          autoComplete="new-password"
          {...register(name)}
          className="w-full bg-transparent outline-none text-sm
          text-gray-900 dark:text-white
          placeholder-gray-500"
        />
      </div>

      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
}

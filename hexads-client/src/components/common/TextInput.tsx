import React from "react";

interface TextInputProps {
  label: string;
  placeHolder: string;
  callback: Function;
  mandatory: boolean;
  value: string | number;
  meta?: any;
  styles?: string;
  type?: string;
}

const TextInput = ({
  label,
  placeHolder,
  callback,
  mandatory,
  value,
  meta,
  styles,
  type = "text",
}: TextInputProps) => {
  return (
    <section className="flex flex-col items-start gap-3 w-full">
      <label htmlFor={label} className="text-black text-lg font-medium">
        {label} {mandatory && <span className="text-mandatory">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={(e) => {
          callback(e.target.value);
        }}
        className={`text-secondary pl-5 py-3 text-lg rounded-lg font-medium focus:outline-none border-[0.75px] border-gray-400 bg-primary placeholder:text-secondary w-full ${styles}`}
      />
      {meta && meta.touched && meta.error ? (
        <span className=" text-mandatory">{meta.error}</span>
      ) : null}
    </section>
  );
};

export default TextInput;

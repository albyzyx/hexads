import React from "react";

interface TextAreaProps {
  label: string;
  placeHolder: string;
  callback: Function;
  mandatory: boolean;
  value: string;
  meta: any;
}

const TextArea = ({
  label,
  placeHolder,
  callback,
  mandatory,
  value,
  meta,
}: TextAreaProps) => {
  return (
    <section className="flex flex-col items-start gap-5 w-full">
      <label htmlFor={label} className="text-black text-lg font-medium">
        {label} {mandatory && <span className="text-mandatory">*</span>}
      </label>
      <textarea
        placeholder={placeHolder}
        value={value}
        onChange={(e) => {
          callback(e.target.value);
        }}
        className="text-secondary pl-5 py-3 text-lg font-medium w-full min-h-[150px] focus:outline-none border-[0.75px] border-gray-400 rounded-xl bg-primary placeholder:text-secondary"
      />
      {meta.touched && meta.error ? (
        <span className=" text-mandatory">{meta.error}</span>
      ) : null}
    </section>
  );
};

export default TextArea;

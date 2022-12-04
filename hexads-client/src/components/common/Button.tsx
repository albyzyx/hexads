import React from "react";

const Button = ({
  children,
  onClick,
  styles,
  type,
}: {
  children: any;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  styles?: string;
  type: "button" | "submit" | "reset" | undefined;
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex items-center justify-center text-center bg-white text-accent border-[0.5px] hover:text-opacity-70 text-lg border-gray-300 rounded-md px-4 py-2 font-semibold ${styles}`}>
      {children}
    </button>
  );
};
export default Button;

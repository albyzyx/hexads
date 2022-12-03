import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className=" p-8 bg-primary border border-border border-opacity-20 rounded-3xl flex flex-col gap-2 items-center justify-between shadow-lg">
      {children}
    </section>
  );
};

export default Card;

import React from "react";

export default function Button({ children, ...buttonProps }) {
  return (
    <button
      className="py-1 px-4 rounded text-sm font-semibold leading-none text-white bg-purple-700 transition ease-in-out duration-300 hover:bg-purple-600"
      {...buttonProps}
    >
      {children}
    </button>
  );
}
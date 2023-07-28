import React from "react";

export default function Input(props: React.ComponentPropsWithoutRef<"input">) {
  return (
    <input
      {...props}
      className="rounded border border-gray-800 px-4 py-3 dark:text-gray-800"
      type="text"
    ></input>
  );
}

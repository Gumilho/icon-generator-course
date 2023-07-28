import React from "react";

export default function Button(
  props: React.ComponentPropsWithoutRef<"button">
) {
  return (
    <button
      className="rounded bg-blue-400 px-4 py-2 hover:bg-blue-500"
      {...props}
    >
      {props.children}
    </button>
  );
}

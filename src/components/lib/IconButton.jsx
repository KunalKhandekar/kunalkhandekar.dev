"use client";

import Tooltip from "./Tooltip";

export default function IconButton({
  children,
  tooltip = null,
  disabled = false,
  onClick, // optional
  type = "button", // prevents accidental form submissions
}) {
  return (
    <Tooltip content={tooltip}>
      <button
        type={type}
        className={`p-1.5 flex items-center justify-center rounded-md text-sm border-zinc-300 border dark:border-zinc-600 dark:hover:bg-zinc-900 hover:bg-zinc-200 ${
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
        }`}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    </Tooltip>
  );
}

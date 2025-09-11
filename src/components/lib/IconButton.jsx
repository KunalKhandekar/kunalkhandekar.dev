import Tooltip from "./Tooltip";

export default function IconButton({
  children,
  tooltip = null,
  disabled = false,
}) {
  return (
    <Tooltip content={tooltip}>
      <button
        className={`p-1.5 flex items-center justify-center rounded-md text-sm  border-zinc-300 border dark:border-zinc-600 dark:hover:bg-zinc-900 hover:bg-zinc-200 ${
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        disabled={disabled}
      >
        {children}
      </button>
    </Tooltip>
  );
}

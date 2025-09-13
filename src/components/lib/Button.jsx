import Tooltip from "./Tooltip";

export default function Button({ content, type = "outline", tooltip = null, classes='' }) {
  const buttonTypes = {
    outline: "border border-zinc-600",
    ghost: "",
  };

  return (
    <Tooltip content={tooltip}>
      <div
        className={`px-2.5 py-1.5 flex items-center justify-center rounded-md text-sm cursor-pointer ${buttonTypes[type]} dark:hover:bg-zinc-900 hover:bg-zinc-200 text-zinc-950 dark:text-white ${classes} transition-colors`}
      >
        {content}
      </div>
    </Tooltip>
  );
}

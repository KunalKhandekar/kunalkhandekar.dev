
export default function Button({ content, type = "outline" }) {
    const buttonTypes = {
        outline: "border border-zinc-600",
        ghost: "",
    };

  return (
    <div className={`px-2.5 py-0.5 flex items-center justify-center rounded-md text-sm cursor-pointer ${buttonTypes[type]} hover:bg-zinc-900`}>
      {content}
    </div>
  );
}

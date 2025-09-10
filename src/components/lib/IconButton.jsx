
export default function IconButton({ children }) {

  return (
    <div className={`p-1.5 flex items-center justify-center rounded-md text-sm cursor-pointer border border-zinc-600 hover:bg-zinc-900`}>
      {children}
    </div>
  );
}

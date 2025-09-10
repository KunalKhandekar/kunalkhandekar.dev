import Image from "next/image";

function Avatar({ url }) {
  return (
    <div className="size-9 rounded-full overflow-hidden cursor-pointer">
      <Image
        alt="Logo"
        src={url}
        width="100"
        height="100"
        className=""
      />
    </div>
  );
}

export default Avatar;

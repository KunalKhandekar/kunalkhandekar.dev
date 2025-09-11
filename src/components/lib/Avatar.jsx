import Image from "next/image";

function Avatar({ url, size='size-9' }) {
  return (
    <div
      className={`${size} rounded-full overflow-hidden cursor-pointer`}
    >
      <Image
        alt="Logo"
        src={url}
        width={100}
        height={100}
        className="object-cover w-full h-full"
      />
    </div>
  );
}

export default Avatar;

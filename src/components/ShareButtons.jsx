import Link from "next/link";
import { FaWhatsapp, FaLinkedin, FaX } from "react-icons/fa6";

export default function ShareButtons({ projectUrl }) {
  const shareText = encodeURIComponent("Check out this project 🚀");
  const encodedUrl = encodeURIComponent(projectUrl);

  return (
    <div className="flex items-center justify-end gap-2 max-[800px]:justify-end w-full ">
      <p className="text-sm">Share: </p>

      {/* WhatsApp */}
      <Link
        href={`https://api.whatsapp.com/send?text=${shareText}%20${encodedUrl}`}
        target="_blank"
      >
        <button className="rounded-full p-2 border dark:border-zinc-600 border-zinc-300 hover:bg-green-500 hover:text-white transition cursor-pointer">
          <FaWhatsapp className="size-4" />
        </button>
      </Link>

      {/* LinkedIn */}
      <Link
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
      >
        <button className="rounded-full p-2 border dark:border-zinc-600 border-zinc-300 hover:bg-blue-600 hover:text-white transition cursor-pointer">
          <FaLinkedin className="size-4" />
        </button>
      </Link>

      {/* X (Twitter) */}
      <Link
        href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodedUrl}`}
        target="_blank"
      >
        <button className="rounded-full p-2 border dark:border-zinc-600 border-zinc-300 hover:bg-black hover:text-white transition cursor-pointer">
          <FaX className="size-4" />
        </button>
      </Link>
    </div>
  );
}

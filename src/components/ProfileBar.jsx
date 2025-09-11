import Avatar from "./lib/Avatar";
import { MdOutlineLocationOn } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function ProfileBar() {
  return (
    <div className="flex-1">
      {/* Profile Bar */}
      <div className="flex flex-col justify-center items-center p-3 pr-4 w-full">
        <Avatar url={"/profile.jpg"} size="size-72" />

        {/* Name & Bio */}
        <div className="pt-4">
          <div className="flex flex-col justify-center">
            <h3 className="font-semibold text-2xl">Sahil Khandekar</h3>
            <span className="font-thin text-lg dark:text-zinc-200 text-zinc-950">
              Full Stack Developer
            </span>
          </div>

          <div className="py-3 border-b dark:border-zinc-800 border-zinc-300 text-md">
            <p>
              👋 Hello there, fellow tech enthusiasts and curious minds! 🚀, I'm
              Sahil (Kunal), a student with a deep passion for coding and all
              things tech-related.
            </p>
          </div>
        </div>

        <div className="py-3 border-b dark:border-zinc-800 border-zinc-300 w-full text-sm flex flex-col justify-center items-start gap-2">
          <div className="flex justify-center items-center gap-1">
            <MdOutlineLocationOn className="size-4" />
            Mumbai, India
          </div>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}


function SocialLinks() {
  const socials = [
    {
      name: "Email",
      icon: <TfiEmail className="size-4" />,
      userName: "kunalkhandekar.dev@gmail.com",
      link: "mailto:kunalkhandekar.dev@gmail.com",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="size-4" />,
      userName: "KunalKhandekar",
      link: "https://github.com/KunalKhandekar",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="size-4" />,
      userName: "in/khandekarsahil",
      link: "https://www.linkedin.com/in/khandekarsahil",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="size-4" />,
      userName: "kunalkhandekar.dev",
      link: "https://instagram.com/kunalkhandekar.dev",
    },
    {
      name: "Discord",
      icon: <FaDiscord className="size-4" />,
      userName: "kunalkhandekar",
      link: "https://discord.com/users/1352502889490288653",
    },
  ];

  return (
    <>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-1  cursor-pointer"
        >
          {social.icon}
          <p className="hover:text-blue-400">{social.userName}</p>
        </Link>
      ))}
    </>
  );
}




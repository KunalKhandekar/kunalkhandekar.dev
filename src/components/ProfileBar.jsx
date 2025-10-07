import Avatar from "./lib/Avatar";
import { MdOutlineLocationOn } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { mainDescription, role } from "../utils/constant";

export default function ProfileBar() {
  return (
    <div className="flex-1 max-[800px]:p-4 max-[800px]:dark:bg-[#0D1117] max-[800px]:bg-white max-[800px]:border-zinc-300 max-[800px]:border-b max-[800px]:dark:border-zinc-800">
      {/* Profile Bar */}
      <div className="flex flex-col justify-center items-center p-3 pr-4 w-full max-[800px]:flex-row max-[800px]:gap-3 max-[800px]:p-0 max-[800px]:justify-start">
        <Avatar url={"/profile.jpg"} size="size-72 max-[980px]:size-60 max-[800px]:size-24" />

        {/* Name & Bio */}
        <div className="pt-4 max-[800px]:pt-0">
          <div className="flex flex-col justify-center">
            <h3 className="font-semibold text-2xl max-[980px]:text-xl max-[800px]:text-lg">Sahil Khandekar</h3>
            <span className="font-thin text-lg max-[980px]:text-md max-[800px]:text-sm dark:text-zinc-200 text-zinc-950">
              {role}
            </span>
          </div>

          <div className="py-3 max-[800px]:hidden border-b dark:border-zinc-800 border-zinc-300 text-md max-[980px]:text-sm">
            <p>
              {mainDescription}
            </p>
          </div>
        </div>

        <div className="py-3 border-b max-[800px]:hidden dark:border-zinc-800 border-zinc-300 w-full text-sm flex flex-col justify-center items-start gap-2">
          <div className="flex justify-center items-center gap-1">
            <MdOutlineLocationOn className="size-4" />
            Mumbai, India
          </div>
          <SocialLinks />
        </div>
      </div>

      <div className="py-3 max-[800px]:block hidden text-md max-[980px]:text-sm ">
            <p>
              {mainDescription}
            </p>
          </div>
    </div>
  );
}


export function SocialLinks() {
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
          className="flex items-center gap-1 cursor-pointer"
        >
          {social.icon}
          <p className="hover:text-blue-400">{social.userName}</p>
        </Link>
      ))}
    </>
  );
}




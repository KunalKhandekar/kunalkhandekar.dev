"use client";
import { MdOutlineLocationOn } from "react-icons/md";
import Avatar from "./lib/Avatar";
import SocialLinks from "../components/SocialLinks"

export function ProfileBarUI({ profileData }) {
  return (
    <div className="flex-1 max-[800px]:p-4 max-[800px]:dark:bg-[#0D1117] max-[800px]:bg-white max-[800px]:border-zinc-300 max-[800px]:border-b max-[800px]:dark:border-zinc-800">
      <div className="flex flex-col justify-center items-center p-3 pr-4 w-full max-[800px]:flex-row max-[800px]:gap-3 max-[800px]:p-0 max-[800px]:justify-start">
        <Avatar
          url={profileData?.profilePic || "/profile.jpeg"}
          size="size-72 max-[980px]:size-60 max-[800px]:size-24"
        />
        <div className="pt-4 max-[800px]:pt-0">
          <div className="flex flex-col justify-center">
            <h3 className="font-semibold text-2xl max-[980px]:text-xl max-[800px]:text-lg">
              {profileData?.name || "Sahil Khandekar"}
            </h3>
            <span className="font-thin text-lg max-[980px]:text-md max-[800px]:text-sm dark:text-zinc-200 text-zinc-950">
              {profileData?.role || "Full Stack Developer"}
            </span>
          </div>
          <div className="py-3 max-[800px]:hidden border-b dark:border-zinc-800 border-zinc-300 text-md max-[980px]:text-sm">
            <p>
              {profileData?.miniDescription ||
                "Full-stack developer with a deep passion for computer science."}
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
      <div className="py-3 max-[800px]:block hidden text-md max-[980px]:text-sm">
        <p>
          {profileData?.miniDescription ||
            "Full-stack developer with a deep passion for computer science."}
        </p>
      </div>
    </div>
  );
}



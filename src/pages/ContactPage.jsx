"use client";

import ContactForm from "../components/ContactForm";
import ProfileBar, { SocialLinks } from "../components/ProfileBar";

export default function ContactPage() {
  return (
    <div className="max-w-7xl m-auto p-6 flex gap-5 max-[800px]:flex-col max-[800px]:p-0 max-[800px]:bg-[#F6F8FA] max-[800px]:dark:bg-[#010409]">
      <ProfileBar />
      <div className="space-y-3 hidden max-[800px]:block flex-1 max-[800px]:p-4 max-[800px]:dark:bg-[#0D1117] max-[800px]:bg-white max-[800px]:border-zinc-300 max-[800px]:border-b max-[800px]:dark:border-zinc-800">
        <h3 className="text-md font-semibold dark:text-[#ffffff]">
          Connect with me:
        </h3>
        <div className="border-b border-zinc-600 "></div>
        <div className="space-y-1 flex flex-col text-sm">
          <SocialLinks />
        </div>
      </div>
      <div className="flex-3 max-w-4xl">
        <div className="border-zinc-300 max-[800px]:rounded-none rounded-lg border dark:border-zinc-600 max-[800px]:border-zinc-300 max-[800px]:border-t max-[800px]:border-b max-[800px]:dark:border-zinc-800  p-6 dark:bg-[#0D1117] bg-white max-[800px]:border-l-0 max-[800px]:border-r-0">
          <p className="text-xs font-mono text-shadow-initial pb-3">
            SahilKhandekar<span className="px-0.5 text-gray-400">/</span>Contact
            <span className="text-gray-400">.js</span>
          </p>

          {/* Contact form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

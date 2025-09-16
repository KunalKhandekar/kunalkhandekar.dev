"use client";

import { FaExternalLinkAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import Button from "./lib/Button";
import { useState } from "react";
import { IoBookOutline } from "react-icons/io5";
import { RiScreenshotLine } from "react-icons/ri";
import ReadmeRenderer from "./ReadmeRenderer";
import ScreenshotLibrary from "./ScreenshotLibrary";

export default function ProjectContent() {
  const [activeTab, setActiveTab] = useState("readme");
  const markdown = `
<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=F75C7E&center=true&vCenter=true&width=435&lines=Full-Stack+Developer;MERN+Stack+Enthusiast;Open+Source+Contributor;Student+%7C+Mumbai%2C+India" alt="Typing SVG" />
</div>

## 👋 Welcome to My Digital Space

Hey there! I'm **Sahil Khandekar**, a passionate full-stack developer and student from Mumbai, India. This portfolio showcases my journey in web development, featuring projects built with modern technologies and a deep love for creating user-friendly solutions.

Currently pursuing **BSc. in Information Technology** at University of Mumbai while mastering the **MERN stack** through hands-on projects and continuous learning. I believe in learning by building, and this portfolio is a testament to that philosophy.

## 💻 Tech Skills

### **Frontend Technologies**
- **React.js** & **Next.js** - Building dynamic, server-side rendered applications
- **JavaScript** (ES6+) - Modern JavaScript for interactive experiences  
- **TailwindCSS** - Utility-first CSS framework for rapid UI development
- **Redux** & **React Router** - State management and routing solutions
- **HTML5** & **CSS3** - Semantic markup and responsive design

### **Backend Technologies**
- **Node.js** & **Express.js** - Server-side JavaScript development
- **MongoDB** - NoSQL database for scalable applications
- **JWT** - Secure authentication and authorization
- **Socket.io** - Real-time communication features

### **Tools & Deployment**
- **Git** & **GitHub** - Version control and collaboration
- **Postman** - API testing and development
- **Netlify** & **GitHub Pages** - Static site deployment
- **Vite** - Fast build tool for modern web projects


## 🌟 Current Focus

Building **Storage App** - a comprehensive cloud file storage application that demonstrates advanced MERN stack capabilities, including file upload, user authentication, and real-time features.

---

<div align="center">
  
## 🚀 Let's Build Something Amazing Together!

Whether you're looking for a developer to bring your ideas to life, want to collaborate on exciting projects, or just want to chat about technology - I'm always excited to connect!

[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-Visit_My_Website-FF6B6B?style=for-the-badge&logoColor=white)](https://kunalkhandekar.dev)
[![Email](https://img.shields.io/badge/📧_Email-Let's_Connect-4ECDC4?style=for-the-badge&logoColor=white)](mailto:kunalkhandekar.dev@gmail.com)
[![LinkedIn](https://img.shields.io/badge/💼_LinkedIn-Professional_Network-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/sahil-khandekar-dev)
[![GitHub](https://img.shields.io/badge/👨‍💻_GitHub-View_Projects-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/KunalKhandekar)

</div>

---

<div align="center">
  <p><em>"Code is like humor. When you have to explain it, it's bad."</em></p>
  <p>💜 Built with passion in Mumbai, India</p>
</div>
`;
  return (
    <section className="flex-6 space-y-5 dark:bg-[#0D1117] bg-white max-[800px]:border dark:border-zinc-800 border-zinc-300 max-[800px]:border-x-0 max-[800px]:space-y-0">
      <div className="flex justify-end gap-3 w-full items-center max-[800px]:p-4 max-[800px]:justify-between">
        <div className="p-2 py-1 cursor-pointer hover:bg-blue-700 rounded-lg bg-blue-600 font-semibold text-white flex items-center gap-2">
          <FaExternalLinkAlt className="size-4" />
          View Demo
        </div>
        <div className="p-2 py-1 cursor-pointer hover:bg-green-700 rounded-lg bg-green-600 font-semibold text-white flex items-center gap-2">
          <FaCode className="size-5" />
          Source code
        </div>
      </div>

      <div className="border border-zinc-300 dark:border-zinc-600 rounded-lg max-[800px]:border-x-0 max-[800px]:rounded-none">
        {/* Tabs */}
        <div className="p-3 pb-0 flex gap-2 border-b border-zinc-300 dark:border-zinc-600 sticky top-0 bg-[#151B23] rounded-t-lg z-[9999] max-[800px]:rounded-none">
          <div
            className={`relative pb-1.5 ${
              activeTab === "readme"
                ? "font-semibold text-zinc-900 dark:text-white border-b-2 border-orange-500"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            }`}
            onClick={() => setActiveTab("readme")}
          >
            <Button
              type="ghost"
              content={
                <span className="flex justify-center items-center gap-1.5 capitalize">
                  <IoBookOutline className="size-4" />
                  Readme
                </span>
              }
              classes="dark:hover:!bg-[#21262d] hover:!bg-zinc-200"
            />
          </div>
          <div
            className={`relative pb-1.5  ${
              activeTab === "screenshot"
                ? "font-semibold text-zinc-900 dark:text-white border-b-2 border-orange-500"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            }`}
            onClick={() => setActiveTab("screenshot")}
          >
            <Button
              type="ghost"
              content={
                <span className="flex justify-center items-center gap-1.5 capitalize">
                  <RiScreenshotLine className="size-4" /> Screenshots
                </span>
              }
              classes="dark:hover:!bg-[#21262d] hover:!bg-zinc-200"
            />
          </div>
        </div>

        {activeTab === "readme" ? (
          <div className="prose dark:prose-invert max-w-none h-full p-6 ">
            <ReadmeRenderer content={markdown} />
          </div>
        ) : (
          <div className="p-6"><ScreenshotLibrary /></div>
        )}
      </div>
    </section>
  );
}

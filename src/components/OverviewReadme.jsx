import ReadmeRenderer from "./ReadmeRenderer";

export default function OverviewReadme() {
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
    <div className="border-zinc-300 max-[800px]:rounded-none rounded-lg border dark:border-zinc-600 max-[800px]:border-zinc-300 max-[800px]:border-t max-[800px]:border-b max-[800px]:dark:border-zinc-800  p-6 dark:bg-[#0D1117] bg-white max-[800px]:border-l-0 max-[800px]:border-r-0">
      <p className="text-xs font-mono text-shadow-initial pb-3">
        KunalKhandekar<span className="px-0.5 text-gray-400">/</span>README
        <span className="text-gray-400">.md</span>
      </p>
      <div className="prose dark:prose-invert max-w-none h-full">
        <ReadmeRenderer content={markdown} />
      </div>
    </div>
  );
}

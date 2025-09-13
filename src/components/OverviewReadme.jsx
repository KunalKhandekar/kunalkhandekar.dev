// "use client";

import ReadmeRenderer from "./ReadmeRenderer";

export default function OverviewReadme() {
  const markdown = `<h1 align="center">Hi 👋, I'm Sahil Khandekar</h1>
<h3 align="center">Full Stack Developer | MERN | Next.js | Open Source Enthusiast</h3>

---

## 💫 About Me
- 🎓 Passionate **Full Stack Developer** and student from **Mumbai, India**  
- 🌱 Currently exploring **Backend Development (MERN + Next.js)**  
- 💡 Interested in **Web Development, Open Source, and Scalable Systems**  
- 📫 Reach me at **kunalkhandekar.dev@gmail.com**  

---

## 🌐 Connect with Me  
[![Portfolio](https://img.shields.io/badge/Portfolio-%23000000.svg?logo=vercel&logoColor=white)](https://kunalkhandekar.dev) 
[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/khandekarsahil) 
[![Twitter](https://img.shields.io/badge/Twitter-%23000000.svg?logo=X&logoColor=white)](https://x.com/_kunalkhandekar) 
[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://instagram.com/kunalkhandekar.dev) 

---

## 🛠️ Tech Stack  
![C](https://img.shields.io/badge/C-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white) 
![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 
![React](https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) 
![Node.js](https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) 
![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white) 
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) 
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) 
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io) 
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) 
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white) 
![Git](https://img.shields.io/badge/Git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) 
![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

---

## 📊 GitHub Stats  
![](https://github-readme-streak-stats.herokuapp.com/?user=KunalKhandekar&theme=radical&hide_border=false)
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

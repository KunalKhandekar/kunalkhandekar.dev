// OVERVIEW SECTION
export const role = "Full Stack Developer";

export const BASE_URL = "http://localhost:3000";

export const mainDescription =
  "🌱 Learning, building, and growing — one line of code at a time.";

export const overviewReadmeContent = `<div align="center">
  <img src="/images/readme-typing.svg" alt="Typing SVG" />
</div>

<h2 align="center">Welcome to My Digital Space</h2>

Hey there! I'm **Sahil Khandekar**, a passionate **Full-Stack Developer** and **BSc IT student** from **Mumbai, India**.  
This portfolio is a reflection of my journey in crafting impactful, scalable, and user-centric web applications using modern technologies.

> I believe in *learning by building* — every project here represents my dedication to solving real-world problems through clean code and thoughtful design.


## 💻 Tech Stack

<div align="center">

### Frontend  
![React](/images/Frontend.svg)

### Backend  
![NodeJS](/images/Backend.svg)

### Tools & DevOps  
![Tools](/images/Tools&DevOps.svg)

### Cloud & Integrations  
![Cloud](/images/Cloud&Integration.svg)

</div>

> Continuously exploring new tools, frameworks, and best practices to improve scalability, maintainability, and developer experience.

## 🌟 Current Focus

I'm currently focused on building a **cloud storage platform** that demonstrates advanced **MERN stack** capabilities:
- Secure **authentication**
- **File uploads & management**
- **Scalable architecture** with modular design
- **Optimized UI/UX** for seamless experience

This project reflects my interest in **system design**, **API architecture**, and **modern cloud solutions**.


## 🧭 About Me

- Pursuing **BSc in Information Technology** at the **University of Mumbai**  
- Strong foundation in **MERN stack development** with hands-on project experience  
- Focused on writing **clean, maintainable**, and **scalable code**  
- Passionate about **problem-solving**, **system design**, and **developer experience**  
- Open to **collaborations**, **internships**, and **open-source** contributions  
- Constantly learning and applying **modern web technologies** through practical projects  

I enjoy building projects that solve meaningful problems — combining technical precision with thoughtful design.


## 📬 Let’s Connect

<div align="center">
  <table>
    <tr>
      <td align="center">
        <a href="https://kunalkhandekar.dev" target="_blank">
          <img src="/images/www.png" width="48" /><br/>
          <sub><b>Portfolio</b></sub>
        </a>
      </td>
      <td align="center">
        <a href="mailto:kunalkhandekar.dev@gmail.com" target="_blank">
          <img src="/images/gmail.png" width="48" /><br/>
          <sub><b>Email</b></sub>
        </a>
      </td>
      <td align="center">
        <a href="https://linkedin.com/in/sahil-khandekar-dev" target="_blank">
          <img src="/images/linkedin.png" width="48" /><br/>
          <sub><b>LinkedIn</b></sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/KunalKhandekar" target="_blank">
          <img src="/images/github.png" width="48" /><br/>
          <sub><b>GitHub</b></sub>
        </a>
      </td>
    </tr>
  </table>
</div>

<div align="center">
  <p><em>"The best way to predict the future is to build it." – Alan Kay</em></p>
  <p>Built with passion and purpose in Mumbai, India</p>
</div>
`;

export const pinnedContent = [
  {
    type: "repo",
    title: "Storage App",
    description:
      "A full-stack cloud storage application that allows users to upload, manage, and share files securely with authentication, role-based access control, and file preview support. Built for scalability and optimized for both personal and team usage.",
    stack: "MERN",
    readTime: null,
    link: "/projects/storageApp",
  },
  {
    type: "repo",
    title: "Portfolio Website",
    description:
      "A personal portfolio website designed to highlight projects, skills, and achievements. Includes responsive design, smooth animations, SEO optimization, and dark/light mode support to provide an engaging and professional online presence. ce platform with product catalog, advanced search and filtering, shopping cart, order management, and secure payment gateway integration. Built with modular components to support future features like coupons and wishlists.",
    stack: "Next.js / TailwindCSS",
    readTime: null,
    link: "/projects/Portfolio-Website",
  },
  {
    type: "repo",
    title: "Chat Application",
    description:
      "A real-time chat web application with features like private messaging, group chats, typing indicators, seen/unseen message tracking, and file sharing. Integrated with Socket.IO for instant updates and MongoDB for message persistence.",
    stack: "MERN + Socket.io",
    readTime: null,
    link: "/projects/Chat-Application",
  },
  {
    type: "repo",
    title: "E-commerce Platform",
    description:
      "A scalable e-commerce platform with product catalog, advanced search and filtering, shopping cart, order management, and secure payment gateway integration. Built with modular components to support future features like coupons and wishlists.",
    stack: "React / Node.js / MongoDB",
    readTime: null,
    link: "/projects/E-commerce-Platform",
  },
  {
    type: "blog",
    title:
      "How to Actually Finish Your Side Projects: A Developer’s Guide to Going from Idea to Done",
    description:
      "Learn how I turn side project ideas into finished products with my simple 7-step framework, making it easier for developers like me to actually complete their projects.",
    stack: null,
    readTime: "6 min read",
    link: "https://medium.com/@kunalkhandekar.dev/how-to-actually-finish-your-side-projects-a-developers-guide-to-going-from-idea-to-done-abfdf2d4925f",
  },
];

// PROJECT SECTION
export const projectListings = [
  {
    title: "Storage App",
    navLink: "Storage-App",
    description:
      "A full-stack cloud storage application that allows users to upload, manage, and share their files securely. Built with React + Vite + TailwindCSS (Client) and Node.js + Express + MongoDB + Redis (Server) with AWS S3 cloud storage and Google Drive Import functionality.",
    stack: "MERN + AWS",
    liveLink: "under-developement",
    gitHubLink: "https://github.com/KunalKhandekar/Storage-App",
    image: "/projects/StorageApp.png",
    languages: ["tailwind", "next", "react", "node"],
  },
  {
    title: "TalkAtive",
    navLink: "TalkAtive",
    description:
      "TalkAtive is a dynamic real-time chat application built with the MERN stack, empowering users to connect and engage in seamless conversations. It offers a user-friendly interface, secure authentication, robust chat functionality, and real-time messaging through WebSockets.",
    stack: "React + Node.js",
    liveLink: "https://chat-talkative.vercel.app",
    gitHubLink: "https://github.com/KunalKhandekar/talkAtive",
    image: "/projects/talkAtive.png",
    languages: [
      "html",
      "css",
      "javascript",
      "react",
      "nodejs",
      "mongodb",
      "express",
    ],
  },
];

export const projectDetails = [
  {
    name: "TalkAtive",
    navLink: "TalkAtive",
    description:
      "TalkAtive is a dynamic real-time chat application built with the MERN stack, empowering users to connect and engage in seamless conversations. It offers a user-friendly interface, secure authentication, robust chat functionality, and real-time messaging through WebSockets. ",
    tags: [
  { id: 1, topic: "real-time-chat" },
  { id: 2, topic: "mern-stack" },
  { id: 3, topic: "websockets" },
  { id: 4, topic: "socket-io" },
  { id: 5, topic: "authentication" },
  { id: 6, topic: "media-sharing" },
  { id: 7, topic: "react" },
  { id: 8, topic: "expressjs" },
  { id: 9, topic: "mongodb" },
  { id: 10, topic: "zustand" },
    ],
    readmeContent: `# TalkAtive: Real-time Chat Web Application

**TalkAtive** is a dynamic real-time chat application built with the MERN stack, empowering users to connect and engage in seamless conversations. It offers a user-friendly interface, secure authentication, robust chat functionality, and real-time messaging through WebSockets.

### Features

* **Real-time Messaging:** Utilizes WebSockets for instant and smooth message delivery, ensuring conversations flow uninterrupted.
* **Secure User Authentication:** Provides login and registration functionalities to manage user access with robust security measures.
* **Multiple Media Sharing:** Users can share Images/Videos directly.
* **User Presence:** Displays online users and users currently typing messages, enhancing communication visibility.
* **Responsive Interface:** Adapts seamlessly across various screen sizes, delivering an optimal user experience on any device.


### Technologies Used

**Frontend:**

* **React:** For building interactive UI components
* **Zustand:** For lightweight and scalable state management
* **DaisyUI:** Tailwind CSS component library for efficient UI development
* **React Router Dom:** For elegant navigation and routing
* **Axios:** For making HTTP requests to backend APIs
* **js-cookie:** For managing cookies in the browser
* **File-Saver:** For enabling users to save files locally
* **React Hot Toast:** For displaying customizable notification toasts
* **React Icons:** For incorporating a collection of popular icons
* **Moment.js:** For flexible date and time formatting/manipulation
* **Socket.IO Client:** For real-time communication
* **React Cookies:** Additional cookie management for React

**Backend:**

* **Express.js:** For building a robust server-side application
* **Mongoose:** For efficient MongoDB interaction and data management
* **bcrypt:** For secure password hashing
* **jsonwebtoken:** For generating JSON Web Tokens (JWTs) for authentication
* **cookie-parser:** For parsing cookies from HTTP requests
* **cors:** For enabling Cross-Origin Resource Sharing (CORS)
* **dotenv:** For managing environment variables
* **moment:** For flexible date and time formatting/manipulation
* **nodemailer:** For sending emails
* **otp-generator:** For generating one-time passwords (OTPs)
* **socket.io:** For real-time communication

`,
    images: [
  "https://raw.githubusercontent.com/KunalKhandekar/TalkAtive/main/docs/Screenshots/Login.png",
  "https://raw.githubusercontent.com/KunalKhandekar/TalkAtive/main/docs/Screenshots/Register.png",
  "https://raw.githubusercontent.com/KunalKhandekar/TalkAtive/main/docs/Screenshots/Chat.png",
  "https://raw.githubusercontent.com/KunalKhandekar/TalkAtive/main/docs/Screenshots/Search.png",
  "https://raw.githubusercontent.com/KunalKhandekar/TalkAtive/main/docs/Screenshots/Update.png",
],
    gitHubLink: "https://github.com/KunalKhandekar/talkAtive",
    liveLink: "https://chat-talkative.vercel.app",
    developmentSummary: [
  {
    id: 1,
    title: "Framework & Libraries",
    value: "React (Vite) frontend; Node.js, Express.js backend",
  },
  {
    id: 2,
    title: "State & Realtime",
    value: "Zustand for state management, Socket.IO for real-time communication",
  },
  {
    id: 3,
    title: "Database & Auth",
    value: "MongoDB with Mongoose, JWT Authentication, Secure Cookies",
  },
],
    languagesUsed: [
      { name: "JavaScript", percent: 98.9, color: "bg-yellow-300" },
      { name: "Other", percent: 1.1, color: "bg-white" },
    ],
  },
  {
    name: "Storage App",
    navLink: "Storage-App",
    description:
      "A secure and scalable cloud storage web application built with the MERN stack. Supports file uploads, sharing, and management using AWS S3 and Google Drive integration, with authentication, role-based access, and an admin dashboard.",
    tags: [
      { id: 1, topic: "cloud-storage" },
      { id: 2, topic: "mern-stack" },
      { id: 3, topic: "file-upload" },
      { id: 4, topic: "file-sharing" },
      { id: 5, topic: "aws-s3" },
      { id: 6, topic: "google-drive-api" },
      { id: 7, topic: "authentication" },
      { id: 8, topic: "admin-dashboard" },
      { id: 9, topic: "nodejs" },
      { id: 10, topic: "react" },
    ],
    readmeContent: `# 🚀 Storage App

A **full-stack cloud storage platform** that lets users securely upload, manage, and share files — with **AWS S3 integration** and **Google Drive import** support.  
Built using **React + Vite + TailwindCSS (Frontend)** and **Node.js + Express + MongoDB + Redis (Backend)**.


## ✨ Features

### 🔐 Authentication & Security
- Login with **Email/Password**, **Google**, or **GitHub**.
- OTP-based verification for secure signups.
- Encrypted passwords (bcrypt) and signed cookies.
- Helmet, CORS, and sanitization for enhanced protection.
- Rate Limiting and Redis-based session control.

### 📂 File Management
- Upload files (PDF, Images, Videos, Docs, etc.) with real-time progress.
- Stored securely in **AWS S3**.
- Grid/List view with search, rename, delete (soft/hard), and restore.
- File details: size, type, modified date, etc.
- Real-time storage usage and quota tracking.

### ☁️ Cloud Storage & Import
- **AWS S3 + CloudFront CDN** for global and fast delivery.
- **Google Drive Import** — fetch and save Drive files directly.
- Batch imports with metadata preservation.

### 🏷️ Sharing & Permissions
- Share files via email or public links.
- Role-based access control (Viewer / Editor).
- Manage “Shared by Me” and “Shared with Me” files.
- Real-time updates and activity tracking.

### ⚙️ Settings & Customization
- Update profile, password, and manage sessions.
- View used and available storage.
- Logout, disable, or delete account.

### 🛠️ Admin Dashboard
- User management: view, filter, edit, or delete users.
- Role management (User, Manager, Admin, SuperAdmin).
- File management with directory view.
- Soft & hard delete recovery system.
- Real-time tracking of online users.


## ⚡ Tech Stack

| Category | Technologies |
|-----------|--------------|
| **Frontend** | React, Vite, TailwindCSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Redis |
| **Cloud Storage** | AWS S3, CloudFront CDN |
| **Integrations** | Google Drive API, OAuth (Google & GitHub) |



## 🔗 Project Links

- **Frontend:** React + Vite + TailwindCSS  
- **Backend:** Node.js + Express + MongoDB  
- **GitHub Repository:** [KunalKhandekar/Storage-App](https://github.com/KunalKhandekar/Storage-App)

`,
    images: [
      "https://raw.githubusercontent.com/KunalKhandekar/Storage-App/main/docs/ScreenShots/Login%20%26%20Register/Login.png",
      "https://raw.githubusercontent.com/KunalKhandekar/Storage-App/main/docs/ScreenShots/Login%20%26%20Register/Register.png",
      "https://raw.githubusercontent.com/KunalKhandekar/Storage-App/main/docs/ScreenShots/Login%20%26%20Register/opt.png",
      "https://raw.githubusercontent.com/KunalKhandekar/Storage-App/main/docs/ScreenShots/HomePage/HomePage.png",
      "https://raw.githubusercontent.com/KunalKhandekar/Storage-App/main/docs/ScreenShots/HomePage/UploadProgress.png",
      "https://raw.githubusercontent.com/KunalKhandekar/Storage-App/main/docs/ScreenShots/HomePage/GridView.png",
      "https://raw.githubusercontent.com/KunalKhandekar/Storage-App/main/docs/ScreenShots/HomePage/Details%20Modal.png",
      "https://raw.githubusercontent.com/KunalKhandekar/Storage-App/main/docs/ScreenShots/HomePage/Dropdowm.png",
      "https://raw.githubusercontent.com/KunalKhandekar/Storage-App/main/docs/ScreenShots/Settings/Settings-1.png",
      "https://raw.githubusercontent.com/KunalKhandekar/Storage-App/main/docs/ScreenShots/Settings/Settings-2.png",
      "https://raw.githubusercontent.com/KunalKhandekar/Storage-App/main/docs/ScreenShots/Settings/Settings-3.png",
      "https://raw.githubusercontent.com/KunalKhandekar/Storage-App/main/docs/ScreenShots/Share/Share-by-link.png",
      "https://raw.githubusercontent.com/KunalKhandekar/Storage-App/main/docs/ScreenShots/Share/Share-by-email.png",
      "https://raw.githubusercontent.com/KunalKhandekar/Storage-App/main/docs/ScreenShots/Share/SharedWith.png",
      "https://raw.githubusercontent.com/KunalKhandekar/Storage-App/main/docs/ScreenShots/Share/Dashboard.png",
      "https://raw.githubusercontent.com/KunalKhandekar/Storage-App/main/docs/ScreenShots/Share/by-me.png",
      "https://raw.githubusercontent.com/KunalKhandekar/Storage-App/main/docs/ScreenShots/Share/with-me.png",
      "https://raw.githubusercontent.com/KunalKhandekar/Storage-App/main/docs/ScreenShots/Share/Permission.png",
      "https://raw.githubusercontent.com/KunalKhandekar/Storage-App/main/docs/ScreenShots/Admin/Dashboard.png",
      "https://raw.githubusercontent.com/KunalKhandekar/Storage-App/main/docs/ScreenShots/Admin/Online-User.png",
      "https://raw.githubusercontent.com/KunalKhandekar/Storage-App/main/docs/ScreenShots/Admin/Hard-Soft%20Delete.png",
      "https://raw.githubusercontent.com/KunalKhandekar/Storage-App/main/docs/ScreenShots/Admin/Single%20User%20view.png",
      "https://raw.githubusercontent.com/KunalKhandekar/Storage-App/main/docs/ScreenShots/GoogleDrive/SelectFiles.png",
      "https://raw.githubusercontent.com/KunalKhandekar/Storage-App/main/docs/ScreenShots/GoogleDrive/ImportProgress.png",
      "https://raw.githubusercontent.com/KunalKhandekar/Storage-App/main/docs/ScreenShots/GoogleDrive/ImportSuccess.png",
    ],
    gitHubLink: "https://github.com/KunalKhandekar/Storage-App",
    liveLink: "underdevelopment",
    developmentSummary: [
      {
        id: 1,
        title: "Framework & Library",
        value: "React, Vite frontend; Node.js, Express backend",
      },
      {
        id: 2,
        title: "Styling & UI",
        value: "TailwindCSS, responsive, modern design",
      },
      {
        id: 3,
        title: "Backend & API",
        value: "MongoDB, Redis, AWS S3, Google Drive, OAuth",
      },
    ],
    languagesUsed: [
      { name: "JavaScript", percent: 90.2, color: "bg-yellow-300" },
      { name: "CSS", percent: 4.8, color: "bg-purple-700" },
    ],
  },
];

export const languages = [
  { value: "all", label: "All" },
  { value: "javascript", label: "JavaScript" },
  { value: "html", label: "HTML" },
  { value: "typescript", label: "TypeScript" },
  { value: "css", label: "CSS" },
  { value: "tailwind", label: "Tailwind CSS" },
  { value: "react", label: "React.js" },
  { value: "node", label: "Node.js" },
];

// ACHIEVEMENTS SECTION
export const achievements = [
  {
    _id: "1",
    companyLogo: "/postman_badge.png",
    title: "Postman API Fundamental Badge",
    timeLine: "Nov 2024",
    descriptionTitle: "Description",
    descriptionPoints: [
      "This badge was awarded for demonstrating proficiency with APIs and Postman by completing foundational tasks in Postman and passing all tests with a submitted Postman Collection",
    ],
    images: ["/achievements/postman.png"],
  },
  {
    _id: "2",
    companyLogo: "/technovate_logo.jpeg",
    title: "Technovate 24-Hour Hackathon",
    company: "Technovate",
    timeLine: "Nov 2024",
    descriptionTitle: "Project",
    descriptionPoints: [
      "Collaborated in a multidisciplinary team to design and deliver a working MVP within 24 hours.",
      "Developed frontend UI components using React.",
      "Integrated backend APIs using Node.js and Express.js.",
    ],
    images: ["/achievements/technovate_certificate.png"],
  },
  {
    _id: "3",
    companyLogo: "/lala_rajpatrai_college.jpeg",
    title: "Technotronix - Code quiz",
    timeLine: "Sep 2024",
    location: "Mumbai, Maharashtra, India · On-site",
    descriptionTitle: "Description",
    descriptionPoints: [
      "Awarded 1st place in an intercollegiate coding quiz covering HTML, C++, and SQL.",
      "Demonstrated strong conceptual knowledge and fast problem-solving under timed conditions.",
    ],
    images: [
      "/achievements/technotronix_certificate.jpeg",
      "/achievements/1756384996106.jpeg",
    ],
  },
];

// EXPERIENCE SECTION
export const experiences = [
  {
    _id: "1",
    companyLogo: "/quick_gick_logo.jpeg",
    title: "Full Stack Developer",
    location: "Remote",
    timeLine: "Sep 2024 - Dec 2024",
    isCurrent: false,
    keyAchievements: [
      "Designed and developed responsive web and mobile applications using modern frameworks",
      "Implemented clean, efficient full-stack solutions with comprehensive documentation",
      "Collaborated with cross-functional teams to deliver seamless user experiences",
      "Built scalable server-side logic with robust database integration and API connectivity",
    ],
    technologiesUsed: [
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
    ],
  },
];

// BLOGS SECTION
export const blogs = [
  {
    _id: "1",
    title:
      "How to Actually Finish Your Side Projects: A Developer’s Guide to Going from Idea to Done",
    excerpt:
      "Learn how I turn side project ideas into finished products with my simple 7-step framework, making it easier for developers like me to actually complete their projects.",
    date: "Sep 14, 2025",
    readTime: "6 min read",
    category: "Project Management",
    mediumLink:
      "https://medium.com/@kunalkhandekar.dev/how-to-actually-finish-your-side-projects-a-developers-guide-to-going-from-idea-to-done-abfdf2d4925f",
  },
];

// CONSISTENCY SECTION
export const tweetIds = [
  "1969207571513790545",
  "1968749376181789116",
  "1968384891558805563",
  "1968307469647757641",
  "1967645650499285309",
  "1967499850435756251",
];

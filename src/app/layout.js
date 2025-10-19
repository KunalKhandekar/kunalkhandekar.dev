import { ThemeProvider } from "next-themes";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "../components/Header.jsx";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Overview | Sahil Khandekar",
    template: "%s | Sahil Khandekar",
  },
  description:
    "Sahil Khandekar — Full-stack developer specializing in modern web applications, React, Node.js, and digital experiences.",
  keywords: [
    "Sahil Khandekar",
    "Sahil Portfolio",
    "Full Stack Developer",
    "Web Developer",
    "MERN Developer",
    "React Developer",
    "Node.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Sahil Khandekar" }],
  creator: "Sahil Khandekar",
  publisher: "Sahil Khandekar",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  openGraph: {
    title: "Sahil Khandekar — Full-stack Developer Portfolio",
    description:
      "Showcasing projects, skills, and experiences of Sahil Khandekar — crafting modern web applications using React, Node.js, and the MERN stack.",
    siteName: "Sahil Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Sahil Khandekar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Khandekar — Full-stack Developer Portfolio",
    description:
      "Discover projects and skills of Sahil Khandekar, a Full-stack web developer specializing in React, Node.js, and MERN stack apps.",
    creator: "@_kunalkhandekar",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased dark:bg-[#0D1117] bg-white relative">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

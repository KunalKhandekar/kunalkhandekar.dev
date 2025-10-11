import { ThemeProvider } from "next-themes";
import Header from "../components/Header.jsx";
import "./globals.css";

export const metadata = {
  title: {
    default: "Overview | Sahil Khandekar",
    template: "%s | Sahil Khandekar",
  },
  description: "Personal portfolio of Sahil Khandekar — Full-stack developer crafting modern web applications and digital experiences.",
   keywords: [
    "Sahil Portfolio",
    "Sahil Khandekar",
    "Web Developer",
    "Full Stack Developer",
    "MERN Developer",
    "Portfolio",
    "Kunal Khandekar",
    "React Developer",
    "Node.js Developer",
  ],
  authors: [{ name: "Sahil Khandekar" }],
  creator: "Sahil Khandekar",
  openGraph: {
    title: "Sahil Khandekar — Developer Portfolio",
    description:
      "Showcasing web development projects, UI/UX work, and technical skills of Sahil Khandekar.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    siteName: "Sahil Portfolio",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased dark:bg-[#0D1117] bg-white relative">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

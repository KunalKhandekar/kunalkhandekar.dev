import { ThemeProvider } from "next-themes";
import Header from "../components/Header.jsx";
import "./globals.css";

export const metadata = {
  title: "Sahil Khandekar",
  description: "Developer Personal Portfolio",
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

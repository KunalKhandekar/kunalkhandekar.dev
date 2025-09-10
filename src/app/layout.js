import Header from "@/components/Header";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-github",
});

export const metadata = {
  title: "Sahil Khandekar",
  description: "Developer Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={`antialiased max-w-7xl m-auto`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

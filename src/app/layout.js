import "./globals.css";


export const metadata = {
  title: "Sahil Khandekar",
  description: "Developer Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

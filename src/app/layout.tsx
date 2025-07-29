import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ELRAPiZ",
  description: "Rafael Labrado Pizarro (elrapiz) portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`text-slate-900 bg-gray-50 ${figtree.className} antialiased dark:text-gray-50 dark:bg-gray-900`}>
        <ThemeProvider
          attribute={"class"}
          defaultTheme={"system"}
          enableSystem
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

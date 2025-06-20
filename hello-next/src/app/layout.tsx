import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'My Portfolio',
  description: 'Built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-dark text-white">
        <nav className="bg-dark p-4 shadow mb-4">
          <div className="flex gap-4">
            <Link href="/" className="text-white hover:underline">Home</Link>
            <Link href="/about" className="text-white hover:underline">About</Link>
            <Link href="/projects" className="text-white hover:underline">Projects</Link>
            <Link href="/contact" className="text-white hover:underline">Contact</Link>
          </div>
        </nav>

        <main className="min-h-[80vh]">{children}</main>

        <footer className="text-center text-sm text-white py-4 border-t">
          &copy; {new Date().getFullYear()} My Portfolio. Built with Next.js.
        </footer>
      </body>
    </html>
  );
}
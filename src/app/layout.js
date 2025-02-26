"use client";
import localFont from "next/font/local";
import "./globals.css";
import { usePathname } from 'next/navigation';
import { metadata } from "./metadata";
import Sidebar from "./components/sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/login' || pathname === '/signup' || pathname === '/forgot' || pathname === '/otp' ||
    pathname === '/new-password' || pathname === '/signup' || pathname === '/';

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className={`min-h-screen  ${!isAuthPage ? 'md:flex' : ''}`}>
          {!isAuthPage && (
            <div className="overflow-y-auto">
              <Sidebar />
            </div>
          )}
          <div className={`flex-1`}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
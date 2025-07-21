import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/Layout/Sidebar";
import Navbar from "@/components/Layout/Navbar";
import ProfileDrawer from "@/components/Layout/ProfileDrawer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Credential Manager",
  description: "Next.js Admin Dashboard with Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans">
        <div className="flex h-screen">
          {/* Sidebar */}
          <Sidebar />
          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            <Navbar />
            <main className="flex-1 p-4 md:p-6 overflow-auto">{children}</main>
          </div>
          {/* <ProfileDrawer /> */}
        </div>
      </body>
    </html>
  );
}

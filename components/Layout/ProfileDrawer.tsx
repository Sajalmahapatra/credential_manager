"use client";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import Link from "next/link";
import { useState, useRef } from "react";

export default function ProfileDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLElement | any>(null);

  useOutsideClick(drawerRef, () => setIsOpen(false), isOpen);

  return (
    <div className="relative" ref={drawerRef}>
      <button className="flex items-center p-2 hover:bg-gray-200 rounded-full" onClick={() => setIsOpen(!isOpen)}>
        <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </button>
      <div className={`absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 ${isOpen ? "block" : "hidden"}`}>
        <div className="flex items-center space-x-2">
          <img src="/profile.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-semibold">Admin User</p>
            <p className="text-sm text-gray-600">admin@example.com</p>
          </div>
        </div>
        <hr className="my-2" />
        <Link href="/profile" className="block p-2 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>
          View Profile
        </Link>
        <Link href="#" className="block p-2 hover:bg-gray-100 rounded" onClick={() => setIsOpen(false)}>
          Logout
        </Link>
      </div>
    </div>
  );
}

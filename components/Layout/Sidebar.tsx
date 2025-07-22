"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MenuIcon from "../Icons/MenuIcon";
import HomeIcon from "../Icons/HomeIcon";
import ProfileIcon from "../Icons/ProfileIcon";
import DocumentIcon from "../Icons/DocumentIcon";
import SettingIcon from "../Icons/SettingIcon";
import CredentialIcon from "../Icons/CredentialIcon";
import LogoIcon from "../Icons/LogoIcon";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: HomeIcon,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: ProfileIcon,
    },
    {
      name: "Documents",
      path: "/documents",
      icon: DocumentIcon,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: SettingIcon,
    },
    {
      name: "Credential",
      path: "/credential",
      icon: CredentialIcon,
    },
  ];

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      <button className="md:hidden p-4 text-gray-800 flex items-start" onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon />
      </button>
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white flex flex-col transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 z-50 md:static md:w-64 py-4 px-4`}
      >
        <div className="px-2 flex items-center justify-center border rounded-xl border-gray-600 shadow-sm shadow-gray-500 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
          <LogoIcon className="h-auto text-white" />
          <h1 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-slate-200 to-white animate-shimmer">Credential Manager</h1>
        </div>

        <nav className="flex-1 mt-10">
          <ul className="space-y-2 p-2">
            {menuItems.map(({ name, path, icon: Icon }) => (
              <li key={name}>
                <Link href={path} className={`flex items-center p-2 rounded hover:bg-gray-700 ${pathname === path ? "bg-gray-700" : ""}`} onClick={() => setIsOpen(false)}>
                  <Icon />
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Overlay for mobile when sidebar is open */}
      {isOpen && <div className="fixed inset-0 bg-black/50 md:hidden" onClick={() => setIsOpen(false)}></div>}
    </>
  );
}

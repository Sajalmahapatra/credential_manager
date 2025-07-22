"use client";
import ProfileDrawer from "@/components/Layout/ProfileDrawer";

export default function Navbar() {
  return (
    <div className="bg-white shadow-lg border-b border-gray-300 p-5 flex justify-between items-center">
      <div className="flex-1 max-w-md">
        <input type="text" placeholder="Search..." className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <ProfileDrawer />
    </div>
  );
}

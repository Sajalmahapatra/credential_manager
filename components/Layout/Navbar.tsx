"use client";
export default function Navbar() {
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <div className="flex-1 max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

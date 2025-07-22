import HomeIcon from "@/components/Icons/HomeIcon";
import SadFaceIcon from "@/components/Icons/SadFaceIcon";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      {/* Sad Face Icon */}
      <SadFaceIcon />
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-2">This page could not be found.</p>
      <Link href="/" className="mt-4 inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
        <HomeIcon />
        Go Home
      </Link>
    </div>
  );
}

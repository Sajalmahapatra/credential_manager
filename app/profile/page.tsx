"use client";
import { usePathname } from "next/navigation";
import React from "react";
// export const metadata = {
//   title: "Profile Page",
// };
const Page = () => {
    const pageName = usePathname().split("/").pop();
  return <div>page- {pageName}</div>;
};

export default Page;

"use client";
import { usePathname } from 'next/navigation';
import React from 'react'

const Page = () => {
    const pageName = usePathname().split("/").pop();
  return <div>page- {pageName}</div>;
};

export default Page
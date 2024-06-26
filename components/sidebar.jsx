"use client";

import News from "@/shared/news";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

function RightSidebar() {
  const { data: session, status } = useSession();

  return (
    <div className="hidden bg-white rounded-md z-10 shadow-md lg:flex flex-col">
      <div className="relative w-full">
        <Image
          className="w-full h-24"
          src="/banner.webp"
          alt="cover photo"
          width={80}
          height={80}
        />
        <Image
          className="w-16 h-16 rounded-full absolute -bottom-7 right-28"
          src="/image-10.png"
          alt="profile photo"
          width={40}
          height={40}
        />
      </div>
      <div className="flex flex-col justify-center pt-8">
        <p className="text-center text-black">Sajadh s</p>
        <p className="text-center text-black">{session?.user?.email}</p>
      </div>
      <div className="flex flex-col justify-start pt-8 px-8">
        <div className="w-full flex justify-between">
          <p className="text-sm text-gray-800">Post impressions - </p>
          <p className="text-sm text-blue-400">55</p>
        </div>
        <div className="w-full flex justify-between">
          <p className="text-sm text-gray-800">Job Posts - </p>
          <p className="text-sm text-blue-400">5</p>
        </div>
        <div className="w-full flex justify-between">
          <p className="text-sm text-gray-800">Credit - </p>
          <p className="text-sm text-blue-400">16</p>
        </div>
      </div>
    </div>
  );
}

function LeftSidebar() {
  return (
    <div className="hidden bg-white rounded-md px-4 z-10 shadow-md lg:flex flex-col">
      <News />
    </div>
  );
}

export { RightSidebar, LeftSidebar };

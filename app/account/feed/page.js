"use client";

import React from "react";
import AccountNavbar from "@/components/AccountNavbar";
import { LeftSidebar, RightSidebar } from "@/components/sidebar";
import FeedBar from "@/components/Feed";

function Feed() {
  return (
    <div className="bg-[#e5e7eb]">
      <AccountNavbar />
      <div className="pt-24 lg:px-40 grid lg:grid-cols-4 gap-8">
        <div className="">
          <RightSidebar />
        </div>
        <div className="lg:col-span-2">
          <FeedBar />
        </div>
        <div className="">
          <LeftSidebar />
        </div>
      </div>
    </div>
  );
}
export default Feed;

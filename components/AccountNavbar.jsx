import Image from "next/image";
import React from "react";
import { signOut } from "next-auth/react";
import {
  BellTwoTone,
  DisconnectOutlined,
  HomeFilled,
  MessageFilled,
  NotificationFilled,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import AvatarDropdown from "./avatarDropdown";

const AccountNavbar = () => {
  return (
    <div className="w-full bg-white fixed z-50 mx-auto grid grid-cols-2 justify-evenly items-center px-3 lg:px-32">
      <div className="flex gap-4 items-center">
        <Image
          className=""
          src="/logo.webp"
          alt="logo"
          width={50}
          height={50}
        />
        <input
          className="w-[300px] h-10 px-3 outline-none rounded-md text-gray-800 bg-[#edf3f8]"
          placeholder="search"
          type="text"
        />
      </div>
      <div className="flex justify-between items-center">
        <span className="flex flex-col gap-1 text-gray-600 items-center text-sm cursor-pointer">
          <HomeFilled className="text-base" />
          <p className="">Feed</p>
        </span>
        <span className="flex flex-col gap-1 text-gray-600 items-center text-sm cursor-pointer">
          <UsergroupAddOutlined className="text-base" />
          <p className="">Connections</p>
        </span>
        <span className="flex flex-col gap-1 text-gray-600 items-center text-sm cursor-pointer">
          <DisconnectOutlined className="text-base" />
          <p className="">Jobs</p>
        </span>
        <span className="flex flex-col gap-1 text-gray-600 items-center text-sm cursor-pointer">
          <MessageFilled className="text-base" />
          <p className="">Message</p>
        </span>
        <span className="flex flex-col gap-1 text-gray-600 items-center text-sm cursor-pointer">
          <BellTwoTone className="text-base" />
          <p className="">Notifications</p>
        </span>
        <AvatarDropdown />
      </div>
    </div>
  );
};

export default AccountNavbar;

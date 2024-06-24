"use client";

import {
  CloseCircleTwoTone,
  CloseOutlined,
  MenuOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Menu from "./menu";
import { signOut, useSession } from "next-auth/react";
import AvatarDropdown from "./avatarDropdown";

export default function Navbar() {
  const router = useRouter();
  const [isToggle, setIstoggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { data: session, status } = useSession();
  const [isUser, setIsuser] = useState(false);

  useEffect(() => {
    console.log(session);
    if (session && status === "authenticated") {
      setIsuser(true);
    }
    if (!session && status === "unauthenticated") {
      setIsuser(false);
    }
  }, [session]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const open = () => {
    setIstoggle(!isToggle);
  };

  return (
    <>
      <div
        className={`${scrolled && "bg-white"} w-full mx-auto flex items-center justify-between px-3 lg:px-10 pt-5 fixed z-50`}
      >
        <div className="flex justify-between gap-12 items-center">
          <div className="flex justify-start items-center">
            <Image
              className=""
              src="/logo.webp"
              width={50}
              height={50}
              alt="logo"
            />
          </div>
          <div className="flex justify-end items-center">
            <div className="hidden lg:flex gap-4 font-medium text-lg text-black">
              <p className="text-sm cursor-pointer">Find-jobs</p>
              <p className="text-sm cursor-pointer">About</p>
              <p className="text-sm cursor-pointer">Contact</p>
              <p className="text-sm cursor-pointer">FAQ</p>
              <p className="text-sm cursor-pointer">👑 Premium</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex gap-5 justify-end">
          {isUser && <AvatarDropdown />}
          <button
            className={`${isUser && session?.role === "candidate" ? "flex" : "hidden"} bg-transparent text-blue-600 px-3 py-2 text-sm cursor-pointer rounded-xl`}
          >
            Upload your Cv
          </button>
          <button
            onClick={() => router.push("/authenticate/register")}
            className={`${isUser && "hidden"} bg-blue-100 text-blue-600 px-3 py-2 text-sm cursor-pointer rounded-xl hover:text-white hover:bg-blue-600 transition-colors duration-400`}
          >
            Login/Register
          </button>
          <button
            className={`${isUser && session?.role === "candidate" && "hidden"} bg-blue-600 text-white px-3 py-2 text-sm cursor-pointer rounded-xl hover:bg-blue-800 transition-colors duration-400`}
          >
            Post a Job
          </button>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className={`${!isUser && "hidden"} bg-blue-600 text-white px-3 py-2 text-sm cursor-pointer rounded-xl hover:bg-blue-800 transition-colors duration-400`}
          >
            Logout
          </button>
        </div>
        <div className="flex lg:hidden gap-4 justify-end">
          <UserOutlined className="" />
          <MenuOutlined onClick={open} className={`${isToggle && "hidden"}`} />
          <CloseOutlined
            onClick={open}
            className={`${!isToggle && "hidden"}`}
          />
        </div>
      </div>
      {isToggle && <Menu />}
    </>
  );
}

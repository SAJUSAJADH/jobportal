"use client";
import React, { FC, useState } from "react";
import facebookSvg from "@/images/Facebook.svg";
import twitterSvg from "@/images/Twitter.svg";
import googleSvg from "@/images/Google.svg";
import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Input from "@/shared/Input";
import ButtonPrimary from "@/shared/ButtonPrimary";
import toast from "react-hot-toast";

const loginSocials = [
  {
    name: "Continue with Facebook",
    href: "#",
    icon: facebookSvg,
  },
  {
    name: "Continue with Twitter",
    href: "#",
    icon: twitterSvg,
  },
  {
    name: "Continue with Google",
    href: "#",
    icon: googleSvg,
  },
];

const PageLogin = ({}) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data: session, status } = useSession();
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const res = await signIn("credentials", {
        username: email,
        password: password,
        redirect: false,
      });
      console.log(res);
      if (res.error) {
        console.log(error);
        return;
      } else {
        const profile = await session?.profile;
        !profile
          ? router.push("/account/profile_creation")
          : router.push("/account/feed");
      }
    } catch (error) {
      toast.error("incorrect username or password");
      console.log(error);
    }
  }

  const HandlepasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <div className={`nc-PageLogin`}>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Login
        </h2>
        <div className="max-w-md mx-auto space-y-6">
          <div className="grid gap-3">
            {loginSocials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
              >
                <Image
                  className="flex-shrink-0"
                  src={item.icon}
                  alt={item.name}
                />
                <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                  {item.name}
                </h3>
              </a>
            ))}
          </div>
          {/* OR */}
          <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div>
          {/* FORM */}
          <form className="grid grid-cols-1 gap-6" action="#" method="post">
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email address
              </span>
              <Input
                type="email"
                placeholder="example@example.com"
                className="mt-1 outline-none"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
                <Link href="/login" className="text-sm underline font-medium">
                  Forgot password?
                </Link>
              </span>
              <span className="relative">
                <Input
                  type={`${passwordVisibility ? "text" : "password"}`}
                  className="mt-1 outline-none"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <Image
                  onClick={HandlepasswordVisibility}
                  src={`${passwordVisibility ? "/icons7.png" : "/icons8.png"} `}
                  alt="hide password"
                  width={15}
                  height={15}
                  className="absolute right-3 top-1/3 cursor-pointer"
                />
              </span>
            </label>
            <ButtonPrimary
              className="bg-blue-600"
              type="submit"
              onClick={handleLogin}
            >
              Continue
            </ButtonPrimary>
          </form>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            New user? {` `}
            <Link
              href="/authenticate/register"
              className="font-semibold underline"
            >
              Create an account
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageLogin;

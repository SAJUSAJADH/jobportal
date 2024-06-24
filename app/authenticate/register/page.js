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
import Select from "@/shared/select";
import toast from "react-hot-toast";
import { LoadingOutlined } from "@ant-design/icons";

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

const PageSignUp = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const { data: session, status } = useSession();
  const router = useRouter();
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [warning, setWarning] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true)
    try {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\\[\]{}\-_=+|:;'",.<>?/]).{8,}$/;

      if (!passwordRegex.test(password)) {
        setWarning(true);
        return;
      }
      const response = await fetch("/api/register", {
        cache: "no-store",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await response.json();
      console.log(data);
      
      if(data?.message.includes("User Created")){
        const res = await signIn("credentials", {
          username: email,
          password: password,
          redirect: false,
        });
        console.log(res);
        if (res.error) {
          setIsLoading(false)
          console.log(error);
          return;
        } else {
          setIsLoading(false)
          if(session?.role === 'employer'){
            router.push("/account/feed")
          }else{
            router.push("/account/profile_creation")
          }
         
        }
      }
    } catch (error) {
      setIsLoading(false)
      console.log(error);
      toast.error('try after some time')
    }
  }

  const HandlepasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <div className="nc-PageSignUp bg-[#e5e7eb] text-black">
      <div className="container pb-24 lg:pb-32">
        <h2 className="py-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Signup
        </h2>
        <div className="max-w-md mx-auto space-y-6">
          <div className="grid gap-3">
            {loginSocials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
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
              <span className="text-neutral-800 dark:text-neutral-200">
                Why you are here ?
              </span>
              <Select
                name="Role"
                className="mt-1.5 px-1 py-2 outline-none"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option className="py-2 outline-none" value={null}>
                  select
                </option>
                <option className="py-2 outline-none" value="employer">
                  Recruite
                </option>
                <option className="py-2 outline-none" value="candidate">
                  Get Placed
                </option>
              </Select>
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
              </span>
              <span className="relative">
                <Input
                  type={`${passwordVisibility ? "text" : "password"}`}
                  className="mt-1 outline-none"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                {warning && <p className="text-red-500 text-sm">password must be strong one</p>}
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
              className="bg-blue-600 text-white"
              type="submit"
              onClick={handleSubmit}
            >
              { isLoading ? <LoadingOutlined className="text-white"/> : 'Continue'}
            </ButtonPrimary>

          </form>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Already have an account?{" "}
            <Link
              href="/authenticate/login"
              className="font-semibold underline"
            >
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageSignUp;

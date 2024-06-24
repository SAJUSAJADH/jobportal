"use client";

import React from "react";
import Image from "next/image";
import Search from "./Search";
import {
  BankOutlined,
  CheckOutlined,
  MailOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const Hero = () => {
  return (
    <div className="mx-auto w-full items-center px-3 lg:px-10 pb-20 lg:pb-0 bg-[#e5e7eb] text-black">
      <div className="grid lg:grid-cols-3 gap-4 lg:gap-0 lg:min-h-screen items-center pt-32 lg:pt-0">
        <div className="lg:col-span-2 grid justify-center items-center text-center lg:text-start">
          <span className="lg:flex text-center lg:text-start flex-wrap text-wrap text-xl lg:text-5xl font-semibold lg:leading-tight">
            There Are <p className="text-blue-600 ps-2 text-center"> 93,178 </p>
          </span>
          <p className="text-wrap text-xl lg:text-5xl font-semibold lg:leading-loose">
            Postings Here For you!
          </p>
          <p className="text-sm text-gray-500 pt-2 lg:pt-0">
            Find Jobs, Employment & Career Opportunities
          </p>
          <Search />
          <span className="text-gray-500 text-center lg:text-start lg:flex flex-wrap items-center text-base">
            Popular Searches :{" "}
            <p className="text-sm ps-2">
              {" "}
              Designer, Developer, Web, IOS, PHP, Senior, Engineer,
            </p>
          </span>
        </div>
        <div className="hidden w-full h-full relative lg:flex justify-start items-end">
          <Image
            src="/banner-img-1.webp"
            alt="model"
            className=""
            width={1000}
            height={1000}
          />
          <div className="absolute px-1 top-32 -left-32 lg:w-[260px] h-24 bg-white rounded-md flex gap-5 justify-start items-center">
            <span className="px-4 py-3 bg-orange-200 rounded-full flext justify-center items-center">
              <MailOutlined className="text-xl font-medium text-orange-400" />
            </span>
            <p className="font-sans text-base text-gray-700 font-medium">
              Work Inquiry From ZOHO
            </p>
          </div>
          <div className="absolute px-1 top-96 -left-32 lg:w-[260px] h-24 bg-white rounded-md flex gap-5 justify-start items-center">
            <span className="px-4 py-3 bg-blue-200 rounded-full flext justify-center items-center">
              <UploadOutlined className="text-xl font-medium text-orange-400" />
            </span>
            <p className="font-sans text-base text-gray-700 font-medium">
              Upload your CV
            </p>
          </div>
          <div className="absolute bottom-44 right-4 lg:w-[260px] h-24 bg-white rounded-md flex gap-5 justify-start px-4 items-center">
            <span className="px-4 py-3 bg-pink-200 rounded-full flext justify-center items-center">
              <BankOutlined className="text-2xl font-medium text-pink-400" />
            </span>
            <p className="font-sans text-base text-gray-700 font-medium">
              Creative Agency
            </p>
            <CheckOutlined className="px-3 py-3 bg-pink-200 rounded-full flex justify-center items-center text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

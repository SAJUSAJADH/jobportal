"use client";

import {
  DeleteFilled,
  DislikeOutlined,
  LikeOutlined,
  MessageOutlined,
  SendOutlined,
  SignatureOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function FeedBar() {
  const { data: session, status } = useSession();

  console.log(session);
  return (
    <>
      <div className="w-full bg-white z-10 shadow-md px-2 lg:px-8 py-2 flex justify-center items-center gap-4 rounded-md ">
        <Image
          className="rounded-full"
          src="/image-10.png"
          alt=""
          width={50}
          height={50}
        />
        <Popup
          trigger={
            <div className="py-2 bg-gray-300 flex justify-start rounded-xl outline-none border border-gray-400 w-full px-2 ">
              {" "}
              Create post
            </div>
          }
          position={"center center"}
        >
          <div className="">hello</div>
        </Popup>
      </div>
      <div className="w-full mt-8 bg-white z-10 shadow-md py-2 gap-4 rounded-md">
        <div className=" flex gap-2 p-4">
          <Image
            className="rounded-full"
            width={45}
            height={20}
            src="/image-10.png"
          />
          <div className="flex items-center justify-between w-full">
            <div>
              <h1 className="text-sm font-bold">Sajadh S </h1>
              <p className="text-xs text-gray-500">@username</p>

              <p className="text-xs text-gray-500">19-10-2024</p>
            </div>
          </div>
          <div></div>
        </div>
        <div className="my-3">
          <p className="my-3 px-4">Checkout new job post</p>

          <Image
            src="/jobpost.jfif"
            width={500}
            height={500}
            alt="post-image"
            className="w-full mx-auto"
          />
        </div>

        <div className="px-6">
          <div className="text-sm mx-2 p-2 flex items-center justify-between border-b border-gray-300">
            <p className="text-xm text-gray-500 hover:text-blue-500 hover:underline hover:cursor-pointer">
              5k likes
            </p>

            <p className="text-xm text-gray-500 hover:text-blue-500 hover:underline hover:cursor-pointer">
              {" "}
              message
            </p>
          </div>
          <div className="flex items-center m-1 justify-between">
            <button className="flex items-center gap-1 rounded-lg text-gray-600 hover:text-black">
              <LikeOutlined className="fill-[#378FE9]" />
              <p className="">Like</p>
            </button>
            <button className="flex items-center gap-1 rounded-lg text-gray-600 hover:text-black">
              <SignatureOutlined />
              <p>Apply</p>
            </button>
            <button className="flex items-center gap-1 rounded-lg text-gray-600 hover:text-black">
              <MessageOutlined />
              <p>Message</p>
            </button>

            <button className="flex items-center gap-1 rounded-lg text-gray-600 hover:text-black">
              <SendOutlined />
              <p>Share</p>
            </button>
          </div>

          <div className="p-4">
            {/* <CommentInput postId = {post._id}/>
                        <Comments post = {post}/> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedBar;

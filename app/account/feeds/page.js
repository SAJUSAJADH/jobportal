'use client'

import AddPost from "@/components/addpost";
import Feed from "@/components/feed/Feed";
import LeftMenu from "@/components/leftMenu/LeftMenu";
import RightMenu from "@/components/rightMenu/RightMenu";
import Accountbar from "@/components/Accountbar";
import { useSession } from "next-auth/react";

const Feeds = () => {

  const { data: session, status} = useSession()
console.log(session)
  
  return (
    <>
      <div className="w-full bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <Accountbar />
      </div>
      <div className=" bg-slate-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="flex gap-6 pt-6">
          <div className="hidden xl:block w-[20%]">
            <LeftMenu type="home" />
          </div>
          <div className="w-full lg:w-[70%] xl:w-[50%]">
            <div className="flex flex-col gap-6">
    
              {session?.role === 'employer' && <AddPost />}
              <Feed />
            </div>
          </div>
          <div className="hidden lg:block w-[30%]">
            <RightMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feeds;

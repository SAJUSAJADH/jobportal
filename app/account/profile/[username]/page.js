import Feed from "@/components/feed/Feed";
import LeftMenu from "@/components/leftMenu/LeftMenu";
import RightMenu from "@/components/rightMenu/RightMenu";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <div className=" bg-slate-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src="/cover.jpg"
                alt=""
                fill
                className="rounded-md object-cover"
              />
              <Image
                src="/avatar.jpg"
                alt=""
                width={128}
                height={128}
                className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">
              John Doe
            </h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">100</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">500</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">200</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed username={"johndoe"}/>
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu user={{ name: "John Doe", username: "johndoe" }} />
      </div>
    </div>
    </div>
  );
};

export default ProfilePage;
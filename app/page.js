import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import {
  BarChartOutlined,
  BugOutlined,
  CarOutlined,
  CustomerServiceFilled,
  FacebookOutlined,
  HighlightOutlined,
  IdcardOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  MoneyCollectOutlined,
  PinterestOutlined,
  RedditOutlined,
  TeamOutlined,
  TwitterOutlined,
  WindowsOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import Link from "next/link";

export default function Home() {
  const menus = [
    { name: "Mobile", href: "/category/Mobile" },
    { name: "Computing", href: "/category/Computing" },
    { name: "Gaming ", href: "/category/Gaming" },
    { name: "Entertainment", href: "/category/Entertainment" },
    { name: "Tech Gadgets", href: "/" },
    { name: "Cryptocurrencies", href: "/category/Crypto" },
  ];

  const items = [
    { name: "Automotive", href: "/" },
    { name: "Space", href: "/" },
    { name: "Streaming", href: "" },
    { name: "Guides", href: "/" },
    { name: "Original", href: "" },
    { name: "Shows", href: "" },
    { name: "Downloads", href: "" },
    { name: "How-To", href: "" },
  ];

  const terms = [
    { name: "About Us", href: "/" },
    { name: "Contact Us", href: "/" },
    { name: "Editorial", href: "/" },
    { name: "Guidelines", href: "/" },
    { name: "Logo & Accolade", href: "" },
    { name: "Licensing", href: "" },
  ];

  const extras = [
    { name: "Subscribe to our Channel", href: "/" },
    { name: "Sponsored Content", href: "" },
    { name: "Digital Trends", href: "/" },
    { name: "Wallpapers", href: "" },
    { name: "Digital Trends in Spanish", href: "" },
  ];

  const careers = [
    { name: "Careers", href: "/" },
    { name: "Advertise With Us", href: "/" },
    { name: "Work With Us", href: "/" },
    { name: "Diversity & Inclusion", href: "" },
    { name: "Terms of Use", href: "" },
  ];

  const privacies = [
    { name: "Privacy Policy", href: "/" },
    { name: "Do Not Sell or Share My Information", href: "/" },
    { name: "Press Room ", href: "/" },
    { name: "Sitemap", href: "" },
  ];

  return (
    <div className="bg-[#e5e7eb]">
      <Navbar />
      <Hero />
      <div className="bg-white mx-auto px-3 lg:px-36 w-full py-20">
        <div className="block justify-center items-center gap-4">
          <p className="text-3xl font-sans font-medium text-center">
            Popular Job Categories
          </p>
          <p className="text-lg font-sans font-extralight text-center pt-2">
            2020 jobs live - 293 added today.
          </p>
        </div>
        <div className="pt-12 grid lg:grid-cols-3 gap-6 justify-center">
          <div className="flex justify-start px-4 items-center border border-1 border-black cursor-pointer gap-6 hover:bg-gray-100 rounded-md py-6 border-opacity-20">
            <span className="px-5 py-4 rounded-lg bg-blue-200 text-blue-600 hover:text-gray-700 flex justify-start items-center hover:bg-blue-600 transition-colors duration-200">
              <MoneyCollectOutlined className="text-xl font-medium " />
            </span>
            <p className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-base font-medium">
              Accounting / Finance
            </p>
          </div>
          <div className="flex justify-start px-4 items-center border border-1 border-black cursor-pointer gap-6 hover:bg-gray-100 rounded-md py-6 border-opacity-20">
            <span className="px-5 py-4 rounded-lg bg-blue-200 text-blue-600 hover:text-gray-700 flex justify-start items-center hover:bg-blue-600 transition-colors duration-200">
              <BarChartOutlined className="text-xl font-medium " />
            </span>
            <p className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-base font-medium">
              Marketing
            </p>
          </div>
          <div className="flex justify-start px-4 items-center border border-1 border-black cursor-pointer gap-6 hover:bg-gray-100 rounded-md py-6 border-opacity-20">
            <span className="px-5 py-4 rounded-lg bg-blue-200 text-blue-600 hover:text-gray-700 flex justify-start items-center hover:bg-blue-600 transition-colors duration-200">
              <WindowsOutlined className="text-xl font-medium " />
            </span>
            <p className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-base font-medium">
              Design
            </p>
          </div>
          <div className="flex justify-start px-4 items-center border border-1 border-black cursor-pointer gap-6 hover:bg-gray-100 rounded-md py-6 border-opacity-20">
            <span className="px-5 py-4 rounded-lg bg-blue-200 text-blue-600 hover:text-gray-700 flex justify-start items-center hover:bg-blue-600 transition-colors duration-200">
              <BugOutlined className="text-xl font-medium " />
            </span>
            <p className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-base font-medium">
              Development
            </p>
          </div>
          <div className="flex justify-start px-4 items-center border border-1 border-black cursor-pointer gap-6 hover:bg-gray-100 rounded-md py-6 border-opacity-20">
            <span className="px-5 py-4 rounded-lg bg-blue-200 text-blue-600 hover:text-gray-700 flex justify-start items-center hover:bg-blue-600 transition-colors duration-200">
              <TeamOutlined className="text-xl font-medium " />
            </span>
            <p className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-base font-medium">
              Human Resource
            </p>
          </div>
          <div className="flex justify-start px-4 items-center border border-1 border-black cursor-pointer gap-6 hover:bg-gray-100 rounded-md py-6 border-opacity-20">
            <span className="px-5 py-4 rounded-lg bg-blue-200 text-blue-600 hover:text-gray-700 flex justify-start items-center hover:bg-blue-600 transition-colors duration-200">
              <CarOutlined className="text-xl font-medium " />
            </span>
            <p className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-base font-medium">
              AutoMotive Jobs
            </p>
          </div>
          <div className="flex justify-start px-4 items-center border border-1 border-black cursor-pointer gap-6 hover:bg-gray-100 rounded-md py-6 border-opacity-20">
            <span className="px-5 py-4 rounded-lg bg-blue-200 text-blue-600 hover:text-gray-700 flex justify-start items-center hover:bg-blue-600 transition-colors duration-200">
              <CustomerServiceFilled className="text-xl font-medium " />
            </span>
            <p className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-base font-medium">
              Customer service
            </p>
          </div>
          <div className="flex justify-start px-4 items-center border border-1 border-black cursor-pointer gap-6 hover:bg-gray-100 rounded-md py-6 border-opacity-20">
            <span className="px-5 py-4 rounded-lg bg-blue-200 text-blue-600 hover:text-gray-700 flex justify-start items-center hover:bg-blue-600 transition-colors duration-200">
              <IdcardOutlined className="text-xl font-medium " />
            </span>
            <p className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-base font-medium">
              Health and Care
            </p>
          </div>
          <div className="flex justify-start px-4 items-center border border-1 border-black cursor-pointer gap-6 hover:bg-gray-100 rounded-md py-6 border-opacity-20">
            <span className="px-5 py-4 rounded-lg bg-blue-200 text-blue-600 hover:text-gray-700 flex justify-start items-center hover:bg-blue-600 transition-colors duration-200">
              <HighlightOutlined className="text-xl font-medium " />
            </span>
            <p className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-base font-medium">
              Project management
            </p>
          </div>
        </div>
      </div>
      <div className="pt-20 w-full z-10  mt-4 bg-[#e5e7eb]">
        <div className="mx-auto text-center my-4">
          <h2 className="font-sans text-3xl font-semibold mb-2">
            Reviewed by People
          </h2>
          <h1 className="font-sans text-xl lg:text-5xl font-bold mb-4">
            Client's Testimonials
          </h1>
          <div className="flex justify-center mb-4 w-full">
            <p className="text-justify font-sans text-base font-semibold text-[#706f7b]  w-2/4">
              Discover the positive impact we've made on the our clients by
              reading through their testimonials. Our clients have experienced
              our service and results, and they're eager to share their positive
              experiences with you.
            </p>
          </div>
        </div>
        <div className="container mx-auto justify-between w-3/4 pb-16">
          <div className="grid lg:grid-cols-2 gap-8 ">
            <div className="bg-white rounded-md font-sans p-16 text-center z-30 shadow-xl">
              <h2 className="text-lg text-justify font-medium mb-10">
                "Without JobHunt i’d be homeless, they found me a job and got me
                sorted out quickly with everything! Can’t quite… The Mitech team
                works really hard to ensure high level of quality"
              </h2>
              <div className="flex items-center">
                <Image
                  src="/potter.jpg"
                  alt="Your Image"
                  width={16}
                  height={16}
                  className="w-16 h-16 rounded-full"
                />
                <span className="ml-4 font-bold text-xl">Parry Potter</span>
                <span className="ms-auto text-6xl font-mono text-orange">
                  "
                </span>
              </div>
            </div>
            <div className="bg-white rounded-md font-sans p-16 text-center z-30 shadow-xl">
              <h2 className="text-lg text-justify font-medium mb-10">
                "Without JobHunt i’d be homeless, they found me a job and got me
                sorted out quickly with everything! Can’t quite… The Mitech team
                works really hard to ensure high level of quality"
              </h2>
              <div className="flex items-center">
                <Image
                  src="/weisley.jpg"
                  alt="Your Image"
                  width={16}
                  height={16}
                  className="w-16 h-16 rounded-full"
                />
                <span className="ml-4 font-bold text-xl">Ron Reizley</span>
                <span className="ms-auto text-6xl font-mono text-orange">
                  "
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-20 mx-auto justify-center mt-28 mb-20">
        <div className="grid lg:grid-cols-2 gap-4 lg:px-16 justify-center">
          <div className="">
            <Image
              src="/mobile-app.webp"
              width={400}
              height={400}
              alt="f"
              className=""
            />
          </div>
          <div className="lg:w-3/4 text-center grid items-center">
            <h1 className="text-4xl font-bold font-sans mb-4">
              Download our app to get most out of it
            </h1>
            <p className="text-base text-[#706f7b]  font-sans">
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
            <div className="grid lg:grid-cols-2 gap-4 justify-center my-6">
              <Image src="/apple.webp" alt="" width={200} height={100} />
              <Image src="/google.webp" alt="" width={200} height={100} />
            </div>
          </div>
        </div>
        <div className="mt-20 mx-3 lg:mx-32 px-3 lg:px-10 grid lg:grid-cols-3 bg-blue-100 rounded-lg py-10">
          <div className="col-span-2 flex-col gap-6 justify-start items-center">
            <p className="pt-5 font-sans text-xl text-gray-800 font-medium">
              Recruiting?
            </p>
            <p className="pt-5 font-sans font-normal text-base text-gray-700">
              Advertise your jobs to millions of monthly users and search 15.8
              million CVs in our database.
            </p>
            <button className="mt-5 hover:bg-blue-800 bg-blue-600 rounded-lg px-4 py-3 text-white flex justify-center item-center shadow-lg">
              Start Recruting Now
            </button>
          </div>
          <div className="hidden lg:flex relative">
            <Image src="/image-1.png" alt="banner" fill className="" />
          </div>
        </div>
      </div>
      <div className="mx-auto w-full px-3 md:px-20 pb-4 bg-[#e5e7eb]">
        <div className="pb-4 pt-3 md:pb-16 border-b border-gray-300">
          <div className="flex justify-center gap-4 pb-6">
            <FacebookOutlined style={{ color: "#0096FF", cursor: "pointer" }} />
            <InstagramOutlined
              style={{ color: "#0096FF", cursor: "pointer" }}
            />
            <TwitterOutlined style={{ color: "#0096FF", cursor: "pointer" }} />
            <YoutubeOutlined style={{ color: "#0096FF", cursor: "pointer" }} />
            <LinkedinOutlined style={{ color: "#0096FF", cursor: "pointer" }} />
            <PinterestOutlined
              style={{ color: "#0096FF", cursor: "pointer" }}
            />
            <RedditOutlined style={{ color: "#0096FF", cursor: "pointer" }} />
          </div>
          <div className="grid lg:grid-cols-4 gap-4 pt-4">
            <div className="col-span-2 pe-4 border-r border-gray-700">
              <h2 className="text-gray-700 font-bold font-sans pb-2 text-2xl">
                JobPortal
              </h2>
              <p className="text-gray-700 flex flex-wrap font-semibold font-sans text-sm">
                {
                  "At [JobPortalName], we are committed to connecting talented individuals with the right career opportunities. Our platform provides job seekers with access to a wide range of positions across various industries, while helping employers find the best candidates for their teams."
                }
              </p>
            </div>
            <div className="grid gap-4 ps-3 pe-4 border-r border-gray-700">
              {menus.map((menu, index) => (
                <Link
                  href={menu.href}
                  key={index}
                  className="text-gray-700 font-semibold text-sm font-sans hover:underline cursor-pointer"
                >
                  {menu.name}
                </Link>
              ))}
            </div>
            <div className="grid gap-4 ps-3 ">
              {items.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className="text-gray-700 font-semibold text-sm font-sans hover:underline cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid lg:grid-cols-4 gap-4 pt-8">
            <div className="col-span-2 pe-4 border-r border-gray-700"></div>
            <div className="grid gap-4 ps-3 pe-4 border-r border-gray-700">
              {terms.map((term, index) => (
                <Link
                  href={term.href}
                  key={index}
                  className="text-gray-700 font-semibold text-sm font-sans hover:underline cursor-pointer"
                >
                  {term.name}
                </Link>
              ))}
            </div>
            <div className="grid gap-4 ps-3 ">
              {extras.map((extra, index) => (
                <Link
                  href={extra.href}
                  key={index}
                  className="text-gray-700 font-semibold text-sm font-sans hover:underline cursor-pointer"
                >
                  {extra.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 gap-4 pt-8 md:pt-16">
          <div className="col-span-2 pe-4 border-r border-gray-700">
            <h2 className="cursor-pointer text-3xl text-gray-700 font-semibold font-sans">
              JobPortal
            </h2>
          </div>
          <div className="grid gap-4 ps-3 pe-4 border-r border-gray-700">
            {careers.map((career, index) => (
              <Link
                href={career.href}
                key={index}
                className="text-gray-700 font-semibold text-sm font-sans hover:underline cursor-pointer"
              >
                {career.name}
              </Link>
            ))}
          </div>
          <div className="grid gap-4 ps-3 ">
            {privacies.map((privacy, index) => (
              <Link
                href={privacy.href}
                key={index}
                className="text-gray-700 font-semibold text-sm font-sans hover:underline cursor-pointer"
              >
                {privacy.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="py-6">
          <p className="text-sm text-gray-800">
            Jobportal may earn a commission when you buy through links on our
            sites.
            <br />
            ©2023 TechTrends. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

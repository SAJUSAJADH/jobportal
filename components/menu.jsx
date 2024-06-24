import { RightOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function Menu() {
  const menus = [
    { name: "Home", href: "/ecosystem" },
    { name: "Find-jobs", href: "/community" },
    { name: "Candidates", href: "/governance" },
    { name: "Employers", href: "/developers" },
    { name: "About", href: "/faq" },
    { name: "Contact", href: "/blogs" },
  ];

  return (
    <>
      <div className="lg:hidden mx-auto fixed lg:px-20 pt-28 w-full h-full bg-[#f1f5f9] z-40">
        <div className="grid lg:grid-cols-3">
          <div className="flex flex-col lg:border-r lg:border-[#f1f5f9]">
            {menus.map((menu, index) => (
              <Link key={index} href={menu.href}>
                <div className="py-4 lg:pe-4 px-3 lg:px-0 cursor-pointer flex justify-between">
                  <h2 className="font-light text-sm font-poppins">
                    {menu.name}
                  </h2>
                  <span className="cursor-pointer">
                    <RightOutlined
                      style={{ color: "#0096FF", fontSize: "larger" }}
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="col-span-2"></div>
        </div>
      </div>
    </>
  );
}

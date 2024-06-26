import { InfoCircleOutlined } from "@ant-design/icons";
import React from "react";

const newsItems = [
  {
    heading: "E-retailer retag health drinks",
    subHeading: "4h ago - 345 readers",
  },
  {
    heading: "Lets transport raises $22 million",
    subHeading: "4h ago - 323 readers",
  },
  {
    heading: "Casual waer is in at India Inc",
    subHeading: "4h ago - 234 readers",
  },
  {
    heading: "Snaller cities go on loans",
    subHeading: "4h ago - 112 readers",
  },
];

const News = () => {
  return (
    <div className="block">
      <div className="flex items-center justify-between p-3">
        <h1 className="font-medium">jobportal News</h1>
        <InfoCircleOutlined className="w-10 h-10" />
      </div>
      <div>
        {newsItems.map((item, index) => {
          return (
            <div
              key={index}
              className="px-3 py-2 hover:bg-gray-200 hover:cursor-pointer"
            >
              <h1 className="text-sm font-medium">{item.heading}</h1>
              <p className="text-xs text-gray-600">{item.subHeading}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;

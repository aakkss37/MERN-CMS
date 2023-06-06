import React from "react";
import { socialMediaList } from "./RegularDataList";

const SocialMediaList = () => {
  return (
    <div
      data-aos="zoom-in"
      className="flex flex-col items-center justify-center mt-16"
    >
      <p className="text-[24px] font-semibold text-center">
        See what we have been recently
      </p>
      {/* hr line */}
      <div className="line w-[85vw] md:w-[70vw] lg:w-[70vw] bg-black h-[2px] mt-3 mb-6 "></div>
      <div className="flex items-center justify-center gap-2">
        {socialMediaList?.map((elem) => (
          <img key={elem?.icon} src={elem?.icon} alt="" />
        ))}
      </div>
      {/* social media icons */}
    </div>
  );
};

export default SocialMediaList;

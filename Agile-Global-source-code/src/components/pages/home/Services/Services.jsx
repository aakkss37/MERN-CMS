import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { tabList } from "./serviceData";
import talkImg from "../../../../images/home-folder/services/talk-img.png";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [selectedTab, setSelectedTab] = useState(tabList[0]);

  const onHanldleTabSelection = (option) => {
    setSelectedTab(option);
  };


  return (
    <>
      {/* custom application bg div  */}
      <div
        data-aos="fade-down"
        style={{ backgroundImage: `url("${selectedTab?.image}")` }}
        className={`w-full h-[50dvh] md:h-[43dvh] xl:h-[74dvh] bg-cover bg-no-repeat bg-center  flex flex-col items-center justify-center px-3 lg:px-40`}
      ></div>

      {/* our services div */}

      <div
        data-aos="zoom-in"
        className="mt-6 flex flex-col items-center justify-center "
      >
        <p className="text-[48px] leading-[58px] text-[#023267] font-semibold text-center">
          Our Services
        </p>

        {/* buttons */}
        <div className="mt-12 flex items-center justify-center flex-wrap gap-3 md:gap-10">
          {tabList?.map((elem) => (
            <button
              onClick={() => onHanldleTabSelection(elem)}
              className={`text-center text-[18px] w-[229px] font-semibold leading-[22px] border-[#114590] border-[2px] py-[20px] rounded-[52px] ${
                selectedTab?.title === elem?.title
                  ? "bg-[#023267] text-white"
                  : "bg-[white] text-[#023267]"
              }`}
            >
              {elem?.title}
            </button>
          ))}
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="flex flex-col items-center justify-center gap-5 md:gap-1 lg:gap-10 md:flex-row px-3 mt-10"
      >
        <div className="flex flex-col items-center md:items-start justify-center gap-5 md:w-[40%]">
          <p className="text-[24px] sm:text-[30px] md:text-[30px] lg:text-[36px] font-semibold leading-[56px]">
            {selectedTab?.title}
          </p>
          <p className="text-[16px] leading-[30px] text-center md:text-start">
            {/* {item?.desc} */}
            {selectedTab?.description}
          </p>

          {/* get started btn */}
          <button className="flex items-center justify-center gap-1 text-center font-bold text-[18px] px-[16px] py-[8px] bg-[#023267] text-white rounded-[60px]">
            Get Started
            <HiOutlineArrowNarrowRight />
          </button>
        </div>
        {/* img div */}
        <img className="md:w-[300px] lg:w-auto" src={talkImg} alt="" />
      </div>
    </>
  );
};

export default Services;

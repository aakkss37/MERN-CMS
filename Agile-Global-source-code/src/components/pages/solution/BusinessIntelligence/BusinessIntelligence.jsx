import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";

import twIcon from "../../../../images/solution/custom-app/tw.svg";
import instaIcon from "../../../../images/solution/custom-app/insta.svg";
import inIcon from "../../../../images/solution/custom-app/in.svg";
import { settings } from "../../utils/utility";
import Header from "../../../Regular/Header";
import { applicationList, businessList, productList } from "./businessData";
import SocialMediaList from "../../../Regular/SocialMediaList";
import ServicesChecklist from "../../../Regular/ServicesChecklist";

const BusinessIntelligence = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Header
        image="business-intelligence-bg-img"
        title="BUSINESS INTELLIGENCE & EAI"
        description="   Understanding relevant data allows organizations make the right
            decision for their employees, shareholders and customers. Our SMEs
            specialize in Big Data, Analytics, Data Mining, Data warehousing,
            Dashboard creation as well as integration of disparate Enterprise
            applications that do not understand each other."
      />
      <div
        data-aos="zoom-in"
        className="flex flex-col items-center justify-center gap-5 my-10"
      >
        <p className="text-[36px] font-semibold text-center leading-[39px] text-ce ter">
          BUSINESS INTELLIGENCE
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mt-9 px-3">
          <p className="text-center text-[20px] lg:text-start lg:w-[60%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque semper vestibulum fermentum. Cras venenatis, nisl sit
            amet molestie viverra,
          </p>
          <button className="text-white flex items-center justify-center bg-[#023267] rounded-[10px] gap-2 px-[40px] py-[10px]">
            View all <IoIosArrowForward />
          </button>
        </div>
      </div>

      {/* slider  */}
      <div
        data-aos="fade-up"
        className=" flex items-center justify-center my-[44px]"
      >
        <Slider
          className="slider-outter-bus w-[80vw] md:w-[85vw] xl:w-[75dvw]  "
          {...settings}
        >
          {businessList?.map((elem) => (
            <div
              key={elem?.title}
              className=" hover-drop-shadow  my-7 relative business-slider-div !w-[307px] flex items-center justify-center  rounded-[13px] "
            >
              <img src={elem?.image} alt="" />
              <div className="absolute  bottom-0 left-0 right-0 mx-auto flex items-center justify-center rounded-t-lg w-[281px] h-[34px] bg-[#98989869] opacity-[100%]">
                <p className="text-[18px] font-semibold text-white text-center opacity-[100%]">
                  {elem?.title}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* enterprise application div blue  */}
      <div
        data-aos="fade-up"
        className="bg-[#023267] flex flex-col items-center justify-center p-3 xl:p-6 mt-16"
      >
        <p className="text-[24px] sm:text-[28px] md:text-[36px] leading-[48px] font-semibold text-white text-center mb-6">
          ENTERPRISE APPLICATION INTEGRATION
        </p>
        <p className="text-center sm:text-start leading-[32px] text-white text-[18px] sm:text-[20px] md:text-[24px] mb-6 lg:px-10 xl:px-32">
          Our Business Intelligence (BI) practice helps customers reap the
          benefits of datawarehouses and dashboards that facilitate decision
          makers in making quick and crucial decisions for their organizations
          in this competitive market. We provide services that include:
        </p>

        {/* outer div of nos.  */}
        <div
          data-aos="zoom-in"
          className=" flex flex-col md:flex-row items-start lg:items-center justify-center gap-5"
        >
          {/* no div  1 to 4*/}
          <div className=" flex items-center justify-between gap-5 flex-wrap w-full ">
            {applicationList?.map((elem) => (
              <div
                key={elem?.title}
                className="flex items-center mx-auto gap-2 w-[45%]"
              >
                <img src={elem?.image} alt="" />
                <p className="text-white text-start text-[24px] leading-[32px]">
                  {elem?.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* OUR PRODUCT EXPERIENCE INCLUDES: */}
      <div data-aos="fade-up" className="my-14 px-3">
        <p className="text-[24px] sm:text-[32px] md:text-[36px] leading-[39px] text-center font-semibold mb-11">
          OUR PRODUCT EXPERIENCE INCLUDES:
        </p>
        <div className="flex items-center justify-center flex-wrap gap-6 lg:px-28 xl:px-52">
          {productList?.map((elem) => (
            <div
              key={elem?.title}
              className="rounded-[16px] h-[90px] bg-[#023267] gap-3 flex  justify-center p-3 px-5 md:w-[401px]"
            >
              <ServicesChecklist
                key={elem?.title}
                title={elem?.title}
                width="90%"
              />
            </div>
          ))}
        </div>
      </div>

      {/* see what we have.... */}
      <SocialMediaList />
    </>
  );
};

export default BusinessIntelligence;

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import utilityBlueBg from "../../../../images/solution/utility/utility-blue-bg.svg";
import utilityFrontImg from "../../../../images/solution/utility/utility-front-bg.svg";

import { clientRequirementsList, utilitySolutionList } from "./utilityData";
import Header from "../../../Regular/Header";
import SocialMediaList from "../../../Regular/SocialMediaList";
import ServicesChecklist from "../../../Regular/ServicesChecklist";

const UtilitySolutions = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Header
        image="utility-bg-img"
        title="UTILITY SOLUTIONS"
        description="We have worked to deliver on nodal and other compliance projects
            with many utility firms and ISOs around the nation."
      />
      {/* blue div */}
      <div
        data-aos="fade-up"
        className=" py-6 px-3 lg:py-10 lg:px-20 xl:px-44 flex items-center justify-center flex-col bg-[#023267]   "
      >
        <p className="text-[18px] sm:text-[24px] leading-[30px] text-white text-center sm:text-start  ">
          Increased regulation, higher production costs, and environmental
          concerns all contribute to the need for reducing costs thru the use of
          more advanced technology and applications. Agile Global has
          consistently partnered with our Utility Sector clients to make a
          difference. With a strong history of providing not only technical
          talent but SME and Executive level resources to assist with their
          cutting edge processes, Agile Global is a valuable partner within the
          energy community. Our 100% customer retention tells the story……..
        </p>

        {/* li ul */}
        <div data-aos="fade-down" className=" flex w-full ">
          {/* white bg li div */}
          <div className=" w-full text-white flex flex-col gap-1 sm:flex-row sm:gap-5 items-start justify-center sm:items-center sm:justify-between  py-4 px-7 ">
            <ul className=" flex items-start justify-between gap-1 lg:w-[100%] flex-wrap">
              {utilitySolutionList?.map((elem) => (
                <ServicesChecklist
                  key={elem?.title}
                  title={elem?.title}
                  width="45%"
                />
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        data-aos="zoom-in"
        className="my-8 flex flex-col items-center justify-center"
      >
        <p className="text-[20px] font-semibold text-clip sm:text-[25px] md:text-[35px] lg:text-[40px] mb-7">
          CLIENTS INCLUDE:
        </p>

        {/* image and text div */}
        <div className="flex flex-col items-center justify-center gap-9 lg:flex-row px-3 lg:px-20">
          {/* img div */}
          <div className="enterprise-outter-card-eff rounded-[60px] relative">
            <img className="" src={utilityBlueBg} alt="" />
            <img
              className="enterprise-inner-card-img enterprise-service-front-img-tilt rounded-[60px] absolute bottom-4 sm:left-6  sm:w-auto"
              src={utilityFrontImg}
              alt=""
            />
          </div>

          {/* content div */}
          <div className="flex items-center justify-center bg-[#023267] text-white rounded-[15px] lg:w-[40%] p-4">
            <ul className="flex items-start flex-col justify-center gap-1">
              {clientRequirementsList?.map((elem) => (
                <ServicesChecklist
                  key={elem?.title}
                  title={elem?.title}
                  width="100%"
                />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* see what we have.... */}
      <SocialMediaList />
    </>
  );
};

export default UtilitySolutions;

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import vrLogos from "../../../../images/solution/virtual-reality/vr-logos.svg";
import Header from "../../../Regular/Header";
import { virtualData, schedulerList } from "./virtualData";
import IncludedServices from "../../../Regular/IncludedServices";
import { technologyList } from "../EmergingTechnologies/emergingData";
const VirtutalAndAgumented = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      {/* virtual and agmented reality bg div  */}
      <Header
        title="VIRTUAL AND AUGMENTED REALITY SOLUTIONS"
        description=" The future is here. From building APIs and 360 degree content to
            reducing your time to market with our VR/AR staff experienced on
            different SDKs and VR lenses, embrace and immerse yourself
            successfully in the next big thing."
        image="virtual-and-agumented-bg-img"
      />
      {/*  below hero section  */}
      <div
        data-aos="fade-up"
        className="flex flex-col-reverse lg:flex-row gap-0 items-center justify-center lg:w-full lg:mx-0 mx-3 mt-9"
      >
        {/* text div */}
        <div className="bg-[#023267] text-white text-[18px] text-start flex flex-col items-start justify-start p-4 mx-3 w-full lg:w-[70%] rounded-[10px]">
          {virtualData?.map((elem) => (
            <React.Fragment key={elem}>
              <p className="text-[16px] text-start ">{elem}</p>
              <br />
            </React.Fragment>
          ))}
        </div>
        {/* image div */}
        <img className="lg:w-[47%] " src={vrLogos} alt="" />
      </div>

      {/* 3 wide text boxes */}
      <div
        data-aos="fade-up"
        className="flex flex-col items-center justify-center gap-9 mt-10"
      >
        {/* box 1 */}
        {technologyList?.map((elem) => (
          <IncludedServices key={elem?.title} elem={elem} />
        ))}
      </div>

      {/*   more services div      */}
      <div
        data-aos="zoom-in"
        className="flex flex-col items-center justify-center gap-4 my-16 px-3"
      >
        {/* title */}
        <h2 className="text-[28px] text-center md:text-[35px] leading-[35px] font-bold ">
          More Services at Your Fingertips
        </h2>

        <p className="text-[18px] md:text-[18px] text-center mb-5 leading-[27px] w-full md:w-[80vw] lg:w-[70vw]">
          We're on a mission to make Teletherapy smarter, simpler, and more
          accessible
        </p>

        {/* cards div */}
        <div className="flex items-center flex-wrap justify-center gap-7 md:gap-4 xl:px-20">
          {/* card 1 */}
          {schedulerList?.map((elem) => (
            <div key={elem?.title} className="hover-drop-shadow flex flex-col items-start justify-start gap-2 p-2 hover:rounded-[10px]">
              <img className="mb-3" src={elem?.image} alt="" />
              <p className="text-[18px] font-bold leading-[27px]">
               {elem?.title}
              </p>
              <p className="text-[15px]">{elem?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VirtutalAndAgumented;

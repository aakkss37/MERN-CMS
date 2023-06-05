import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  recognitionList,
  technologyList,
  includedServicesList,
} from "./emergingData";
import Header from "../../../Regular/Header";
import IncludedServices from "../../../Regular/IncludedServices";
const EmergingTechnologies = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      {/* emerding technologies bg div  */}
      <Header
        title="EMERGING TECHNOLOGIES"
        description="Big ideas aren’t enough: Agile Global understands that ambitious ideas
        require acute skills and capabilities to make them a reality."
        image="emerging-technologies-bg-img"
      />

      {/* we provide services that include.... */}
      <div data-aos="flip-up" className="px-3 sm:px-20 md:px-44 mb-10">
        <p className="text-[28px] font-semibold leading-[38px] sm:leading-[58px] lg:my-9 text-center mt-5">
          WE WANT TO HEAR FROM YOU
        </p>
      </div>

      {/* cards div */}
      <div
        data-aos="flip-up"
        className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 px-3"
      >
        {/* card 4 */}
        {includedServicesList?.map((elem) => (
         <IncludedServices key={elem?.title} elem={elem}/>
        ))}
      </div>

      {/* blue bg  div  */}
      <div
        data-aos="fade-up"
        className="emerg-tech-blue-div px-3 py-14 my-10 md:px-20 lg:px-28 xl:px-36 mb-20"
      >
        <p className="text-[20px] sm:text-[24px] text-white text-center ">
          OUR EMERGING TECHNOLOGIES PRACTICE HELPS CUSTOMERS REALIZE THE DREAM
          THAT WILL SHAPE TOMORROW’S WORLD TO STAY COMPETITIVE AND AHEAD OF THE
          CURVE.
        </p>
      </div>

      {/* 3 wide text boxes */}
      <div
        data-aos="fade-up"
        className="flex flex-col items-center justify-center gap-9"
      >
        {technologyList?.map((elem) => (
          <div
            key={elem?.title}
            className="emerging-tech-white-div-drop-shadow flex flex-col items-start justify-start gap-2 text-start p-5  sm:w-[80%] lg:w-[70%] rounded-[10px] mx-3 "
          >
            <p className="text-[22px] sm:text-[24px] font-semibold">
              {elem?.title}
            </p>
            <p className="text-[20px] sm:text-[20px] leading-[30px] text-start">
              {elem?.description}
            </p>
          </div>
        ))}
      </div>

      {/* Our Recognitions & Awards div */}
      <div
        data-aos="zoom-in"
        className="flex flex-col items-center justify-center px-3 my-10"
      >
        <p className="text-[28px] sm:text-[34px] md:text-[48px] font-bold text-center my-5">
          Our <span className="text-[#17519B]">Recognitions</span> & Awards
        </p>
        {/* cards div */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-14 lg:gap-4">
          {recognitionList?.map((elem) => (
            <div
              key={elem?.title}
              className="hover-drop-shadow px-3 py-2 cursor-pointer sm:w-[387px] flex flex-col items-start justify-start gap-4"
            >
              <img src={elem?.image} alt="" />
              <p className="font-semibold text-[24px]">{elem?.title}</p>
              <p>{elem?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EmergingTechnologies;

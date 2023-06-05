import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// our mission images
import BigCircleImg from "../../../../images/about/about-circle-img.png";

import { ImArrowRight2 } from "react-icons/im";

import Slider from "react-slick";

// Data List
import {
  logos,
  gobalSolution,
  planList,
  missionList,
  awardList,
} from "./aboutData";

import { settings } from "../../utils/utility";
import AwardCard from "./AwardCard";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      {/* emerding technologies bg div  */}
      <div
        data-aos="fade-up"
        className="w-full h-[50dvh] md:h-[43dvh] xl:h-[74dvh] about-bg-img flex flex-col items-start justify-center text-start px-3 lg:px-40 gap-5 "
      >
        <h1 className="text-[24px]  sm:text-[37px] md:text-[40px] font-bold text-white md:mt-[80px]">
          WHO ARE WE?
        </h1>
        <p className="text-[22px] sm:text-[32px] font-semibold text-white">
          AGILE GLOBAL SOLUTIONS, INC
        </p>
        <p className="text-[18px] sm:text-[18px] text-white text-start">
          Agile Global Solutions, Inc (AGILE GLOBAL) founded in 2003 is a global
          Business and IT solutions provider headquartered in Folsom, CA (a
          suburb of Sacramento) servicing prestigious clients all over the
          world.
        </p>
      </div>

      <div
        data-aos="fade-up"
        className="flex flex-col items-center justify-center mt-10"
      >
        <p className="text-[24px] sm:text-[32px] md:text-[40px] font-semibold text-center ">
          We provide Best services
        </p>
      </div>

      <div
        data-aos="fade-up"
        className="flex cursor-pointer items-center justify-center flex-wrap gap-5 md:gap-10 mt-5 md:mt-10 "
      >
        {/* card 1 */}
        {gobalSolution?.map((elem) => (
          <div
            className="hover-drop-shadow relative rounded-[8px] home-sol-outter-card-1-eff w-[321px] h-[238px] lg:w-[261px] lg:h-[238px] text-white"
            key={elem?.title}
          >
            <img
              className="w-full h-full rounded-[8px] home-card-1-image-eff"
              src={elem?.image}
              alt=""
            />
            {/* text div */}
            <div className="absolute rounded-[8px] px-3   home-sol-card-1 w-full h-full bottom-0 flex flex-col items-start justify-center gap-2">
              <p className="text-[24px] mt-[20px]">{elem?.title}</p>
              <p className="text-[16px]">{elem?.description} </p>
              <p className="text-[16px] ">{elem?.readMore}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Why Agile Global? */}

      <div
        data-aos="fade-up"
        className="flex items-center justify-center flex-col mt-20"
      >
        <p className="text-[24px] sm:text-[32px] md:text-[35px] text-center font-semibold mb-5">
          Why Agile Global ?
        </p>

        {/* cards div */}
        <div className="px-3 flex items-center justify-center flex-wrap sm:px-5 md:px-10 lg:px-20 xl:px-44 gap-5 md:gap-5">
          {/* card 1 */}
          {planList?.map((elem) => (
            <div className="hover-drop-shadow flex rounded-[20px] p-6 about-blanck-card-div-drop-shadow sm:w-[360px] sm:h-[321px] flex-col items-start justify-center text-start gap-2">
              <img src={elem?.image} alt="" />
              <p className="text-[18px] font-semibold">{elem?.title}</p>
              <p>{elem?.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* slider  */}

      <section
        data-aos="zoom-in"
        className="  mt-10 flex flex-col items-center justify-center p-3 "
      >
        {/* title */}
        <h2 className="text-[28px] md:text-[48px] font-bold my-4">
          OUR PARTIAL CLIENT LIST
        </h2>
        {/* hr line */}
        <div className="line w-[85vw] md:w-[70vw] lg:w-[40vw] bg-black h-[2px] my-3 "></div>

        <p className="text-[18px] md:text-[24px] text-center my-2 mb-10 leading-[25px] w-full md:w-[80vw] lg:w-[70vw]">
          AGILE GLOBAL has assisted numerous Fortune/Global 1000 and mid-sized
          firms in their application development, integration, conversion,
          consolidation and support efforts. We are also dedicated to partnering
          with early stage and emerging growth enterprise software companies,
          working with them to bring to market the best technology solutions
          possible.
        </p>
      </section>

      {/* slider  */}
      <div
        data-aos="zoom-in"
        className=" flex items-center justify-center my-[44px]"
      >
        <Slider className="slider-outter  w-[85vw] " {...settings}>
          {logos?.map((item) => (
            <img
              className="w-[200px] h-[100px] home-client-img"
              src={item?.image}
              alt="saldk"
            />
          ))}
        </Slider>
      </div>

      {/* our recognized awards div */}
      {/* Our Recognitions & Awards */}
      <div
        data-aos="fade-up"
        className="  flex sm:flex-row flex-wrap items-center  justify-center gap-0 mt-28"
      >
        <p className="text-[30px] sm:text-[40px] md:text-[48px] leading-[58px] font-semibold text-center sm:text-start lg:w-[300px] my-7">
          Our <span className="text-[#17519B] "> Recognitions</span> & Awards
        </p>

        {/* blue and white boxs div starts  */}
        <div className="flex flex-col items-center justify-center sm:flex-row sm:flex-wrap gap-3 lg:w-[55%]">
          {/*blue box 1  */}
          {awardList?.map((elem) => (
            <AwardCard elem={elem} />
          ))}
        </div>
      </div>

      {/* blue bg div  */}
      <div
        data-aos="fade-up"
        className=" about-our-mission-blue-bg w-full py-10 lg:py-0 lg:h-[660px] xl:h-[750px] my-10 flex items-center justify-between"
      >
        <img
          className="hidden transition  ease-in-out delay-150  hover:scale-110   lg:flex w-[400px] xl:w-[600px]"
          src={BigCircleImg}
          alt=""
        />
        {/* our mission text */}
        <div className=" xl:mr-72 w-full flex items-center flex-col justify-between bg-yellow-200">
          <p className="font-bold text-center text-[40px] sm:text-[48px] md:text-[64px] text-white leading-[86px]">
            Our Mission
          </p>

          {/* outer div of nos.  */}
          <div className=" flex sm:flex-row w-[80%]  items-start lg:items-center justify-center  bg-orange-500 ">
            {/* no div  1 to 4*/}
            <div className=" flex flex-col items-start justify-start gap-5">
              {missionList?.map((elem) => (
                <div className="flex items-center justify-center gap-2">
                  <img src={elem?.image} alt="" />
                  <p className="text-white text-start text-[24px] leading-[32px]">
                    {elem?.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* our 8 values */}
          <div className=" flex flex-col sm:flex-row items-center justify-center gap-9">
            <p className="text-[30px] sm:text-[44px] md:text[64px] text-white  font-semibold">
              Our
              <span className="text-[40px] sm:text-[54px] md:text-[84px] lg:text-[96px] font-bold ">
                8
              </span>
              Core Values
            </p>

            <div className="cursor-pointer md:mt-10 about-our-mission-know-more-btn w-[152px] rounded-[60px] flex items-center justify-center  ">
              <p className="m-3 text-[18px] text-white font-bold flex items-center justify-center gap-3 ">
                Know more <ImArrowRight2></ImArrowRight2>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* get started div */}

      <div
        data-aos="fade-up"
        className="about-get-started-bg-img flex flex-col sm:flex-row items-center justify-center mt-20  sm:justify-between px-3 sm:px-10 py-6 mx-8 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-44 rounded-[19px] gap-6 sm:gap-0"
      >
        <p className="text-[24px] sm:text-[32px] font-semibold text-white text-center leading-[38px]   ">
          Ready to Get started?
        </p>

        <button className="text-[18px] bg-white text-[#17519B] font-bold flex items-center justify-center gap-3 px-4 py-2 rounded-[60px]">
          Know more <ImArrowRight2></ImArrowRight2>
        </button>
      </div>
    </>
  );
};

export default About;

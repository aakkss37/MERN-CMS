import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import SocialMediaList from "../../../Regular/SocialMediaList";
import Header from "../../../Regular/Header";
import {
  infrastureList,
  seamlessServices,
  specializationList,
} from "./infrastructureData";

const Infrastructure = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Header
        image="infrastructure-bg-img"
        title="BUSINESS INTELLIGENCE & EAI"
        description="Understanding relevant data allows organizations make the right
            decision for their employees, shareholders and customers. Our SMEs
            specialize in Big Data, Analytics, Data Mining, Data warehousing,
            Dashboard creation as well as integration of disparate Enterprise
            applications that do not understand each other."
      />
      {/* blue div text */}
      <div
        data-aos="flip-up"
        className="flex items-center justify-center bg-[#023267] "
      >
        <p className="text-[18px] sm:text-[24px] text-white text-center p-3 sm:p-5 md:p-10 lg:px-48">
          With the increased emphasis on cyber and network security, this has
          become a critical component of our solution offering. Our subject
          matter experts, many of them CISSP certified, provide the following:
        </p>
      </div>
      {/* white bg li div */}
      <div
        data-aos="fade-up"
        className=" flex flex-col gap-w
        
        md:flex-row items-center justify-center my-5 py-4 px-7"
      >
        <ul className=" flex flex-wrap items-center justify-between gap-1 w-[80%] ">
          {infrastureList?.map((elem) => (
            <li className="list-disc text-[18px] md:text-[24px] w-[45%]">
              {elem?.title}
            </li>
          ))}
        </ul>
      </div>
      {/* blue bg long div */}

      <div
        data-aos="fade-up"
        className="my-5 bg-[#023267] p-3 py-9 flex flex-col items-center justify-center lg:flex-row gap-6"
      >
        {/* grey card */}
        <div className="flex flex-col items-center justify-center gap-6">
          {/* grey card 1 */}

          {/* grey card 1 */}
          {seamlessServices?.map((elem) => (
            <div
              key={elem?.title}
              className="bg-[rgba(255,255,255,0.80)] rounded-[10px] w-full sm:w-[455px] p-3  "
            >
              <p className="text-center text-[22px] leading-[30px] text-[#1D1D1E]">
                {elem?.title}
              </p>
            </div>
          ))}
        </div>
        {/* side div our smes ... */}
        <div className="text-white lg:w-[600px] xl:w-[646px]">
          <p className="text-center text-[24px] sm:text-[36px] font-semibold leading-[48px] ">
            OUR SMES SPECIALIZE IN:
          </p>
          <p className=" text-[18px] sm:text-[22] text-center lg:text-start leading-[29px]">
            In the Security space we not only ensure the establishment and
            maintenance of a stable IT infrastructure, but our solution also
            endows the flexibility required for responding to evolving security
            needs, with a customized approach unique to each customer.
          </p>

          {/* box div */}
          <div className="text-white my-6 flex flex-col items-center justify-center gap-5">
            {/* box row 3 that contains 2 boxes */}
            <div className="flex flex-col items-center justify-center sm:flex-row flex-wrap gap-5">
              {/* box 1 */}
              {specializationList?.map((elem) => (
                <div
                  key={elem?.title}
                  className=" w-full sm:w-[300px] rounded-[10px]  border-2 border-white"
                >
                  <p className="text-center py-2">{elem?.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* see what we have.... */}

      <SocialMediaList />
    </>
  );
};

export default Infrastructure;

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import tick from "../../../../images/solution/professional/tick.svg";
import lady from "../../../../images/solution/professional/lady.svg";

import SocialMediaList from "../../../Regular/SocialMediaList";
import { servicesCheckList, servicesList } from "./ProfessionalData";
import ServicesChecklist from "../../../Regular/ServicesChecklist";
import Header from "../../../Regular/Header";
const ProfessionalConsultingg = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Header
        image="professional-bg-img"
        title="PROFESSIONAL CONSULTING"
        description=" Through our professional consulting service offering we provide
            talent acquisition and augmentation services to help clients with
            their project peaks and lows. With our flexible delivery approach,
            strong global recruiting/training engine and over 50,000 subject
            matter experts in our databank, we are able to find and deliver
            highly qualified professionals in a short period of time."
      />

      {/* enterprise application div blue  */}
      <div
        data-aos="fade-up"
        className="bg-[#023267] flex flex-col items-center justify-center p-3 py-10 lg:py-10"
      >
        <p className="text-center sm:text-start leading-[32px] text-white text-[18px] sm:text-[20px] md:text-[24px] mb-6 lg:px-10 xl:px-44">
          WE PROVIDE STRONG INDUSTRY EXPERTISE THROUGH OUR BUSINESS ANALYSTS AND
          TECHNOLOGY EXPERTISE THROUGH:
        </p>

        {/* outer div of nos.  */}
        <div className=" w-full flex flex-col md:flex-row items-center justify-center md:justify-around gap-5">
          {/* no div  1 to 4*/}
          <div className=" flex flex-wrap justify-between gap-5 w-[72%]">
            {servicesCheckList?.map((elem) => (
              <ServicesChecklist key={elem?.title} title={elem.title} width="40%"/>
            ))}
          </div>
        </div>
      </div>

      {/* Talent Acquisition with with a emphasis on quality, speed, professionalism and reliability */}

      <div
        data-aos="fade-up"
        className="my-10 px-3 sm:px-3 md:px-6 lg:px-10 xl:px-44"
      >
        <p className="text-[24px] sm:text-[32px] text-center font-semibold text-[#17519BFC]">
          Talent Acquisition with with a emphasis on quality, speed,
          professionalism and reliability
        </p>

        {/* text and image div */}
        <div className="mt-5 flex flex-col items-center justify-center md:flex-row">
          {/* text div */}
          <div className="text-center lg:text-start">
            <p className="text-[20px]">
              Our technical global recruiting engine, stringent recruiting
              procedures in conjunction with our large network of experts makes
              us proficient in supplying clients with subject matter experts and
              talented/qualified individuals with tough-to-find skills in a
              cost-effective manner to assist in successful project completion.
              <br />
              We can provide such professionals in a flexible time and material
              delivery model which includes Contract, Contract-to-hire or
              Permanent basis. From a technology perspective we specialize in:
            </p>

            <ul className="pl-4 mt-4 text-[20px]">
              {servicesList?.map((elem) => (
                <li className="list-disc text-start">{elem?.title}</li>
              ))}
            </ul>
          </div>

          {/* img  */}
          <img
            className="transition  ease-in-out delay-150  hover:scale-105 md:w-[300px] lg:w-full"
            src={lady}
            alt=""
          />
        </div>
      </div>

      {/* box 3 */}
      <div
        data-aos="fade-up"
        className="flex items-center justify-center mt-20"
      >
        <div className="emerging-tech-white-div-drop-shadow flex flex-col items-start justify-star gap-2 text-start p-5 mx-3 sm:w-[80%] lg:w-[78%] rounded-[10px] hover:bg-[#023267] hover:text-white transition-all-2s">
          <p className="text-[20px] sm:text-[20px] leading-[30px] text-center ">
            PROFESSIONALS WITH DECADES IN THIS INDUSTRY IN COMBINATION WITH
            EXTENSIVE HANDS-ON EXPERIENCE ALLOWS AGILE GLOBAL TO OFFER QUALIFIED
            STAFF TO AUGMENT A CLIENT’S PROJECT TEAM. WITH OUR TECHNOLOGY SAVVY
            BUSINESS PROFESSIONALS WE GET A GOOD UNDERSTANDING OF THE CUSTOMER’S
            BUSINESS AND TECHNICAL REQUIREMENTS.
          </p>
        </div>
      </div>

      {/* see what we have.... */}
      <SocialMediaList />
      
    </>
  );
};

export default ProfessionalConsultingg;

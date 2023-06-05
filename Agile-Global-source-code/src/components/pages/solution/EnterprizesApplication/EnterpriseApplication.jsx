import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import serviceBlueBg from "../../../../images/solution/enterprise-app/service-inclued-bg.svg";
import serviceFrontImg from "../../../../images/solution/enterprise-app/service-include-img.svg";
import SocialMediaList from "../../../Regular/SocialMediaList";
import Header from "../../../Regular/Header";
import { exterpriseAppList, servicesIncludeList } from "./enterprizeData";
import ServicesChecklist from "../../../Regular/ServicesChecklist";

const EnterpriseApplication = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Header
        image="enterprise-app-bg-img"
        title="ENTERPRISE APPLICATION MANAGEMENT"
        description=" Agile Global can customize, implement, integrate, upgrade, maintain
          and support Custom Off the Shelf applications based on customer’s
          needs."
      />
      {/* hr line */}
      <div
        data-aos="fade-up"
        className="flex flex-col items-center justify-center"
      >
        <div className="line w-[85vw] md:w-[70vw] lg:w-[70vw] bg-black h-[2px] mt-12 mb-6 "></div>
        <p className="text-center text-[20px] leading-[30px] px-3 md:px-20 lg:px-36 xl:px-52">
          In today’s enterprise, myriad applications run in parallel, processing
          and presenting pertinent information to executives and staff from the
          various functional silos within an organization. We add value by
          providing functional, technical, and project management expertise for
          product customizations, implementations, conversions, upgrades,
          migrations, and production support of such applications.
        </p>
      </div>

      {/* below hero section */}
      <div
        data-aos="fade-up"
        className="my-8 flex flex-col items-center justify-center"
      >
        <p className="text-[20px] font-semibold text-clip sm:text-[25px] md:text-[35px] lg:text-[40px] mb-7">
          Our services include:
        </p>

        {/* image and text div */}
        <div className="flex flex-col items-center justify-center gap-9 lg:flex-row px-3 lg:px-20">
          {/* img div */}
          <div className="enterprise-outter-card-eff rounded-[60px] relative">
            <img className="" src={serviceBlueBg} alt="" />
            <img
              className="enterprise-inner-card-img enterprise-service-front-img-tilt absolute bottom-4 sm:left-8  sm:w-auto"
              src={serviceFrontImg}
              alt=""
            />
          </div>

          {/* content div */}
          <div className="flex items-center justify-center bg-[#023267] text-white rounded-[15px] lg:w-[40%] p-4">
            <ul className="flex items-start flex-col justify-center gap-3">
              {servicesIncludeList?.map((elem) => (
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

      {/*  below service div   */}

      <div
        data-aos="fade-up"
        className="flex items-center justify-center flex-col my-16"
      >
        <p className="text-[24px] sm:text-[30px] leading-[30px] text-center px-3 md:px-20 lg:px-36 xl:px-52 mb-9">
          WE HAVE EXPERTS IN VARIOUS MODULES OF THE FOLLOWING BUT NOT ALL
          INCLUSIVE LIST OF PACKAGED ENTERPRISE APPLICATIONS:
        </p>

        {/* small blue boxes div  */}
        <div className="flex items-center justify-center flex-col sm:flex-row flex-wrap gap-4 md:px-11 xl:px-24">
          {/* box 1  */}
          {exterpriseAppList?.map((elem) => (
            <div key={elem?.title} className="w-[265px] h-[82px] flex items-center justify-center bg-[#023267] rounded-[10px] ">
              <p className="text-[22px] text-[white] text-center ">
               {elem?.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* see what we have.... */}
      <SocialMediaList />
    </>
  );
};

export default EnterpriseApplication;

import React from "react";
import logo from "../../../images/nav/logo-transparent.png";
import {
  navbarList,
  branchesList,
  IconList,
  companyDetails,
} from "./footerData";

const Footer = () => {
  return (
    <>
      <section className="relative footer-bg mt-10 flex  flex-col-reverse items-center sm:flex-row sm:flex-wrap sm:items-start justify-evenly pt-10 pb-28 md:px-5 lg:py-22 lg:pt-10  lg:px-10 gap-14 sm:gap-5 xl:gap-0">
        {/* company */}
        <div className=" sm:w-[230px] md:w-[110px] lg:w-[120px] flex flex-col items-start justify-start">
          <p className="text-[18px] font-bold mb-2  md:mb-10">Company</p>
          <ul
            className="flex flex-col items-center sm:items-start jus
              text-[14px] gap-3 md:gap-5"
          >
            {navbarList?.map((elem) => (
              <li className="" key={elem}>
                {elem}
              </li>
            ))}
          </ul>
        </div>

        {/* headquarter */}
        <div className=" flex flex-col items-center justify-center sm:items-start sm:justify-start sm:w-[300px] md:w-[210px]">
          <p className="text-[18px] font-bold mb-2 md:mb-10">Headquarter</p>
          <ul
            className="flex flex-col items-center justify-center sm:items-start sm:justify-start
              text-[14px] gap-3 md:gap-5"
          >
            {companyDetails?.map((elem) => (
              <li
                key={elem?.title}
                className="px-5 text-center sm:px-0 sm:text-start"
              >
                {elem?.title}
              </li>
            ))}

            <li>
              <a className="underline " href="mailto:info@agileglobal.com">
                info@agileglobal.com
              </a>
            </li>
          </ul>
        </div>

        {/* company */}
        <div className=" flex flex-col items-center justify-center sm:items-start sm:justify-start sm:w-[230px]  lg:w-[229px]">
          <p className="text-[18px] font-bold mb-2 md:mb-10 ">
            Main Branch Offices
          </p>
          <ul
            className="flex flex-col items-center justify-center sm:items-start sm:justify-center
              text-[14px] gap-3 sm:gap-4"
          >
            {branchesList?.map((elem) => (
              <li className="" key={elem}>
                {elem}
              </li>
            ))}
          </ul>
        </div>

        {/* email */}
        <div className=" flex flex-col items-center justify-center sm:w-[290px] md:w-full md:px-10 xl:w-[449px] md:mt-6 xl:mt-0">
          <img
            className="w-[233px] h-[94px] sm:w-[263px] sm:h-[84px] mb-3"
            src={logo}
            alt=""
          />
          <p className="text-[14px] xl:w-[494px] mb-2 text-center xl:text-start px-4 sm:px-0 sm:text-start md:text-center xl:px-0">
            All trademarks and logos or registered trademarks and logos found on
            this Site or mentioned herein belong to their respective owners and
            are solely being used for informational purposes.
          </p>
          <div className=" flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            <input
              className="rounded-[8px] md:rounded-none px-6 md:w-[325px] md:h-[40px]
                        h-[30px] w-[300px] text-[14px] bg-white"
              type="email"
              placeholder="your email"
            />
            <button className="bg-black text-white text-[16px] px-[30px] md:px-[30px] py-1 md:py-2 rounded-[8px] md:rounded-none">
              Subscribe
            </button>
          </div>
        </div>

        {/* social links div */}
        <div className="absolute bottom-0  mt-4 pb-4">
          {/* line */}
          <div className="h-[2px] w-[80vw] sm:w-[80vw] xl:w-[90vw]  bg-black my-3 mt"></div>
          {/* follow links  and copyright*/}
          <div className="flex flex-col md:flex-row items-center justify-evenly gap-1 md:gap-12">
            {/* folow */}
            <div className="flex items-center justify-center text-[20px]  gap-4">
              <p className="text-[18px]">Follow us on: </p>
              {/* icons */}
              <div className="flex items-center justify-center gap-6 md:gap-4">
                {IconList?.map((elem) => (
                  <elem.title className="" key={elem?.title}></elem.title>
                ))}
              </div>
            </div>
            {/* copyright */}
            <p className="text-[14px] text-center">
              Agile Global 2021-2022 - All rights reserved
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

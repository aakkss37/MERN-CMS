import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import SocialMediaList from "../../../Regular/SocialMediaList";
import Header from "../../../Regular/Header";
import { oursourceDataList } from "./outsourcingData";
const StrategicOutsourcing = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Header
        image="strategic-bg-img"
        title="STRATEGIC OUTSOURCING"
        description="We help translate defined project scopes into quality solutions,
            understand and meet customer’s vision, reduce time to market,
            enhance ROI using relevant technology, proven processes and best
            practices, delivering positive customer experience every time
            through cost effective solutions, execution through proven
            methodologies and timely deliverables within project constraints."
      />
      {/* below white div */}
      <div
        data-aos="fade-down"
        className="startegic-drop-shadow flex items-center justify-center w-full py-10 px-3 md:px-6 lg:px-10 xl:px-44"
      >
        <p className="text-center text-[18px] sm:text-[20px] leading-[30px]">
          AGILE GLOBAL’s proven and proprietary engagement management
          methodology, expertise and global delivery capability helps create the
          ideal solution for our clients
        </p>
      </div>

      {/* text content div */}
      <div
        data-aos="fade-up"
        className="text-[16px] sm:text-[18px] text-center md:text-start leading-[30px]  flex flex-col items-center justify-center gap-5 md:gap-10 md:flex-row my-5  py-10 px-3 md:px-6 lg:px-10 xl:px-44"
      >
        {oursourceDataList?.map((elem) => (
          <p key={elem?.title}>{elem?.title}</p>
        ))}
      </div>

      {/* below blue div */}
      <div
        data-aos="fade-up"
        className="bg-[#023267] text-white flex items-center justify-center w-full py-10 px-3 md:px-6 lg:px-10 xl:px-44"
      >
        <p className="text-center text-[22px] sm:text-[24px] leading-[30px]">
          Our experienced team can offer you expert customized consulting
          services and solutions by leveraging best of breed technologies to
          deliver business critical solutions.
        </p>
      </div>

      {/* see what we have.... */}
      <SocialMediaList />
    </>
  );
};

export default StrategicOutsourcing;

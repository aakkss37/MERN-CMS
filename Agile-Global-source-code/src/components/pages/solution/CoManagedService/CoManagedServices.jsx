import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import yellow from "../../../../images/solution/co-managed/yellow.svg";
import Header from "../../../Regular/Header";
import SocialMediaList from "../../../Regular/SocialMediaList";
const CoManagedServices = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Header
        image="co-managed-bg-img"
        title="CO MANAGED SERVICES"
        description=" Our customers really enjoy and reap the benefits of us co-managing
              time and material projects along with their project management
              team."
      />
      {/*  */}
      <div
        data-aos="zoom-in"
        className="mt-10 px-3 sm:px-3 md:px-6 lg:px-10 xl:px-44"
      >
        <p className="text-[24px] sm:text-[32px] text-center font-semibold text-[#023267]">
          We capture the best of both worlds through our Co-Managed T&M
          solution.
        </p>
      </div>

      {/* text content div */}
      <div
        data-aos="fade-up"
        className="text-[16px] sm:text-[18px] text-center md:text-start leading-[30px]  flex flex-col items-center justify-center gap-5 md:gap-10 md:flex-row my-5  py-10 px-3 md:px-6 lg:px-10 xl:px-44"
      >
        <p>
          In this service we provide teams of resources. The project/technical
          lead from AGILE GLOBAL undertakes certain project coordination
          responsibilities such as resource management, task allocation, QA etc
          thus freeing the client Project Manager from day-to-day administrative
          activities. <br />
          The leads are also responsible for team building, career pathing, and
          consultant performance measurement and evaluation activities. This
          cost-effective option promotes higher retention and motivation of
          employees ensuring project continuity.
        </p>

        <img
          className=" transition  ease-in-out delay-150  hover:scale-110 hover-drop-shadow "
          src={yellow}
          alt=""
        />
      </div>

      {/* see what we have.... */}
      <SocialMediaList />
    </>
  );
};

export default CoManagedServices;

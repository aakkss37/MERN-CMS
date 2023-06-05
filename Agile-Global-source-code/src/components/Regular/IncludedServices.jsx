import React from "react";

const IncludedServices = ({ elem }) => {
  return (
    <div
      key={elem?.title}
      className="emerging-tech-white-div-drop-shadow flex flex-col items-start justify-start gap-2 text-start p-5  sm:w-[80%] lg:w-[70%] rounded-[10px] mx-3 "
    >
      <p className="text-[22px] sm:text-[24px] font-semibold">{elem?.title}</p>
      <p className="text-[20px] sm:text-[20px] leading-[30px] text-start">
        {elem?.description}
      </p>
    </div>
  );
};

export default IncludedServices;

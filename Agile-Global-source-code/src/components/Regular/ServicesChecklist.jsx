import React from "react";
import tick from "../../images/solution/professional/tick.svg";

const ServicesChecklist = ({ title, width }) => {
  return (
    <div className="flex items-center gap-2" style={{ width: width }}>
      <img src={tick} alt="" />
      <p className="text-white text-start text-[20px] leading-[32px]">
        {title}
      </p>
    </div>
  );
};

export default ServicesChecklist;

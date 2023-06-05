import React, { useState } from "react";

// blue and white div
import globeImg from "../../../../images/solution/custom-app/globe.svg";
import serviceIcon from "../../../../images/solution/custom-app/service.svg";

const AwardCard = ({ elem }) => {
  const [showServiceImg1, setShowServiceImg1] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowServiceImg1(true)}
      onMouseLeave={() => setShowServiceImg1(false)}
      className={elem?.className}
    >
      {showServiceImg1 ? (
        <img src={elem?.image2} alt="" />
      ) : (
        <img src={elem?.image1} alt="" />
      )}
      <p className="text-[24px] font-semibold">{elem?.title}</p>
      <p className="text-[16px]">{elem?.description}</p>
      <p className="text-[16px]">{elem?.readMore}</p>
    </div>
  );
};

export default AwardCard;

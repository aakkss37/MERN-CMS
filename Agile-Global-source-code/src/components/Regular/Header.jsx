import React from "react";

const Header = ({image,title,description}) => {
  return (
    <div
      data-aos="fade-up"
      className={`w-full h-[50dvh] md:h-[43dvh] xl:h-[74dvh] ${image} flex flex-col items-center justify-center px-3 lg:px-40 bg-red-400`}
    >
      <h1 className="text-[24px]  sm:text-[47px] md:text-[57px] font-bold text-white text-center">
       {title}
      </h1>
      <p className="text-[18px] sm:text-[24px] text-white text-center">
        {description}
      </p>
    </div>
  );
};

export default Header;

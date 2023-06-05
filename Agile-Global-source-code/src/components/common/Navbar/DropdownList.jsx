import React from "react";
import { Link } from "react-router-dom";

const DropdownList = ({
  dataList,
}) => {


  return (
    <>
      <div
        className={`home-nav-desk-animation-links absolute z-10 top-[90px] bg-white 
         `}
      >
        <ul className=" flex flex-col items-center justify-center gap-2 p-4 emerging-tech-white-div-drop-shadow text-[12px] ">
          {dataList?.map((elem) => (
            <li className={elem?.className} key={elem?.title}>
              <Link to={elem?.url}>{elem?.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DropdownList;

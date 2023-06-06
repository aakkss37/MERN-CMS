import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const NavbarOption = ({ elem, onHandleClick }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { Children } = elem;
  return (
    <>
      <li
        className={elem?.className}
        key={elem?.title}
        onMouseEnter={() => {
          setShowDropdown(true);
        }}
        onMouseLeave={() => {
          setShowDropdown(false);
        }}
        onClick={() => onHandleClick(elem)}
      >
        <Link className="flex items-center justify-center" to="/">
          {elem?.title} {Children !== null && <MdOutlineKeyboardArrowDown />}
        </Link>
        {Children !== null && showDropdown && (
          <Children
            title={elem?.title}
            dataList={elem?.otherProps}
          />
        )}
      </li>
    </>
  );
};

export default NavbarOption;

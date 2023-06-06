import React, { useState, useEffect, useRef, Children } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../images/nav/logo-1.png";
import { AiOutlineSearch } from "react-icons/ai";
import { VscGlobe } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { navbarMenuList, homeList } from "./navbarData";
import NavbarOption from "./NavbarOption";

const Navbar = () => {
  const navigate = useNavigate();
  const oneRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleOnClickedOutsideMobMenu, true);
  }, []);

  const onHandleClick = (option) => {
    if (option?.url === null) {
      return;
    }
    navigate(option?.url);
  };

  // states for hamburder menu
  const [menuIcon, setMenuIcon] = useState(false);

  //    state to show mabile nav links
  const [ShowMobileNavDiv, setShowMobileNavDiv] = useState(false);

  const handleCrossIcon = () => {
    setMenuIcon(false);
    setShowMobileNavDiv(false);
  };

  const handleHamburgerIcon = () => {
    setMenuIcon(true);
    setShowMobileNavDiv(true);
  };

  //   close menu when clicked outside
  const handleOnClickedOutsideMobMenu = (e) => {
    console.log(oneRef);
    if (oneRef.current.contains(e.target)) {
      setMenuIcon(false);
      setShowMobileNavDiv(false);
    }
  };

  return (
    <>
      {/* // main div starts */}
      <div
        className="relative flex justify-between px-4 items-center lg:justify-start  gap-x-40"
        style={{ height: "65px" }}
      >
        {/* logo div */}
        <div>
          <Link to="/">
            <img
              className="md:ml-4 w-[120px] h-[35px] my-3 lg:my-0"
              src={logo}
              alt="logo"
            />
          </Link>
        </div>
        {/* links div */}
        <div className="hidden lg:flex ">
          <ul className="flex items-center justify-center text-[14px] gap-x-10">
            {navbarMenuList?.map((elem) => {
              return (
                <NavbarOption
                  elem={elem}
                  onHandleClick={onHandleClick}
                />
              );
            })}
          </ul>
        </div>
        {/* search and language div */}
        <div className="hidden xl:flex ml-10 items-center justify-center gap-1">
          <AiOutlineSearch className="text-[18px] "></AiOutlineSearch>
          <p className="text-[14px]">English/Other language</p>
          <VscGlobe className="text-[16px] font-bold"></VscGlobe>
        </div>

        <VscGlobe className="text-[18px] font-bold hidden lg:flex xl:hidden"></VscGlobe>

        {/* mobile responsive  */}
        <div className="lg:hidden">
          {menuIcon ? (
            <RxCross2
              onClick={handleCrossIcon}
              className="text-[22px] font-bold"
            ></RxCross2>
          ) : (
            <GiHamburgerMenu
              onClick={handleHamburgerIcon}
              className="text-[22px] font-bold"
            ></GiHamburgerMenu>
          )}
        </div>
      </div>

      {/* mobile links   */}
      {ShowMobileNavDiv && (
        <div
          ref={oneRef}
          className="home-nav-desk-animation-links z-10 mobile-nav-drop-shadow absolute top-[65px]  w-full bg-white "
        >
          <h1 className="flex items-center justify-center text-[18px] sm:text-[20px] p-2">
            Hello
          </h1>
        </div>
      )}
    </>
  );
};

export default Navbar;

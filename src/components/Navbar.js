import React, { useState } from "react";
import imgG from "../assets/image/G.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NavbarIcons from "./NavbarIcons";
import NavbarIconsSocial from "./NavbarIconsSocial";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  const icon = isOpen ? (
    <AiOutlineClose
      fontSize={30}
      color="white"
      className=" hidden sm:block"
      onClick={handleClickNavbar}
    />
  ) : (
    <AiOutlineMenu
      fontSize={30}
      color="white"
      className=" hidden sm:block"
      onClick={handleClickNavbar}
    />
  );

  return (
    <div className="bg-[#042C54] w-[80px] lg:w-full flex flex-col lg:flex-row justify-between items-center py-7 lg:py-0 lg:p-4 ">
      <div className="">
        <img src={imgG} alt="img-g" className="w-[80%]" />
        <p className="text-[#436D99] font-semibold text-lg">Gorgi</p>
      </div>
      <NavbarIcons display="hidden" />
      <NavbarIconsSocial display="hidden" />

      {icon}
      {isOpen && (
        <div className="absolute right-0 left-[6rem] top-[4.5rem] z-10 bg-[#040C19] w-full flex justify-around items-center p-2 slide-left z-20">
          <NavbarIcons display="flex" />
          <NavbarIconsSocial display="flex" />
        </div>
      )}
    </div>
  );
};

export default Navbar;

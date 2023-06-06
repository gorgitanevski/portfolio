import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineFacebook,
} from "react-icons/ai";
const NavbarIconsSocial = ({ display }) => {
  return (
    <div
      className={`text-xl text-white flex lg:flex-row flex-col  justify-center itmes-center  gap-2 sm:${display}`}
    >
      <AiFillGithub />
      <AiFillLinkedin />
      <AiOutlineFacebook />
    </div>
  );
};

export default NavbarIconsSocial;

import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineFacebook,
} from "react-icons/ai";
const NavbarIconsSocial = ({ additionalClass }) => {
  return (
    <div
      className={`text-xl text-white flex lg:flex-row flex-col  justify-center itmes-center  gap-2 ${additionalClass}`}
    >
      <AiFillGithub />
      <AiFillLinkedin />
      <AiOutlineFacebook />
    </div>
  );
};

export default NavbarIconsSocial;

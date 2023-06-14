import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
const NavbarIconsSocial = ({ additionalClass }) => {
  return (
    <div
      className={`text-xl text-white flex lg:flex-row flex-col  justify-center itmes-center  gap-2 ${additionalClass}`}
    >
      <Link to="https://github.com/gorgitanevski">
        <AiFillGithub />
      </Link>
      <Link to="https://www.linkedin.com/in/gorgi-tanevski-99086a27a/">
        <AiFillLinkedin />
      </Link>
      <Link to="https://gorgitanevski_cv.tiiny.site/">
        <p className="text-xs font-bold">C.V</p>
      </Link>
    </div>
  );
};

export default NavbarIconsSocial;

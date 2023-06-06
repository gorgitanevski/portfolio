import React, { useState } from "react";
// import { ButtonCart } from "./Heading";
import { BsGithub, BsLink45Deg } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProjectCart = ({ app }) => {
  const [isHover, setIsHover] = useState(false);
  if (!app) return;

  const handleHover = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <li
      className="max-w-[310px] max-h-[350px]  cursor-pointer"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <img src={app.image} alt="app-img" className="w-full max-h-[207px]" />
      <div
        className={`p-4 ${
          isHover && "hidden"
        } bg-[#042C54] h-[168px] flex flex-col`}
      >
        <div className="text-[24px] font-semibold text-white ">{app.title}</div>
        <p className="text-white text-sm mt-9">Read Full</p>
      </div>

      {isHover && (
        <div
          className={`w-full  p-4 bottom-[-3rem] bg-[#042C54] h-[250px] flex flex-col justify-around slide-top`}
        >
          <div className="text-[24px] font-semibold text-white">
            {app.title}
          </div>
          <p className="text-white text-sm mt-9">{app.about}</p>
          <div className="flex flex-row gap-3">
            <Link to={app.git_hub} className="text-white hover:text-black">
              <BsGithub fontSize={30} />
            </Link>
            {app.link ? (
              <Link to={app.link} className="text-white hover:text-black">
                <BsLink45Deg fontSize={30} />
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </li>
  );
};

export default ProjectCart;

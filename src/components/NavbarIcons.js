import {
  AiOutlineMail,
  AiOutlineSetting,
  AiOutlineUser,
  AiOutlineHome,
  AiOutlineEye,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const NavbarIcons = () => {
  const links = [
    { label: "Home", to: "/", icon: <AiOutlineHome /> },
    { label: "About", to: "about", icon: <AiOutlineUser /> },
    { label: "Skils", to: "skils", icon: <AiOutlineSetting /> },
    { label: "Projects", to: "projects", icon: <AiOutlineEye /> },
    { label: "Contact", to: "contact", icon: <AiOutlineMail /> },
  ];

  return (
    <div className={`text-4xl text-white flex  flex-col lg:flex-row gap-3`}>
      {links.map((link) => {
        return (
          <Link
            key={link.label}
            to={link.to}
            className="group flex justify-center items-center h-[30px]"
          >
            <span className="group-hover:text-red-500 group-hover:hidden">
              {link.icon}
            </span>
            <span className="hidden group-hover:inline text-sm font-bold">
              {link.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default NavbarIcons;

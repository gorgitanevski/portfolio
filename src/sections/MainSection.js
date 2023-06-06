import React, { useEffect, useState } from "react";
import mainImg from "../assets/image/mainPhoto.png";
import { Link } from "react-router-dom";

const MainSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <main
      className={`gradient__bg h-screen flex flex-row md:flex-col items-center md:justify-center justify-around sm:pt-7 fade-in ${
        loaded ? "loaded" : ""
      }`}
    >
      <div className="flex flex-col gap-7 justify-start items-start z-10 lg:pl-7">
        <h1 className="text-6xl md:text-5xl  font-bold text-white flex-none text-animate">
          Hi, <br />
          I'm Gorgi, <br />
          web developer
        </h1>
        <p className="text-[#81AFDD] text-3xl">Front End Developer</p>

        <button className="border text-semibold px-6 py-2 bg-[#042C54] text-white text-xl transition duration-300 ease-in-out hover:bg-white hover:text-black">
          <Link to="/contact">Contact</Link>
        </button>
      </div>
      <div>
        <img
          src={mainImg}
          alt="main-img"
          className="w-[566px]  h-[516px] md:w-[80%] md:h-[80%] mx-auto"
          // className="w-[800px] h-[700px] "
        />
      </div>
    </main>
  );
};

export default MainSection;

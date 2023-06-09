import React, { useState, useEffect } from "react";
import { Heading, Paragraph, Item } from "../components/Heading";
import { Link } from "react-router-dom";

const SkilsSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      className={`gradient__bg h-screen lg:h-full flex lg:flex-col flex-row justify-around items-center lg:gap-0 gap-11 pt-11 px-[7rem] fade-in ${
        loaded ? "loaded" : ""
      }`}
    >
      <div className="max-w-[45%] sm:max-w-[67%] lg:max-w-none sm:mb-3">
        <h1 className="text-white text-5xl lg:text-3xl font-bold lg:text-center  mb-7">
          My Skils
        </h1>
        <p className="text-[#81AFDD] text-3xl md:text-lg my-text sm:leading-7 leading-10">
          I have expiriance including technologies like html,css3,javascript,
          react. react toolkit, sass, git, etc. visit my Linkedin profile. Also
          you can checkout my cv on this
          <Link to="/cv" className="border-b border-[#81AFDD]">
            link.
          </Link>
        </p>
      </div>

      <div className="flex flex-wrap flex-row sm:gap-3 gap-7 border bg-[#042C54] justify-around  sm:p-3 p-5 w-[700px] md:w-auto  rounded-[15px] text-xl sm:text-xs">
        <div>
          <Heading>Languages</Heading>
          <Paragraph />
          <Item>Html</Item>
          <Item>Css</Item>
          <Item>JavaScript</Item>
        </div>
        <div>
          <Heading>Frameworks</Heading>
          <Paragraph />
          <Item>ReactJs</Item>
          <Item>Redux</Item>
          <Item>Redux-toolkit</Item>
          <Item>Ajax</Item>
          <Item>Parcel</Item>
          <Item>SCSS/Sass</Item>
          <Item>Bootstrap</Item>
        </div>
        <div>
          <Heading>UI/UX</Heading>
          <Paragraph />
          <Item>Figma</Item>
        </div>
      </div>
    </section>
  );
};

export default SkilsSection;

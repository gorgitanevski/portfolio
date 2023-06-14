import React, { useState, useEffect } from "react";
import { Heading, Paragraph, Item } from "../components/Heading";
import { Link } from "react-router-dom";

const SkilsSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const preuzmiCV = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "/static/media/my_cv.2bad74bd0388ef6c12dd.pdf";
    link.download = "/static/media/my_cv.2bad74bd0388ef6c12dd.pdf";
    link.click();
  };

  return (
    <section
      className={`gradient__bg h-screen lg:h-full flex lg:flex-col flex-row justify-around items-center lg:gap-0 gap-11 pt-11 px-[7rem] fade-in ${
        loaded ? "loaded" : ""
      }`}
    >
      <div className="max-w-[45%] sm:max-w-[67%] lg:max-w-none sm:mb-3">
        <h1 className="text-white text-5xl lg:text-3xl font-bold lg:text-center  mb-7">
          My Skills
        </h1>
        <p className="text-[#81AFDD] text-3xl md:text-lg my-text sm:leading-7 leading-10">
          I have experience including technologies like html, css3, javascript,
          react,redux, redux-toolkit, sass, git, etc. Visit my{" "}
          <Link to="https://www.linkedin.com/in/gorgi-tanevski-99086a27a/">
            Linkedin{" "}
          </Link>{" "}
          profile. Also you can checkout my C.V. on this{" "}
          <Link
            to="https://gorgitanevski_cv.tiiny.site/"
            // onClick={preuzmiCV}
            className="border-b border-[#81AFDD]"
          >
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
          <Item>Tailwind Css</Item>
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

import React, { useEffect, useState } from "react";

import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      className={`gradient__bg h-screen flex flex-col justify-center md:justify-start md:items-center md:px-11 pl-[7rem] fade-in ${
        loaded ? "loaded" : ""
      }`}
    >
      <div className="flex flex-col w-[50%] md:w-full gap-7">
        <h1 className="text-6xl md:text-5xl  font-bold text-white md:text-center md:pt-[7rem]">
          About Me
        </h1>
        <p className="text-[#81AFDD] text-2xl lg:text-sm  leading-relaxed md:leading-loos">
          Hello and welcome to my portfolio! My name is Gorgi, and I am a
          motivated Front-End Developer with a passion for creating engaging and
          user-friendly web experiences.I am excited to join a team of
          experienced professionals who can guide and mentor me as I begin my
          journey in the industry. Together, we can create exceptional web
          experiences that engage users and deliver innovative solutions.
        </p>
      </div>
      <div className="stage">
        <div className="stage-cube-cont lg:top-[10rem md:top-[27rem] md:right-[7rem] sta">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSass} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

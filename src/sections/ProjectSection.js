import React, { useEffect, useState } from "react";
import ProjectCart from "../components/ProjectCart";
import { projects } from "../components/Heading";

const ProjectSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      className={`gradient__bg h-screen lg:h-full p-11  fade-in ${
        loaded ? "loaded" : ""
      }`}
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-5xl font-bold text-white text-center mb-7">
          My Projects
        </h2>
        <ul className="flex gap-[1rem] flex flex-row items-center justify-center flex-wrap gap-5">
          {projects.map((app) => {
            return <ProjectCart key={app.title} app={app} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default ProjectSection;

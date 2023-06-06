import React, { useEffect, useState } from "react";
import { FaReact, FaAngular, FaVuejs, FaHtml5 } from "react-icons/fa";
import "./kocka.css";

const Kocka = () => {
  const [currentIcon, setCurrentIcon] = useState(<FaReact />);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const icons = [<FaReact />, <FaAngular />, <FaVuejs />, <FaHtml5 />];
    let currentIndex = 0;

    const interval = setInterval(() => {
      setCurrentIcon(icons[currentIndex]);
      currentIndex = (currentIndex + 1) % icons.length;
      setRotation(Math.random() * 180);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="kocka">
      <div className={`kocka-wrapper transform rotate-y-[${rotation}deg]`}>
        <div className="kocka-face kocka-front">{<FaReact />}</div>
        <div className="kocka-face kocka-back">{<FaVuejs />}</div>
        <div className="kocka-face kocka-left">{<FaHtml5 />}</div>
        <div className="kocka-face kocka-right">{currentIcon}</div>
        <div className="kocka-face kocka-top">{currentIcon}</div>
        <div className="kocka-face kocka-bottom">{currentIcon}</div>
      </div>
    </div>
  );
};

export default Kocka;

"use client";
import React from "react";
import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import Child from "./Child";
import "./BubbleUI.css";
import data from "../config/skills.js";
import { useState, useEffect } from "react";

const useWidth = () => {
  const [width, setWidth] = useState(641);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    //make sure it set properly on the first load (before resizing)
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // the next line for linters, so they won't give a warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // empty
  return width;
};

const SkillsSection = () => {
  const width = useWidth();
  let props = {
    data: data,
  };
  let gutter = 15;
  if (width < 640) {
    gutter = -20;
  }
  if (width < 500) {
    gutter = -30;
  }
  if (width < 450) {
    gutter = -50;
  }
  const options = {
    size: 106,
    minSize: 34,
    gutter: gutter,
    provideProps: true,
    numCols: 6,
    fringeWidth: 96,
    yRadius: 130,
    xRadius: 300,
    cornerRadius: 238,
    showGuides: false,
    compact: true,
    gravitation: 9,
  };
  const children = props.data.map((data, i) => {
    return <Child data={data} className="child" key={i} />;
  });
  return (
    <section id="skills" className="py-10 lg:py-16">
      <div className="flex flex-col items-center container">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-white pb-5">
          Skills and Tools
        </h2>
        <BubbleUI options={options} className="myBubbleUI bg-bg">
          {children}
        </BubbleUI>
      </div>
    </section>
  );
};

export default SkillsSection;

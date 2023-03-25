import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import {
  useSectionTitleReveal,
  useProjectLeftRightReaveal,
} from "../hooks/gsap";

const data = {
  img1: "https://i.ibb.co/VmTj5C3/nasimhelal.jpg",
  img2: "https://i.ibb.co/vPXnSfZ/nasim-helal.jpg",
};

const About = () => {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);
  const aboutTitleRef = useRef(null);

  const aboutSides = [aboutLeftRef, aboutRightRef];

  useHoverEffect(aboutLeftRef, data.img1, data.img2);
  useSectionTitleReveal(aboutTitleRef);
  useProjectLeftRightReaveal(aboutSides);

  return (
    <div className="about container mx-auto mt-40" id="about">
      <div className="overflow-hidden">
        <h2 className="section-title" ref={aboutTitleRef}>
          About Me
        </h2>
      </div>
      <div className="about-wrapper mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20 overflow-hidden">
        <div className="about-left" ref={aboutLeftRef}></div>
        <div className="about-right" ref={aboutRightRef}>
          <p>
            As a proficient front-end programmer, I possess expertise in React,
            Redux, Tailwind, and JavaScript that enables me to build robust and
            user-friendly web applications. With a degree in CSE and a solid
            understanding of DSA, I have a strong foundation in programming and
            problem-solving that allows me to efficiently tackle complex
            projects.
          </p>
          <p className="mt-10">
            My strong teamwork skills and goal-oriented approach make me a
            valuable asset to any development team. I am driven by a strong work
            ethic and a desire to continuously improve my skills, and I have a
            proven ability to quickly learn new technologies, create clean code,
            and develop visually appealing designs. With my talent and passion
            for web development, I am well-equipped to take on challenging
            projects and deliver exceptional results.
          </p>
          <a
            href="https://docs.google.com/document/d/1OrgGfCGOGDp1HiZMma9haDAHTRdaWxxHVS6rQWXlj7A/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block py-8 px-14 border uppercase rounded-full border-white/20 hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
            View My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

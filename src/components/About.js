import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";

const data = {
  img1: "https://i.ibb.co/gTpdWyt/about-image-2.jpg",
  img2: "https://i.ibb.co/ZhNpqhK/about-image-1.jpg",
};

const About = () => {
  const aboutLeftRef = useRef(null);

  useHoverEffect(aboutLeftRef, data.img1, data.img2);

  return (
    <div className="about container mx-auto mt-40" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-wrapper mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="about-left" ref={aboutLeftRef}></div>
        <div className="about-right">
          <p>
            My name is Md. Shohanur Rahman and I’m a web developer. My expertise
            lays in website design and development, the world wide web,
            interactive experiences, and applications.
          </p>
          <p className="mt-10">
            What I love about being a web developer is that every day there is a
            new problem to solve, and my happiness is to solve these problems
            with joy.
          </p>
          <a
            href="https://docs.google.com/document/d/1heAA15qIMAcIEHGPKMR1ZsyvuFdb7oG0MXFzkz46DQU/edit?usp=share_link"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block py-10 px-20 border uppercase rounded-full border-white/20 hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
            View My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

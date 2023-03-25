import { useRef } from "react";
import { useBioReveal } from "../hooks/gsap";

const Bio = () => {
  const bioRef = useRef(null);

  useBioReveal(bioRef, 2);

  return (
    <div className="bio mt-20 container mx-auto overflow-hidden">
      <p ref={bioRef}>
        Proficient front-end programmer with expertise in utilizing React,
        Redux, Tailwind, and JavaScript to build robust and user-friendly web
        applications. Holds a CSE degree and a solid understanding of DSA.
        Possess strong teamwork skills and a goal-oriented approach. Proven
        ability in quick learning, efficient clean coding, and creating stunning
        designs. It was driven by a strong work ethic and the desire to
        continuously improve ongoing skills, delivering unparalleled outcomes.
      </p>
    </div>
  );
};

export default Bio;

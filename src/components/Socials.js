import { useRef } from "react";
import { useSocialBoxReveal } from "../hooks/gsap";

const data = [
  {
    id: 1,
    title: "Facebook",
    url: "https://www.facebook.com/nasim.helal.39",
  },

  {
    id: 2,
    title: "Twitter",
    url: "https://twitter.com/helal_nasim",
  },
  {
    id: 3,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/nasimhelal/",
  },
  {
    id: 4,
    title: "GitHub",
    url: "https://github.com/nasimhelal-cell",
  },
  {
    id: 5,
    title: "Leetcode",
    url: "https://leetcode.com/NasimHelal/",
  },
];

const Socials = () => {
  const socialBoxRef = useRef(null);

  useSocialBoxReveal(socialBoxRef, 2.5);

  return (
    <div
      className="socials flex gap-5 uppercase text-sm fixed left-10 top-[75%] origin-left -rotate-90 text-white/30 bg-black/30 p-5 backdrop-blur-xl z-50"
      ref={socialBoxRef}
    >
      {data.map((social) => (
        <a
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          className="hover:text-cyan-400 duration-500"
        >
          {social.title}
        </a>
      ))}
    </div>
  );
};

export default Socials;

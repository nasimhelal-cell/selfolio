import { useRef } from "react";
import Project from "./Project";
import { useSectionTitleReveal } from "../hooks/gsap";

const data = [
  {
    id: 1,
    title: "TechAlpha - An electronic accessories store",
    img1: "https://i.ibb.co/kSBVw4s/techalpha1.png",
    img2: "https://i.ibb.co/mGKqYyc/techalpha2.png",
    description:
      "An online electronics accessories store built with React, Redux, Tailwind CSS, Redux Thunk, and Redux Toolkit. This e-shop allows customers to browse and purchase various electronic accessories such as phone cases, chargers, cables, and more. The user-friendly interface, powered by React, is accompanied by the sleek styling provided by Tailwind CSS. The efficient management of state and asynchronous actions is handled by Redux and its related packages, ensuring a seamless shopping experience for the customer.",
    tools: [
      "React.js",
      "Redux",
      "Redux Thunk",
      "Redux Toolkit",
      "Axios",
      "Tailwind CSS",
    ],
    liveLink: "https://techalpha-nh.netlify.app/",
    frontEndLink: "https://github.com/nasimhelal-cell/techalpha",
  },
  {
    id: 2,
    title: "Foodverse- A Recipe Finder Web Application",
    img1: "https://i.ibb.co/89R2f6j/foodverse1.png",
    img2: "https://i.ibb.co/6RKN3xW/foodverse2.png",
    description:
      "Foodverse is a recipe platform that allows users to search and save recipes with ease. It provides quick access to a wide range of recipes and their ingredients, making it perfect for food enthusiasts looking to improve their cooking skills.",
    tools: ["React.js", "React Router Dom", "Tailwind CSS"],
    liveLink: "nh-foodverse.netlify.app/",
    frontEndLink: "https://github.com/nasimhelal-cell/nh_foodverse",
  },
  {
    id: 3,
    title: "Proxima: A User Account Management Web App Template",
    img1: "https://i.ibb.co/cL4C0f5/proxima1.png",
    img2: "https://i.ibb.co/nCBYk4P/proxima2.png",
    description:
      "Proxima is a web app template with user account management features, including sign up, login, and logout. Ideal for fast-tracking projects that require authentication functionality.",
    tools: [
      "React.js",
      "React Router Dom",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Mongoose",
      "Mongo DB",
    ],
    liveLink: "https://www.proximanh.netlify.app/",
    frontEndLink: "https://github.com/nasimhelal-cell/proxima-frontend",
    backEndLink: "https://github.com/nasimhelal-cell/proxima-server",
  },
];

const Projects = () => {
  const projectTitleRef = useRef(null);

  useSectionTitleReveal(projectTitleRef);

  return (
    <div className="projects container mx-auto mt-40" id="projects">
      <div className="overflow-hidden">
        <h2 className="section-title" ref={projectTitleRef}>
          My Projects
        </h2>
      </div>
      <div className="projects-wrapper mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Skills And Experience
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        <ProjectCard
          src="/Screenshot (93).png"
          title="Modern Next.js Portfolio"
          description="Clean and modern web application with React, THREE.js, and blender. This application is a mix of 3D art and modern UI components using the Material UI library."
        />
        <ProjectCard
          src="/Screenshot (96).png"
          title="Object Oriented Canvas App"
          description="In this project, I utilize OOP techniques to manage state between the components within the application. Here I use various data structures such as a simple stack for redu/undo buttons and a queue for downloading images."
        />
        <ProjectCard
          src="/Screenshot (97).png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import ProjectCard from "./ProjectCard";
import "./projects.css";
const projects = [
  {
    id: 1,
    name: "Meridian Furniture Projects",
    description:
      "A group of mini projects I built during my time at Meridian Furniture to automate specific tasks.",
    link: "",
    image_url: "",
    github_url: "",
  },
  {
    id: 1,
    name: "FedEx Label Generator",
    description: "",
    link: "",
    image_url: "",
    github_url: "",
  },
  {
    id: 2,
    name: "Art Station NY",
    description: "",
    link: "",
    image_url: "",
    github_url: "",
  },
  {
    id: 3,
    name: "Banana",
    description: "",
    link: "",
    image_url: "",
    github_url: "",
  },
];
const Projects = () => {
  return (
    <main>
      <h1>Projects</h1>
      <div className="projects-container">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
};

export default Projects;

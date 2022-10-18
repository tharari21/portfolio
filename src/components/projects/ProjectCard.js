import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <a href={project.link}>
      <div className="project">
        <div className="project__image">
          <img src={project.image_url} />
        </div>
        <div className="project__content">
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;

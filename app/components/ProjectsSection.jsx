"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { useState } from "react";

const ProjectsSection = ({ projects, tags }) => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projects.filter((project) =>
    project.tags.includes(tag),
  );

  return (
    <section id="projects">
      <div className="flex flex-col items-center container">
        <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
      </div>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 mb-4">
        {tags.forEach((tag) => {
          <ProjectTag
            onClick={handleTagChange}
            name={tag}
            isSelected={tag === tag}
          />;
        })}
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            className="flex flex-row"
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

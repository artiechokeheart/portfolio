import ProjectCard from "./ProjectCard";
const data = require("../../public/projectData.js");
import Image from "next/image";

export default function Projects() {
  return (
    <article>
      <h3>Projects</h3>
      <section className="ProjectsContainer">
        {data.map((project) => {
          return (
            <ProjectCard
              key={project.projectTitle}
              id={project.projectTitle}
              project={project}
            />
          );
        })}
      </section>
    </article>
  );
}

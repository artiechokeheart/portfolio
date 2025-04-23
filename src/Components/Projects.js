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
        <div className="currentProject">
          <h4>Current Projects</h4>

          <p>
            I am working on a long-term project that will allow users to
            catalogue their boardgame collections, store information on where
            each game is kept, and suggest games for them to play based on the
            user's desired criteria (number of players, genre of game, etc...).
          </p>
          <p>
            Alongside the boardgame project I started in March, I am also
            working on smaller projects to keep my coding skills sharp. I am
            currently developing a website using Wix based on a 'clients'
            request.
          </p>
        </div>
      </section>
    </article>
  );
}

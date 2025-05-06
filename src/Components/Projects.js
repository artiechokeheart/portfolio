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
            working on smaller projects to keep my coding skills sharp and interning at Digital Edge to get experience coding in a professional enviroment. 
              <br />
            <a href="https://artemisswilkinson.wixstudio.com/360business">Click here to see my current WIP</a>
          </p>
        </div>
      </section>
    </article>
  );
}

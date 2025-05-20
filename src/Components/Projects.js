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
          <p> I am currently interning at Digital Edge and working on their internal projects.</br>
          Currently, I am coding the MVP for their CRM (client resource management) system alongside their Senior Developer. This has allowed me to use my previous experience in administration to provide ideas combined with my coding skills to build something that will improve workflows, and provide a scaleable enviroment for Digital Edge and future customers.
          I am working with Wix Velo and Studio, as well as their database system which is powered by MongoDB. </br>
          I have been designing as well as creating forms, working on the project, payment and client pages, as well as providing testing and feedback to their Senior Developer. </br> 
          I have been immensely enjoying working on professional products, but this has unfortunately slowed down my personal projects! I will provide updates and links when I can.
          <p/>
          <p>
          My first Wix project was completed over the course of a few days in March as a technical test for Digital Edge. 
            working on smaller projects to keep my coding skills sharp and interning at Digital Edge to get experience coding in a professional enviroment. 
              <br />
            <a href="https://artemisswilkinson.wixstudio.com/360business">Click here to see my current WIP</a>
          </p>
              
          <p>
            I am working on a long-term project that will allow users to
            catalogue their boardgame collections, store information on where
            each game is kept, and suggest games for them to play based on the
            user's desired criteria (number of players, genre of game, etc...).
          </p>
        </div>
      </section>
    </article>
  );
}

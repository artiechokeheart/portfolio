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
          I am now interning at <a href="https://www.wearedigitaledge.co.uk/">Digital Edge</a>, working on their internal projects.
          </p>
          <p>
          At the Moment, I am coding the MVP for their CRM (client resource management) system alongside their Senior Developer. This has allowed me to use my previous experience in administration to provide ideas combined with my coding skills to build something that will improve workflows and provide a scalable environment for Digital Edge and future customers.
          I am working with Wix Studio, as well as their database system, which is powered by MongoDB. 
        </p>
          <p>
          I have been designing and creating forms, creating backend functions to add the data to the relevant databases. Coding filters and searches and displaying information from databases for the project, payment, and client pages, as well as providing testing and feedback to the Senior Developer. 
          </p>
          <p>
          I immensely enjoy working on professional products, but this has unfortunately slowed down my personal projects! I will provide updates and links when I can.
         </p>
          <p>
          My first Wix project was completed over a few days in April as a technical test for Digital Edge. <br />
            <a href="https://artemisswilkinson.wixstudio.com/360business">Click here to see the MVP</a>
          </p>
          <p>
            I am working on a long-term project that will allow users to catalogue their board game collections, store information on where each game is kept, and suggest games for them to play based on the user's desired criteria (number of players, genre of game, etc...).
          </p>
        </div>
      </section>
    </article>
  );
}

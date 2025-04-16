import Image from "next/image";
import file from "../../public/file.svg";
import Link from "next/link";
import TechStackCard from "./TechStackCard";

export default function ProjectCard({ project }) {
  return (
    <li>
      <h4>{project.projectTitle}</h4>
      <Image src={file} alt="A thumbnail prepresenting a project" />
      <div className="projectLinks">
        <Link href={project.websiteLinks.frontend}>Frontend</Link>
        <Link href={project.websiteLinks.backend}>Backend</Link>
        <Link href={project.repoLinks.frontend}>Frontend Repo</Link>
        <Link href={project.repoLinks.backend}>Backend Repo</Link>
      </div>
      <p>{project.projectDescription}</p>
      <ul className="tech">
        {project.tech.map((e, index) => {
          return <TechStackCard key={index} tech={e} />;
        })}
      </ul>
    </li>
  );
}
{
  /* <h4>Project Title</h4>
<Image src={file} alt="A thumbnail prepresenting a project" />
<p>A little about the project</p>
<div className="linksContainer">
  <Link href="">Website</Link>
  <Link href="">GitHub</Link>
</div> */
}

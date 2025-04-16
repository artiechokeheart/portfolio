import Image from "next/image";
import file from "../../public/file.svg";
import Link from "next/link";

export default function ProjectCard() {
  return (
    <section>
      <ul>
        <h4>Project Title</h4>
        <Image src={file} alt="A thumbnail prepresenting a project" />
        <p>A little about the project</p>
        <div className="linksContainer">
          <Link href="">Website</Link>
          <Link href="">GitHub</Link>
        </div>
      </ul>
    </section>
  );
}

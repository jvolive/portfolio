import "./projects.scss";
import { SectionTitle } from "../sectionTitle/section-title";
import { Project1 } from "./section-Project/project1/section-project1";
import { Project2 } from "./section-Project/project2/section-project2";

export function Projects() {
  return (
    <div className="projects">
      <SectionTitle text="Projetos" />
      <p>Alguns trabalhos realizados:</p>

      <div className="projects-content">
        <Project1 />
        <Project2 />
      </div>
    </div>
  );
}

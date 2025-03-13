import "./projects.scss";
import { SectionTitle } from "../sectionTitle/section-title";
import { ProjectEvolt } from "./section-Project/evoltProject/section-evolt";
import { ProjectDashboard } from "./section-Project/dashboardProject/section-dashboard";
import { ProjectOfficeLawyer } from "./section-Project/escritorioJeniffer/dashboardProject/section-officeLawyer";

export function Projects() {
  return (
    <div className="projects">
      <SectionTitle text="Projetos" />
      <p>Alguns trabalhos realizados:</p>

      <div className="projects-content">
        {/* <ProjectEvolt /> */}
        <ProjectDashboard />
        <ProjectOfficeLawyer />
      </div>
    </div>
  );
}

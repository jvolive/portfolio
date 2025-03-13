import Image from "next/image";
import { SectionTitle } from "../../../sectionTitle/section-title";

import "./section-dashboard.scss";

export function ProjectDashboard() {
  return (
    <div className="projectDashboard">
      <SectionTitle text="Dashboard Project" />
      <a href="https://dashboardmvp.netlify.app">
        <Image
          src="/dashboard.png"
          alt="Perfil"
          width={450}
          height={231}
          priority
        />
      </a>
      <p>Realizado um dashboard em React usando TypeScript.</p>
    </div>
  );
}

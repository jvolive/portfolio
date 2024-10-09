import Image from "next/image";
import { SectionTitle } from "../../../sectionTitle/section-title";

export function ProjectDashboard() {
  return (
    <div className="projectDashboard">
      <SectionTitle text="Dashboard Project" />
      <a href="https://dashboard-system.bohr.io/dashboard">
        <Image
          src="/dashboard.png"
          alt="Perfil"
          width={450}
          height={231}
          priority
        />
      </a>
      <p>
        Realizado um dashboard em React usando TypeScript, e também desenvolvido
        uma webAPI em ASP.NET.
      </p>
    </div>
  );
}

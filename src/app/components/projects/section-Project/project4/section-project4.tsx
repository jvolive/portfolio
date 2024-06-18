import Image from "next/image";
import { SectionTitle } from "../../../sectionTitle/section-title";

export function Project4() {
  return (
    <div className="projects4">
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
      <p>Realizado um dashboard em TypeScript</p>
    </div>
  );
}

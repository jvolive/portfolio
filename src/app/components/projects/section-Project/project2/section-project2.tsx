import Image from "next/image";
import { SectionTitle } from "../../../sectionTitle/section-title";

export function Project2() {
  return (
    <div className="projects2">
      <SectionTitle text="Dashboard WPF" />

      <Image
        src="/dashboard wpf.PNG"
        alt="Perfil"
        width={450}
        height={231}
        priority
      />

      <p>Projeto realizado com C#, WPF</p>
    </div>
  );
}

import { SectionTitle } from "@/app/components/sectionTitle/section-title";
import Image from "next/image";

import "./section-officeLawyer.scss";

export function ProjectOfficeLawyer() {
  return (
    <div className="projectOffice">
      <SectionTitle text="Escritório de Advogacia " />
      <a href="https://jenifferoliveira.adv.br/">
        <Image
          src="/office.png"
          alt="Perfil"
          width={450}
          height={231}
          priority
        />
      </a>
      <p>Realizado uma LandingPage para um escritório de advogacia.</p>
    </div>
  );
}

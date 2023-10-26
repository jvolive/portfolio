import Image from "next/image";
import { SectionTitle } from "../../sectionTitle/section-title";

export function Project1() {
  return (
    <div className="projects1">
      <SectionTitle text="Evolt Engenharia" />
      <a href="https://evoltengenharia.bohr.io/">
        <Image
          src="/evolt.png"
          alt="Perfil"
          width={450}
          height={231}
          priority
        />
      </a>
      <p>
        Projeto usando as linguagens HTML, CSS e JavaScript. Usado o framework
        Swiper.js
      </p>
    </div>
  );
}

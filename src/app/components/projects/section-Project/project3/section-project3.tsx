import Image from "next/image";
import { SectionTitle } from "../../../sectionTitle/section-title";

export function Project3() {
  return (
    <div className="projects3">
      <SectionTitle text="The Daily News" />
      <a href="https://newsjvolive.bohr.io/">
        <Image src="/news.png" alt="Perfil" width={450} height={231} priority />
      </a>
      <p>
        Projeto usando a API de{" "}
        <a href="https://newsapi.org/">https://newsapi.org/</a>{" "}
      </p>
    </div>
  );
}

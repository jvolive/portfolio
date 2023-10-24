import Image from "next/image";
import "./projects.scss";

export function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-text">
        <h2>Projetos</h2>
        <p>Estes foram os projetos que eu idealizei</p>
      </div>
      <div className="projects-content">
        <div className="projects1">
          <h4>Evolt Engenharia</h4>
          <a href="https://evoltengenharia.bohr.io/">
            <Image
              src="/evolt.png"
              alt="Perfil"
              width={325}
              height={310}
              priority
            />
          </a>
          <p>
            Projeto usando as linguagens HTML, CSS e JavaScript. Usado o
            framework Swiper.js
          </p>
        </div>
        <div className="projects2">
          <a href="">Em desenvolvimento..</a>
          <img src="" alt="" />
          <p>Projeto em desenvolvimento</p>
        </div>
      </div>
    </div>
  );
}

import { Header } from "./components/header/header";

import "./styles/home.scss";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <div className="experience">
        <h3>Experiencia</h3>
        <p>Tenho 1 ano de experiencia trabalhando com .Net como freelancer</p>
        <div className="experience-time"></div>
        <div className="infos">
          <h3>Linguas</h3>
          <div className="languages-info">
            <span> EN - Intermediario</span>
            <span> PT-BR - Nativo</span>
          </div>
          <h3>Formação</h3>
          <div className="educational-info">
            <span>🎓</span>
            <span>
              Engenharia da computação - Universidade Centro Verde Maringa
            </span>
          </div>
        </div>
        <div className="buttons">
          <div className="social"></div>
          <button> Entre em contato</button>
        </div>
      </div>
    </main>
  );
}

import { SectionTitle } from "../sectionTitle/section-title";
import "./information.scss";

export function Info() {
  return (
    <div className="infos">
      <SectionTitle text="Idiomas" />
      <div className="languages-info">
        <span>🇧🇷 PT-BR - Nativo</span>
        <span>🇺🇸 EN - Intermediário</span>
      </div>
      <SectionTitle text="Formação" />
      <div className="educational-info">
        <span>
          Engenharia da computação - Universidade Centro Verde Maringá
        </span>
      </div>
    </div>
  );
}

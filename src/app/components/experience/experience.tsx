import Image from "next/image";
import { SectionTitle } from "../sectionTitle/section-title";

import "./experience.scss";

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experiencia" />
      <p>Tenho 1 ano de experiência trabalhando com .Net como freelancer</p>
      <div className="experience-time">
        <div className="experience-language">
          <Image
            src="/csharp.png"
            alt="CSharp"
            width={45}
            height={45}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure measure-2">
              <span>2 anos</span>
            </div>
          </div>
        </div>
        <div className="experience-language">
          <Image
            src="/Js.png"
            alt="JavaScript"
            width={45}
            height={45}
            priority
          />
          <div className="experience-unit">
            <div className="experience-measure measure-1">
              <span>1 ano</span>
            </div>
          </div>
        </div>
        <div className="experience-language">
          <Image src="/React.png" alt="React" width={45} height={45} priority />
          <div className="experience-unit">
            <div className="experience-measure measure-1">
              <span>1 ano</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

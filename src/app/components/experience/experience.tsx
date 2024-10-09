import Image from "next/image";
import { SectionTitle } from "../sectionTitle/section-title";

import "./experience.scss";

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experiencia" />
      <p>
        Sou desenvolvedor Full Stack com C# trabalhando com .NET, ASP.NET e
        TypeScript com ReactJS.
        <p>Também com conhecimento em PostgreSQL e Azure.</p>
      </p>
      <div className="experience-time">
        <div className="csharp">
          <div className="experience-language">
            <Image
              src="/csharp.png"
              alt="CSharp"
              width={45}
              height={45}
              priority
            />
            <div className="experience-unit">
              <div className="experience-measure measure-3">
                <span>3 anos</span>
              </div>
            </div>
          </div>
        </div>
        <div className="dotnet">
          <div className="experience-language">
            <Image
              src="/dotnet.png"
              alt=".net"
              width={45}
              height={45}
              priority
            />
            <div className="experience-unit">
              <div className="experience-measure measure-3">
                <span>3 anos</span>
              </div>
            </div>
          </div>
        </div>
        <div className="typescript">
          <div className="experience-language">
            <Image
              src="/Ts.png"
              alt="TypeScript"
              width={65}
              height={45}
              priority
            />
            <div className="experience-unit">
              <div className="experience-measure measure-2">
                <span>2 ano</span>
              </div>
            </div>
          </div>
        </div>
        <div className="react">
          <div className="experience-language">
            <Image
              src="/React.png"
              alt="React"
              width={45}
              height={45}
              priority
            />
            <div className="experience-unit">
              <div className="experience-measure measure-2">
                <span>2 ano</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

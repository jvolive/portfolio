import Image from "next/image";
import { SectionTitle } from "../sectionTitle/section-title";

import "./experience.scss";

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experiencia" />
      <p>
        Sou desenvolvedor FrontEnd trabalhando com Flutter, ReactNative.
        <p>Também com conhecimento em HTML/CSS | SQL | APIs REST | .NET</p>
      </p>
      <div className="experience-time">
        <div className="dart">
          <div className="experience-language">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"
              alt="Flutter"
              width="45"
              height="45"
            />
            <div className="experience-unit">
              <div className="experience-measure measure-1">
                <span>1 ano</span>
              </div>
            </div>
          </div>
        </div>

        <div className="react">
          <div className="experience-language">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
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

        <div className="typescript">
          <div className="experience-language">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
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

        <div className="dotnet">
          <div className="experience-language">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg"
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

        {/* <div className="dotnet">
          <div className="experience-language">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg"
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
        </div> */}
      </div>
    </div>
  );
}

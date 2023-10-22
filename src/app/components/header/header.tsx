import Image from "next/image";
import "./header.scss";

export function Header() {
  return (
    <div className="header">
      <div>
        <h1>Olá, Eu sou o João 👋 </h1>
        <h2>Engenheiro de software</h2>
      </div>
      <Image src="/me2.jpg" alt="Perfil" width={325} height={310} priority />
    </div>
  );
}

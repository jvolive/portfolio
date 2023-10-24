import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { Info } from "./components/information/information";
import { SocialBtns } from "./components/buttons/social/social-btns";
import { EmailBtns } from "./components/buttons/email/email-btns";
import { Projects } from "./components/projects/projects";

import "./styles/home.scss";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
      <Info />
      <div className="buttons">
        <SocialBtns />
        <EmailBtns />
      </div>
      <Projects />
    </main>
  );
}

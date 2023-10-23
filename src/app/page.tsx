import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { EmailIcon } from "./components/icons/email-icon";
import { Info } from "./components/information/information";
import { SocialBtns } from "./components/social-btns/social-btns";
//import Clipboard from "./components/clipboard/clipboard";

import "./styles/home.scss";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
      <Info />
      <div className="buttons">
        <SocialBtns />
        <a className="btn-primary" href="">
          Entre em contato
          {/* <Clipboard /> */}
          <EmailIcon />
        </a>
      </div>
    </main>
  );
}

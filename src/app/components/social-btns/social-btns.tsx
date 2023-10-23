import { GitHubIcon } from "../icons/github-icon";
import { LinkedInIcon } from "../icons/linkedin";

import "./social-btns.scss";

export function SocialBtns() {
  return (
    <div className="social">
      <a href="https://www.linkedin.com/in/jvoliveira-/">
        <LinkedInIcon />
      </a>
      <a href="https://github.com/jvolive">
        <GitHubIcon />
      </a>
    </div>
  );
}

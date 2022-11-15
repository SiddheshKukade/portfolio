import React from "react";
import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import { SiKaggle, SiGmail } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div title="Email: contact@siddheshkukade.com">
        <a
          target="_blank"
          href="mailto:contact@siddheshkukade.com"
          rel="noreferrer"
        >
          <SiGmail />
        </a>
      </div>
      <div title="Check Out my Github Profile and Open Source Contributions">
        <a
          target="_blank"
          href="https://github.com/SiddheshKukade"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div title="Check Out my Instagram">
        <a
          target="_blank"
          href="https://instagram.com/SiddheshKukade"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;

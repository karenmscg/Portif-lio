import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FooterContainer, MidiasSociais,IconsMidias, MidiaLink } from "./Footer";

const Footer = () => {
  return (
    <FooterContainer>
      <MidiasSociais>
        <IconsMidias>
          <MidiaLink href="/" target="_blank" aria-label="Linkedin">
            <FaLinkedin />
          </MidiaLink>
          <MidiaLink href="/" target="_blank" aria-label="GitHub">
            <FaGithub />
          </MidiaLink>
        </IconsMidias>
      </MidiasSociais>
    </FooterContainer>
  );
};

export default Footer;

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FooterContainer, A, P1, MidiaLink } from "./Footer";

const Footer = () => {
  return (
    <FooterContainer>
      <P1>Developed by Káren Myllena Gonçalves</P1>
      <MidiaLink>
        <A
          href="https://www.linkedin.com/in/k%C3%A1ren-myllena-gon%C3%A7alves-425b181b2/"
          target="_blank"
          aria-label="Linkedin"
        >
          <FaLinkedin />
        </A>
        <A href="/" target="_blank" aria-label="GitHub">
          <FaGithub />
        </A>
      </MidiaLink>
    </FooterContainer>
  );
};

export default Footer;

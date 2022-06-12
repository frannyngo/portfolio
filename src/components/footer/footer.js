import React from "react";
import { Footer_Container, Link, Box } from "./footer_styles";
import { Container, H2 } from "../../global_styles/theme";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <Container
      style={{
        backgroundColor: "#4db5ff",
        width: "100vw",
        maxWidth: 2000,
        paddingTop: 75,
        paddingBottom: 175,
      }}
    >
      <H2 style={{ color: "#2c2c6c" }}>Francis Tan</H2>
      <Footer_Container>
        <Link href="#">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#portfolio">Portfolio</Link>
      </Footer_Container>
      <Footer_Container style={{ paddingTop: 20 }}>
        <Box href="https://www.instagram.com/frannyngo/" target="_blank">
          <BsInstagram style={{ height: 20, width: 20, color: "white" }} />
        </Box>
        <Box href="https://www.linkedin.com/in/francisngotan/" target="_blank">
          <BsLinkedin style={{ height: 20, width: 20, color: "white" }} />
        </Box>
        <Box href="https://github.com/frannyngo" target="_blank">
          <FaGithub style={{ height: 20, width: 20, color: "white" }} />
        </Box>
      </Footer_Container>
    </Container>
  );
}

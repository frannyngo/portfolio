import React from "react";
import { Footer_Container, Link } from "./footer_styles";
import { Container, Box, H2 } from "../../global_styles/theme";
import Social_Media from "../social_media/social_media";

export default function Footer() {
  return (
    <Container
      style={{
        width: "100vw",
        maxWidth: 2000,
        paddingTop: 175,
        paddingBottom: 175,
      }}
    >
      <H2 style={{ color: "#d3ae36" }}>Francis Tan</H2>
      <Footer_Container>
        <Link href="#">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#portfolio">Portfolio</Link>
      </Footer_Container>
      <Footer_Container style={{ paddingTop: 20 }}>
        <Social_Media />
      </Footer_Container>
    </Container>
  );
}

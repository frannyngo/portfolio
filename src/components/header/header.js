import React from "react";
import { Container, H5, P, H1 } from "../../global_styles/theme";
import CTA from "../cta/cta";
import ME from "../../assets/me.JPG";
import Social_Media from "../social_media/social_media";

export default function Header() {
  return (
    <Container id="#">
      <H5>Hello,&ensp;I'm</H5>
      <H1>Francis Tan</H1>
      <H5 style={{ color: "rgb(255, 255, 255, 0.6", paddingBottom: 20 }}>
        Software Developer
      </H5>
      <Social_Media />
      <CTA />
    </Container>
  );
}

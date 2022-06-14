import React from "react";
import { Container, H5, P, H1 } from "../../global_styles/theme";
import CTA from "../cta/cta";
import ME from "../../assets/me.HEIC.jpg";
import Social_Media from "../social_media/social_media";
import { Image_Container, Image } from "./header_styles";

export default function Header() {
  return (
    <Container id="#">
      <H5>Hello,&ensp;I'm</H5>
      <H1>Francis Tan</H1>
      <H5 style={{ color: "#c1c1c1", paddingBottom: 20 }}>
        Software Developer
      </H5>
      <Social_Media />
      <CTA />
      <Image_Container>
        <Image src={ME} alt="Me" />
      </Image_Container>
    </Container>
  );
}

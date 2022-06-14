import React from "react";
import { Container, H5, P, H1 } from "../../global_styles/theme";
import CTA from "../cta/cta";
import ME from "../../assets/me.HEIC.jpg";
import {
  Image_Container,
  Image,
  Header_Container,
  Header_CTA,
  Social_Media_Box_Mobile,
  Social_Media_Box,
  Social_Media_Container,
} from "./header_styles";

import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const styles = {
  logo: {
    height: 20,
    width: 20,
    color: "#d3ae36",
  },
  logo_desktop: {
    height: 60,
    width: 60,
    color: "#d3ae36",
  },
};

export default function Header() {
  const mediaMatch = window.matchMedia("(min-width: 1024)");

  console.log(mediaMatch);

  return (
    <Container id="#">
      <H5>Hello,&ensp;I'm</H5>
      <H1>Francis Tan</H1>
      <H5 style={{ color: "#c1c1c1", paddingBottom: 20 }}>
        Software Developer
      </H5>
      <Header_Container>
        <Header_CTA>
          <Social_Media_Container>
            <Social_Media_Box_Mobile
              href="https://www.instagram.com/frannyngo/"
              target="_blank"
            >
              <BsInstagram style={styles.logo} />
            </Social_Media_Box_Mobile>
            <Social_Media_Box_Mobile
              href="https://www.linkedin.com/in/francisngotan/"
              target="_blank"
            >
              <BsLinkedin style={styles.logo} />
            </Social_Media_Box_Mobile>
            <Social_Media_Box_Mobile
              href="https://github.com/frannyngo"
              target="_blank"
            >
              <FaGithub style={styles.logo} />
            </Social_Media_Box_Mobile>
            {/* desktop viewport below */}
            <Social_Media_Box
              href="https://www.instagram.com/frannyngo/"
              target="_blank"
            >
              <BsInstagram style={styles.logo_desktop} />
            </Social_Media_Box>
            <Social_Media_Box
              href="https://www.linkedin.com/in/francisngotan/"
              target="_blank"
            >
              <BsLinkedin style={styles.logo_desktop} />
            </Social_Media_Box>
            <Social_Media_Box
              href="https://github.com/frannyngo"
              target="_blank"
            >
              <FaGithub style={styles.logo_desktop} />
            </Social_Media_Box>
          </Social_Media_Container>
          <CTA />
        </Header_CTA>
        <Image_Container>
          <Image src={ME} alt="Me" />
        </Image_Container>
      </Header_Container>
    </Container>
  );
}

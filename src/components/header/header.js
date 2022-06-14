import React, { useEffect, useRef, useState } from "react";
import { Container, H5, H1 } from "../../global_styles/theme";
import CTA from "../cta/cta";
import ME from "../../assets/me.HEIC.jpg";
import { useInView } from "react-intersection-observer";
import {
  Image_Container,
  Image,
  Header_Container,
  Header_CTA,
  Social_Media_Box_Mobile,
  Social_Media_Box,
  Social_Media_Container,
  Header_CTA_Invisible,
  Image_Container_invisible,
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
  const { ref: ref, inView: is_visible } = useInView();
  const { ref: ref_image, inView: is_visible_image } = useInView();

  return (
    <Container id="#">
      <H5>Hello,&ensp;I'm</H5>
      <H1>Francis Tan</H1>
      <H5 style={{ color: "#c1c1c1", paddingBottom: 20 }}>
        Software Developer
      </H5>
      <Header_Container>
        {is_visible ? (
          <Header_CTA ref={ref}>
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
        ) : (
          <Header_CTA_Invisible ref={ref}>
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
          </Header_CTA_Invisible>
        )}
        {is_visible_image ? (
          <Image_Container ref={ref_image}>
            <Image src={ME} alt="Me" />
          </Image_Container>
        ) : (
          <Image_Container_invisible ref={ref_image}>
            <Image src={ME} alt="Me" />
          </Image_Container_invisible>
        )}
      </Header_Container>
    </Container>
  );
}

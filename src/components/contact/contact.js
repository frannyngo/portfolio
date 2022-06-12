import React from "react";
import { Container, H5, H2 } from "../../global_styles/theme";
import { Contact_Container } from "./contact_styles";
import { MdOutlineEmail } from "react-icons/md";

export default function Contact() {
  return (
    <Container id="contact">
      <H5 style={{ color: "rgb(255, 255, 255, 0.6" }}>Get In Touch</H5>
      <H2>Contact Me</H2>
      <Contact_Container></Contact_Container>
    </Container>
  );
}

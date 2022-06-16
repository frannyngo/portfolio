import React, { useRef } from "react";
import { Container, H5, H2 } from "../../global_styles/theme";
import { Contact_Container } from "./contact_styles";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j6lbq8d",
        "template_uxg8a6j",
        form.current,
        "imT83B8oCRSfMudCn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container id="contact">
      <H5 style={{ color: "rgb(255, 255, 255, 0.6" }}>Get In Touch</H5>
      <H2>Contact Me</H2>
      <Contact_Container>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </Contact_Container>
    </Container>
  );
}

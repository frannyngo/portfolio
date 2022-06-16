import React, { useRef } from "react";
import { Container, H5, H2 } from "../../global_styles/theme";
import {
  Contact_Container,
  Form,
  Send_Button,
  Label_Input,
  Text_Input,
  Input_Style,
} from "./contact_styles";
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
        <Form ref={form} onSubmit={sendEmail}>
          <Label_Input>Name</Label_Input>
          <Input_Style type="text" name="user_name" />
          <Label_Input>Email</Label_Input>
          <Input_Style type="email" name="user_email" />
          <Label_Input>Message</Label_Input>
          <Text_Input name="message" />
          <Send_Button type="submit" value="Send" />
        </Form>
      </Contact_Container>
    </Container>
  );
}

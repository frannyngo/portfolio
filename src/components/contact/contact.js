import React, { useRef } from "react";
import { Container, H5, H2 } from "../../global_styles/theme";
import {
  Contact_Container,
  Form,
  Send_Button,
  Label_Input,
  Text_Input,
  Input_Style,
  Contact_Container_Invisible,
  Image_Container,
  Contact_Content_Container,
  Image_Container_Invisible,
} from "./contact_styles";
import { BiMailSend } from "react-icons/bi";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const form = useRef();
  const { ref: ref, inView: is_visible_Form } = useInView();
  const { ref: ref_image, inView: is_visible_image } = useInView();

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
          console.log(result);
          e.target.reset();
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

      <Contact_Content_Container>
        {is_visible_image ? (
          <Image_Container ref={ref_image}>
            <BiMailSend style={{ height: 400, width: 400, color: "#d3ae36" }} />
          </Image_Container>
        ) : (
          <Image_Container_Invisible ref={ref_image}>
            <BiMailSend style={{ height: 400, width: 400, color: "#d3ae36" }} />
          </Image_Container_Invisible>
        )}
        {is_visible_Form ? (
          <Contact_Container ref={ref}>
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
        ) : (
          <Contact_Container_Invisible ref={ref}>
            <Form ref={form} onSubmit={sendEmail}>
              <Label_Input>Name</Label_Input>
              <Input_Style type="text" name="user_name" />
              <Label_Input>Email</Label_Input>
              <Input_Style type="email" name="user_email" />
              <Label_Input>Message</Label_Input>
              <Text_Input name="message" />
              <Send_Button type="submit" value="Send" />
            </Form>
          </Contact_Container_Invisible>
        )}
      </Contact_Content_Container>
    </Container>
  );
}

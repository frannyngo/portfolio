import React from "react";
import { Container, H5, H2 } from "../../global_styles/theme";
import {
  About_Container,
  Image_Container,
  About_Content_Container,
  Description,
  Cube_Container,
  Image_Background,
  Image,
} from "./about_styles";
import About_Cubes from "./about_cube";
import Button from "../../global_styles/button";
import Me from "../../assets/about_me.JPG";

export default function About() {
  return (
    <Container id="about">
      <H5 style={{ color: "rgb(255, 255, 255, 0.6" }}>Get To Know</H5>
      <H2>About Me</H2>
      <About_Content_Container>
        <Image_Container>
          <Image src={Me} alt="Me" />
          <Image_Background />
        </Image_Container>
        <About_Container>
          <Cube_Container>
            <About_Cubes
              image="ribbon"
              header="Experience"
              sub_header="3+ Years"
            />
            <About_Cubes
              image="code"
              header="Languages"
              sub_header="8+ Fluent"
            />
            <About_Cubes
              image="book"
              header="Libraries"
              sub_header="4+ Libraries"
            />
          </Cube_Container>
          <Description>
            Great to meet you. In the last year, I have been expanding my
            knowledge within my field to write better and more efficient code
            with a diverse set of languages, frameworks, databases and libraries
            within my arsenal. Today I am currently working on Crypto-related
            projects while taking a Machine Learning course from MITx!
          </Description>
          <Button primary title={`Let's Talk`} />
        </About_Container>
      </About_Content_Container>
    </Container>
  );
}

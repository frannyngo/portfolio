import React from "react";
import { useInView } from "react-intersection-observer";
import { Container, H5, H2 } from "../../global_styles/theme";
import {
  About_Container,
  Image_Container,
  About_Content_Container,
  Description,
  Cube_Container,
  Image_Background,
  Image,
  Image_Container_Invisible,
  About_Container_Invisible,
} from "./about_styles";
import About_Cubes from "./about_cube";
import Button from "../../global_styles/button";
import Me from "../../assets/about_me.HEIC.jpg";

export default function About() {
  const { ref: ref_image, inView: is_visible_image } = useInView();
  const { ref: ref_info, inView: is_visible_info } = useInView();

  return (
    <Container id="about" background={"#fffdfa"}>
      <H5 style={{ color: "#c1c1c1" }}>Get To Know</H5>
      <H2>About Me</H2>
      <About_Content_Container>
        {is_visible_image ? (
          <Image_Container ref={ref_image}>
            <Image src={Me} alt="Me" />
            <Image_Background />
          </Image_Container>
        ) : (
          <Image_Container_Invisible ref={ref_image}>
            <Image src={Me} alt="Me" />
            <Image_Background />
          </Image_Container_Invisible>
        )}
        {is_visible_info ? (
          <About_Container ref={ref_info}>
            <Cube_Container>
              <About_Cubes
                image="ribbon"
                header="Experience"
                sub_header="3+ Years"
              />
              <About_Cubes
                image="code"
                header="Languages"
                sub_header="5+ Fluent"
              />
              <About_Cubes
                image="book"
                header="Libraries"
                sub_header="10+ Used"
              />
            </Cube_Container>
            <Description>
              Great to meet you. In the last year, I have been expanding my
              knowledge within my field to write better and more efficient code
              with a diverse set of languages, frameworks, databases and
              libraries within my arsenal. Today I am currently working on
              Crypto-related projects while taking a Machine Learning course
              from MITx!
            </Description>
            <Button primary title={`Let's Talk`} />
          </About_Container>
        ) : (
          <About_Container_Invisible ref={ref_info}>
            <Cube_Container>
              <About_Cubes
                image="ribbon"
                header="Experience"
                sub_header="3+ Years"
              />
              <About_Cubes
                image="code"
                header="Languages"
                sub_header="5+ Fluent"
              />
              <About_Cubes
                image="book"
                header="Libraries"
                sub_header="10+ Used"
              />
            </Cube_Container>
            <Description>
              Great to meet you. In the last year, I have been expanding my
              knowledge within my field to write better and more efficient code
              with a diverse set of languages, frameworks, databases and
              libraries within my arsenal. Today I am currently working on
              Crypto-related projects while taking a Machine Learning course
              from MITx!
            </Description>
            <Button primary title={`Let's Talk`} />
          </About_Container_Invisible>
        )}
      </About_Content_Container>
    </Container>
  );
}

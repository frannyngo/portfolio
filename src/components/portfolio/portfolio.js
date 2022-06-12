import React from "react";
import { Portfolio_Container } from "./portfolio_styles";
import { Container, H5, H2 } from "../../global_styles/theme";
import Project from "./project";
import CycurID from "../../assets/cycurID.png";
import Imme from "../../assets/imme.png";
import Imme_App from "../../assets/mobile_app.jpg";

export default function Portfolio() {
  return (
    <Container id="portfolio">
      <H5 style={{ color: "rgb(255, 255, 255, 0.6" }}>My Recent Work</H5>
      <H2>Portfolio</H2>
      <Portfolio_Container>
        <Project
          title="CycurID"
          link="https://cycurid.com/"
          image={CycurID}
          alt="CycurID"
        />
        <Project title="imme" link="https://imme.io/" image={Imme} alt="imme" />
        <Project
          title="imme Mobile IOS"
          link="https://imme.io/"
          image={Imme_App}
          alt="imme_app"
        />
      </Portfolio_Container>
    </Container>
  );
}
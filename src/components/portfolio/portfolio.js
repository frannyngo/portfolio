import React from "react";
import { useInView } from "react-intersection-observer";
import {
  Portfolio_Container,
  Portfolio_Container_Invisible,
} from "./portfolio_styles";
import { Container_Color, H5, H2 } from "../../global_styles/theme";
import Project from "./project";
import CycurID from "../../assets/cycurID.png";
import Imme from "../../assets/imme.png";
import Imme_App from "../../assets/mobile_app.png";

export default function Portfolio() {
  const { ref: ref, inView: is_visible } = useInView();

  return (
    <Container_Color id="portfolio">
      <H5 style={{ color: "#c1c1c1" }}>My Recent Work</H5>
      <H2>Portfolio</H2>
      {is_visible ? (
        <Portfolio_Container ref={ref}>
          <Project
            title="CycurID"
            link="https://cycurid.com/"
            image={CycurID}
            alt="CycurID"
          />
          <Project
            title="imme"
            link="https://imme.io/"
            image={Imme}
            alt="imme"
          />
          <Project
            title="imme Mobile IOS"
            link="https://imme.io/about"
            image={Imme_App}
            alt="imme_app"
          />
        </Portfolio_Container>
      ) : (
        <Portfolio_Container_Invisible ref={ref}>
          <Project
            title="CycurID"
            link="https://cycurid.com/"
            image={CycurID}
            alt="CycurID"
          />
          <Project
            title="imme"
            link="https://imme.io/"
            image={Imme}
            alt="imme"
          />
          <Project
            title="imme Mobile IOS"
            link="https://imme.io/about"
            image={Imme_App}
            alt="imme_app"
          />
        </Portfolio_Container_Invisible>
      )}
    </Container_Color>
  );
}

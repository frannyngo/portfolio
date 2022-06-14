import React from "react";
import {
  Project_Container,
  Image,
  Header,
  Info,
  Project_Button,
} from "./portfolio_styles";

export default function Project(data) {
  return (
    <Project_Container>
      <Image src={data.image} alt={data.alt} />
      <Info>
        {/* <Header>{data.title}</Header> */}
        <Project_Button
          href={data.link}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          Visit
        </Project_Button>
      </Info>
    </Project_Container>
  );
}

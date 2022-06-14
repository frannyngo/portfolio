import React from "react";
import {
  Card_Shell,
  Header,
  Skill,
  Skills_Container,
  Skill_Title,
} from "./experience_styles";
import { BsPatchCheckFill } from "react-icons/bs";

export default function Card(data) {
  return (
    <Card_Shell>
      <Header>{data.header}</Header>
      {data.skills && (
        <Skills_Container>
          {data.skills.map((element, index) => {
            return (
              <Skill key={index}>
                <BsPatchCheckFill
                  style={{ width: 15, height: 15, color: "#d3ae36" }}
                />
                <Skill_Title>{element}</Skill_Title>
              </Skill>
            );
          })}
        </Skills_Container>
      )}
    </Card_Shell>
  );
}

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
  console.log(data.skills);
  return (
    <Card_Shell>
      <Header>{data.header}</Header>
      {data.skills && (
        <Skills_Container>
          {data.skills.map((element, index) => {
            console.log(element, index);
            return (
              <Skill key={index}>
                <BsPatchCheckFill
                  style={{ width: 15, height: 15, color: "#4db5ff" }}
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

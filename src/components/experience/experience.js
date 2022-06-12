import React from "react";
import { Container, H5, H2 } from "../../global_styles/theme";
import { Card_Container } from "./experience_styles";
import Card from "./card";

export default function Experience() {
  const languages = [
    "Typescript",
    "Javascript",
    "Ruby",
    "Python",
    "HTML5",
    "Kotlin",
    "C++",
    "CSS3",
  ];
  const libraries = [
    "React",
    "React-Native",
    "Gatsby",
    "Node",
    "Ruby on Rails",
    "TensorFlow",
    "Brain",
    "Redux",
    "Cypress",
    "Jest",
    "Bootstrap",
    "Express",
    "Material-UI",
    "jQuery",
  ];
  const tools = [
    "VSC",
    "Xcode",
    "Android Studio",
    "PyCharm",
    "Jira",
    "Confluence",
    "Bitbucket",
    "Git",
  ];
  const database = ["PostgreSQL", "SQLite", "GraphQL", "RxDB"];
  return (
    <Container id="experience">
      <H5 style={{ color: "rgb(255, 255, 255, 0.6" }}>What Skills I Have</H5>
      <H2>My Experience</H2>
      <Card_Container>
        <Card header={`Programming Languages`} skills={languages} />
        <Card header={`Libraries and Framework`} skills={libraries} />
        <Card header={`Development Tools`} skills={tools} />
        <Card header={`Database`} skills={database} />
      </Card_Container>
    </Container>
  );
}

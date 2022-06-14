import React from "react";
import { useInView } from "react-intersection-observer";
import { Container, H5, H2 } from "../../global_styles/theme";
import { Card_Container, Card_Container_Invisible } from "./experience_styles";
import Card from "./card";

export default function Experience() {
  const { ref: ref, inView: is_visible } = useInView();

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
      <H5 style={{ color: "#c1c1c1" }}>What Skills I Have</H5>
      <H2>My Experience</H2>
      {is_visible ? (
        <Card_Container ref={ref}>
          <Card header={`Programming Languages`} skills={languages} />
          <Card header={`Libraries and Framework`} skills={libraries} />
          <Card header={`Development Tools`} skills={tools} />
          <Card header={`Database`} skills={database} />
        </Card_Container>
      ) : (
        <Card_Container_Invisible ref={ref}>
          <Card header={`Programming Languages`} skills={languages} />
          <Card header={`Libraries and Framework`} skills={libraries} />
          <Card header={`Development Tools`} skills={tools} />
          <Card header={`Database`} skills={database} />
        </Card_Container_Invisible>
      )}
    </Container>
  );
}

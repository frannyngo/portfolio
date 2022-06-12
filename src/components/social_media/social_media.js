import React from "react";
import { Social_Media_Container } from "./social_media_styles";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function Social_Media() {
  return (
    <Social_Media_Container>
      <a href="https://www.linkedin.com/in/francisngotan/" target="_blank">
        <BsLinkedin
          style={{ height: 30, width: 30, color: "#4db5ff", marginRight: 10 }}
        />
      </a>
      &ensp;
      <a href="https://github.com/frannyngo" target="_blank">
        <FaGithub style={{ height: 30, width: 30, color: "#4db5ff" }} />
      </a>
    </Social_Media_Container>
  );
}

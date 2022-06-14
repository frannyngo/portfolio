import React from "react";
import { Social_Media_Container } from "./social_media_styles";
import { Box } from "../../global_styles/theme";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

export default function Social_Media() {
  return (
    <Social_Media_Container>
      <Box href="https://www.instagram.com/frannyngo/" target="_blank">
        <BsInstagram style={{ height: 20, width: 20, color: "#d3ae36" }} />
      </Box>
      <Box href="https://www.linkedin.com/in/francisngotan/" target="_blank">
        <BsLinkedin style={{ height: 20, width: 20, color: "#d3ae36" }} />
      </Box>
      <Box href="https://github.com/frannyngo" target="_blank">
        <FaGithub style={{ height: 20, width: 20, color: "#d3ae36" }} />
      </Box>
    </Social_Media_Container>
  );
}

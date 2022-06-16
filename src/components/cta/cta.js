import React from "react";
import CV from "../../assets/resume.pdf";
import Button from "../../global_styles/button";
import { CTA_Container } from "./cta_styles";

export default function CTA() {
  return (
    <CTA_Container>
      <Button title={`Download CV`} download={CV} />
      <Button title={`Let's Talk`} />
    </CTA_Container>
  );
}

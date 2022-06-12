import React from "react";
import { BsBook } from "react-icons/bs";
import { IoIosRibbon } from "react-icons/io";
import { BiCodeAlt } from "react-icons/bi";
import { About_Cube, Header, Sub_Header } from "./about_styles";

export default function About_Cubes(data) {
  return (
    <About_Cube>
      {data.image === "ribbon" && (
        <IoIosRibbon style={{ color: "#4db5ff", height: 40, width: 40 }} />
      )}
      {data.image === "code" && (
        <BiCodeAlt style={{ color: "#4db5ff", height: 40, width: 40 }} />
      )}
      {data.image === "book" && (
        <BsBook style={{ color: "#4db5ff", height: 40, width: 40 }} />
      )}
      <Header>{data.header ? data.header : "Header"}</Header>
      <Sub_Header>
        {data.sub_header ? data.sub_header : "Sub_Header"}
      </Sub_Header>
    </About_Cube>
  );
}

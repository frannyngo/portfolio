import React, { useState } from "react";
import { Nav_Container } from "./nav_styles";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
import { A, Active_A } from "./nav_styles";

export default function Nav() {
  const [active, set_active] = useState("/");

  return (
    <Nav_Container>
      <nav>
        {active === "#" ? (
          <Active_A>
            <AiOutlineHome style={{ width: 20, height: 20, marginRight: 40 }} />
          </Active_A>
        ) : (
          <A href="#" onClick={() => set_active("#")}>
            <AiOutlineHome style={{ width: 20, height: 20, marginRight: 40 }} />
          </A>
        )}
        {active === "#about" ? (
          <Active_A>
            <AiOutlineUser style={{ width: 20, height: 20, marginRight: 40 }} />
          </Active_A>
        ) : (
          <A href="#about" onClick={() => set_active("#about")}>
            <AiOutlineUser style={{ width: 20, height: 20, marginRight: 40 }} />
          </A>
        )}
        {active === "#experience" ? (
          <Active_A>
            <BiBook style={{ width: 20, height: 20, marginRight: 40 }} />
          </Active_A>
        ) : (
          <A href="#experience" onClick={() => set_active("#experience")}>
            <BiBook style={{ width: 20, height: 20, marginRight: 40 }} />
          </A>
        )}
        {active === "#portfolio" ? (
          <Active_A>
            <MdOutlineWorkOutline style={{ width: 20, height: 20 }} />
          </Active_A>
        ) : (
          <A href="#portfolio" onClick={() => set_active("#portfolio")}>
            <MdOutlineWorkOutline style={{ width: 20, height: 20 }} />
          </A>
        )}
        {/* {active === "#contact" ? (
          <Active_A>
            <BiMessageSquareDetail style={{ width: 20, height: 20 }} />
          </Active_A>
        ) : (
          <A href="#contact" onClick={() => set_active("#contact")}>
            <BiMessageSquareDetail style={{ width: 20, height: 20 }} />
          </A>
        )} */}
      </nav>
    </Nav_Container>
  );
}

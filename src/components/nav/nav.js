import React, { useState } from "react";
import { Link } from "react-scroll";
import { Nav_Container } from "./nav_styles";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { Active_A } from "./nav_styles";

const styles = {
  link: {
    color: "rgb(255, 255, 255, 0.6)",
    cursor: "pointer",

    "&:hover": {
      color: "#4db5ff",
    },
  },
};

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
          <Link
            to={"#"}
            smooth={true}
            onClick={() => set_active("#")}
            style={styles.link}
          >
            <AiOutlineHome style={{ width: 20, height: 20, marginRight: 40 }} />
          </Link>
        )}
        {active === "#about" ? (
          <Active_A>
            <AiOutlineUser style={{ width: 20, height: 20, marginRight: 40 }} />
          </Active_A>
        ) : (
          <Link
            to={"about"}
            smooth={true}
            onClick={() => set_active("#about")}
            style={styles.link}
          >
            <AiOutlineUser style={{ width: 20, height: 20, marginRight: 40 }} />
          </Link>
        )}
        {active === "#experience" ? (
          <Active_A>
            <BiBook style={{ width: 20, height: 20, marginRight: 40 }} />
          </Active_A>
        ) : (
          <Link
            to={"experience"}
            smooth={true}
            onClick={() => set_active("#experience")}
            style={styles.link}
          >
            <BiBook style={{ width: 20, height: 20, marginRight: 40 }} />
          </Link>
        )}
        {active === "#portfolio" ? (
          <Active_A>
            <MdOutlineWorkOutline style={{ width: 20, height: 20 }} />
          </Active_A>
        ) : (
          <Link
            to={"portfolio"}
            smooth={true}
            onClick={() => set_active("#portfolio")}
            style={styles.link}
          >
            <MdOutlineWorkOutline style={{ width: 20, height: 20 }} />
          </Link>
        )}
      </nav>
    </Nav_Container>
  );
}

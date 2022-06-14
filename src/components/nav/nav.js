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
      color: "",
    },
  },
  logo: {
    width: 20,
    height: 20,
    marginRight: 40,
  },
  logo_no_margin: {
    width: 20,
    height: 20,
  },
};

export default function Nav() {
  const [active, set_active] = useState("/");

  return (
    <Nav_Container>
      <nav>
        {active === "#" ? (
          <Active_A>
            <AiOutlineHome style={styles.logo} />
          </Active_A>
        ) : (
          <Link
            to={"#"}
            smooth={true}
            onClick={() => set_active("#")}
            style={styles.link}
          >
            <AiOutlineHome style={styles.logo} />
          </Link>
        )}
        {active === "#about" ? (
          <Active_A>
            <AiOutlineUser style={styles.logo} />
          </Active_A>
        ) : (
          <Link
            to={"about"}
            smooth={true}
            onClick={() => set_active("#about")}
            style={styles.link}
          >
            <AiOutlineUser style={styles.logo} />
          </Link>
        )}
        {active === "#experience" ? (
          <Active_A>
            <BiBook style={styles.logo} />
          </Active_A>
        ) : (
          <Link
            to={"experience"}
            smooth={true}
            onClick={() => set_active("#experience")}
            style={styles.link}
          >
            <BiBook style={styles.logo} />
          </Link>
        )}
        {active === "#portfolio" ? (
          <Active_A>
            <MdOutlineWorkOutline style={styles.logo_no_margin} />
          </Active_A>
        ) : (
          <Link
            to={"portfolio"}
            smooth={true}
            onClick={() => set_active("#portfolio")}
            style={styles.link}
          >
            <MdOutlineWorkOutline style={styles.logo_no_margin} />
          </Link>
        )}
      </nav>
    </Nav_Container>
  );
}

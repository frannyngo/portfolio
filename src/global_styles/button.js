import React from "react";
import { Global_Button } from "./theme";
import { Link } from "react-scroll";

export default function Button(title) {
  return (
    <div
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Global_Button>
        {title.download ? (
          <a
            href={title.download}
            style={{ textDecoration: "none", color: "#d3ae36" }}
            download
          >
            {title.title}
          </a>
        ) : (
          <Link to={"contact"} smooth={true}>
            {title.title}
          </Link>
        )}
      </Global_Button>
    </div>
  );
}

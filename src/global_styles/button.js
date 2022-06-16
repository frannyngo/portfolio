import React from "react";
import { Global_Button } from "./theme";

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
      {title.primary ? (
        <Global_Button>
          {title.download ? (
            <a
              href={
                title.title === "Let's Talk"
                  ? `mailto:frannytaan@gmail.com`
                  : title.download
              }
              style={{ textDecoration: "none", color: "#d3ae36" }}
              download
            >
              {title.title}
            </a>
          ) : (
            <a
              href={
                title.title === "Let's Talk"
                  ? `mailto:frannytaan@gmail.com`
                  : title.download
              }
              style={{ textDecoration: "none", color: "#d3ae36" }}
            >
              {title.title}
            </a>
          )}
        </Global_Button>
      ) : (
        <Global_Button>
          {title.download ? (
            <a
              href={
                title.title === "Let's Talk"
                  ? `mailto:frannytaan@gmail.com`
                  : title.download
              }
              style={{ textDecoration: "none", color: "#d3ae36" }}
              download
            >
              {title.title}
            </a>
          ) : (
            <a
              href={
                title.title === "Let's Talk"
                  ? `mailto:frannytaan@gmail.com`
                  : title.download
              }
              style={{ textDecoration: "none", color: "#d3ae36" }}
            >
              {title.title}
            </a>
          )}{" "}
        </Global_Button>
      )}
    </div>
  );
}

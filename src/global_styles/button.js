import React from "react";
import { Primary_Button, Not_Primary_Button } from "./theme";

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
        <Primary_Button>
          {title.download ? (
            <a
              href={
                title.title === "Let's Talk"
                  ? `mailto:frannytaan@gmail.com`
                  : title.download
              }
              style={{ textDecoration: "none", color: "#2c2c6c" }}
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
              style={{ textDecoration: "none", color: "#2c2c6c" }}
            >
              {title.title}
            </a>
          )}
        </Primary_Button>
      ) : (
        <Not_Primary_Button>
          {title.download ? (
            <a
              href={
                title.title === "Let's Talk"
                  ? `mailto:frannytaan@gmail.com`
                  : title.download
              }
              style={{ textDecoration: "none", color: "#4db5ff" }}
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
              style={{ textDecoration: "none", color: "#4db5ff" }}
            >
              {title.title}
            </a>
          )}{" "}
        </Not_Primary_Button>
      )}
    </div>
  );
}

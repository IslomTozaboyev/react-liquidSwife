// import React from "react";
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Button from "./button";

const ShowCase = ({ data, theme, props }) => {
  const dataNode = data["data"];
  const imageNode = data["image"];
  return (
    <Styled.div
      sx={{
        display: "flex",
        flexDirection: ["column-reverse", "row", "row"],
        width: "100%",
        mt: ["50px", "20px"],
      }}
    >
      <Styled.div
        sx={{
          width: ["100%", "50%", "50%"],
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Styled.div
          sx={{
            width: "80%",
          }}
        >
          <Styled.h1
            sx={{
              fontSize: [6, 7, 8],
              lineHeight: 1.5,
              textAlign: "left",
              color: theme["primary"],
            }}
          >
            {dataNode.title}
          </Styled.h1>
          <Styled.h4
            sx={{
              fontSize: [0, 1, 2],
              lineHeight: 1.15,
              textAlign: "left",
              color: theme["primary"],
            }}
          >
            {dataNode.subtitle}
          </Styled.h4>

          <Styled.h6
            sx={{
              fontSize: [3, 4, 5],
              lineHeight: 1.5,
              textAlign: "left",
              letterSpacing: 1.15,
              mt: 10,
              color: theme["primary"],
            }}
          >
            {dataNode.caption}
          </Styled.h6>
        </Styled.div>
        {/* <Button data={props.data} theme={props.theme} /> */}
      </Styled.div>
      <Styled.div
        sx={{
          width: ["100%", "50%", "50%"],
        }}
      >
        <Styled.img
          sx={{
            display: "block",
            margin: "auto",
            width: ["80%", "70%"],
            height: "auto",
          }}
          src={imageNode.fixed.src}
          alt={dataNode.title}
        />
      </Styled.div>
    </Styled.div>
  );
};

export default ShowCase;

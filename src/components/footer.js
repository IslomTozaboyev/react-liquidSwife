import React from "react";
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaTelegram } from "@react-icons/all-files/fa/FaTelegram";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";

const Footer = ({ data, theme }) => {
  return (
    <Styled.div
      sx={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        bottom: "0px",
        display: "flex",
        flexDirection: "column",
        mb: [10, 20],
        mt: 20,
      }}
    >
      <Styled.h5
        sx={{
          opacity: 0.7,
          fontSize: [3, 3, 4],
          color: theme["primary"],
        }}
      >
        Bizning ijtimoiy tarmoqlarimiz
      </Styled.h5>
      <Styled.div
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Styled.a
          href={data["concept"]["github"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            sx={{
              fontSize: 5,
              opacity: 0.7,
              m: 10,
              "@keyframes glow": {
                from: { opacity: 0.7 },
                to: { opacity: 1 },
              },
              "@keyframes glowRev": {
                from: { opacity: 1 },
                to: { opacity: 0.7 },
              },
              animationName: "glowRev",
              animationDuration: "0.7s",
              "&:hover": {
                animation: "glow 0.7s ease forwards",
              },
              color: theme["primary"],
            }}
          />
        </Styled.a>
        <Styled.a
          href={data["concept"]["behance"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram
            sx={{
              fontSize: 5,
              opacity: 0.7,
              m: 10,
              "@keyframes glow": {
                from: { opacity: 0.7 },
                to: { opacity: 1 },
              },
              "@keyframes glowRev": {
                from: { opacity: 1 },
                to: { opacity: 0.7 },
              },
              animationName: "glowRev",
              animationDuration: "0.7s",
              "&:hover": {
                animation: "glow 0.7s ease forwards",
              },
              color: theme["primary"],
            }}
          />
        </Styled.a>
        <Styled.a
          href={data["concept"]["dribble"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube
            sx={{
              fontSize: 5,
              opacity: 0.7,
              m: 10,
              "@keyframes glow": {
                from: { opacity: 0.7 },
                to: { opacity: 1 },
              },
              "@keyframes glowRev": {
                from: { opacity: 1 },
                to: { opacity: 0.7 },
              },
              animationName: "glowRev",
              animationDuration: "0.7s",
              "&:hover": {
                animation: "glow 0.7s ease forwards",
              },
              color: theme["primary"],
            }}
          />
        </Styled.a>
      </Styled.div>
    </Styled.div>
  );
};

export default Footer;

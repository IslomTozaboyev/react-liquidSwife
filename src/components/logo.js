/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { FaApple } from "@react-icons/all-files/fa/FaApple";

export default function Logo(props) {
  return (
    <div
      sx={{
        m: 0,
        p: 0,
        display: "flex",
        flexDirection: "row",
        textAlign: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <FaApple sx={{ fontSize: [5, 1, 2], color: props.theme["primary"] }} />
      <Styled.h3
        sx={{
          ml: [4, 5],
          fontSize: [5, 1, 2],
          color: props.theme["primary"],
        }}
      >
        Pointer
      </Styled.h3>
      <ul className="d-flex align-items-center">
        <Styled.li
          sx={{
            color: props.theme["primary"],
          }}
          style={{
            fontSize: `20px`,
            listStyleType: `none`,
            marginTop: `20px`,
            padding: `0 10px`,
          }}
          className="list"
        >
          <a style={{ textDecoration: `none`, color: `#000` }} href="/courses">
            Kurslar
          </a>
        </Styled.li>
        <Styled.li
          sx={{
            color: props.theme["primary"],
          }}
          style={{
            fontSize: `20px`,
            listStyleType: `none`,
            marginTop: `20px`,
            padding: `0 10px`,
          }}
          className="list"
        >
          Kasblar
        </Styled.li>
        <Styled.li
          sx={{
            color: props.theme["primary"],
          }}
          style={{
            fontSize: `20px`,
            listStyleType: `none`,
            marginTop: `20px`,
            padding: `0 10px`,
          }}
          className="list"
        >
          Biz haqimizda
        </Styled.li>
        <Styled.li
          sx={{
            color: props.theme["primary"],
          }}
          style={{
            fontSize: `20px`,
            listStyleType: `none`,
            marginTop: `20px`,
            padding: `0 10px`,
          }}
          className="list"
        >
          Aloqa
        </Styled.li>
      </ul>
    </div>
  );
}

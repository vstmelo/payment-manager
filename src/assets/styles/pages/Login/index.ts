import { styled } from "@stitches/react";
import { Button } from "../../../../components/Button";

export const ContainerLogin = styled("div", {
  display: "flex",
  height: "100vh",
  width: "100vw",
});

export const BoxLogin = styled("div", {
  margin: "auto",
  alignSelf: "center",
  justifySelf: "center",
  flexDirection: "column",
  boxShadow: "0px 1px 2px 1px rgba(0, 0, 0, 0.4)",
  borderRadius: " 25px",
  padding: "80px ",
  width: "fit-content",
  justifyContent: "center",
  alignContent: "center",
});

export const TitleLogin = styled("h1", {
fontWeight: "500",
  //   color: $color-dark,
  marginBottom: "36px",
  textAlign: "center",
});

export const BoxInput = styled("div", {
  marginBottom: "40px",
});

export const ButtonLogin = styled("button", {
  backgroundColor: "pink",
  width: "100%",
  padding: "1rem",
  fontSize: "1rem",
  borderRadius: "5px",
  border: "none",
  marginTop: "16px",
});

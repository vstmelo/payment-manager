import { styled } from "@stitches/react";
import img from '../../../../images/login.svg';

export const Image = styled("div", {
  width: " 35%",
  backgroundImage: `url(${img})`,
  backgroundRepeat: " no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  display: "flex",
  justifyContent: "center",
  boxShadow: " 0px 1px 5px 2px rgba(0, 0, 0, 0.3)",
});

export const Text = styled("h3", {
  width: "330px",
  height: "fit-content",
  // color: $color-green,
  textAlign: "center",
  marginTop: "100px",
  fontWeight: 700,
  fontStyle: "normal",
  fontSize: "20px",
  lineHeight: "130%",
});

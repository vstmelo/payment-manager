import { styled } from "@stitches/react";

interface IProps {
  title: string;
  valor?: string;
}

export const Card = styled("div", {
  display: "flex",
  padding: " 23px 40px",
  marginRight: "10px",
  width: "360px",
  borderRadius: " 30px",
  boxShadow: "4px 0px 12px 5px rgb(0 0 0 / 10%)",
});

import { styled } from "@stitches/react";

export const ContainerPayment = styled("div", {
  display: "grid",
  width: "360px",
  gridTemplateColumns: "repeat(1, 1fr)",
  fontFamily: "$poppins",
  padding: "  40px",
  borderRadius: " 30px",
  marginLeft:'64px',
  boxShadow: "4px 0px 12px 5px rgb(0 0 0 / 10%)",
});

export const ContainerData = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(1, 2fr)",
  gap: "10px",
  marginTop: "20px",
  '& p':{
    alignSelf:'center',
    justifySelf:'center',
  }
});

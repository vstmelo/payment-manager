import { styled } from "@stitches/react";
import Input from "../../../../components/Input";

export const InputStyled = styled(Input, {
  "& > label": {
    padding: "5px",
  },
  variants: {
    size: {
      medium: {
        borderRadius: "12px",
        outline: "none",
        fontWeight: 500,
        border: "none",
        boxShadow: "0px 4px 16px rgba(6, 15, 1, 0.3)",
        width: "100%",
        padding: "14px 14px 14px 24px",
        " &:focus": {
          outlineOffset: "-2px",
        },

        "&::placeholder": {
          color: "$color-gray",
        },
      },
    },
  },
});

export const InputLabel=styled('input',{
  // display:'flex',
  // marginBottom:'16px'
  marginTop:'10px',
})
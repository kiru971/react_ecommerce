import { grey, yellow } from "@mui/material/colors";
import { styled } from "@mui/system";

export const NavDiv = styled("div")({
  backgroundColor: "black",
  width: 50,
  height: 50,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  cursor: "pointer",
});

export const StyledLab = styled("label")({
  display: "inline-block",
  position: "relative",
  height: 33,
  width: 35,
  backgroundColor: " #eee",
  textAlign: "center",
  fontSize: 14,
  borderRadius: "50%",
  cursor: "pointer",
  marginBottom: 10,
  marginRight: 10,
  "& input:checked ~ .checks": {
    backgroundColor: "black",
    color: "#ececec",
  },

  "input:focus-visible ~ .check": {
    border: "1px solid black",
  },
  "&:hover input ~ .check": {
    border: "0.1px solid black",
  },
});

export const TypDiv = styled("div")({
  fontWeight: "bold",
  marginBottom: 20,
});

export const SubTotal = styled("p")({
  color: "rgb(91,90,94)",
  display: "inline-block",
  verticalAlign: "middle",
  width: "20%",
});

export const Sdiv = styled("div")({
  color: grey[700],
});

export const BoxDiv = styled("div")(({ theme }) => ({
  marginTop: 15,
  display: "flex",
  gap: 10,
  marginBottom: 10,
  [theme.breakpoints.down("sm")]: {
    gap: 2,
  },
}));

export const DivTot = styled("div")(({ theme }) => ({
  color: yellow[700],
  display: "inline-block",
  verticalAlign: "middle",
  width: "80%",
  textAlign: "right",
  fontSize: 22,
  [theme.breakpoints.down("sm")]: {
    fontSize: 19,
  },
}));

export const CloseDiv = styled("div")({
  color: "white",
  cursor: "pointer",
});

export const DivBox = styled("div")({
  textAlign: "center",
});

export const StyleB = styled("b")(({ theme }) => ({
  fontSize: 25,
  [theme.breakpoints.down("sm")]: {
    fontSize: 22,
  },
}));

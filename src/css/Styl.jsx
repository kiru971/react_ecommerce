import {
  Box,
  Button,
  Divider,
  Skeleton,
  Stack,
  Typography,
  styled,
} from "@mui/material";

export const ButtonStyl = styled(Button)({
  marginTop: 50,
  backgroundColor: "black",
  color: "white",
  width: "100%",
  "&.hover": {
    backgroundColor: "transparent",
  },
});

export const Boxs = styled(Box)({
  backgroundColor: "#1f1e22",
  height: "210px",
  boxSizing: "border-box",
  padding: "4%",
});

export const Divided = styled(Divider)({
  color: "white",
  bgcolor: "rgb(27, 24, 24)",
  borderBottomWidth: 2,
});

export const BoxD = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  gap: 2,
});

export const BoxShip = styled(Box)({
  position: "absolute",
  top: "0px",
  right: "0px",
  backgroundColor: "black",
  fontSize: 11,
  padding: "5px",
});

export const TypoStyl = styled(Typography)({
  paddingTop: 15,
  paddingBottom: 12,
});

export const StyledStack = styled(Stack)({
  marginTop: 30,
});

export const SkeleStyl = styled(Skeleton)({
  width: 200,
});

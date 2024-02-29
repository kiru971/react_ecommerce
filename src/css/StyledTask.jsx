import {
  Badge,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
  styled,
} from "@mui/material";
import { yellow } from "@mui/material/colors";

export const StyledBadge = styled(Badge)({
  fontWeight: "bold",
  color: "black",
  "& .MuiBadge-badge": {
    top: 12,
    backgroundColor: yellow[700],
  },
});

export const StyledTool = styled(Toolbar)({
  backgroundColor: "rgb(51, 48, 48)",
  color: "white",
  paddingLeft: "10px",
  display: "flex",
  justifyContent: "space-between",
});

export const BoxStyle = styled(Box)({
  marginTop: 20,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const StyGr = styled(Grid)(({ items, theme }) => ({
  padding: "10px",
  "&:hover button": {
    backgroundColor: yellow[600],
    boxShadow: "none",
  },
  "&:hover img": {
    content: `url(${items.img1})`,
  },
  [theme.breakpoints.down("sm")]: {
    padding: "5px",
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "black",
  boxShadow: "none",
  textTransform: "none",
  fontSize: 17,
  [theme.breakpoints.down("md")]: {
    fontSize: 15,
  },
  "&.active": {
    boxShadow: "none",
  },
}));

export const Dividers = styled(Divider)({
  backgroundColor: yellow[600],
  borderBottomWidth: 3,
  marginLeft: "45%",
  marginRight: "45%",
});

export const DrawerStyl = styled(Drawer)(({ theme }) => ({
  width: 450,
  [theme.breakpoints.down("sm")]: {
    width: 300,
  },
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 450,
    [theme.breakpoints.down("sm")]: {
      width: 300,
    },
    backgroundColor: "rgb(27, 26, 32)",
    color: "whitesmoke",
    display: "flex",
    justifyContent: "flex-start",
    cursor: "default",
  },
}));

export const StylIcon = styled(IconButton)({
  backgroundColor: "transparent",
  border: 0,
  color: "black",
  "&:hover": {
    color: "white",
  },
});

export const ScrollBox = styled(Box)({
  overflowX: "auto",
  "&::-webkit-scrollbar": {
    width: 10,
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "black",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "black",
    borderRadius: 2,
  },
});

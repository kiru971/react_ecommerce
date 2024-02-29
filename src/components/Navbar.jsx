import { AppBar, IconButton, Typography } from "@mui/material";
import React, { useContext } from "react";
import Modal from "../Shared Components/Modal";
import { CardContext } from "../context/CardContext";
import logo from "../assets/image/cart4-white.svg";
import { StyledBadge, StyledTool } from "../css/StyledTask";
import { NavDiv } from "../css/StylCss";

const Navbar = () => {
  const { value, setOpen, show } = useContext(CardContext);

  return (
    <AppBar position={"sticky"}>
      <StyledTool>
        <Typography variant="h6">Home</Typography>
        <NavDiv>
          <IconButton
            onClick={() => setOpen(true)}
            title="Products in cart quantity"
          >
            <StyledBadge
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              badgeContent={value}
              showZero
            >
              <div className="nav">
                <img src={logo} alt="" />
              </div>
            </StyledBadge>
          </IconButton>
          {show && <Modal />}
        </NavDiv>
      </StyledTool>
    </AppBar>
  );
};

export default Navbar;

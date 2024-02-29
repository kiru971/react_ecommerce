import React, { useContext, useEffect, useState } from "react";
import { CardContext } from "../context/CardContext";
import { Box, Grid, Link, Rating } from "@mui/material";
import { StyledLab, TypDiv } from "../css/StylCss";
import { BoxStyle } from "../css/StyledTask";
import { TypoStyl } from "../css/Styl";

const SideNav = () => {
  const [value, setValue] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [isActive, setActive] = useState();

  const availableSize = [
    { id: 1, size: "XS" },
    { id: 2, size: "S" },
    { id: 3, size: "M" },
    { id: 4, size: "ML" },
    { id: 5, size: "L" },
    { id: 6, size: "XL" },
    { id: 7, size: "XXL" },
    { id: 8, size: "ALL" },
  ];

  const { filterItem } = useContext(CardContext);

  function handleClose() {
    setToggle(false);
    alert("Thank you for your feedback");
    setValue("");
  }

  function handleChange(item) {
    setActive(item.id);
    setChecked(true);
    filterItem(item);
  }
  useEffect(() => {
    setActive(8);
    setChecked(true);
    filterItem({ id: 8, size: "ALL" });
  }, []);
  return (
    <BoxStyle flex={2}>
      <Box maxWidth={{ md: 200 }}>
        <TypDiv>Sizes :</TypDiv>
        <Grid container>
          {availableSize.map((item) => {
            return (
              <StyledLab key={item.id}>
                <input
                  type="checkbox"
                  value={item}
                  checked={isChecked}
                  onChange={() => handleChange(item)}
                />
                <span
                  className={item.id === isActive ? "check checks" : "check"}
                >
                  {item.size}
                </span>
              </StyledLab>
            );
          })}
        </Grid>

        <div>
          <TypoStyl variant="body2">
            Leave a star on here if this website was useful :)
          </TypoStyl>
          <Link onClick={(e) => setToggle(true)} sx={{ cursor: "pointer" }}>
            Star
          </Link>
          {toggle && (
            <>
              <div>Rating</div>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <div>
                <button disabled={value < 1} onClick={handleClose}>
                  Submit
                </button>
              </div>
            </>
          )}
        </div>
      </Box>
    </BoxStyle>
  );
};

export default SideNav;

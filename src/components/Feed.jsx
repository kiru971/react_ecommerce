import React, { useContext, useEffect } from "react";
import { CardContext } from "../context/CardContext";
import { Box, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Dividers, StyGr, StyledButton } from "../css/StyledTask";
import { DivBox, StyleB } from "../css/StylCss";
import { BoxShip } from "../css/Styl";
import Loading from "./Loading";

const Feed = () => {
  const { addItem, itemData, setOpen, isLoading, setLoading } =
    useContext(CardContext);

  console.log(itemData);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, [2000]);
  }, [isLoading]);

  function handleCl(item) {
    setOpen(true);
    addItem(item);
  }
  return (
    <Box mt={2} flex={6}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Typography pl={2}>{itemData?.length} Product(s) found</Typography>
          <Grid container direction={"row"}>
            {itemData?.map((items) => (
              <StyGr item items={items} key={items.id} xs={6} sm={4} md={3}>
                <div className="image">
                  <img src={`${items.img}`} alt={items.title} />
                  {items.isFreeShipping ? (
                    <BoxShip>Free Shipping</BoxShip>
                  ) : null}
                </div>
                <DivBox>
                  <div style={{ padding: 2, height: 36 }}>{items.title}</div>
                  <Dividers />

                  <div style={{ paddingTop: 10 }}>
                    {items.prize ? (
                      <>
                        <span style={{ fontSize: 13 }}>
                          {items.prize.split(" ")[0]} &nbsp;
                        </span>
                        <StyleB>
                          {items.prize.split(" ")[1].split(".")[0]}
                        </StyleB>
                        .{items.prize.split(" ")[1].split(".")[1]}
                      </>
                    ) : null}
                  </div>

                  <div style={{ paddingBottom: 15 }}>
                    {items.installement ? (
                      <div style={{ color: grey[500] }}>
                        or {items.installement} x
                        <b>
                          $
                          {(
                            items.prize.split(" ")[1] / items.installement
                          ).toFixed(2)}
                        </b>
                      </div>
                    ) : (
                      <br />
                    )}
                  </div>
                </DivBox>
                <StyledButton
                  variant="contained"
                  disableRipple
                  fullWidth
                  onClick={() => handleCl(items)}
                >
                  Add to cart
                </StyledButton>
              </StyGr>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default Feed;

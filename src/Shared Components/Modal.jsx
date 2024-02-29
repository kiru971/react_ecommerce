import React, { useContext } from "react";
import { CardContext } from "../context/CardContext";
import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { grey, yellow } from "@mui/material/colors";
import logo from "../assets/image/cart4-white.svg";
import {
  DrawerStyl,
  ScrollBox,
  StylIcon,
  StyledBadge,
} from "../css/StyledTask";
import { BoxDiv, CloseDiv, DivTot, Sdiv, SubTotal } from "../css/StylCss";
import { BoxD, Boxs, ButtonStyl, Divided } from "../css/Styl";

const Modal = () => {
  const {
    selected,
    Increase,
    Decrease,
    value,
    total,
    stotal,
    show,
    setOpen,
    removeItem,
  } = useContext(CardContext);
  console.log(selected);

  function handleClose() {
    setOpen(false);
  }

  function handleButton() {
    if (total) {
      alert(`Checkout-Subtotal: ${total}`);
    } else {
      alert("Add some product in the cart!");
    }
  }

  return (
    <div style={{ display: "flex" }}>
      {show && (
        <Box>
          <DrawerStyl
            ModalProps={{
              keepMounted: true,
            }}
            variant="persistent"
            open={show}
            anchor="right"
          >
            <ScrollBox>
              <CloseDiv onClick={handleClose}>X</CloseDiv>

              <IconButton sx={{ m: 5, paddingLeft: { xs: 10, sm: 15 } }}>
                <StyledBadge
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  badgeContent={value}
                  showZero
                >
                  <div className="modal">
                    <img src={logo} alt="" />
                  </div>
                </StyledBadge>
                <div style={{ color: "white", paddingLeft: "15px" }}> cart</div>
              </IconButton>
              <div
                style={{
                  height: "615px",
                }}
              >
                {value === 0 ? (
                  <div style={{ textAlign: "center" }}>
                    Add some products in the cart :)
                  </div>
                ) : (
                  <>
                    {selected.map((item) => (
                      <div className="pad">
                        <Divided />
                        <BoxD>
                          <BoxDiv>
                            <img
                              style={{ height: 80, width: 50 }}
                              src={`${item.img}`}
                              alt={item.title}
                            />
                            <div style={{ marginTop: 4 }}>
                              {item.title}
                              <Sdiv>
                                {item.availableSize} | {item.styles}{" "}
                              </Sdiv>
                              <Sdiv>Quantity: {item.quantity}</Sdiv>
                            </div>
                          </BoxDiv>
                          <div
                            style={{ display: "grid", justifyContent: "end" }}
                          >
                            <StylIcon
                              size="small"
                              title="remove product from cart"
                              onClick={() => removeItem(item)}
                            >
                              <CloseIcon
                                sx={{
                                  height: 20,
                                }}
                              />
                            </StylIcon>

                            <div style={{ color: yellow[700] }}>
                              {item.prize}
                            </div>
                            <div className="button">
                              <button
                                disabled={item.quantity <= 1}
                                onClick={() => Decrease(item)}
                                style={{
                                  color: "black",
                                  width: "45%",
                                }}
                              >
                                -
                              </button>
                              <button
                                onClick={() => Increase(item)}
                                style={{
                                  color: "white",
                                  backgroundColor: "black",
                                  border: " solid black",
                                  width: "45%",
                                }}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </BoxD>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </ScrollBox>
            <Boxs>
              <SubTotal>SUBTOTAL</SubTotal>
              <DivTot>
                {total ? total : "$0.00"}
                <div style={{ color: grey[600], fontSize: 17 }}>
                  {stotal && value > 0 ? `OR UP TO ${stotal}` : null}
                </div>
              </DivTot>

              <ButtonStyl
                disableRipple
                disableFocusRipple
                disableElevation
                onClick={handleButton}
              >
                CHECKOUT
              </ButtonStyl>
            </Boxs>
          </DrawerStyl>
        </Box>
      )}
    </div>
  );
};

export default Modal;

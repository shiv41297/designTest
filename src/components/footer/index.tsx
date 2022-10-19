import React from "react";
import { Button, Theme, Typography } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalIcons from "../../utils/image";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nav: {
      transition: "all 0.2s ease-in-out",
      "&:hover": {
        color: "#2E90EA",
        cursor: "pointer",
      },
    },
    big: {
      marginTop: "140px",
      width: "100%",
      //   padding:"65px",
      //   height: "583px",
      backgroundColor: "#f7f7f7",
    },
    upper: {
      color: "black",
      display: "flex",
      justifyContent: "space-between",
      //   alignItems:"center",
      padding: "50px",
    },
    left: {
      width: "75%",
      // marginBottom:"33px",
    },
    lower: {
      marginTop: "30px",
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "Manrope",
      fontSize: "13px",
      fontWeight: "600",
      lineHeight: "19px",
      letterSpacing: "0px",
      textAlign: "left",
    },
    policy: {
      width: "300px",
      display: "flex",
      justifyContent: "space-between",
    },
    i: {
      display: "inline-block",
      height: "7px",
      width: "7px",
      background: "#2E90EA",
      marginLeft: "3px",
      marginTop: "2px",
    },

    btn2: {
      width: "11vw",
      backgroundColor: "#ffffff !important",
      borderRadius: " 28px !important",
      fontFamily: "Arial !important",
      color: "black !important",
      fontSize: "18px !important",
      padding: "10px 20px 10px 20px !important",
      textDecoration: "none !important",
      marginRight: "50px",
      "&:hover": {
        borderRadius: "26.0722px",
        border: "none !important",
      },
    },

    copyrightsWrapper: {
      alignItems: "center",
    },
  })
);
function Footer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.big}>
        <div className={`${classes.upper} `}>
          <div className={classes.left}>
            <Typography
              sx={{
                fontFamily: "Manrope",
                fontSize: "64px",
                fontWeight: 700,
                lineHeight: "76px",
                letterSpacing: "0px",
                textAlign: "left",
                marginBottom: "15px",
              }}
            >
              FitBit<i className={classes.i}></i>
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "25%",
              }}
            >
              <div>
                <InstagramIcon
                  style={{ color: "grey" }}
                  className={classes.nav}
                />
              </div>
              <div>
                <TwitterIcon
                  style={{ color: "grey" }}
                  className={classes.nav}
                />
              </div>
              <div>
                <FacebookIcon
                  style={{ color: "grey" }}
                  className={classes.nav}
                />
              </div>
            </div>
          </div>

          <Table>
            <TableBody
              sx={{
                border: "none",
              }}
            >
              <TableRow>
                <TableCell
                  className={classes.nav}
                  sx={{
                    border: "none",
                    fontFamily: "Manrope",
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "29px",
                    letterSpacing: "0px",
                    textAlign: "left",
                  }}
                >
                  Browse Classes
                </TableCell>
                <TableCell
                  className={classes.nav}
                  sx={{
                    border: "none",
                    fontFamily: "Manrope",
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "29px",
                    letterSpacing: "0px",
                    textAlign: "left",
                  }}
                >
                  Sevices
                </TableCell>
                <TableCell
                  className={classes.nav}
                  sx={{
                    border: "none",
                    fontFamily: "Manrope",
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "29px",
                    letterSpacing: "0px",
                    textAlign: "left",
                  }}
                >
                  About Us
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  className={classes.nav}
                  sx={{
                    border: "none",
                    fontFamily: "Manrope",
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "29px",
                    letterSpacing: "0px",
                    textAlign: "left",
                  }}
                >
                  Shop Now
                </TableCell>
                <TableCell
                  className={classes.nav}
                  sx={{
                    border: "none",
                    fontFamily: "Manrope",
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "29px",
                    letterSpacing: "0px",
                    textAlign: "left",
                  }}
                >
                  Pricing
                </TableCell>
                <TableCell
                  className={classes.nav}
                  sx={{
                    border: "none",
                    fontFamily: "Manrope",
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "29px",
                    letterSpacing: "0px",
                    textAlign: "left",
                  }}
                >
                  Contact Us
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  className={classes.nav}
                  sx={{
                    border: "none",
                    fontFamily: "Manrope",
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "29px",
                    letterSpacing: "0px",
                    textAlign: "left",
                  }}
                >
                  Our Studios
                </TableCell>
                <TableCell
                  className={classes.nav}
                  sx={{
                    border: "none",
                    fontFamily: "Manrope",
                    fontSize: "24px",
                    fontWeight: 600,
                    lineHeight: "29px",
                    letterSpacing: "0px",
                    textAlign: "left",
                  }}
                >
                  Our Blogs
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className={`${classes.upper} ${classes.copyrightsWrapper}`}>
          <Box
            sx={{
              fontFamily: "Manrope",
              fontSize: "16px",
              fontWeight: 600,
              lineHeight: "19px",
              letterSpacing: "0px",
              textAlign: "left",
            }}
          >
            Copyright © 2022 Fitbit. All rights reserved.
          </Box>
          <div className={classes.policy}>
            <Box
              className={classes.nav}
              sx={{
                fontFamily: "Manrope",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "19px",
                letterSpacing: "0px",
                textAlign: "left",
              }}
            >
              Privacy Policy
            </Box>
            <Box
              className={classes.nav}
              sx={{
                fontFamily: "Manrope",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "19px",
                letterSpacing: "0px",
                textAlign: "left",
              }}
            >
              Cookie Policy
            </Box>
            <Box
              className={classes.nav}
              sx={{
                fontFamily: "Manrope",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "19px",
                letterSpacing: "0px",
                textAlign: "left",
              }}
            >
              SiteMap
            </Box>
          </div>
          <Box>
            <Button
              // className={classes.btn2}
              variant="outlined"
              startIcon={<img src={LocalIcons.FLAG} alt="" />}
              endIcon={<ExpandMoreIcon />}
              sx={{
                border: "1px solid grey",
                borderRadius: "26.0722px",
                color: "black",
                "&:hover": {
                  backgroundColor: "none",
                  color: "black",
                  border: "none",
                },
              }}
            >
              United state
            </Button>
          </Box>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;

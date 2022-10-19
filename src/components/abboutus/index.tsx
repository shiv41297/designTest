import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme, Typography } from "@mui/material";
import Title from "../title/index";
import LocalIcons from "../../utils/image";
const styles = makeStyles((theme: Theme) =>
  createStyles({
    aboutus: {
      fontFamily: "Manrope !important",
      paddingTop: "80px",
      // paddingBottom: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "90%",
      margin: "0 auto",
    },
    leftSection: {
      width: "48%",
    },
    content: {
      fontFamily: "Manrope !important",
      marginTop: "20px !important",
      fontSize: "24px !important",
      fontWeight: "400 !important",
    },
    rightSection: {
      width: "48%",
      height: "500px",
      margin: "0",
      "& img": {
        width: "100%",
        height: "100%",
      },
    },
  })
);
function AboutUs() {
  const classes = styles();
  return (
    <div className={classes.aboutus}>
      <div className={classes.leftSection}>
        <Title text={"About Us"} />
        <Typography className={classes.content} variant="body2" component={"p"}>
          Fitbit was founded in 2020 as a family owned and operated business
          specialising in supplying high-quality gym equipment at great prices.
        </Typography>
      </div>
      <figure className={classes.rightSection}>
        <img src={LocalIcons.ABOUT_US} alt="about us" />
      </figure>
    </div>
  );
}

export default AboutUs;

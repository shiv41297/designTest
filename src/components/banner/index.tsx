import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme, Typography } from "@mui/material";
import LocalIcons from "../../utils/image";
const styles = makeStyles((theme: Theme) =>
  createStyles({
    banner: {
      maxHeight: "500px",
      height: "500px",
      width: "100%",
      margin: "0px",
      objectFit: "fill",
      position: "relative",
      "& source": {
        width: "100% !important",
        height: "100% !important",
        objectFit: "cover !important",
      },
    },
    bannerContent: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
      textAlign: "center",
    },
    title: {
      fontFamily: "Manrope !important",
      fontSize: "95px !important",
      color: "#ffffff !important",
    },
    button: {
      borderRadius: "25px",
      fontWeight: "700",
      margin: "0 10px",
      outline: "none",
      padding: "10px 20px",
      fontFamily: "Manrope !important",
      "&:hover": {
        cursor: "pointer",
      },
    },
    activebutton: {
      color: "#000",
      backgroundColor: "#ffffff",
      border: "1px solid #ffffff",
    },
    inactivebutton: {
      color: "#ffffff",
      backgroundColor: "transparent",
      border: "1px solid #ffffff",
      display: "flex",
      alignItems: "center",
      "& img": {
        marginTop: "-2px",
        marginRight: "5px",
        width: "15px !important",
        height: "15px !important",
      },
    },
  })
);
function Banner() {
  const classes = styles();
  return (
    <React.Fragment>
      <video className={classes.banner} loop muted autoPlay>
        <source src={LocalIcons.BANNERVIDEO} type="video/mp4" />
      </video>
      <div className={classes.bannerContent}>
        <Typography className={classes.title} variant="h2" component={"h2"}>
          Dare to be great.
        </Typography>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <button className={`${classes.button} ${classes.activebutton}`}>
            Get Started
          </button>
          <button className={`${classes.button} ${classes.inactivebutton}`}>
            <img src={LocalIcons.PLAY} alt="play" />
            <span>Watch Demos</span>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Banner;

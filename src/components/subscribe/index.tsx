import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme, Typography } from "@mui/material";
const styles = makeStyles((theme: Theme) =>
  createStyles({
    subscribe: {
      fontFamily: "Manrope !important",
      width: "90%",
      margin: "0 auto",
      backgroundColor: "#000000",
      padding: "50px 0",
    },
    text: {
      fontFamily: "Manrope !important",
      fontSize: "64px !important",
      fontWeight: "700",
      color: "#ffffff",
      width: "45%",
    },
    button: {
      fontFamily: "Manrope !important",
      width: "200px",
      backgroundColor: "#2E90EA",
      color: "#ffffff",
      border: "1px solid transparent",
      outline: "none",
      borderRadius: "25px",
      fontSize: "24px",
      fontWeight: "700",
      padding: "10px",
      '&:hover':{
        cursor: "pointer",
      }
    },
  })
);
function Subscribe() {
  const classes = styles();
  return (
    <div className={classes.subscribe}>
      <div
        style={{
          margin: "0 auto",
          width: "85%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography className={classes.text} variant="h3" component={"h3"}>
          Subscribe to our newsletter.
        </Typography>
        <button className={classes.button}>Subscribe</button>
      </div>
    </div>
  );
}

export default Subscribe;

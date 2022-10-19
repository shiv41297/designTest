import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme, Typography } from "@mui/material";
const styles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      width: "100%",
    },
    titleText: {
      fontFamily: "Manrope !important",
      fontWeight: "700 !important",
      fontSize: "64px !important",
    },
  })
);
interface Porps {
  text: string;
}
function Title({ text }: Porps) {
  const classes = styles();
  return (
    <div className={classes.title}>
      <Typography className={classes.titleText} variant={"h1"} component={"h1"}>
        {text}
      </Typography>
      <div
        style={{
          height: "5px",
          backgroundColor: "#2E90EA",
          marginTop: "10px",
          width:"140px"
        }}
      ></div>
    </div>
  );
}

export default Title;

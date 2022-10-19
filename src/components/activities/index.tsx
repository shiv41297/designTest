import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme, Typography } from "@mui/material";
import LocalIcons from "../../utils/image";
const styles = makeStyles((theme: Theme) =>
  createStyles({
    activites: {
      width: "90%",
      marginTop: "20px",
      display: "flex",
      flexWrap: "wrap",
      margin: "0 auto",
      justifyContent: "space-between",
    },
    activity: {
      margin: "22px 0",
      position: "relative",
      width: "48%",
      height: "300px",
      "& img": {
        width: "100% !important",
        height: "100% !important",
      },
    },
    innerContent: {
      position: "absolute",
      top: "40%",
      maxWidth: "38%",
      left: "10%",
    },
    activityTitle: {
      fontFamily: "Manrope !important",
      wordBreak: "break-word",
      color: "#ffffff",
      fontSize: "40px !important",
    },
    activityButton: {
      fontWeight: "700",
      fontFamily: "Manrope !important",
      marginTop: "20px",
      borderRadius: "25px",
      padding: "10px 20px",
      color: "#ffffff",
      border: "1px solid #ffffff",
      transition: "all 0.2s ease-in-out",
      backgroundColor: "transparent",
      '&:hover':{
        cursor:"pointer",
        color: "black",
        border: "1px solid transparent",
        backgroundColor: "#ffffff",
      }
    },
  })
);
function Activities() {
  const classes = styles();
  return (
    <div className={classes.activites}>
      <Activity
        image={LocalIcons.ACTIVITY1}
        text={"Workout Classes"}
        btn={"Browse"}
      />
      <Activity
        image={LocalIcons.ACTIVITY2}
        text={"Browse Equipments"}
        btn={"Browse"}
      />
      <Activity
        image={LocalIcons.ACTIVITY3}
        text={"Yoga Classes"}
        btn={"Browse"}
      />
      <Activity
        image={LocalIcons.ACTIVITY4}
        text={"Brand Store"}
        btn={"Shop Now"}
      />
    </div>
  );
}
const Activity = ({ image, text, btn }: any) => {
  const classes = styles();
  return (
    <figure className={classes.activity}>
      <img src={image} alt={text} />
      <div className={classes.innerContent}>
        <Typography
          className={classes.activityTitle}
          variant={"h3"}
          component={"h3"}
        >
          {text}
        </Typography>
        <button className={classes.activityButton}>{btn}</button>
      </div>
    </figure>
  );
};

export default Activities;

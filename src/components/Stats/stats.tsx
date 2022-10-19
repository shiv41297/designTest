import React, { useState } from "react";
import { makeStyles, createStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";

const arr = [
  { number: "50+", things: "Outlets" },
  { number: "100k+", things: "Students" },
  { number: "200+", things: "Trainers" },
  { number: "50k+", things: "Members" },
];
const theme = createTheme({});

const useStyles = makeStyles(() =>
  createStyles({
    mainDiv: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "100px",
      width: "90%",
      margin: "0 auto",
    // marginLeft: "95px",
    marginBottom:'162px',
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
        flexDirection: "column",
        alignItems: "center",
      },
    },
    box: {
      width: "283px",
      height: "283px",
      backgroundColor: "white",
      textAlign: "center",
      alignContent: "center",
      alignItems: "center",
      "&:hover": {
        width: "283px",
        height: "283px",
        backgroundColor: "white",
        textAlign: "center",
        alignContent: "center",
        alignItems: "center",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
        
      },
      [theme.breakpoints.down("sm")]: {
        width: "283px",
        height: "283px",
        backgroundColor: "white",
        textAlign: "center",
        alignContent: "center",
        alignItems: "center",
      },
    },
    fifty: {
      "&.css-ahj2mt-MuiTypography-root": {
        color: "#000000",
        fontFamily: "Manrope",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "64px",
        lineHeight: "89.6px",
        letterSpacing: "5px",
        textAlign: "center",
        marginTop: "70px",
      },
    },
    hoverClass:{
      "&.css-ahj2mt-MuiTypography-root":{
      color: "#2E90EA",
      fontFamily: "Manrope",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "64px",
      lineHeight: "89.6px",
      letterSpacing: "5px",
      textAlign: "center",
      marginTop: "70px",
      cursor:"pointer"
      },
    },
    subHeading: {
      "&.css-ahj2mt-MuiTypography-root": {
        color: "#5F5F5F",
        fontFamily: "Manrope",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "24px",
        lineHeight: "33.6px",
        textAlign: "center",
        marginLeft: "-15px",
      },
    },

    division: {
      backgroundColor: "#DFDFDF",
      height: "283px",
      width: "1px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    
  })
);

const Stats = () => {

  const [hoverClass , setHoverClass]=useState(-1);
const onHoverEffect =(index:any)=>{
setHoverClass(index)
}
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.mainDiv}>
          {arr.map((item:any,index:any) => {
            return (
              <div className={classes.box} onMouseOver={()=>onHoverEffect(index)} onMouseLeave={()=>{setHoverClass(-1)}} >
                <Typography className={index == hoverClass ? `${classes.hoverClass}`:`${classes.fifty}`}>{item.number}</Typography>
                <Typography className={classes.subHeading}>
                  {item.things}
                </Typography>
                </div>
            );
          })}
        </div>
      </ThemeProvider>
    </>
  );
};

export default Stats;

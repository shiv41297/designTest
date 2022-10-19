import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Button, Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import Images from "../../utils/image";

const arr = [
  {
    name: "Nike Metcon 7",
    type: "Training Shoes",
    symbol: "$",
    price: "120",
    image: Images.Shoes,
  },
  {
    name: "Nike Heritage",
    type: "Crossbody Bag",
    symbol: "$",
    price: "60",
    image: Images.Image2,
  },
  {
    name: "Nike Pro Dri-FIT",
    type: "Women's Training Leggings",
    symbol: "$",
    price: "40",
    image: Images.Image3,
  },
  {
    name: "Nike One",
    type: "Women's Training Tote Bag",
    symbol: "$",
    price: "10",
    image: Images.Image4,
  },
  {
    name: "Nike Venturer",
    type: "Performance Face Mask",
    symbol: " $",
    price: "30",
    image: Images.Image5,
  },
  {
    name: "Nike Metcon 4",
    type: "Women's Training Shoes",
    symbol: "$",
    price: "90",
    image: Images.Image6,
  },
];

const theme = createTheme({});
const useStyles = makeStyles(() =>
  createStyles({
    mainDiv: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      width: "90%",
      margin: "0 auto",
    },
    headingMain: {
      "&.css-ahj2mt-MuiTypography-root": {
        color: "#000000",
        fontFamily: "Manrope !important",
        fontStyle: "Manrope",
        fontWeight: "300",
        fontSize: "54px",
        lineHeight: "76.8px",
        [theme.breakpoints.down("sm")]: {
          color: "#000000",
          fontFamily: "Manrope",
          fontStyle: "normal",
          fontWeight: "300",
          fontSize: "28px",
          lineHeight: "76.8px",
        },
      },
    },
    underLine: {
      backgroundColor: "#2E90EA",
      width: "144px",
      height: "8px",
      //   marginBottom:'80px',
      marginLeft: "4px",
      [theme.breakpoints.down("sm")]: {
        backgroundColor: "#2E90EA",
        width: "84px",
        height: "5px",
      },
    },
    btnView: {
      "&.css-1e6y48t-MuiButtonBase-root-MuiButton-root": {
        width: "140px",
        height: "51px",
        border: "1px solid #000000",
        borderRadius: "34px",
        color: "black",
        marginTop: "20px",
        [theme.breakpoints.down("sm")]: {
          width: "70px",
          height: "31px",
          border: "1px solid #000000",
          borderRadius: "20px",
          color: "black",
          marginTop: "20px",
          fontSize: "10px",
        },
      },
    },
    imgAlign: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      width: "90%",
      margin: "0 auto",
      flexDirection: "row",
      marginBottom: "120px",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingLeft: "5px",
        width: "800px",
        marginLeft: "5px",
        flexDirection: "row",
      },
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingLeft: "10px",
        width: "250px",
        marginLeft: "5px",
        flexDirection: "column",
      },
    },
    mainDivCard: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      marginTop: "80px",
      width: "30%",
    },
    imgStyle: {
      height: "495px",
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        height: "445px",
        width: "316px",
      },
    },
    mainHeading: {
      "&.css-ahj2mt-MuiTypography-root": {
        fontSize: "28px",
        lineHeight: "38.5px",
        fontFamily: "Manrope !important",
        fontStyle: "normal",
        fontWeight: "700",
        marginBottom: "10px",
        [theme.breakpoints.down("sm")]: {
          fontSize: "21px",
          lineHeight: "38.5px",
          fontFamily: "Manrope",
          fontStyle: "normal",
          fontWeight: "700",
        },
      },
    },
    subHeading: {
      "&.css-ahj2mt-MuiTypography-root": {
        fontSize: "16px",
        lineHeight: "21.86px",
        fontFamily: "Manrope !important",
        fontStyle: "normal",
        fontWeight: "400",
        color: "#5F5F5F",
      },
    },
    priceHeading: {
      "&.css-ahj2mt-MuiTypography-root": {
        fontSize: "25px",
        lineHeight: "38.25px",
        fontFamily: "Manrope !important",
        fontStyle: "normal",
        fontWeight: "lighter",
        color: "#000000",
        [theme.breakpoints.down("sm")]: {
          fontSize: "21px",
          lineHeight: "38.25px",
          fontFamily: "Manrope",
          fontStyle: "normal",
          fontWeight: "300",
          color: "#000000",
        },
      },
    },
    details: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "90%",
      marginTop: "18px",
      marginLeft: "25px",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: "0px",
        width: "316px",
      },
    },
  })
);

const Newlaunch = () => {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.mainDiv}>
          <div>
            <Typography className={classes.headingMain}>
              Nike New Launches !
            </Typography>
            <div className={classes.underLine}></div>
          </div>
          <Button className={classes.btnView}>View All</Button>
        </div>
        <div className={classes.imgAlign}>
          {arr.map((item, index) => {
            return (
              <div className={classes.mainDivCard} key={index}>
                <img
                  className={classes.imgStyle}
                  src={item.image}
                  alt="product "
                />

                <div className={classes.details}>
                  <div>
                    <Typography className={classes.mainHeading}>
                      {item.name}
                    </Typography>
                    <Typography className={classes.subHeading}>
                      {item.type}
                    </Typography>
                  </div>
                  <Typography className={classes.priceHeading}>
                    <span style={{ fontSize: "15px" }}>{item.symbol} </span>
                    {item.price}
                  </Typography>
                </div>
              </div>
            );
          })}
        </div>
      </ThemeProvider>
    </>
  );
};

export default Newlaunch;

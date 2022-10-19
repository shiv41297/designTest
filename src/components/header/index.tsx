import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Theme, Typography } from "@mui/material";
import LocalIcons from "../../utils/image";
const styles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      position: "absolute",
      top: "0px",
      width: "100%",
      padding: "20px 0",
    },
    innerHeader: {
      width: "80%",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    brandingIcon: {
      width: "80px",
      height: "40px",
      margin: "0px",
      "& img": {
        width: "100%",
        height: "100%",
      },
    },
    navigations: {
      display: "flex",
      alignItems: "center",
    },
    navItem: {
      fontSize: "16px !important",
      fontWeight: "700 !important",
      margin: "0 10px !important",
      fontFamily: "Manrope !important",
      transition: "all 0.2s ease-in-out",
      "&:hover": {
        cursor: "pointer",
        color: "#2E90EA",
      },
    },
    loginButton: {
      padding: "10px 20px",
      borderRadius: "25px",
      border: "1px solid #fff",
      outline: "none",
      color: "#fff",
      fontFamily: "Manrope !important",
      backgroundColor: "#2E90EA",
      transition: "all 0.2s ease-in-out",
      "&:hover": {
        cursor: "pointer",
        color: "#2E90EA",
        backgroundColor: "#fff",
        border: "1px solid #2E90EA",
      },
    },
  })
);
function Header() {
  const classes = styles();
  return (
    <div className={classes.header}>
      <div className={classes.innerHeader}>
        <figure className={classes.brandingIcon}>
          <img src={LocalIcons.FITBIT_ICON} alt="branding" />
        </figure>
        <div className={classes.navigations}>
          <Nav name={"Browse Classes"} />
          <Nav name={"Shop"} />
          <Nav name={"Price"} />
          <Nav name={"Blog"} />
          <Nav name={"About Us"} />
          <Nav name={"Contact Us"} />
        </div>
        <button className={classes.loginButton}>Login</button>
      </div>
    </div>
  );
}
const Nav = ({ name }: any) => {
  const classes = styles();
  return (
    <Typography variant="h3" component={"h3"} className={classes.navItem}>
      {name}
    </Typography>
  );
};
export default Header;

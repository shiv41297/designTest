import { createStyles, makeStyles } from "@mui/styles";
import { Theme, Typography } from "@mui/material";
import LocalIcons from "../../utils/image";
const styles = makeStyles((theme: Theme) =>
  createStyles({
    brandPartner: {
      display: "flex",
      width: "90%",
      margin: "0 auto",
      padding: "40px 0",
      alignItems: "center",
    },
    title: {
      fontFamily: "Manrope !important",
      fontWeight: "700 !important",
      fontSize: "20px !important",
      textTransform: "uppercase",
      width: "50%",
    },
    partnersContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "50%",
      "& img": {
        width: "50px !important",
        height: "50px !important",
      },
    },
  })
);
const BrandPartner = () => {
  const classes = styles();
  return (
    <div className={classes.brandPartner}>
      <Typography className={classes.title} variant={"h4"} component={"h4"}>
        Our Brand Partners
      </Typography>
      <div className={classes.partnersContainer}>
      <img src={LocalIcons.NIKE} alt="nike" />
        <img src={LocalIcons.ADIDAS} alt="adidas" />
        <img src={LocalIcons.PUMA} alt="puma" />
        <img src={LocalIcons.HICON} alt="hicon" />
      </div>
    </div>
  );
};
export default BrandPartner;

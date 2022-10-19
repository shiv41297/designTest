import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import Header from "./components/header";
import Banner from "./components/banner";
import BrandPartner from "./components/brandPartner";
import Activities from "./components/activities";
import AboutUs from "./components/abboutus";
import Subscribe from "./components/subscribe/index";
import Stats from './components/Stats/stats'
import NewLauch from './components/NewLaunch/newlaunch'
const styles = makeStyles((theme: Theme) =>
  createStyles({
    mainComponent: {
      fontFamily: "Manrope !important",
      paddingTop: "80px",
      paddingBottom: "60px",
    },
  })
);
function App() {
  const classes = styles();
  return (
    <div className={classes.mainComponent}>
      <Header />
      <Banner />
      <BrandPartner />
      <Activities />
      <AboutUs />
      <Stats/>
      <NewLauch/>
      <Subscribe />
    </div>
  );
}

export default App;

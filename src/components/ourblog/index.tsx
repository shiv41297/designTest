import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import Title from "../../components/title/index";
import { Theme, Typography } from "@mui/material";
import LocalIcons from "../../utils/image";
const styles = makeStyles((theme: Theme) =>
  createStyles({
    blog: {
      width: "90%",
      margin: "0 auto",
    },
    blogPosts: {
      display: "flex",
      justifyContent: "space-between",
      // alignItems: "center",
      margin: "50px 0",
    },
    postContainer: {
      width: "48%",
      margin: "0px",
      height: "500px",
      position: "relative",
      widht: "100%",
      "& img": {
        width: "100%",
        height: "100%",
      },
    },
    postContainer2: {
      margin: "0",
      position: "relative",
      height: "230px",
      width: "100%",
      "& img": {
        width: "100%",
        height: "100%",
      },
    },
    content: {
      position: "absolute",
      top: "70%",
      left: "20px",
    },
    content1: {
      position: "absolute",
      top: "40%",
      left: "20px",
    },
    text1: {
      fontSize: "40px !important",
      fontWeight: "700 !important",
      color: "#ffffff",
    },
    button: {
      marginTop: "20px",
      backgroundColor: "transparent",
      border: "1px solid #ffffff",
      outline: "none",
      color: "#ffffff",
      padding:"10px",
      borderRadius:"25px",
      fontWeight:"700",
      transition: "all 0.2s ease-in-out",
      '&:hover':{
        cursor: "pointer",
        color:"#428BC1",
        backgroundColor: "#ffffff",

      }
    },
  })
);
function Blog() {
  const classes = styles();
  return (
    <div className={classes.blog}>
      <Title text={"Our Blogs"} />
      <div className={classes.blogPosts}>
        <figure className={classes.postContainer}>
          <img src={LocalIcons.OURBLOG1} alt="blog1" />
          <div className={classes.content}>
            <Typography
              className={classes.text1}
              variant={"h3"}
              component={"h3"}
            >
              How to stay healthy?
            </Typography>
            <button className={classes.button}>Read Blog</button>
          </div>
        </figure>
        <div style={{ width: "48%" }}>
          <figure className={classes.postContainer2}>
            <img src={LocalIcons.OURBLOG2} alt="blog1" />
            <div className={classes.content1}>
              <Typography
                className={classes.text1}
                variant={"h3"}
                component={"h3"}
              >
                How to stay healthy?
              </Typography>
              <button className={classes.button}>Read Blog</button>
            </div>
          </figure>
          <figure
            className={classes.postContainer2}
            style={{ marginTop: "40px" }}
          >
            <img src={LocalIcons.OURBLOG3} alt="blog1" />
            <div className={classes.content1}>
              <Typography
                className={classes.text1}
                variant={"h3"}
                component={"h3"}
              >
                How to stay healthy?
              </Typography>
              <button className={classes.button}>Read Blog</button>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Blog;

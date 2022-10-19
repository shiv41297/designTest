import React from 'react';
import styles from './style';
import LocalIcons from '../../utils/image';

export default function Blog() {
  const classes = styles();
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.headingContainer}>
          <div className={classes.headingStyles}>Our Blogs</div>
          <div className={classes.blueLineContainer}></div>
        </div>
        <figure className={classes.container}>
          <div className={classes.healthContainer}>
          <img src={LocalIcons.OURBLOG1} alt="about us" />
            <div className={classes.headStyle}>How to stay Healthy?</div>
            <div><button className={classes.btn}>Read Blog</button></div>
          </div>
          <figure className={classes.rightContainer}>
            <div className={classes.beginnerContainer}>
          <img src={LocalIcons.OURBLOG2} alt="about us" />
            
              <div className={classes.headStyle1}>Workout For Beginners</div>
              <div><button className={classes.btn}>Read Blog</button></div>
            </div>
            <div className={classes.cardioContainer}>
            <img src={LocalIcons.OURBLOG3} alt="about us" />
              <div className={classes.headStyle1}>Is Cardio Important?</div>
              <div><button className={classes.btn}> Read Blog </button></div>
            </div>
          </figure>
        </figure>
        
      </div>
    </>
  );
}
import React from "react";
import classes from "./About.module.css";


const About = () => {
    
  return (
    <section className={classes.about}>
      <div className={classes.about__container}>
        <div className={classes.about__content}>
            <h1>Kevin Ton-That - Web Designer</h1>
            <p>There are many paths forward, just make it your own.</p>
            <div className={classes.about__icons}>
                <a href='#' className={classes.btn}>Button</a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;

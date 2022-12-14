import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.navbars}>
      <ul className={classes.navlist}>
        <li className={classes.navitem}>
          <a href="#">Portfolio</a>
        </li>
        <li className={classes.navitem}>
          <a href="#">Home</a>
        </li>
        <li className={classes.navitem}>
          <a href="#">About</a>
        </li>
        <li className={classes.navitem}>
          <a href="#">Projects</a>
        </li>
      </ul>

    </div>
  );
};

export default Header;

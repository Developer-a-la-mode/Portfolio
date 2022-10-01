import React from "react";
import classes from "./Card.module.css";
import imageee from "../../img/lizard.jpg";

const Card = () => {
  return (
    <section className={classes.projects}>
      <div className={classes.card__container}>
        <div className={classes.card}>
          <figure className={classes.card__image}>
            <img src={imageee} />
          </figure>
          <div className={classes.card__content}>
            <h2 className={classes.card__title}>Travel</h2>
            <div className={classes.card__subtitle}>Travel Pro Tips</div>
            <p className={classes.card__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
        </div>

        <div className={classes.card}>
          <figure className={classes.card__image}>
            <img src={imageee} />
          </figure>
          <div className={classes.card__content}>
            <h2 className={classes.card__title}>Travel</h2>
            <div className={classes.card__subtitle}>Travel Pro Tips</div>
            <p className={classes.card__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
        </div>

        <div className={classes.card}>
          <figure className={classes.card__image}>
            <img src={imageee} />
          </figure>
          <div className={classes.card__content}>
            <h2 className={classes.card__title}>Travel</h2>
            <div className={classes.card__subtitle}>Travel Pro Tips</div>
            <p className={classes.card__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
        </div>

        <div className={classes.card}>
          <figure className={classes.card__image}>
            <img src={imageee} />
          </figure>
          <div className={classes.card__content}>
            <h2 className={classes.card__title}>Travel</h2>
            <div className={classes.card__subtitle}>Travel Pro Tips</div>
            <p className={classes.card__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;

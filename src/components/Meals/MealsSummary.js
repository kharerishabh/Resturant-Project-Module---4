import React from "react";

import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favourite meal form our broad selection of avaliable meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All ours meals are cooked with high quailty ingredients, just in time
        and of course by experienced cheif.
      </p>
    </section>
  );
};

export default MealsSummary;

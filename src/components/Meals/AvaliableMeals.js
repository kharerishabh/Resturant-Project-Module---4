import React from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvaliableMeals.module.css";
import MealItemForm from "./MealItem/MealItemForm";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Dosa",
    description: "Healthy and with taste of coconut chatni",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Burger",
    description: "With spicies and meonies",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Salad",
    description: "With lots of Tomato and Cucumber",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Tomato soup",
    description: "Healthy...and red...",
    price: 18.99,
  },
];

const AvaliableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
        <MealItemForm/>
      </Card>
    </section>
  );
};

export default AvaliableMeals;

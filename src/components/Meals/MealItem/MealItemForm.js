import React from "react";
import classes from './MealItemForm.module.css';

const MealItemForm  = (props) =>{
    return (<form className={classes.form}>
        <label className={classes.form.label}>Amount</label>
        <input type='number'/>
        <button>+ Add</button>
    </form>);
};

export default MealItemForm;
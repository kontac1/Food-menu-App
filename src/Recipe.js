import React from "react";
import style from "./Recipe.module.css";

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p className={style.calories} >{calories}</p>
            <ol>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <img className={style.images} src={image} alt=""/>
        </div>
    );
};

export default Recipe;

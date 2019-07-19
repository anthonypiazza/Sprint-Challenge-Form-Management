import React from 'react';

import './FoodDetails.css';

function FoodDetails(props){
    return(
        <div className='food-details'>
            <h1>{props.food.name}</h1>
            <h2>{props.food.course}</h2>
            <h3>{props.food.technique}</h3>
            <h4>Food Ingredients</h4>
            <ol>
                <li>{props.food.ingredients[0]}</li>
                <li>{props.food.ingredients[1]}</li>
                <li>{props.food.ingredients[2]}</li>
                <li>{props.food.ingredients[3]}</li>
            </ol>
        </div>
    )
}

export default FoodDetails;
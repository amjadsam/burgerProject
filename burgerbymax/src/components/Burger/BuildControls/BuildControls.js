import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";
import { checkPropTypes } from "prop-types";
export default function BuildControls(props)
{
    const controls=[
        {label:"Salad",type:"salad"},
        {label:"Bacon",type:"bacon"},
        {label:"Cheese",type:"cheese"},
        {label:"Meat",type:"meat"}
    ];
    return(
        <div className="BuildControls">
            <b>Current Price:{props.price.toFixed(2)}</b>
         {controls.map((el)=><BuildControl  ingredientHandler={props.ingredientAdded}
         ingredientHandlerRemover={props.ingredientRemoved} type={el.type} label={el.label} key={el.type}/>)}
        <button className="OrderButton"  disabled={!props.purchasable}>ORDER NOW</button>
        </div>
    );
}
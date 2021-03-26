import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";
export default function BuildControls()
{
    const controls=[
        {label:"Salad",type:"salad"},
        {label:"Bacon",type:"bacon"},
        {label:"Cheese",type:"cheese"},
        {label:"Meat",type:"meat"}
    ];
    return(
        <div className="BuildControls">
         {controls.map((el)=><BuildControl label={el.label} key={el.type}/>)}
        </div>
    );
}
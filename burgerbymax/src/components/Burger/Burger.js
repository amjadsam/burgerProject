import React from "react";
import "./Burger.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
export default function Burger(props)
{
    let arr=Object.keys(props.ingredients);
    let arr2=arr.map((el)=>{
        return props.ingredients[el];
    });
    let count=arr2.find((el)=>{
        return el>0;
    })
    if(count>0)
    {
        count=true;
    }
    return(
        <div className="Burger">
         <BurgerIngredients type="bread-top"/>
         {arr.map((el)=>{
            return  [...Array(props.ingredients[el])].map((el2,index)=>{
                return <BurgerIngredients type={el} key={el+index}/>
             })
         })}
         {!count?<p>Please Start adding incredients</p>:null}
         <BurgerIngredients type="bread-bottom"/>
        </div>
    );
}
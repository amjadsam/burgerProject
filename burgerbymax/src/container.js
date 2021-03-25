import React from "react";
import {Route,Link} from "react-router-dom";
export default function Container()
{
  return(
    <div className="container">
    <div className="top">
    <div style={{width:"40%"}}>
    |Logo|
    </div>
    <div style={{width:"20%"}} >|Builder|</div>
    <div style={{width:"10%"}}>
    <Route>
    <Link to="/orders">
    
    |Orders|
      </Link>
    </Route>
    </div>
    </div>
    <div className="burgerImage">
     BurgerImage
     <p>100</p>
    </div>
    <div className="incredients">
    <div style={{height:"30%"}}>
    Meat
    <button>+</button>
    <button>-</button>
    </div>
    <div style={{height:"30%"}} >
    Salad
    <button>+</button>
    <button>-</button>
    </div>
    <div style={{height:"30%"}} >
    Cheese
    <button>+</button>
    <button>-</button>
    </div>
    </div>
    <button>Checkout</button>
    </div>
  );
}
import React from "react";
import Aux from "./../../hoc/Auxilliary";
import "./../../../src/App.css"
export default function Layout(props)
{
    return(
        <Aux>
        <div>toolbar, side drawer,Backdrop</div> 
        <main className="main">
            {props.children}
        </main>
        </Aux>
    );
}
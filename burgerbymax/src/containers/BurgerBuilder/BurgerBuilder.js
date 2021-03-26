import React , {Component} from "react";
import Aux from "./../../hoc/Auxilliary";
import Burger from "./../../components/Burger/Burger";
import BuildControls from "./../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES={
    salad:0.5,
    bacon:0.7,
    cheese:0.4,
    meat:1.3
}
class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchasable:false
    }
    updatePurchaseState=(ingredients)=>{
        const sum=Object.keys(ingredients).map((el)=>{
            return ingredients[el]
        }).reduce((sum,ele)=>{
            return sum+ele;
        },0);
        this.setState({purchasable:sum>0});
    }
    addIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount+1;
        const updatedIngredient={
            ...this.state.ingredients
        };
        updatedIngredient[type]=updatedCount;
        const priceAddition=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice+priceAddition;
        this.setState({
            ingredients:updatedIngredient,
            totalPrice:newPrice
        });
        this.updatePurchaseState(updatedIngredient);
    }
    removeIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        if(oldCount>0)
        {
        const updatedCount=oldCount-1;
        const updatedIngredient={
            ...this.state.ingredients
        };
        updatedIngredient[type]=updatedCount;
        const priceSubtraction=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice-priceSubtraction;
        this.setState({
            ingredients:updatedIngredient,
            totalPrice:newPrice
        });
        this.updatePurchaseState(updatedIngredient);
    }
    }
    render()
    {
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                 price={this.state.totalPrice} purchasable={this.state.purchasable}
                  ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler} />
            </Aux>
        );
    }
}
export default BurgerBuilder;
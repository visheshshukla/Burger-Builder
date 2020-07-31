import React, { Component } from 'react';
import Aux from '../../../hoc/Auxillary/zAuxz';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    //This could be a Functional Component.
    render () {
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igKey => {
        return <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
    });
    return (
        <Aux>
        <h3> Your Order </h3>
        <p> A Delicious Burger With Following Ingredients </p>
        <ul>
            {ingredientSummary}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue To CheckOut ?</p>
        <Button btnType='Success' clicked={this.props.purchaseContinueHandler}>Continue</Button>
        <Button btnType='Danger'clicked={this.props.purchaseCancelHandler}>Cancel</Button>
        </Aux>
    );
    }
};

export default OrderSummary;
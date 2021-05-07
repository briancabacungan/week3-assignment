import React from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {
    static propTypes = {
        cart: PropTypes.arrayOf(PropTypes.shape({title:PropTypes.string,
        payment:{cost:PropTypes.number},})).isRequired,
        removeCart:PropTypes.func,
        cartTotal:PropTypes.number
    }

    render() {
        if (this.props.cart) {
            const cart = this.props.cart;
            let cartTxt = cart.length === 0 ? "Empty Cart" : `${cart.length} items in Cart`;

            const cartList = this.props.cart.map((item, index) => {
                const keys = `${item.title}${index}`;
                return <li key={keys}>
                        {item.title}
                        <button onClick={this.props.removeCart(index)}>
                            Remove Item from Cart
                        </button>
                </li>
            })

            return (
                <div className="cart">

                    <div className="cartTxt">
                        {cartTxt}
                    </div>

                    <div className="cartList">
                        <ul>
                            {cartList}
                        </ul>
                    </div>

                    <div className="cartTotal">
                        <p>
                            Cart Total: {this.props.cartTotal}
                        </p>
                    </div>

                </div>
            )
        }
    }
}

export default Cart;
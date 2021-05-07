import React from 'react';
import PropTypes from 'prop-types';

class CartItems extends React.Component {
    static propTypes = {
        items:PropTypes.arrayOf(PropTypes.shape({title:PropTypes.string,
        image:PropTypes.string,
        payment:PropTypes.shape({cost:PropTypes.number}),})).isRequired,
        addCart:PropTypes.func
    }

    render() {
        if (this.props.items) {
            return this.props.items.map((item) => 
            {
                return (
                    <div className="cartItems">
                        
                        <div className="itemTitle">
                            {item.title}
                        </div>

                        <div className="itemImage">
                            <img alt={item.title} src={item.image}/>
                        </div>

                        <div className="itemDescription">
                            ${item.payment.cost}
                        </div>

                        <div className="itemBtn">
                            <button onClick={this.props.addCart(item)}>
                                Add Item to Cart
                            </button>
                        </div>

                    </div>
                )
            })
        }
    }
}

export default CartItems;
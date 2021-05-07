import airbnbs from './_data/airbnbs.json';
import React from 'react';
import Cart from './cart';
import CartItems from './cartItems';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: airbnbs,
      cart: [],
      cartTotal: 0
    }
  }

  addCart = (item) => {
    return () => {
      const addedItem = item;
      let itemTotal = this.state.cartTotal;
      
      this.setState({
        cart: [...this.state.cart, {title:addedItem.title, cost:addedItem.payment.cost}],
        cartTotal: itemTotal + addedItem.payment.cost
      })
    }
  }

  removeCart = (index) => {
    return () => {
      if (index < this.state.cart.length) {
        this.state.cart.splice(index, 1);

        this.setState({
          cart: this.state.cart,
          cartTotal: this.state.cartTotal - this.state.cart[index].cost
        })
      }
    }
  }

  render() {
    return (
      //<div>
        <div className="content">
          <div className="cart">
            <Cart cart={this.state.cart} removeCart={this.removeCart} cartTotal={this.state.cartTotal}/>
          </div>

          <div className="item">
            <CartItems items={this.state.items} addCart={this.addCart}/>
          </div>
        </div>
      //</div>
    )
  }
}

export default App;

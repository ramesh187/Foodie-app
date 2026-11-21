import { useFood } from '../../context/FoodContext'
import { Link } from 'react-router-dom'

import CartItem from '../CartItem'
import OrderSummary from '../OrderSummary'

import './index.css'

const Cart = () => {

  const {
    cart,
    updateQuantity,
    removeItem,
    subtotal,
    deliveryFee,
    total,
  } = useFood()

  const cartCount = cart.reduce(
    (count, item) => count + item.quantity, 0
  )

  return (
    <div className="cart-section" id="cart">

      <div className="cart-heading">
        <div>
          <p className="eyebrow">YOUR SELECTION</p>
          <h2>Your shopping cart<span>.</span></h2>
        </div>

        <span>{cartCount} items</span>
      </div>

      <div className="cart-layout">

        <div className="cart-items">

          {cart.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-icon">🛒</div>
              <h3>Your cart is feeling lonely!</h3>
              <p>Add some delicious food to get started.</p>
              <Link to="/menu">Explore Menu ↗</Link>
            </div>
          ) : (
            cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
              />
            ))
          )}

        </div>

        <OrderSummary
          subtotal={subtotal}
          deliveryFee={deliveryFee}
          total={total}
          cartLength={cart.length}
        />

      </div>
    </div>
  )
}

export default Cart
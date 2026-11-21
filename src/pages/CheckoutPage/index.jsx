import { useNavigate } from 'react-router-dom'
import { useFood } from '../../context/FoodContext'
import './index.css'

const CheckoutPage = () => {
  const { cart, total, placeOrder } = useFood()
  const navigate = useNavigate()

  const onPlaceOrder = () => {
    if (cart.length === 0) {
      navigate('/cart')
      return
    }

    placeOrder()
    navigate('/success')
  }

  if (cart.length === 0) {
    return (
      <div className="message">
        <h2>Your cart is empty!</h2>
        <button onClick={() => navigate('/')}>
          Explore Menu
        </button>
      </div>
    )
  }

  return (
    <div className="checkout-page">
      <div className="checkout-modal">

        <button
          className="close-button"
          onClick={() => navigate('/cart')}
        >
          ×
        </button>

        <p className="eyebrow">FINAL STEP</p>
        <h2>Confirm your order</h2>

        {cart.map(item => (
          <div className="bill-row" key={item.id}>
            <span>{item.name} × {item.quantity}</span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}

        <div className="bill-row total-row">
          <strong>Grand Total</strong>
          <strong>₹{total}</strong>
        </div>

        <button
          className="checkout-button"
          onClick={onPlaceOrder}
        >
          Place Sample Order ✓
        </button>

      </div>
    </div>
  )
}

export default CheckoutPage
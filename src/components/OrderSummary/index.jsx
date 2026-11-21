import { useNavigate } from 'react-router-dom'
import './index.css'

const OrderSummary = ({
  subtotal,
  deliveryFee,
  total,
  cartLength,
}) => {

  const navigate = useNavigate()

  return (
    <div className="bill-card">

      <h3>Order Summary</h3>

      <div className="bill-row">
        <span>Subtotal</span>
        <span>₹{subtotal}</span>
      </div>

      <div className="bill-row">
        <span>Delivery Fee</span>
        <span>₹{deliveryFee}</span>
      </div>

      <div className="bill-row total-row">
        <strong>Total</strong>
        <strong>₹{total}</strong>
      </div>

      <button
        className="checkout-button"
        disabled={cartLength === 0}
        onClick={() => navigate('/checkout')}
      >
        Proceed to Checkout ↗
      </button>

      <p className="secure-note">
        ✦ Sample checkout · No real payment
      </p>

    </div>
  )
}

export default OrderSummary
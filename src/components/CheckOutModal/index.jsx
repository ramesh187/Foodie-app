
import './index.css'

const CheckoutModal = (props) => {
  const { cart, total, onClose, onPlaceOrder } = props

  if (!props.show) {
    return null
  }

  return (
    <div className="modal-overlay">
      <div className="checkout-modal">
        <button
          className="close-button"
          onClick={onClose}
        >
          ×
        </button>

        <p className="eyebrow">FINAL STEP</p>

        <h2>Confirm your order</h2>

        {cart.map((item) => (
          <div className="bill-row" key={item.id}>
            <span>
              {item.name} × {item.quantity}
            </span>

            <span>
              ₹{item.price * item.quantity}
            </span>
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

        <p className="secure-note">
          This is a demo order. No payment required.
        </p>
      </div>
    </div>
  )
}

export default CheckoutModal


import './index.css'

const OrderSuccess = (props) => {
  const { order, onClose } = props

  if (!order) {
    return null
  }

  return (
    <div className="modal-overlay">
      <div className="checkout-modal success-modal">
        <div className="success-icon">✓</div>

        <p className="eyebrow">ORDER CONFIRMED</p>

        <h2>Your food journey begins!</h2>

        <p>Order ID: #{order.id}</p>
        <p>{order.date}</p>

        <div className="order-items">
          {order.items.map((item) => (
            <div className="bill-row" key={item.id}>
              <span>
                {item.name} × {item.quantity}
              </span>

              <span>
                ₹{item.price * item.quantity}
              </span>
            </div>
          ))}
        </div>

        <div className="bill-row total-row">
          <strong>Amount Paid (Demo)</strong>
          <strong>₹{order.total}</strong>
        </div>

        <button
          className="checkout-button"
          onClick={onClose}
        >
          Continue Exploring ↗
        </button>
      </div>
    </div>
  )
}

export default OrderSuccess

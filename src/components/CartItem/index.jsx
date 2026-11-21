
import './index.css'

const CartItem = (props) => {
  const { item, updateQuantity, removeItem } = props

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />

      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <p>₹{item.price} each</p>

        <div className="quantity">
          <button
            onClick={() => updateQuantity(item.id, -1)}
          >
            −
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() => updateQuantity(item.id, 1)}
          >
            +
          </button>
        </div>
      </div>

      <div className="cart-item-end">
        <strong>
          ₹{item.price * item.quantity}
        </strong>

        <button
          className="remove-button"
          onClick={() => removeItem(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem

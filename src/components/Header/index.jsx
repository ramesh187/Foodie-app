import { Link } from 'react-router-dom'
import { useFood } from '../../context/FoodContext'
import './index.css'

const Header = () => {

  const { cartCount } = useFood()

  return (
    <div className="navbar">

      <Link to="/" className="logo">
        FOOD<span>IE.</span>
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/menu">Our Menu</Link>
        <Link to="/about">About</Link>
      </nav>

      <Link to="/cart" className="cart-button">
        🛍 My Cart
        <span>{cartCount}</span>
      </Link>

    </div>
  )
}

export default Header
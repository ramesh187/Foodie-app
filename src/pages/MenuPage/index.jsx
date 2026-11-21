import FoodMenu from '../../components/FoodMenu'
import './index.css'

const MenuPage = () => {
  return (
    <div className="menu-page">
      <div className="menu-page-header">
        <p>Fresh & Delicious</p>
        <h1>Explore Our Menu</h1>
        <span>Discover delicious dishes made with love.</span>
      </div>

      <FoodMenu />
    </div>
  )
}

export default MenuPage
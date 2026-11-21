import { useFood } from '../../context/FoodContext'
import FoodCard from '../FoodCard'
import './index.css'

const FoodMenu = () => {

  const {
    foods,
    loading,
    error,
    search,
    setSearch,
    activeCategory,
    setActiveCategory,
    categories,
    addToCart,
    getPrice,
  } = useFood()

  const filteredFoods = foods.filter(food => {

    const matchesSearch = food.name
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchesCategory =
      activeCategory === 'All' ||
      food.cuisine === activeCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="menu-section" id="menu">

      <div className="section-heading">
        <div>
          <p className="eyebrow">OUR COLLECTION</p>
          <h2>Explore our menu<span>.</span></h2>
          <p>Discover your next favorite meal.</p>
        </div>

        <div className="search-box">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search your favorite food"
            value={search}
            onChange={event => setSearch(event.target.value)}
          />
        </div>
      </div>

      <div className="categories">
        {categories.map(category => (
          <button
            key={category}
            className={
              activeCategory === category
                ? 'category active'
                : 'category'
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="message">
          <div className="loader"></div>
          <h3>Preparing your menu...</h3>
        </div>
      ) : error ? (
        <div className="message">
          <h3>{error}</h3>
        </div>
      ) : filteredFoods.length === 0 ? (
        <div className="message">
          <h3>No food items found!</h3>
          <p>Try another search or category.</p>
        </div>
      ) : (
        <div className="food-grid">
          {filteredFoods.map(food => (
            <FoodCard
              key={food.id}
              food={food}
              price={getPrice(food.id)}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      )}

    </div>
  )
}

export default FoodMenu
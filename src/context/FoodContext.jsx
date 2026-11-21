
import { createContext, useContext, useEffect, useState } from 'react'

const FoodContext = createContext()

export const FoodProvider = ({ children }) => {

  const [foods, setFoods] = useState([])
  const [cart, setCart] = useState([])
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [order, setOrder] = useState(null)

  useEffect(() => {
    const getFoods = async () => {
      try {
        const response = await fetch(
          'https://dummyjson.com/recipes?limit=30'
        )

        if (!response.ok) {
          throw new Error('Unable to load food menu')
        }

        const data = await response.json()
        setFoods(data.recipes)

      } catch (err) {
        setError(err.message)

      } finally {
        setLoading(false)
      }
    }

    getFoods()
  }, [])

  const categories = [
    'All',
    ...new Set(foods.map(food => food.cuisine))
  ]

  const getPrice = (id) => 149 + id * 17

  const addToCart = (food) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(
        item => item.id === food.id
      )

      if (existingItem) {
        return prevCart.map(item =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [
        ...prevCart,
        {
          ...food,
          price: getPrice(food.id),
          quantity: 1,
        },
      ]
    })
  }

  const updateQuantity = (id, change) => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  const removeItem = (id) => {
    setCart(prevCart =>
      prevCart.filter(item => item.id !== id)
    )
  }

  const cartCount = cart.reduce(
    (count, item) => count + item.quantity, 0
  )

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity, 0
  )

  const deliveryFee = cart.length > 0 ? 40 : 0

  const total = subtotal + deliveryFee

  const placeOrder = () => {
    const orderDetails = {
      id: 'FD' + Date.now().toString().slice(-6),
      items: [...cart],
      subtotal,
      deliveryFee,
      total,
      date: new Date().toLocaleString(),
    }

    setOrder(orderDetails)
    setCart([])
  }

  const value = {
    foods,
    cart,
    search,
    setSearch,
    activeCategory,
    setActiveCategory,
    loading,
    error,
    categories,
    getPrice,
    addToCart,
    updateQuantity,
    removeItem,
    cartCount,
    subtotal,
    deliveryFee,
    total,
    order,
    placeOrder,
  }

  return (
    <FoodContext.Provider value={value}>
      {children}
    </FoodContext.Provider>
  )
}

export const useFood = () => useContext(FoodContext)

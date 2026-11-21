import './index.css'
const FoodCard = (props) =>{
    const {food, onAddToCart,price} = props
    return(
        <div className='food-card'>
            <div className='food-image'>
               <img src={food.image} alt={food.name} />
                <span>{food.cuisine}</span>
                <span>★ {food.rating}</span>
            </div>

            <div className='food-info'>
                <div className='title'>
                    <h3>{food.name}</h3>
                    <p>{food.cuisine} . {food.difficulty}</p>

                    <div className='food-button'>
                        <h3>₹{price}</h3>
                        <button className="add-button" onClick={()=> onAddToCart(food)}>+Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FoodCard
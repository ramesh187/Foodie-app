
import './index.css'
import {Link} from 'react-router-dom'
const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">✦ GOOD FOOD. GOOD MOOD.</p>

        <h1>
          Taste the art of
          <span> delicious food.</span>
        </h1>

        <p className="hero-description">
          Discover extraordinary flavors, handcrafted
          dishes and unforgettable food experiences.
        </p>

        <Link to="/menu" className="hero-button">
          Explore Menu ↗
        </Link>

        <div className="hero-stats">
          <div>
            <h3>30+</h3>
            <p>Food choices</p>
          </div>

          <div>
            <h3>4.8★</h3>
            <p>Food rating</p>
          </div>

          <div>
            <h3>Fresh</h3>
            <p>Every day</p>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1547592180-85f173990554?w=900"
          alt="Delicious food"
        />

        <div className="floating-card">
          <span>✦</span>
          <div>
            <strong>Chef's Special</strong>
            <p>Made with passion</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


import './index.css'

const AboutPage = () => {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="about-tag">✦ WELCOME TO FOODIE</p>

          <h1>
            Good Food.
            <br />
            Great Moments.
            <br />
            <span>Made With Love.</span>
          </h1>

          <p>
            We believe every meal tells a story.
            At Foodie, we bring delicious flavours,
            fresh ingredients and happiness to your table.
          </p>

          <a href="/menu" className="about-button">
            Explore Our Menu →
          </a>
        </div>

        <div className="about-hero-image">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1000"
            alt="Fresh delicious food"
          />
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=900"
            alt="Food preparation"
          />
        </div>

        <div className="story-content">
          <p className="about-tag">OUR STORY</p>

          <h2>
            More Than Food,
            <br />
            It's An Experience.
          </h2>

          <p>
            Foodie was created with one simple idea:
            making delicious food accessible to everyone.
          </p>

          <p>
            We created this platform to make food ordering
            simple, enjoyable and convenient. From exploring
            delicious dishes to placing an order, everything
            is designed with you in mind.
          </p>

          <p>
            Every click brings you closer to your next
            favourite meal.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="mission-section">
        <p className="about-tag">WHAT WE BELIEVE</p>

        <h2>Our Mission</h2>

        <p className="mission-description">
          To make every food ordering experience simple,
          enjoyable and memorable through great food
          and thoughtful design.
        </p>

        <div className="mission-cards">
          <div className="mission-card">
            <span>🥗</span>
            <h3>Fresh Choices</h3>
            <p>
              Discover delicious dishes and explore
              a variety of food options.
            </p>
          </div>

          <div className="mission-card">
            <span>❤️</span>
            <h3>Made With Care</h3>
            <p>
              Every part of the experience is designed
              with attention and care.
            </p>
          </div>

          <div className="mission-card">
            <span>⚡</span>
            <h3>Easy Ordering</h3>
            <p>
              Find your favourite food and order
              with a smooth experience.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-foodie">
        <div className="why-content">
          <p className="about-tag">WHY FOODIE?</p>

          <h2>
            Your Favourite Food,
            <br />
            Just A Click Away.
          </h2>

          <div className="why-item">
            <span>✓</span>
            <div>
              <h3>Easy Food Discovery</h3>
              <p>Explore different dishes in one place.</p>
            </div>
          </div>

          <div className="why-item">
            <span>✓</span>
            <div>
              <h3>Simple Cart Management</h3>
              <p>Add, update or remove your favourite items.</p>
            </div>
          </div>

          <div className="why-item">
            <span>✓</span>
            <div>
              <h3>Convenient Checkout</h3>
              <p>Enjoy a simple and smooth ordering flow.</p>
            </div>
          </div>
        </div>

        <div className="why-image">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900"
            alt="Delicious food served on a table"
          />
        </div>
      </section>

      {/* Developer Credit */}
      <section className="developer-section">
        <p className="about-tag">THE CREATOR</p>

        <h2>Designed & Developed with ❤️</h2>

        <p>
          Foodie is a personal React.js project built to
          explore modern web development and create a
          beautiful online food ordering experience.
        </p>

        <h3>Created by Ramesh</h3>

        <div className="developer-tech">
          <span>React.js</span>
          <span>JavaScript</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>Context API</span>
        </div>
      </section>

    </div>
  )
}

export default AboutPage

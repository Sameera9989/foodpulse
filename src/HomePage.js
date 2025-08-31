import React, { useState } from 'react';

function HomePage({ onNavigate }) {
  const [currentStep, setCurrentStep] = useState(2); // Simulate delivery progress

  const handleUpdate = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    } else {
      alert("Order delivered! 🎉");
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="nav-logo">🍽️ FoodPulse</a>
          <ul className="nav-menu">
            <li><a onClick={() => onNavigate('home')}>Home</a></li>
            <li><a onClick={() => onNavigate('about')}>About</a></li>
            <li><a onClick={handleUpdate}>Track</a></li>
            <li><a href="#download" className="btn-login">Login / Sign Up</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Order Food. <span className="highlight">Feel Good.</span></h1>
            <p>
              The only food app that knows your mood, cares for the planet, and lets you track your delivery in real-time — even in AR!
            </p>
            <div className="hero-btns">
              <a onClick={() => onNavigate('about')} className="btn btn-primary">Get Started</a>
              <a href="#features" className="btn btn-secondary">Learn More</a>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Delicious food"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="features">
        <div className="features-container">
          <h2 className="section-title">What Makes Us <span>Unique?</span></h2>
          <div className="cards">
            <div className="card">
              <h3>🧠 Mood-Based Picks</h3>
              <p>Tell us how you feel — we’ll suggest food that matches your mood and health.</p>
            </div>
            <div className="card">
              <h3>🌱 Eco-Score & Carbon Tracker</h3>
              <p>See the environmental impact of every meal and earn Green Points.</p>
            </div>
            <div className="card">
              <h3>👥 Group Ordering + Voting</h3>
              <p>Order with friends and vote on the menu — split the bill automatically.</p>
            </div>
            <div className="card">
              <h3>📸 AR Delivery Tracking</h3>
              <p>See your delivery agent moving toward you in augmented reality.</p>
            </div>
            <div className="card">
              <h3>♻️ Rescue Meals</h3>
              <p>Save unsold meals from waste at 50–70% off. Good for you, great for Earth.</p>
            </div>
            <div className="card">
              <h3>🎤 Voice Order Notes</h3>
              <p>Record a quick voice note instead of typing: “No onion, extra cheese!”</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking */}
      <section id="tracking" className="tracking">
        <div className="tracking-container">
          <h2>Track Your Food in <span>Real-Time</span></h2>
          <p>Watch your order move from kitchen to doorstep — with live updates.</p>
          <div className="tracking-demo">
            <div className="status active">Order Placed</div>
            <div className="status active">Preparing</div>
            <div className={`status ${currentStep >= 3 ? 'active' : ''}`}>Out for Delivery</div>
            <div className={`status ${currentStep >= 4 ? 'active' : ''}`}>Delivered</div>
          </div>
          <button id="updateBtn" onClick={handleUpdate}>
            Simulate Update
          </button>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="download">
        <div className="download-container">
          <h2>Ready to Eat Smarter?</h2>
          <p>
            Join thousands reducing food waste, eating better, and tracking deliveries like never before.
          </p>
          <div className="download-btns">
            <a href="#" className="btn-store">📱 App Store</a>
            <a href="#" className="btn-store">🤖 Google Play</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p>&copy; 2025 FoodPulse. Made with 🌱 for a better planet.</p>
          <ul>
            <li><a onClick={() => onNavigate('home')}>Home</a></li>
            <li><a onClick={() => onNavigate('about')}>About</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
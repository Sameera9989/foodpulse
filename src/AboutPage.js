import React from 'react';

function AboutPage({ onNavigate }) {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", padding: "2rem", minHeight: "100vh", backgroundColor: "#fdf4f4", color: "#333" }}>
      {/* Simple Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="nav-logo">🍽️ FoodPulse</a>
          <ul className="nav-menu">
            <li><a onClick={() => onNavigate('home')}>Home</a></li>
            <li><a onClick={() => onNavigate('about')}>About</a></li>
            <li><a href="#download" className="btn-login">Login / Sign Up</a></li>
          </ul>
        </div>
      </nav>

      <div style={{ maxWidth: "800px", margin: "100px auto", padding: "2rem", backgroundColor: "white", borderRadius: "15px", boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#e63946", marginBottom: "1rem" }}>About FoodPulse</h1>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#555" }}>
          FoodPulse was born from a simple idea: <strong>food delivery should be joyful, sustainable, and human-centered.</strong>
        </p>
        <p>
          We noticed that most apps only care about speed — not your mood, your health, or the planet. So we built one that does.
        </p>

        <h2 style={{ marginTop: "2rem", color: "#e63946" }}>Our Mission</h2>
        <p>
          To reduce food waste, empower eco-conscious choices, and make ordering food feel personal — not transactional.
        </p>

        <h2 style={{ marginTop: "2rem", color: "#e63946" }}>What We Believe In</h2>
        <ul style={{ marginLeft: "1.5rem", margin: "1rem 0" }}>
          <li>🌱 <strong>Sustainability:</strong> Every meal has a carbon footprint. We show it.</li>
          <li>❤️ <strong>Wellness:</strong> We suggest food based on your mood and diet.</li>
          <li>📱 <strong>Innovation:</strong> AR tracking, voice notes, group voting — we go beyond.</li>
          <li>🤝 <strong>Community:</strong> Share meals, save leftovers, eat together.</li>
        </ul>

        <p>
          Join us in building a food system that's faster for you and kinder to the Earth.
        </p>

        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <button
            onClick={() => onNavigate('home')}
            style={{
              padding: "0.8rem 2rem",
              backgroundColor: "#e63946",
              color: "white",
              border: "none",
              borderRadius: "30px",
              fontSize: "1rem",
              cursor: "pointer"
            }}
          >
            Back to Home
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer" style={{ marginTop: "4rem" }}>
        <div className="footer-container">
          <p>&copy; 2025 FoodPulse. Made with 🌱 for a better planet.</p>
          <ul>
            <li><a onClick={() => onNavigate('home')}>Home</a></li>
            <li><a onClick={() => onNavigate('about')}>About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default AboutPage;
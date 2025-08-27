import React, { useState } from 'react';
import './App.css'; // We'll add styles there

function App() {
  const [isLogin, setIsLogin] = useState(true); // true = login form, false = signup

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      alert("Please fill in all fields.");
    } else {
      alert("Login successful!");
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirm = e.target.confirm.value;

    if (!name || !email || !password || !confirm) {
      alert("Please fill in all fields.");
    } else if (password !== confirm) {
      alert("Passwords do not match.");
    } else {
      alert("Signup successful!");
    }
  };

  return (
    <div className="body">
      <div className="container">
        <h1 className="logo">FoodPulse</h1>
        <p className="tagline">Order. Track. Connect.</p>

        <div className="form-toggle">
          <button
            className={isLogin ? 'active' : ''}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? 'active' : ''}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>

        {/* Login Form */}
        {isLogin ? (
          <form onSubmit={handleLoginSubmit} className="form">
            <input name="email" type="email" placeholder="Email" required />
            <input name="password" type="password" placeholder="Password" required />
            <button type="submit">Login</button>
            <p className="switch">
              Don't have an account? <span onClick={toggleForm}>Signup</span>
            </p>
          </form>
        ) : (
          /* Signup Form */
          <form onSubmit={handleSignupSubmit} className="form">
            <input name="name" type="text" placeholder="Full Name" required />
            <input name="email" type="email" placeholder="Email" required />
            <input name="password" type="password" placeholder="Password" required />
            <input name="confirm" type="password" placeholder="Confirm Password" required />
            <button type="submit">Signup</button>
            <p className="switch">
              Already have an account? <span onClick={toggleForm}>Login</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
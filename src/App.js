import React, { useState } from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'about'

  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentPage === 'home' ? (
        <HomePage onNavigate={navigate} />
      ) : (
        <AboutPage onNavigate={navigate} />
      )}
    </div>
  );
}

export default App;
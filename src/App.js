import React from 'react'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;

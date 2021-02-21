import React from 'react'
import Clock from './components/Clock/Clock.jsx';  
import './App.scss';
import './components/CoinPairDisplay/CoinPairDisplay.jsx';
import CoinPairDisplay from './components/CoinPairDisplay/CoinPairDisplay.jsx';

function App() {
  return (
    <div className="App">
      <Clock />
      <CoinPairDisplay/>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import CandleChart from './components/CandleChart';
import { useWebSocket } from './hooks/useWebSocket';
import './index.css';

const App = () => {
  const [selectedCoin, setSelectedCoin] = useState('ethusdt');
  const [selectedInterval, setSelectedInterval] = useState('1m');
  
  const coins = ['ethusdt', 'bnbusdt', 'dotusdt'];
  const intervals = ['1m', '3m', '5m'];
  
  const candlestickData = useWebSocket(selectedCoin, selectedInterval);

  return (
    <div className="container">
      <h1>Binance Market Data</h1>
      <div>
        <Dropdown
          label="Select Coin:"
          value={selectedCoin}
          options={coins}
          onChange={setSelectedCoin}
        />
        <Dropdown
          label="Select Interval:"
          value={selectedInterval}
          options={intervals}
          onChange={setSelectedInterval}
        />
      </div>
      <div className="chart-container">
        <CandleChart data={candlestickData} />
      </div>
    </div>
  );
};

export default App;

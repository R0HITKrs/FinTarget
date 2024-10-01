import { useEffect, useState } from 'react';
import { saveData, loadData } from '../Utils/localStorageUtils';

const BASE_URL = 'wss://stream.binance.com:9443/ws';
const getWebSocketURL = (symbol, interval) => `${BASE_URL}/${symbol}@kline_${interval}`;

export const useWebSocket = (symbol, interval) => {
  const [candlestickData, setCandlestickData] = useState(() => loadData(symbol, interval));

  useEffect(() => {
    const ws = new WebSocket(getWebSocketURL(symbol, interval));

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.k) {
        const newCandle = message.k; // Candlestick data
        setCandlestickData((prevData) => {
          const updatedData = [...prevData, newCandle];
          saveData(symbol, interval, updatedData);
          return updatedData;
        });
      }
    };

    return () => ws.close();
  }, [symbol, interval]);

  return candlestickData;
};

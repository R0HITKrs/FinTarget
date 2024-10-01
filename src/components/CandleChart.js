import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, TimeScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, TimeScale, BarElement, Title, Tooltip, Legend);

const CandleChart = ({ data }) => {
  const chartData = {
    labels: data.map(candle => new Date(candle.t)),
    datasets: [
      {
        label: 'Candlestick Data',
        data: data.map(candle => candle.c), // Use close price for visualization
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Bar data={chartData} />
  );
};

export default CandleChart;

// DailyRevenueChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';

Chart.register(CategoryScale);

const DailyRevenueChart = () => {
  const data = {
    labels: ['Pondelok', 'Utorok', 'Streda', 'Štvrtok', 'Piatok', 'Sobota', 'Nedeľa'],
    datasets: [
      {
        label: 'Denný obrat',
        data: [265, 279, 422, 557, 666, 522, 714], // Replace with your data
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1
      }
    ]
  };

  return <Bar data={data} />;
};

export default DailyRevenueChart;
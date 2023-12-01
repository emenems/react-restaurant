import React from 'react';
import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';

Chart.register(CategoryScale);

const DailyMenuChart = ({ data, options }) => {
  return (
    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default DailyMenuChart;
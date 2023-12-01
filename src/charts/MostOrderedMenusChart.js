// MostOrderedMenusChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const MostOrderedMenusChart = () => {
  const pieChartColors = ['#7CB342', '#64B5F6', '#FFD54F', '#FF8A65', '#BA68C8'];

  const data = {
    labels: ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4', 'Menu 5'],
    datasets: [
      {
        data: [300, 50, 100, 29, 79], // Replace with your data
        backgroundColor: pieChartColors,
        hoverBackgroundColor: pieChartColors
      }
    ]
  };

  return <Doughnut data={data} />;
};

export default MostOrderedMenusChart;
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import './Menu.css';
import mealsData from './data/menu_daily.json';
import initialMealsData from './data/menu_daily.json';

Chart.register(CategoryScale);

const maxCount = Math.max(...initialMealsData.map(meal => meal.count));

const Menu = () => {
  const [meals, setMeals] = useState(mealsData);

  const handleClick = (index) => {
    // Decrease the count of the clicked meal by 1
    setMeals(meals.map((meal, i) => i === index ? {...meal, count: meal.count - 1} : meal));
  };

  const data = {
    labels: meals.map(meal => meal.name.split(':')[0]),
    datasets: [
      {
        label: 'Count',
        data: meals.map(meal => meal.count),
        backgroundColor: 'rgba(255,255,255,0.4)', // white transparent filling
        borderColor: 'rgba(255,255,255,1)', // white line
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,255,255,0.6)', // white transparent filling on hover
        hoverBorderColor: 'rgba(255,255,255,1)', // white line on hover
      }
    ]
  };
  
  const options = {
    plugins: {
      legend: {
        display: false // turn off the legend
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'white', // this will make the label text white
          font: {
            weight: 'bold' // this will make the label text bold
          }
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false
        },
        max: maxCount
      }
    }
  };

  return (
    <div className="menu-page">
      <h1>Denné menu</h1>
      {meals.map((meal, index) => {
        const [menu, name] = meal.name.split(':');
        return (
          <div key={index} className="menu-item">
            <button onClick={() => handleClick(index)} disabled={meal.count === 0}>
              <strong>{menu}:</strong><br />{name}<br /><em>{meal.count > 0 ? `(Dostupných: ${meal.count})` : '(Nedostupné)'}</em>
            </button>
          </div>
        );
      })}
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Menu;
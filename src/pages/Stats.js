import React from 'react';
import './Stats.css';
import DailyRevenueChart from '../charts/DailyRevenueChart';
import MostOrderedMenusChart from '../charts/MostOrderedMenusChart';

const Stats = () => {
  // These values could be fetched from an API or calculated based on your data
  const todaysRevenue = 714;
  const monthlyRevenue = 13700;
  const ordersCleared = 42;
  const averageOrderPrice = 17;

  return (
    <div className="stats-page">
      <div className="dashboard">
        <div className="metrics">
          <div className="metric">
            <h2>Dnešné príjmy</h2>
            <p>{todaysRevenue} Eur</p>
          </div>
          <div className="metric">
            <h2>Mesačné príjmy</h2>
            <p>{monthlyRevenue} Eur</p>
          </div>
          <div className="metric">
            <h2>Vyriešené objednávky</h2>
            <p>{ordersCleared}</p>
          </div>
          <div className="metric">
            <h2>Priemerná cena objednávky</h2>
            <p>{averageOrderPrice} Eur</p>
          </div>
        </div>
        <div className="charts">
          <div className="chart">
            <DailyRevenueChart />
          </div>
          <div className="chart">
            <MostOrderedMenusChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
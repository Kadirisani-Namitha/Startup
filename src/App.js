import React, { useState } from 'react';
import './App.css';
import KpiCards from './KpiCards';
import RevenueChart from './RevenueChart';
import CustomerGrowthChart from './CustomerGrowthChart';
import ProfitMarginChart from './ProfitMarginChart';  // Import the new chart
import VaccinationChart from './VaccinationChart';    // <-- Import the vaccination chart

function App() {
  const [showChart, setShowChart] = useState(true);

  return (
    <div className="container mt-5" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '20px' }}>
      <h2 className="text-center mb-4">Startup Dashboard</h2>
      <KpiCards />

      <div className="text-center mb-3">
        <button 
          className="btn btn-primary" 
          onClick={() => setShowChart(!showChart)}
        >
          {showChart ? 'Hide' : 'Show'} Revenue Chart
        </button>
      </div>

      {showChart && <RevenueChart />}
      <CustomerGrowthChart />
      <ProfitMarginChart />  {/* Add new chart here */}

      <VaccinationChart />  {/* Add the vaccination chart here */}
    </div>
  );
}

export default App;

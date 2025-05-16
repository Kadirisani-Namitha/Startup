import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProfitMarginChart = () => {
  const [selectedQuarter, setSelectedQuarter] = useState('All');
  const [loading, setLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const allData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Profit Margin (%)',
        data: [25, 35, 40, 50],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        hoverBackgroundColor: 'rgba(54, 162, 235, 0.9)',
      },
    ],
  };

  const filteredData = selectedQuarter === 'All'
    ? allData
    : {
        labels: [selectedQuarter],
        datasets: [
          {
            ...allData.datasets[0],
            data: [allData.datasets[0].data[allData.labels.indexOf(selectedQuarter)]],
          },
        ],
      };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      tooltip: { enabled: true },
      title: { display: true, text: 'Profit Margin by Quarter' },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg shadow-md p-4"
    >
      <label className="block mb-2 font-semibold text-gray-700">
        Filter by Quarter:{' '}
        <select
          value={selectedQuarter}
          onChange={(e) => setSelectedQuarter(e.target.value)}
          className="ml-2 px-3 py-1 border rounded"
        >
          <option value="All">All</option>
          <option value="Q1">Q1</option>
          <option value="Q2">Q2</option>
          <option value="Q3">Q3</option>
          <option value="Q4">Q4</option>
        </select>
      </label>

      {loading ? (
        <div className="text-center py-8">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-blue-500 border-t-transparent"></div>
          <p className="mt-2 text-gray-500">Loading chart...</p>
        </div>
      ) : (
        <Bar data={filteredData} options={options} />
      )}
    </motion.div>
  );
};

export default ProfitMarginChart;

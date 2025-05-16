import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const VaccinationChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse(process.env.PUBLIC_URL + '/data/vaccination.csv', {
      download: true,
      header: true,
      complete: (results) => {
        // You may need to process or convert data types here
        const parsedData = results.data.map(item => ({
          date: item.date,
          vaccinated: Number(item.vaccinated),  // assuming column name is 'vaccinated'
        }));
        setData(parsedData);
      },
      error: (error) => {
        console.error('Error parsing CSV:', error);
      }
    });
  }, []);

  return (
    <div style={{ width: '100%', height: 300, marginTop: 40 }}>
      <h4>Vaccination Data Over Time</h4>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="vaccinated" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VaccinationChart;

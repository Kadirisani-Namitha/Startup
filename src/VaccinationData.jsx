import React, { useEffect, useState } from "react";
import Papa from "papaparse";

const VaccinationData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse("/data/vaccination.csv", {
      header: true,
      download: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  }, []);

  if (!data.length) return <p>Loading data...</p>;

  return (
    <div style={{ marginTop: "40px" }}>
      <h3>Vaccination Data Sample</h3>
      <table border="1" cellPadding="5" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 10).map((row, i) => (
            <tr key={i}>
              {Object.values(row).map((val, idx) => (
                <td key={idx}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VaccinationData;

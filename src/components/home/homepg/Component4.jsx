import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Card } from 'react-bootstrap';
import { CardContent } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Component4 = () => {
  const [dataPoints, setDataPoints] = useState([0, 4, 10, 6]);
  const [years, setYears] = useState(['2019-20', '2020-21', '2021-22']);

  const updateData = () => {
    // Generate random data for the graph
    const newDataPoints = dataPoints.map(() => Math.floor(Math.random() * 12));
    setDataPoints(newDataPoints);
  };

  const data = {
    labels: ['Start', ...years],
    datasets: [
      {
        label: 'Customer Growth (in lac)',
        data: dataPoints,
        fill: true,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <Card className="w-full max-w-2xl">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4 text-center">CUSTOMER GROWTH</h2>
          <p className="text-center mb-4">
            The best way to denote the growth is through the review of the customer data.
          </p>
          <div className="p-4">
            <Line data={data} options={options} />
          </div>
          <div className="flex justify-center mt-4">
            <button onClick={updateData} className="btn btn-primary">
              Randomize Data
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Component4;
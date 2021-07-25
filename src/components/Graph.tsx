import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  calculate_future_value,
  generate_years_label,
} from '../utils/functions/index';

const Graph = () => {
  const [chartData, setChartData] = useState<any>();

  const baseInformation = {
    currentValue: 1000,
    annualDeposits: 1000,
    interestRate: 0.03,
    years: 20,
  };

  useEffect(() => {
    setChartData({
      labels: generate_years_label(baseInformation.years),
      datasets: [
        {
          label: 'Portfolio Value',
          data: calculate_future_value(baseInformation),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
        {
          label: 'Portfolio Value2',
          data: calculate_future_value({
            ...baseInformation,
            interestRate: 0.06,
            years: 10,
          }),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Line
      data={chartData}
      options={{
        responsive: true,
        title: { text: 'Overall Portfolio Value', display: true },
      }}
    />
  );
};

export default Graph;

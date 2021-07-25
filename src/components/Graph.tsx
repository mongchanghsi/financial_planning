import React, { useContext, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  calculate_future_value,
  generate_years_label,
} from '../utils/functions/index';
import { AppContext } from '../context';

const baseBackgroundColor = [
  'rgba(255, 99, 132, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(255, 206, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(255, 159, 64, 0.2)',
];

const baseBorderColor = [
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
];

const Graph = () => {
  const { appState } = useContext(AppContext);
  const [chartData, setChartData] = useState<any>();

  const baseInformation = {
    currentValue: 1000,
    annualDeposits: 1000,
    interestRate: 0.03,
    years: 20,
  };

  useEffect(() => {
    const processData = appState.map((entry: any) => {
      return {
        label: entry.name,
        data: calculate_future_value({
          currentValue: parseInt(entry.currentValue),
          annualDeposits: parseInt(entry.annualDeposits),
          interestRate: parseInt(entry.interestRate),
          years: parseInt(entry.years),
        }),
        backgroundColor: baseBackgroundColor,
        borderColor: baseBorderColor,
        borderWidth: 1,
      };
    });

    setChartData({
      labels: generate_years_label(baseInformation.years),
      datasets: processData,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appState]);

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

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);




export function BarChart({ data }: { data: ChartData<'bar'> }) {
  return <Bar options={{
    responsive: true,


    plugins: {
      title: {
        display: true,
        text: 'Followers by platform',
      },
    },
  }} data={data} />;
}

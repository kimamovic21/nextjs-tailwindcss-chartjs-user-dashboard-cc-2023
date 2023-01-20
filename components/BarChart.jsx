import React, { useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';

ChartJS.register (
    CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
);

const BarChart = () => {

  const [chartData, setChartData] = useState ({datasets: []});
  const [chartOptions, setChartOptions] = useState({});

  useEffect( () => {
    setChartData({
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Sales $',
                data: [6754, 12359, 10435, 13834, 14536, 15676, 13456],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    })
    setChartOptions({
        plugins: {
            legend: {
                position: 'top',
            },
            title : {
                display: true,
                text: 'DailyRevenue',
            },
        },
        maintainAspectRatio: false,
        responsive: true,
    })
  }, []);

  return (
    <>
        <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>

            <Bar data={chartData} options={chartOptions}/>

        </div>
    </>
  );
};

export default BarChart;



// 1. importujemo Chart elemente
// 2. dodajemo ChartJS.register
// 3. dodajemo i stiliziramo div element
// 4. unutar tog div elementa dodajemo Bar.jsx komponentu
// 5. Bar komponentu dodajemo atribute
// 6. dodajemo useState React hook
// 7. dodajemo useEffect React hook


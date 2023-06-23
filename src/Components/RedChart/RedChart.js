import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';

const RedChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef && chartRef.current) {
            const chartInstance = chartRef.current.chartInstance;
            if (chartInstance) {
                chartInstance.destroy();
            }
        }
    }, []);

    return (
        <Bar
            ref={chartRef}
            data={{
                labels: ['red', 'blue', 'purple', 'yellow', 'black'],
                datasets: [{
                    label: '# of votes',
                    data: [12, 19, 3, 5, 2],
                }]
            }}
            height={202}
            width={308}
            options={{
                maintainAspectRatio: false,
            }}
        />
    );
};

export default RedChart;

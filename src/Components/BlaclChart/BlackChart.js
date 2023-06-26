import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import './BlackChart.css'

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BlackChart = () => {
    const options = {
        backgroundColor: "transparent",
        theme: "dark2",
        axisY: {
            labelAngle: 0,
            interval: 260,
            gridDashType: "dash",
            tickColor: "transparent",
        },
        axisX: {
            labelAngle: -30,
            tickColor: "transparent",
            lineDashType: 'dash'
        },
        data: [{
            color: "#fff",
            type: "line",
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: [
                { label: 'Apr', y: 50 },
                { label: 'May', y: 40 },
                { label: 'Jun', y: 300 },
                { label: 'Jul', y: 220 },
                { label: 'Aug', y: 500 },
                { label: 'Sep', y: 250 },
                { label: 'Oct', y: 400 },
                { label: 'Nov', y: 230 },
                { label: 'Dec', y: 500 },
            ]
        }]
    };

    return (
        <div>
            <CanvasJSChart options={options} containerProps={{ height: '175px' }} />
        </div>
    );
};

export default BlackChart;

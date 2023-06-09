import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import './RedChart.css'

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const RedChart = () => {
    const options = {
        backgroundColor: "transparent",
        theme: "dark2",
        axisY:{        
            interval: 20,
            gridDashType: "dash",
            tickColor: "transparent",
          },
        axisX:{
            tickColor: "transparent",
            lineDashType: 'dash'
        },
        data: [{
            color: "#fff",
            type: "column",
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: [
                { label: 'M', y: 50 },
                { label: 'T', y: 20 },
                { label: 'W', y: 10 },
                { label: 'T', y: 22 },
                { label: 'F', y: 50 },
                { label: 'S', y: 10 },
                { label: 'S', y: 40 },
            ]
        }]
    };

    return (
        <div>
            <CanvasJSChart options={options} containerProps={{ height: '175px' }} />
        </div>
    );
};

export default RedChart;

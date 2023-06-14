import React from 'react'
import './Chart.css'
import Clock2 from '../../assets/img/svgs/clock2.svg'
import { Chart } from 'chart.js'

const data = [
    { date: 'M' , count: 50},
    { date: 'T' , count: 20},
    { date: 'W' , count: 10},
    { date: 'T' , count: 22},
    { date: 'F' , count: 50},
    { date: 'S' , count: 10},
    { date: 'S' , count: 40},
]

const Chart = () => {
    return (
        <div className="row mt-4">
            <div className="col-lg-4 col-md-6 mt-4 mb-4">
                <div className="card z-index-2 ">
                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                        <div className="bg-gradient-primary shadow-primary border-radius py-3 pe-1">
                            <div className="chart">
                                <canvas id="chart-line" className="chart-canvas" height="170"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h6 className="mb-0 ">Website Views</h6>
                        <p className="text-sm ">Last Campaign Performance</p>
                        <hr className="dark horizontal" />
                        <div className="d-flex ">
                            <img src={Clock2} className="chart-logo" />
                            <p className="mb-0 text-sm"> campaign sent 2 days ago </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 mb-4">
                <div className="card z-index-2  ">
                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                        <div className="bg-gradient-success shadow-success border-radius py-3 pe-1">
                            <div className="chart">
                                <canvas id="chart-line" className="chart-canvas" height="170"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h6 className="mb-0 "> Daily Sales </h6>
                        <p className="text-sm "> (<span className="font-weight-bolder">+15%</span>) increase in today sales. </p>
                        <hr className="dark horizontal" />
                        <div className="d-flex ">
                            <img src={Clock2} className="chart-logo" />
                            <p className="mb-0 text-sm"> updated 4 min ago </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 mt-4 mb-3">
                <div className="card z-index-2 ">
                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                        <div className="bg-gradient-dark shadow-dark border-radius py-3 pe-1">
                            <div className="chart">
                                <canvas id="chart-line-tasks" className="chart-canvas" height="170"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h6 className="mb-0 ">Completed Tasks</h6>
                        <p className="text-sm ">Last Campaign Performance</p>
                        <hr className="dark horizontal" />
                        <div className="d-flex ">
                            <img src={Clock2} className="chart-logo" />
                            <p className="mb-0 text-sm">just updated</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chart

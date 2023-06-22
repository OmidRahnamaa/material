import React from 'react'
import Navbar from '../Navbar/Navbar'
import Card from '../Card/Card'
import Chart from '../Chart/Chart'
import SideCard from '../SideCard/SideCard'
import MainCard from '../MainCard/MainCard'
import './Main.css'
import Footer from '../Footer/Footer'


const Main = () => {
    return (
        <main className="main-content col-lg-10 side-space position-relative max-height-vh-100 h-100 border-radius-lg ">
            <Navbar />
            <div className="container-fluid py-4">
                <Card />
                <Chart />
                <div className="row mb-4">
                    <MainCard />
                    <SideCard />
                </div>
                <Footer />
            </div>
        </main>
    )
}

export default Main

import React from 'react'
import { Link } from 'react-router-dom'
import Authors from '../../Components/Authors/Authors'
import Projects from '../../Components/Projects/Projects'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Footer from '../../Components/Footer/Footer'

const Table = () => {
    return (
        <div className='back-stable d-flex'>
            <Sidebar />
            <main className="main-content col-lg-10 side-space position-relative max-height-vh-100 h-100 border-radius-lg ">
                <Navbar />
                <div className="container-fluid side-space py-4">
                    <Authors />
                    <Projects />
                    <Footer />
                </div>
            </main>
        </div>
    )
}

export default Table

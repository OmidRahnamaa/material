import React from 'react'
import BillInfo from '../../Components/BillInfo/BillInfo'
import CreditCard from '../../Components/CreditCard/CreditCard'
import Footer from '../../Components/Footer/Footer'
import Invoices from '../../Components/Invoices/Invoices'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Tran from '../../Components/Tran/Tran'

const Billing = () => {
    return (
        <div className='back-stable d-flex'>
            <Sidebar />
            <main className="main-content col-lg-10 side-space position-relative max-height-vh-100 h-100 border-radius-lg ">
                <Navbar />
                <div className="container-fluid side-space py-4">
                    <div className="row">
                        <CreditCard />
                        <Invoices />
                    </div>
                    <div className="row">
                        <BillInfo />
                        <Tran />
                    </div>
                    <Footer />
                </div>
            </main>
        </div>
    )
}

export default Billing

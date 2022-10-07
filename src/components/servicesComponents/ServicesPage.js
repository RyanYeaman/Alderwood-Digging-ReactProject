import React from 'react'
import ServicesHeader from './ServicesHeader'
import MainServices from './MainServices'
import Footer from '../homeComponents/Footer'

const ServicesPage = () => {
  return (
    <div id="services-page">
        <ServicesHeader />
        <MainServices />
        <Footer />
    </div>
  )
}

export default ServicesPage
import React from 'react'
import Banner from '../banner/Banner'
import Navbar from '../navbar/Navbar'
import Content from '../content/Content'
import Protect from '../protect/Protect'
import Food from '../food/Food'
import Model from '../model/Model'
import Footer from '../footer/Footer'

function Home() {
  return (
    <div>
        <Banner />
        <Navbar />
        <Content />
        <Protect />
        <Food />
        <Model />
        <Footer />
    </div>
  )
}

export default Home
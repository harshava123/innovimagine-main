import React from 'react'
import Routers from '../routers/Routers'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import ScrollToTop from '../ScrollToTop'

function Layout() {
  return (
    <Router>
        <ScrollToTop />
        <Header/>
        <Routers/>
        <Footer/>
    </Router>
  )
}

export default Layout

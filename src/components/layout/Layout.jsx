import React from 'react'
import Routers from '../routers/Routers'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import ScrollToTop from '../ScrollToTop'
import CustomCursor from '../CustomCursor'

function Layout() {
  return (
    <Router>
        <>
          <CustomCursor />
          <ScrollToTop />
          <Header />
          <Routers />
          <Footer />
        </>
    </Router>
  )
}

export default Layout

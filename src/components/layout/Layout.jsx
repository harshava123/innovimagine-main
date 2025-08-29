import React, { useEffect } from 'react'
import Routers from '../routers/Routers'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import ScrollToTop from '../ScrollToTop'

// Component to track route changes
const RouteTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Track page view when route changes
    if (window.va) {
      window.va.track('page_view', {
        url: window.location.href,
        path: location.pathname
      });
      console.log('Route change tracked:', location.pathname);
    }
  }, [location]);
  
  return null;
};

function Layout() {
  return (
    <Router>
        <ScrollToTop />
        <RouteTracker />
        <Header/>
        <Routers/>
        <Footer/>
    </Router>
  )
}

export default Layout

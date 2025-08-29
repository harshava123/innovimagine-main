import React, { useEffect } from 'react'
import Layout from './components/layout/Layout'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
function App() {
  useEffect(() => {
    console.log('Analytics component mounted');
    // Check if analytics is working
    if (typeof window !== 'undefined') {
      console.log('Window object available');
    }
  }, []);

  return (
    <>
      <Layout/>
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App

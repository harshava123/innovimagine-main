import React from 'react'
import Layout from './components/layout/Layout'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
function App() {
  return (
    <>
      <Layout/>
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App

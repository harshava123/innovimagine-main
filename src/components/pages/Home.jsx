import React from 'react'
import Main from '../comp/Main'
import Byd from '../comp/Byd'
import Features from '../comp/Features'
import ServicesSection from '../comp/ServicesSection'
import Process from '../comp/Process'
import Testimonials from '../comp/Testimonials'
import Pricing from '../comp/Pricing'
import Faq from '../comp/Faq'

const Home = () => (
  <>
    <Main />
    <Byd />
    <Features />
    <ServicesSection />
    <Process />
    <Testimonials />
    <Pricing />
    <Faq/>
    {/* Features, Benefits, Services, etc. will be added below */}
  </>
)

export default Home

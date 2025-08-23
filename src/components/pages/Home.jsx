import React from 'react'
import SEO from '../seo/SEO'
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
    <SEO 
      title="Grahmind - Leading Web Development, Mobile Apps & AI Solutions Company"
      description="Grahmind delivers cutting-edge web development, mobile app development, AI solutions, UI/UX design, digital marketing, and software support services. Transform your business with our expert team."
      keywords="Grahmind, Grahmind Technologies, web development company, mobile app development, AI solutions, UI/UX design, digital marketing, software support, full stack development, web applications, mobile applications, artificial intelligence, machine learning, custom software development, e-commerce development, responsive web design, progressive web apps, React development, Node.js development, Python development, cloud solutions, digital transformation"
      canonical="https://grahmind.com"
      pageType="website"
      ogImage="https://grahmind.com/og-image.png"
    />
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

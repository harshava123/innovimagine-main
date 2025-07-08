import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import WebAppDevelopment from '../pages/WebAppDevelopment'
import MobileAppDevelopment from '../pages/MobileAppDevelopment'
import FullStackDevelopment from '../pages/FullStackDevelopment'
import AIToolApplications from '../pages/AIToolApplications'
import UIDesign from '../pages/UIDesign'
import DigitalMarketing from '../pages/DigitalMarketing'
import SoftwareSupport from '../pages/SoftwareSupport'
import About from '../pages/About'

function Routers() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services/web-app-development" element={<WebAppDevelopment/>}/>
        <Route path="/services/mobile-app-development" element={<MobileAppDevelopment/>}/>
        <Route path="/services/full-stack-development" element={<FullStackDevelopment/>}/>
        <Route path="/services/ai-tool-applications" element={<AIToolApplications/>}/>
        <Route path="/services/ui-ux-design" element={<UIDesign/>}/>
        <Route path="/services/digital-marketing" element={<DigitalMarketing/>}/>
        <Route path="/services/software-support" element={<SoftwareSupport/>}/>
    </Routes>
  )
}

export default Routers

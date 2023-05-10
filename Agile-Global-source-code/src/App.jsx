import React from "react"
import {Router , Route , Routes} from 'react-router-dom'
// importing components and pages
import Navbar from "./components/common/Navbar"
import Home from './components/pages/Home'
import Contact from "./components/pages/Contact"
import Partner from "./components/pages/Partner"
import Career from "./components/pages/Career"
import EmergingTechnologies from './components/pages/solution/EmergingTechnologies'
import VirtutalAndAgumented from "./components/pages/solution/VirtutalAndAgumented"
import CustomApplication from "./components/pages/solution/CustomApplication"
import EnterpriseApplication from './components/pages/solution/EnterpriseApplication'
import BusinessIntelligence from "./components/pages/solution/BusinessIntelligence"
import Infrastructure from "./components/pages/solution/Infrastructure"
import MobileBusiness from "./components/pages/solution/MobileBusiness"
import UtilitySolutions from "./components/pages/solution/UtilitySolutions"
import Government from "./components/pages/solution/Government"
import ProfessionalConsultingg from "./components/pages/solution/ProfessionalConsultingg"
import StrategicOutsourcing from "./components/pages/solution/StrategicOutsourcing"
import CoManagedServices from "./components/pages/solution/CoManagedServices"

// home menu pages
import Driver from "./components/pages/home/Driver"
import Services from "./components/pages/home/Services"
import About from "./components/pages/home/About"

// career open job
import CareerOperJob from "./components/pages/CareerOperJob"


import Footer from './components/common/Footer'
function App() {
  

  return (
   <>

   <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/partner" element={<Partner></Partner>} />
        <Route path="/career" element={<Career></Career>} />
        <Route path="/emerging-tehcnologies" element={<EmergingTechnologies></EmergingTechnologies>} />
        <Route path="/virtual-and-agumented-reality" element={<VirtutalAndAgumented></VirtutalAndAgumented>} />
        <Route path="/custom-application" element={<CustomApplication></CustomApplication>} />
        <Route path="/enterprise-application" element={<EnterpriseApplication></EnterpriseApplication>} />
        <Route path="/business-intelligence" element={<BusinessIntelligence></BusinessIntelligence>} />
        <Route path="/infrastructure" element={<Infrastructure></Infrastructure>} />
        <Route path="/mobile-business" element={<MobileBusiness></MobileBusiness>} />
        <Route path="/utility-solutions" element={<UtilitySolutions></UtilitySolutions>} />
        <Route path="/government" element={<Government></Government>} />
        <Route path="/professional-consulting" element={<ProfessionalConsultingg></ProfessionalConsultingg>} />
        <Route path="/strategic-outsourcing" element={<StrategicOutsourcing></StrategicOutsourcing>} />
        <Route path="/co-managed-services" element={<CoManagedServices></CoManagedServices>} />

        {/* home menu  */}
        <Route path="/our-driver" element={<Driver></Driver>} />
        <Route path="/services" element={<Services></Services>} />
        <Route path="/about" element={<About></About>} />
        
  {/* career open job */}
  <Route path="/career-open-job" element={<CareerOperJob></CareerOperJob>} />


        <Route path="*" element={<Error />} />
    </Routes>
    <Footer></Footer>
   </>
  )
}

export default App

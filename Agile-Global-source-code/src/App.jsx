import React from "react";
import { Router, Route, Routes } from "react-router-dom";
// importing components and pages
import Home from "./components/pages/Home";
import Partner from "./components/pages/Partner";
import Career from "./components/pages/Career/Career";
import EmergingTechnologies from "./components/pages/solution/EmergingTechnologies/EmergingTechnologies";
import VirtutalAndAgumented from "./components/pages/solution/VirtualAndAgumented/VirtutalAndAgumented";
import CustomApplication from "./components/pages/solution/CustomApplication/CustomApplication";
import EnterpriseApplication from "./components/pages/solution/EnterprizesApplication/EnterpriseApplication";
import MobileBusiness from "./components/pages/solution/MobileBussiness/MobileBusiness";
import UtilitySolutions from "./components/pages/solution/UtilitySolutions/UtilitySolutions";
import Government from "./components/pages/solution/Government/Government";
import ProfessionalConsultingg from "./components/pages/solution/ProfessionalConsulting/ProfessionalConsultingg";
import StrategicOutsourcing from "./components/pages/solution/StrategicOutsourcing/StrategicOutsourcing";
import CoManagedServices from "./components/pages/solution/CoManagedService/CoManagedServices";
import BusinessIntelligence from "./components/pages/solution/BusinessIntelligence/BusinessIntelligence";

// home menu pages
import Driver from "./components/pages/home/Driver";
import Services from "./components/pages/home/Services/Services";
import About from "./components/pages/home/About/About";

// career open job
import CareerOperJob from "./components/pages/CareerOperJob";
import Footer from "./components/common/Footer/Footer";
import Navbar from "./components/common/Navbar/Navbar";
import Infrastructure from "./components/pages/solution/Infrastructure/Infrastructure";
import Contact from "./components/pages/ContactUs/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/career" element={<Career />} />
        <Route
          path="/emerging-tehcnologies"
          element={<EmergingTechnologies />}
        />
        <Route
          path="/virtual-and-agumented-reality"
          element={<VirtutalAndAgumented />}
        />
        <Route path="/custom-application" element={<CustomApplication />} />
        <Route
          path="/enterprise-application"
          element={<EnterpriseApplication />}
        />
        <Route
          path="/business-intelligence"
          element={<BusinessIntelligence />}
        />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/mobile-business" element={<MobileBusiness />} />
        <Route path="/utility-solutions" element={<UtilitySolutions />} />
        <Route path="/government" element={<Government />} />
        <Route
          path="/professional-consulting"
          element={<ProfessionalConsultingg />}
        />
        <Route
          path="/strategic-outsourcing"
          element={<StrategicOutsourcing />}
        />
        <Route path="/co-managed-services" element={<CoManagedServices />} />

        {/* home menu  */}
        <Route path="/our-driver" element={<Driver />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />

        {/* career open job */}
        <Route
          path="/career-open-job"
          element={<CareerOperJob></CareerOperJob>}
        />

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

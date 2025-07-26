import React from 'react'
import Decore from "./assets/Decore.png"
import Ellipse from "./assets/Ellipse_8.png"
import Navbar from './Componets/LandigPage/Navbar'
import HeroSection from './Componets/LandigPage/HeroSection'
import { Route, Routes } from 'react-router-dom'
import ExploreWorldwide from './Componets/LandigPage/ExploreWorldwide'
import Rental from './Componets/LandigPage/Rental'
import Community from './Componets/LandigPage/Community'
import Faq from './Componets/LandigPage/Faq'
import DoYouHave from './Componets/LandigPage/DoYouHave'
import TheSamBlog from './Componets/LandigPage/TheSamBlog'
import Subscribe from './Componets/LandigPage/Subscribe'
import Footer from './Componets/LandigPage/Footer'
function App() {
  return (
    <>
      <header className=" relative " >

        {/* Decore image  */}
        <img src={Decore} alt="Decorebackground" loading="lazy" className=" absolute  right-0 " />


        {/* left side blur  */}
        <img src={Ellipse} alt="Decorebackground" loading="lazy" className=" absolute w-[350px] left-0 " />


        {/* React router dom  */}

        <Routes>

          <Route path="/" element={
            <div>
              <Navbar />
              <HeroSection />
              <ExploreWorldwide />
              <Rental />
              <Community />
              <Faq />
              <DoYouHave />
              <TheSamBlog />
              <Subscribe />
              <Footer />
            </div>

          } />

        </Routes>





      </header>



    </>
  )
}

export default App

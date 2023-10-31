import { BrowserRouter } from "react-router-dom";

import {About, Contact, Footer, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from "./components";

const App = () => {
  return (
     <BrowserRouter >
       <div className="relative z-0 bg-primary">

          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar/>
              <Hero/>  
          </div>

          <About/>
          <Experience/>
          <Tech/>
          <Works />
          <Feedbacks/>

          {/* to show the stars  */}
          <div className="relative z-0">
              <Contact/>
               <Footer />
              <StarsCanvas/>
          </div>

       </div>
     </BrowserRouter>
  )
}

export default App

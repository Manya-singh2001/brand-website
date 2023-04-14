import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Support from "./components/Support";
import AllinOne from "./components/AllinOne";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <div >
     <Navbar />
     <Hero />
     <About />
     <Support />
     <AllinOne />
     <Pricing />
     <Footer />
    </div>
  );
}

export default App;

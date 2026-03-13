import React from 'react'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
const App = () => {
  return (
      <>
      <Header/>
      <div>
        <Hero/>
        <Services/>
        <Contact/>
      </div>
      <Footer/>
    </>
  )
}
export default App
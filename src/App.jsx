import React from 'react'
import Header from '../components/header';
import Hero from '../components/Hero';
import Services from '../components/Services';
const App = () => {
  return (
    <>
      {/*Header Goes here*/}
      <Header/>

      <div>
        <Hero/>
        <Services/>
      </div>
    </>
  )
}

export default App
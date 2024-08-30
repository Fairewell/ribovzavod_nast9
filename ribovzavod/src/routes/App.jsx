import React from 'react';
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../index.css'
import { Features, PartnerSlider, Greeting, AboutUs } from '../cmp/main';
import { Header } from '../cmp';

function App() {

  return (
    <>
      <div className='bg-white w-full overflow-hidden transition-all'>
        <div className='flex justify-center items-center'>
          <Header/>
        </div>
        <Greeting/>
        <AboutUs/>
        <Features/>
        <PartnerSlider/>
      </div>
    </>
  )
}

export default App

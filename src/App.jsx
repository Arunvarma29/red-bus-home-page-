import { useState } from 'react'
import './App.css'
import HeaderEnhanced from './components/HeaderEnhanced'
import HeroSectionEnhanced from './components/HeroSectionEnhanced'
import PopularRoutesEnhanced from './components/PopularRoutesEnhanced'
import OffersSection from './components/OffersSection'
import TestimonialsSection from './components/TestimonialsSection'
import FooterEnhanced from './components/FooterEnhanced'

function App() {
  return (
   <>
    <HeaderEnhanced />
    <HeroSectionEnhanced />
    <PopularRoutesEnhanced />
    <OffersSection />
    <TestimonialsSection />
    <FooterEnhanced />
   </>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Hero from './Hero_Sect'
import Services from './Sub-Hero'
import Satisfaction from './Testimonials'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Services />
    <Satisfaction />
  </React.StrictMode>,
)

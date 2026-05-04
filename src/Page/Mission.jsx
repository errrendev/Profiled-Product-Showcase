import React from 'react'
import Nav from '../Component/Nav'
import Footer from './../Component/Footer'
import Hero from '../Component/Mission/Hero'
import About from '../Component/Mission/About'
import Features from '../Component/Mission/features'
import ApiSection from '../Component/Mission/apiSection'
import BuiltOnTheBest from '../Component/Mission/Buildonthebest'
import SecuritySection from '../Component/Mission/securitybar'
import Careers from '../Component/Mission/carrers'

const mission = () => {
  return (
    <div>
        <Nav />
        <main className='flex flex-col gap-16 items-center p-4'>
            <Hero />
            <About />
            <Features />
            <ApiSection />
            <BuiltOnTheBest />
            <SecuritySection />
            <Careers />
        </main>
        <Footer />
    </div>
  )
}

export default mission
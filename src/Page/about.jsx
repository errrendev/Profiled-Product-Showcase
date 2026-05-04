import React from 'react'
import Nav from '../Component/Nav'
import Footer from '../Component/Footer'
import Hero from '../Component/About/hero'
import LeadershipTeam from '../Component/About/LeadershipTeam'
import NewsInsights from '../Component/About/newinsight'
import Subscribe from '../Component/About/Subscribe'
import Timeline from '../Component/About/Timeline'

const about = () => {
  return (
    <div>
    <Nav />
    <main className='flex flex-col gap-16 items-center p-4'>
       <Hero />
       <Timeline />
       <LeadershipTeam />
       <NewsInsights />
       <Subscribe />
    </main>
    <Footer />
</div>
  )
}

export default about
import React from 'react'
import Nav from '../Component/Nav'
import Footer from '../Component/Footer'
import LatestArticles from '../Component/Blog/Article'
import Subscribe from '../Component/About/Subscribe'

const blog = () => {
  return (
    <div>
    <Nav />
    <main className='flex flex-col  2xl:px-25 gap-16 items-center p-4'>
      <LatestArticles />
      <Subscribe />
    </main>
    <Footer />
</div>
  )
}

export default blog
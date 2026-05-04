import React from 'react'
import Nav from '../Component/Nav'
import Footer from '../Component/Footer'
import LatestArticles from '../Component/Blog/Article'
import Subscribe from '../Component/About/Subscribe'
import BlogDetailPage from '../Component/Blog/BlogDetail'

const BlogDetail = () => {
  return (
    <div>
    <Nav />
    <main className='flex flex-col  2xl:px-25 gap-16 items-center p-4'>
      <BlogDetailPage />
      <Subscribe />
    </main>
    <Footer />
</div>
  )
}

export default BlogDetail
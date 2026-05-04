import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import SolutionEnterprice from './Page/SolutionEnterprice';
import Contact from './Page/Contact'
import { RequestDemo } from './Page/RequestDemo';
import Careers from './Page/careers';
import JobDetail from './Page/JobDetail'
import Pricing from './Page/Pricing';
import Mission from './Page/mission';
import About from './Page/About';
import Blog from './Page/Blog';
import BlogDetailPage from './Page/BlogDetail';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/solutions/enterprise" element={<SolutionEnterprice />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/request-demo" element={<RequestDemo />} />
      <Route path="/mission" element={<Mission />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/careers/:jobId" element={<JobDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog  />} />
      <Route path="/blog/:blogId" element={<BlogDetailPage />} />

    </Routes>
  </BrowserRouter>
  )
}

export default App
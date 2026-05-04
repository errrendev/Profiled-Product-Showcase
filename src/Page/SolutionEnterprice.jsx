import React from 'react'
import Nav from '../Component/Nav'
import Footer from '../Component/Footer'
import SolutionEnterprice1 from './../Component/SolutionEnterprice/SolutionEnterprice1'
import SolutionEnterprice2 from '../Component/SolutionEnterprice/SolutionEnterprice2'
import SolutionEnterprice3 from './../Component/SolutionEnterprice/SolutionEnterprice3'
import ROICalculator from '../Component/SolutionEnterprice/RoiCalculator'

const SolutionEnterprice = () => {
  return (
    <div className='bg-[#faf7f5]'>
        <Nav />
            <SolutionEnterprice1 />
            <SolutionEnterprice2 />
            <ROICalculator />
            <SolutionEnterprice3 />
        <Footer />

    </div>
  )
}

export default SolutionEnterprice
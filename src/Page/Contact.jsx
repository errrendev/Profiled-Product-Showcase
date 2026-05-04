import React from 'react'
import Nav from '../Component/Nav'
import Footer from '../Component/Footer'
import Main from '../Component/Contact/main'
import  {Form } from '../Component/Contact/Form'
const Contact = () => {
  return (
    <>
    <Nav />
    <main className='py-25 flex flex-col gap-25'>
        <Main />
        <Form />
    </main>
    <Footer />
    
    </>
  )
}

export default Contact
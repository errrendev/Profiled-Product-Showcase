import React from 'react'
import Nav from '../Component/Nav'
import Footer from '../Component/Footer'
import { Form } from '../Component/RequestDemo/Form'
import Main from '../Component/RequestDemo/main'

export const RequestDemo = () => {
  return (
    <div>
      <Nav />
        <main className='bg-[#fcfaf9] py-25 px-3 flex flex-col items-center'>
          <Main />
          <Form />

          <p className='mt-10'>Put some disclaimer text here if necessary.</p>
        </main>
      <Footer />
    </div>
  )
}

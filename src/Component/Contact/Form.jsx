import React, { useState } from 'react'

export const Form = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        organization: "",
        referral: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("http://localhost:3000/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          if (response.ok) {
            alert("Message sent successfully!");
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              organization: "",
              referral: "",
            });
          } else {
            alert("Failed to send message.");
          }
        } catch (error) {
          console.error(error);
          alert("Error sending message.");
        }
      };


  return (
    <div className=' flex flex-col items-center gap-20 text-center px-3 md:px-7 '>
        <div className='flex flex-col md:flex-row md:max-w-2xl gap-10 px-2'>
            <div className='flex flex-col items-start text-left gap-5'>
                
                <div className='text-xl'>
                    <h5>Support</h5>
                    <h3 className='text-gray-500'>support@profiled.live</h3>
                </div>

                <p className='text-sm text-gray-600'>Need help? Our support team is available 24/7 to assist with any issues.</p>
            </div>


            <div className='flex flex-col items-start text-left gap-5'>
                
                <div className='text-xl'>
                    <h5>Sales</h5>
                    <h3 className='text-gray-500'>sales@profiled.live</h3>
                </div>

                <p className='text-sm text-gray-600'>Interested in Profiled for your business? Reach out to discuss pricing and solutions.</p>
            </div>

        </div>






        <div className="max-w-2xl w-full mx-auto bg-[#f6f4f0] p-6 py-10 text-left rounded-lg shadow-md">
  <h2 className="text-xl text-left mb-4">Send us a message</h2>
  <form onSubmit={handleSubmit} className="space-y-8">
    <div className="flex gap-4">
      <div className="w-1/2">
        <label htmlFor="firstName" className="block mb-1 text-sm text-gray-700 font-medium">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full border border-gray-300 bg-white rounded-md p-2"
          required
        />
      </div>

      <div className="w-1/2">
        <label htmlFor="lastName" className="block mb-1 text-sm text-gray-700 font-medium">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full border border-gray-300  bg-white rounded-md p-2"
          required
        />
      </div>
    </div>

    <div>
      <label htmlFor="email" className="block mb-1 text-sm text-gray-700 font-medium">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border bg-white border-gray-300  rounded-md p-2"
        required
      />
    </div>

    <div>
      <label htmlFor="phone" className="block mb-1 text-sm text-gray-700 font-medium">Phone</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="w-full border bg-white border-gray-300  rounded-md p-2"
      />
    </div>

    <div>
      <label htmlFor="organization" className="block mb-1 text-sm text-gray-700 font-medium">Organization</label>
      <input
        type="text"
        id="organization"
        name="organization"
        value={formData.organization}
        onChange={handleChange}
        className="w-full border bg-white border-gray-300  rounded-md p-2"
      />
    </div>

    <div>
      <label htmlFor="referral" className="block mb-1 text-sm text-gray-700 font-medium">How did you hear about us?</label>
      <select
        id="referral"
        name="referral"
        value={formData.referral}
        onChange={handleChange}
        className="w-full border bg-white border-gray-300  rounded-md p-2"
        required
      >
        <option value="">Select an option</option>
        <option value="friend">Friend</option>
        <option value="social">Social Media</option>
        <option value="search">Search Engine</option>
        <option value="other">Other</option>
      </select>
    </div>

    <button
      type="submit"
      className="w-full bg-black text-white p-3 rounded-md hover:bg-gray-800 transition"
    >
      Send message
    </button>
  </form>
</div>



    </div>
  )
}

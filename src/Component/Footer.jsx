import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black flex flex-col text-white py-20 items-center px-6">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl text-center max-w-xl leading-tight">
        Transforming potential into performance
      </h1>

      {/* Stars + Reviews */}
      <div className="flex flex-wrap justify-center text-gray-500 text-sm mt-5 items-center gap-2">
        <p>G2</p>
        <div className="flex text-lg">
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
        </div>
        <p>620+ Reviews</p>
      </div>

      {/* Testimonial + CTA */}
      <div className="w-full max-w-4xl mt-20 flex flex-col lg:flex-row gap-6">
        {/* Testimonial card */}
        <div className="w-full min-h-[300px] flex flex-col justify-between rounded-md bg-[#212121] p-6">
          <h1 className="text-lg md:text-2xl leading-relaxed">
            “Artifact had everything we needed to build a stunning website in no time.
            The attention to detail in this product is simply remarkable.”
          </h1>
          <div className="flex  gap-3 mt-6">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="https://framerusercontent.com/images/oSJEJBXmKTnVwZZRGOsliVCyY.webp"
              alt="user"
            />
            <div className="text-sm">
              <h3 className="font-medium">John B</h3>
              <p className="text-gray-300">Product Lead</p>
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <div className=" w-full min-h-[300px] flex justify-center items-center bg-orange-500 bg-blend-multiply bg-[url(https://framerusercontent.com/images/Umwe05l5zhsyeIIzcMBfDuzDatU.webp)] rounded-md bg-cover">
          <button className="bg-white text-black text-lg md:text-xl font-medium text-center rounded-full py-3 px-8 hover:bg-gray-200 transition">
            Start Now
          </button>
        </div>
      </div>

      {/* Links section */}
      <div className="w-full  max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-15 mt-20 text-gray-500 text-sm">
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-medium">Product</h3>
          <p>For Startups</p>
          <p>For Enterprise</p>
          <p>Features 1</p>
          <p>Features 2</p>
          <p>Features 3</p>
          <p>Request a demo</p>
          <p>Pricing</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-medium">Company</h3>
          <p>About</p>
          <p>Mission</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-medium">More</h3>
          <p>Customer Stories</p>
          <p>Contact</p>
          <p>Legal</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-medium">Support</h3>
          <p>+614 3029 1827</p>
          <p>hello@website.com</p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex  flex-col sm:flex-row gap-4 sm:gap-0 mt-20 border-t border-gray-600 pt-6 w-full max-w-4xl items-center justify-between">
        <div className="flex flex-col sm:flex-row items-center sm:gap-5 text-center sm:text-left">
          <h1 className="text-2xl font-semibold">Profiled</h1>
          <p className="text-gray-500 text-sm">
            © Medium Rare powered by Framer
          </p>
        </div>
        <div className="text-gray-500 flex gap-5 text-xl">
          <FaInstagram className="cursor-pointer hover:text-white transition" />
          <FaGithub className="cursor-pointer hover:text-white transition" />
          <FaYoutube className="cursor-pointer hover:text-white transition" />
          <FaXTwitter className="cursor-pointer hover:text-white transition" />
        </div>
      </div>
    </div>
  )
}

export default Footer
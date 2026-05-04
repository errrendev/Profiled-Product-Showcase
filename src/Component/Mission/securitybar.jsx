import React from "react";
import { Shield, Grid, Search, Key } from "lucide-react"; // icons

const SecuritySection = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "End-to-end encryption",
      desc: "Protects sensitive data in transit and at rest, ensuring complete confidentiality.",
    },
    {
      icon: <Grid className="w-6 h-6 text-white" />,
      title: "Zero-trust architecture",
      desc: "Verifies every request, reducing attack surfaces and preventing unauthorized access.",
    },
    {
      icon: <Search className="w-6 h-6 text-white" />,
      title: "Regular security audits",
      desc: "Compliance checks keep our infrastructure resilient against evolving threats.",
    },
    {
      icon: <Key className="w-6 h-6 text-white" />,
      title: "Granular access",
      desc: "Controls allow precise permission management, securing data at every level of the system.",
    },
  ];

  return (
    <section className="bg-white py-12  md:py-20 px-4">
      <div className="max-w-7xl mx-auto rounded-lg flex bg-black flex-col md:flex-row items-center gap-10">
        {/* Left - Text */}
        <div className="bg-black text-white rounded-xl p-6 sm:p-8 lg:p-10 w-full md:w-1/2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">
            Security first, from the ground-up
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {features.map((f, i) => (
              <div key={i} className="flex flex-col space-y-2">
                <div>{f.icon}</div>
                <h3 className="font-semibold text-base md:text-lg">{f.title}</h3>
                <p className="text-gray-400 text-sm md:text-base">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Code Screenshot */}
        <div className="w-full md:w-1/2 rounded-xl-r overflow-hidden shadow-lg">
          <div className="relative w-full h-56 sm:h-72 md:h-96 lg:h-[28rem] rounded-md overflow-hidden">
            <div className="absolute  inset-0 bg-[url('https://framerusercontent.com/images/Umwe05l5zhsyeIIzcMBfDuzDatU.webp')] bg-cover bg-center bg-orange-500 bg-blend-multiply" />
            <img
              className="absolute  inset-0 w-full h-full object-contain p-4 sm:p-6 md:p-10"
              src="https://framerusercontent.com/images/iNmwgjSnVXye9OFW7nUFy9Hs8.png"
              alt="Tech Illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
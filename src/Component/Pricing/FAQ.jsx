import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is Profiled?",
    answer: "Profiled is a platform that helps businesses manage customer data efficiently."
  },
  {
    question: "What is Profiled for?",
    answer: "It is designed to streamline workflows, integrate with tools, and provide insights."
  },
  {
    question: "Is there any free trial available?",
    answer: "Yes, we offer a 14-day free trial with access to all features."
  },
  {
    question: "Will Profiled integrate with my existing tools?",
    answer: "Absolutely! Profiled integrates with major CRMs, analytics, and productivity tools."
  },
  {
    question: "Is Profiled Secure?",
    answer: "Yes, Profiled uses bank-level encryption and industry best practices for security."
  },
  {
    question: "What support options do you offer?",
    answer: "We provide 24/7 email support, live chat, and a knowledge base."
  }
];

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="max-w-7xl py-20 w-full mx-auto px-10">
      <h2 className="text-6xl font-medium mb-20">FAQ</h2>
      <div>
        {faqs.map((faq, index) => {
          const isOpen = openIndexes.includes(index);
          return (
            <div
              key={index}
              className="border-b border-gray-300"
            >
              <button
                className="w-full flex justify-between py-7 items-center text-left text-xl font-medium group"
                onClick={() => toggleFAQ(index)}
              >
                <span
                  className={`transition-transform duration-300 ${
                    !isOpen ? "group-hover:translate-x-4" : ""
                  }`}
                >
                  {faq.question}
                </span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 transition-transform duration-300" />
                ) : (
                  <ChevronDown className="w-5 h-5 transition-transform duration-300" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 pb-6">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import SubmitApplicationForm from '../Component/Careers/SubmitApplicationForm';
import Footer from '../Component/Footer';

const JobDetail = () => {
  const location = useLocation();
  const { job } = location.state || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!job) return <p className="text-center text-gray-500 py-20">No job data available</p>;

  return (
    <>
      <div className="w-full flex items-center flex-col py-20 px-6">
        <div className="max-w-3xl w-full">
          {/* Job Header */}
          <h1 className="text-4xl font-semibold">{job.title}</h1>
          <p className="text-lg text-gray-500 mt-2">{job.type} · {job.location}</p>
          <p className="mt-6 text-xl text-gray-700">{job.description}</p>

          {/* Job Info */}
          <div className="mt-8 space-y-3">
            <div className="flex gap-2">
              <span className="font-medium text-gray-800">Location:</span>
              <span className="text-gray-600">{job.location}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-medium text-gray-800">Employment Type:</span>
              <span className="text-gray-600">{job.employmentType}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-medium text-gray-800">Compensation:</span>
              <span className="text-gray-600">{job.compensation}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-medium text-gray-800">Experience:</span>
              <span className="text-gray-600">{job.experience}</span>
            </div>
          </div>

          {/* Apply button */}
          <button className="bg-black mt-10 text-white rounded-full py-3 px-6 hover:bg-gray-800 transition">
            Apply Now
          </button>

          {/* Sections */}
          {job.sections?.map((section, i) => (
            <div key={i} className="mt-14 flex flex-col gap-4">
              <h2 className="text-xl font-medium">{section.title}</h2>
              {section.content.map((para, j) => (
                <p key={j} className="text-gray-600 leading-relaxed">{para}</p>
              ))}
            </div>
          ))}

          {/* Responsibilities */}
          {job.responsibilities?.length > 0 && (
            <div className="mt-14 flex flex-col gap-5">
              <h2 className="text-xl font-medium">Responsibilities</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                {job.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Requirements */}
          {job.requirements?.length > 0 && (
            <div className="mt-14 flex flex-col gap-5">
              <h2 className="text-xl font-medium">Requirements</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                {job.requirements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Perks */}
          {job.perks?.length > 0 && (
            <div className="mt-14 flex flex-col gap-5">
              <h2 className="text-xl font-medium">Perks</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                {job.perks.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Application Form */}
          <div className="py-20 flex flex-col gap-8">
            <h2 className="text-3xl font-semibold">Submit application</h2>
            <SubmitApplicationForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default JobDetail;
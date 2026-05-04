import React from 'react';
import { useNavigate } from 'react-router-dom';

const OpenRoles = () => {
  // Dynamic job data - easy to add/remove jobs
  const jobListings = [
    {
      id: 1,
      title: "Video Editor",
      type: "Part-time",
      location: "Mumbai HQ /Remote",
      link: "video-editor",
      description: "At Profiled, our technology enables businesses to expand their marketing impact and reach audiences like never imagined.",
      employmentType: "Freelance / Project-Based",
      compensation: "Paid",
      experience: "Portfolio > Degree",
      sections: [
        {
          title: "Shape Our Visual Storytelling",
          content: [
            "As our Video Editor, you'll define how the world sees Profiled's brand and our clients' content. You'll craft compelling visual stories, add polish to AI-generated footage, and ensure our media presence reflects our mission.",
            "With a keen understanding of social-first design and visual storytelling, you'll ensure our content is clean, sharp, and scroll-stopping. From editing Reels to adding motion graphics, you'll take a strategic, data-informed approach to maximize our visual impact."
          ]
        },
        {
          title: "Build and Execute Smart Video Workflows",
          content: [
            "We believe visibility isn't just about having stories—it's about having the right systems. You'll design and implement workflows that streamline our video production, maintain brand consistency, and track content performance efficiently.",
            "Collaboration is key. You'll work closely with the content team to align video edits with business milestones and content initiatives. Your ability to organize, prioritize, and execute will ensure every video counts."
          ]
        }
      ],
      responsibilities: [
        "Edit short-form video content (Reels/Shorts) based on AI-generated footage.",
        "Add high-quality text overlays, subtitles, animations, and transitions.",
        "Maintain visual consistency with brand kits (fonts, palettes, pacing).",
        "Optimize content for Instagram, LinkedIn, and YouTube Shorts.",
        "Collaborate with our content team for quick turnarounds and revisions.",
        "Stay updated with trending visual formats, sounds, and transitions."
      ],
      requirements: [
        "Proven experience editing high-conversion Reels or YouTube Shorts.",
        "Strong understanding of visual storytelling and social-first design.",
        "Ability to use tools like Adobe Premiere Pro, Final Cut Pro, or CapCut Pro.",
        "Excellent eye for layout, typography, and speed-based storytelling.",
        "Confidence in delivering high-quality work on tight deadlines.",
        "Independent, proactive, and outcome-focused mindset."
      ],
      perks: [
        "A flexible, remote-first working style.",
        "Potential ESOPs for the founding team.",
        "Freedom to experiment and try bold, creative outreach.",
        "Opportunity to co-create ad campaigns alongside indie filmmakers.",
        "No closed-door meetings or long reports—just results."
      ]
    },
    {
      id: 2,
      title: "Brand Publicist",
      type: "Part-time",
      location: "Mumbai HQ /Remote",
      link: "brand-publicist",
      description: "At Profiled, our technology enables businesses to expand their marketing impact and reach audiences like never imagined.",
      employmentType: "Part-time (Flexible Hours)",
      compensation: "Paid",
      experience: "Freshers welcome",
      sections: [
        {
          title: "Shape Our Public Image",
          content: [
            "As our Brand Publicist, you'll define how the world sees Profiled. You'll craft compelling story angles, position our founder in the right conversations, and ensure our media presence reflects our mission.",
            "With a keen understanding of journalists, newsletters, podcasts, and creative outlets, you'll ensure our stories reach the right audience at the right time. From editorial planning to campaign execution, you'll take a strategic, data-informed approach to maximize our media impact."
          ]
        },
        {
          title: "Build and Execute Smart Media Workflows",
          content: [
            "We believe visibility isn't just about having stories—it's about having the right systems. You'll design and implement workflows that streamline press outreach, maintain editorial databases, and track coverage efficiently.",
            "Collaboration is key. You'll work closely with the founder and core team to align PR campaigns with business milestones and content initiatives. Your ability to organize, prioritize, and execute will ensure every press opportunity counts."
          ]
        }
      ],
      responsibilities: [
        "Build and maintain a targeted media and editorial list relevant to our brand and audience",
        "Craft compelling story angles and pitch on behalf of Profiled",
        "Land features, mentions, and interviews that build credibility and visibility",
        "Develop press calendars, timelines, and coverage trackers",
        "Identify newsworthy milestones, product launches, or content worth sharing",
        "Manage all press outreach, including warm intros and relationship building"
      ],
      requirements: [
        "Proven experience in media relations, story pitching, and PR campaigns",
        "Strong understanding of startup and creative media landscapes",
        "Ability to build and manage editorial databases and press workflows",
        "Excellent communication and storytelling skills",
        "Confidence in coordinating founder positioning and partnerships",
        "Independent, proactive, and outcome-focused mindset"
      ],
      perks: [
        "Fully flexible, outcome-based working style",
        "Access to Profiled's founder and investor network",
        "Freedom to experiment and try bold, creative outreach",
        "No weekly check-ins or long reports—just results"
      ]
    },
    {
      id: 3,
      title: "Client Servicing Consultant",
      type: "Full-time",
      location: "Mumbai HQ",
      link: "client-servicing-consultant",
      description: "At Profiled, our technology enables businesses to expand their marketing impact and reach audiences like never imagined.",
      employmentType: "Full-time",
      compensation: "Paid (details below)",
      experience: "Freshers and students welcome",
      sections: [
        {
          title: "Shape Our Delivery Engine",
          content: [
            "As our Service Consultant, you'll define how we deliver value to our clients. You'll craft and manage workflows, use our in-house AI agents, and ensure every client relationship is seamless and productive.",
            "With a keen understanding of content creation and digital tools, you'll ensure our deliveries are fast, clear, and on-brand. From client communication to team coordination, you'll take a strategic, data-informed approach to maximize our operational impact."
          ]
        },
        {
          title: "Build and Execute Smart Client Workflows",
          content: [
            "We believe great service isn't just about communication—it's about having the right systems. You'll design and implement workflows that streamline client approvals, maintain content dashboards, and track deliveries efficiently.",
            "Collaboration is key. You'll work closely with the tech and creative teams to align content production with client needs. Your ability to organize, prioritize, and execute will ensure every project counts."
          ]
        }
      ],
      responsibilities: [
        "Act as the main point of contact for 3-5 client accounts.",
        "Write clear prompts and briefs for our in-house AI content tools.",
        "Coordinate with design, video, and tech teams for content delivery.",
        "Run internal review loops and ensure timely client approvals.",
        "Keep dashboards, deliverables, and folders updated & organized.",
        "Spot blockers in delivery and solve proactively.",
        "Report to founders with daily updates and priority escalations."
      ],
      requirements: [
        "Proven experience in client communication, team coordination, and timeline management.",
        "Strong understanding of prompt writing for AI tools and digital workflows.",
        "Ability to build and manage client databases and delivery systems.",
        "Excellent communication and organizational skills.",
        "Confidence in coordinating internal and external stakeholders.",
        "Independent, proactive, and outcome-focused mindset."
      ],
      perks: [
        "A 1-month training period (unpaid, hands-on), followed by a post-training stipend of ₹5,000/month+",
        "Deep training in content, systems, and AI.",
        "Access to Profiled's founder and investor network.",
        "Fast-paced, startup-style exposure and potential for ESOPS as a founding member.",
        "Freedom to experiment and try bold, creative solutions.",
        "No weekly check-ins or long reports—just results."
      ]
    },
    {
      id: 4,
      title: "Backend Developer Internship",
      type: "Part-time",
      location: "Mumbai HQ / Remote",
      link: "backend-developer-internship",
      description: "At Profiled, our technology enables businesses to expand their marketing impact and reach audiences like never imagined.",
      employmentType: "Part-Time (Project-Based, Freelance-Friendly)",
      compensation: "Paid",
      experience: "Portfolio > Degree",
      sections: [
        {
          title: "Shape Our Technology Stack",
          content: [
            "As our Backend Developer, you'll define how our technology works. You'll craft and architect scalable systems, manage cloud infrastructure, and ensure our platforms are robust and efficient.",
            "With a keen understanding of system design and serverless architecture, you'll ensure our tech stack is ready for growth. From API development to AI/ML integration, you'll take a strategic, data-informed approach to maximize our product impact."
          ]
        },
        {
          title: "Build and Execute Smart Systems",
          content: [
            "We believe visibility isn't just about having stories—it's about having the right systems. You'll design and implement workflows that streamline our operations, maintain databases, and ensure our APIs are scalable and secure.",
            "Collaboration is key. You'll work closely with the founders and product team to align engineering sprints with business milestones and new features. Your ability to architect, prioritize, and execute will ensure every line of code counts."
          ]
        }
      ],
      responsibilities: [
        "Design and architect scalable backend systems and databases.",
        "Develop, test, and deploy robust APIs (REST & GraphQL) for our web and mobile clients.",
        "Manage cloud infrastructure (AWS/GCP) and serverless functions to ensure high availability.",
        "Build and ship features in focused, project-based sprints.",
        "Ensure code quality, performance, and security across the stack.",
        "Integrate and manage third-party services and AI/ML models."
      ],
      requirements: [
        "Proven experience in system design, API development, and database management.",
        "Strong understanding of Python/Node.js, serverless architecture, and cloud infrastructure.",
        "Ability to build and manage backend systems and cloud workflows.",
        "Excellent problem-solving skills and a strong focus on quality.",
        "Confidence in architecting and shipping features independently.",
        "Independent, proactive, and outcome-focused mindset."
      ],
      perks: [
        "Experience-based opportunity with the potential for ESOPs.",
        "Direct access to Profiled's founders and tech stack.",
        "Freedom to experiment and try bold, creative solutions.",
        "No weekly check-ins or long reports—just results."
      ]
    }
  ];


  const navigate = useNavigate();
  const handleJobClick = (job) => {
    navigate(`/careers/${job.link}`, { state: { job } });
  };

  const handleGetInTouch = () => {
    // Handle contact form or email redirect
    alert("Redirecting to contact form or email");
    // In real app: window.location.href = "mailto:careers@artifact.com" or open contact modal
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl  text-black mb-2">
            Open roles
          </h1>
        </div>

        {/* Job Listings */}
        <div className="space-y-0">
          {jobListings.map((job, index) => (
            <div key={job.id}>
              <div 
                onClick={() => handleJobClick(job)}
                className="group cursor-pointer py-6 sm:py-8 flex flex-col sm:flex-row sm:justify-between sm:items-center hover:bg-white/50 transition-all duration-300  rounded-lg"
              >
                {/* Job Title */}
                <div className="mb-2 sm:mb-0 group-hover:translate-x-4 transition-transform duration-300 ease-out">
                  <h3 className="text-lg font-medium sm:text-xl  text-black group-hover:text-gray-700 transition-colors duration-300">
                    {job.title}
                  </h3>
                </div>

                {/* Job Details */}
                <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-6 text-gray-500">
                  <span className="text-sm sm:text-base ">
                    {job.type}
                  </span>
                  <span className="text-sm sm:text-base">
                    {job.location}
                  </span>
                </div>
              </div>
              
              {/* Divider line - hidden after last item */}
              {index < jobListings.length && (
                <div className="border-b border-gray-200 "></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 sm:mt-20">
          <div className="mb-8">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md">
              Didn't see your dream role? No matter, reach out to our team with your resume.
            </p>
          </div>

          <button 
            onClick={handleGetInTouch}
            className="bg-white border border-gray-300 text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 hover:shadow-sm"
          >
            Get in touch
          </button>
        </div>

      </div>
    </div>
  );
};

export default OpenRoles;

import { FaLinkedin, FaXTwitter } from "react-icons/fa6"



const teamMembers = [
  {
    name: "Dana Horowitz",
    role: "Chief Executive Officer",
    description:
      "Dana brings deep expertise in scaling operations, ensuring Artifact grows efficiently while staying customer-focused.",
    image: "https://placehold.co/400x400?text=Dana", // replace with actual image
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Caleb Piero",
    role: "Chief Operating Officer",
    description:
      "Caleb’s strategic vision and passion for automation make him the driving force behind Artifact’s innovation and growth.",
    image: "https://placehold.co/400x400?text=Caleb",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Jordan Lee",
    role: "Chief Technology Officer",
    description:
      "Jordan’s expertise in software architecture ensures Artifact remains fast, reliable, and built for scale.",
    image: "https://placehold.co/400x400?text=Jordan",
    linkedin: "#",
    twitter: "#",
  },
]

export default function LeadershipTeam() {
  return (
    <section className="py-12 max-w-7xl">
      <h2 className="text-3xl md:text-5xl  text-left mb-10">Leadership Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
              <p className="text-gray-600 text-sm mt-3">{member.description}</p>
              <div className="flex gap-4 mt-5">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 text-xl"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black text-xl"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
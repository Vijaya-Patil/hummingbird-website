import Image from "next/image";

const leadership = [
  {
    name: "Mahesh K",
    role: "President & CEO",
    image: "/images/team/mahesh-k.jpg",
  },
  {
    name: "Suresh Katari",
    role: "Head of Software Engineering (USA)",
    image: "/images/team/suresh-katari.jpg",
  },
  {
    name: "Dinesh Kademane",
    role: "Head of Systems Engineering – Aero (USA)",
    image: "/images/team/dinesh-kademane.jpg",
  },
  {
    name: "Sameer Vaidya",
    role: "Head of Mechanical Engineering (USA)",
    image: "/images/team/sameer-vaidya.jpg",
  },
  {
    name: "Anand Pandey",
    role: "Head of FPGA (USA)",
    image: "/images/team/anand-pandey.jpg",
  },
  {
    name: "Gururajan P",
    role: "Delivery Manager – SW Aero & Rail (India)",
    image: "/images/team/gururajan-p.jpg",
  },
  {
    name: "Balaram V",
    role: "Delivery Manager – SW Aero (US & India)",
    image: "/images/team/balaram-v.jpg",
  },
];

export default function LeadershipTeam() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* SECTION HEADER */}
        <div className="max-w-2xl mb-14">
          <h3 className="text-sm font-semibold tracking-widest text-[#F47C20] uppercase">
            Meet Our Team
          </h3>
          <h2 className="text-3xl font-bold text-gray-900 mt-3">
            Leadership & Management
          </h2>
          <p className="mt-4 text-gray-600">
            Our leadership team brings deep domain expertise and decades of
            experience in delivering safety-critical engineering solutions.
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {leadership.map((person) => (
            <div
              key={person.name}
              className="group border border-gray-200 p-6 text-center hover:shadow-xl transition"
            >
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-[#F47C20]">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h4 className="mt-6 text-lg font-semibold text-gray-900">
                {person.name}
              </h4>
              <p className="mt-2 text-sm text-gray-600">
                {person.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

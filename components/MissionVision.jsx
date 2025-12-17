export default function MissionVision() {
  return (
    <section className="py-20 bg-[#F8F9FB]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* MISSION */}
          <div className="bg-white p-10 border border-gray-200 shadow-sm">
            <h3 className="text-sm font-semibold tracking-widest text-[#F47C20] uppercase">
              Our Mission
            </h3>
            <h2 className="text-2xl font-bold text-gray-900 mt-3">
              Engineering Excellence with Integrity
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              To deliver reliable, safety-critical, and innovative engineering
              solutions that empower our customers to build high-quality
              products while meeting global standards and regulatory compliance.
            </p>
          </div>

          {/* VISION */}
          <div className="bg-white p-10 border border-gray-200 shadow-sm">
            <h3 className="text-sm font-semibold tracking-widest text-[#F47C20] uppercase">
              Our Vision
            </h3>
            <h2 className="text-2xl font-bold text-gray-900 mt-3">
              A Global Partner for Advanced Engineering
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              To be recognized globally as a trusted engineering partner for
              aerospace, automotive, industrial, and medical domains by
              delivering technology-driven, future-ready solutions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

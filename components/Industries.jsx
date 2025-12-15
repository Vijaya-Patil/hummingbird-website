export default function Industries() {
  const industries = [
    "Industrial IoT",
    "Automotive & Mobility",
    "Healthcare Devices",
    "Smart Infrastructure",
    "Defence & Aerospace",
    "Energy & Utilities",
  ];

  return (
    <section id="industries" className="bg-light text-primary px-8 py-20">
      <h2 className="text-3xl font-bold text-center">
        Industries We Serve
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {industries.map((ind, i) => (
          <div key={i} className="bg-white p-6 shadow text-center">
            {ind}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Process() {
  const steps = [
    "Requirement Analysis",
    "Architecture & Design",
    "Development",
    "Testing & Validation",
    "Deployment & Support",
  ];

  return (
    <section id="process" className="px-8 py-20">
      

      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="border border-accent px-6 py-4 min-w-[220px] text-center"
          >
            <p className="font-semibold">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

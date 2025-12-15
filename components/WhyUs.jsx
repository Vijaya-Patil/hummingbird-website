export default function WhyUs() {
  const points = [
    "End-to-end product engineering",
    "Strong embedded & IoT expertise",
    "Agile and scalable engagement",
    "Quality-driven development",
    "Faster time-to-market",
  ];

  return (
    <section className="px-8 py-20">
      <h2 className="text-3xl font-bold text-center">
        Why Hummingbird Tek Systems
      </h2>

      <ul className="max-w-3xl mx-auto mt-10 space-y-3">
        {points.map((p, i) => (
          <li key={i} className="border-l-4 border-accent pl-4">
            {p}
          </li>
        ))}
      </ul>
    </section>
  );
}

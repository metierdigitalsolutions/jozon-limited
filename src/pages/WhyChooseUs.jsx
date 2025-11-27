const reasons = [
  "Trusted Quality: Our products meet the highest standards.",
  "Diverse Product Range: From beverages to soaps, plastics, and oils.",
  "Reliable Supply: On-time delivery and consistent availability.",
  "Customer Focused: Dedicated support for businesses and individuals.",
  "Innovation: Continuously improving and expanding our offerings."
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-6 text-center max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Why Choose Us?</h2>
      <ul className="space-y-4 text-gray-700">
        {reasons.map((reason, i) => (
          <li key={i} className="text-lg">{reason}</li>
        ))}
      </ul>
    </section>
  );
}

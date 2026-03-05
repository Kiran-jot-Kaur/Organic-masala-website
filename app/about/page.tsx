import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about our heritage, sourcing, and quality-first masala making process.'
};

export default function AboutPage() {
  return (
    <section className="section-padding">
      <div className="container-wide grid gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold">Our Story</h1>
          <p className="mt-4 text-earth-700">
            Shuddh Masala Co. was founded to preserve authentic Indian spice traditions with modern food-safety standards. We source directly from trusted farming partners across India and process spices in hygienic facilities.
          </p>
          <p className="mt-4 text-earth-700">
            Our promise is simple: no shortcuts, no adulteration, no artificial colors. Just honest masalas crafted with care.
          </p>
        </div>
        <div className="rounded-2xl border border-earth-200 bg-white p-6">
          <h2 className="text-xl font-semibold">Why families trust us</h2>
          <ul className="mt-4 space-y-3 text-earth-700">
            <li>• Ethically sourced ingredients from India</li>
            <li>• Batch-wise quality checks and lab screening</li>
            <li>• Small-batch grinding for better aroma retention</li>
            <li>• Food-safe, hygienic packaging and traceability</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

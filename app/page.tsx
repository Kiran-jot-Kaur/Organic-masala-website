import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Shop premium organic masalas from Shuddh Masala Co. with trusted purity practices.'
};

const categories = ['Turmeric', 'Red Chilli', 'Coriander', 'Cumin', 'Garam Masala', 'Regional Blends'];

const faqs = [
  {
    question: 'Are your masalas 100% organic?',
    answer:
      'Yes. We work with partner farms that follow organic cultivation practices and avoid synthetic additives.'
  },
  {
    question: 'How do you ensure purity?',
    answer: 'Each batch is cleaned, small-batch ground, and tested for adulteration before packaging.'
  },
  {
    question: 'Do you use artificial colors?',
    answer: 'No. The color and aroma come naturally from high-quality whole spices.'
  }
];

export default function HomePage() {
  const bestSellers = products.filter((product) => product.tags.includes('Best seller')).slice(0, 4);

  return (
    <>
      <section className="section-padding bg-gradient-to-b from-spice-100 to-earth-50">
        <div className="container-wide grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-spice-700">Shuddh Masala Co.</p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Organic Indian Masalas you can trust.</h1>
            <p className="mt-4 max-w-lg text-earth-700">
              Pure. Organic. Traditional. Premium spice blends and single spices sourced from Indian farms and crafted in hygienic small batches.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/products" className="rounded-full bg-spice-700 px-6 py-3 text-sm font-medium text-white hover:bg-spice-800">
                Shop Now
              </Link>
              <Link href="/purity" className="rounded-full border border-earth-300 px-6 py-3 text-sm font-medium hover:bg-white">
                Watch Purity Video
              </Link>
            </div>
          </div>
          <div className="relative h-[360px] overflow-hidden rounded-3xl shadow-warm">
            <Image
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1600&q=80"
              alt="Indian spices"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <h2 className="text-2xl font-semibold">Category Highlights</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {categories.map((category) => (
              <div key={category} className="rounded-xl border border-earth-200 bg-white p-4 text-center font-medium">
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="text-2xl font-semibold">Best Sellers</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bestSellers.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide grid gap-8 rounded-2xl border border-earth-200 bg-earth-100 p-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Purity Promise</h2>
            <ul className="mt-4 space-y-2 text-earth-700">
              <li>✓ No adulteration</li>
              <li>✓ Lab-tested batches</li>
              <li>✓ Farm-sourced ingredients</li>
              <li>✓ Freshly ground in small batches</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Video Preview</h3>
            <p className="mt-2 text-sm text-earth-600">See how we source, grind, and test every batch.</p>
            <div className="mt-4 relative h-44 overflow-hidden rounded-xl">
              <Image
                src="https://img.youtube.com/vi/UcN7SGGoCNI/hqdefault.jpg"
                alt="Purity video preview"
                fill
                className="object-cover"
              />
            </div>
            <Link href="/purity" className="mt-4 inline-block text-sm font-medium text-spice-700">
              Explore all purity videos →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <h2 className="text-2xl font-semibold">What our customers say</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              '“Authentic aroma and color. Feels like home-made masalas.”',
              '“Great packaging and freshness. Garam masala is exceptional.”',
              '“Finally a brand that shares sourcing and testing openly.”'
            ].map((quote) => (
              <blockquote key={quote} className="rounded-xl border border-earth-200 bg-earth-50 p-5 text-sm text-earth-700">
                {quote}
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <h2 className="mb-6 text-2xl font-semibold">FAQs</h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}

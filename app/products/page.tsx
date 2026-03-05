import type { Metadata } from 'next';
import { ProductsClient } from '@/components/ProductsClient';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse organic single spices and traditional blends from Shuddh Masala Co.'
};

export default function ProductsPage() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <h1 className="mb-2 text-3xl font-bold">Our Masalas</h1>
        <p className="mb-8 text-earth-600">Explore premium spices crafted for purity, aroma, and authentic Indian taste.</p>
        <ProductsClient />
      </div>
    </section>
  );
}

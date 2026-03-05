import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductDetailClient } from '@/components/ProductDetailClient';
import { products } from '@/data/products';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) {
    return { title: 'Product not found' };
  }

  return {
    title: product.name,
    description: product.shortDescription
  };
}

export default function ProductDetailPage({ params }: Params) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) notFound();

  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <section className="section-padding">
      <div className="container-wide">
        <ProductDetailClient product={product} related={related} />
      </div>
    </section>
  );
}

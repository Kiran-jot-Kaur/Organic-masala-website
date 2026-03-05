import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/data/products';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-earth-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-warm">
      <div className="relative h-56">
        <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <span className="text-sm font-semibold text-spice-700">₹{product.price}</span>
        </div>
        <p className="text-sm text-earth-600">{product.shortDescription}</p>
        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-earth-100 px-3 py-1 text-xs text-earth-700">
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex rounded-full bg-spice-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-spice-800"
        >
          View details
        </Link>
      </div>
    </article>
  );
}

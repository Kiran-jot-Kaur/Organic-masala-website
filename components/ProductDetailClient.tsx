'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import type { Product } from '@/data/products';
import { ProductCard } from './ProductCard';

export function ProductDetailClient({ product, related }: { product: Product; related: Product[] }) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedWeight, setSelectedWeight] = useState(product.netWeightOptions[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const totalPrice = useMemo(() => product.price * quantity, [product.price, quantity]);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  return (
    <div className="space-y-12">
      <section className="grid gap-10 lg:grid-cols-2">
        <div>
          <div className="relative mb-4 h-[360px] overflow-hidden rounded-2xl border border-earth-200">
            <Image src={selectedImage} alt={product.name} fill className="object-cover" priority />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {product.images.map((image) => (
              <button
                key={image}
                type="button"
                onClick={() => setSelectedImage(image)}
                className={`relative h-20 overflow-hidden rounded-lg border ${
                  image === selectedImage ? 'border-spice-600' : 'border-earth-200'
                }`}
              >
                <Image src={image} alt={product.name} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-earth-600">{product.longDescription}</p>
          <p className="text-2xl font-semibold text-spice-700">₹{totalPrice}</p>

          <div>
            <h2 className="mb-2 font-medium">Select weight</h2>
            <div className="flex flex-wrap gap-2">
              {product.netWeightOptions.map((weight) => (
                <button
                  key={weight}
                  type="button"
                  onClick={() => setSelectedWeight(weight)}
                  className={`rounded-full px-4 py-2 text-sm ${
                    selectedWeight === weight ? 'bg-spice-700 text-white' : 'bg-earth-100'
                  }`}
                >
                  {weight}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-2 font-medium">Quantity</h2>
            <div className="inline-flex items-center rounded-full border border-earth-300 bg-white">
              <button className="px-4 py-2" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                -
              </button>
              <span className="min-w-10 text-center">{quantity}</span>
              <button className="px-4 py-2" onClick={() => setQuantity((q) => q + 1)}>
                +
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="rounded-full bg-spice-700 px-6 py-3 font-medium text-white transition hover:bg-spice-800"
          >
            Add to Cart
          </button>
          {added && <p className="text-sm text-green-700">Added to cart (demo state).</p>}

          <ul className="space-y-2 text-sm text-earth-700">
            <li>✓ No adulteration</li>
            <li>✓ Lab-tested batches</li>
            <li>✓ Hygienic sealed packaging</li>
            <li>✓ Farm-sourced ingredients</li>
          </ul>
        </div>
      </section>

      <section className="grid gap-8 rounded-2xl border border-earth-200 bg-white p-6 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold">Ingredients</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-earth-700">
            {product.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Usage Suggestions</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-earth-700">
            {product.usageSuggestions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2 className="mb-5 text-2xl font-semibold">Related Products</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

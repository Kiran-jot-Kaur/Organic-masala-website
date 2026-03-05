'use client';

import { useMemo, useState } from 'react';
import { productTags, products } from '@/data/products';
import { ProductCard } from './ProductCard';

export function ProductsClient() {
  const [activeTag, setActiveTag] = useState('All');
  const [search, setSearch] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const tagMatch = activeTag === 'All' || product.tags.includes(activeTag);
      const searchMatch = product.name.toLowerCase().includes(search.toLowerCase());
      return tagMatch && searchMatch;
    });
  }, [activeTag, search]);

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-earth-200 bg-white p-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {productTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                activeTag === tag
                  ? 'bg-spice-700 text-white'
                  : 'bg-earth-100 text-earth-700 hover:bg-earth-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <label className="sr-only" htmlFor="search-products">Search products</label>
        <input
          id="search-products"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by product name"
          className="w-full rounded-xl border border-earth-200 px-4 py-2 text-sm outline-none focus:border-spice-500 md:max-w-xs"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </>
  );
}

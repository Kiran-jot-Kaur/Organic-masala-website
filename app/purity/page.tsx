import type { Metadata } from 'next';
import { VideoGallery } from '@/components/VideoGallery';

export const metadata: Metadata = {
  title: 'Purity & Testing',
  description: 'Watch how Shuddh Masala Co. sources, processes, and tests masalas for trusted purity.'
};

const videos = [
  {
    title: 'How we source',
    description: 'Meet our partner farms and see how premium raw spices are selected.',
    type: 'youtube' as const,
    url: 'https://www.youtube.com/embed/UcN7SGGoCNI',
    thumbnail: 'https://img.youtube.com/vi/UcN7SGGoCNI/hqdefault.jpg'
  },
  {
    title: 'Grinding & packaging',
    description: 'Small-batch grinding process and hygienic packaging standards.',
    type: 'youtube' as const,
    url: 'https://www.youtube.com/embed/7Gg4M0mM4f4',
    thumbnail: 'https://img.youtube.com/vi/7Gg4M0mM4f4/hqdefault.jpg'
  },
  {
    title: 'Lab testing',
    description: 'Every batch goes through internal and third-party purity checks.',
    type: 'local' as const,
    url: '/videos/lab-testing.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'No artificial colors',
    description: 'Discover how natural color and aroma are retained without additives.',
    type: 'local' as const,
    url: '/videos/no-artificial-colors.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1603048719539-9ecb7f8bbf42?auto=format&fit=crop&w=1000&q=80'
  }
];

export default function PurityPage() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <h1 className="text-3xl font-bold">Purity & Testing</h1>
        <p className="mt-2 max-w-2xl text-earth-600">
          Transparency is at the heart of Shuddh Masala Co. Explore our sourcing, processing, and quality-control videos.
        </p>

        <div className="mt-8">
          <VideoGallery videos={videos} />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {['FSSAI', 'Organic practices', 'Hygienic packaging', 'Batch traceability'].map((item) => (
            <div key={item} className="rounded-xl border border-earth-200 bg-white p-5 text-center font-medium shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';

type VideoItem = {
  title: string;
  description: string;
  type: 'youtube' | 'local';
  url: string;
  thumbnail?: string;
};

export function VideoGallery({ videos }: { videos: VideoItem[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {videos.map((video) => (
        <article key={video.title} className="rounded-2xl border border-earth-200 bg-white p-4 shadow-sm">
          <div className="relative overflow-hidden rounded-xl bg-earth-900">
            {video.type === 'youtube' ? (
              <iframe
                title={video.title}
                src={video.url}
                className="aspect-video w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video controls poster={video.thumbnail} className="aspect-video w-full object-cover">
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          <h3 className="mt-4 text-lg font-semibold">{video.title}</h3>
          <p className="mt-2 text-sm text-earth-600">{video.description}</p>
          {video.thumbnail && (
            <div className="mt-4">
              <Image
                src={video.thumbnail}
                alt={`${video.title} thumbnail`}
                width={320}
                height={180}
                className="rounded-lg object-cover"
              />
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

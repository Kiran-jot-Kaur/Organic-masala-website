import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-wide text-center">
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="mt-3 text-earth-600">The page you requested does not exist.</p>
        <Link href="/" className="mt-6 inline-block rounded-full bg-spice-700 px-5 py-2 text-white">
          Back to Home
        </Link>
      </div>
    </section>
  );
}

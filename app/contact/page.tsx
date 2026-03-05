import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Shuddh Masala Co. for product questions and business inquiries.'
};

export default function ContactPage() {
  return (
    <section className="section-padding">
      <div className="container-wide grid gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-3 text-earth-700">We would love to hear from you. Reach out for orders, partnerships, or product queries.</p>
          <div className="mt-6 rounded-2xl border border-earth-200 bg-white p-5 text-sm text-earth-700">
            <p className="font-semibold">Business Address</p>
            <p className="mt-2">Shuddh Masala Co.</p>
            <p>123 Spice Market Road, Bengaluru, India</p>
            <p className="mt-3">Phone: +91 90000 00000</p>
            <p>Email: hello@shuddhmasala.co</p>
          </div>

          <Link
            href="https://wa.me/919000000000"
            className="mt-4 inline-flex rounded-full bg-green-600 px-5 py-3 text-sm font-medium text-white hover:bg-green-700"
          >
            Chat on WhatsApp
          </Link>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

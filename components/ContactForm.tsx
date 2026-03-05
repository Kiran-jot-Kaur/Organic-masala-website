'use client';

import { FormEvent, useState } from 'react';

type Errors = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: Errors = {};
    if (form.name.trim().length < 2) nextErrors.name = 'Please enter your full name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Enter a valid email address.';
    if (!/^\d{10,15}$/.test(form.phone.replace(/\s+/g, ''))) nextErrors.phone = 'Enter a valid phone number.';
    if (form.message.trim().length < 10) nextErrors.message = 'Message should be at least 10 characters.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
        <h2 className="text-xl font-semibold text-green-800">Thank you for reaching out.</h2>
        <p className="mt-2 text-sm text-green-700">Our team will connect with you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-earth-200 bg-white p-6 shadow-sm">
      {[
        { key: 'name', label: 'Name', type: 'text' },
        { key: 'email', label: 'Email', type: 'email' },
        { key: 'phone', label: 'Phone', type: 'tel' }
      ].map((field) => (
        <div key={field.key}>
          <label htmlFor={field.key} className="mb-1 block text-sm font-medium">
            {field.label}
          </label>
          <input
            id={field.key}
            type={field.type}
            value={form[field.key as keyof typeof form]}
            onChange={(e) => setForm((prev) => ({ ...prev, [field.key]: e.target.value }))}
            className="w-full rounded-xl border border-earth-200 px-4 py-2 text-sm outline-none focus:border-spice-500"
          />
          {errors[field.key as keyof Errors] && (
            <p className="mt-1 text-xs text-red-600">{errors[field.key as keyof Errors]}</p>
          )}
        </div>
      ))}

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
          className="w-full rounded-xl border border-earth-200 px-4 py-2 text-sm outline-none focus:border-spice-500"
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      <button type="submit" className="rounded-full bg-spice-700 px-6 py-2 text-sm font-medium text-white">
        Send Message
      </button>
    </form>
  );
}

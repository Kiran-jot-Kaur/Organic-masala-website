'use client';

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <details key={item.question} className="rounded-xl border border-earth-200 bg-white p-4" open={index === 0}>
          <summary className="cursor-pointer list-none font-medium text-earth-900">{item.question}</summary>
          <p className="mt-3 text-sm leading-6 text-earth-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-earth-200 bg-white">
      <div className="container-wide grid gap-10 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">Shuddh Masala Co.</h3>
          <p className="mt-2 text-sm text-earth-600">Pure. Organic. Traditional.</p>
          <p className="mt-3 text-sm text-earth-600">India</p>
        </div>

        <div>
          <h4 className="font-semibold">Quick links</h4>
          <ul className="mt-3 space-y-2 text-sm text-earth-700">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/purity">Purity & Testing</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-3 text-sm text-earth-700">+91 90000 00000</p>
          <p className="text-sm text-earth-700">hello@shuddhmasala.co</p>
          <div className="mt-4 flex gap-3 text-sm text-earth-600">
            <span aria-label="Instagram">Instagram</span>
            <span aria-label="Facebook">Facebook</span>
            <span aria-label="YouTube">YouTube</span>
          </div>
        </div>
      </div>
      <div className="border-t border-earth-200 py-4 text-center text-xs text-earth-500">
        © {new Date().getFullYear()} Shuddh Masala Co. All rights reserved.
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/20">
      <div className="container py-8 grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <div className="text-lg font-semibold text-brand">Mahanium Charity</div>
          <p className="mt-2 text-foreground/70">
            Empowering communities through education, healthcare, and disaster relief.
          </p>
        </div>
        <div className="flex gap-6">
          <div>
            <div className="font-medium mb-2">Navigation</div>
            <ul className="space-y-1">
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/programs" className="hover:underline">Programs</Link></li>
              <li><Link href="/donate" className="hover:underline">Donate</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-2">Connect</div>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="md:text-right">
          <p>© {new Date().getFullYear()} Mahanium Charity Organization</p>
          <p className="text-foreground/60">Registered non-profit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

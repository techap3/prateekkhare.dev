import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <Link href="/" className="text-sm font-semibold tracking-tight">
        Prateek
      </Link>
      <ul className="flex items-center gap-6">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-sm text-zinc-500 hover:text-black transition-colors"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

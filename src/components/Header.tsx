import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="font-display text-[18px] font-semibold leading-[1.2] text-[#111111]">
        Prateek Khare
      </Link>
      <nav>
        <ul className="flex items-center gap-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280] transition-colors duration-150 hover:text-[#111111]"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
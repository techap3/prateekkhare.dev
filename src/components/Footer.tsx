import Link from "next/link";

type FooterLink = {
  href: string;
  label: string;
  external?: boolean;
};

type FooterProps = {
  links: FooterLink[];
};

export default function Footer({ links }: FooterProps) {
  return (
    <footer className="mt-10 flex items-center justify-between border-t border-[#E5E7EB] pt-6">
      <p className="font-display text-[18px] font-medium leading-[1.2] text-[#4B5563]">
        Prateek Khare
      </p>
      <div className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#1D4ED8]">
        {links.map((link, index) => {
          const content = link.external ? (
            <a href={link.href} target="_blank" rel="noreferrer" className="hover:underline">
              {link.label}
            </a>
          ) : (
            <Link href={link.href} className="hover:underline">
              {link.label}
            </Link>
          );

          return (
            <span key={link.label}>
              {index > 0 ? " -> " : ""}
              {content}
            </span>
          );
        })}
      </div>
    </footer>
  );
}
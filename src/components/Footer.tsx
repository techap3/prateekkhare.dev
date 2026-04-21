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
    <footer className="mt-10 flex flex-col gap-3 border-t border-[#E5E7EB] pt-6 md:flex-row md:items-center md:justify-between">
      <p className="font-display text-[18px] font-medium leading-[1.2] text-[#4B5563]">
        Prateek Khare
      </p>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-meta text-[13px] font-medium tracking-[0.048em] text-[#4B5563]">
        {links.map((link, index) => {
          const content = link.external ? (
            <a href={link.href} target="_blank" rel="noreferrer" className="transition-colors duration-150 hover:text-[#111111]">
              {link.label}
            </a>
          ) : (
            <Link href={link.href} className="transition-colors duration-150 hover:text-[#111111]">
              {link.label}
            </Link>
          );

          return (
            <span key={link.label} className="flex items-center gap-3">
              {index > 0 ? <span className="text-[#9CA3AF]">·</span> : null}
              {content}
            </span>
          );
        })}
      </div>
    </footer>
  );
}

import { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

type FooterLink = {
  href: string;
  label: string;
  external?: boolean;
};

type PageShellProps = {
  railLabel: string;
  railHeightClass?: string;
  footerLinks: FooterLink[];
  children: ReactNode;
};

export default function PageShell({
  railLabel,
  railHeightClass = "h-full",
  footerLinks,
  children,
}: PageShellProps) {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col px-6 pb-10 pt-6 md:px-16">
        <Header />
        <div className="mt-16 flex flex-1 gap-8">
          <aside className="hidden w-[120px] shrink-0 flex-col gap-[10px] md:flex">
            <p className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280]">
              {railLabel}
            </p>
            <div className={`w-[2px] bg-[#4B5563] ${railHeightClass}`} />
          </aside>
          <div className="flex w-full max-w-[720px] flex-1 flex-col">
            <p className="mb-6 font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280] md:hidden">
              {railLabel}
            </p>
            {children}
            <div className="mt-auto">
              <Footer links={footerLinks} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
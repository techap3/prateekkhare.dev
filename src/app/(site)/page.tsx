import Link from "next/link";
import Card from "@/components/Card";
import PageShell from "@/components/PageShell";
import {
  defaultFooterLinks,
  homeThinkingStatements,
  homeWorkPreview,
  siteLinks,
} from "@/lib/site-content";

export default function Home() {
  return (
    <PageShell railLabel="00 / INDEX" railHeightClass="flex-1" footerLinks={defaultFooterLinks}>
      <div className="flex flex-col gap-14">
        <section className="animate-fade-up motion-delay-0 flex flex-col gap-5">
          <h1 className="font-display whitespace-pre-line text-[44px] font-bold leading-[1.05] tracking-[-0.01em] text-[#111111] md:text-[64px] md:leading-[1.1]">
            {"Building AI-assisted\nproducts that scale\nwithout breaking trust"}
          </h1>
          <p className="max-w-[640px] text-[18px] leading-[1.65] text-[#111827]">
            Product leader focused on systems that stay legible, reliable, and useful when operating pressure gets real.
          </p>
          <Link
            href="/work"
            className="link-slide w-fit font-display text-[20px] font-bold leading-[1.4] text-[#1D4ED8] transition-colors duration-150"
          >
            Explore selected work
          </Link>
        </section>

        <section className="animate-fade-up motion-delay-75 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280]">
              01 / HOW I THINK
            </p>
            <div className="h-px w-[160px] bg-[#E5E7EB]" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {homeThinkingStatements.map((statement) => (
              <p
                key={statement}
                className="border-t border-[#E5E7EB] pt-4 text-[18px] leading-[1.65] text-[#111827]"
              >
                {statement}
              </p>
            ))}
          </div>
        </section>

        <section className="animate-fade-up motion-delay-150 flex flex-col gap-5">
          <div className="flex items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <p className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280]">
                02 / PROOF
              </p>
              <p className="max-w-[560px] text-[16px] leading-[1.65] text-[#111827]">
                A few systems where product structure, operational clarity, and trust design mattered more than surface polish.
              </p>
            </div>
            <Link
              href="/work"
              className="hidden font-meta text-[13px] font-medium tracking-[0.048em] text-[#4B5563] transition-colors duration-150 hover:text-[#111111] md:inline-block"
            >
              View all work
            </Link>
          </div>

          <div className="flex flex-col gap-5">
            {homeWorkPreview.map((card) => (
              <Card
                key={card.title}
                background={card.background}
                border={card.border}
                widthClass="w-full"
                paddingClass="p-6"
              >
                <div className="flex gap-[10px]">
                  <div className="w-[2px] shrink-0 bg-[#D1D5DB]" />
                  <div className="flex flex-col gap-3">
                    <p className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280]">
                      {card.label}
                    </p>
                    <p className="font-display text-[20px] font-semibold leading-[1.4] text-[#111111]">
                      {card.title}
                    </p>
                    <p className="max-w-[588px] text-[18px] leading-[1.65] text-[#111827]">
                      {card.description}
                    </p>
                    <p className="max-w-[560px] font-meta text-[13px] font-medium leading-[1.5] text-[#6B7280]">
                      {card.meta}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Link
            href="/work"
            className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#4B5563] transition-colors duration-150 hover:text-[#111111] md:hidden"
          >
            View all work
          </Link>
        </section>

        <section className="animate-fade-up motion-delay-225 flex flex-col gap-3 border-t border-[#E5E7EB] pt-8">
          <p className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280]">
            03 / NEXT
          </p>
          <p className="max-w-[620px] text-[18px] leading-[1.65] text-[#111827]">
            If you&apos;re shaping AI products that need to earn trust in live operations, I&apos;d love to compare notes.
          </p>
          <Link
            href={siteLinks.email}
            className="link-slide w-fit font-display text-[20px] font-bold leading-[1.4] text-[#1D4ED8] transition-colors duration-150"
          >
            Start a conversation
          </Link>
        </section>
      </div>
    </PageShell>
  );
}

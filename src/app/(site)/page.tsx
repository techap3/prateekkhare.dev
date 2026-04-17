import Link from "next/link";
import Card from "@/components/Card";
import Metric from "@/components/Metric";
import PageShell from "@/components/PageShell";
import { defaultFooterLinks, homeMetrics, homeWorkCards } from "@/lib/site-content";

export default function Home() {
  return (
    <PageShell railLabel="00 / INDEX" railHeightClass="flex-1" footerLinks={defaultFooterLinks}>
      <div className="flex flex-col gap-[30px]">
        <div className="animate-fade-up motion-delay-0 flex flex-col gap-4">
          <p className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280]">
            00 / HOME / AI SYSTEMS
          </p>
          <h1 className="font-display whitespace-pre-line text-[44px] font-bold leading-[1.05] tracking-[-0.01em] text-[#111111] md:text-[64px] md:leading-[1.1]">
            {"Building AI-assisted\nproducts that scale\nwithout breaking trust"}
          </h1>
          <p className="max-w-[640px] text-[16px] leading-[1.65] text-[#111827]">
            Product leader with 9+ years across 0→1 and scale systems
          </p>
          <p className="max-w-[640px] text-[16px] leading-[1.65] text-[#111827]">
            Focused on building systems that behave well under real-world pressure.
          </p>
          <Link href="/work" className="link-slide font-display text-[20px] font-bold leading-[1.4] text-[#1D4ED8] transition-colors duration-150">
            Explore my work →
          </Link>
          <p className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280]">
            {"// built for reliability under failure"}
          </p>
          <div className="h-px w-[128px] bg-[#D1D5DB]" />
        </div>

        <div className="animate-fade-up motion-delay-75 grid w-full max-w-[736px] grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4">
          {homeMetrics.map((metric) => (
            <Metric key={metric.label} value={metric.value} label={metric.label} />
          ))}
        </div>

        <div className="animate-fade-up motion-delay-150 flex flex-col gap-4">
          <p className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280]">01 / WORK</p>
          <div className="flex flex-col gap-[34px]">
            {homeWorkCards.map((card) =>
              card.type === "featured" ? (
                <Card key={card.title} background={card.background} border={card.border} widthClass="md:ml-[8px] md:w-[640px]" paddingClass="p-[22px]">
                  <div className="flex gap-[10px]">
                    <div className="w-[2px] shrink-0 bg-[#9CA3AF]" />
                    <div className="flex flex-col gap-3">
                      <p className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280]">{card.label}</p>
                      <p className="font-display text-[20px] font-semibold leading-[1.4] text-[#111111]">{card.title}</p>
                      <p className="max-w-[588px] text-[18px] leading-[1.65] text-[#111827]">{card.description}</p>
                      <p className="max-w-[560px] font-meta text-[13px] font-medium leading-[1.5] text-[#6B7280]">{card.meta}</p>
                      <p className="font-meta text-[13px] font-medium tracking-[0.06em] text-[#6B7280]">{card.annotation}</p>
                    </div>
                  </div>
                </Card>
              ) : (
                <Card
                  key={card.title}
                  background={card.background}
                  border={card.border}
                  widthClass={card.widthClass}
                  paddingClass="p-[20px] md:p-[19px]"
                >
                  <div className="flex gap-[10px]">
                    <div className="w-[2px] shrink-0 bg-[#D1D5DB]" />
                    <div className="flex flex-col gap-3">
                      <p className="font-display text-[20px] font-semibold leading-[1.4] text-[#111111]">{card.title}</p>
                      <p className="max-w-[568px] text-[18px] leading-[1.65] text-[#111827]">{card.description}</p>
                      <p className="max-w-[560px] font-meta text-[13px] font-medium leading-[1.5] text-[#6B7280]">{card.meta}</p>
                    </div>
                  </div>
                </Card>
              ),
            )}
          </div>
        </div>
      </div>
    </PageShell>
  );
}

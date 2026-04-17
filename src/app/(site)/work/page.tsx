import Card from "@/components/Card";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import { defaultFooterLinks, workCases } from "@/lib/site-content";

export default function Work() {
  return (
    <PageShell railLabel="01 / WORK" railHeightClass="h-[1700px]" footerLinks={defaultFooterLinks}>
      <div className="flex flex-col gap-[38px]">
        <div className="flex flex-col gap-4">
          <p className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280]">01 / WORK</p>
          <h1 className="font-display whitespace-pre-line text-[44px] font-bold leading-[1.05] tracking-[-0.01em] text-[#111111] md:text-[64px] md:leading-[1.1]">
            {"Case work shaped by\noperating reality, not\nproduct theatre"}
          </h1>
          <p className="max-w-[640px] text-[16px] leading-[1.65] text-[#111827]">
            Each project is framed around the system constraint, the product mechanism introduced, and the measurable shift in behavior or performance that followed.
          </p>
          <p className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280]">{"// systems > features"}</p>
          <div className="h-px w-[180px] bg-[#E5E7EB]" />
        </div>

        <div className="flex flex-col gap-[38px]">
          {workCases.map((item, index) => (
            <Reveal key={item.title} delay={index * 75}>
            <Card
              key={item.title}
              background={item.background}
              border={item.border}
              widthClass={index === 0 ? "md:w-[640px]" : "md:w-[620px]"}
              paddingClass="p-6"
            >
              <div className={item.gapClass}>
                <p className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280]">{item.label}</p>
                <p className="font-display text-[20px] font-semibold leading-[1.4] text-[#111111]">{item.title}</p>
                <p className="max-w-[640px] text-[18px] leading-[1.65] text-[#111827]">{item.description}</p>
                <p className="max-w-[580px] font-meta text-[13px] font-medium leading-[1.5] text-[#6B7280]">{item.meta}</p>
                {item.annotation ? (
                  <p className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280]">{item.annotation}</p>
                ) : null}
              </div>
            </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

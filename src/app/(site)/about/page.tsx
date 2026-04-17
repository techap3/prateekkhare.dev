import Link from "next/link";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import { aboutFooterLinks } from "@/lib/site-content";

export default function About() {
  return (
    <PageShell railLabel="03 / ABOUT" railHeightClass="h-[1620px]" footerLinks={aboutFooterLinks}>
      <div className="flex flex-col gap-9">
        <Reveal className="flex flex-col gap-4 pb-5">
          <p className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280]">03 / ABOUT</p>
          <h1 className="font-display whitespace-pre-line text-[44px] font-bold leading-[1.05] tracking-[-0.01em] text-[#111111] md:text-[64px] md:leading-[1.1]">
            {"I build systems\nfor real-world\ncomplexity"}
          </h1>
          <p className="max-w-[640px] text-[16px] leading-[1.65] text-[#111827]">
            My work sits at the intersection of product judgment, engineering empathy, and operational design. I am most useful in spaces where the team needs structure without losing speed.
          </p>
          <p className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280]">{"// systems > features"}</p>
          <div className="h-px w-[180px] bg-[#E5E7EB]" />
        </Reveal>

        <Reveal delay={75} className="flex flex-col gap-[13px]">
          <p className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280]">01 / WHO I AM</p>
          <p className="max-w-[640px] text-[18px] leading-[1.65] text-[#111827]">
            I am a product leader with a systems bias. I care about product strategy, but I care just as much about the operating mechanics that determine whether strategy survives contact with reality.
          </p>
        </Reveal>

        <Reveal delay={150} className="flex flex-col gap-[15px]">
          <p className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280]">02 / JOURNEY</p>
          <p className="max-w-[640px] text-[18px] leading-[1.65] text-[#111827]">
            I started close to engineering, which gave me a respect for implementation detail and system constraints. Over time I moved deeper into product, then into AI-assisted systems, where the boundary between product design, operational design, and governance became impossible to ignore.
          </p>
        </Reveal>

        <Reveal delay={225} className="flex flex-col gap-[13px] pr-2">
          <p className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280]">03 / HOW I THINK</p>
          <p className="max-w-[620px] text-[20px] font-medium leading-[1.62] text-[#111827]">
            I look for leverage in the system, not just the interface. I prefer product mechanisms over promises, operating clarity over process theatre, and metrics that sharpen judgment rather than replace it.
          </p>
          <p className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280]">{"// judgment before dashboard theater"}</p>
        </Reveal>

        <Reveal delay={300} className="flex flex-col gap-[15px]">
          <p className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280]">04 / WHAT I&apos;M EXPLORING</p>
          <p className="max-w-[640px] text-[18px] leading-[1.65] text-[#111827]">
            I am currently interested in AI product governance, workflow intelligence, and how teams design human oversight into systems before scale forces the issue. The throughline is simple: build products that behave well under pressure.
          </p>
        </Reveal>

        <Reveal delay={375}>
          <Link href="mailto:hello@prateekkhare.dev" className="link-slide font-display max-w-[720px] text-[20px] font-bold leading-[1.4] text-[#2563EB] transition-colors duration-150 hover:text-[#1D4ED8]">
            If you&apos;re building products where trust, complexity, and operating reality matter, let&apos;s talk. →
          </Link>
        </Reveal>
      </div>
    </PageShell>
  );
}

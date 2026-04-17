import Link from "next/link";
import Card from "@/components/Card";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import { blogPosts, defaultFooterLinks } from "@/lib/site-content";

export default function Blog() {
  return (
    <PageShell railLabel="02 / WRITING" railHeightClass="h-[1500px]" footerLinks={defaultFooterLinks}>
      <div className="flex flex-col gap-[22px]">
        <div className="flex flex-col gap-4">
          <p className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280]">02 / WRITING</p>
          <p className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280]">NOTE / AI SYSTEMS</p>
          <h1 className="font-display whitespace-pre-line text-[44px] font-bold leading-[1.05] tracking-[-0.01em] text-[#111111] md:text-[64px] md:leading-[1.1]">
            {"Notes on AI systems,\noperating design, and\nproduct judgment"}
          </h1>
          <p className="max-w-[640px] text-[16px] leading-[1.65] text-[#111827]">
            Writing that sits closer to product memos than marketing content: concise, opinionated, and grounded in real operating constraints.
          </p>
          <p className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280]">{"// systems > features"}</p>
          <div className="h-px w-[180px] bg-[#E5E7EB]" />
        </div>

        <div className="flex flex-col gap-14">
          {blogPosts.map((post, index) =>
            index === 0 ? (
              <Reveal key={post.slug} delay={index * 75}>
                <Link href={`/blog/${post.slug}`} className="block w-full md:w-[632px]">
                <Card background="#F7F8FA" border="#D9DEE4" widthClass="w-full" paddingClass="px-6 pb-7 pt-6">
                  <div className="flex flex-col gap-3">
                    <p className="font-meta text-[13px] font-medium tracking-[0.06em] leading-[1.5] text-[#6B7280]">{post.date}</p>
                    <p className="font-display max-w-full text-[20px] font-bold leading-[1.4] text-[#111111] hover:underline">
                      {post.title}
                    </p>
                    <p className="max-w-[640px] text-[16px] leading-[1.65] text-[#111827]">{post.description}</p>
                    <p className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280]">{post.annotation}</p>
                  </div>
                </Card>
              </Link>
              </Reveal>
            ) : (
              <Reveal key={post.slug} delay={index * 75}>
                <Link href={`/blog/${post.slug}`} className="block md:w-[620px]">
                <div className={`flex flex-col ${index === 1 ? "gap-[11px] pb-[22px] pl-[10px]" : "gap-[13px] pb-6 pl-[14px]"}`}>
                  <p className="font-meta text-[13px] font-medium tracking-[0.048em] leading-[1.5] text-[#6B7280]">{post.date}</p>
                  <p className="font-display text-[20px] font-semibold leading-[1.4] text-[#111111] hover:underline">
                    {post.title}
                  </p>
                  <p className="max-w-[640px] text-[16px] leading-[1.65] text-[#111827]">{post.description}</p>
                  {post.annotation ? (
                    <p className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280]">{post.annotation}</p>
                  ) : null}
                </div>
                </Link>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </PageShell>
  );
}

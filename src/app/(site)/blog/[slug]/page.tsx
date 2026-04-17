import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import Reveal from "@/components/Reveal";
import { articleContent, articleFooterLinks, blogPosts } from "@/lib/site-content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  const article = articleContent[slug];

  if (!article) {
    notFound();
  }

  return (
    <PageShell railLabel="02 / NOTE" railHeightClass="h-[1860px]" footerLinks={articleFooterLinks}>
      <div className="flex flex-col gap-[34px]">
        <p className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280]">
          {`${article.metaPrefix} · ${article.date} · AI SYSTEMS`}
        </p>
        <p className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280]">{article.noteLabel}</p>
        <h1 className="font-display whitespace-pre-line text-[44px] font-bold leading-[1.05] tracking-[-0.01em] text-[#111111] md:text-[64px] md:leading-[1.1]">
          {article.title}
        </h1>
        {article.annotation ? (
          <p className="font-meta text-[13px] font-medium tracking-[0.048em] text-[#6B7280]">{article.annotation}</p>
        ) : null}
        <p className="max-w-[640px] text-[16px] leading-[1.65] text-[#111827]">{article.dek}</p>

        <div className="flex max-w-[640px] flex-col gap-[22px]">
          {article.blocks.map((block, index) => {
            if (block.type === "paragraph") {
              return (
                <Reveal key={index} delay={index * 30}>
                  <p className="text-[18px] leading-[1.6] text-[#111827]">
                    {block.content}
                  </p>
                </Reveal>
              );
            }

            if (block.type === "annotation") {
              return (
                <Reveal key={index} delay={index * 30}>
                  <p className="max-w-[584px] font-meta text-[13px] font-medium tracking-[0.06em] text-[#6B7280]">
                    {block.content}
                  </p>
                </Reveal>
              );
            }

            return (
              <Reveal key={index} delay={index * 30}>
                <div className="flex w-full max-w-[612px] gap-[10px] bg-[#F8FAFD] px-4 pb-[10px] pt-5 transition-colors duration-200 hover:bg-[#EEF3FC]">
                  <div
                    className={`w-[2px] shrink-0 ${
                      block.variant === "italic" ? "bg-[#9CA3AF]" : "bg-[#1D4ED8]"
                    }`}
                  />
                  <p
                    className={
                      block.variant === "italic"
                        ? "max-w-[548px] text-[18px] italic leading-[1.78] text-[#111827]"
                        : block.variant === "medium"
                          ? "font-display max-w-[548px] text-[20px] font-medium leading-[1.7] text-[#111111]"
                          : "font-display max-w-[548px] text-[20px] font-semibold leading-[1.7] text-[#111111]"
                    }
                  >
                    {block.content}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </PageShell>
  );
}

import { notFound } from "next/navigation";
import { getAllPosts } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map(({ slug }) => ({ slug }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  let Post: React.ComponentType;
  let meta: { title?: string; date?: string };

  try {
    const mod = await import(`@/content/blog/${slug}.mdx`);
    Post = mod.default;
    meta = mod.frontmatter ?? {};
  } catch {
    notFound();
  }

  return (
    <article className="pt-24 pb-32 max-w-3xl">
      {meta.date && (
        <p className="mb-6 text-xs text-gray-400 dark:text-gray-500">
          {new Date(meta.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      )}
      <div className="mdx-content max-w-2xl">
        <Post />
      </div>
    </article>
  );
}

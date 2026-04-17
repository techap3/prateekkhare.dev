import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <section className="pt-24 pb-32 max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Blog</h1>
      <p className="mt-4 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
        Writing on product, AI systems, and building things that last.
      </p>

      <div className="mt-14 flex max-w-2xl flex-col divide-y divide-zinc-100">
        {posts.map(({ slug, title, description, date }) => (
          <Link
            key={slug}
            href={`/blog/${slug}`}
            className="group py-7"
          >
            <p className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:underline underline-offset-4 decoration-zinc-400">
              {title}
            </p>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{description}</p>
            {date && (
              <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}

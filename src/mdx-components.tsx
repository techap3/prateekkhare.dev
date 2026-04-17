import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold tracking-tight leading-tight mt-10 mb-5 text-zinc-900 dark:text-white">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-12 mb-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
        {children}
      </h2>
    ),
    p: ({ children }) => (
      <p className="text-base text-zinc-800 leading-relaxed dark:text-gray-300">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-10 border-l border-zinc-300 pl-4 text-lg italic leading-relaxed text-zinc-700 dark:border-gray-700 dark:text-gray-200">
        {children}
      </blockquote>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-zinc-900 dark:text-white">{children}</strong>
    ),
    ...components,
  };
}

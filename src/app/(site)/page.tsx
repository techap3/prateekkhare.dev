import Link from "next/link";

const work = [
  {
    title: "Zigtex",
    description: "Outbound automation platform with AI-assisted workflows",
    highlights: ["0→1 product build", "10k+ emails/day/org", "Safety systems (RBAC, idempotency, auto-stops)"],
  },
  {
    title: "GyanGrove",
    description: "AI-powered school management platform",
    highlights: ["12-module platform", "70% engagement increase", "60%+ operations automated"],
  },
  {
    title: "Atlassian (Jira)",
    description: "Performance optimization and system efficiency",
    highlights: ["20% TTI improvement", "18% faster page load", "Observability improvements"],
  },
  {
    title: "Visa",
    description: "Large-scale platform and internal systems",
    highlights: ["CI/CD pipeline system", "Rules engine (Node.js)", "800+ screen system migration"],
  },
];

const metrics = [
  { value: "10k+", label: "automated actions/day" },
  { value: "70%", label: "efficiency gains" },
  { value: "1000+", label: "active users" },
  { value: "65%", label: "operational time reduction" },
];

export default function Home() {
  return (
    <section className="pt-24 pb-32 max-w-3xl">
      <h1 className="max-w-2xl text-5xl font-bold tracking-tight leading-tight text-zinc-900 dark:text-zinc-100">
        Building AI-assisted products that scale without breaking trust
      </h1>
      <p className="mt-10 max-w-xl text-base text-zinc-600 leading-relaxed dark:text-zinc-300">
        Product leader with 9+ years experience across 0→1 and scale systems,
        combining deterministic systems with applied AI.
      </p>
      <p className="mt-6 max-w-xl text-sm text-zinc-600 dark:text-zinc-400">
        Focused on building systems that behave well under real-world pressure.
      </p>

      <div className="mt-20 flex flex-wrap gap-x-14 gap-y-10">
        {metrics.map(({ value, label }) => (
          <div key={label} className="min-w-[140px]">
            <p className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">{value}</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{label}</p>
          </div>
        ))}
      </div>

      <Link
        href="/work"
        className="mt-14 inline-block text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 transition-colors"
      >
        Explore my work →
      </Link>

      <div className="mt-24">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Selected Work</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          A few products and systems I&apos;ve built across 0→1 and scale.
        </p>

        <div className="mt-12 flex flex-col divide-y divide-zinc-100">
          {work.map(({ title, description, highlights }, i) => (
            <Link
              key={title}
              href="#"
              className="group cursor-pointer"
            >
              {i === 0 ? (
                <div className="py-12">
                  <p className="mb-4 text-xs uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">
                    FEATURED PROJECT
                  </p>
                  <p className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:underline underline-offset-4 decoration-zinc-400">
                    {title}
                  </p>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{description}</p>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                    Built from scratch to handle high-scale outbound automation with safety-first design.
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-600 dark:text-gray-400">
                    {highlights.map((highlight, index) => (
                      <li key={highlight}>
                        {index > 0 ? "• " : ""}
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="py-9">
                  <p className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:underline underline-offset-4 decoration-zinc-400">
                    {title}
                  </p>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{description}</p>
                  <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-600 dark:text-gray-400">
                    {highlights.map((highlight, index) => (
                      <li key={highlight}>
                        {index > 0 ? "• " : ""}
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <section className="pt-24 pb-32 max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">About</h1>

      <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
        I build products for real environments, not polished demos. I care most
        about systems that earn trust under pressure, where technical decisions
        directly shape user confidence and outcomes.
      </p>

      <div className="mt-16 max-w-2xl">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Journey</h2>
        <p className="mt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
          I started in engineering at IIT, drawn to hard technical problems.
          Moving into product came from wanting to shape both implementation and
          intent. That transition led me to AI systems, where product judgment
          and engineering discipline have to operate together.
        </p>
      </div>

      <div className="mt-16 max-w-2xl">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">How I Think</h2>
        <div className="mt-6 space-y-6">
          <div>
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Systems &gt; features</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              Features can ship fast; systems are what keep products reliable when complexity grows.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Determinism before AI</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              I define what must work every time, then layer AI where adaptability creates leverage.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Trust is a product decision</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              Trust is built through behavior: safe defaults, clarity, and graceful failure modes.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Feedback loops are core</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              If the system cannot learn from real usage, it becomes stale no matter how polished it looks.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-2xl">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">What I&apos;m Exploring</h2>
        <ul className="mt-6 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
          <li>AI in production systems where reliability matters more than novelty.</li>
          <li>The overlap between product thinking and engineering execution.</li>
          <li>Building systems that remain dependable as they scale.</li>
        </ul>
      </div>

      <p className="mt-20 max-w-2xl text-base text-zinc-700 dark:text-zinc-200">
        If you&apos;re building something interesting, I&apos;d like to hear about it.
      </p>
    </section>
  );
}

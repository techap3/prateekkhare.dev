export default function Work() {
  return (
    <section className="pt-24 pb-32 max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Work</h1>
      <p className="mt-6 max-w-2xl text-base text-zinc-600 dark:text-zinc-300">
        Selected systems and products I&apos;ve built.
      </p>

      <div className="mt-16 flex max-w-2xl flex-col divide-y divide-zinc-100">
        <div className="py-10">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Zigtex</h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            I led the 0→1 build of an outbound automation platform with AI-assisted workflows.
            The focus was not just throughput, but stable execution under failure-prone production
            conditions and real customer variability.
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-zinc-600 dark:text-zinc-400">
            <li>10k+ emails/day/org</li>
            <li>• RBAC and idempotency</li>
            <li>• Auto-stop safety controls</li>
          </ul>
        </div>

        <div className="py-10">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">GyanGrove</h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            I helped shape and ship an AI-powered school management platform spanning operations,
            communication, and classroom workflows. The product was designed to simplify daily work
            for admins and educators while preserving control and clarity.
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-zinc-600 dark:text-zinc-400">
            <li>12-module platform</li>
            <li>• 70% engagement increase</li>
            <li>• 60%+ operations automated</li>
          </ul>
        </div>

        <div className="py-10">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Atlassian (Jira)</h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            I worked on performance and system efficiency initiatives to improve responsiveness at
            scale. The effort combined frontend performance tuning, backend coordination, and stronger
            observability so teams could catch issues earlier.
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-zinc-600 dark:text-zinc-400">
            <li>20% TTI improvement</li>
            <li>• 18% faster page load</li>
            <li>• Better observability</li>
          </ul>
        </div>

        <div className="py-10">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Visa</h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            I contributed to large-scale internal platform efforts focused on reliability and migration
            velocity. The work involved delivery systems, backend business logic, and modernization of
            legacy UI surfaces without disrupting core operations.
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-zinc-600 dark:text-zinc-400">
            <li>CI/CD pipeline system</li>
            <li>• Node.js rules engine</li>
            <li>• 800+ screen migration</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

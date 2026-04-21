export const siteLinks = {
  email: "mailto:hello@prateekkhare.dev",
  linkedin: "https://www.linkedin.com/in/prateekhare/",
  resume: "/prateek-khare-resume.pdf",
  blog: "/blog",
} as const;

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: siteLinks.blog, label: "Blog" },
  { href: "/about", label: "About" },
] as const;

export const defaultFooterLinks = [
  { href: siteLinks.linkedin, label: "LinkedIn", external: true },
  { href: siteLinks.email, label: "Email" },
  { href: siteLinks.blog, label: "Blog" },
];

export const aboutFooterLinks = [
  { href: siteLinks.linkedin, label: "LinkedIn", external: true },
  { href: siteLinks.email, label: "Email" },
  { href: siteLinks.resume, label: "Resume" },
];

export const articleFooterLinks = [
  { href: siteLinks.blog, label: "Back to blog" },
  { href: siteLinks.linkedin, label: "LinkedIn", external: true },
  { href: siteLinks.email, label: "Email" },
];

export const homeMetrics = [
  { value: "10k+", label: "automated actions/day" },
  { value: "70%", label: "efficiency gains" },
  { value: "1000+", label: "users" },
  { value: "65%", label: "operational improvement" },
];

export const homeThinkingStatements = [
  "Systems should get clearer as they scale, not more mysterious.",
  "Trust is a workflow design problem before it becomes a model problem.",
  "Good product judgment shows up in the operating mechanism, not the deck.",
  "I look for leverage in constraints, handoffs, and failure paths.",
];

export const homeWorkPreview = [
  {
    label: "AI-assisted operations system",
    title: "Zigtex",
    description:
      "Designed the operating model and AI-assisted workflow layer for a high-volume field operations system where speed could not come at the cost of reliability.",
    meta: "10k+ actions/day · 70% efficiency gains · 1000+ users · trust-first automation",
    background: "#F3F6FA",
    border: "#D7DFE8",
  },
  {
    label: "Governance and oversight layer",
    title: "Trust Console",
    description:
      "Created the governance and review layer for AI-driven actions, making confidence, overrides, and failure states visible to operators and leadership.",
    meta: "human override paths · confidence thresholds · safer scale",
    background: "#F7F9FC",
    border: "#E1E6EE",
  },
];

export const workCases = [
  {
    label: "system · workflow · automation",
    title: "Zigtex",
    description:
      "The problem was volume without coordination: operators were moving fast, but decisions fragmented under pressure. I led the product and systems design of an AI-assisted workflow layer that standardized actions, exposed edge cases, and made exception handling legible. The result was a daily operating system that processed 10k+ automated actions, improved efficiency by 70%, and kept trust intact as the workflow scaled.",
    meta: "scale / reliability / automation",
    background: "#F4F6F9",
    border: "#D7DEE6",
    gapClass: "gap-4",
  },
  {
    label: "workflow · instrumentation · operations",
    title: "OpsGraph",
    description:
      "Teams were reacting to isolated incidents instead of managing the system that produced them. I shaped a product layer that connected demand patterns, handoff delays, and operational interventions into one shared view, giving engineering and operations a common language for prioritization. That system shifted reviews from reactive debugging to deliberate flow design, materially improving response quality and operational focus.",
    meta: "diagnosis / planning / service flow",
    annotation: "// built to expose the system, not decorate it",
    background: "#F7F9FC",
    border: "#E1E6EE",
    gapClass: "gap-[14px]",
  },
  {
    label: "platform · governance · trust",
    title: "Trust Console",
    description:
      "As AI actions grew more powerful, the real challenge was not generation but governance. I drove the design of a review and control layer that surfaced confidence, override paths, and failure modes in ways operators could act on quickly. The system reduced ambiguity around automation, improved operational confidence, and gave leadership a defensible model for scaling AI without hiding risk.",
    meta: "trust / override / auditability",
    annotation: "// reliability includes visible escape hatches",
    background: "#F8FAFC",
    border: "#E4E8EF",
    gapClass: "gap-[18px]",
  },
];

export const blogPosts = [
  {
    slug: "designing-ai-systems-people-can-actually-trust",
    date: "17 Apr 2026",
    articleMetaDate: "17 APR 2026",
    title: "Designing AI systems people can actually trust",
    description:
      "Why reliability is a product design problem, not just a model quality problem, once automation reaches operational workflows.",
    annotation: "// reliability is designed outside the model",
    featured: true,
  },
  {
    slug: "the-product-leaders-job-in-a-system-with-too-many-handoffs",
    date: "02 Feb 2026",
    articleMetaDate: "02 FEB 2026",
    title: "The product leader's job in a system with too many handoffs",
    description:
      "On reducing coordination cost by changing the operating model before adding more process or more tooling.",
    annotation: "// handoffs are where systems reveal themselves",
    featured: false,
  },
  {
    slug: "metrics-are-useful-until-they-replace-judgment",
    date: "08 Nov 2025",
    articleMetaDate: "08 NOV 2025",
    title: "Metrics are useful until they replace judgment",
    description:
      "A short note on knowing when a dashboard clarifies the system and when it merely narrows what the team is willing to see.",
    featured: false,
  },
];

export const articleContent: Record<
  string,
  {
    title: string;
    date: string;
    noteLabel: string;
    metaPrefix: string;
    annotation?: string;
    dek: string;
    blocks: Array<
      | { type: "paragraph"; content: string }
      | { type: "annotation"; content: string }
      | { type: "callout"; content: string; variant: "display" | "italic" | "medium" }
    >;
  }
> = {
  "designing-ai-systems-people-can-actually-trust": {
    title: "Designing AI systems\npeople can\nactually trust",
    date: "17 APR 2026",
    noteLabel: "NOTE / AI SYSTEMS",
    metaPrefix: "02 / WRITING",
    annotation: "// trust is designed in the surrounding workflow",
    dek: "Reliability in AI products is not a model benchmark problem alone. It is a product systems problem involving confidence, legibility, intervention design, and operational fallback.",
    blocks: [
      {
        type: "paragraph",
        content:
          "The common failure mode in AI product design is assuming that better output quality will naturally produce user trust. In practice, trust is built when the system makes its behavior interpretable under pressure. People need to know what the system is doing, how certain it is, and what happens when it is wrong.",
      },
      {
        type: "callout",
        variant: "display",
        content: "A trustworthy AI system does not hide uncertainty. It gives uncertainty a usable interface.",
      },
      {
        type: "paragraph",
        content:
          "That means product leaders have to design more than prompts and outputs. They have to design review paths, confidence thresholds, visible failure states, and escalation logic. Once automation is attached to operational workflows, the surrounding control system matters as much as the model itself.",
      },
      {
        type: "annotation",
        content: "// the control layer is part of the product",
      },
      {
        type: "callout",
        variant: "italic",
        content:
          "The product decision is not whether automation is possible. It is whether the system still behaves well when reality gets noisy.",
      },
      {
        type: "paragraph",
        content:
          "This is where systems thinking becomes practical. Good teams map where confidence should be high, where review is mandatory, and where override paths need to remain human-first. They avoid binary thinking about 'manual' versus 'automated' work and instead design a gradient of assistance tied to risk.",
      },
      {
        type: "callout",
        variant: "medium",
        content:
          "If the workflow breaks trust at the moment of exception, scale only amplifies the damage.",
      },
      {
        type: "paragraph",
        content:
          "The strategic implication is simple: leaders should treat trust as part of product architecture. It needs instrumentation, design ownership, and explicit tradeoff decisions. Otherwise, the system may appear efficient while quietly becoming brittle.",
      },
    ],
  },
  "the-product-leaders-job-in-a-system-with-too-many-handoffs": {
    title: "The product leader's\njob in a system with\ntoo many handoffs",
    date: "02 FEB 2026",
    noteLabel: "NOTE / OPERATING MODEL",
    metaPrefix: "02 / WRITING",
    annotation: "// handoffs are where systems reveal themselves",
    dek: "When work is bouncing between teams, the product problem is rarely just prioritization. It is usually an operating design problem hiding inside delivery noise.",
    blocks: [
      {
        type: "paragraph",
        content:
          "Too many handoffs create delay, ambiguity, and defensive process. The product leader's job is to find the mechanism producing those handoffs and redesign the flow before adding governance theater on top.",
      },
      {
        type: "callout",
        variant: "display",
        content: "Coordination cost compounds faster than teams expect.",
      },
      {
        type: "paragraph",
        content:
          "That usually means getting specific about ownership, review thresholds, and what information has to travel with the work. Better operating systems reduce meetings because they reduce uncertainty.",
      },
    ],
  },
  "metrics-are-useful-until-they-replace-judgment": {
    title: "Metrics are useful\nuntil they replace\njudgment",
    date: "08 NOV 2025",
    noteLabel: "NOTE / PRODUCT JUDGMENT",
    metaPrefix: "02 / WRITING",
    annotation: "// judgment before dashboard theater",
    dek: "The job of a dashboard is to sharpen perception, not to flatten reality. When metrics replace judgment, teams stop seeing what does not fit the chart.",
    blocks: [
      {
        type: "paragraph",
        content:
          "A metric becomes dangerous when it narrows the team's field of view. Useful dashboards make tradeoffs legible. Bad ones make the team feel certain when it should still be asking better questions.",
      },
      {
        type: "callout",
        variant: "italic",
        content: "The system is usually wider than the KPI you've chosen to watch.",
      },
      {
        type: "paragraph",
        content:
          "Good operators use metrics as evidence, not doctrine. The goal is not more measurement. It is better judgment under real constraints.",
      },
    ],
  },
};

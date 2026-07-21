import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { PortfolioCard } from "@/components/site/PortfolioCard";
import { projects } from "@/lib/portfolio";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Our Work — Lumen Studio" },
      { name: "description", content: "A selection of premium video editing projects for creators, agencies, and brands." },
      { property: "og:title", content: "Our Work — Lumen Studio" },
      { property: "og:description", content: "A selection of premium video editing projects for creators, agencies, and brands." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
});

const filters = ["All", "Short Form", "Long Form", "Commercial", "Motion Graphics"] as const;

function PortfolioPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-widest text-muted-foreground"
          >
            Portfolio
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-5xl sm:text-7xl font-semibold tracking-tight text-balance"
          >
            Our work.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto"
          >
            A curated selection of work for creators, agencies, and brands who care about the craft.
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-4 py-2 text-sm border transition-colors ${
                active === f
                  ? "bg-foreground text-background border-transparent"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-white/20"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <PortfolioCard key={p.id} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <FeaturedCaseStudy />
      <Stats />
      <CTA />
    </>
  );
}

function FeaturedCaseStudy() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
      <Reveal>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">Featured Case Study</div>
        <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight max-w-2xl">
          Northwind — From 20k to 400k avg. views in 90 days.
        </h2>
      </Reveal>
      <div className="mt-12 grid lg:grid-cols-2 gap-8">
        <Reveal>
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="grid grid-cols-2">
              <div className="aspect-square bg-gradient-to-br from-neutral-900 to-black relative flex items-center justify-center">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Before</span>
              </div>
              <div className="aspect-square bg-gradient-to-br from-zinc-700 to-neutral-950 relative flex items-center justify-center border-l border-border">
                <span className="text-xs uppercase tracking-widest text-white/80">After</span>
              </div>
            </div>
            <div className="p-6 text-sm text-muted-foreground">
              A cinematic rebuild of raw phone footage into a polished brand-first short.
            </div>
          </div>
        </Reveal>
        <div className="space-y-8">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Overview</div>
              <p className="mt-3 text-lg leading-relaxed">
                Northwind approached us with strong product-market fit but flat social growth. We rebuilt their
                short-form pipeline end-to-end — hooks, pacing, sound design, and thumbnails.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Results</div>
              <ul className="mt-3 space-y-2 text-sm">
                <li>→ 20× lift in average views per post</li>
                <li>→ 4.1M followers gained across platforms</li>
                <li>→ 3× increase in inbound leads</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <blockquote className="rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed">
              "The team at Lumen felt like a genuine extension of our brand. The bar they hold is unreal."
              <div className="mt-4 text-xs text-muted-foreground">— Amara Okafor, Head of Content</div>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { n: 250, s: "+", label: "Projects Completed" },
    { n: 50, s: "M+", label: "Views Generated" },
    { n: 100, s: "+", label: "Happy Clients" },
    { n: 98, s: "%", label: "Client Retention" },
  ];
  return (
    <section className="border-y border-border py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="text-center md:text-left">
              <div className="text-5xl md:text-6xl font-semibold tracking-tight">
                <Counter to={s.n} suffix={s.s} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-24">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-12 md:p-20 text-center">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative">
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-balance">
            Ready to work together?
          </h2>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            Book a Call <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

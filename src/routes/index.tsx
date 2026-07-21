import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Scissors, Film, Sparkles, Image as ImageIcon,
  Zap, Repeat, Award, User,
  ArrowRight, Star, ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { HeroMockup } from "@/components/site/HeroMockup";
import { Reveal } from "@/components/site/Reveal";
import { PortfolioCard } from "@/components/site/PortfolioCard";
import { QuoteForm } from "@/components/site/QuoteForm";
import { projects } from "@/lib/portfolio";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Lumen Studio — Premium Video Editing for Creators & Brands" },
      { name: "description", content: "High-performance video editing for creators, agencies, and brands that want more views, engagement, and conversions." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <WhyUs />
      <PortfolioPreview />
      <Process />
      <Testimonials />
      <FAQ />
      <QuoteForm />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.04] blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-32 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border glass px-3 py-1 text-xs text-muted-foreground"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Now booking Q1 clients
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-balance leading-[1.02]"
          >
            We turn raw footage <br className="hidden sm:block" />
            into <span className="italic font-light text-muted-foreground">content that sells.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl"
          >
            High-performance video editing for creators, agencies, and brands that want more views,
            engagement, and conversions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Book a Call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-white/5 transition"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
        <HeroMockup />
      </div>
    </section>
  );
}

function TrustedBy() {
  const logos = ["YouTube", "Instagram", "TikTok", "Premiere Pro", "After Effects", "DaVinci", "Meta", "Vimeo"];
  return (
    <section className="border-y border-border py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">
          Trusted by creators & teams worldwide
        </p>
      </div>
      <div className="mt-8 relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((l, i) => (
            <span key={i} className="text-2xl font-semibold text-muted-foreground/60 tracking-tight">
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { icon: Scissors, title: "Short Form Editing", desc: "Scroll-stopping Reels, Shorts, and TikToks engineered for retention and reach." },
    { icon: Film, title: "Long Form Editing", desc: "Podcasts, documentaries, and YouTube videos with cinematic pacing." },
    { icon: Sparkles, title: "Motion Graphics", desc: "Kinetic type, transitions, and VFX that elevate every frame." },
    { icon: ImageIcon, title: "Thumbnail Design", desc: "Click-worthy thumbnails proven to boost CTR by up to 3×." },
  ];
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
      <Reveal>
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Services</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight max-w-2xl">
              Craft that converts. Every frame intentional.
            </h2>
          </div>
        </div>
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {items.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group h-full rounded-2xl border border-border bg-card p-6 hover:border-white/20 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-border flex items-center justify-center">
                <s.icon size={18} />
              </div>
              <h3 className="mt-6 text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  const features = [
    { icon: Zap, title: "Fast Turnaround", desc: "First cut delivered within 24–48 hours." },
    { icon: Repeat, title: "Unlimited Revisions", desc: "We iterate until it's exactly right." },
    { icon: Award, title: "Cinematic Quality", desc: "Broadcast-grade craft on every project." },
    { icon: User, title: "Dedicated Editor", desc: "One consistent creative partner for your brand." },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative aspect-square rounded-3xl border border-border overflow-hidden bg-card">
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_60%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-40 h-40 rounded-full border border-border animate-pulse" />
                <div className="absolute inset-4 rounded-full border border-border" />
                <div className="absolute inset-10 rounded-full bg-white/90 flex items-center justify-center">
                  <Film size={28} className="text-black" />
                </div>
              </div>
            </div>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-white/60"
                style={{ top: `${20 + i * 12}%`, left: `${15 + i * 13}%` }}
              />
            ))}
          </div>
        </Reveal>
        <div>
          <Reveal>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Why Choose Us</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-balance">
              Built for brands that treat video as an asset.
            </h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="flex gap-4">
                  <div className="mt-0.5 w-9 h-9 shrink-0 rounded-lg bg-white/5 border border-border flex items-center justify-center">
                    <f.icon size={16} />
                  </div>
                  <div>
                    <div className="font-medium">{f.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">{f.desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioPreview() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
      <Reveal>
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Selected Work</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">Recent projects.</h2>
          </div>
          <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2">
            View all <ArrowRight size={14} />
          </Link>
        </div>
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 6).map((p, i) => (
          <PortfolioCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", title: "Book a Call", desc: "We understand your brand, goals, and audience." },
    { n: "02", title: "Send Footage", desc: "Upload via our secure portal. Any size, any format." },
    { n: "03", title: "We Edit", desc: "Your dedicated editor crafts your first cut within 48h." },
    { n: "04", title: "You Grow", desc: "Publish, iterate, and watch the numbers move." },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
      <Reveal>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">Process</div>
        <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">Four steps. Zero friction.</h2>
      </Reveal>
      <div className="mt-14 relative grid gap-8 md:grid-cols-4">
        <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.1}>
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-sm font-medium relative z-10">
                {s.n}
              </div>
              <h3 className="mt-6 font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote: "Lumen doesn't just edit — they translate our brand into motion. Every deliverable feels premium.",
      name: "Amara Okafor",
      role: "Head of Content, Northwind",
      initials: "AO",
    },
    {
      quote: "Our Shorts went from 20k to 400k views on average. The editing is a huge part of that lift.",
      name: "Julian Reyes",
      role: "Creator, 1.2M subs",
      initials: "JR",
    },
    {
      quote: "Fast, thoughtful, obsessive about the craft. It genuinely feels like they're part of our team.",
      name: "Sofia Marchetti",
      role: "Founder, Ember Studio",
      initials: "SM",
    },
  ];
  return (
    <section className="py-32 border-y border-border bg-card/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Testimonials</div>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">Loved by discerning teams.</h2>
        </Reveal>
        <div className="mt-14 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="snap-start min-w-[85%] lg:min-w-0 h-full rounded-2xl border border-border bg-background p-8">
                <div className="flex gap-1 text-foreground">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="mt-6 text-lg leading-relaxed text-balance">"{t.quote}"</p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "What's your turnaround time?", a: "Most first cuts are delivered within 24–48 hours depending on length and complexity." },
    { q: "Do you offer revisions?", a: "Yes. All plans include unlimited revisions until you're 100% satisfied." },
    { q: "What editing software do you use?", a: "Adobe Premiere Pro and After Effects primarily, with DaVinci Resolve for color grading." },
    { q: "Can you edit for YouTube Shorts?", a: "Absolutely. Shorts, Reels, and TikToks are one of our specialties." },
    { q: "How do we send footage?", a: "You'll get access to a secure client portal that accepts files of any size." },
    { q: "Do you sign NDAs?", a: "Yes — we're happy to sign your NDA before any files are shared." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="max-w-3xl mx-auto px-6 lg:px-8 py-32">
      <Reveal>
        <div className="text-center">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">FAQ</div>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">Questions, answered.</h2>
        </div>
      </Reveal>
      <div className="mt-14 divide-y divide-border border-y border-border">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="font-medium">{f.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="pb-5 text-muted-foreground text-sm leading-relaxed">{f.a}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-16">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-12 md:p-20 text-center">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
        <div className="relative">
          <Reveal>
            <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-balance">
              Ready to elevate your content?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Book a free 20-minute discovery call. We'll audit your current content and map a path forward.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Book Free Discovery Call
              <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

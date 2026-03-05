// src/pages/Services.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowRight,
  FiCode,
  FiSmartphone,
  FiPenTool,
  FiAperture,
  FiTrendingUp,
  FiCloud,
  FiCpu,
  FiLayers,
  FiSearch,
  FiX,
  FiShield,
  FiCheck,
  FiZap,
} from "react-icons/fi";

import PageWrapper from "../components/layout/PageWrapper";
import ScrollReveal from "../components/ui/ScrollReveal";

/**
 * IMPORTANT:
 * - Routes remain unchanged:
 *   - /services/:id
 * - No dependency on other pages; no external data.
 * - Uses existing PageWrapper + ScrollReveal (won't break app structure).
 */

const allServices = [
  {
    id: "web",
    title: "Web Development",
    desc: "React, Next.js, and Node.js enterprise architectures.",
    icon: FiCode,
    category: "Build",
    tags: ["React", "Next.js", "Node", "APIs", "Performance"],
    highlights: ["Design systems", "SSR/SEO", "Security-ready"],
  },
  {
    id: "app",
    title: "App Development",
    desc: "React Native & Flutter premium mobile experiences.",
    icon: FiSmartphone,
    category: "Build",
    tags: ["React Native", "Flutter", "iOS", "Android", "Offline-first"],
    highlights: ["Motion & polish", "Push + deep links", "Store releases"],
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    desc: "Awwwards-level interface design and user research.",
    icon: FiPenTool,
    category: "Design",
    tags: ["UX", "UI", "Prototyping", "Research", "Accessibility"],
    highlights: ["Flows & wireframes", "High-fidelity UI", "UX audits"],
  },
  {
    id: "branding",
    title: "Branding",
    desc: "Identity systems for billion-dollar visions.",
    icon: FiAperture,
    category: "Design",
    tags: ["Identity", "Guidelines", "Typography", "Tone", "Systems"],
    highlights: ["Brand kit", "Visual language", "Product consistency"],
  },
  {
    id: "seo",
    title: "SEO & Marketing",
    desc: "Data-driven global growth strategies.",
    icon: FiTrendingUp,
    category: "Growth",
    tags: ["SEO", "Analytics", "Content", "CRO", "Performance"],
    highlights: ["Technical SEO", "Tracking setup", "Conversion lift"],
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    desc: "AWS/GCP/Azure deployments & DevOps.",
    icon: FiCloud,
    category: "Infra",
    tags: ["AWS", "GCP", "Azure", "DevOps", "Kubernetes"],
    highlights: ["IaC", "CI/CD", "Observability"],
  },
  {
    id: "ai",
    title: "AI Integration",
    desc: "LLMs, Machine Learning, and automation.",
    icon: FiCpu,
    category: "AI",
    tags: ["LLMs", "RAG", "Agents", "Automation", "MLOps"],
    highlights: ["Guardrails", "Eval + monitoring", "Human-in-loop"],
  },
  {
    id: "enterprise",
    title: "Enterprise Software",
    desc: "Custom ERP and CRM systems.",
    icon: FiLayers,
    category: "Enterprise",
    tags: ["ERP", "CRM", "Workflows", "RBAC", "Integrations"],
    highlights: ["Audit logs", "Role-based access", "Scale & maintainability"],
  },
];

const categories = ["All", "Build", "Design", "Growth", "Infra", "AI", "Enterprise"];

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Pill({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all",
        "border backdrop-blur-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
        active
          ? "bg-white text-black border-white/60 shadow-[0_14px_45px_rgba(255,255,255,0.10)]"
          : "bg-white/7 text-white/80 border-white/12 hover:bg-white/10 hover:border-white/20"
      )}
    >
      {children}
    </button>
  );
}

function IOSCard({ children, className = "" }) {
  return (
    <div className={cx("ios-card ios-card--border ios-noise", className)}>
      {children}
    </div>
  );
}

export default function Services() {
  const reduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return allServices.filter((s) => {
      const matchCategory = activeCategory === "All" ? true : s.category === activeCategory;

      if (!q) return matchCategory;

      const hay = [
        s.title,
        s.desc,
        s.category,
        ...(s.tags || []),
        ...(s.highlights || []),
        s.id,
      ]
        .join(" ")
        .toLowerCase();

      return matchCategory && hay.includes(q);
    });
  }, [activeCategory, query]);

  const featured = useMemo(() => {
    // Keep stable: pick deterministic items that already exist (won’t break links)
    const ids = new Set(["web", "ai", "cloud"]);
    return allServices.filter((s) => ids.has(s.id));
  }, []);

  return (
    <PageWrapper title="Services" description="Our technical services.">
      {/* Local iOS-luxury styling (scoped-ish by class names) */}
      <style>{`
        :root{
          --ios-border: rgba(255,255,255,0.14);
          --ios-border-2: rgba(255,255,255,0.10);
          --ios-shadow-soft: 0 14px 55px rgba(0,0,0,0.40);
        }

        .ios-card{
          background: linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.06));
          border: 1px solid var(--ios-border-2);
          border-radius: 24px;
          box-shadow: var(--ios-shadow-soft);
          backdrop-filter: blur(18px) saturate(160%);
          -webkit-backdrop-filter: blur(18px) saturate(160%);
          position: relative;
          overflow: hidden;
        }

        .ios-card--border:before{
          content: "";
          position: absolute;
          inset: 0;
          padding: 1px;
          border-radius: 24px;
          background: linear-gradient(135deg,
            rgba(124,58,237,0.52),
            rgba(34,211,238,0.30),
            rgba(255,255,255,0.14)
          );
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0.65;
        }

        .ios-noise{
          position: relative;
        }
        .ios-noise:after{
          content:"";
          position:absolute;
          inset:0;
          pointer-events:none;
          background-image: radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 3px 3px;
          opacity: 0.08;
          mix-blend-mode: overlay;
        }

        .ios-gradient-text{
          background: linear-gradient(90deg,
            rgba(255,255,255,0.95),
            rgba(34,211,238,0.95),
            rgba(124,58,237,0.95),
            rgba(255,255,255,0.95)
          );
          background-size: 240% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: iosShine 10s ease-in-out infinite;
        }
        @keyframes iosShine{
          0%{ background-position: 0% 50%;}
          50%{ background-position: 100% 50%;}
          100%{ background-position: 0% 50%;}
        }

        .ios-hairline{
          height: 1px;
          background: linear-gradient(90deg,
            rgba(255,255,255,0),
            rgba(255,255,255,0.12),
            rgba(255,255,255,0)
          );
        }
      `}</style>

      {/* HERO */}
      <section className="relative overflow-hidden -mt-24">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_-20%,rgba(124,58,237,0.28),transparent_60%),radial-gradient(900px_540px_at_20%_20%,rgba(34,211,238,0.18),transparent_55%),radial-gradient(1000px_680px_at_90%_30%,rgba(255,255,255,0.07),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70" />

        <div className="relative container mx-auto px-6 pt-28 md:pt-32 pb-16 md:pb-20">
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/80 bg-white/7 border border-white/12 backdrop-blur-xl">
                <FiShield />
                Enterprise-ready delivery
              </span>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/80 bg-white/7 border border-white/12 backdrop-blur-xl">
                <FiZap />
                Premium UI craft
              </span>
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/80 bg-white/7 border border-white/12 backdrop-blur-xl">
                <FiCheck />
                Production discipline
              </span>
            </div>

            <div className="max-w-4xl">
              <motion.h1
                initial={reduceMotion ? false : { opacity: 0, y: 14, filter: "blur(6px)" }}
                animate={reduceMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white"
              >
                Capabilities<span className="text-white/60">.</span>
                <span className="block mt-3 text-2xl md:text-3xl font-semibold">
                  <span className="ios-gradient-text">Luxury-grade</span>{" "}
                  <span className="text-white/75">engineering across product, cloud, and AI.</span>
                </span>
              </motion.h1>

              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.75 }}
                className="mt-6 text-base md:text-lg text-white/65 leading-relaxed max-w-3xl"
              >
                Choose a service to view details. Everything here routes to
                <span className="text-white/80"> /services/:id </span>
                so your navigation stays intact.
              </motion.p>
            </div>

            {/* Search + filters */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 items-start">
              <div className="ios-card ios-card--border p-4 md:p-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xl flex items-center justify-center">
                    <FiSearch className="text-white/85" />
                  </div>

                  <div className="flex-1">
                    <label className="sr-only" htmlFor="service-search">
                      Search services
                    </label>
                    <input
                      id="service-search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search: React, Cloud, UX, ERP, RAG..."
                      className="w-full bg-transparent text-white placeholder:text-white/35 outline-none text-base md:text-lg"
                    />
                  </div>

                  {query ? (
                    <button
                      type="button"
                      onClick={() => setQuery("")}
                      className="w-10 h-10 rounded-full bg-white/8 border border-white/12 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center"
                      aria-label="Clear search"
                    >
                      <FiX className="text-white/75" />
                    </button>
                  ) : null}
                </div>

                <div className="mt-5 ios-hairline" />

                <div className="mt-4 flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <Pill
                      key={cat}
                      active={activeCategory === cat}
                      onClick={() => setActiveCategory(cat)}
                    >
                      {cat}
                    </Pill>
                  ))}
                </div>
              </div>

              <div className="ios-card ios-card--border p-5 md:p-6">
                <div className="text-sm text-white/55 tracking-[0.25em] uppercase">
                  Results
                </div>
                <div className="mt-2 text-3xl md:text-4xl font-bold text-white tracking-tight">
                  {filtered.length}
                </div>
                <div className="mt-2 text-white/60">
                  Matching services
                </div>
                <div className="mt-5 ios-hairline" />
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center justify-center gap-2 w-full rounded-full px-5 py-3 font-semibold bg-white text-black hover:translate-y-[-1px] transition-all"
                >
                  Start a Project <FiArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED STRIP */}
      <section className="container mx-auto px-6 py-14 md:py-16">
        <ScrollReveal>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="text-sm text-white/55 tracking-[0.25em] uppercase">
                Featured
              </div>
              <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
                High-demand lanes<span className="text-white/60">.</span>
              </h2>
            </div>

            <div className="text-white/60 max-w-xl">
              The most requested transformations: modern web platforms, AI workflows, and cloud-native reliability.
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featured.map((srv, idx) => {
            const Icon = srv.icon || FiCode;

            return (
              <ScrollReveal key={srv.id} delay={idx * 0.08} width="100%">
                <Link to={`/services/${srv.id}`} className="block h-full">
                  <motion.div
                    whileHover={reduceMotion ? {} : { y: -5 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    className="h-full"
                  >
                    <IOSCard className="p-8 md:p-9 h-full">
                      <div className="flex items-start justify-between gap-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xl flex items-center justify-center">
                            <Icon className="text-white/90 text-xl" />
                          </div>
                          <div>
                            <div className="text-sm text-white/55 tracking-[0.22em] uppercase">
                              {srv.category}
                            </div>
                            <h3 className="mt-2 text-2xl md:text-3xl font-bold text-white tracking-tight">
                              {srv.title}
                            </h3>
                          </div>
                        </div>

                        <div className="w-11 h-11 rounded-full bg-white/10 border border-white/15 backdrop-blur-xl flex items-center justify-center">
                          <FiArrowRight className="text-white/85 text-xl" />
                        </div>
                      </div>

                      <p className="mt-5 text-white/60 leading-relaxed">
                        {srv.desc}
                      </p>

                      <div className="mt-7 flex flex-wrap gap-2">
                        {(srv.tags || []).slice(0, 5).map((t) => (
                          <span
                            key={t}
                            className="text-xs md:text-sm text-white/70 px-3 py-1.5 rounded-full bg-white/7 border border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 ios-hairline" />
                      <div className="mt-5 text-sm text-white/65 inline-flex items-center gap-2">
                        View service details <FiArrowRight className="opacity-85" />
                      </div>
                    </IOSCard>
                  </motion.div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ALL SERVICES GRID */}
      <section className="container mx-auto px-6 pb-24 md:pb-28">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <ScrollReveal>
            <div>
              <div className="text-sm text-white/55 tracking-[0.25em] uppercase">
                All services
              </div>
              <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
                Everything we ship<span className="text-white/60">.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="text-white/60">
            Click any card → routes to{" "}
            <span className="text-white/75 font-medium">/services/&lt;id&gt;</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {filtered.map((srv, idx) => {
            const Icon = srv.icon || FiCode;

            return (
              <ScrollReveal key={srv.id} delay={idx * 0.06} width="100%">
                <Link
                  to={`/services/${srv.id}`}
                  className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-[24px]"
                  aria-label={`Open ${srv.title}`}
                >
                  <motion.div
                    whileHover={reduceMotion ? {} : { y: -6 }}
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                    className="h-full"
                  >
                    <IOSCard className="p-8 h-full">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xl flex items-center justify-center">
                            <Icon className="text-white/90 text-xl" />
                          </div>

                          <div>
                            <div className="text-xs text-white/55 tracking-[0.22em] uppercase">
                              {srv.category}
                            </div>
                            <h3 className="mt-2 text-2xl font-bold text-white tracking-tight">
                              {srv.title}
                            </h3>
                          </div>
                        </div>

                        <div className="opacity-90">
                          <div className="w-11 h-11 rounded-full bg-white/10 border border-white/15 backdrop-blur-xl flex items-center justify-center transition-all">
                            <FiArrowRight className="text-white/85 text-xl" />
                          </div>
                        </div>
                      </div>

                      <p className="mt-4 text-white/60 leading-relaxed">
                        {srv.desc}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {(srv.tags || []).slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="text-xs text-white/70 px-3 py-1.5 rounded-full bg-white/7 border border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="mt-7 ios-hairline" />

                      <ul className="mt-6 space-y-2">
                        {(srv.highlights || []).slice(0, 3).map((h) => (
                          <li key={h} className="text-sm text-white/65 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/75" />
                            {h}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-7 inline-flex items-center gap-2 text-sm text-white/70">
                        Open details <FiArrowRight className="opacity-85" />
                      </div>
                    </IOSCard>
                  </motion.div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Empty state */}
        {filtered.length === 0 ? (
          <div className="mt-12">
            <IOSCard className="p-10 text-center">
              <div className="text-2xl font-bold text-white">No matches</div>
              <p className="mt-3 text-white/60">
                Try a different keyword or reset filters.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="rounded-full px-5 py-3 bg-white text-black font-semibold"
                >
                  Clear search
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory("All")}
                  className="rounded-full px-5 py-3 bg-white/10 text-white font-semibold border border-white/15"
                >
                  Reset category
                </button>
              </div>
            </IOSCard>
          </div>
        ) : null}
      </section>

      {/* CTA BILLBOARD */}
      <section className="px-6 pb-24 md:pb-28">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(900px_420px_at_20%_30%,rgba(34,211,238,0.18),transparent_60%),radial-gradient(900px_420px_at_80%_40%,rgba(124,58,237,0.22),transparent_60%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] backdrop-blur-xl shadow-[0_30px_120px_rgba(0,0,0,0.55)]">
            <div className="absolute inset-0 ios-noise" />
            <div className="relative p-10 md:p-14">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/80 bg-white/7 border border-white/12 backdrop-blur-xl">
                    <FiZap />
                    Let’s build something premium
                  </div>

                  <h3 className="mt-6 text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
                    Want a delivery plan{" "}
                    <span className="ios-gradient-text">within 24 hours</span>
                    <span className="text-white/60">?</span>
                  </h3>

                  <p className="mt-5 text-white/65 text-base md:text-lg leading-relaxed">
                    Tell us what you’re building. We’ll recommend the right service lane,
                    architecture approach, and a clean execution timeline.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 bg-white text-black font-semibold hover:translate-y-[-1px] transition-all"
                    >
                      Talk to us <FiArrowRight />
                    </Link>

                    <Link
                      to="/services/web"
                      className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 bg-white/10 text-white font-semibold border border-white/15 hover:bg-white/14 hover:border-white/25 transition-all"
                    >
                      Start with Web <FiArrowRight className="opacity-85" />
                    </Link>
                  </div>
                </div>

                <div className="w-full lg:w-[420px] grid gap-4">
                  <IOSCard className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="text-white/85 font-semibold">Quality gates</div>
                      <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                        <FiShield className="text-white/85" />
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {["Reviews", "CI checks", "Perf budgets", "SLOs"].map((g) => (
                        <div
                          key={g}
                          className="rounded-2xl bg-white/7 border border-white/10 px-3 py-3 text-sm text-white/70"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/75" />
                            {g}
                          </div>
                        </div>
                      ))}
                    </div>
                  </IOSCard>

                  <IOSCard className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="text-white/85 font-semibold">Stack-ready</div>
                      <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                        <FiCode className="text-white/85" />
                      </div>
                    </div>
                    <p className="mt-4 text-white/60 leading-relaxed">
                      TypeScript-first, modern UI patterns, and cloud-native operations—default.
                    </p>
                  </IOSCard>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center text-white/40 text-sm">
            Services index is fully self-contained and keeps all route connections intact.
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
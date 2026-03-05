// src/pages/Home.jsx
import React, { useMemo, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCloud,
  FiCpu,
  FiGlobe,
  FiShield,
  FiSmartphone,
  FiZap,
  FiCheck,
} from "react-icons/fi";

import PageWrapper from "../components/layout/PageWrapper";
import ParticleBackground from "../components/3d/ParticleBackground";
import ScrollReveal from "../components/ui/ScrollReveal";

/**
 * iOS-luxury Home (glass + depth + subtle motion + premium spacing).
 * Keeps existing routes:
 * - /contact
 * - /services/:id
 */

const services = [
  {
    id: "web",
    title: "Enterprise Web",
    desc: "Scalable architectures built for millions.",
    icon: FiGlobe,
    chips: ["Microservices", "Performance", "Design systems"],
  },
  {
    id: "ai",
    title: "AI Integration",
    desc: "Automate intelligence into your workflows.",
    icon: FiCpu,
    chips: ["RAG", "Agents", "MLOps"],
  },
  {
    id: "cloud",
    title: "Cloud Native",
    desc: "AWS/GCP infrastructure deployments.",
    icon: FiCloud,
    chips: ["Kubernetes", "IaC", "Observability"],
  },
  {
    id: "app",
    title: "Mobile Apps",
    desc: "iOS and Android premium experiences.",
    icon: FiSmartphone,
    chips: ["Swift/Android", "Animations", "Offline-first"],
  },
];

const stats = [
  { label: "Projects Delivered", val: "500+" },
  { label: "Enterprise Clients", val: "50+" },
  { label: "Uptime SLA", val: "99.9%" },
  { label: "Global Reach", val: "Worldwide" },
];

const testimonials = [
  {
    quote:
      "Their engineering quality feels like an internal platform team—fast, disciplined, and production-first.",
    name: "VP Engineering",
    org: "FinTech (Series C)",
  },
  {
    quote:
      "We shipped an enterprise-grade UI redesign without regressions. The attention to motion + UX detail is rare.",
    name: "Head of Product",
    org: "Global SaaS",
  },
  {
    quote:
      "Cloud rollout + observability was clean. We hit 99.95% and cut incident time with better telemetry.",
    name: "Platform Lead",
    org: "Healthcare",
  },
];

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MotionLink = motion.create(Link);

function IOSButton({
  to,
  children,
  variant = "primary",
  className = "",
  rightIcon = null,
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 md:px-7 md:py-4 font-semibold tracking-tight " +
    "transition-all duration-300 will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40";

  const primary =
    "bg-white text-black hover:translate-y-[-1px] hover:shadow-[0_18px_50px_rgba(255,255,255,0.16)] active:translate-y-[0px]";
  const secondary =
    "bg-white/10 text-white border border-white/15 backdrop-blur-xl hover:bg-white/14 hover:border-white/25";
  const ghost =
    "bg-transparent text-white border border-white/15 hover:bg-white/8 hover:border-white/25";

  const styles =
    variant === "primary" ? primary : variant === "secondary" ? secondary : ghost;

  return (
    <Link to={to} className={cx(base, styles, className)}>
      {children}
      {rightIcon}
    </Link>
  );
}

function IOSPill({ children, className = "" }) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/90 " +
          "bg-white/10 border border-white/15 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.25)]",
        className
      )}
    >
      {children}
    </span>
  );
}

function IOSCard({ children, className = "" }) {
  return (
    <div className={cx("ios-card ios-card--border", className)}>{children}</div>
  );
}

function SectionHeading({ eyebrow, title, desc }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <div className="mb-4">
          <IOSPill>
            <FiZap className="opacity-90" />
            <span className="tracking-wide">{eyebrow}</span>
          </IOSPill>
        </div>
      ) : null}

      <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-white">
        {title}
      </h2>

      {desc ? (
        <p className="mt-5 text-base md:text-lg text-white/65 leading-relaxed">
          {desc}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef(null);

  // subtle parallax for hero glow
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 120]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1, 0.25]);

  const orbit = useMemo(
    () => ({
      floatA: reduceMotion
        ? {}
        : {
            animate: { y: [0, -14, 0], x: [0, 10, 0] },
            transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          },
      floatB: reduceMotion
        ? {}
        : {
            animate: { y: [0, 12, 0], x: [0, -8, 0] },
            transition: { duration: 8.5, repeat: Infinity, ease: "easeInOut" },
          },
    }),
    [reduceMotion]
  );

  return (
    <PageWrapper
      title="Global Tech Services"
      description="World-class enterprise digital transformation."
    >
      {/* Local premium iOS-like theme tokens */}
      <style>{`
        :root{
          --ios-bg: #05060a;
          --ios-surface: rgba(255,255,255,0.08);
          --ios-surface-2: rgba(255,255,255,0.06);
          --ios-border: rgba(255,255,255,0.14);
          --ios-border-2: rgba(255,255,255,0.10);
          --ios-text-dim: rgba(255,255,255,0.65);
          --ios-shadow: 0 18px 60px rgba(0,0,0,0.50);
          --ios-shadow-soft: 0 12px 45px rgba(0,0,0,0.35);
          --ios-accent: #7c3aed; /* violet */
          --ios-accent-2: #22d3ee; /* cyan */
          --ios-accent-3: #a3ff12; /* neon-lime (subtle use) */
        }

        /* Premium glass card */
        .ios-card{
          background: linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.06));
          border: 1px solid var(--ios-border-2);
          border-radius: 24px;
          box-shadow: var(--ios-shadow-soft);
          backdrop-filter: blur(18px) saturate(160%);
          -webkit-backdrop-filter: blur(18px) saturate(160%);
        }

        /* Gradient border ring (iOS-ish) */
        .ios-card--border{
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
            rgba(124,58,237,0.55),
            rgba(34,211,238,0.35),
            rgba(255,255,255,0.16)
          );
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0.65;
        }

        /* Luxury noise (very subtle) */
        .ios-noise{
          position: relative;
        }
        .ios-noise:after{
          content:"";
          position:absolute;
          inset:0;
          pointer-events:none;
          background-image:
            radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 3px 3px;
          opacity: 0.08;
          mix-blend-mode: overlay;
        }

        /* Gradient text shine */
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
          animation: iosShine 9s ease-in-out infinite;
        }
        @keyframes iosShine{
          0%{ background-position: 0% 50%;}
          50%{ background-position: 100% 50%;}
          100%{ background-position: 0% 50%;}
        }

        /* iOS-like separator hairline */
        .ios-hairline{
          height: 1px;
          background: linear-gradient(90deg,
            rgba(255,255,255,0),
            rgba(255,255,255,0.12),
            rgba(255,255,255,0)
          );
        }

        /* Subtle “liquid” blob visuals */
        .ios-blob{
          filter: blur(40px);
          opacity: 0.55;
          transform: translateZ(0);
          will-change: transform, opacity;
        }

        /* Horizontal snap carousel */
        .ios-snap{
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
        }
        .ios-snap > *{
          scroll-snap-align: start;
        }
      `}</style>

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-24 bg-[radial-gradient(1200px_700px_at_50%_-10%,rgba(124,58,237,0.28),transparent_60%),radial-gradient(900px_520px_at_20%_20%,rgba(34,211,238,0.18),transparent_55%),radial-gradient(1000px_640px_at_90%_30%,rgba(255,255,255,0.08),transparent_55%)]"
      >
        <ParticleBackground />

        {/* Ambient blobs */}
        <motion.div
          style={{ y: glowY, opacity: glowOpacity }}
          className="absolute inset-0 pointer-events-none"
        >
          <motion.div
            {...orbit.floatA}
            className="absolute -top-12 left-[-120px] w-[420px] h-[420px] rounded-full ios-blob"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(34,211,238,0.55), rgba(124,58,237,0.20), transparent 62%)",
            }}
          />
          <motion.div
            {...orbit.floatB}
            className="absolute top-[18%] right-[-140px] w-[520px] h-[520px] rounded-full ios-blob"
            style={{
              background:
                "radial-gradient(circle at 35% 35%, rgba(124,58,237,0.55), rgba(34,211,238,0.18), transparent 62%)",
            }}
          />
          <div
            className="absolute bottom-[-240px] left-[20%] w-[700px] h-[700px] rounded-full ios-blob"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18), rgba(34,211,238,0.12), transparent 62%)",
            }}
          />
        </motion.div>

        <div className="relative z-10 px-6 max-w-6xl mx-auto w-full">
          {/* Top mini iOS bar */}
          <div className="flex items-center justify-center mb-8">
            <IOSPill className="ios-noise">
              <FiShield />
              <span className="text-white/85">
                Enterprise-grade delivery • Security-first • Design-forward
              </span>
            </IOSPill>
          </div>

          <div className="text-center">
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 18, filter: "blur(6px)" }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white"
            >
              Engineer the{" "}
              <span className="ios-gradient-text">Future.</span>
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="mt-6 text-base md:text-xl text-white/65 max-w-3xl mx-auto leading-relaxed"
            >
              Silicon Valley-grade full-stack architecture, UI/UX, and cloud deployments
              for global enterprises—built with production discipline and premium craft.
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <IOSButton
                to="/contact"
                variant="primary"
                rightIcon={<FiArrowRight />}
                className="min-w-[210px]"
              >
                Start a Project
              </IOSButton>

              <IOSButton
                to="/services/web"
                variant="secondary"
                rightIcon={<FiArrowRight className="opacity-90" />}
                className="min-w-[210px]"
              >
                Explore Services
              </IOSButton>
            </motion.div>

            {/* Hero feature chips */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={reduceMotion ? {} : { opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.9 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              {[
                { icon: FiCheck, label: "Design systems + motion" },
                { icon: FiCheck, label: "Cloud-native delivery" },
                { icon: FiCheck, label: "Security & compliance-ready" },
                { icon: FiCheck, label: "Observability by default" },
              ].map((item, i) => (
                <IOSPill key={i} className="bg-white/8 border-white/12">
                  <item.icon className="opacity-85" />
                  <span className="text-white/75">{item.label}</span>
                </IOSPill>
              ))}
            </motion.div>
          </div>

          {/* Bottom “scroll hint” */}
          <div className="mt-16 flex justify-center">
            <div className="w-24 h-10 rounded-full border border-white/15 bg-white/6 backdrop-blur-xl flex items-center justify-center">
              <motion.div
                initial={reduceMotion ? false : { y: -2, opacity: 0.6 }}
                animate={reduceMotion ? {} : { y: [ -2, 4, -2 ], opacity: [0.55, 1, 0.55] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 rounded-full bg-white/80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-28 md:py-32 px-6 container mx-auto">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Expertise"
            title={
              <>
                Luxury-grade execution,{" "}
                <span className="text-white/70">enterprise-scale reliability.</span>
              </>
            }
            desc="Every service is built like a product: clear UX, measured performance, predictable operations, and a clean handoff."
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-7">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <ScrollReveal key={srv.id} delay={idx * 0.08} width="100%">
                <MotionLink
                  to={`/services/${srv.id}`}
                  whileHover={reduceMotion ? {} : { y: -4 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="group block"
                >
                  <IOSCard className="p-8 md:p-10 ios-noise">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xl flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                          <Icon className="text-white/90 text-xl" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                            {srv.title}
                          </h3>
                          <p className="mt-2 text-white/60 text-base md:text-lg leading-relaxed">
                            {srv.desc}
                          </p>
                        </div>
                      </div>

                      <div className="shrink-0">
                        <div className="w-12 h-12 rounded-full bg-white/10 border border-white/15 backdrop-blur-xl flex items-center justify-center transition-all duration-300 group-hover:bg-white/14 group-hover:border-white/25">
                          <FiArrowRight className="text-white/85 text-xl transition-transform duration-300 group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {srv.chips.map((c) => (
                        <span
                          key={c}
                          className="text-xs md:text-sm text-white/70 px-3 py-1.5 rounded-full bg-white/8 border border-white/10"
                        >
                          {c}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 ios-hairline" />

                    <div className="mt-6 flex items-center justify-between">
                      <div className="text-sm text-white/55">
                        Built with:{" "}
                        <span className="text-white/75">
                          TypeScript • Modern UI • Cloud Ops
                        </span>
                      </div>
                      <div className="text-sm text-white/65 inline-flex items-center gap-2">
                        View details
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[rgba(34,211,238,0.9)]" />
                      </div>
                    </div>
                  </IOSCard>
                </MotionLink>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* STATS (iOS glass strip) */}
      <section className="py-16 md:py-20 px-6">
        <div className="container mx-auto">
          <div className="ios-card ios-card--border ios-noise px-6 py-10 md:px-10 md:py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((s, i) => (
                <div key={i} className="relative">
                  <div className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                    {s.val}
                  </div>
                  <div className="mt-2 text-xs md:text-sm text-white/55 tracking-[0.25em] uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 ios-hairline" />

            <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="text-white/60 leading-relaxed max-w-2xl">
                We optimize for long-term stability: measurable performance, clean architecture,
                and operational clarity—so your product scales without drama.
              </div>
              <IOSButton
                to="/contact"
                variant="ghost"
                rightIcon={<FiArrowRight className="opacity-90" />}
                className="px-6 py-3"
              >
                Get a delivery plan
              </IOSButton>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES (premium horizontal snap) */}
      <section className="py-24 md:py-28 px-6 container mx-auto">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Selected work"
            title={
              <>
                High-signal outcomes,{" "}
                <span className="text-white/70">not just “features shipped”.</span>
              </>
            }
            desc="A few common transformations we deliver—reliability, performance, conversion, and velocity."
          />
        </ScrollReveal>

        <div className="mt-12 overflow-x-auto ios-snap">
          <div className="flex gap-6 min-w-full pb-2">
            {[
              {
                title: "Platform Re-architecture",
                meta: "Latency ↓ • Throughput ↑ • Incidents ↓",
                points: ["API gateway + services", "Caching strategy", "Observability baseline"],
                glow: "rgba(124,58,237,0.30)",
              },
              {
                title: "AI Workflow Automation",
                meta: "Ops cost ↓ • Quality ↑ • Time-to-answer ↓",
                points: ["RAG + guardrails", "Human-in-the-loop", "Eval + monitoring"],
                glow: "rgba(34,211,238,0.26)",
              },
              {
                title: "Cloud Modernization",
                meta: "Deploys/day ↑ • Reliability ↑",
                points: ["IaC rollout", "K8s + CI/CD", "SLOs + alerting"],
                glow: "rgba(255,255,255,0.14)",
              },
            ].map((c, i) => (
              <div key={i} className="min-w-[88%] sm:min-w-[520px] md:min-w-[620px]">
                <IOSCard className="p-8 md:p-10 ios-noise">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-white/60">{c.meta}</p>
                    </div>
                    <div
                      className="w-14 h-14 rounded-2xl border border-white/12 bg-white/6 backdrop-blur-xl"
                      style={{
                        boxShadow: `0 22px 70px ${c.glow}`,
                      }}
                    />
                  </div>

                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {c.points.map((p) => (
                      <div
                        key={p}
                        className="rounded-2xl bg-white/7 border border-white/10 px-4 py-4 text-white/70"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                          <span className="text-sm md:text-base">{p}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-9 ios-hairline" />

                  <div className="mt-6 flex items-center justify-between text-sm">
                    <span className="text-white/55">Delivery: discovery → build → rollout</span>
                    <span className="text-white/70 inline-flex items-center gap-2">
                      See how we work <FiArrowRight />
                    </span>
                  </div>
                </IOSCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS (iOS timeline cards) */}
      <section className="py-24 md:py-28 px-6 bg-white/3 border-y border-white/5">
        <div className="container mx-auto">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Delivery model"
              title={
                <>
                  Calm process.{" "}
                  <span className="text-white/70">Aggressive execution.</span>
                </>
              }
              desc="No chaos. Clear milestones, fast feedback loops, and production-grade practices from day one."
            />
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Goals, constraints, stakeholders, and success metrics—aligned and documented.",
                icon: FiGlobe,
              },
              {
                step: "02",
                title: "Design + Architecture",
                desc: "UI/UX system, API contracts, data model, and deployment plan.",
                icon: FiZap,
              },
              {
                step: "03",
                title: "Build + QA",
                desc: "Iteration with CI, tests, reviews, staging, and performance budgets.",
                icon: FiShield,
              },
              {
                step: "04",
                title: "Launch + Operate",
                desc: "SLOs, dashboards, alerts, and continuous optimization.",
                icon: FiCloud,
              },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <ScrollReveal key={p.step} delay={i * 0.06} width="100%">
                  <IOSCard className="p-7 md:p-8 ios-noise h-full">
                    <div className="flex items-center justify-between">
                      <div className="text-white/55 tracking-[0.35em] text-xs uppercase">
                        {p.step}
                      </div>
                      <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xl flex items-center justify-center">
                        <Icon className="text-white/85" />
                      </div>
                    </div>
                    <h3 className="mt-6 text-xl md:text-2xl font-bold text-white tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-white/60 leading-relaxed">{p.desc}</p>
                    <div className="mt-6 ios-hairline" />
                    <div className="mt-5 text-sm text-white/65 inline-flex items-center gap-2">
                      Output-ready artifacts <FiArrowRight className="opacity-85" />
                    </div>
                  </IOSCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-28 px-6 container mx-auto">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Trust"
            title={
              <>
                Built for teams that{" "}
                <span className="text-white/70">care about quality.</span>
              </>
            }
            desc="If you want premium UX + serious engineering under one roof—this is the lane."
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.08} width="100%">
              <IOSCard className="p-8 ios-noise h-full">
                <div className="text-white/80 text-lg leading-relaxed">
                  “{t.quote}”
                </div>
                <div className="mt-8 ios-hairline" />
                <div className="mt-6">
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-sm text-white/55">{t.org}</div>
                </div>
              </IOSCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* FINAL CTA (luxury glass billboard) */}
      <section className="py-24 md:py-28 px-6">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(800px_340px_at_20%_30%,rgba(34,211,238,0.18),transparent_60%),radial-gradient(900px_420px_at_80%_40%,rgba(124,58,237,0.22),transparent_60%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] backdrop-blur-xl shadow-[0_30px_120px_rgba(0,0,0,0.55)]">
            <div className="absolute inset-0 ios-noise" />

            <div className="relative p-10 md:p-14">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
                <div className="max-w-2xl">
                  <IOSPill className="bg-white/8 border-white/12">
                    <FiZap />
                    <span className="text-white/80">Ready when you are</span>
                  </IOSPill>

                  <h3 className="mt-6 text-3xl md:text-5xl font-display font-bold tracking-tight text-white">
                    Build something{" "}
                    <span className="ios-gradient-text">unreasonably good.</span>
                  </h3>

                  <p className="mt-5 text-white/65 text-base md:text-lg leading-relaxed">
                    Share your goals. We’ll respond with a lean plan: scope, architecture,
                    timeline, and a delivery approach you can trust.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <IOSButton
                      to="/contact"
                      variant="primary"
                      rightIcon={<FiArrowRight />}
                      className="min-w-[220px]"
                    >
                      Book a Call
                    </IOSButton>
                    <IOSButton
                      to="/services/web"
                      variant="secondary"
                      rightIcon={<FiArrowRight className="opacity-90" />}
                      className="min-w-[220px]"
                    >
                      Browse Services
                    </IOSButton>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-3">
                    {["NDA-friendly", "Fixed-scope or retainer", "Weekly demos"].map((x) => (
                      <IOSPill key={x} className="bg-white/7 border-white/10 text-white/80">
                        <FiCheck className="opacity-85" />
                        <span className="text-white/70">{x}</span>
                      </IOSPill>
                    ))}
                  </div>
                </div>

                {/* Right side: “iOS” stacked mini cards */}
                <div className="w-full lg:w-[420px] grid gap-4">
                  <IOSCard className="p-6 ios-noise">
                    <div className="flex items-center justify-between">
                      <div className="text-white/85 font-semibold">Typical engagement</div>
                      <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                        <FiShield className="text-white/85" />
                      </div>
                    </div>
                    <div className="mt-4 text-white/60 leading-relaxed">
                      Discovery (1–2w) → Build (4–10w) → Launch + Operate
                    </div>
                  </IOSCard>

                  <IOSCard className="p-6 ios-noise">
                    <div className="flex items-center justify-between">
                      <div className="text-white/85 font-semibold">Quality gates</div>
                      <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                        <FiZap className="text-white/85" />
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {["Code review", "CI checks", "Perf budgets", "SLOs"].map((g) => (
                        <div
                          key={g}
                          className="rounded-2xl bg-white/7 border border-white/10 px-3 py-3 text-sm text-white/70"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[rgba(34,211,238,0.9)]" />
                            {g}
                          </div>
                        </div>
                      ))}
                    </div>
                  </IOSCard>

                  <IOSCard className="p-6 ios-noise">
                    <div className="flex items-center justify-between">
                      <div className="text-white/85 font-semibold">Response time</div>
                      <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                        <FiArrowRight className="text-white/85" />
                      </div>
                    </div>
                    <div className="mt-4 text-white/60 leading-relaxed">
                      We usually reply within{" "}
                      <span className="text-white/80 font-semibold">24 hours</span> with next
                      steps.
                    </div>
                  </IOSCard>
                </div>
              </div>
            </div>
          </div>

          {/* Small footer line (home-only) */}
          <div className="mt-10 text-center text-white/40 text-sm">
            Premium engineering • iOS-grade UI craft • Cloud-native operations
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
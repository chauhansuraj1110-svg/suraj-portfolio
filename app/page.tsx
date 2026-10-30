"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Cloud,
  Database,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
  X
} from "lucide-react";

// ==========================================
// DATA: TECHNICAL SKILLS & TOOLS
// ==========================================
const skills = [
  {
    title: "Relational Databases",
    icon: Database,
    items: [
      "MySQL & MySQL Workbench",
      "PostgreSQL",
      "Query optimization & execution plans",
      "Stored procedures, functions & triggers",
      "Views, indexes & schema constraints"
    ]
  },
  {
    title: "NoSQL & In-Memory",
    icon: Database,
    items: [
      "MongoDB (document database)",
      "Redis (in-memory caching & key-value)",
      "Data structures & key management",
      "Performance acceleration"
    ]
  },
  {
    title: "SQL Operations",
    icon: Wrench,
    items: [
      "DDL, DML, DQL, DCL & TCL",
      "Complex joins, subqueries & transactions",
      "Data migration & validation routines"
    ]
  },
  {
    title: "Cloud & Monitoring",
    icon: Cloud,
    items: [
      "AWS CloudWatch",
      "Datadog",
      "Uptime & performance monitoring"
    ]
  },
  {
    title: "API Testing & Tools",
    icon: ShieldCheck,
    items: [
      "Postman",
      "Endpoint validation",
      "Database-connected workflows"
    ]
  },
  {
    title: "Core DBA Practices",
    icon: BadgeCheck,
    items: [
      "Backup & recovery routines",
      "User access & role security",
      "Performance tuning & health checks",
      "Documentation & patching"
    ]
  }
];

// ==========================================
// DATA: PRACTICAL CASE STUDIES / PROJECTS
// ==========================================
const projects = [
  {
    tag: "Database Performance",
    title: "SQL Query Optimization & Latency Tuning",
    icon: Database,
    problem:
      "Critical customer search and filtering queries were performing slow full-table scans across 500K+ records, causing high server CPU spikes and 2.4s latency.",
    solution: [
      "Analyzed query execution plans using EXPLAIN to spot filesorts, temporary tables, and unindexed scans.",
      "Engineered composite indexes on high-cardinality filtering and sorting columns.",
      "Refactored complex nested subqueries into clean INNER JOIN operations to minimize memory usage."
    ],
    result:
      "Dropped query execution time from 2.4s to under 45ms (over 90% latency reduction) with zero full-table scans.",
    stack: ["MySQL", "EXPLAIN Plan", "Composite Indexing", "Query Profiling"]
  },
  {
    tag: "Reliability & DR",
    title: "Database Backup Automation & Restore Drills",
    icon: ShieldCheck,
    problem:
      "Risk of unverified backup files and prolonged downtime during potential hardware failures or accidental data loss.",
    solution: [
      "Configured scheduled logical and physical backups with compression and retention rules.",
      "Established routine Disaster Recovery (DR) restoration drills into isolated staging test databases.",
      "Implemented post-restore validation: verifying row counts, schema checksums, and application connectivity."
    ],
    result:
      "Established a verified Zero Data Loss recovery procedure with end-to-end database restores under 15 minutes.",
    stack: ["MySQL", "mysqldump", "Disaster Recovery", "Data Verification"]
  },
  {
    tag: "Security & Governance",
    title: "Role-Based Access Control & Privilege Auditing",
    icon: ShieldCheck,
    problem:
      "Broad administrative privileges and shared database credentials posing security and compliance vulnerabilities.",
    solution: [
      "Enforced the Principle of Least Privilege (PoLP) across Development, Staging, and Production databases.",
      "Configured granular roles using MySQL DCL (GRANT, REVOKE) for applications, analysts, and developers.",
      "Conducted regular access audits to remove stale users, lock default accounts, and enforce credential policies."
    ],
    result:
      "Restricted schema modification rights strictly to authorized roles and eliminated unmonitored administrative access.",
    stack: ["MySQL", "DCL (GRANT / REVOKE)", "Role-Based Access (RBAC)", "Security Audits"]
  },
  {
    tag: "Operational Reporting",
    title: "Daily Order Reporting & Data Reconciliation",
    icon: BriefcaseBusiness,
    problem:
      "Business teams spent hours manually extracting and collating fragmented order spreadsheets, leading to reconciliation errors.",
    solution: [
      "Authored multi-table aggregated SQL queries with date-range filters and conditional business logic.",
      "Structured and exported normalized order datasets into clean, reliable Excel reports.",
      "Built validation checks comparing aggregated report totals against transactional ledger records."
    ],
    result:
      "Replaced hours of manual collation with a repeatable, reliable SQL reporting process with 100% data accuracy.",
    stack: ["SQL", "MySQL", "Excel Exports", "Data Reconciliation"]
  }
];

// ==========================================
// DATA: PROFESSIONAL WORK EXPERIENCE
// ==========================================
const experience = [
  {
    type: "Current Role · Full-Time",
    typeBadgeColor: "bg-blue-600 text-white shadow-sm",
    cardBorder:
      "border-blue-300 bg-gradient-to-br from-white via-blue-50/20 to-white shadow-md ring-1 ring-blue-500/10",
    role: "Junior Database Administrator",
    company: "One Portfolio Advisory Pvt Ltd",
    location: "Mumbai, India",
    dates: "Sep 2025 — Present",
    description:
      "Serving as a Junior Database Administrator for a financial advisory firm, taking ownership of live database reliability, role-based access security, query performance, and active system monitoring across cloud tools.",
    skillsAcquired: [
      "MySQL & PostgreSQL",
      "MongoDB",
      "Redis",
      "AWS CloudWatch",
      "Datadog",
      "User Access & Permissions",
      "Postman API Validation",
      "Query Optimization"
    ],
    highlights: [
      {
        label: "Production Reliability & Security",
        detail:
          "Manage user roles, accounts, and access permissions to safeguard sensitive financial data; support backup, restore, and disaster-recovery processes to ensure minimal downtime."
      },
      {
        label: "Monitoring & Observability",
        detail:
          "Monitor database and infrastructure health proactively using AWS CloudWatch and Datadog, identifying bottlenecks and resolving issues before they impact business operations."
      },
      {
        label: "Operational SQL & API Testing",
        detail:
          "Write and optimize complex SQL queries for business reporting and daily analysis; validate database-connected API endpoints with Postman."
      }
    ]
  },
  {
    type: "Internship · Foundational DBA",
    typeBadgeColor: "bg-slate-100 text-slate-700 border border-slate-200",
    cardBorder: "border-slate-200 bg-white shadow-soft",
    role: "Intern — Database Admin",
    company: "Adinid Digital Automation Pvt Ltd",
    location: "Faridabad, India",
    dates: "Aug 2024 — Sep 2025",
    description:
      "Built strong practical fundamentals in relational databases: designing schemas, authoring stored procedures, triggers, views, managing constraints, and handling database migrations.",
    skillsAcquired: [
      "MySQL Workbench",
      "Stored Procedures & Functions",
      "Triggers & Views",
      "DDL / DML / DCL / TCL",
      "Data Migration",
      "Technical Documentation"
    ],
    highlights: [
      {
        label: "Database Development & Logic",
        detail:
          "Designed and maintained stored procedures, functions, and triggers to automate recurring business calculations and database processes."
      },
      {
        label: "Schema Design & Constraints",
        detail:
          "Created and managed views, primary/foreign key constraints, and indexes; wrote complex SQL joins, subqueries, and transactional operations."
      },
      {
        label: "Installation & Routine Maintenance",
        detail:
          "Installed and configured MySQL databases via MySQL Workbench; assisted with data migrations, upgrades, backup scripts, and developer documentation."
      }
    ]
  }
];

// Navigation menu links
const navLinks = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"]
];

// ==========================================
// REUSABLE SUB-COMPONENTS
// ==========================================
function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="mb-2 text-xs font-bold uppercase tracking-[.22em] text-blue-600">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 leading-7 text-slate-600">{description}</p>
      )}
    </div>
  );
}

// ==========================================
// MAIN PORTFOLIO PAGE
// ==========================================
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="overflow-hidden">
      {/* -------------------------------------- */}
      {/* 1. STICKY HEADER & NAVIGATION           */}
      {/* -------------------------------------- */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#091a32]/95 text-white backdrop-blur">
        <div className="container-wide flex h-[72px] items-center justify-between">
          {/* Logo / Brand */}
          <a href="#home" className="group flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition group-hover:scale-105 group-hover:shadow-blue-500/40">
              SC
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base font-bold tracking-tight text-white transition group-hover:text-blue-300">
                Suraj Chauhan
              </span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-blue-300">
                Database Administrator
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop Resume Download */}
          <a
            href="/suraj-chauhan-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Suraj_Chauhan_CV.pdf"
            className="hidden items-center gap-2 rounded-full border border-blue-400 px-4 py-2 text-sm font-semibold hover:bg-blue-500/15 sm:flex"
          >
            <Download size={15} /> Download CV
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 md:hidden"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <nav className="container-wide grid gap-1 pb-4 md:hidden">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-slate-200 hover:bg-white/10"
              >
                {label}
              </a>
            ))}
            <a
              href="/suraj-chauhan-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Suraj_Chauhan_CV.pdf"
              className="mt-2 flex items-center justify-center gap-2 rounded-full border border-blue-400 px-4 py-2 text-sm font-semibold text-blue-200 hover:bg-blue-500/15"
            >
              <Download size={15} /> Download CV
            </a>
          </nav>
        )}
      </header>

      {/* -------------------------------------- */}
      {/* 2. HERO SECTION                        */}
      {/* -------------------------------------- */}
      <section id="home" className="relative bg-[#0b1f3a] text-white">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, #1677d2 0, transparent 30%), radial-gradient(circle at 85% 80%, #174b85 0, transparent 30%)"
          }}
        />
        <div className="container-wide relative grid gap-10 py-16 md:grid-cols-[1.15fr_.85fr] md:items-center md:py-24">
          {/* Left Intro Text */}
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[.16em] text-blue-200">
              <Sparkles size={14} /> Database reliability · SQL · Performance
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              Hi, I&apos;m Suraj<span className="text-blue-400"> Chauhan</span>
            </h1>
            <h2 className="mt-4 text-xl font-semibold text-blue-300 sm:text-2xl">
              Database Administrator
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
              I help keep data reliable, queries efficient, and database-backed
              workflows running smoothly with robust SQL and proactive
              monitoring.
            </p>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-bold shadow-lg shadow-blue-950/30 transition hover:bg-blue-400"
              >
                Explore projects <ArrowUpRight size={16} />
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                Contact me
              </a>
            </div>

            {/* Primary Skill Tags */}
            <div className="mt-9 flex flex-wrap gap-2">
              {[
                "MySQL",
                "PostgreSQL",
                "MongoDB",
                "Redis",
                "SQL Optimization",
                "AWS CloudWatch",
                "Datadog",
                "Postman"
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Portrait Frame */}
          <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[410px]">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-blue-600/30 via-cyan-500/20 to-blue-800/30 blur-2xl opacity-75 -z-10" />

            {/* Image Container Card */}
            <div className="relative rounded-[2.2rem] border border-white/15 bg-white/[.05] p-3 sm:p-3.5 shadow-2xl backdrop-blur-xl">
              <div className="overflow-hidden rounded-[1.6rem] border border-blue-300/30 bg-slate-900 shadow-inner aspect-[3/3.8] sm:aspect-[3/3.9]">
                <img
                  src="/profile.jpg"
                  alt="Suraj Chauhan"
                  className="h-full w-full object-cover object-[center_20%] transition duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------- */}
      {/* 3. ABOUT SECTION                       */}
      {/* -------------------------------------- */}
      <section id="about" className="section-anchor container-wide py-20">
        <SectionHeading
          eyebrow="A little about me"
          title="Turning database work into dependable systems."
          description="I’m a Database Administrator with experience supporting relational and NoSQL databases across business environments. My work spans MySQL, PostgreSQL, MongoDB, Redis, SQL query optimization, backup and recovery, access management, API validation, and proactive database monitoring."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ["~2 years", "Database experience"],
            ["SQL-first", "Querying & troubleshooting"],
            ["Proactive", "Monitoring & reliability"]
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
            >
              <p className="text-2xl font-bold text-blue-600">{value}</p>
              <p className="mt-2 text-sm text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------------------------- */}
      {/* 4. SKILLS & TOOLKIT                    */}
      {/* -------------------------------------- */}
      <section
        id="skills"
        className="section-anchor border-y border-slate-200 bg-white py-20"
      >
        <div className="container-wide">
          <SectionHeading
            eyebrow="Toolkit"
            title="Skills & technologies"
            description="A practical toolkit for database operations, performance, monitoring, and security."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map(({ title, icon: Icon, items }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={22} />
                </div>
                <h3 className="font-bold text-ink">{title}</h3>
                <ul className="mt-3 space-y-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-5 text-slate-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------- */}
      {/* 5. WORK EXPERIENCE TIMELINE            */}
      {/* -------------------------------------- */}
      <section id="experience" className="section-anchor container-wide py-20">
        <SectionHeading
          eyebrow="Career journey"
          title="Experience & Career Progression"
          description="Clear progression from foundational database programming and schema design (as an Intern) to live production administration, security, and cloud monitoring (as a Junior Database Administrator)."
        />

        {/* Quick Comparison Summary Cards */}
        <div className="mb-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-blue-200 bg-blue-50/60 p-5 shadow-sm">
            <div className="flex items-center justify-between gap-2">
              <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Current Role · Junior Database Administrator
              </span>
              <span className="text-xs font-semibold text-blue-700">
                Production & Security
              </span>
            </div>
            <p className="mt-3 text-base font-bold text-ink">
              One Portfolio Advisory Pvt Ltd
            </p>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">
              Focuses on <strong>live production database uptime</strong>,
              role-based access security, cloud observability with{" "}
              <strong>AWS CloudWatch & Datadog</strong>, and Postman API
              validation.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
            <div className="flex items-center justify-between gap-2">
              <span className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-700">
                1-Year Internship · Database Admin
              </span>
              <span className="text-xs font-semibold text-slate-600">
                Development & Schema
              </span>
            </div>
            <p className="mt-3 text-base font-bold text-ink">
              Adinid Digital Automation Pvt Ltd
            </p>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">
              Focused on <strong>MySQL fundamentals</strong>: writing stored
              procedures, triggers, views, query joins, database configuration
              in MySQL Workbench, and backup scripts.
            </p>
          </div>
        </div>

        {/* Detailed Timeline Articles */}
        <div className="relative ml-2 space-y-10 border-l-2 border-blue-100 pl-7">
          {experience.map((job) => (
            <article
              key={job.role}
              className={`relative rounded-3xl border p-6 sm:p-8 transition hover:shadow-lg ${job.cardBorder}`}
            >
              <span className="absolute -left-[35px] top-8 h-4 w-4 rounded-full border-4 border-blue-100 bg-blue-600" />

              {/* Role & Company Header */}
              <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-start">
                <div>
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${job.typeBadgeColor}`}
                  >
                    {job.type}
                  </span>
                  <h3 className="mt-2.5 text-2xl font-bold text-ink">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-base font-semibold text-blue-700">
                    {job.company}
                  </p>
                  <p className="text-xs text-slate-500">{job.location}</p>
                </div>
                <span className="h-fit w-fit rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-bold text-blue-700">
                  {job.dates}
                </span>
              </div>

              {/* Role Summary */}
              <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                  Scope of Work in this Role
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">
                  {job.description}
                </p>
              </div>

              {/* Responsibilities & Highlights */}
              <div className="mt-5 space-y-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Key Responsibilities & Deliverables
                </p>
                <div className="space-y-2.5">
                  {job.highlights.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 text-sm leading-relaxed text-slate-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                      <div>
                        <strong className="font-semibold text-ink">
                          {item.label}:{" "}
                        </strong>
                        <span>{item.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Core Competencies */}
              <div className="mt-6 border-t border-slate-100 pt-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Tools & Core Competencies
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {job.skillsAcquired.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* -------------------------------------- */}
      {/* 6. PROJECTS & PRACTICAL CASE STUDIES   */}
      {/* -------------------------------------- */}
      <section
        id="projects"
        className="section-anchor border-y border-slate-200 bg-[#edf4fb] py-20"
      >
        <div className="container-wide">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects & Practical Case Studies"
            description="Four real-world database case studies detailing the specific challenge, the technical solution, and the measurable outcome."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article
                  key={project.title}
                  className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-soft transition hover:border-blue-200 hover:shadow-md"
                >
                  {/* Top Bar with Icon and Category Tag */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon size={24} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                        {project.tag}
                      </span>
                      <h3 className="text-xl font-bold text-ink">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Challenge / Problem Box */}
                  <div className="mt-5 rounded-2xl border border-amber-200/70 bg-amber-50/50 p-3.5 text-xs leading-relaxed text-slate-700">
                    <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-wide text-amber-900">
                      The Challenge
                    </span>
                    {project.problem}
                  </div>

                  {/* Technical Implementation Steps */}
                  <div className="mt-4 flex-1 space-y-2">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Technical Solution
                    </span>
                    <ul className="space-y-2 text-xs leading-relaxed text-slate-600">
                      {project.solution.map((step) => (
                        <li key={step} className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Measurable Outcome / Result */}
                  <div className="mt-5 flex items-start gap-2.5 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-3.5 text-xs leading-relaxed text-emerald-950">
                    <BadgeCheck
                      size={17}
                      className="mt-0.5 shrink-0 text-emerald-600"
                    />
                    <div>
                      <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-wide text-emerald-800">
                        Key Outcome
                      </span>
                      {project.result}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-slate-100 pt-4">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------------------------------------- */}
      {/* 7. EDUCATION SECTION                   */}
      {/* -------------------------------------- */}
      <section id="education" className="section-anchor container-wide py-20">
        <SectionHeading eyebrow="Learning" title="Education" />
        <div className="grid gap-4 md:grid-cols-2">
          {/* Master Degree */}
          <article className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="font-bold text-ink">
                Master of Computer Applications (MCA)
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Indira Gandhi National Open University (IGNOU)
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-blue-600">
                Completed
              </p>
            </div>
          </article>

          {/* Bachelor Degree */}
          <article className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="font-bold text-ink">
                Bachelor of Computer Applications (BCA)
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Maharshi Dayanand University
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                2019 — 2023
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* -------------------------------------- */}
      {/* 8. CONTACT SECTION                     */}
      {/* -------------------------------------- */}
      <section
        id="contact"
        className="section-anchor bg-[#0b1f3a] py-20 text-white"
      >
        <div className="container-wide grid gap-10 md:grid-cols-[1fr_.8fr] md:items-center">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[.22em] text-blue-300">
              Get in touch
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s build something reliable.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-300">
              Open to connecting about database administration, SQL performance,
              operational reporting, and opportunities to grow as a data
              professional.
            </p>
            <a
              href="mailto:chauhansuraj1110@gmail.com"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-bold hover:bg-blue-400"
            >
              <Mail size={17} /> Email me <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Contact Details Card */}
          <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <a
              href="mailto:chauhansuraj1110@gmail.com"
              className="flex items-center gap-3 text-sm text-slate-200 hover:text-white"
            >
              <Mail className="text-blue-300" size={18} />
              chauhansuraj1110@gmail.com
            </a>
            <a
              href="tel:+918744815245"
              className="flex items-center gap-3 text-sm text-slate-200 hover:text-white"
            >
              <Phone className="text-blue-300" size={18} />
              +91 87448 15245
            </a>
            <p className="flex items-center gap-3 text-sm text-slate-200">
              <MapPin className="text-blue-300" size={18} />
              Faridabad, Haryana, India
            </p>
            <p className="border-t border-white/10 pt-4 text-xs leading-5 text-slate-400">
              Add your LinkedIn and GitHub profile URLs here before publishing.
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------------- */}
      {/* 9. FOOTER                              */}
      {/* -------------------------------------- */}
      <footer className="bg-[#07162b] py-5 text-center text-xs text-slate-400">
        <div className="container-wide flex flex-col justify-between gap-2 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Suraj Chauhan. Built with Next.js &
            Tailwind CSS.
          </p>
          <a
            href="#home"
            className="inline-flex items-center justify-center gap-1 hover:text-white"
          >
            Back to top <ArrowDown className="rotate-180" size={13} />
          </a>
        </div>
      </footer>
    </main>
  );
}

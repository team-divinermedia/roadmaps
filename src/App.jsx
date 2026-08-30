import React, { useState, useMemo, useEffect } from "react";
import {
  CheckCircle2,
  Circle,
  Search,
  Download,
  RotateCcw,
  Sun,
  Moon,
  Printer,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Filter,
  Clock,
  Target,
  TrendingUp,
  X,
  FileJson,
  ListCheck,
  Check,
  Zap,
  BookOpen,
  PieChart,
  Plus,
  Trash2,
  FolderPlus,
  Pencil,
  GripVertical,
  ChevronUp,
  ChevronDown,
  Lock,
  Unlock,
  LayoutGrid,
  Layers,
  Copy,
  ArrowRight,
  ChevronDown as DropdownIcon,
  FolderKanban,
  BarChart2
} from "lucide-react";
import confetti from "canvas-confetti";
import { defaultWabaPhases } from "./wabaPhasesData";
import { first10CustomersPhases } from "./first10PhasesData";

// Full 160 Tasks across 10 Phases (Phase 0 to Phase 9)
export const fullGtmPhases = [
  {
    id: 0,
    label: "Phase 0",
    title: "Foundation & Discovery",
    timeline: "8–12 weeks out",
    color: "#6366F1",
    description: "Validate that the problem is real, the market is reachable, and the ICP is tight enough to close deals.",
    sections: [
      {
        title: "Market Research",
        tasks: [
          { id: "0-1", text: "Size the market: define TAM, SAM, and SOM with sourced data" },
          { id: "0-2", text: "Conduct minimum 15 customer discovery interviews with decision-makers in your target segment" },
          { id: "0-3", text: "Validate willingness-to-pay — ask for budgets, not hypotheticals" },
          { id: "0-4", text: "Identify market timing signals: regulatory shifts, tech adoption waves, macro behavior changes" },
          { id: "0-5", text: "Document what buyers currently use to solve the problem (alternatives, workarounds)" },
        ],
      },
      {
        title: "ICP Definition",
        tasks: [
          { id: "0-6", text: "Define firmographic criteria: industry, company size, revenue band, geography, growth stage" },
          { id: "0-7", text: "Define technographic criteria: existing tools, integration requirements, tech stack signals" },
          { id: "0-8", text: "Identify three personas: buyer (signs), user (uses daily), champion (sells internally)" },
          { id: "0-9", text: "Build an ICP scorecard with weighted criteria to qualify accounts objectively" },
          { id: "0-10", text: "Confirm ICP with at least 3 customers who would have bought on Day 1" },
        ],
      },
      {
        title: "Competitive Analysis",
        tasks: [
          { id: "0-11", text: "Map direct and indirect competitors — include spreadsheets, manual processes, and doing-nothing as alternatives" },
          { id: "0-12", text: "Audit competitor positioning pages, pricing pages, and ad copy" },
          { id: "0-13", text: "Mine G2, Capterra, and Trustpilot for competitor 1-star and 3-star reviews — pain points live here" },
          { id: "0-14", text: "Identify positioning whitespace: claims nobody in the category is making" },
          { id: "0-15", text: "Build a competitive matrix: feature comparison, pricing, target segment, key weakness" },
        ],
      },
    ],
  },
  {
    id: 1,
    label: "Phase 1",
    title: "Product Readiness",
    timeline: "6–8 weeks out",
    color: "#8B5CF6",
    description: "Lock the product, pricing, and technical infrastructure before any external work begins.",
    sections: [
      {
        title: "Core Product",
        tasks: [
          { id: "1-1", text: "Confirm all launch-critical features are QA-tested and stable — no half-finished features at launch" },
          { id: "1-2", text: "Define the product's aha moment: the single action that predicts 90-day retention" },
          { id: "1-3", text: "Run user acceptance testing (UAT) with 3–5 external users from the ICP" },
          { id: "1-4", text: "Finalize packaging: what's included in each tier and what's gated" },
          { id: "1-5", text: "Select GTM motion: PLG for ACV <$5K, SLG for ACV >$50K, Hybrid for $5K–$50K" },
        ],
      },
      {
        title: "Pricing & Packaging",
        tasks: [
          { id: "1-6", text: "Select pricing model: per-seat, usage-based, tiered flat rate, or outcome-based" },
          { id: "1-7", text: "Set price points and anchor pricing — price against value delivered, not cost-plus" },
          { id: "1-8", text: "Define discounting policy: who can authorize discounts, maximum floor, and approval chain" },
          { id: "1-9", text: "Decide free trial or freemium strategy — and define the conversion trigger" },
          { id: "1-10", text: "Configure billing infrastructure: Stripe, Chargebee, or equivalent with subscription logic" },
        ],
      },
      {
        title: "Infrastructure & Compliance",
        tasks: [
          { id: "1-11", text: "Confirm uptime SLA (99.9% minimum for B2B) and configure monitoring and alerting" },
          { id: "1-12", text: "Set up error tracking (Sentry or equivalent) with escalation routing" },
          { id: "1-13", text: "Conduct security audit or penetration test if handling sensitive customer data" },
          { id: "1-14", text: "Prepare DPA, Terms of Service, and Privacy Policy — reviewed by legal" },
          { id: "1-15", text: "Configure product analytics (Mixpanel, Amplitude, or PostHog) to track activation funnel" },
          { id: "1-16", text: "Configure marketing analytics: GA4, UTM structure, and conversion goals" },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Phase 2",
    title: "Positioning & Messaging",
    timeline: "5–6 weeks out",
    color: "#EC4899",
    description: "Define the single story that all teams — sales, marketing, CS, product — will tell consistently.",
    sections: [
      {
        title: "Core Positioning",
        tasks: [
          { id: "2-1", text: "Write the positioning statement: '[Product] helps [ICP] achieve [outcome] unlike [alternative] because [reason to believe]'" },
          { id: "2-2", text: "Define the category claim you own — the one thing no competitor can say" },
          { id: "2-3", text: "Build 3–5 message pillars anchored in buyer pain points, not product features" },
          { id: "2-4", text: "Write objection responses for the top 5 expected pushbacks from prospects" },
          { id: "2-5", text: "Test messaging with 3–5 target buyers before finalizing — discard what doesn't land" },
        ],
      },
      {
        title: "Message House",
        tasks: [
          { id: "2-6", text: "Write headline value proposition in 10 words or fewer" },
          { id: "2-7", text: "Write 1-sentence elevator pitch and 30-second verbal pitch for AEs" },
          { id: "2-8", text: "Write 2-paragraph company description for press, LinkedIn, and partner channels" },
          { id: "2-9", text: "Create use-case-specific message variants for each buyer persona" },
          { id: "2-10", text: "Compile everything into a messaging playbook — single source of truth for all teams" },
        ],
      },
      {
        title: "Competitive Differentiation",
        tasks: [
          { id: "2-11", text: "Write competitive positioning for each of the top 3 alternatives buyers will compare you to" },
          { id: "2-12", text: "Identify the one defensible claim no competitor can replicate — anchor all messaging here" },
          { id: "2-13", text: "Document 'versus' language: how to win the comparison conversation for each alternative" },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Phase 3",
    title: "Asset Production",
    timeline: "4–5 weeks out",
    color: "#F59E0B",
    description: "Build every customer-facing and sales-facing asset before enablement begins.",
    sections: [
      {
        title: "Website",
        tasks: [
          { id: "3-1", text: "Build or update homepage with launch positioning — hero must state the ICP and outcome clearly" },
          { id: "3-2", text: "Create dedicated product or features page with use-case-specific content" },
          { id: "3-3", text: "Build pricing page — transparent pricing converts; hiding it costs you pipeline" },
          { id: "3-4", text: "Set up blog with 2–3 launch articles ready to publish" },
          { id: "3-5", text: "Install demo request form with direct CRM integration and auto-routing" },
          { id: "3-6", text: "Set up UTM tracking, conversion events in GA4, and LinkedIn Insight Tag" },
          { id: "3-7", text: "Implement SEO foundations: meta titles, descriptions, H1 structure, and schema markup" },
        ],
      },
      {
        title: "Sales Collateral",
        tasks: [
          { id: "3-8", text: "Build sales deck (12–15 slides): problem → solution → differentiation → proof → pricing → CTA" },
          { id: "3-9", text: "Create a 1-page product leave-behind in PDF format" },
          { id: "3-10", text: "Write outbound email templates: first touch, follow-up, post-demo, and close" },
          { id: "3-11", text: "Build an ROI calculator that quantifies value in the prospect's own terms" },
          { id: "3-12", text: "Create an objection-handling quick reference card for reps" },
          { id: "3-13", text: "Prepare a standardized demo environment and demo flow script" },
        ],
      },
      {
        title: "Content & Media Assets",
        tasks: [
          { id: "3-14", text: "Write launch blog post (product announcement with positioning and proof)" },
          { id: "3-15", text: "Write category education post (why this problem matters and why now)" },
          { id: "3-16", text: "Write use-case spotlight post targeting primary ICP pain point" },
          { id: "3-17", text: "Draft press release for media outreach" },
          { id: "3-18", text: "Prepare 7–10 LinkedIn posts for launch week across founders and team" },
          { id: "3-19", text: "Build product explainer or demo video (3–5 minutes, self-serve)" },
          { id: "3-20", text: "Write customer FAQ and populate the help center / knowledge base" },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "Phase 4",
    title: "GTM Infrastructure",
    timeline: "4–5 weeks out",
    color: "#10B981",
    description: "Build the revenue engine — CRM, outbound stack, inbound flows, and reporting — before you need it.",
    sections: [
      {
        title: "CRM & Pipeline Setup",
        tasks: [
          { id: "4-1", text: "Configure CRM pipeline stages: Prospect → Qualified → Discovery → Demo → Proposal → Negotiation → Closed" },
          { id: "4-2", text: "Set up deal fields: ACV, ICP score, source, close date, decision-maker contacts" },
          { id: "4-3", text: "Build lead scoring model: ICP firmographic fit + behavioral engagement signals" },
          { id: "4-4", text: "Configure lead routing: auto-assign inbound leads to the right AE within 5 minutes of form submission" },
          { id: "4-5", text: "Set up demo booking link with calendar sync (Calendly or Chili Piper)" },
        ],
      },
      {
        title: "Outbound Stack",
        tasks: [
          { id: "4-6", text: "Build ICP-filtered prospect list of 500–1,000 accounts minimum" },
          { id: "4-7", text: "Enrich list with contact data and buying signals (Apollo, Clay, or ZoomInfo)" },
          { id: "4-8", text: "Set up sending domains and warm them for minimum 3–4 weeks before launch" },
          { id: "4-9", text: "Configure outbound sequencing tool (Instantly, Smartlead, or Salesloft)" },
          { id: "4-10", text: "Write 5–7 step cold email sequences and 3–5 step LinkedIn sequences per persona" },
        ],
      },
      {
        title: "Inbound & Marketing Automation",
        tasks: [
          { id: "4-11", text: "Configure marketing automation: lead nurture flows, trial onboarding, and re-engagement" },
          { id: "4-12", text: "Build thank-you page flows and post-conversion email sequences" },
          { id: "4-13", text: "Install and configure live chat or chatbot on website for prospect qualification" },
          { id: "4-14", text: "Set up retargeting audiences on LinkedIn and Google for launch week paid amplification" },
        ],
      },
      {
        title: "Analytics & Reporting",
        tasks: [
          { id: "4-15", text: "Define the metrics dashboard: pipeline volume, demo-to-close rate, activation rate, ARR, CAC" },
          { id: "4-16", text: "Build weekly reporting template: metrics + narrative + decisions needed" },
          { id: "4-17", text: "Set up revenue attribution tracking from first touch through closed-won" },
        ],
      },
    ],
  },
  {
    id: 5,
    label: "Phase 5",
    title: "Internal Enablement",
    timeline: "3–4 weeks out",
    color: "#0EA5E9",
    description: "The most common launch failure is an unprepared sales and CS team. Enable them before the market hears anything.",
    sections: [
      {
        title: "Sales Enablement",
        tasks: [
          { id: "5-1", text: "Run formal launch briefing for all AEs and SDRs: what is launching, who it is for, how to sell it" },
          { id: "5-2", text: "Distribute messaging playbook — every rep uses the same language" },
          { id: "5-3", text: "Conduct product demo training — all reps must complete and be certified before launch" },
          { id: "5-4", text: "Run live objection-handling role-play sessions for the top 5 objections" },
          { id: "5-5", text: "Distribute competitive battlecards for each key alternative (one page, scannable)" },
          { id: "5-6", text: "Upload all collateral to a central sales hub — no reps hunting across Slack for assets" },
          { id: "5-7", text: "Record the enablement session for new hire onboarding" },
        ],
      },
      {
        title: "Customer Success Enablement",
        tasks: [
          { id: "5-8", text: "Brief CS on the product: what success looks like for customers, not just what the product does" },
          { id: "5-9", text: "Define onboarding sequence: Day 0 welcome → Day 3 check-in → Day 14 activation review → Day 30 health check" },
          { id: "5-10", text: "Write automated onboarding email sequence triggered on sign-up" },
          { id: "5-11", text: "Define activation metric — the action that confirms a customer has reached their aha moment" },
          { id: "5-12", text: "Build a customer health scorecard: usage, NPS, support tickets, engagement signals" },
          { id: "5-13", text: "Write at-risk customer playbook: triggers, response timeline, and escalation path" },
        ],
      },
      {
        title: "Support Readiness",
        tasks: [
          { id: "5-14", text: "Write support FAQ covering the top 10 anticipated tickets at launch" },
          { id: "5-15", text: "Populate help center with product documentation, setup guides, and video walkthroughs" },
          { id: "5-16", text: "Configure support ticketing tool with categories, SLA targets, and escalation routing" },
          { id: "5-17", text: "Set support SLA targets: first response under 4 hours, resolution under 24 hours for B2B" },
        ],
      },
      {
        title: "Legal & Compliance",
        tasks: [
          { id: "5-18", text: "Finalize Terms of Service, Privacy Policy, and DPA — reviewed and approved" },
          { id: "5-19", text: "Prepare standard MSA template for enterprise deals" },
          { id: "5-20", text: "Confirm what security documentation prospects will ask for (SOC2, ISO, pen test report) and have it ready" },
        ],
      },
    ],
  },
  {
    id: 6,
    label: "Phase 6",
    title: "Beta / Soft Launch",
    timeline: "2–4 weeks out",
    color: "#F97316",
    description: "Test everything with a controlled cohort before going to market. Refine messaging from what beta users actually say.",
    sections: [
      {
        title: "Beta Program Execution",
        tasks: [
          { id: "6-1", text: "Select 5–10 beta customers from warm network or waitlist — prioritize ICP-fit over relationship" },
          { id: "6-2", text: "Define beta success criteria before starting: what questions must be answered?" },
          { id: "6-3", text: "Run structured onboarding calls with each beta participant" },
          { id: "6-4", text: "Collect structured feedback weekly: what worked, what didn't, what was confusing" },
          { id: "6-5", text: "Document bugs, onboarding friction points, and missing features in a shared tracker" },
          { id: "6-6", text: "Revise positioning based on the language beta users naturally use to describe the product" },
          { id: "6-7", text: "Identify 1–2 beta customers willing to provide testimonials, case study quotes, or a reference call for prospects" },
        ],
      },
      {
        title: "System Dry Run",
        tasks: [
          { id: "6-8", text: "Run a full internal dry run of the launch day sequence — test every step in the exact planned order" },
          { id: "6-9", text: "Load-test the product under projected launch-day traffic" },
          { id: "6-10", text: "Test all email sequences: confirm delivery, tracking links, and CRM sync" },
          { id: "6-11", text: "Test end-to-end sales process: website → form → CRM → outreach → demo → proposal" },
          { id: "6-12", text: "Test demo booking, payment flow, and trial activation in production environment" },
        ],
      },
    ],
  },
  {
    id: 7,
    label: "Phase 7",
    title: "Final Go/No-Go",
    timeline: "1–2 weeks out",
    color: "#EF4444",
    description: "Lock the launch. No new scope. Make the go/no-go decision with authority and clarity.",
    sections: [
      {
        title: "Readiness Checkpoint",
        tasks: [
          { id: "7-1", text: "Confirm product is stable — all launch-critical bugs resolved, no outstanding P1 issues" },
          { id: "7-2", text: "Confirm all launch assets are approved, final, and staged for publish" },
          { id: "7-3", text: "Make a formal go/no-go decision with a named decision-maker who has authority to delay" },
          { id: "7-4", text: "Lock launch scope — no new assets or feature requests accepted after this point" },
          { id: "7-5", text: "Document the fallback plan: what happens if product needs a 48-hour delay post-embargo?" },
        ],
      },
      {
        title: "Press & Embargo (if applicable)",
        tasks: [
          { id: "7-6", text: "Send embargoed briefings to target media contacts with agreed lift time" },
          { id: "7-7", text: "Prepare reactive press responses for likely questions or competitor reactions" },
          { id: "7-8", text: "Confirm analyst briefings if pursuing analyst coverage" },
        ],
      },
      {
        title: "Internal Launch Brief",
        tasks: [
          { id: "7-9", text: "Send all-hands internal message: what is launching, when, and each team's role on launch day" },
          { id: "7-10", text: "Confirm every team member knows their exact launch day responsibility" },
          { id: "7-11", text: "Set up launch day war room: dedicated Slack channel for real-time coordination" },
          { id: "7-12", text: "Schedule daily 15-minute standup for launch week with PMM, Product, and CS" },
        ],
      },
    ],
  },
  {
    id: 8,
    label: "Phase 8",
    title: "Launch Execution",
    timeline: "Launch Day & Week",
    color: "#6366F1",
    description: "Internal first. Customers second. Public third. Order is not optional.",
    sections: [
      {
        title: "Launch Day Sequence",
        tasks: [
          { id: "8-1", text: "T-24h: Final go/no-go confirmation with product lead — last chance to delay cleanly" },
          { id: "8-2", text: "Launch morning: Internal all-hands Slack announcement before anything goes public" },
          { id: "8-3", text: "T+1h: Feature enabled in production and in-app messaging activated" },
          { id: "8-4", text: "T+2h: Customer email sent to existing users and beta cohort" },
          { id: "8-5", text: "T+3h: Blog post and press release published" },
          { id: "8-6", text: "T+4h: Social posts live — LinkedIn primary, X secondary for B2B" },
          { id: "8-7", text: "T+4h: Paid amplification live on LinkedIn and Google (if applicable)" },
          { id: "8-8", text: "T+4h onwards: AE and SDR outreach begins to warm prospect list with launch-specific messaging" },
          { id: "8-9", text: "Throughout the day: Monitor demo requests, support tickets, social mentions, and early adoption signals in real time" },
        ],
      },
      {
        title: "Launch Week",
        tasks: [
          { id: "8-10", text: "Host a live demo webinar or virtual launch event (aim for Day 2 or 3 of launch week)" },
          { id: "8-11", text: "Personalized outreach to top 50 target accounts referencing the launch announcement" },
          { id: "8-12", text: "Follow up with journalists and media contacts post-publish" },
          { id: "8-13", text: "Distribute launch content in relevant communities: LinkedIn groups, Slack communities, Reddit, and partner channels" },
          { id: "8-14", text: "Run 15-minute daily war room standup: what's working, what's blocked, what needs a decision" },
          { id: "8-15", text: "Pull first 48-hour signal check: demo requests, trial sign-ups, support tickets, social sentiment" },
        ],
      },
    ],
  },
  {
    id: 9,
    label: "Phase 9",
    title: "Post-Launch Optimization",
    timeline: "Days 7–90",
    color: "#10B981",
    description: "The real launch begins here. Most of the value from a B2B SaaS launch is captured in the 90 days after announcement — not on the day itself.",
    sections: [
      {
        title: "Days 7–14: Early Signal Review",
        tasks: [
          { id: "9-1", text: "Pull activation data: what percentage of signups have reached the aha moment?" },
          { id: "9-2", text: "Analyze support ticket categories: where is confusion and friction appearing?" },
          { id: "9-3", text: "Collect sales team feedback: which objections are new, and what messaging is landing?" },
          { id: "9-4", text: "Review social and media coverage — coverage volume and sentiment" },
          { id: "9-5", text: "Fix any messaging gaps identified from early customer reactions before they compound" },
        ],
      },
      {
        title: "Day 30: Launch Performance Review",
        tasks: [
          { id: "9-6", text: "Measure adoption rate vs pre-launch target — what percentage of target audience has activated?" },
          { id: "9-7", text: "Measure pipeline impact: demo requests, opportunities created, and revenue closed attributed to launch" },
          { id: "9-8", text: "Review asset adoption: are AEs using the sales deck and battlecards, or reverting to old materials?" },
          { id: "9-9", text: "Calculate preliminary CAC and compare against target benchmark" },
          { id: "9-10", text: "Collect first NPS from paying customers — verbatim responses are more valuable than the score" },
          { id: "9-11", text: "Present 30-day launch review to leadership with findings and recommended pivots" },
        ],
      },
      {
        title: "Days 30–90: Sustained Growth & Retention",
        tasks: [
          { id: "9-12", text: "Run in-app re-engagement campaigns for accounts that signed up but did not activate" },
          { id: "9-13", text: "Build and publish the first customer case study from the beta cohort" },
          { id: "9-14", text: "Launch a content programme: 2–3 use-case-specific pieces per month" },
          { id: "9-15", text: "Host follow-up webinar: advanced use cases, customer stories, or product roadmap preview" },
          { id: "9-16", text: "Update all sales materials with real customer proof points and live product screenshots" },
          { id: "9-17", text: "Expand outbound to second-tier ICP accounts using learnings from first-wave conversations" },
          { id: "9-18", text: "Optimize paid channels: kill what isn't converting, double down on what is" },
          { id: "9-19", text: "Review unit economics: LTV:CAC (target 3:1+), CAC payback period (target <12 months), NRR (target >100%)" },
          { id: "9-20", text: "Present 90-day 'State of the Launch' report to leadership: what the launch proved, what it didn't, and what comes next" },
        ],
      },
    ],
  },
];

// Default Initial Projects Registry
const defaultProjects = [
  {
    id: "proj-first-10-cust",
    name: "Roadmap to First 10 Paying Customers",
    description: "56-task tactical execution roadmap (Pre-conditions + Phase 1 to Phase 6) for WhatsApp Lead Response Engine.",
    category: "Customer Acquisition",
    color: "#F59E0B",
    phases: first10CustomersPhases
  },
  {
    id: "proj-b2b-gtm",
    name: "B2B SaaS Launch Execution Playbook",
    description: "Full 160-task 10-phase GTM execution strategy for B2B SaaS product launch.",
    category: "Go-To-Market",
    color: "#6366F1",
    phases: fullGtmPhases
  },
  {
    id: "proj-waba-lead",
    name: "WABA Lead Engine & WhatsApp Campaigns",
    description: "WhatsApp Lead Response Engine — 264 tasks across 13 phases (Gujarat Real Estate GTM Execution).",
    category: "Lead Generation",
    color: "#10B981",
    phases: defaultWabaPhases
  }
];

export default function App() {
  // Navigation & View Mode: "dashboard" | "playbook"
  const [viewMode, setViewMode] = useState("playbook");

  // Load Projects array from localStorage (V3 ensure full task datasets are maintained)
  const [projects, setProjects] = useState(() => {
    try {
      const saved = localStorage.getItem("b2b_gtm_projects_v3");
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure standard project datasets maintain complete task counts
        let updated = parsed.map((p) => {
          if (p.id === "proj-b2b-gtm") {
            const count = (p.phases || []).flatMap((ph) => (ph.sections || []).flatMap((s) => s.tasks)).length;
            if (count < 160) {
              return { ...p, phases: fullGtmPhases };
            }
          }
          if (p.id === "proj-waba-lead") {
            const count = (p.phases || []).flatMap((ph) => (ph.sections || []).flatMap((s) => s.tasks)).length;
            if (count < 264) {
              return { ...p, phases: defaultWabaPhases };
            }
          }
          if (p.id === "proj-first-10-cust") {
            const count = (p.phases || []).flatMap((ph) => (ph.sections || []).flatMap((s) => s.tasks)).length;
            if (count < 56) {
              return { ...p, phases: first10CustomersPhases };
            }
          }
          return p;
        });

        if (!updated.some((p) => p.id === "proj-first-10-cust")) {
          updated.unshift({
            id: "proj-first-10-cust",
            name: "Roadmap to First 10 Paying Customers",
            description: "56-task tactical execution roadmap (Pre-conditions + Phase 1 to Phase 6) for WhatsApp Lead Response Engine.",
            category: "Customer Acquisition",
            color: "#F59E0B",
            phases: first10CustomersPhases
          });
        }
        return updated;
      }
      return defaultProjects;
    } catch {
      return defaultProjects;
    }
  });

  // Currently Active Project ID
  const [activeProjectId, setActiveProjectId] = useState(() => {
    try {
      const saved = localStorage.getItem("b2b_gtm_active_proj_id");
      return saved && projects.some(p => p.id === saved) ? saved : defaultProjects[0].id;
    } catch {
      return defaultProjects[0].id;
    }
  });

  // Active Phase ID within current project
  const [activePhase, setActivePhase] = useState(0);

  // Edit Mode state: Locked by default
  const [isEditMode, setIsEditMode] = useState(false);

  // Load completed tasks from localStorage
  const [completed, setCompleted] = useState(() => {
    try {
      const saved = localStorage.getItem("b2b_gtm_playbook_completed");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Theme support
  const [darkTheme, setDarkTheme] = useState(() => {
    try {
      return localStorage.getItem("b2b_gtm_theme") === "dark";
    } catch {
      return false;
    }
  });

  // Search & Filters
  const [searchQuery, setSearchQuery] = useState("");
  const [filterMode, setFilterMode] = useState("all");

  // Inputs for Creating New Task / Topic / Phase / Project
  const [newTasksInputs, setNewTasksInputs] = useState({});
  const [isAddingTopic, setIsAddingTopic] = useState(false);
  const [newTopicTitle, setNewTopicTitle] = useState("");

  const [isAddingPhase, setIsAddingPhase] = useState(false);
  const [newPhaseTitle, setNewPhaseTitle] = useState("");
  const [newPhaseTimeline, setNewPhaseTimeline] = useState("");

  const [isCreatingProject, setIsCreatingProject] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectDesc, setNewProjectDesc] = useState("");
  const [newProjectCat, setNewProjectCat] = useState("Strategy");

  // Bulk Import Project State
  const [isBulkImporting, setIsBulkImporting] = useState(false);
  const [bulkImportName, setBulkImportName] = useState("");
  const [bulkImportDesc, setBulkImportDesc] = useState("");
  const [bulkImportCategory, setBulkImportCategory] = useState("Customer Acquisition");
  const [bulkImportText, setBulkImportText] = useState("");

  // Drag and Drop State
  const [draggedSectionIdx, setDraggedSectionIdx] = useState(null);
  const [dragOverSectionIdx, setDragOverSectionIdx] = useState(null);
  const [draggedTaskInfo, setDraggedTaskInfo] = useState(null);
  const [dragOverTaskInfo, setDragOverTaskInfo] = useState(null);

  // Expanded Tasks details map (taskId -> boolean)
  const [expandedTasks, setExpandedTasks] = useState({});

  const toggleExpandTask = (taskId) => {
    setExpandedTasks((prev) => ({ ...prev, [taskId]: !prev[taskId] }));
  };

  const toggleExpandAllInPhase = (phase) => {
    const tasks = (phase.sections || []).flatMap((s) => s.tasks);
    const anyUnexpanded = tasks.some((t) => !expandedTasks[t.id]);
    setExpandedTasks((prev) => {
      const next = { ...prev };
      tasks.forEach((t) => {
        next[t.id] = anyUnexpanded;
      });
      return next;
    });
  };

  const getTaskDetails = (task) => {
    let title = task.text || "";
    let desc = task.description || "";
    let owner = task.owner || "";

    if (!desc && title.includes(" — ")) {
      const parts = title.split(" — ");
      title = parts[0];
      desc = parts.slice(1).join(" — ");
    }

    if (!owner && title.includes("[Owner: ")) {
      const ownerMatch = title.match(/\[Owner:\s*([^\]]+)\]/);
      if (ownerMatch) {
        owner = ownerMatch[1];
        title = title.replace(/\s*\[Owner:\s*[^\]]+\]/, "");
      }
    }

    return { title, desc, owner };
  };

  // Save Projects array changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("b2b_gtm_projects_v3", JSON.stringify(projects));
    } catch (e) {
      console.error(e);
    }
  }, [projects]);

  // Save Active Project ID to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("b2b_gtm_active_proj_id", activeProjectId);
    } catch (e) {
      console.error(e);
    }
  }, [activeProjectId]);

  // Save completion state
  useEffect(() => {
    try {
      localStorage.setItem("b2b_gtm_playbook_completed", JSON.stringify(completed));
    } catch (e) {
      console.error(e);
    }
  }, [completed]);

  // Save theme
  useEffect(() => {
    try {
      localStorage.setItem("b2b_gtm_theme", darkTheme ? "dark" : "light");
      if (darkTheme) {
        document.body.classList.add("dark-theme");
      } else {
        document.body.classList.remove("dark-theme");
      }
    } catch (e) {
      console.error(e);
    }
  }, [darkTheme]);

  // Current Active Project Object
  const currentProject = useMemo(() => {
    return projects.find((p) => p.id === activeProjectId) || projects[0];
  }, [projects, activeProjectId]);

  // Current Active Phase Object
  const currentPhase = useMemo(() => {
    const pList = currentProject.phases || [];
    return pList[activePhase] || pList[0] || { id: 0, label: "Phase 0", title: "Overview", color: "#6366F1", sections: [] };
  }, [currentProject, activePhase]);

  // All Tasks in Active Project
  const allTasksInProject = useMemo(() => {
    return (currentProject.phases || []).flatMap((p) =>
      p.sections.flatMap((s) =>
        s.tasks.map((t) => ({
          ...t,
          phaseId: p.id,
          phaseLabel: p.label,
          phaseTitle: p.title,
          sectionTitle: s.title,
          color: p.color
        }))
      )
    );
  }, [currentProject]);

  const totalTasks = allTasksInProject.length;
  const completedCount = allTasksInProject.filter((t) => completed[t.id]).length;
  const progress = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

  // Phase Completion Rate
  const getPhaseCompletionRate = (phase) => {
    const tasks = (phase.sections || []).flatMap((s) => s.tasks);
    if (tasks.length === 0) return 0;
    const done = tasks.filter((t) => completed[t.id]).length;
    return Math.round((done / tasks.length) * 100);
  };

  // Helper to Update Phases for Active Project
  const updateActiveProjectPhases = (updaterFn) => {
    setProjects((prevProjects) => {
      return prevProjects.map((proj) => {
        if (proj.id === activeProjectId) {
          const updatedPhases = updaterFn(proj.phases || []);
          return { ...proj, phases: updatedPhases };
        }
        return proj;
      });
    });
  };

  // PROJECT MANAGEMENT FUNCTIONS
  const handleCreateProject = () => {
    const name = newProjectName.trim();
    if (!name) return;

    const colors = ["#6366F1", "#10B981", "#EC4899", "#F59E0B", "#8B5CF6", "#0EA5E9", "#F97316"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const newProj = {
      id: `proj-${Date.now()}`,
      name,
      description: newProjectDesc.trim() || "Custom project execution strategy & task breakdown",
      category: newProjectCat,
      color: randomColor,
      phases: [
        {
          id: 0,
          label: "Phase 0",
          title: "Setup & Alignment",
          timeline: "Week 1",
          color: randomColor,
          description: "Initial discovery, baseline setup, and team alignment.",
          sections: [
            {
              title: "Getting Started",
              tasks: [
                { id: `task-${Date.now()}-1`, text: "Define key project goals, success metrics, and milestones" },
                { id: `task-${Date.now()}-2`, text: "Assign team roles, responsibilities, and decision-makers" }
              ]
            }
          ]
        }
      ]
    };

    setProjects((prev) => [...prev, newProj]);
    setActiveProjectId(newProj.id);
    setActivePhase(0);
    setNewProjectName("");
    setNewProjectDesc("");
    setIsCreatingProject(false);
    setViewMode("playbook");
  };

  const handleBulkImportProject = () => {
    if (!bulkImportName.trim() || !bulkImportText.trim()) return;

    let parsedPhases = [];

    // Try parsing as JSON first
    try {
      const jsonContent = JSON.parse(bulkImportText);
      if (Array.isArray(jsonContent)) {
        parsedPhases = jsonContent;
      } else if (jsonContent.phases && Array.isArray(jsonContent.phases)) {
        parsedPhases = jsonContent.phases;
      }
    } catch {
      // Parse plain text / markdown / bullet lines into phases and tasks
      const lines = bulkImportText.split("\n").map((l) => l.trim()).filter(Boolean);
      let currentPhase = null;
      let currentSection = null;
      let phaseCount = 0;

      lines.forEach((line) => {
        // Detect Phase headers
        if (/^(phase|day|module|stage|part)\s*\d+/i.test(line) || /^#+\s*(phase|day|module|stage)/i.test(line)) {
          if (currentPhase) {
            if (currentSection && currentSection.tasks.length > 0) currentPhase.sections.push(currentSection);
            parsedPhases.push(currentPhase);
          }
          phaseCount++;
          currentPhase = {
            id: phaseCount - 1,
            label: `Phase ${phaseCount - 1}`,
            title: line.replace(/^#+\s*/, "").trim(),
            timeline: "Target Timeline",
            color: ["#6366F1", "#8B5CF6", "#EC4899", "#F59E0B", "#10B981", "#3B82F6"][phaseCount % 6],
            description: "Bulk imported phase tasks.",
            sections: []
          };
          currentSection = { title: "Tasks", tasks: [] };
        } else if (/^(section|topic|category)[:\-]/i.test(line) || line.startsWith("##")) {
          if (!currentPhase) {
            currentPhase = {
              id: 0,
              label: "Phase 0",
              title: "General Phase",
              timeline: "Week 1",
              color: "#6366F1",
              description: "Imported tasks",
              sections: []
            };
          }
          if (currentSection && currentSection.tasks.length > 0) {
            currentPhase.sections.push(currentSection);
          }
          currentSection = {
            title: line.replace(/^#+\s*/, "").replace(/^(section|topic|category)[:\-]/i, "").trim(),
            tasks: []
          };
        } else {
          if (!currentPhase) {
            currentPhase = {
              id: 0,
              label: "Phase 0",
              title: "Phase 1: Roadmap Tasks",
              timeline: "Week 1",
              color: "#6366F1",
              description: "Imported task list",
              sections: []
            };
          }
          if (!currentSection) {
            currentSection = { title: "Tasks", tasks: [] };
          }

          const cleanText = line.replace(/^[\d\w\.\-\•\*\>\(\)]+\s*/, "").trim();
          if (cleanText) {
            currentSection.tasks.push({
              id: `imp-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
              text: line,
              owner: "Both",
              description: "Imported task item"
            });
          }
        }
      });

      if (currentPhase) {
        if (currentSection && currentSection.tasks.length > 0) {
          currentPhase.sections.push(currentSection);
        }
        parsedPhases.push(currentPhase);
      }
    }

    if (parsedPhases.length === 0) {
      alert("No valid tasks detected. Please enter lines of tasks.");
      return;
    }

    const newProjId = `proj-imp-${Date.now()}`;
    const totalCount = parsedPhases.flatMap((p) => p.sections || []).flatMap((s) => s.tasks).length;
    const newProj = {
      id: newProjId,
      name: bulkImportName.trim(),
      description: bulkImportDesc.trim() || `Imported task list containing ${totalCount} tasks.`,
      category: bulkImportCategory,
      color: "#EC4899",
      phases: parsedPhases
    };

    setProjects((prev) => [...prev, newProj]);
    setActiveProjectId(newProjId);
    setActivePhase(0);
    setIsBulkImporting(false);
    setBulkImportName("");
    setBulkImportDesc("");
    setBulkImportText("");
    setViewMode("playbook");
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
  };

  const handleDuplicateProject = (projId) => {
    const target = projects.find((p) => p.id === projId);
    if (!target) return;

    const cloned = {
      ...target,
      id: `proj-${Date.now()}`,
      name: `${target.name} (Copy)`
    };

    setProjects((prev) => [...prev, cloned]);
    setActiveProjectId(cloned.id);
    setViewMode("playbook");
  };

  const handleDeleteProject = (projId, projName) => {
    if (projects.length <= 1) {
      alert("You cannot delete the last remaining project.");
      return;
    }
    if (!window.confirm(`Are you sure you want to delete project "${projName}"?`)) return;

    const filtered = projects.filter((p) => p.id !== projId);
    setProjects(filtered);
    if (activeProjectId === projId) {
      setActiveProjectId(filtered[0].id);
      setActivePhase(0);
    }
  };

  // PHASE MANAGEMENT FUNCTIONS
  const handleAddPhase = () => {
    const title = newPhaseTitle.trim();
    if (!title) return;

    updateActiveProjectPhases((prevPhases) => {
      const newId = prevPhases.length;
      const colors = ["#6366F1", "#8B5CF6", "#EC4899", "#F59E0B", "#10B981", "#0EA5E9", "#F97316", "#EF4444"];
      const nextColor = colors[newId % colors.length];

      return [
        ...prevPhases,
        {
          id: newId,
          label: `Phase ${newId}`,
          title,
          timeline: newPhaseTimeline.trim() || "Planned",
          color: nextColor,
          description: `Execution tasks for ${title}.`,
          sections: [
            {
              title: "General Tasks",
              tasks: [{ id: `task-${Date.now()}`, text: `Initial milestone for ${title}` }]
            }
          ]
        }
      ];
    });

    setNewPhaseTitle("");
    setNewPhaseTimeline("");
    setIsAddingPhase(false);
  };

  const handleDeletePhase = (phaseId, phaseTitle) => {
    if ((currentProject.phases || []).length <= 1) {
      alert("Projects must have at least one phase.");
      return;
    }
    if (!window.confirm(`Are you sure you want to delete "${phaseTitle}"?`)) return;

    updateActiveProjectPhases((prevPhases) => {
      return prevPhases.filter((p) => p.id !== phaseId);
    });

    setActivePhase(0);
  };

  // TASK TOGGLE
  const toggleTask = (id) => {
    setCompleted((prev) => {
      const nextState = { ...prev, [id]: !prev[id] };
      const currTasks = (currentPhase.sections || []).flatMap((s) => s.tasks);
      if (currTasks.length > 0) {
        const isNowComplete = currTasks.every((t) => nextState[t.id]);
        const wasComplete = currTasks.every((t) => prev[t.id]);
        if (isNowComplete && !wasComplete) {
          confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
        }
      }
      return nextState;
    });
  };

  // REORDER TOPICS / SECTIONS
  const handleReorderSections = (phaseId, fromIndex, toIndex) => {
    if (!isEditMode) return;
    if (fromIndex === null || toIndex === null || fromIndex === toIndex) return;

    updateActiveProjectPhases((prevPhases) =>
      prevPhases.map((p) => {
        if (p.id === phaseId) {
          const updatedSections = [...p.sections];
          const [moved] = updatedSections.splice(fromIndex, 1);
          updatedSections.splice(toIndex, 0, moved);
          return { ...p, sections: updatedSections };
        }
        return p;
      })
    );
  };

  const handleMoveSection = (phaseId, sectionIndex, direction) => {
    if (!isEditMode) return;
    const targetIndex = direction === "up" ? sectionIndex - 1 : sectionIndex + 1;
    if (targetIndex < 0 || targetIndex >= (currentPhase.sections || []).length) return;
    handleReorderSections(phaseId, sectionIndex, targetIndex);
  };

  // REORDER TASKS INSIDE A SECTION
  const handleReorderTasks = (phaseId, sectionIndex, fromTaskIndex, toTaskIndex) => {
    if (!isEditMode) return;
    if (fromTaskIndex === null || toTaskIndex === null || fromTaskIndex === toTaskIndex) return;

    updateActiveProjectPhases((prevPhases) =>
      prevPhases.map((p) => {
        if (p.id === phaseId) {
          const updatedSections = [...p.sections];
          const tasks = [...updatedSections[sectionIndex].tasks];
          const [movedTask] = tasks.splice(fromTaskIndex, 1);
          tasks.splice(toTaskIndex, 0, movedTask);
          updatedSections[sectionIndex] = { ...updatedSections[sectionIndex], tasks };
          return { ...p, sections: updatedSections };
        }
        return p;
      })
    );
  };

  const handleMoveTask = (phaseId, sectionIndex, taskIndex, direction) => {
    if (!isEditMode) return;
    const targetIndex = direction === "up" ? taskIndex - 1 : taskIndex + 1;
    const section = (currentPhase.sections || [])[sectionIndex];
    if (!section || targetIndex < 0 || targetIndex >= section.tasks.length) return;
    handleReorderTasks(phaseId, sectionIndex, taskIndex, targetIndex);
  };

  // TOPIC CREATION, RENAMING, DELETION
  const handleAddTopic = (phaseId) => {
    const title = newTopicTitle.trim();
    if (!title) return;

    updateActiveProjectPhases((prevPhases) =>
      prevPhases.map((p) => {
        if (p.id === phaseId) {
          return { ...p, sections: [...p.sections, { title, tasks: [] }] };
        }
        return p;
      })
    );

    setNewTopicTitle("");
    setIsAddingTopic(false);
  };

  const handleRenameSection = (phaseId, sectionIndex, currentTitle) => {
    const newTitle = window.prompt("Rename Topic / Section:", currentTitle);
    if (!newTitle || !newTitle.trim() || newTitle.trim() === currentTitle) return;

    updateActiveProjectPhases((prevPhases) =>
      prevPhases.map((p) => {
        if (p.id === phaseId) {
          const updated = [...p.sections];
          updated[sectionIndex] = { ...updated[sectionIndex], title: newTitle.trim() };
          return { ...p, sections: updated };
        }
        return p;
      })
    );
  };

  const handleDeleteSection = (phaseId, sectionIndex, sectionTitle) => {
    if (!window.confirm(`Are you sure you want to delete topic "${sectionTitle}" and all its tasks?`)) return;

    updateActiveProjectPhases((prevPhases) =>
      prevPhases.map((p) => {
        if (p.id === phaseId) {
          const sectionToDelete = p.sections[sectionIndex];
          const taskIdsToRemove = sectionToDelete ? sectionToDelete.tasks.map((t) => t.id) : [];

          setCompleted((prevComp) => {
            const nextComp = { ...prevComp };
            taskIdsToRemove.forEach((id) => delete nextComp[id]);
            return nextComp;
          });

          return { ...p, sections: p.sections.filter((_, idx) => idx !== sectionIndex) };
        }
        return p;
      })
    );
  };

  // TASK CREATION & DELETION
  const handleAddTask = (phaseId, sectionIndex) => {
    const text = (newTasksInputs[sectionIndex] || "").trim();
    if (!text) return;

    const newTaskId = `task-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;

    updateActiveProjectPhases((prevPhases) =>
      prevPhases.map((p) => {
        if (p.id === phaseId) {
          const updatedSections = [...p.sections];
          updatedSections[sectionIndex] = {
            ...updatedSections[sectionIndex],
            tasks: [...updatedSections[sectionIndex].tasks, { id: newTaskId, text }]
          };
          return { ...p, sections: updatedSections };
        }
        return p;
      })
    );

    setNewTasksInputs((prev) => ({ ...prev, [sectionIndex]: "" }));
  };

  const handleEditTask = (phaseId, sectionIndex, taskId, currentText) => {
    const newText = window.prompt("Edit Task Description:", currentText);
    if (!newText || !newText.trim() || newText.trim() === currentText) return;

    updateActiveProjectPhases((prevPhases) =>
      prevPhases.map((p) => {
        if (p.id === phaseId) {
          const updatedSections = [...p.sections];
          updatedSections[sectionIndex] = {
            ...updatedSections[sectionIndex],
            tasks: updatedSections[sectionIndex].tasks.map((t) =>
              t.id === taskId ? { ...t, text: newText.trim() } : t
            )
          };
          return { ...p, sections: updatedSections };
        }
        return p;
      })
    );
  };

  const handleDeleteTask = (phaseId, sectionIndex, taskId, taskText) => {
    if (!window.confirm(`Are you sure you want to delete task:\n"${taskText}"?`)) return;

    updateActiveProjectPhases((prevPhases) =>
      prevPhases.map((p) => {
        if (p.id === phaseId) {
          const updatedSections = [...p.sections];
          updatedSections[sectionIndex] = {
            ...updatedSections[sectionIndex],
            tasks: updatedSections[sectionIndex].tasks.filter((t) => t.id !== taskId)
          };
          return { ...p, sections: updatedSections };
        }
        return p;
      })
    );

    setCompleted((prev) => {
      const next = { ...prev };
      delete next[taskId];
      return next;
    });
  };

  const markAllInPhase = (phase, status) => {
    const tasks = (phase.sections || []).flatMap((s) => s.tasks);
    setCompleted((prev) => {
      const next = { ...prev };
      tasks.forEach((t) => {
        next[t.id] = status;
      });
      return next;
    });
    if (status) {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    }
  };

  const resetAllProgress = () => {
    if (window.confirm("Are you sure you want to reset all projects, custom tasks, and progress to default datasets?")) {
      setCompleted({});
      setProjects(defaultProjects);
      setActiveProjectId(defaultProjects[0].id);
      setActivePhase(0);
      localStorage.removeItem("b2b_gtm_projects_v3");
      localStorage.removeItem("b2b_gtm_playbook_completed");
    }
  };

  const exportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
      projects,
      completed,
      exportDate: new Date().toISOString(),
      completedCount,
      totalTasks,
      progressPercentage: progress
    }, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `projects-playbook-data-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const exportCSV = () => {
    let csvContent = "data:text/csv;charset=utf-8,Project,Phase,Section,Task ID,Task Description,Status\n";
    projects.forEach((proj) => {
      (proj.phases || []).forEach((p) => {
        (p.sections || []).forEach((s) => {
          s.tasks.forEach((t) => {
            const isDone = !!completed[t.id];
            const cleanText = `"${t.text.replace(/"/g, '""')}"`;
            csvContent += `"${proj.name}","${p.label}: ${p.title}","${s.title}","${t.id}",${cleanText},"${isDone ? 'Completed' : 'Pending'}"\n`;
          });
        });
      });
    });
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", encodeURI(csvContent));
    downloadAnchor.setAttribute("download", `projects-tasks-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Search Results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    return allTasksInProject.filter((t) =>
      t.text.toLowerCase().includes(q) ||
      t.sectionTitle.toLowerCase().includes(q) ||
      t.phaseTitle.toLowerCase().includes(q) ||
      t.phaseLabel.toLowerCase().includes(q)
    );
  }, [searchQuery, allTasksInProject]);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      background: darkTheme ? "#0B0F17" : "#F8FAFC",
      color: darkTheme ? "#F8FAFC" : "#0F172A",
      fontFamily: "'Inter', system-ui, sans-serif"
    }}>
      {/* TOP NAVBAR */}
      <header className="no-print" style={{
        height: 56,
        borderBottom: `1px solid ${darkTheme ? "#1E293B" : "#E2E8F0"}`,
        background: darkTheme ? "#0F172A" : "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        flexShrink: 0,
        zIndex: 10
      }}>
        {/* Left Brand & View Mode Switcher */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: "linear-gradient(135deg, #6366F1 0%, #10B981 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFF"
            }}>
              <Zap size={18} strokeWidth={2.5} />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: "-0.01em", lineHeight: 1.1 }}>
                Project Execution Hub
              </div>
              <div style={{ fontSize: 11, color: darkTheme ? "#94A3B8" : "#64748B" }}>
                Strategy & Task Engine
              </div>
            </div>
          </div>

          <div style={{ width: 1, height: 22, background: darkTheme ? "#334155" : "#E2E8F0" }} />

          {/* View Mode Buttons */}
          <div style={{ display: "flex", gap: 4, background: darkTheme ? "#1E293B" : "#F1F5F9", padding: 3, borderRadius: 6 }}>
            <button
              onClick={() => setViewMode("dashboard")}
              style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "4px 10px", borderRadius: 4, border: "none",
                background: viewMode === "dashboard" ? (darkTheme ? "#334155" : "#FFF") : "transparent",
                color: viewMode === "dashboard" ? (darkTheme ? "#F8FAFC" : "#0F172A") : "#64748B",
                fontSize: 11.5, fontWeight: 700, cursor: "pointer",
                boxShadow: viewMode === "dashboard" ? "0 1px 3px rgba(0,0,0,0.1)" : "none"
              }}
            >
              <LayoutGrid size={13} /> Projects Hub
            </button>
            <button
              onClick={() => setViewMode("playbook")}
              style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "4px 10px", borderRadius: 4, border: "none",
                background: viewMode === "playbook" ? (darkTheme ? "#334155" : "#FFF") : "transparent",
                color: viewMode === "playbook" ? (darkTheme ? "#F8FAFC" : "#0F172A") : "#64748B",
                fontSize: 11.5, fontWeight: 700, cursor: "pointer",
                boxShadow: viewMode === "playbook" ? "0 1px 3px rgba(0,0,0,0.1)" : "none"
              }}
            >
              <Layers size={13} /> Active Playbook ({totalTasks} Tasks)
            </button>
          </div>

          {/* Quick Project Selector Dropdown */}
          <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
            <select
              value={activeProjectId}
              onChange={(e) => {
                setActiveProjectId(e.target.value);
                setActivePhase(0);
                setViewMode("playbook");
              }}
              style={{
                padding: "5px 28px 5px 10px",
                borderRadius: 6,
                border: `1px solid ${darkTheme ? "#334155" : "#CBD5E1"}`,
                background: darkTheme ? "#1E293B" : "#F8FAFC",
                color: darkTheme ? "#F8FAFC" : "#0F172A",
                fontSize: 12,
                fontWeight: 700,
                cursor: "pointer",
                outline: "none",
                appearance: "none"
              }}
            >
              {projects.map((p) => (
                <option key={p.id} value={p.id}>
                  📌 {p.name}
                </option>
              ))}
            </select>
            <DropdownIcon size={14} style={{ position: "absolute", right: 8, pointerEvents: "none", color: "#94A3B8" }} />
          </div>
        </div>

        {/* Global Search Bar */}
        <div style={{ flex: "0 1 360px", position: "relative" }}>
          <Search size={14} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#94A3B8" }} />
          <input
            type="text"
            placeholder="Search tasks across active project..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (e.target.value && viewMode !== "playbook") setViewMode("playbook");
            }}
            style={{
              width: "100%",
              padding: "6px 28px 6px 34px",
              borderRadius: 8,
              border: `1px solid ${darkTheme ? "#334155" : "#CBD5E1"}`,
              background: darkTheme ? "#1E293B" : "#F1F5F9",
              color: darkTheme ? "#F8FAFC" : "#0F172A",
              fontSize: 12,
              outline: "none"
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              style={{
                position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)",
                background: "none", border: "none", cursor: "pointer", color: "#94A3B8"
              }}
            >
              <X size={13} />
            </button>
          )}
        </div>

        {/* Right Toolbar Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* EDIT MODE LOCK / UNLOCK TOGGLE */}
          {viewMode === "playbook" && (
            <button
              onClick={() => setIsEditMode(!isEditMode)}
              title={isEditMode ? "Lock Layout & Exit Edit Mode" : "Unlock to Drag, Edit, Add or Delete Tasks & Topics"}
              style={{
                padding: "6px 12px",
                borderRadius: 6,
                border: `1px solid ${isEditMode ? "#10B981" : darkTheme ? "#334155" : "#CBD5E1"}`,
                background: isEditMode ? "#10B981" : darkTheme ? "#1E293B" : "#FFF",
                color: isEditMode ? "#FFFFFF" : darkTheme ? "#CBD5E1" : "#475569",
                fontSize: 11.5,
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
                transition: "all 0.15s"
              }}
            >
              {isEditMode ? <Lock size={13} /> : <Pencil size={13} />}
              {isEditMode ? "Lock Layout" : "Edit Layout"}
            </button>
          )}

          <div style={{ width: 1, height: 20, background: darkTheme ? "#334155" : "#E2E8F0", margin: "0 2px" }} />

          {/* Export JSON / CSV */}
          <button
            onClick={exportJSON}
            title="Export Backup JSON"
            style={{
              padding: "6px 10px", borderRadius: 6, border: `1px solid ${darkTheme ? "#334155" : "#E2E8F0"}`,
              background: darkTheme ? "#1E293B" : "#FFF", color: darkTheme ? "#CBD5E1" : "#475569",
              fontSize: 11.5, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 4
            }}
          >
            <FileJson size={13} /> JSON
          </button>
          <button
            onClick={exportCSV}
            title="Export CSV Report"
            style={{
              padding: "6px 10px", borderRadius: 6, border: `1px solid ${darkTheme ? "#334155" : "#E2E8F0"}`,
              background: darkTheme ? "#1E293B" : "#FFF", color: darkTheme ? "#CBD5E1" : "#475569",
              fontSize: 11.5, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 4
            }}
          >
            <Download size={13} /> CSV
          </button>

          {/* Reset button */}
          <button
            onClick={resetAllProgress}
            title="Reset All Projects & Tasks"
            style={{
              padding: "6px 10px", borderRadius: 6, border: `1px solid ${darkTheme ? "#334155" : "#E2E8F0"}`,
              background: darkTheme ? "#1E293B" : "#FFF", color: darkTheme ? "#CBD5E1" : "#475569",
              fontSize: 11.5, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 4
            }}
          >
            <RotateCcw size={13} /> Reset
          </button>

          {/* Dark theme toggle */}
          <button
            onClick={() => setDarkTheme(!darkTheme)}
            title="Toggle Dark Mode"
            style={{
              width: 32, height: 32, borderRadius: 6, border: `1px solid ${darkTheme ? "#334155" : "#E2E8F0"}`,
              background: darkTheme ? "#1E293B" : "#FFF", color: darkTheme ? "#F59E0B" : "#475569",
              display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer"
            }}
          >
            {darkTheme ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </header>

      {/* DASHBOARD HOME VIEW */}
      {viewMode === "dashboard" ? (
        <div style={{ flex: 1, overflowY: "auto", padding: "40px 56px" }}>
          {/* Dashboard Header Banner */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6366F1", marginBottom: 4 }}>
                Multi-Project Workspace
              </div>
              <h1 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 6px", letterSpacing: "-0.02em" }}>
                Projects Execution Dashboard
              </h1>
              <p style={{ fontSize: 14, color: darkTheme ? "#94A3B8" : "#64748B", margin: 0 }}>
                Design custom project execution strategies, manage multi-phase roadmaps, and track completion progress.
              </p>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <button
                onClick={() => { setIsBulkImporting(true); setIsCreatingProject(false); }}
                style={{
                  padding: "10px 18px", borderRadius: 8,
                  border: `1.5px solid ${darkTheme ? "#334155" : "#CBD5E1"}`,
                  background: darkTheme ? "#1E293B" : "#FFFFFF",
                  color: darkTheme ? "#F8FAFC" : "#0F172A",
                  fontSize: 13, fontWeight: 700, cursor: "pointer",
                  display: "flex", alignItems: "center", gap: 8,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                }}
              >
                <Download size={15} style={{ transform: "rotate(180deg)" }} /> Bulk Import Tasks
              </button>
              <button
                onClick={() => { setIsCreatingProject(true); setIsBulkImporting(false); }}
                style={{
                  padding: "10px 20px", borderRadius: 8, border: "none",
                  background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
                  color: "#FFFFFF", fontSize: 13, fontWeight: 700, cursor: "pointer",
                  display: "flex", alignItems: "center", gap: 8,
                  boxShadow: "0 4px 14px rgba(99, 102, 241, 0.35)"
                }}
              >
                <Plus size={16} /> Create New Project
              </button>
            </div>
          </div>

          {/* BULK IMPORT FORM DRAWER */}
          {isBulkImporting && (
            <div style={{
              padding: "22px 26px", borderRadius: 12,
              border: `1.5px solid #EC4899`,
              background: darkTheme ? "#1E293B" : "#FFFFFF",
              boxShadow: "0 8px 24px rgba(236, 72, 153, 0.2)",
              marginBottom: 36
            }} className="animate-fade-in">
              <h3 style={{ fontSize: 15, fontWeight: 800, margin: "0 0 8px", color: "#EC4899", display: "flex", alignItems: "center", gap: 8 }}>
                <Download size={18} style={{ transform: "rotate(180deg)" }} /> Bulk Upload & Convert Task List into Active Project
              </h3>
              <p style={{ fontSize: 12.5, color: darkTheme ? "#94A3B8" : "#64748B", margin: "0 0 16px" }}>
                Paste 10 to 100+ tasks directly from your Word doc, Markdown, or bullet list. The parser will automatically format headers, sections, and checkable tasks!
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", gap: 12 }}>
                  <input
                    type="text"
                    placeholder="Project Name (e.g. First 10 Customers Playbook)..."
                    value={bulkImportName}
                    onChange={(e) => setBulkImportName(e.target.value)}
                    style={{
                      flex: 2, padding: "9px 14px", borderRadius: 8,
                      border: `1px solid ${darkTheme ? "#334155" : "#CBD5E1"}`,
                      background: darkTheme ? "#0F172A" : "#F8FAFC",
                      color: darkTheme ? "#F8FAFC" : "#0F172A", fontSize: 13, outline: "none"
                    }}
                  />
                  <select
                    value={bulkImportCategory}
                    onChange={(e) => setBulkImportCategory(e.target.value)}
                    style={{
                      flex: 1, padding: "9px 14px", borderRadius: 8,
                      border: `1px solid ${darkTheme ? "#334155" : "#CBD5E1"}`,
                      background: darkTheme ? "#0F172A" : "#F8FAFC",
                      color: darkTheme ? "#F8FAFC" : "#0F172A", fontSize: 13, outline: "none"
                    }}
                  >
                    <option value="Customer Acquisition">Customer Acquisition</option>
                    <option value="Go-To-Market">Go-To-Market</option>
                    <option value="Lead Generation">Lead Generation</option>
                    <option value="Strategy">Strategy</option>
                    <option value="Product Growth">Product Growth</option>
                  </select>
                </div>
                <input
                  type="text"
                  placeholder="Brief Description or Goal (Optional)..."
                  value={bulkImportDesc}
                  onChange={(e) => setBulkImportDesc(e.target.value)}
                  style={{
                    padding: "9px 14px", borderRadius: 8,
                    border: `1px solid ${darkTheme ? "#334155" : "#CBD5E1"}`,
                    background: darkTheme ? "#0F172A" : "#F8FAFC",
                    color: darkTheme ? "#F8FAFC" : "#0F172A", fontSize: 13, outline: "none"
                  }}
                />
                <textarea
                  rows={8}
                  placeholder={`Paste all your tasks here (e.g. 56 tasks from Word / Docx / TXT / JSON)...\n\nExample:\nPhase 1: Foundation\n- Task 1: Complete setup\n- Task 2: Build ROI calculator\nPhase 2: Outreach\n- Task 3: Send initial emails`}
                  value={bulkImportText}
                  onChange={(e) => setBulkImportText(e.target.value)}
                  style={{
                    width: "100%", padding: "12px 14px", borderRadius: 8,
                    border: `1px solid ${darkTheme ? "#334155" : "#CBD5E1"}`,
                    background: darkTheme ? "#0F172A" : "#F8FAFC",
                    color: darkTheme ? "#F8FAFC" : "#0F172A",
                    fontSize: 12.5, fontFamily: "monospace", outline: "none", resize: "vertical"
                  }}
                />
                <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 4 }}>
                  <button
                    onClick={() => setIsBulkImporting(false)}
                    style={{
                      padding: "8px 16px", borderRadius: 6, border: `1px solid ${darkTheme ? "#334155" : "#CBD5E1"}`,
                      background: "transparent", color: darkTheme ? "#94A3B8" : "#64748B", fontSize: 12.5, fontWeight: 600, cursor: "pointer"
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleBulkImportProject}
                    disabled={!bulkImportName.trim() || !bulkImportText.trim()}
                    style={{
                      padding: "8px 20px", borderRadius: 6, border: "none",
                      background: (!bulkImportName.trim() || !bulkImportText.trim()) ? "#CBD5E1" : "linear-gradient(135deg, #EC4899, #F43F5E)",
                      color: "#FFFFFF", fontSize: 12.5, fontWeight: 700, cursor: (!bulkImportName.trim() || !bulkImportText.trim()) ? "not-allowed" : "pointer"
                    }}
                  >
                    Import & Launch Project
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* CREATE PROJECT FORM DRAWER */}
          {isCreatingProject && (
            <div style={{
              padding: "20px 24px", borderRadius: 12,
              border: `1.5px solid #6366F1`,
              background: darkTheme ? "#1E293B" : "#FFFFFF",
              boxShadow: "0 8px 24px rgba(99, 102, 241, 0.2)",
              marginBottom: 36
            }} className="animate-fade-in">
              <h3 style={{ fontSize: 15, fontWeight: 800, margin: "0 0 14px", color: "#6366F1", display: "flex", alignItems: "center", gap: 8 }}>
                <FolderKanban size={18} /> Design New Project & Execution Roadmap
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <input
                  type="text"
                  placeholder="Project Title (e.g. WABA Lead Automation, Mobile App Launch, Enterprise Pipeline)..."
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  style={{
                    padding: "10px 14px", borderRadius: 8,
                    border: `1px solid ${darkTheme ? "#334155" : "#CBD5E1"}`,
                    background: darkTheme ? "#0F172A" : "#F8FAFC",
                    color: darkTheme ? "#F8FAFC" : "#0F172A", fontSize: 13, outline: "none"
                  }}
                />
                <div style={{ display: "flex", gap: 12 }}>
                  <input
                    type="text"
                    placeholder="Brief Project Description / Goal..."
                    value={newProjectDesc}
                    onChange={(e) => setNewProjectDesc(e.target.value)}
                    style={{
                      flex: 2, padding: "9px 14px", borderRadius: 8,
                      border: `1px solid ${darkTheme ? "#334155" : "#CBD5E1"}`,
                      background: darkTheme ? "#0F172A" : "#F8FAFC",
                      color: darkTheme ? "#F8FAFC" : "#0F172A", fontSize: 13, outline: "none"
                    }}
                  />
                  <select
                    value={newProjectCat}
                    onChange={(e) => setNewProjectCat(e.target.value)}
                    style={{
                      flex: 1, padding: "9px 14px", borderRadius: 8,
                      border: `1px solid ${darkTheme ? "#334155" : "#CBD5E1"}`,
                      background: darkTheme ? "#0F172A" : "#F8FAFC",
                      color: darkTheme ? "#F8FAFC" : "#0F172A", fontSize: 13, outline: "none"
                    }}
                  >
                    <option value="Strategy">Strategy</option>
                    <option value="Go-To-Market">Go-To-Market</option>
                    <option value="Lead Generation">Lead Generation</option>
                    <option value="Product Growth">Product Growth</option>
                    <option value="Engineering">Engineering</option>
                  </select>
                </div>
                <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 4 }}>
                  <button
                    onClick={() => setIsCreatingProject(false)}
                    style={{
                      padding: "8px 16px", borderRadius: 6, border: `1px solid ${darkTheme ? "#334155" : "#CBD5E1"}`,
                      background: "transparent", color: darkTheme ? "#94A3B8" : "#64748B", fontSize: 12.5, fontWeight: 600, cursor: "pointer"
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCreateProject}
                    disabled={!newProjectName.trim()}
                    style={{
                      padding: "8px 20px", borderRadius: 6, border: "none",
                      background: newProjectName.trim() ? "#6366F1" : "#CBD5E1",
                      color: "#FFF", fontSize: 12.5, fontWeight: 700, cursor: newProjectName.trim() ? "pointer" : "not-allowed"
                    }}
                  >
                    Create & Open Project
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* PROJECTS GRID CARDS */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
            {projects.map((proj) => {
              const projTasks = (proj.phases || []).flatMap((p) => (p.sections || []).flatMap((s) => s.tasks));
              const projDoneCount = projTasks.filter((t) => completed[t.id]).length;
              const projProgress = projTasks.length > 0 ? Math.round((projDoneCount / projTasks.length) * 100) : 0;
              const isSelected = proj.id === activeProjectId;

              return (
                <div
                  key={proj.id}
                  className="interactive-card"
                  style={{
                    borderRadius: 12,
                    background: darkTheme ? "#1E293B" : "#FFFFFF",
                    border: `1px solid ${isSelected ? proj.color : darkTheme ? "#334155" : "#E2E8F0"}`,
                    padding: 24,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                    boxShadow: isSelected ? `0 0 16px ${proj.color}30` : "none"
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                      <span style={{
                        fontSize: 10.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em",
                        color: proj.color, background: `${proj.color}15`, padding: "3px 10px", borderRadius: 100
                      }}>
                        {proj.category || "Project"}
                      </span>
                      
                      {/* Card Action Menu */}
                      <div style={{ display: "flex", gap: 4 }}>
                        <button
                          onClick={() => handleDuplicateProject(proj.id)}
                          title="Duplicate / Clone Project"
                          style={{
                            border: "none", background: "transparent", cursor: "pointer",
                            color: darkTheme ? "#64748B" : "#94A3B8", padding: 3
                          }}
                        >
                          <Copy size={14} />
                        </button>
                        <button
                          onClick={() => handleDeleteProject(proj.id, proj.name)}
                          title="Delete Project"
                          style={{
                            border: "none", background: "transparent", cursor: "pointer",
                            color: darkTheme ? "#64748B" : "#94A3B8", padding: 3
                          }}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>

                    <h2 style={{ fontSize: 18, fontWeight: 800, margin: "0 0 8px", lineHeight: 1.3 }}>
                      {proj.name}
                    </h2>
                    <p style={{ fontSize: 13, color: darkTheme ? "#94A3B8" : "#64748B", margin: "0 0 20px", lineHeight: 1.5 }}>
                      {proj.description}
                    </p>
                  </div>

                  <div>
                    {/* Progress Bar */}
                    <div style={{ marginBottom: 16 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5, fontWeight: 700, marginBottom: 6 }}>
                        <span style={{ color: darkTheme ? "#94A3B8" : "#64748B" }}>
                          {(proj.phases || []).length} Phases • {projTasks.length} Tasks
                        </span>
                        <span style={{ color: proj.color }}>{projProgress}%</span>
                      </div>
                      <div style={{ height: 6, background: darkTheme ? "#0F172A" : "#E2E8F0", borderRadius: 3, overflow: "hidden" }}>
                        <div style={{ height: "100%", background: proj.color, borderRadius: 3, width: `${projProgress}%`, transition: "width 0.3s" }} />
                      </div>
                    </div>

                    {/* Open Playbook Button */}
                    <button
                      onClick={() => {
                        setActiveProjectId(proj.id);
                        setActivePhase(0);
                        setViewMode("playbook");
                      }}
                      style={{
                        width: "100%", padding: "10px", borderRadius: 8, border: "none",
                        background: darkTheme ? "#0F172A" : "#F1F5F9",
                        color: darkTheme ? "#F8FAFC" : "#0F172A",
                        fontSize: 12.5, fontWeight: 700, cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                        transition: "all 0.15s"
                      }}
                    >
                      Open Execution Strategy <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* PLAYBOOK EXECUTION VIEW */
        <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
          {/* Sidebar */}
          <div className="no-print" style={{
            width: 260,
            background: darkTheme ? "#060911" : "#0F172A",
            display: "flex",
            flexDirection: "column",
            flexShrink: 0,
            overflowY: "auto",
            borderRight: `1px solid ${darkTheme ? "#1E293B" : "#1E293B"}`
          }}>
            {/* Active Project Title Banner */}
            <div style={{ padding: "20px 20px 14px" }}>
              <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.1em", color: "#64748B", textTransform: "uppercase", marginBottom: 4 }}>
                {currentProject.category || "Active Project"}
              </div>
              <div style={{ fontSize: 14.5, fontWeight: 800, color: "#F8FAFC", lineHeight: 1.3 }}>
                {currentProject.name}
              </div>
            </div>

            {/* Global Progress Widget */}
            <div style={{ padding: "0 20px 20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                <span style={{ fontSize: 11, color: "#94A3B8", display: "flex", alignItems: "center", gap: 4 }}>
                  <ListCheck size={12} /> {completedCount} / {totalTasks} tasks
                </span>
                <span style={{ fontSize: 12, fontWeight: 800, color: progress === 100 ? "#34D399" : "#10B981" }}>
                  {progress}%
                </span>
              </div>
              <div style={{ height: 6, background: "#1E293B", borderRadius: 3, overflow: "hidden" }}>
                <div style={{
                  height: "100%",
                  background: "linear-gradient(90deg, #6366F1, #10B981)",
                  borderRadius: 3,
                  width: `${progress}%`,
                  transition: "width 0.3s"
                }} />
              </div>
              {progress === 100 && totalTasks > 0 && (
                <div style={{
                  marginTop: 8, fontSize: 10.5, fontWeight: 700, color: "#34D399",
                  display: "flex", alignItems: "center", gap: 4, background: "rgba(52, 211, 153, 0.1)",
                  padding: "4px 8px", borderRadius: 4
                }}>
                  <Sparkles size={12} /> Launch Ready! All phases complete.
                </div>
              )}
            </div>

            {/* Filter Mode Selector in Sidebar */}
            <div style={{ padding: "0 12px 14px", display: "flex", gap: 4 }}>
              {["all", "pending", "completed"].map((m) => (
                <button
                  key={m}
                  onClick={() => setFilterMode(m)}
                  style={{
                    flex: 1, padding: "5px 0", fontSize: 10.5, fontWeight: 600,
                    borderRadius: 5, border: "none", cursor: "pointer", textTransform: "capitalize",
                    background: filterMode === m ? "#334155" : "transparent",
                    color: filterMode === m ? "#F8FAFC" : "#64748B"
                  }}
                >
                  {m}
                </button>
              ))}
            </div>

            {/* Phase Nav List */}
            <div style={{ flex: 1, padding: "0 8px 16px" }}>
              {(currentProject.phases || []).map((phase, pIdx) => {
                const rate = getPhaseCompletionRate(phase);
                const isActive = activePhase === pIdx && !searchQuery;
                return (
                  <button
                    key={phase.id || pIdx}
                    onClick={() => {
                      setActivePhase(pIdx);
                      setSearchQuery("");
                    }}
                    style={{
                      width: "100%", textAlign: "left", padding: "10px 12px",
                      borderRadius: 8, border: "none", cursor: "pointer",
                      background: isActive ? "#1E293B" : "transparent",
                      marginBottom: 3, display: "flex", alignItems: "center", gap: 10,
                      transition: "background 0.15s"
                    }}
                  >
                    <div style={{
                      width: 7, height: 7, borderRadius: "50%", flexShrink: 0,
                      background: rate === 100 ? "#10B981" : phase.color || "#6366F1",
                      boxShadow: isActive ? `0 0 8px ${phase.color}` : "none",
                      opacity: isActive || rate > 0 ? 1 : 0.5
                    }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: isActive ? phase.color : "#64748B", marginBottom: 1 }}>
                        {phase.label}
                      </div>
                      <div style={{
                        fontSize: 12.5, fontWeight: 500,
                        color: isActive ? "#F8FAFC" : rate === 100 ? "#CBD5E1" : "#94A3B8",
                        whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"
                      }}>
                        {phase.title}
                      </div>
                    </div>
                    {rate > 0 && (
                      <div style={{
                        fontSize: 10.5, fontWeight: 700,
                        color: rate === 100 ? "#10B981" : "#94A3B8",
                        background: rate === 100 ? "rgba(16, 185, 129, 0.15)" : "transparent",
                        padding: rate === 100 ? "2px 6px" : 0, borderRadius: 4, flexShrink: 0
                      }}>
                        {rate}%
                      </div>
                    )}
                  </button>
                );
              })}

              {/* Add Phase Button in Edit Mode */}
              {isEditMode && (
                <div style={{ marginTop: 8, padding: "0 4px" }}>
                  <button
                    onClick={() => setIsAddingPhase(true)}
                    style={{
                      width: "100%", padding: "8px", borderRadius: 6,
                      border: "1px dashed #475569", background: "transparent",
                      color: "#94A3B8", fontSize: 11.5, fontWeight: 700, cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 6
                    }}
                  >
                    <Plus size={14} /> Add New Phase
                  </button>
                </div>
              )}
            </div>

            <div style={{ padding: 16, borderTop: "1px solid #1E293B", fontSize: 11, color: "#64748B" }}>
              Press <kbd style={{ background: "#1E293B", color: "#CBD5E1", padding: "2px 5px", borderRadius: 3, fontSize: 10 }}>←</kbd> <kbd style={{ background: "#1E293B", color: "#CBD5E1", padding: "2px 5px", borderRadius: 3, fontSize: 10 }}>→</kbd> to navigate phases
            </div>
          </div>

          {/* Main Content Area */}
          <div className="main-content" style={{ flex: 1, overflowY: "auto", padding: "36px 48px" }}>
            
            {/* EDIT MODE BANNER */}
            {isEditMode && (
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "10px 16px", borderRadius: 8,
                background: darkTheme ? "rgba(16, 185, 129, 0.15)" : "#ECFDF5",
                border: `1px solid ${darkTheme ? "rgba(16, 185, 129, 0.3)" : "#A7F3D0"}`,
                color: darkTheme ? "#34D399" : "#065F46",
                fontSize: 12.5, fontWeight: 600, marginBottom: 24
              }} className="no-print animate-fade-in">
                <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Pencil size={15} /> <strong>Edit Layout Mode Active</strong> — Drag topics & tasks to reorder, add phases/topics/tasks, or edit titles.
                </span>
                <button
                  onClick={() => setIsEditMode(false)}
                  style={{
                    padding: "4px 12px", borderRadius: 6, border: "none",
                    background: "#10B981", color: "#FFFFFF",
                    fontSize: 11.5, fontWeight: 700, cursor: "pointer"
                  }}
                >
                  Done Editing & Lock
                </button>
              </div>
            )}

            {/* ADD PHASE FORM BANNER */}
            {isEditMode && isAddingPhase && (
              <div style={{
                padding: "16px 20px", borderRadius: 10,
                border: "1.5px solid #6366F1", background: darkTheme ? "#1E293B" : "#FFF",
                boxShadow: "0 4px 16px rgba(99, 102, 241, 0.2)", marginBottom: 28
              }} className="animate-fade-in no-print">
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 10, color: "#6366F1" }}>
                  Create New Execution Phase in {currentProject.name}
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <input
                    type="text"
                    placeholder="Phase Title (e.g. Scaling & Optimization, Security Audit)..."
                    value={newPhaseTitle}
                    onChange={(e) => setNewPhaseTitle(e.target.value)}
                    style={{ flex: 2, padding: "9px 14px", borderRadius: 8, border: `1px solid ${darkTheme ? "#334155" : "#CBD5E1"}`, background: darkTheme ? "#0F172A" : "#F8FAFC", color: darkTheme ? "#F8FAFC" : "#0F172A", fontSize: 13, outline: "none" }}
                  />
                  <input
                    type="text"
                    placeholder="Timeline (e.g. Days 90-120)..."
                    value={newPhaseTimeline}
                    onChange={(e) => setNewPhaseTimeline(e.target.value)}
                    style={{ flex: 1, padding: "9px 14px", borderRadius: 8, border: `1px solid ${darkTheme ? "#334155" : "#CBD5E1"}`, background: darkTheme ? "#0F172A" : "#F8FAFC", color: darkTheme ? "#F8FAFC" : "#0F172A", fontSize: 13, outline: "none" }}
                  />
                  <button
                    onClick={handleAddPhase}
                    disabled={!newPhaseTitle.trim()}
                    style={{ padding: "9px 18px", borderRadius: 8, border: "none", background: newPhaseTitle.trim() ? "#6366F1" : "#CBD5E1", color: "#FFF", fontSize: 13, fontWeight: 700, cursor: newPhaseTitle.trim() ? "pointer" : "not-allowed" }}
                  >
                    Add Phase
                  </button>
                  <button
                    onClick={() => setIsAddingPhase(false)}
                    style={{ padding: "9px 14px", borderRadius: 8, border: `1px solid ${darkTheme ? "#334155" : "#CBD5E1"}`, background: "transparent", color: darkTheme ? "#94A3B8" : "#64748B", fontSize: 13, fontWeight: 600, cursor: "pointer" }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* SEARCH RESULTS VIEW */}
            {searchResults ? (
              <div>
                <div style={{ marginBottom: 24, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <h1 style={{ fontSize: 22, fontWeight: 800, margin: "0 0 6px" }}>
                      Search Results for "{searchQuery}"
                    </h1>
                    <p style={{ fontSize: 13, color: darkTheme ? "#94A3B8" : "#64748B", margin: 0 }}>
                      Found {searchResults.length} matching GTM checklist items in {currentProject.name}
                    </p>
                  </div>
                  <button
                    onClick={() => setSearchQuery("")}
                    style={{ padding: "8px 14px", borderRadius: 8, border: `1px solid ${darkTheme ? "#334155" : "#E2E8F0"}`, background: darkTheme ? "#1E293B" : "#FFF", fontSize: 12, fontWeight: 600, cursor: "pointer", color: darkTheme ? "#F8FAFC" : "#475569" }}
                  >
                    Clear Search
                  </button>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {searchResults.map((task) => {
                    const done = !!completed[task.id];
                    if (filterMode === "pending" && done) return null;
                    if (filterMode === "completed" && !done) return null;

                    return (
                      <div
                        key={task.id}
                        onClick={() => toggleTask(task.id)}
                        className="interactive-card"
                        style={{
                          display: "flex", alignItems: "flex-start", gap: 14,
                          padding: "14px 18px", borderRadius: 10,
                          background: done ? (darkTheme ? "rgba(16, 185, 129, 0.08)" : "#F0FDF4") : (darkTheme ? "#1E293B" : "#FFFFFF"),
                          border: `1px solid ${done ? (darkTheme ? "rgba(16, 185, 129, 0.3)" : "#BBF7D0") : (darkTheme ? "#334155" : "#E2E8F0")}`,
                          cursor: "pointer"
                        }}
                      >
                        <div style={{ width: 20, height: 20, borderRadius: 6, flexShrink: 0, marginTop: 1, border: `2px solid ${done ? "#10B981" : darkTheme ? "#64748B" : "#CBD5E1"}`, background: done ? "#10B981" : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          {done && <Check size={13} color="white" strokeWidth={3} />}
                        </div>

                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 4 }}>
                            <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", color: task.color, background: `${task.color}15`, padding: "2px 8px", borderRadius: 4 }}>
                              {task.phaseLabel}: {task.phaseTitle}
                            </span>
                            <span style={{ fontSize: 11, color: darkTheme ? "#64748B" : "#94A3B8" }}>
                              • {task.sectionTitle}
                            </span>
                          </div>
                          <span style={{ fontSize: 14, lineHeight: 1.5, color: done ? (darkTheme ? "#94A3B8" : "#64748B") : (darkTheme ? "#F8FAFC" : "#1E293B"), textDecoration: done ? "line-through" : "none" }}>
                            {task.text}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* STANDARD PHASE VIEW */
              <div>
                {/* Phase Header */}
                <div style={{ marginBottom: 32 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{
                        fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase",
                        color: currentPhase.color || "#6366F1", background: `${currentPhase.color || "#6366F1"}18`,
                        padding: "4px 12px", borderRadius: 100, border: `1px solid ${currentPhase.color || "#6366F1"}30`
                      }}>
                        {currentPhase.label}
                      </span>
                      <span style={{ fontSize: 12, color: darkTheme ? "#94A3B8" : "#64748B", fontWeight: 600, display: "flex", alignItems: "center", gap: 5 }}>
                        <Clock size={14} /> {currentPhase.timeline}
                      </span>
                    </div>

                    {/* Phase Actions */}
                    <div className="no-print" style={{ display: "flex", gap: 8 }}>
                      {isEditMode && (
                        <>
                          <button
                            onClick={() => setIsAddingTopic(true)}
                            style={{ padding: "6px 12px", borderRadius: 6, border: "none", background: currentPhase.color || "#6366F1", color: "#FFFFFF", fontSize: 11.5, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}
                          >
                            <FolderPlus size={14} /> Add Topic / Section
                          </button>
                          <button
                            onClick={() => handleDeletePhase(currentPhase.id, currentPhase.title)}
                            title="Delete Current Phase"
                            style={{ padding: "6px 10px", borderRadius: 6, border: `1px solid ${darkTheme ? "#334155" : "#CBD5E1"}`, background: "transparent", color: "#EF4444", fontSize: 11.5, fontWeight: 600, cursor: "pointer" }}
                          >
                            <Trash2 size={13} /> Delete Phase
                          </button>
                        </>
                      )}
                      <button
                        onClick={() => toggleExpandAllInPhase(currentPhase)}
                        title="Toggle detailed instructions view for all tasks in this phase"
                        style={{ padding: "5px 10px", borderRadius: 6, border: `1px solid ${darkTheme ? "#334155" : "#E2E8F0"}`, background: darkTheme ? "#1E293B" : "#FFF", color: darkTheme ? "#CBD5E1" : "#475569", fontSize: 11, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}
                      >
                        <BookOpen size={13} color={currentPhase.color || "#6366F1"} /> Toggle All Details
                      </button>
                      <button
                        onClick={() => markAllInPhase(currentPhase, true)}
                        style={{ padding: "5px 10px", borderRadius: 6, border: `1px solid ${darkTheme ? "#334155" : "#E2E8F0"}`, background: darkTheme ? "#1E293B" : "#FFF", color: darkTheme ? "#CBD5E1" : "#475569", fontSize: 11, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}
                      >
                        <CheckCircle2 size={13} color="#10B981" /> Complete All
                      </button>
                      <button
                        onClick={() => markAllInPhase(currentPhase, false)}
                        style={{ padding: "5px 10px", borderRadius: 6, border: `1px solid ${darkTheme ? "#334155" : "#E2E8F0"}`, background: darkTheme ? "#1E293B" : "#FFF", color: darkTheme ? "#CBD5E1" : "#475569", fontSize: 11, fontWeight: 600, cursor: "pointer" }}
                      >
                        Clear Phase
                      </button>
                    </div>
                  </div>

                  <h1 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 10px", letterSpacing: "-0.02em" }}>
                    {currentPhase.title}
                  </h1>
                  <p style={{ fontSize: 14.5, color: darkTheme ? "#CBD5E1" : "#475569", margin: 0, lineHeight: 1.65, maxWidth: 680 }}>
                    {currentPhase.description}
                  </p>

                  {/* Phase completion progress bar */}
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 20 }}>
                    <div style={{ flex: 1, maxWidth: 320, height: 6, background: darkTheme ? "#1E293B" : "#E2E8F0", borderRadius: 3, overflow: "hidden" }}>
                      <div style={{ height: "100%", background: currentPhase.color || "#6366F1", borderRadius: 3, width: `${getPhaseCompletionRate(currentPhase)}%`, transition: "width 0.3s" }} />
                    </div>
                    <span style={{ fontSize: 12.5, color: darkTheme ? "#94A3B8" : "#64748B", fontWeight: 600 }}>
                      {(currentPhase.sections || []).flatMap((s) => s.tasks).filter((t) => completed[t.id]).length} of {(currentPhase.sections || []).flatMap((s) => s.tasks).length} tasks completed ({getPhaseCompletionRate(currentPhase)}%)
                    </span>
                  </div>
                </div>

                {/* CREATE TOPIC FORM BANNER */}
                {isEditMode && isAddingTopic && (
                  <div style={{ padding: "16px 20px", borderRadius: 10, border: `1.5px solid ${currentPhase.color || "#6366F1"}`, background: darkTheme ? "#1E293B" : "#FFFFFF", boxShadow: `0 4px 16px ${currentPhase.color}25`, marginBottom: 28 }} className="animate-fade-in no-print">
                    <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 10, color: currentPhase.color, display: "flex", alignItems: "center", gap: 6 }}>
                      <FolderPlus size={16} /> Create New Topic / Section in {currentPhase.title}
                    </div>
                    <div style={{ display: "flex", gap: 10 }}>
                      <input
                        type="text"
                        placeholder="Enter Topic Name (e.g., Branding & Identity, PR Strategy, Referral Engine)..."
                        value={newTopicTitle}
                        onChange={(e) => setNewTopicTitle(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleAddTopic(currentPhase.id);
                          if (e.key === "Escape") setIsAddingTopic(false);
                        }}
                        autoFocus
                        style={{ flex: 1, padding: "9px 14px", borderRadius: 8, border: `1px solid ${darkTheme ? "#334155" : "#CBD5E1"}`, background: darkTheme ? "#0F172A" : "#F8FAFC", color: darkTheme ? "#F8FAFC" : "#0F172A", fontSize: 13, outline: "none" }}
                      />
                      <button
                        onClick={() => handleAddTopic(currentPhase.id)}
                        disabled={!newTopicTitle.trim()}
                        style={{ padding: "9px 18px", borderRadius: 8, border: "none", background: newTopicTitle.trim() ? currentPhase.color : darkTheme ? "#334155" : "#CBD5E1", color: "#FFFFFF", fontSize: 13, fontWeight: 700, cursor: newTopicTitle.trim() ? "pointer" : "not-allowed" }}
                      >
                        Save Topic
                      </button>
                      <button
                        onClick={() => { setIsAddingTopic(false); setNewTopicTitle(""); }}
                        style={{ padding: "9px 14px", borderRadius: 8, border: `1px solid ${darkTheme ? "#334155" : "#CBD5E1"}`, background: darkTheme ? "#0F172A" : "#FFF", color: darkTheme ? "#94A3B8" : "#64748B", fontSize: 13, fontWeight: 600, cursor: "pointer" }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {/* Sections & Tasks */}
                {(currentPhase.sections || []).map((section, si) => {
                  const visibleTasks = section.tasks.filter((t) => {
                    const done = !!completed[t.id];
                    if (filterMode === "pending") return !done;
                    if (filterMode === "completed") return done;
                    return true;
                  });

                  const isBeingDragged = isEditMode && draggedSectionIdx === si;
                  const isDragOver = isEditMode && dragOverSectionIdx === si && draggedSectionIdx !== si;

                  return (
                    <div
                      key={si}
                      draggable={isEditMode}
                      onDragStart={(e) => { if (!isEditMode) return; setDraggedSectionIdx(si); e.dataTransfer.effectAllowed = "move"; }}
                      onDragOver={(e) => { if (!isEditMode) return; e.preventDefault(); setDragOverSectionIdx(si); }}
                      onDrop={(e) => { if (!isEditMode) return; e.preventDefault(); handleReorderSections(currentPhase.id, draggedSectionIdx, si); setDraggedSectionIdx(null); setDragOverSectionIdx(null); }}
                      onDragEnd={() => { setDraggedSectionIdx(null); setDragOverSectionIdx(null); }}
                      style={{
                        marginBottom: isEditMode ? 32 : 28,
                        padding: isEditMode ? "16px 20px" : "0",
                        borderRadius: 12,
                        border: isEditMode ? (isDragOver ? `2px dashed ${currentPhase.color}` : `1px dashed ${darkTheme ? "#334155" : "#CBD5E1"}`) : "none",
                        background: isEditMode ? (isDragOver ? (darkTheme ? "rgba(99, 102, 241, 0.1)" : "#EEF2FF") : (darkTheme ? "rgba(30, 41, 59, 0.3)" : "#FAFAFA")) : "transparent",
                        opacity: isBeingDragged ? 0.4 : 1,
                        transition: "all 0.15s cubic-bezier(0.16, 1, 0.3, 1)"
                      }}
                      className="animate-fade-in"
                    >
                      {/* TOPIC / SECTION HEADER */}
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                        {isEditMode && (
                          <>
                            <div title="Click and drag to reorder topic" style={{ display: "flex", alignItems: "center", cursor: "grab", color: darkTheme ? "#64748B" : "#94A3B8", padding: "2px 4px", borderRadius: 4 }}>
                              <GripVertical size={18} />
                            </div>
                            <div className="no-print" style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                              <button disabled={si === 0} onClick={() => handleMoveSection(currentPhase.id, si, "up")} title="Move Topic Up" style={{ border: "none", background: "transparent", color: si === 0 ? (darkTheme ? "#334155" : "#E2E8F0") : (darkTheme ? "#94A3B8" : "#64748B"), cursor: si === 0 ? "not-allowed" : "pointer", padding: 0, lineHeight: 1 }}>
                                <ChevronUp size={14} />
                              </button>
                              <button disabled={si === (currentPhase.sections || []).length - 1} onClick={() => handleMoveSection(currentPhase.id, si, "down")} title="Move Topic Down" style={{ border: "none", background: "transparent", color: si === (currentPhase.sections || []).length - 1 ? (darkTheme ? "#334155" : "#E2E8F0") : (darkTheme ? "#94A3B8" : "#64748B"), cursor: si === (currentPhase.sections || []).length - 1 ? "not-allowed" : "pointer", padding: 0, lineHeight: 1 }}>
                                <ChevronDown size={14} />
                              </button>
                            </div>
                          </>
                        )}

                        <h2 style={{ fontSize: 13, fontWeight: 700, margin: 0, textTransform: "uppercase", letterSpacing: "0.08em", color: darkTheme ? "#94A3B8" : "#64748B", display: "flex", alignItems: "center", gap: 8 }}>
                          {section.title}
                        </h2>

                        {isEditMode && (
                          <div className="no-print" style={{ display: "flex", alignItems: "center", gap: 4 }}>
                            <button onClick={() => handleRenameSection(currentPhase.id, si, section.title)} title="Rename Topic" style={{ border: "none", background: "transparent", cursor: "pointer", color: darkTheme ? "#64748B" : "#94A3B8", padding: 3, borderRadius: 4, display: "flex", alignItems: "center" }}>
                              <Pencil size={13} />
                            </button>
                            <button onClick={() => handleDeleteSection(currentPhase.id, si, section.title)} title="Delete Topic & All Tasks" style={{ border: "none", background: "transparent", cursor: "pointer", color: darkTheme ? "#64748B" : "#94A3B8", padding: 3, borderRadius: 4, display: "flex", alignItems: "center" }}>
                              <Trash2 size={13} />
                            </button>
                          </div>
                        )}

                        <div style={{ flex: 1, height: 1, background: darkTheme ? "#1E293B" : "#E2E8F0" }} />
                        <span style={{ fontSize: 11, color: darkTheme ? "#64748B" : "#94A3B8", fontWeight: 600 }}>
                          {section.tasks.filter((t) => completed[t.id]).length}/{section.tasks.length}
                        </span>
                      </div>

                      {/* Task Cards List */}
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        {visibleTasks.map((task, ti) => {
                          const done = !!completed[task.id];
                          const isTaskDragged = isEditMode && draggedTaskInfo?.sectionIndex === si && draggedTaskInfo?.taskIndex === ti;
                          const isTaskDragOver = isEditMode && dragOverTaskInfo?.sectionIndex === si && dragOverTaskInfo?.taskIndex === ti && !isTaskDragged;
                          const { title, desc, owner } = getTaskDetails(task);
                          const isExpanded = !!expandedTasks[task.id];

                          return (
                            <div
                              key={task.id}
                              draggable={isEditMode}
                              onDragStart={(e) => { if (!isEditMode) return; e.stopPropagation(); setDraggedTaskInfo({ sectionIndex: si, taskIndex: ti }); e.dataTransfer.effectAllowed = "move"; }}
                              onDragOver={(e) => { if (!isEditMode) return; e.preventDefault(); e.stopPropagation(); setDragOverTaskInfo({ sectionIndex: si, taskIndex: ti }); }}
                              onDrop={(e) => { if (!isEditMode) return; e.preventDefault(); e.stopPropagation(); if (draggedTaskInfo && draggedTaskInfo.sectionIndex === si) { handleReorderTasks(currentPhase.id, si, draggedTaskInfo.taskIndex, ti); } setDraggedTaskInfo(null); setDragOverTaskInfo(null); }}
                              onDragEnd={(e) => { e.stopPropagation(); setDraggedTaskInfo(null); setDragOverTaskInfo(null); }}
                              className="interactive-card"
                              style={{
                                display: "flex", flexDirection: "column",
                                borderRadius: 10,
                                background: done ? (darkTheme ? "rgba(16, 185, 129, 0.08)" : "#F0FDF4") : isTaskDragOver ? (darkTheme ? "rgba(99, 102, 241, 0.15)" : "#EEF2FF") : (darkTheme ? "#1E293B" : "#FFFFFF"),
                                border: `1px solid ${isTaskDragOver ? currentPhase.color : done ? (darkTheme ? "rgba(16, 185, 129, 0.3)" : "#BBF7D0") : (darkTheme ? "#334155" : "#E2E8F0")}`,
                                opacity: isTaskDragged ? 0.35 : 1, position: "relative",
                                overflow: "hidden"
                              }}
                            >
                              <div
                                onClick={() => toggleTask(task.id)}
                                style={{
                                  display: "flex", alignItems: "flex-start", gap: 12,
                                  padding: "12px 18px", cursor: "pointer"
                                }}
                              >
                                {isEditMode && (
                                  <>
                                    <div onClick={(e) => e.stopPropagation()} title="Click and drag to reorder task" style={{ display: "flex", alignItems: "center", cursor: "grab", color: darkTheme ? "#475569" : "#CBD5E1", marginTop: 2 }}>
                                      <GripVertical size={15} />
                                    </div>
                                    <div className="no-print" style={{ display: "flex", flexDirection: "column", gap: 1, marginTop: 1 }} onClick={(e) => e.stopPropagation()}>
                                      <button disabled={ti === 0} onClick={() => handleMoveTask(currentPhase.id, si, ti, "up")} title="Move Task Up" style={{ border: "none", background: "transparent", color: ti === 0 ? (darkTheme ? "#334155" : "#E2E8F0") : (darkTheme ? "#64748B" : "#94A3B8"), cursor: ti === 0 ? "not-allowed" : "pointer", padding: 0, lineHeight: 1 }}>
                                        <ChevronUp size={12} />
                                      </button>
                                      <button disabled={ti === section.tasks.length - 1} onClick={() => handleMoveTask(currentPhase.id, si, ti, "down")} title="Move Task Down" style={{ border: "none", background: "transparent", color: ti === section.tasks.length - 1 ? (darkTheme ? "#334155" : "#E2E8F0") : (darkTheme ? "#64748B" : "#94A3B8"), cursor: ti === section.tasks.length - 1 ? "not-allowed" : "pointer", padding: 0, lineHeight: 1 }}>
                                        <ChevronDown size={12} />
                                      </button>
                                    </div>
                                  </>
                                )}

                                <div style={{ width: 19, height: 19, borderRadius: 5, flexShrink: 0, marginTop: 2, border: `2px solid ${done ? "#10B981" : darkTheme ? "#64748B" : "#CBD5E1"}`, background: done ? "#10B981" : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                  {done && <Check size={12} color="white" strokeWidth={3} />}
                                </div>

                                <div style={{ flex: 1, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8 }}>
                                  <span style={{ fontSize: 13.5, lineHeight: 1.5, color: done ? (darkTheme ? "#94A3B8" : "#64748B") : (darkTheme ? "#F8FAFC" : "#1E293B"), textDecoration: done ? "line-through" : "none", fontWeight: done ? 500 : 600 }}>
                                    {title}
                                  </span>
                                  {owner && (
                                    <span style={{
                                      fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 10,
                                      background: darkTheme ? "rgba(99, 102, 241, 0.15)" : "#EEF2FF",
                                      color: darkTheme ? "#818CF8" : "#4F46E5"
                                    }}>
                                      {owner}
                                    </span>
                                  )}
                                </div>

                                {desc && (
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleExpandTask(task.id);
                                    }}
                                    title={isExpanded ? "Hide detailed description" : "Show detailed description"}
                                    style={{
                                      display: "flex", alignItems: "center", gap: 4,
                                      padding: "3px 8px", borderRadius: 6,
                                      border: `1px solid ${isExpanded ? currentPhase.color : darkTheme ? "#334155" : "#E2E8F0"}`,
                                      background: isExpanded ? `${currentPhase.color}15` : darkTheme ? "#0F172A" : "#F8FAFC",
                                      color: isExpanded ? currentPhase.color : darkTheme ? "#94A3B8" : "#64748B",
                                      fontSize: 11, fontWeight: 700, cursor: "pointer", flexShrink: 0
                                    }}
                                  >
                                    {isExpanded ? "Hide Details" : "Details"}
                                    {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                                  </button>
                                )}

                                {isEditMode && (
                                  <div style={{ display: "flex", gap: 2, marginLeft: 4 }}>
                                    <button onClick={(e) => { e.stopPropagation(); handleEditTask(currentPhase.id, si, task.id, task.text); }} title="Edit Task Description" style={{ border: "none", background: "transparent", color: darkTheme ? "#64748B" : "#94A3B8", cursor: "pointer", padding: 4, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      <Pencil size={13} />
                                    </button>
                                    <button onClick={(e) => { e.stopPropagation(); handleDeleteTask(currentPhase.id, si, task.id, task.text); }} title="Delete Task" style={{ border: "none", background: "transparent", color: darkTheme ? "#64748B" : "#94A3B8", cursor: "pointer", padding: 4, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      <Trash2 size={14} />
                                    </button>
                                  </div>
                                )}
                              </div>

                              {desc && isExpanded && (
                                <div
                                  style={{
                                    padding: "12px 18px 14px 49px",
                                    background: darkTheme ? "#0F172A" : "#F8FAFC",
                                    borderTop: `1px dashed ${darkTheme ? "#334155" : "#E2E8F0"}`,
                                    fontSize: 12.5, lineHeight: 1.6,
                                    color: darkTheme ? "#CBD5E1" : "#475569"
                                  }}
                                >
                                  <div style={{ fontWeight: 700, fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.05em", color: currentPhase.color || "#6366F1", marginBottom: 4, display: "flex", alignItems: "center", gap: 5 }}>
                                    <BookOpen size={12} /> Execution Details & Instructions:
                                  </div>
                                  <div>{desc}</div>
                                </div>
                              )}
                            </div>
                          );
                        })}

                        {isEditMode && (
                          <div style={{ marginTop: 6 }} className="no-print">
                            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                              <input
                                type="text"
                                placeholder={`+ Add a new task to ${section.title}...`}
                                value={newTasksInputs[si] || ""}
                                onChange={(e) => setNewTasksInputs({ ...newTasksInputs, [si]: e.target.value })}
                                onKeyDown={(e) => { if (e.key === "Enter") handleAddTask(currentPhase.id, si); }}
                                style={{ flex: 1, padding: "9px 14px", borderRadius: 8, border: `1px dashed ${darkTheme ? "#334155" : "#CBD5E1"}`, background: darkTheme ? "#0F172A" : "#F8FAFC", color: darkTheme ? "#F8FAFC" : "#0F172A", fontSize: 13, outline: "none" }}
                              />
                              <button
                                onClick={() => handleAddTask(currentPhase.id, si)}
                                disabled={!(newTasksInputs[si] || "").trim()}
                                style={{ display: "flex", alignItems: "center", gap: 4, padding: "9px 16px", borderRadius: 8, border: "none", background: (newTasksInputs[si] || "").trim() ? currentPhase.color : darkTheme ? "#1E293B" : "#E2E8F0", color: (newTasksInputs[si] || "").trim() ? "#FFFFFF" : darkTheme ? "#64748B" : "#94A3B8", fontSize: 13, fontWeight: 600, cursor: (newTasksInputs[si] || "").trim() ? "pointer" : "not-allowed" }}
                              >
                                <Plus size={15} /> Add Task
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}

                {isEditMode && !isAddingTopic && (
                  <div style={{ marginTop: 24, marginBottom: 16 }} className="no-print">
                    <button
                      onClick={() => setIsAddingTopic(true)}
                      style={{ width: "100%", padding: "12px", borderRadius: 10, border: `1px dashed ${currentPhase.color}80`, background: darkTheme ? "rgba(15, 23, 42, 0.5)" : "#F1F5F9", color: currentPhase.color, fontSize: 13, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
                    >
                      <FolderPlus size={16} /> + Add New Topic / Section to {currentPhase.label}
                    </button>
                  </div>
                )}

                {/* Phase Navigation Footer */}
                <div className="no-print" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 48, paddingTop: 24, borderTop: `1px solid ${darkTheme ? "#1E293B" : "#E2E8F0"}` }}>
                  <button
                    onClick={() => setActivePhase((p) => Math.max(0, p - 1))}
                    disabled={activePhase === 0}
                    style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 20px", borderRadius: 8, border: `1px solid ${darkTheme ? "#334155" : "#E2E8F0"}`, background: darkTheme ? "#1E293B" : "white", fontSize: 13, fontWeight: 600, cursor: activePhase === 0 ? "not-allowed" : "pointer", color: activePhase === 0 ? (darkTheme ? "#475569" : "#CBD5E1") : (darkTheme ? "#F8FAFC" : "#475569") }}
                  >
                    <ChevronLeft size={16} /> Previous Phase
                  </button>

                  <div style={{ fontSize: 12, color: darkTheme ? "#64748B" : "#94A3B8", fontWeight: 600 }}>
                    Phase {activePhase + 1} of {(currentProject.phases || []).length}
                  </div>

                  <button
                    onClick={() => setActivePhase((p) => Math.min((currentProject.phases || []).length - 1, p + 1))}
                    disabled={activePhase === (currentProject.phases || []).length - 1}
                    style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 20px", borderRadius: 8, border: "none", background: activePhase === (currentProject.phases || []).length - 1 ? (darkTheme ? "#1E293B" : "#E2E8F0") : currentPhase.color, color: activePhase === (currentProject.phases || []).length - 1 ? (darkTheme ? "#64748B" : "#94A3B8") : "white", fontSize: 13, fontWeight: 600, cursor: activePhase === (currentProject.phases || []).length - 1 ? "not-allowed" : "pointer" }}
                  >
                    Next Phase <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

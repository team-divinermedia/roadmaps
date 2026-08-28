// Complete 264 Tasks extracted from WhatsApp-Lead-Engine-Complete-Task-List.docx
// Covers 13 Phases (First 7 Days, Phases 0-9, Brand Identity, Research Loop)

export const defaultWabaPhases = [
  {
    "id": 0,
    "label": "Phase 0",
    "title": "First 7 Days (Hour-by-Hour)",
    "timeline": "Days 1–5",
    "color": "#E11D48",
    "description": "15 critical tasks to complete before entering Phase 1. Includes WABA application, legal setup, and end-to-end testing.",
    "sections": [
      {
        "title": "Day 1: Setup & Submissions",
        "tasks": [
          {
            "id": "waba-001",
            "text": "001. Apply for WhatsApp Business API",
            "owner": "Both",
            "description": "Go to wati.io → Start Free Trial → create account. Follow their setup to connect your Facebook Business Manager account (create one at business.facebook.com if needed — 10 minutes) and submit your WABA application. Also bookmark interakt.shop as a backup BSP. Do not leave Day 1 without submitting this."
          },
          {
            "id": "waba-002",
            "text": "002. Reserve your company name on MCA21",
            "owner": "Founder B",
            "description": "Go to mca.gov.in → MCA Services → RUN (Reserve Unique Name). Search your preferred name. After reservation, contact a CA to complete incorporation as a Private Limited Company. Use vakilsearch.com or indiafilings.com if no CA — ₹7,000–10,000 all-inclusive."
          },
          {
            "id": "waba-003",
            "text": "003. Buy your domain and set up company email",
            "owner": "Founder B",
            "description": "Go to godaddy.com or namecheap.com. Buy yourcompanyname.com (or .in). Then go to workspace.google.com → Business Starter at ₹125/user/month. Create two company email addresses — one per founder. All business communication from today uses these addresses. Never a personal Gmail."
          },
          {
            "id": "waba-004",
            "text": "004. Optimize both LinkedIn profiles",
            "owner": "Both",
            "description": "Founder B headline: \"Co-Founder at [Company] — Helping Real Estate Developers in Gujarat Convert More Leads\". Update About section. Add professional photo. Create a LinkedIn Company Page for the company (10 minutes). Both profiles must look credible before any outreach begins."
          },
          {
            "id": "waba-005",
            "text": "005. Write your Company Operating Doc",
            "owner": "Both",
            "description": "New shared Google Doc. Write: (1) Who you are selling to and who you are NOT. (2) Three things your product does that no alternative does. (3) Pilot pricing. This is your internal alignment document. Both founders commit to not changing it without discussion."
          }
        ]
      },
      {
        "title": "Day 2: Prospecting & Payments",
        "tasks": [
          {
            "id": "waba-006",
            "text": "006. Build your first target account list",
            "owner": "Founder B",
            "description": "Go to 99acres.com → New Projects → Gujarat/Ahmedabad. For each listing: note developer name, project, contact info. Find their Sales/Marketing Head on LinkedIn. Save in Google Sheet: Company Name, Contact Name, Designation, LinkedIn URL, Phone, Lead Sources Used, Status. Repeat on MagicBricks and Housing.com. Aim for 30 developers today."
          },
          {
            "id": "waba-007",
            "text": "007. Set up HubSpot CRM",
            "owner": "Founder B",
            "description": "hubspot.com → Get started free → sign up with company email. Inside: CRM → Deals → Pipeline Settings. Create stages: 1. Contacted, 2. Demo Scheduled, 3. Pilot Proposed, 4. Pilot Active, 5. Paid Customer. Add custom properties: Monthly Lead Volume (number), Company Type (dropdown: Developer/Brokerage Chain), Decision Maker Confirmed (checkbox). Invite Founder A."
          },
          {
            "id": "waba-008",
            "text": "008. Set up Razorpay for receiving payments",
            "owner": "Founder B",
            "description": "razorpay.com → Sign Up → Business. Needs company PAN and bank account. If incorporation not complete, flag and return Day 10. Once live: Payment Links → create test link for ₹8,000 → pay ₹1 to yourself → confirm money arrives in 2 days."
          }
        ]
      },
      {
        "title": "Day 3: Assets & Calculators",
        "tasks": [
          {
            "id": "waba-009",
            "text": "009. Write your outreach messages",
            "owner": "Founder B",
            "description": "Use the exact templates from Part 3 of the execution plan. Customize every bracketed placeholder with specific information. Save final versions in a shared Google Doc both founders can access."
          },
          {
            "id": "waba-010",
            "text": "010. Record your demo video on Loom",
            "owner": "Founder B",
            "description": "loom.com → install free Chrome extension → New Recording → Screen and Camera. Follow Demo Script from Part 3. Record twice. Use the better one. Upload and get the shareable link. This link goes in every post-demo follow-up."
          },
          {
            "id": "waba-011",
            "text": "011. Build the ROI calculator in Google Sheets",
            "owner": "Founder B",
            "description": "A1: Monthly leads. B1: 200. A2: Cost per lead (₹). B2: 300. A3: Total lead spend. B3: =B1*B2. A4: Leads lost to slow response (40%). B4: =B1*0.4. A5: Value of lost leads. B5: =B4*B2. A6: Monthly price (₹). B6: 8000. A7: Net saving (₹). B7: =B5-B6. In meetings: share screen, put their real numbers in, let them read B7 in silence."
          }
        ]
      },
      {
        "title": "Day 4: Outreach & Networks",
        "tasks": [
          {
            "id": "waba-012",
            "text": "012. Send your first 10 outreach messages",
            "owner": "Founder B",
            "description": "Pick 10 people from your target list with the strongest connection. Personalize each message with their name, project, and a specific detail. Log every message in HubSpot as a Deal at \"Contacted\" stage. Do not send 10 identical messages in one hour — spread them out."
          },
          {
            "id": "waba-013",
            "text": "013. Reach out to personal networks for warm introductions",
            "owner": "Both",
            "description": "Both founders: go through WhatsApp contacts. Anyone in real estate, or who knows a developer. Send a personal message — not a pitch: \"I have started something new — helping real estate developers in Gujarat with lead response. Do you know anyone in that space I could speak to?\" Warm referrals convert 5x better than cold outreach."
          }
        ]
      },
      {
        "title": "Day 5: End-to-End Dry Run",
        "tasks": [
          {
            "id": "waba-014",
            "text": "014. Run a full end-to-end test with a simulated lead",
            "owner": "Both",
            "description": "Founder A sets up a test environment. Founder B sends a fake lead email through the parser. Both watch: email parsed → WhatsApp message sent → conversation runs → handoff triggered → notification arrives. Time every step. Screenshot the full flow."
          },
          {
            "id": "waba-015",
            "text": "015. Fix every break before the first demo call",
            "owner": "Founder A",
            "description": "Whatever failed in the end-to-end test — fix it today. No demo happens while the product has a known break. If a fix takes more than 2 days, note it and prepare a workaround before the first prospect sees the demo."
          }
        ]
      }
    ]
  },
  {
    "id": 1,
    "label": "Phase 1",
    "title": "Foundation & Validation",
    "timeline": "Days 1–5",
    "color": "#6366F1",
    "description": "Convert market knowledge into written, shared decisions. ICP definition, TAM sizing, and competitive matrix.",
    "sections": [
      {
        "title": "Market Research & Sizing",
        "tasks": [
          {
            "id": "waba-016",
            "text": "016. Estimate your TAM, SAM, and SOM for Gujarat real estate",
            "owner": "Both",
            "description": "TAM: all residential developers in India spending on digital lead generation. SAM: those in Gujarat. SOM: your realistic reach from Ahmedabad in 12 months. Use 99acres/MagicBricks active project counts as a proxy. Example: TAM 5,000 developers nationally, SAM 300 in Gujarat, SOM 100 in year one."
          },
          {
            "id": "waba-017",
            "text": "017. Identify market timing signals in Gujarat real estate right now",
            "owner": "Founder B",
            "description": "What is happening that makes this the right time? Is portal lead volume growing? Are Meta ad costs rising? Is a new government housing scheme increasing buyer inquiry volume? Write 2–3 current signals. These become your \"why now\" in sales conversations."
          },
          {
            "id": "waba-018",
            "text": "018. Conduct at least 10 customer discovery conversations before finalizing your ICP",
            "owner": "Founder B",
            "description": "Talk to 10 developers or brokerage chains — not to pitch, just to listen. Ask: How many leads per month? How do you respond today? How long does callback take? Have you ever lost a buyer to a competitor because of response delay? Use these to confirm or update your assumptions."
          },
          {
            "id": "waba-019",
            "text": "019. Validate willingness to pay directly in discovery conversations",
            "owner": "Founder B",
            "description": "In each conversation ask: \"If something solved this problem completely and cost ₹8,000–15,000 per month, would that feel reasonable?\" If 6 out of 10 say yes without hesitation, your price is validated. If most push back, understand why before you launch."
          },
          {
            "id": "waba-020",
            "text": "020. Count the number of active developers in Ahmedabad with meaningful lead volumes",
            "owner": "Founder B",
            "description": "99acres → New Projects → Ahmedabad. Count listings across 5 pages. Note developer names. Repeat on MagicBricks and Housing.com. Names appearing on 2 or more platforms are your highest-priority targets — they are spending real money on lead generation."
          },
          {
            "id": "waba-021",
            "text": "021. Document the before/after story for your product",
            "owner": "Founder B",
            "description": "Write 2 paragraphs. Before: \"A buyer fills a form on 99acres at 7pm. The developer's team calls the next morning. By then, the buyer has already spoken to three competing projects.\" After: \"The buyer fills the form at 7pm. Within 30 seconds they receive a WhatsApp message that knows exactly which units are available and at what price. By morning, a site visit is already booked.\" This story is told in every sales call."
          },
          {
            "id": "waba-022",
            "text": "022. Identify trigger events that create buying urgency",
            "owner": "Founder B",
            "description": "Three situations where a developer is ready to buy this week: (1) They just launched a new project and are running ads for the first time. (2) They had a bad quarter — high lead spend, low site visit conversion. (3) They lost a buyer they know about to a competing project. Listen for these in every conversation. When you hear one, move faster."
          }
        ]
      },
      {
        "title": "ICP Definition",
        "tasks": [
          {
            "id": "waba-023",
            "text": "023. Write your Developer ICP with all firmographic criteria",
            "owner": "Both",
            "description": "In Company Operating Doc: Developer ICP: (1) At least 1 active residential project in Gujarat. (2) Spending on at least 2 lead sources. (3) Sales team of at least 3 people handling inbound leads. (4) Monthly lead volume of at least 100. (5) Geography: Gujarat, Ahmedabad priority. If a prospect does not meet all four criteria, they are not a founding cohort priority."
          },
          {
            "id": "waba-024",
            "text": "024. Write your Brokerage Chain ICP with all criteria",
            "owner": "Both",
            "description": "Brokerage Chain ICP: (1) At least 5 active agents. (2) Handles leads for multiple developer projects simultaneously. (3) Spending on portal listings or running their own digital ads. (4) Has experienced the lead delay problem with at least one developer client. Note: brokerage chains are more complex to onboard — prioritize developers for the founding cohort."
          },
          {
            "id": "waba-025",
            "text": "025. Define technographic criteria for each ICP type",
            "owner": "Both",
            "description": "What tools must a good-fit developer already use? They likely have: a lead tracking system (even Excel), a WhatsApp Business number, portal accounts. Your onboarding requirement: they must be able to set up email forwarding from their lead inbox. If they cannot do this, onboarding will stall. Confirm this capability before proposing a pilot."
          },
          {
            "id": "waba-026",
            "text": "026. Identify the three buyer personas involved in every sale",
            "owner": "Founder B",
            "description": "For a developer company: (1) The Buyer — signs and approves payment. Usually CEO or Director for companies under 50 people. (2) The User — monitors the system output daily. Usually Marketing Head or Sales Head. (3) The Champion — advocates internally for the product. Usually the person who personally felt the pain of losing leads. Identify all three in every prospect company before your first meeting."
          },
          {
            "id": "waba-027",
            "text": "027. Build an ICP scorecard to qualify accounts objectively",
            "owner": "Founder B",
            "description": "Score each prospect 0–3 on: Monthly lead volume (0=under 50, 1=50–100, 2=100–300, 3=over 300). Number of lead sources (0=1, 1=2, 2=3, 3=4+). Sales team size (0=1 person, 1=2, 2=3–5, 3=over 5). Decision maker confirmed (0=no, 3=yes). Total out of 12. Prioritize accounts scoring 9 or above. Do not spend demo time on anyone below 6."
          },
          {
            "id": "waba-028",
            "text": "028. Confirm ICP with at least 3 people who would have bought on Day 1",
            "owner": "Founder B",
            "description": "Show your written ICP definition to 3 people who represent your ideal customer. Ask: \"Does this describe you accurately? What would you change?\" If they say the criteria are wrong, update them before building your prospect list."
          },
          {
            "id": "waba-029",
            "text": "029. Confirm who makes the purchase decision in a developer company",
            "owner": "Founder B",
            "description": "Before any meeting, search the company on LinkedIn. Find the most senior person with \"sales\", \"marketing\", or \"director\" in their title. A positive conversation with a junior team member leads nowhere. Confirm in your first outreach: \"Are you the right person to speak about your lead management process, or should I reach someone else?\""
          },
          {
            "id": "waba-030",
            "text": "030. Write explicitly who you are NOT selling to right now",
            "owner": "Both",
            "description": "In Company Operating Doc: We do NOT sell to: individual real estate agents, brokers with fewer than 5 agents, developers with no digital lead generation spend, commercial real estate, developers outside Gujarat until Month 3. When a wrong-fit prospect contacts you: \"Our product is built specifically for residential developers and organized brokerages with active portal campaigns — it may not be the right fit for your situation right now.\""
          }
        ]
      },
      {
        "title": "Competitive Landscape",
        "tasks": [
          {
            "id": "waba-031",
            "text": "031. List every alternative a developer uses today to handle lead response",
            "owner": "Both",
            "description": "Write in Company Operating Doc: (1) Manual callback — sales team calls when they see the lead, typically 2–8 hours later. (2) Outsourced telecalling — call centre handles first contact but without inventory knowledge. (3) IVR systems — press 1 for 2BHK — impersonal and cannot qualify. (4) Generic WhatsApp broadcast — not conversational, not inventory-aware. (5) Doing nothing. None of these respond instantly with live inventory data."
          },
          {
            "id": "waba-032",
            "text": "032. Audit competitor positioning pages, pricing pages, and ad copy",
            "owner": "Founder B",
            "description": "Search Google: \"WhatsApp lead qualification real estate India\", \"AI chatbot real estate developers India\", \"automated lead response property India\". For each competitor found: read their homepage, pricing page, and case studies. Write down: who they serve, what they promise, what they charge, and whether they mention live inventory integration."
          },
          {
            "id": "waba-033",
            "text": "033. Search Indian real estate tech forums and communities for competitor mentions",
            "owner": "Founder B",
            "description": "Go to LinkedIn groups: search \"real estate technology India\", \"proptech India\". Look for mentions of WhatsApp automation for lead response. This tells you what developers already know about and what they have already tried and rejected."
          },
          {
            "id": "waba-034",
            "text": "034. Identify positioning whitespace — what nobody in the market is claiming",
            "owner": "Both",
            "description": "After reviewing 5–10 alternatives, write down the one claim none of them make: \"responds within seconds with accurate, live inventory data — not a script, not a canned response, not a callback system.\" This is your positioning whitespace. Every sales conversation starts here."
          },
          {
            "id": "waba-035",
            "text": "035. Build a competitive matrix",
            "owner": "Founder B",
            "description": "Google Sheet. Rows: your product, telecalling, IVR, generic WhatsApp bot, manual callback. Columns: Response time, Inventory-aware answers, Site visit booking automation, Owner notification, Monthly cost, Setup required. Fill it honestly. Use it in meetings when a developer says \"we already use [X].\""
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "label": "Phase 2",
    "title": "Product & Commercial Readiness",
    "timeline": "Weeks 1–2",
    "color": "#8B5CF6",
    "description": "Make product ready for paid users. WABA setup, pricing tiers, pilot agreements, and infra monitoring.",
    "sections": [
      {
        "title": "WhatsApp Business API Setup",
        "tasks": [
          {
            "id": "waba-036",
            "text": "036. Understand what WABA is before you set it up",
            "owner": "Both",
            "description": "WABA = WhatsApp Business API. Different from the regular WhatsApp Business app. The API allows software to send automated messages to real phone numbers on WhatsApp. You need Meta's approval and must apply through a BSP (Business Solution Provider). Without WABA, the product cannot function."
          },
          {
            "id": "waba-037",
            "text": "037. Choose your BSP and submit your WABA application",
            "owner": "Both",
            "description": "Best for India: WATI (wati.io) or Interakt (interakt.shop). Go to WATI first. Create an account. Follow their guided setup: (1) Create Facebook Business Manager account if needed. (2) Connect a fresh phone number never previously used on any WhatsApp. (3) Submit business information to Meta for approval. This takes 1–3 weeks. Submit on Day 1."
          },
          {
            "id": "waba-038",
            "text": "038. Prepare and submit at least 3 message templates to Meta for pre-approval",
            "owner": "Founder A",
            "description": "Meta requires any first message to a new contact to use a pre-approved template. Submit through your BSP dashboard: Template 1 (Initial Contact): \"Hi, thank you for your interest in [Project]. Could you share what configuration you are looking for and your approximate budget?\" Template 2 (Qualification): \"Based on what you shared, we have [X] units available in your range. Would you like to schedule a site visit?\" Template 3 (Handoff): \"Your site visit for [Project] has been noted. Our team member will confirm details with you shortly.\""
          },
          {
            "id": "waba-039",
            "text": "039. Register the WABA under your company entity, not a personal number",
            "owner": "Founder A",
            "description": "The WhatsApp number for the API must be: (1) Fresh — never used on any WhatsApp before. (2) Registered in the company's name after incorporation. Buy a new SIM. Keep it dedicated to the product. Never use it for personal calls."
          },
          {
            "id": "waba-040",
            "text": "040. Set up your Meta Business Manager account completely",
            "owner": "Founder A",
            "description": "business.facebook.com → Business Settings → Business Info: fill company name, email, website URL, address. Security Center: enable 2-factor authentication. A complete profile gets approved faster."
          },
          {
            "id": "waba-041",
            "text": "041. Document your contingency plan if WABA gets restricted",
            "owner": "Both",
            "description": "Meta can restrict your WABA if messages are marked spam. Plan: (1) Only message people who genuinely inquired — never broadcast to random numbers. (2) If restriction happens: contact BSP support immediately. (3) Notify affected pilot customers via Founder A's personal WhatsApp about a temporary issue. Document this before onboarding your first customer."
          }
        ]
      },
      {
        "title": "Product Validation",
        "tasks": [
          {
            "id": "waba-042",
            "text": "042. Confirm all launch-critical features are QA-tested and stable",
            "owner": "Founder A",
            "description": "Founder A: create a test checklist covering every feature a pilot customer will use: email parser, WhatsApp message sending, inventory query handling, site visit booking, handoff notification. Test each one with a real simulated lead. Mark complete only when every step passes without manual intervention."
          },
          {
            "id": "waba-043",
            "text": "043. Define the product's aha moment — the single action that predicts retention",
            "owner": "Both",
            "description": "For your product: the aha moment is when a real buyer inquiry arrives, the system responds within 30 seconds with accurate inventory information, and the developer's sales team receives a handoff notification — all without human involvement. Everything in your onboarding must lead to this moment as fast as possible."
          },
          {
            "id": "waba-044",
            "text": "044. Run user acceptance testing with 3–5 people from your ICP",
            "owner": "Both",
            "description": "Invite 3–5 real estate contacts who match your ICP to test the product for free for one week before your first paid pilot. Call it \"early access trial.\" Observe: what confuses them? What do they not understand without being told? What do they love immediately? Fix the confusing parts before any paying customer sees the product."
          },
          {
            "id": "waba-045",
            "text": "045. Finalize product packaging — what is included in each pricing tier",
            "owner": "Both",
            "description": "Write clearly: Tier 1 (₹8,000/month): up to 300 leads/month, 1 active project, handoff notifications to 1 WhatsApp number, email support. Tier 2 (₹14,000/month): up to 700 leads/month, up to 3 projects, handoff to 3 numbers, priority email support, weekly check-in call. A prospect asking \"what do I get?\" must receive an instant, clear answer."
          },
          {
            "id": "waba-046",
            "text": "046. Confirm your GTM motion for this product",
            "owner": "Both",
            "description": "Your GTM motion is Sales-Led Growth (SLG). You are selling to businesses at ₹8,000–14,000/month with a required sales relationship and no self-serve onboarding. This means: every customer is acquired through a sales conversation. Do not build self-serve onboarding or a freemium product at this stage."
          }
        ]
      },
      {
        "title": "Pricing & Commercial Terms",
        "tasks": [
          {
            "id": "waba-047",
            "text": "047. Set founding cohort pricing — do not leave it undefined",
            "owner": "Founder B",
            "description": "Founding cohort: ₹8,000/month for Tier 1 (up to 300 leads, 1 project), ₹14,000/month for Tier 2 (up to 700 leads, 3 projects). Tell every founding cohort customer: \"You are locked in at this price for the first 6 months. After that, standard pricing applies.\" This creates genuine early-adopter value."
          },
          {
            "id": "waba-048",
            "text": "048. Define your discounting policy before any sales call",
            "owner": "Both",
            "description": "Decide now: (1) Founder B can offer 10% discount without asking Founder A. (2) Any discount above 10% requires a 5-minute conversation between both founders first. (3) No discount before the ROI calculator has been shown. (4) A free first month is the maximum concession for a genuine evaluator. Never discount below ₹6,000/month."
          },
          {
            "id": "waba-049",
            "text": "049. Decide your free trial vs paid pilot policy and write it down",
            "owner": "Both",
            "description": "Default: paid pilot from Day 1. A prospect unwilling to pay ₹8,000 for a 30-day pilot is not a serious buyer. Free trials only for: (1) A large account (50+ leads/day) where the case study value justifies it. (2) A warm referral from an existing customer. In all other cases: \"We offer a 30-day paid pilot. If you do not see measurable improvement in site visit bookings, we will not ask you to renew.\""
          },
          {
            "id": "waba-050",
            "text": "050. Write your 1-page commercial terms document (Pilot Agreement)",
            "owner": "Founder B",
            "description": "Create a PDF called \"Pilot Agreement\". Include: Service name, Duration (30 days monthly renewal), Monthly fee + GST, What is included, Payment terms (due 1st of each month), Cancellation (7 days notice before renewal), Data handling (lead data not shared with third parties). Have a CA or lawyer review it once before any customer signs."
          },
          {
            "id": "waba-051",
            "text": "051. Set up Razorpay and test a real payment",
            "owner": "Founder B",
            "description": "razorpay.com → Sign Up → Business. Add company PAN, bank account, GST. Once verified: Payment Links → Create Link → set ₹8,000 → label \"Pilot Month 1 — [Test]\". Pay ₹1 to yourself via UPI. Confirm it arrives in your bank within 2 days. Only after this test do you know the payment flow works."
          },
          {
            "id": "waba-052",
            "text": "052. Decide your GST registration timing",
            "owner": "Founder B",
            "description": "Register for GST early since your customers are businesses who want a GST invoice to claim input credit. Go to gst.gov.in → Register → New Registration. Takes about 7 working days. Your CA can do this for ₹1,500–2,500. Once registered, add 18% GST on all invoices."
          },
          {
            "id": "waba-053",
            "text": "053. Complete company incorporation",
            "owner": "Both",
            "description": "If a CA is working on it, follow their timeline. If not started: vakilsearch.com or indiafilings.com today. You need: both founders' Aadhaar, PAN, passport photos, and a registered address (home address is fine initially). Cost: ₹7,000–10,000. Target completion in 2–3 weeks. All contracts and payments must flow through the company entity."
          }
        ]
      },
      {
        "title": "Technical Infrastructure",
        "tasks": [
          {
            "id": "waba-054",
            "text": "054. Set up basic uptime monitoring on UptimeRobot",
            "owner": "Founder A",
            "description": "uptimerobot.com — free plan. Add a monitor for your product's main endpoint. Configure alerts to both founders if the product goes down. A silent outage during a pilot means a developer's leads go cold — you lose the account and the reference."
          },
          {
            "id": "waba-055",
            "text": "055. Set up error alerts for the email parser",
            "owner": "Founder A",
            "description": "Founder A: configure the email parser to log every email processed. Set an alert if no emails are processed in a 6-hour window during business hours (9am–9pm). A silent parser failure at 2pm must be known by 2:15pm, not the next morning."
          },
          {
            "id": "waba-056",
            "text": "056. Conduct a basic security review of how lead data is stored and handled",
            "owner": "Founder A",
            "description": "Answer in writing: (1) Where is lead data stored? (2) Who has access? (3) Is it encrypted at rest? (4) What happens to data when a customer cancels? Developers will ask these questions. Having a prepared, honest answer prevents deals from stalling at the final stage."
          },
          {
            "id": "waba-057",
            "text": "057. Set up product analytics to track key events",
            "owner": "Founder A",
            "description": "Founder A: add event tracking for: Lead received via email parser, WhatsApp message sent, Buyer response received, Handoff triggered, Handoff notification delivered. Use Mixpanel free tier or PostHog (open source). You need these to answer: \"How many of my leads did the system respond to last week?\""
          },
          {
            "id": "waba-058",
            "text": "058. Set up marketing analytics: GA4 and UTM structure",
            "owner": "Founder B",
            "description": "analytics.google.com → create a GA4 property for your website. Add the tracking code. Create UTM parameters for all traffic sources: linkedin, whatsapp-outreach, referral, credai-event. Every time someone visits your landing page, you want to know where they came from."
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "label": "Phase 3",
    "title": "Positioning & Messaging",
    "timeline": "Weeks 1–2",
    "color": "#EC4899",
    "description": "Define categories, value propositions, and 30-second pitches that articulate speed and live inventory sync.",
    "sections": [
      {
        "title": "Core Positioning",
        "tasks": [
          {
            "id": "waba-059",
            "text": "059. Write your formal positioning statement",
            "owner": "Both",
            "description": "Format: \"For [ICP] who [have the problem], [Product] is [the category] that [key benefit] — unlike [primary alternative] which [limitation].\" Your version: \"For real estate developers in Gujarat who are losing paid leads because of slow response, [Product] is the instant first-response layer that qualifies buyers on WhatsApp within 30 seconds using live inventory data — unlike manual callbacks and generic chatbots which are either too slow or too generic to convert.\""
          },
          {
            "id": "waba-060",
            "text": "060. Define the category you own — use these words, not \"chatbot\" or \"AI\"",
            "owner": "Both",
            "description": "You are not a chatbot. You are not a CRM. You are the \"instant first-response layer for paid leads\" or simply \"WhatsApp lead response engine.\" Use this category name in every conversation and every piece of writing. It separates you from generic chatbot tools that have already failed in the market."
          },
          {
            "id": "waba-061",
            "text": "061. Write your headline value proposition in 10 words or fewer",
            "owner": "Founder B",
            "description": "Try 5 variations. Example: \"Your leads answered in 30 seconds. Every time. Automatically.\" Ask 3 people which one they understand immediately without explanation. Use the one that works fastest."
          },
          {
            "id": "waba-062",
            "text": "062. Write your 1-sentence elevator pitch",
            "owner": "Founder B",
            "description": "\"We respond to a property buyer on WhatsApp within 30 seconds of their inquiry — pulling from your live inventory to give accurate answers — so your sales team gets warm, pre-qualified leads instead of cold numbers to chase.\""
          },
          {
            "id": "waba-063",
            "text": "063. Write your 30-second verbal pitch for meetings",
            "owner": "Founder B",
            "description": "\"When a buyer fills a form on 99acres at 7pm, your sales team calls them the next morning. By then, they have called three competing projects. We close that gap. Our system responds on WhatsApp within 30 seconds of the form being submitted — it knows your actual inventory, answers their real questions, and books a site visit. Your team only gets involved once the buyer is ready.\""
          },
          {
            "id": "waba-064",
            "text": "064. Build 3 message pillars anchored in buyer pain points, not product features",
            "owner": "Founder B",
            "description": "Pillar 1 — Speed: \"You pay ₹300 per lead. By the time your team calls, the buyer has moved on. We respond in 30 seconds.\" Pillar 2 — Accuracy: \"Not a chatbot reading a script. It knows your actual units, prices, and availability. Buyers get real answers.\" Pillar 3 — Complete flow: \"From first WhatsApp response to site visit booked to owner notified — one connected flow, nothing falls through.\""
          },
          {
            "id": "waba-065",
            "text": "065. Write your 2-paragraph company description for LinkedIn and press",
            "owner": "Founder B",
            "description": "Paragraph 1: \"[Company] is an instant WhatsApp lead response engine for real estate developers and brokerage chains in Gujarat. We connect to a developer's live project inventory and respond to buyer inquiries on WhatsApp within 30 seconds of arrival — before the sales team has even seen the notification.\" Paragraph 2: \"Founded in [year] by [Founder B] and [Founder A], [Company] is based in Ahmedabad and currently works with residential developers across Gujarat.\""
          },
          {
            "id": "waba-066",
            "text": "066. Write your three proof points — leave blank, fill with pilot data",
            "owner": "Both",
            "description": "\"Developers using [Product] see their first site visit booked within [X] hours of going live.\" \"[Y]% of buyers who receive an automated response within 30 seconds agree to a site visit.\" \"Average lead response time drops from [X hours] to 30 seconds.\" Fill brackets with real numbers from your first pilot customer."
          },
          {
            "id": "waba-067",
            "text": "067. Create messaging variants for Developer ICP vs Brokerage Chain ICP",
            "owner": "Founder B",
            "description": "Developer variant: lead with cost-per-lead ROI. \"You spent ₹60,000 on portals last month. We estimate 40% of those leads went cold before your team called — that is ₹24,000 wasted. We recover it for ₹8,000/month.\" Brokerage chain variant: lead with scale. \"Your team handles leads for 5 developer clients simultaneously. Manual callback at that scale is impossible. We give a 5-person team the response capacity of a 25-person call centre for the first touch.\""
          },
          {
            "id": "waba-068",
            "text": "068. Test messaging with 3–5 real buyers before finalizing",
            "owner": "Founder B",
            "description": "Send your positioning and key messages to 3–5 real estate contacts — not to sell, just to ask: \"Does this make sense? Is anything confusing?\" If 2 or more people say the same thing is confusing, rewrite it. If 3 or more immediately say \"I know someone who needs this,\" your messaging is working."
          }
        ]
      },
      {
        "title": "Competitive Differentiation",
        "tasks": [
          {
            "id": "waba-069",
            "text": "069. Write competitive positioning for each of the top 3 alternatives",
            "owner": "Founder B",
            "description": "For telecalling: \"A call centre calls back in 30–90 minutes with no inventory knowledge. We respond in 30 seconds with accurate answers.\" For IVR: \"Press 1 for 2BHK — buyers hang up. We have a real conversation.\" For doing nothing: \"At ₹300 per lead, losing 40% to response delay costs more than our product per month.\""
          },
          {
            "id": "waba-070",
            "text": "070. Identify the one defensible claim no competitor can replicate",
            "owner": "Both",
            "description": "\"Responds in seconds with accurate, live inventory data — not a script, not a generic answer.\" A telecalling centre cannot do this. An IVR cannot do this. A generic chatbot cannot do this. Every sales conversation, every content piece, every follow-up message must circle back to this claim."
          },
          {
            "id": "waba-071",
            "text": "071. Document \"versus\" language for each key alternative",
            "owner": "Founder B",
            "description": "When a prospect says \"we already use [X]\": For telecalling: \"How long does it take your telecalling team to reach a lead after it comes in?\" (let them say the number) \"Ours responds in 30 seconds. The buyer is still at their computer.\" For IVR: \"Does your IVR know which specific units are available at what price today?\" For nothing: show the ROI calculator."
          },
          {
            "id": "waba-072",
            "text": "072. Compile all messaging into a 2-page reference document",
            "owner": "Both",
            "description": "Page 1: positioning statement, headline, elevator pitch, 30-second verbal pitch, 3 message pillars, proof point templates. Page 2: developer vs brokerage chain variants, competitive comparisons, objection responses. Both founders read this before every sales call until they know it without looking."
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "label": "Phase 4",
    "title": "Asset Production",
    "timeline": "Weeks 2–3",
    "color": "#F59E0B",
    "description": "1-pager leave-behind, sales deck, Carrd landing page, Loom demo, ROI calculator, and FAQ document.",
    "sections": [
      {
        "title": "Core Sales Assets",
        "tasks": [
          {
            "id": "waba-073",
            "text": "073. Design and print the 1-page PDF leave-behind",
            "owner": "Founder B",
            "description": "Use Canva (free). A4 document. Structure: (1) Company name and tagline. (2) Headline: \"Stop losing leads you have already paid for.\" (3) How it works: 3 steps with simple icons. (4) Three proof points (placeholders for now, fill after Week 4). (5) Founding cohort offer and price. (6) Your name, phone, email, website. Print 20 copies. Carry 5 at all times. Leave one behind after every meeting."
          },
          {
            "id": "waba-074",
            "text": "074. Build a 10–12 slide sales presentation deck",
            "owner": "Founder B",
            "description": "Canva or Google Slides. Slides: (1) Headline. (2) The problem. (3) Status quo and why it fails. (4) Your solution. (5) How it works (3-step diagram). (6) What makes it different. (7) Demo link. (8) Results (placeholders until you have data). (9) Who it is for. (10) Pricing and founding cohort offer. (11) Next step. This deck goes in every follow-up email."
          },
          {
            "id": "waba-075",
            "text": "075. Build a minimal landing page using Carrd or Framer",
            "owner": "Founder B",
            "description": "carrd.co (free) or framer.com (free). 5 sections only: (1) Headline (10-word value proposition). (2) How it works (3 steps). (3) Who it is for — explicitly say \"developers and large brokerage chains, not individual agents.\" (4) Founding cohort offer. (5) Demo booking form linked to Calendly. Nothing else. No blog, no pricing page, no resource section yet."
          },
          {
            "id": "waba-076",
            "text": "076. Create a dedicated features or \"how it works\" page",
            "owner": "Founder B",
            "description": "Once the landing page is live, add one more page explaining each component: the email parser, WhatsApp integration, inventory sync, qualification conversation, and handoff notification — each as one paragraph. This is what a decision-maker reads after the initial conversation before signing."
          },
          {
            "id": "waba-077",
            "text": "077. Install demo request form with direct CRM integration",
            "owner": "Both",
            "description": "In Carrd or Framer: add a form that connects to HubSpot via Zapier (free tier) or HubSpot's native embed. When someone fills the form, a contact and deal must automatically be created in HubSpot and Founder B must receive a notification. Test this by filling the form yourself."
          },
          {
            "id": "waba-078",
            "text": "078. Set up UTM tracking and conversion events in GA4",
            "owner": "Founder B",
            "description": "In GA4: create a conversion event called \"demo_booked\" that fires when someone successfully books a Calendly slot. Tag every outreach link: LinkedIn outreach uses ?utm_source=linkedin&utm_medium=outreach, WhatsApp uses ?utm_source=whatsapp&utm_medium=outreach. After 4 weeks this tells you which channel produces demo bookings, not just traffic."
          },
          {
            "id": "waba-079",
            "text": "079. Install LinkedIn Insight Tag on your landing page",
            "owner": "Founder B",
            "description": "LinkedIn Campaign Manager → Account Assets → Insight Tag → copy script → paste into your page's header code section. This builds retargeting audiences and tracks LinkedIn ad conversions if you run any."
          },
          {
            "id": "waba-080",
            "text": "080. Implement SEO basics on your landing page",
            "owner": "Founder B",
            "description": "In page settings: title → \"WhatsApp Lead Response for Real Estate Developers in Gujarat\". Meta description → your 1-sentence elevator pitch (under 160 characters). H1 heading → your headline value proposition. These 3 changes take 15 minutes and help your page appear in relevant Google searches."
          },
          {
            "id": "waba-081",
            "text": "081. Set up Calendly for demo bookings",
            "owner": "Founder B",
            "description": "calendly.com — free plan. Create: \"30-Minute WhatsApp Lead Demo\". Available hours: Monday–Friday 10am–6pm. Connect to Founder B's Google Calendar. Add a confirmation email with the Loom demo video link so they can watch it before the call. Put the Calendly link in the landing page, every outreach message, and every follow-up."
          },
          {
            "id": "waba-082",
            "text": "082. Record and publish your product demo video on Loom",
            "owner": "Founder B",
            "description": "Structure (under 4 minutes): Opening (20 sec): \"I am going to show you what a buyer experiences when they inquire about your project.\" Step 1 (30 sec): send test inquiry email, show timestamp. Step 2 (45 sec): WhatsApp response in 28 seconds, read it aloud. Step 3 (60 sec): buyer asks about a 2BHK, system pulls from inventory and answers accurately. Step 4 (45 sec): site visit booked, handoff notification arrives. Close (20 sec): \"This runs 24 hours a day without your team being involved.\""
          },
          {
            "id": "waba-083",
            "text": "083. Build a WhatsApp-ready live demo for in-person meetings",
            "owner": "Both",
            "description": "Founder A: set up a dedicated test environment on a phone. Pre-load sample inventory. Have a test lead ready to send. Founder B: practise showing this from the phone without needing a laptop. Real estate developer meetings happen in site offices with poor internet. The phone demo must work on mobile data."
          },
          {
            "id": "waba-084",
            "text": "084. Create an objection-handling quick reference card",
            "owner": "Founder B",
            "description": "1-page PDF for your own use only. List every objection from Phase 2 with the exact response. Save on your phone. Read it once before every demo call."
          },
          {
            "id": "waba-085",
            "text": "085. Write the customer FAQ document",
            "owner": "Founder B",
            "description": "10 questions with clear answers: (1) How does the system get my inventory? (2) What if a buyer asks something the system cannot answer? (3) Can I see the WhatsApp conversations? (4) How do I update inventory when a unit sells? (5) What happens if the buyer calls back? (6) Can I pause the system for a holiday? (7) What languages can it respond in? (8) Can I add a second project mid-pilot? (9) What if a lead's number is wrong? (10) How do I cancel? Store in Google Drive. Send to every prospect after the demo."
          },
          {
            "id": "waba-086",
            "text": "086. Prepare a basic help center in Notion for pilot customers",
            "owner": "Founder B",
            "description": "Notion (free). Create \"Customer Help Centre\". Pages: How to update your inventory sheet, How to change your handoff notification number, What to do if a lead did not receive a response, How to interpret the weekly report, How to cancel or pause. Share the link in every onboarding message."
          }
        ]
      },
      {
        "title": "Content Assets",
        "tasks": [
          {
            "id": "waba-087",
            "text": "087. Write launch blog post and LinkedIn announcement (ready by Week 6)",
            "owner": "Founder B",
            "description": "Structure: opening with the problem (\"Real estate developers in Gujarat are paying ₹300 per lead and losing 40% before anyone picks up the phone\"). Then what you built and why. Then who you have helped so far. Final line: direct call to action. Write it now. Store in a Google Doc. Publish on launch day."
          },
          {
            "id": "waba-088",
            "text": "088. Write 2 additional LinkedIn posts for launch week",
            "owner": "Founder B",
            "description": "Post 1 (category education): explain the lead response problem with data. Post 2 (use-case): tell the before-and-after story with your product. Write both now. Schedule for Day 2 and Day 3 of launch week."
          },
          {
            "id": "waba-089",
            "text": "089. Prepare 7–10 LinkedIn posts for the first month after launch",
            "owner": "Founder B",
            "description": "Post topics: (1) What I learned from speaking to 30 developers in Gujarat. (2) Why telecalling fails as a lead response strategy. (3) The 30-second window that decides if a buyer books a site visit. (4) A day in the life of a lead that actually converts. (5) What a developer's lead inbox looks like at 11pm. Write outlines now. Write full posts across Month 2."
          },
          {
            "id": "waba-090",
            "text": "090. Prepare a case study template to fill after the first pilot",
            "owner": "Founder B",
            "description": "Structure: Headline, Section 1 — Situation (customer's before state), Section 2 — Change (what you did and how long it took), Section 3 — Result (real numbers: response time, site visits booked), Section 4 — Quote (customer's exact words). Keep to 1 page maximum."
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "label": "Phase 5",
    "title": "GTM Infrastructure",
    "timeline": "Week 2",
    "color": "#10B981",
    "description": "HubSpot CRM pipeline, lead scoring, 100-developer prospect list, cold outreach sequences, and weekly reporting.",
    "sections": [
      {
        "title": "CRM Setup",
        "tasks": [
          {
            "id": "waba-091",
            "text": "091. Create HubSpot and configure pipeline stages",
            "owner": "Founder B",
            "description": "hubspot.com → Get started free. Confirm 5 pipeline stages exist: Contacted, Demo Scheduled, Pilot Proposed, Pilot Active, Paid Customer. Both founders have accounts in the same portal. Invite Founder A under Settings → Users & Teams."
          },
          {
            "id": "waba-092",
            "text": "092. Add all required custom deal fields in HubSpot",
            "owner": "Founder B",
            "description": "Settings → Properties → create: \"Monthly Lead Volume\" (number), \"Company Type\" (dropdown: Developer/Brokerage Chain), \"ICP Score\" (number 0–12), \"Decision Maker Confirmed\" (checkbox), \"Lead Portals Used\" (multi-line text), \"Referral Source\" (text). Fill these for every contact when you add them."
          },
          {
            "id": "waba-093",
            "text": "093. Build a lead scoring model using your ICP scorecard",
            "owner": "Founder B",
            "description": "Use the Phase 0 ICP scorecard. Score every prospect on the 4 criteria. Enter the total in the \"ICP Score\" field in HubSpot. Sort your target list by ICP Score descending. Always reach out to the highest-scoring prospects first."
          },
          {
            "id": "waba-094",
            "text": "094. Configure lead routing — what happens when someone fills the demo booking form",
            "owner": "Founder B",
            "description": "When someone books via Calendly: (1) HubSpot automatically creates a contact and deal. (2) Founder B receives a WhatsApp notification immediately (use Calendly → Workflows or Zapier free tier). (3) The prospect receives a confirmation email with the Loom demo video. Set this up and test it by booking a fake appointment yourself."
          },
          {
            "id": "waba-095",
            "text": "095. Add your entire target account list to HubSpot with all fields filled",
            "owner": "Founder B",
            "description": "For every developer on your target list: create a Contact, link to a Company record, fill every custom field. ICP Score, Company Type, Lead Portals Used, decision-maker name. From this point, all prospect tracking happens in HubSpot — not a spreadsheet."
          }
        ]
      },
      {
        "title": "Outbound Infrastructure",
        "tasks": [
          {
            "id": "waba-096",
            "text": "096. Build an ICP-filtered prospect list of at least 100 accounts",
            "owner": "Founder B",
            "description": "Immediate target: 100 developers and brokerage chains in Gujarat meeting at least 3 of your 4 ICP criteria. Source from 99acres, MagicBricks, Housing.com, CREDAI Gujarat directory. Aim for 70 developers and 30 brokerage chains in the first list."
          },
          {
            "id": "waba-097",
            "text": "097. Find and verify contact details for your top 30 prospects",
            "owner": "Founder B",
            "description": "For the top 30 accounts by ICP score: find the decision-maker's LinkedIn profile, direct phone number, and email. Put all of this in HubSpot. Verified contact details turn a cold list into a warm outreach list."
          },
          {
            "id": "waba-098",
            "text": "098. Enrich your list with buying signals from LinkedIn and portal activity",
            "owner": "Founder B",
            "description": "For each prospect on LinkedIn: note recent posts — have they mentioned a project launch, an ad campaign, or a frustration with lead quality? On portals: note how many platforms they are listed on and whether listings were recently updated. Recent updates signal active lead generation — highest priority outreach targets."
          },
          {
            "id": "waba-099",
            "text": "099. Source developer contacts from 99acres and MagicBricks systematically",
            "owner": "Founder B",
            "description": "99acres → New Projects → Ahmedabad → first 5 pages. For each listing: note developer name and contact number. Go to developer's project website. Find marketing or sales contact on LinkedIn or in the \"Team\" section. Repeat on MagicBricks. Developers appearing on both platforms are spending heavily on portals — highest priority."
          },
          {
            "id": "waba-100",
            "text": "100. Find contacts through CREDAI Gujarat directory",
            "owner": "Founder B",
            "description": "credaigujarat.com. Look for: member directory, upcoming events, committee members. Member list gives contact info for active developers. Events give you a chance to meet multiple prospects in one place. Being able to say \"I noticed you are a CREDAI Gujarat member\" in outreach makes it immediately more credible."
          },
          {
            "id": "waba-101",
            "text": "101. Buy 2 additional domains for cold email outreach to protect your main domain",
            "owner": "Founder B",
            "description": "If planning cold email at scale (50+ per week), do not use yourcompany.com for bulk outreach. Buy 2 similar domains. Send cold email from these. If they get flagged for spam, your main domain reputation stays clean. Set up Google Workspace accounts on both."
          },
          {
            "id": "waba-102",
            "text": "102. Warm your cold email sending domains for 3–4 weeks before scaling",
            "owner": "Founder B",
            "description": "For the first 3–4 weeks: only send 5–10 emails per day from each new domain, gradually increasing. Use Gmass (gmass.co free tier) to automate warming. Unwarmed domains get marked as spam immediately. Do not send 50 emails per day from a new domain on Day 1."
          },
          {
            "id": "waba-103",
            "text": "103. Write 5–7 step cold email sequences and 3–5 step LinkedIn sequences per ICP",
            "owner": "Founder B",
            "description": "Email sequence: Day 1 (initial outreach), Day 3 (follow-up with different angle), Day 7 (case study or data point), Day 14 (final attempt). LinkedIn sequence: connect (no note), Day 2 after acceptance (initial message), Day 7 if no response (follow-up with specific observation). Use templates from Part 3 of the execution plan as the starting point."
          },
          {
            "id": "waba-104",
            "text": "104. Evaluate and set up an outbound sequencing tool when volume exceeds 100 per week",
            "owner": "Founder B",
            "description": "At your current stage, send all outreach manually. When weekly outreach exceeds 100 messages and manual sending becomes a bottleneck, then evaluate Instantly (instantly.ai) or Smartlead (smartlead.ai). Personal messages get 3–5x more replies than automated sequences — do not automate before you have proven what message works."
          }
        ]
      },
      {
        "title": "Inbound & Marketing Automation",
        "tasks": [
          {
            "id": "waba-105",
            "text": "105. Configure marketing automation for inbound demo requests",
            "owner": "Founder B",
            "description": "When someone fills your demo form: HubSpot automatically creates a contact and deal, sends an email with the demo video and booking reminder, and notifies Founder B. Set this up in HubSpot → Workflows. Test by submitting the form yourself."
          },
          {
            "id": "waba-106",
            "text": "106. Build a confirmation and thank-you flow after demo booking",
            "owner": "Founder B",
            "description": "Calendly booking triggers: (1) Instant confirmation email with meeting link and demo video. (2) Reminder email 24 hours before. (3) Founder B manually sends a reminder WhatsApp 2 hours before. A prospect who books and forgets is a wasted demo slot."
          },
          {
            "id": "waba-107",
            "text": "107. Add a basic live chat widget to your landing page",
            "owner": "Founder B",
            "description": "Install Tidio (tidio.com — free) or Intercom (free for early stage). When someone is on your landing page, they can ask a question without filling a form. Founder B gets a phone notification. Set up auto-response: \"Happy to answer any questions. What would you like to know about the system?\""
          },
          {
            "id": "waba-108",
            "text": "108. Set up retargeting audiences on LinkedIn and Google for future paid use",
            "owner": "Founder B",
            "description": "LinkedIn Campaign Manager: create a Website Retargeting audience — anyone who visited your landing page. Google Ads: create a remarketing list from GA4. You do not need to run paid ads today. When you decide to in Month 2, the audience is already populated."
          }
        ]
      },
      {
        "title": "Analytics & Reporting",
        "tasks": [
          {
            "id": "waba-109",
            "text": "109. Define your 5 core metrics and build a Friday reporting template",
            "owner": "Both",
            "description": "Weekly Metrics Google Doc: (1) Outreach sent this week. (2) Demo calls held. (3) Pilot proposals sent. (4) New paying customers signed. (5) Total active paying customers. Targets: 50 outreach/week, 5 demos/week, 2 proposals/week. Below target on any metric: add a 1-line explanation and 1-line action."
          },
          {
            "id": "waba-110",
            "text": "110. Build a weekly reporting template for both founders",
            "owner": "Both",
            "description": "Every Friday: Founder B fills the 5 metrics and adds 3 lines (what worked, what did not, priority next week). Sends to Founder A. Founder A adds 3 lines (product issues affecting sales, fixes completed, planned improvements). This 10-minute exercise replaces long meetings."
          },
          {
            "id": "waba-111",
            "text": "111. Set up revenue attribution — track where every customer came from",
            "owner": "Founder B",
            "description": "In HubSpot: add a \"First Source\" field to every deal. Record how each prospect first heard about you: LinkedIn outreach, WhatsApp outreach, CREDAI event, referral (from whom), inbound from landing page, personal network. After Month 1, sort deals by First Source. The highest-converting source gets more of your time in Month 2."
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "label": "Phase 6",
    "title": "Founder-Led Sales Preparation",
    "timeline": "Weeks 2–3",
    "color": "#06B6D4",
    "description": "Role-play discovery calls, demo execution, objection handling cards, customer health scorecards, and SLAs.",
    "sections": [
      {
        "title": "Sales Skills",
        "tasks": [
          {
            "id": "waba-112",
            "text": "112. Practice the discovery call script from Part 3 — 5 times",
            "owner": "Founder B",
            "description": "Read the script once. Then say it out loud to Founder A playing a developer. Then to a friend who knows nothing about real estate. Looking for: (1) no need for notes, (2) sounds natural, (3) Founder A says they would consider this. Practice until all three are true."
          },
          {
            "id": "waba-113",
            "text": "113. Practice the demo 5 times before showing to a real prospect",
            "owner": "Both",
            "description": "Follow the Demo Script from Part 3. Founder A times each step. Founder A asks the 3 hardest questions during practice: \"What if a buyer asks about a unit not in inventory?\" \"What if the buyer does not want to book a site visit?\" \"Can I see all conversations my leads have had?\" Practise until you answer all three without pausing."
          },
          {
            "id": "waba-114",
            "text": "114. Practice saying your price out loud without apologizing",
            "owner": "Founder B",
            "description": "After the ROI calculator: say \"₹8,000 per month.\" Stop. Wait 10 seconds. Say nothing more. Practise this specifically with Founder A. The pause after the price is supposed to feel uncomfortable. The developer is thinking. Let them think. Filling the silence with discounts is the single most common mistake first-time founders make."
          },
          {
            "id": "waba-115",
            "text": "115. Run live objection-handling role-play sessions for the top 5 objections",
            "owner": "Both",
            "description": "Founder A plays a developer and raises each objection from Phase 2. Founder B responds from memory. Go through all 5 objections twice. Record the second round on your phone and listen back. Does the response sound confident and natural? If not, practise once more."
          },
          {
            "id": "waba-116",
            "text": "116. Build competitive battlecards for each key alternative — 1 page per alternative",
            "owner": "Founder B",
            "description": "Create 3 cards: (1) vs Telecalling Centres. (2) vs IVR Systems. (3) vs Generic WhatsApp Chatbots. Each card: their pitch, their key weakness, your counter, 3 questions to ask the developer to make the comparison obvious. Store in Google Drive. Review before any call where you know the developer uses an alternative."
          },
          {
            "id": "waba-117",
            "text": "117. Upload all sales materials to a single shared Google Drive folder",
            "owner": "Founder B",
            "description": "The \"Sales Assets\" folder must contain: 1-page leave-behind PDF, Sales deck, ROI calculator link, Loom demo video link, Messaging reference document, Competitive battlecards, Customer FAQ. Both founders must find any asset in under 30 seconds from any device."
          }
        ]
      },
      {
        "title": "Customer Success Setup",
        "tasks": [
          {
            "id": "waba-118",
            "text": "118. Brief yourself on what customer success looks like for your product",
            "owner": "Both",
            "description": "For a developer using your product, success at 30 days looks like: the system responded to 90%+ of incoming leads within 30 seconds, at least 3 site visits were booked through the WhatsApp conversation (without a sales team member initiating), and the developer's sales team is using the handoff notifications to prioritize callbacks. Write this definition down."
          },
          {
            "id": "waba-119",
            "text": "119. Define the activation metric — what confirms a customer is successfully onboarded",
            "owner": "Both",
            "description": "Activation for your product: \"The first real buyer inquiry is responded to automatically within 30 seconds, and the developer's sales team receives a handoff notification for that lead.\" Until a pilot customer reaches this, onboarding is not complete."
          },
          {
            "id": "waba-120",
            "text": "120. Define onboarding sequence: Day 0, Day 3, Day 14, Day 30",
            "owner": "Founder B",
            "description": "Day 0: welcome message, onboarding checklist sent, onboarding call booked. Day 3: check-in on email forwarding and inventory sync completion. Day 14: activation review — have they reached the aha moment? Day 30: health check — review numbers, collect NPS, discuss renewal."
          },
          {
            "id": "waba-121",
            "text": "121. Write a 3-email automated onboarding sequence triggered on payment",
            "owner": "Founder B",
            "description": "Email 1 (immediate): welcome with onboarding checklist and Notion help center link. Email 2 (Day 3): \"How is the setup going? Have you completed email forwarding?\" Email 3 (Day 14): \"Two weeks in — what questions do you have? Here is what to expect in the next 2 weeks.\" Set up in HubSpot → Workflows triggered by deal moving to Pilot Active."
          },
          {
            "id": "waba-122",
            "text": "122. Build a customer health scorecard for weekly check-in calls",
            "owner": "Founder B",
            "description": "Simple Google Sheet per customer. Columns: Week, Leads received, Leads responded to by system, Handoffs triggered, Site visits booked, Customer satisfaction (1–5, ask them). Green if all metrics are up and satisfaction is 4–5. Red if any metric is missing or satisfaction below 3. A red week triggers a problem-solving call, not just a check-in."
          },
          {
            "id": "waba-123",
            "text": "123. Write an at-risk customer escalation playbook",
            "owner": "Both",
            "description": "Trigger: customer misses 2 consecutive check-in calls, OR numbers are significantly below expectations, OR they send a message expressing doubt. Response within 24 hours: Founder B calls (not WhatsApp). Script: \"I noticed [specific thing]. Can you walk me through what has been happening from your side?\" Listen. Fix the specific issue. If product problem: Founder A gets it in writing that day."
          },
          {
            "id": "waba-124",
            "text": "124. Record the sales enablement session for future reference",
            "owner": "Founder B",
            "description": "After your first 5 real demo calls: Founder B does a 20-minute debrief recording on Loom — what they said, what worked, what did not, what objections came up, how they handled them. This recording is both a learning tool and the starting point for training any future sales hire."
          }
        ]
      },
      {
        "title": "Support Readiness",
        "tasks": [
          {
            "id": "waba-125",
            "text": "125. Write the 10 most common anticipated support questions and their answers",
            "owner": "Both",
            "description": "Q1: How to update inventory when a unit sells. Q2: What if a lead's WhatsApp number is wrong. Q3: How to change the handoff notification number. Q4: What conversations look like from the buyer's side. Q5: How to see how many leads were responded to. Q6: How to pause the system for a holiday. Q7: What languages it can respond in. Q8: What happens if a buyer calls back. Q9: Can a second project be added mid-pilot. Q10: How to cancel. Put all answers in the Notion help center."
          },
          {
            "id": "waba-126",
            "text": "126. Set up a dedicated support WhatsApp Business number for customer issues",
            "owner": "Founder B",
            "description": "Separate from your sales number. Customers use this for support. Founder B monitors it during 9am–8pm. Auto-reply: \"Thank you for reaching out. We respond within 4 hours during business hours. For urgent issues, call [Founder B number].\" This sets clear expectations even during meetings."
          },
          {
            "id": "waba-127",
            "text": "127. Set support SLA and communicate it in the pilot agreement",
            "owner": "Founder B",
            "description": "Support response time: within 4 hours during business hours (9am–8pm Monday–Saturday). Critical issues (system down): within 1 hour, 7 days a week. Write this in the pilot agreement. Hold yourself to it. Missing your own SLA during a pilot is one of the fastest ways to lose a customer."
          },
          {
            "id": "waba-128",
            "text": "128. Finalize Terms of Service, Privacy Policy, and DPA",
            "owner": "Founder B",
            "description": "Have a CA or lawyer review all three. DPA (Data Processing Agreement) specifies how you handle lead data. ToS defines the service terms. Privacy Policy is required by law if you have a website. Cost: ₹2,000–5,000 for legal review. Put links to all three in your landing page footer."
          },
          {
            "id": "waba-129",
            "text": "129. Prepare a standard MSA template for customers who request a formal contract",
            "owner": "Founder B",
            "description": "Simple 3-page MSA: services description, fees and payment, data protection and confidentiality, IP ownership, limitation of liability, termination. Have a CA draft this once (₹3,000–5,000). You will use it repeatedly for larger customers."
          },
          {
            "id": "waba-130",
            "text": "130. Prepare a data security information sheet for prospects who ask",
            "owner": "Both",
            "description": "1-page PDF: where lead data is stored (specify cloud provider), who has access, encryption at rest and in transit, data retention policy, contact for data questions. This document prevents a security concern from stalling a deal at the final stage."
          },
          {
            "id": "waba-131",
            "text": "131. Confirm what security documentation prospects will ask for and have it ready",
            "owner": "Both",
            "description": "Larger developers or corporate brokerage chains may ask: Do you have a security questionnaire? Have you done a penetration test? You do not need certifications right now. You need: (1) Honest answers to the 4 security questions from Phase 1. (2) Your data security information sheet. (3) A commitment to complete any client security questionnaire within 5 business days."
          }
        ]
      },
      {
        "title": "Follow-Up Discipline",
        "tasks": [
          {
            "id": "waba-132",
            "text": "132. Send the post-demo follow-up within 2 hours — every time, no exceptions",
            "owner": "Founder B",
            "description": "Use the template in Part 3 of the execution plan. Send to their WhatsApp. Includes: 1-line summary of what they saw, Loom link, ROI calculator pre-filled with their numbers, founding cohort offer, specific date and time for next call. If you do not follow up within 2 hours, the demo loses most of its impact."
          },
          {
            "id": "waba-133",
            "text": "133. Follow up every 5 days for prospects who have gone silent after a demo",
            "owner": "Founder B",
            "description": "Day 5: \"Hi [Name], just checking in on the demo from [day]. Any questions I can answer?\" Day 10: \"Hi [Name], I wanted to share something relevant to your [project name]: [specific observation].\" Day 20 (final): \"Hi [Name], I will leave it here for now. If anything changes, I am reachable at this number.\" Three follow-ups. Then stop."
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "label": "Phase 7",
    "title": "Founding Cohort (5–10 Paying Customers)",
    "timeline": "Weeks 3–6",
    "color": "#3B82F6",
    "description": "Acquire first 5–10 paid pilot developers at ₹8,000/mo. Structured onboarding calls and weekly check-ins.",
    "sections": [
      {
        "title": "Cohort Selection",
        "tasks": [
          {
            "id": "waba-134",
            "text": "134. Select 5–10 prospects for the founding cohort using your ICP scorecard",
            "owner": "Founder B",
            "description": "Criteria: (1) ICP score of 9 or above. (2) Confirmed in conversation that they lose leads to response delay. (3) Decision-maker is known and available. (4) Genuine interest, not polite curiosity. Prioritize developers over brokerage chains."
          },
          {
            "id": "waba-135",
            "text": "135. Define founding cohort success criteria before you begin",
            "owner": "Both",
            "description": "In Company Operating Doc: \"Founding cohort succeeds if: (1) At least 3 customers complete 30 days and renew. (2) At least 1 customer provides a written testimonial with real numbers. (3) We identify at least 2 product improvements from feedback. (4) We have at least 1 referral from a cohort member by end of Week 6.\""
          },
          {
            "id": "waba-136",
            "text": "136. Prioritize developers over brokerage chains for the founding cohort",
            "owner": "Founder B",
            "description": "Developers: cleaner inventory data, more direct ROI equation, clearer decision-making chain. Brokerage chains: more complex onboarding, more stakeholders, more potential failure points. Get 3 developers live first, then add a brokerage chain as customer 4 or 5."
          },
          {
            "id": "waba-137",
            "text": "137. Confirm a decision-maker is actively involved before onboarding begins",
            "owner": "Founder B",
            "description": "Before proposing the pilot: \"Is there anyone else on your team who should be involved in this conversation before we proceed?\" Get that person into the conversation before signing. A pilot that requires retroactive approval often gets cancelled."
          }
        ]
      },
      {
        "title": "Onboarding Execution",
        "tasks": [
          {
            "id": "waba-138",
            "text": "138. What to do on the day a customer signs and pays — exact sequence",
            "owner": "Both",
            "description": "Within 1 hour of payment: welcome message sent, onboarding checklist PDF sent, onboarding call booked within 2 business days. Within 24 hours: Founder B follows up to confirm receipt of checklist. On the onboarding call (both founders present, 1 hour): walk through inventory sync, confirm WhatsApp number, send one real test lead through the full flow while the customer watches."
          },
          {
            "id": "waba-139",
            "text": "139. Run a structured onboarding call with every pilot customer",
            "owner": "Both",
            "description": "Do not just send email instructions. A live call where both founders walk the customer through the setup catches misunderstandings immediately. By the end of the call: inventory sheet is synced, email forwarding is confirmed, test lead has run through the full flow, and the customer has seen a response go out. If any step fails, Founder A fixes it on the spot."
          },
          {
            "id": "waba-140",
            "text": "140. Run weekly 15-minute check-in calls with every pilot customer",
            "owner": "Founder B",
            "description": "Every Friday. Three questions: (1) How many leads came in this week, and how many did the system respond to? (2) Were there any questions the system did not handle well? (3) Is the handoff to your sales team working as expected? Take notes. Send a 3-line WhatsApp summary after every call."
          },
          {
            "id": "waba-141",
            "text": "141. Track core metrics for every pilot account from Day 1",
            "owner": "Both",
            "description": "In Google Drive per customer: date of each lead, time it arrived, time the system responded, whether the buyer responded to the WhatsApp, whether a site visit was booked, whether the booking was confirmed. These numbers are your case study data and your renewal argument."
          },
          {
            "id": "waba-142",
            "text": "142. Collect structured feedback weekly from every pilot customer",
            "owner": "Founder B",
            "description": "At every check-in: ask what is working and what is confusing. Send a 2-question WhatsApp between calls: \"What buyer question came up this week that the system handled well?\" and \"Was there anything it could not handle?\" This structured collection prevents vague end-of-pilot feedback."
          },
          {
            "id": "waba-143",
            "text": "143. Document every bug and friction point from pilot onboarding",
            "owner": "Founder A",
            "description": "Founder A keeps a running list. Every bug, every step requiring manual intervention, every piece of customer data that did not import cleanly. Prioritize by frequency. If 3 out of 5 pilot customers hit the same issue, fix that first. Founder B gives Founder A a prioritized fix list every Friday."
          },
          {
            "id": "waba-144",
            "text": "144. Revise your positioning based on the language pilot customers use",
            "owner": "Founder B",
            "description": "Listen to how pilot customers explain the product to their own team. If a developer says \"it is like having an extra team member who responds to WhatsApp at midnight\" — that is better than your original messaging. Use their exact language."
          },
          {
            "id": "waba-145",
            "text": "145. Identify 1–2 customers willing to provide testimonials or case study quotes",
            "owner": "Founder B",
            "description": "At Week 3 check-in: \"I would love to share what you have experienced with other developers we are speaking to. Would you be comfortable giving me a short quote?\" If yes: send 2 questions by WhatsApp. Write the quote based on their voice note. Send back for approval."
          }
        ]
      },
      {
        "title": "System Testing Before Broader Launch",
        "tasks": [
          {
            "id": "waba-146",
            "text": "146. Run a full internal dry run of the launch day sequence",
            "owner": "Both",
            "description": "Simulate the full day before going public: publish LinkedIn post in draft mode, send 10 test outreach messages to friendly contacts, check HubSpot is capturing inbound correctly, check Calendly bookings create deals, check welcome email fires correctly."
          },
          {
            "id": "waba-147",
            "text": "147. Load-test the product under expected launch-day traffic",
            "owner": "Founder A",
            "description": "Founder A: simulate 50 leads arriving simultaneously. Does the parser handle all 50? Do 50 WhatsApp messages go out? Do responses arrive correctly? Know your system's practical limit before launch."
          },
          {
            "id": "waba-148",
            "text": "148. Test all automated email sequences before any pilot customer goes live",
            "owner": "Founder B",
            "description": "In HubSpot → Workflows: enroll yourself as a test contact. Confirm: welcome email arrives within 5 minutes, Day 3 follow-up arrives on Day 3, Day 14 email arrives on Day 14, all links work, emails do not land in spam."
          },
          {
            "id": "waba-149",
            "text": "149. Test demo booking, Razorpay payment, and onboarding checklist delivery end-to-end",
            "owner": "Both",
            "description": "Book a Calendly slot from your own phone in incognito. Confirm HubSpot creates the deal. Pay ₹1 via Razorpay. Confirm welcome message fires. Confirm onboarding checklist PDF link works. Fix anything that breaks."
          },
          {
            "id": "waba-150",
            "text": "150. Lock launch scope — no new features until founding cohort is complete",
            "owner": "Both",
            "description": "From Week 3 until founding cohort is complete: Founder A's job is to fix bugs and maintain stability, not build features. Feature requests from pilot customers go on a list and are reviewed after Week 6. Adding features during an active pilot creates instability."
          }
        ]
      }
    ]
  },
  {
    "id": 8,
    "label": "Phase 8",
    "title": "Pre-Launch Go/No-Go",
    "timeline": "Weeks 5–6",
    "color": "#EF4444",
    "description": "Go/no-go readiness checklist, launch scope lock, fallback plan, and media announcements.",
    "sections": [
      {
        "title": "Readiness Checklist & Lock",
        "tasks": [
          {
            "id": "waba-151",
            "text": "151. Confirm all go/no-go criteria are met before going public",
            "owner": "Both",
            "description": "Check all of: (1) At least 2 pilot customers live and active. (2) At least 1 measurable proof point from founding cohort data. (3) No unresolved product outage in past 2 weeks. (4) Leave-behind PDF updated with real data. (5) Landing page updated with at least 1 testimonial. (6) Both founders have run at least 10 demo calls and can handle any objection without notes. If any is not met: delay the public launch by 1 week."
          },
          {
            "id": "waba-152",
            "text": "152. Confirm all launch assets are approved, final, and ready to publish",
            "owner": "Both",
            "description": "Go through every asset: LinkedIn launch post (stored in Google Doc, final version), landing page (live, updated with founding cohort data), leave-behind PDF (print-ready, real numbers), sales deck (updated), ROI calculator (shared link works). Mark each as \"Ready\" in a checklist. Do not launch if anything is still \"In Progress\"."
          },
          {
            "id": "waba-153",
            "text": "153. Make a formal go/no-go decision with both founders",
            "owner": "Both",
            "description": "Both founders sit together (or video call) and answer: Is the product stable? Do we have proof we can share? Are we ready to handle a surge of demo requests? If both say yes: set the launch date. If either says no: set a specific date to revisit."
          },
          {
            "id": "waba-154",
            "text": "154. Lock launch scope — no new assets or feature requests after this point",
            "owner": "Both",
            "description": "From this decision until the end of launch week: nothing new is designed, built, or commissioned. The only work that happens is distribution and customer conversations."
          },
          {
            "id": "waba-155",
            "text": "155. Document the fallback plan if the product needs a delay post-announcement",
            "owner": "Both",
            "description": "Write: \"If product goes down for more than 2 hours after launch: (1) Founder A assesses resolution time. (2) Founder B WhatsApps all pilot customers with a brief note. (3) Founder B contacts any new prospects who booked demos. (4) Decision to delay the public LinkedIn post is made by both founders together.\""
          },
          {
            "id": "waba-156",
            "text": "156. Prepare a press release or short launch announcement for relevant Gujarat media",
            "owner": "Founder B",
            "description": "2-paragraph announcement for: Gujarat Samachar property desk, Times of India Ahmedabad property desk, Proptech India newsletter. Content: what the product does, who it helps, results from founding cohort. Send 1 week before your LinkedIn post."
          },
          {
            "id": "waba-157",
            "text": "157. Prepare reactive PR responses if your product is misrepresented",
            "owner": "Founder B",
            "description": "Write: \"If someone calls us a chatbot: [response]. If someone says this is just WhatsApp automation: [response]. If a competitor claims to do the same thing: [response].\" Having prepared responses means you do not freeze or say something inconsistent."
          },
          {
            "id": "waba-158",
            "text": "158. Set up a launch day coordination WhatsApp group with both founders",
            "owner": "Both",
            "description": "Just you and Founder A. Pin the launch sequence: 8:45am product check, 9am LinkedIn post, 10am individual messages, 12pm top 10 prospects, 3pm review demo bookings. All real-time updates during launch day go here."
          },
          {
            "id": "waba-159",
            "text": "159. Confirm analyst briefings if pursuing analyst coverage",
            "owner": "Founder B",
            "description": "If you have contacts at PropTech India analysts or real estate technology journalists: brief them under embargo 1 week before launch. They need time to write. Most will not write anything — but when one does, it is worth 100 LinkedIn posts."
          },
          {
            "id": "waba-160",
            "text": "160. Prepare 5 LinkedIn posts ready to publish across launch week — write them now",
            "owner": "Founder B",
            "description": "Post 1 (Day 1): launch announcement. Post 2 (Day 2): the lead response problem. Post 3 (Day 3): founding cohort result. Post 4 (Day 4): how the system works. Post 5 (Day 5): Q&A format. Write all 5 now. Do not write on the day."
          },
          {
            "id": "waba-161",
            "text": "161. Schedule daily 15-minute standups for launch week between both founders",
            "owner": "Both",
            "description": "Every morning of launch week: 15 minutes. Three agenda items: (1) What happened yesterday. (2) Priority today. (3) Anything blocked. Use the launch WhatsApp group for between-standup updates."
          }
        ]
      }
    ]
  },
  {
    "id": 9,
    "label": "Phase 9",
    "title": "Launch Day & Launch Week",
    "timeline": "Weeks 6–7",
    "color": "#8B5CF6",
    "description": "Hour-by-hour launch day checklist, founder LinkedIn announcement, webinar, and community outreach.",
    "sections": [
      {
        "title": "Launch Day Sequence",
        "tasks": [
          {
            "id": "waba-162",
            "text": "162. T-24h: Final go/no-go confirmation with both founders",
            "owner": "Both",
            "description": "Evening before launch day: both founders confirm product is stable, all assets are ready, pilot customers have been informed. If all yes: launch proceeds. If any no: delay 1 week. Make the decision before midnight."
          },
          {
            "id": "waba-163",
            "text": "163. Launch morning: Founder A confirms product is up before anything goes public",
            "owner": "Founder A",
            "description": "Founder A checks UptimeRobot at 8:45am. Sends one test lead through the system. Confirms response goes out within 30 seconds. Sends Founder B a WhatsApp: \"System confirmed live.\" Only after this does Founder B proceed."
          },
          {
            "id": "waba-164",
            "text": "164. Send a personal message to every pilot customer before the LinkedIn post goes up",
            "owner": "Founder B",
            "description": "WhatsApp each founding cohort customer: \"Hi [Name], we are publicly launching [Product] today. You have been part of our founding cohort — thank you. If you know any developer who might benefit, I would be grateful for an introduction.\""
          },
          {
            "id": "waba-165",
            "text": "165. Publish the founder LinkedIn post at 9am",
            "owner": "Founder B",
            "description": "Already written and stored in Google Doc. Copy, paste, publish. No editing on launch day. Tag your company page. Use 3–4 relevant hashtags (#proptech #realestate #gujarat #ahmedabad)."
          },
          {
            "id": "waba-166",
            "text": "166. Update landing page with case study result and \"Now Open\" messaging",
            "owner": "Founder B",
            "description": "Add the founding cohort case study result to the landing page. The page should now read as evidence-first, not promise-first."
          },
          {
            "id": "waba-167",
            "text": "167. Send the customer announcement email to all founding cohort customers",
            "owner": "Founder B",
            "description": "A brief email from Founder B: \"We publicly launched today. You have been part of our founding cohort since the beginning. Thank you. If you know another developer who faces the same challenge, an introduction would mean a lot to us.\""
          },
          {
            "id": "waba-168",
            "text": "168. Send individual WhatsApp messages to your 30 closest personal contacts",
            "owner": "Founder B",
            "description": "30 individual messages. Not a broadcast. Each one personal: \"Hi [Name], launched something today — [2 sentences about the product]. If you know any developer in Gujarat who might need this, I would really appreciate an introduction.\""
          },
          {
            "id": "waba-169",
            "text": "169. Start paid LinkedIn amplification if budget is available",
            "owner": "Founder B",
            "description": "If you have ₹5,000–10,000: boost the launch post to Real Estate professionals in Gujarat. LinkedIn ad targeting: Job Title includes \"Director\" OR \"CEO\" OR \"Marketing Head\", Industry = Real Estate, Location = Gujarat. Daily budget: ₹500–1,000. Run 7–10 days. Stop if no demo bookings result."
          },
          {
            "id": "waba-170",
            "text": "170. Monitor demo bookings, landing page, and inbound messages throughout launch day",
            "owner": "Founder B",
            "description": "Founder B: check Calendly every 2 hours, check HubSpot for new contacts, check LinkedIn DMs, check WhatsApp. Respond to every inbound message within 1 hour on launch day."
          },
          {
            "id": "waba-171",
            "text": "171. Respond to every LinkedIn comment and DM within 2 hours on launch day",
            "owner": "Founder B",
            "description": "Every comment gets a reply. Every DM gets a personal response. If someone says \"interesting\": \"Do you work with developers in Gujarat?\" If someone says \"I know someone who needs this\": \"I would love an introduction — shall I send you my number?\""
          }
        ]
      },
      {
        "title": "Launch Week Execution",
        "tasks": [
          {
            "id": "waba-172",
            "text": "172. Hold all demo calls this week personally — reschedule nothing",
            "owner": "Founder B",
            "description": "Demo calls booked during launch week are the direct result of your launch effort. Attend every one. Reschedule within 24 hours maximum if a genuine conflict arises."
          },
          {
            "id": "waba-173",
            "text": "173. Host a live demo webinar or group WhatsApp video call on Day 2 or 3",
            "owner": "Both",
            "description": "Invite 5–8 developers from your target list to a 45-minute live session: 20 minutes of demo, 25 minutes of Q&A. Frame as: \"A live session on how real estate developers in Gujarat are responding to leads in 30 seconds.\" Not a sales pitch. A demonstration."
          },
          {
            "id": "waba-174",
            "text": "174. Send personalized outreach to your top 30 prospect accounts referencing the launch",
            "owner": "Founder B",
            "description": "\"Hi [Name], we officially launched today. We now have [X] developers live in Ahmedabad. I wanted to let you know we have [N] pilot slots remaining at the founding cohort price this month. Would a quick demo this week make sense?\""
          },
          {
            "id": "waba-175",
            "text": "175. Post in relevant Gujarat real estate WhatsApp and Telegram communities",
            "owner": "Founder B",
            "description": "Identify 3–5 active professional groups. Post once in each: a brief personal message about the launch. \"Hi all, I have been building something for developers here — [2 sentences]. Happy to show anyone how it works.\" One post per group. Not repeated."
          },
          {
            "id": "waba-176",
            "text": "176. Follow up with journalists and media contacts post-publication",
            "owner": "Founder B",
            "description": "If you sent a press release in Phase 7: follow up with each contact by email on Day 2 of launch week. \"Hi [Name], I sent over a brief about our launch last week. Happy to provide any additional information or arrange a quick call.\""
          },
          {
            "id": "waba-177",
            "text": "177. Distribute launch content in real estate communities and partner channels",
            "owner": "Founder B",
            "description": "Share the LinkedIn launch post in relevant LinkedIn groups. If you have any property portal contacts or industry newsletter contacts, share the announcement with them directly."
          },
          {
            "id": "waba-178",
            "text": "178. Run 15-minute daily standups with both founders throughout launch week",
            "owner": "Both",
            "description": "Use the launch WhatsApp group. 3 agenda items: (1) Yesterday's numbers. (2) Today's priority. (3) Any blockers."
          },
          {
            "id": "waba-179",
            "text": "179. Pull first 48-hour signal check after launch day",
            "owner": "Both",
            "description": "By end of Day 2: count demo bookings, WhatsApp messages from new prospects, landing page visitors from GA4, LinkedIn post impressions and profile views. If demo bookings are below 5: increase individual outreach. If above 10: ensure Calendly has enough slots."
          }
        ]
      }
    ]
  },
  {
    "id": 10,
    "label": "Phase 10",
    "title": "0 to 100 Customers (Sustained Push)",
    "timeline": "Months 2–3",
    "color": "#10B981",
    "description": "Sustain 33 new customer signups per month. 30-day performance review, referral engine, and Gujarat expansion.",
    "sections": [
      {
        "title": "Early Signal Review (Weeks 7–8)",
        "tasks": [
          {
            "id": "waba-180",
            "text": "180. Pull activation data: what percentage of signups have reached the aha moment?",
            "owner": "Both",
            "description": "In your pilot tracking sheets: for each pilot customer, has the system responded to a real lead within 30 seconds with accurate inventory data? If fewer than 80% have reached this milestone, there is a product or onboarding issue. Identify which step is failing and fix it before expanding."
          },
          {
            "id": "waba-181",
            "text": "181. Analyze support ticket patterns: where is confusion occurring?",
            "owner": "Founder B",
            "description": "Review all support messages from Weeks 3–7. Group by topic. The top 3 recurring questions are your onboarding gaps. Fix them: add a help center section, or update the onboarding checklist."
          },
          {
            "id": "waba-182",
            "text": "182. Collect qualitative feedback from every demo that did not convert",
            "owner": "Founder B",
            "description": "For every demo that did not result in a pilot proposal, call or WhatsApp the prospect: \"Would you be willing to tell me the main reason you did not move forward? It would genuinely help us improve.\" After 10 non-converted demos, you will see a pattern. That pattern is either a product gap, pricing issue, or wrong-ICP problem."
          },
          {
            "id": "waba-183",
            "text": "183. Review social and media coverage from the launch week",
            "owner": "Founder B",
            "description": "Google your company name, product name, and \"WhatsApp lead response real estate India\". Note any mentions. If a journalist or content creator covered you: email to say thank you and offer an interview."
          },
          {
            "id": "waba-184",
            "text": "184. Fix any messaging gaps identified from early customer reactions before they compound",
            "owner": "Founder B",
            "description": "If 3 or more prospects said the same thing was confusing, update your messaging immediately. Change the 1-pager, update the landing page, update the sales deck."
          }
        ]
      },
      {
        "title": "Day 30 Launch Performance Review",
        "tasks": [
          {
            "id": "waba-185",
            "text": "185. Measure adoption rate vs target — what percentage of pilot customers activated?",
            "owner": "Both",
            "description": "Count pilots fully live. Compare to founding cohort target. Calculate: demo calls to pilot conversion rate (target 30%+), pilots to activation rate (target 100%)."
          },
          {
            "id": "waba-186",
            "text": "186. Measure pipeline impact: demo requests, opportunities, revenue from launch",
            "owner": "Both",
            "description": "From Week 6 launch to Day 30: total demo calls held, total pilot proposals sent, total pilots signed, total revenue collected. Compare against weekly targets."
          },
          {
            "id": "waba-187",
            "text": "187. Review asset adoption: are prospects engaging with the sales materials?",
            "owner": "Founder B",
            "description": "Ask in next 5 demo calls: \"Did you watch the demo video before our call? Did you look at the ROI calculator?\" If fewer than 30% watched the video, the link is not being clicked. Fix the follow-up email subject line."
          },
          {
            "id": "waba-188",
            "text": "188. Calculate preliminary CAC at Day 30",
            "owner": "Founder B",
            "description": "Add up: Founder B's time on sales per customer signed (hours × your time value), direct expenses (travel, printing, events). Divide by customers signed. Target by Month 3: under ₹5,000 per customer."
          },
          {
            "id": "waba-189",
            "text": "189. Collect first NPS from every paying customer at Day 30",
            "owner": "Founder B",
            "description": "WhatsApp: \"On a scale of 0–10, how likely are you to recommend [Product] to another developer you know? And 1–2 sentences on why?\" The words matter more than the number."
          },
          {
            "id": "waba-190",
            "text": "190. Present a written 30-day review to both founders",
            "owner": "Both",
            "description": "1-page document: what we set out to do, what we achieved, 3 things that worked, 3 that did not, the single most important decision for the next 30 days. Both founders read, agree on the decision, and act on it in Week 9."
          }
        ]
      },
      {
        "title": "Month 2: Scale Referral Engine",
        "tasks": [
          {
            "id": "waba-191",
            "text": "191. Run a formal referral check-in with every active customer at Week 4",
            "owner": "Founder B",
            "description": "At the Week 4 check-in: \"I am really glad this is working for your project. Do you know one or two developers personally who might have the same challenge? Even a quick WhatsApp introduction would be a huge help.\""
          },
          {
            "id": "waba-192",
            "text": "192. Run in-app or WhatsApp re-engagement for leads who inquired but did not sign",
            "owner": "Founder B",
            "description": "Anyone who booked a demo but did not convert in the past 30 days: send a WhatsApp in Week 8 with your founding cohort data. \"It has been a few weeks since we spoke. I wanted to share what our first pilot customers have experienced: [1 real data point]. If timing is better now, I have 2 pilot slots available this month.\""
          },
          {
            "id": "waba-193",
            "text": "193. Build and publish your first customer case study",
            "owner": "Founder B",
            "description": "By end of Week 6 you should have enough data. Write the case study using the template from Phase 3. Send to customer for approval before publishing. Once approved: add to landing page, share as a LinkedIn post, send as PDF in every future demo follow-up."
          },
          {
            "id": "waba-194",
            "text": "194. Launch a 2-post-per-week LinkedIn content programme from Month 2",
            "owner": "Founder B",
            "description": "Not product pitches. Industry observations. \"What I learned from speaking to 30 developers in Ahmedabad.\" \"The 30-second window that decides if a buyer books a site visit.\" Educational content positions Founder B as someone who understands the market."
          },
          {
            "id": "waba-195",
            "text": "195. Host a follow-up demo event or group WhatsApp video call in Month 2",
            "owner": "Both",
            "description": "Invite 8–10 developers from your target list who have not yet converted. Frame as: \"A 30-minute walkthrough of real results from our first 30 days with Gujarat developers.\" Show the case study data live. This event typically converts 2–3 attendees."
          },
          {
            "id": "waba-196",
            "text": "196. Update all sales materials with real proof points from the founding cohort",
            "owner": "Founder B",
            "description": "Leave-behind PDF: replace placeholder numbers with real ones. Sales deck: update results slide with actual data. Loom video: if it no longer accurately reflects the product, record a new one. No generic claim anywhere in your materials after Day 30."
          },
          {
            "id": "waba-197",
            "text": "197. Expand outbound to second-tier ICP accounts using learnings from first-wave conversations",
            "owner": "Founder B",
            "description": "Once Ahmedabad is producing a steady 5+ new customers per week: add Surat and Rajkot to your target list. Your Ahmedabad case studies are directly relevant. Do not expand cities until the previous city has a steady pipeline."
          },
          {
            "id": "waba-198",
            "text": "198. Optimize paid channels: kill what is not converting, double down on what is",
            "owner": "Founder B",
            "description": "If you started LinkedIn ads in Phase 8: review the data. Which job titles click? Which book demos? Pause ad sets with 100+ impressions and zero bookings. Double the budget on sets that produced at least 1 booking. Minimum test period: 2 weeks and ₹3,000–5,000 spend before drawing conclusions."
          },
          {
            "id": "waba-199",
            "text": "199. Set weekly pipeline targets and hold them without exception",
            "owner": "Founder B",
            "description": "Month 2 targets: 50 outreach messages sent per week, 5 demo calls held, 2 pilot proposals sent, 2 new paying customers signed. Review every Friday. If below target on any metric, change one thing. Do not change everything at once."
          }
        ]
      },
      {
        "title": "Month 3: Sustain to 100 & Scale",
        "tasks": [
          {
            "id": "waba-200",
            "text": "200. Treat every renewal as a new sale",
            "owner": "Founder B",
            "description": "1 week before renewal date: call the customer. Ask how the month was. Then: \"Your renewal is on [date]. I will send the payment link tomorrow. Anything you need before then?\" Do not assume renewals happen automatically."
          },
          {
            "id": "waba-201",
            "text": "201. Handle a cancellation request by calling, not messaging",
            "owner": "Founder B",
            "description": "When a customer says they want to cancel: call within the hour. Do not WhatsApp. Do not defend before listening. \"Can you walk me through what has not been working?\" Scenario 1 — product issue: \"Give us 10 days to fix this.\" Scenario 2 — budget: \"One month at half price while you evaluate.\" Scenario 3 — wrong fit: \"Can I ask for one introduction before you go?\""
          },
          {
            "id": "waba-202",
            "text": "202. Review unit economics with all available data",
            "owner": "Both",
            "description": "Calculate: average monthly revenue per customer, cost of onboarding each new customer, average support time per customer per month, churn rate (cancellations ÷ total customers at start of month), Net Revenue Retention. These 5 numbers tell you whether the model works at scale."
          },
          {
            "id": "waba-203",
            "text": "203. Identify which customer segment converts faster and generates stronger referrals",
            "owner": "Both",
            "description": "Sort all closed deals by Company Type. Which type closed faster, paid more reliably, needed less support, gave referrals? That is your primary ICP going forward. Double down on it in Month 4."
          },
          {
            "id": "waba-204",
            "text": "204. Define your expansion plan beyond Gujarat",
            "owner": "Both",
            "description": "1-page document: which city is next and why. What changes in the sales approach. What you need before you can serve a customer 600km away. Do not execute in Month 3. Write it so Month 4 has a clear starting point."
          },
          {
            "id": "waba-205",
            "text": "205. Calculate your revenue and monthly burn formally for the first time",
            "owner": "Both",
            "description": "Revenue: sum of all active customer monthly payments. Burn: all monthly expenses. Revenue minus Burn = monthly profit or deficit. If profitable: decide what to do with the surplus. If not: calculate how many additional customers are needed to reach break-even."
          },
          {
            "id": "waba-206",
            "text": "206. Prepare the 90-day review — the most important document you will write",
            "owner": "Both",
            "description": "2 pages. Page 1: what we set out to do, what we actually did, revenue at Day 90, number of customers, top 3 growth drivers, top 3 slowdowns, most surprising learning. Page 2: what we do in the next 90 days, the one thing that if it works changes everything, who we need to hire first. This is the foundation of every investor, advisor, or partner conversation from here forward."
          },
          {
            "id": "waba-207",
            "text": "207. Celebrate the founding cohort publicly on LinkedIn",
            "owner": "Founder B",
            "description": "A post from Founder B: \"We crossed [X] paying customers today. The first [N] were our founding cohort — developers in Gujarat who took a chance on us before we had a track record. [Name 1], [Name 2] — thank you. Every site visit your buyers book is a reminder of why we built this.\" Name them only with permission."
          }
        ]
      }
    ]
  },
  {
    "id": 11,
    "label": "Phase 11",
    "title": "Brand Identity Framework",
    "timeline": "Parallel (Weeks 1–6)",
    "color": "#A855F7",
    "description": "Verbal identity, visual system (navy/white/gold), LinkedIn optimization, landing page, and Brand Bible.",
    "sections": [
      {
        "title": "Name, Tagline & Verbal Identity",
        "tasks": [
          {
            "id": "waba-b-01",
            "text": "B-01. Evaluate your current company and product name against five criteria",
            "owner": "Both",
            "description": "(1) Can a developer say it correctly the first time they read it? (2) Can a developer spell it correctly after hearing it on a phone call? (3) Does it suggest speed, response, or real estate? (4) Is the .com or .in domain available? (5) Is there a clear, available trademark in Class 42? If your current name fails two or more criteria, rename now — before you have built brand equity around the wrong name."
          },
          {
            "id": "waba-b-02",
            "text": "B-02. Check name availability before committing to anything",
            "owner": "Founder B",
            "description": "For each name: (1) Search IP India trademark database (ipindia.gov.in → Trade Marks → Public Search) for existing marks in Class 42. (2) Search GoDaddy or Namecheap for .com and .in. (3) Search LinkedIn for any existing company with the same name. (4) Google the name — if something unrelated dominates the first page, reconsider. A name clean across all four checks is a good name."
          },
          {
            "id": "waba-b-03",
            "text": "B-03. Write 10 tagline options and lock the one that passes the filter",
            "owner": "Founder B",
            "description": "Your tagline must: (1) Be under 8 words. (2) Contain no jargon. (3) Make the developer think of their own leads, not your technology. (4) Sound natural when said aloud in a meeting. Test each: if a developer reads only this line, do they understand the value? Examples: \"Every lead answered. Every time.\" / \"From inquiry to site visit — in seconds.\" / \"Stop losing leads you already paid for.\" Once chosen: lock it. Use it in exactly the same words on every surface — LinkedIn, website, leave-behind, email signature, WhatsApp profile. No variations."
          },
          {
            "id": "waba-b-04",
            "text": "B-04. Define your brand voice using four parameters — write them in the Company Operating Doc",
            "owner": "Both",
            "description": "Parameter 1 — Tone: Direct and confident, never aggressive. Parameter 2 — Language level: Plain business Hindi/English. No technical terms with developers (API, parser, NLP are not used). Parameter 3 — Personality: The senior colleague who has already solved this problem, not the eager vendor. Parameter 4 — What you never do: Never exaggerate (no claims you cannot prove). Never use startup buzzwords (disruptive, revolutionary, game-changing). Never make a developer feel foolish for not knowing something technical."
          },
          {
            "id": "waba-b-05",
            "text": "B-05. Write your brand voice as 6 \"We are X, not Y\" statements",
            "owner": "Founder B",
            "description": "Complete: \"We are direct, not aggressive.\" \"We are knowledgeable, not jargon-heavy.\" \"We are confident, not arrogant.\" \"We are specific, not vague.\" Fill in the last two based on what you want to avoid sounding like. Keep this list in your Company Operating Doc. When anyone writes on behalf of the company, they check new content against this list before sending."
          },
          {
            "id": "waba-b-06",
            "text": "B-06. Write a brand voice test you can apply to every piece of content in 60 seconds",
            "owner": "Founder B",
            "description": "Three questions: (1) Would a developer in Ahmedabad read this and immediately understand it, without Googling any term? (2) Does it sound like a person talking or a company marketing? (It must sound like a person.) (3) Does it make a claim that cannot be proven? (It must not.) If content passes all three: publish it. If it fails any one: rewrite the failing part. Apply to every LinkedIn post, every outreach message, every email."
          }
        ]
      },
      {
        "title": "Visual Identity — Logo, Colors & Fonts",
        "tasks": [
          {
            "id": "waba-b-07",
            "text": "B-07. Brief a designer for a logo with exact specifications",
            "owner": "Founder B",
            "description": "You need: a wordmark (company name in a clean typeface) with an optional simple icon suggesting speed, response, or property — not a robot, not a generic chat bubble, not WhatsApp-coloured anything. Deliverables: SVG file (vector), PNG with transparent background (dark and light versions separately), PNG for WhatsApp profile photo (400x400px), black-only version for PDF printing. Do not pay until all file formats are received. Budget: ₹3,000–5,000 via a CEPT/NID student or Behance freelancer. Temporary Canva wordmark acceptable for first 30 days only."
          },
          {
            "id": "waba-b-08",
            "text": "B-08. Brief the designer correctly in writing — not verbally",
            "owner": "Founder B",
            "description": "Send a written brief including: company name (exact spelling and capitalization), product category, target audience (\"real estate developers and brokerage chains in Gujarat, conservative businesspeople, not tech-forward\"), what the logo must convey (\"speed, reliability, professional\"), what to avoid (\"WhatsApp clone aesthetics, chatbot imagery, overly startup-y\"), color preferences, and specific file deliverables. A written brief produces better work faster with fewer revision rounds."
          },
          {
            "id": "waba-b-09",
            "text": "B-09. Evaluate logo concepts against four criteria before approving",
            "owner": "Founder B",
            "description": "(1) Can you read the company name clearly at thumbnail size (40x40 pixels on a phone screen)? (2) Does it look clean and professional in black and white? (3) Would you feel comfortable handing a leave-behind PDF with this logo to a senior developer? (4) Does it look clearly different from your three main competitors? If yes to all four: approve. If no to any: provide specific written feedback. Do not approve a logo you are unsure about just to end the process."
          },
          {
            "id": "waba-b-10",
            "text": "B-10. Define your primary color, secondary color, and neutral — write as HEX codes",
            "owner": "Both",
            "description": "Recommended combinations for your market: Option A — Deep Navy + White + Gold: #1B3A5C, #FFFFFF, #C9A84C (premium, established, trustworthy). Option B — Charcoal + Off-white + Teal: #2C2C2C, #F7F7F5, #1A8C82 (modern, technically serious). Option C — Deep Teal + White + Near-black: #0D6E6E, #FFFFFF, #1A1A1A (confident, distinctive). Choose one. Write the three HEX codes in your Company Operating Doc under \"Brand Colors\". HEX codes are universal — give these to your designer, website builder, and Canva for every future design element."
          },
          {
            "id": "waba-b-11",
            "text": "B-11. Choose your two brand fonts and download them from Google Fonts",
            "owner": "Founder B",
            "description": "Recommended pairings: Pairing 1 (professional/authoritative): Headings — Playfair Display, Body — Source Sans Pro. Pairing 2 (modern/precise): Headings — Montserrat SemiBold, Body — Open Sans. Pairing 3 (clean/minimal): Headings — Raleway, Body — Lato. All free on fonts.google.com. Download and install both on every computer you use. Use heading font for all titles, body font for all paragraph text. Write both font names in your Company Operating Doc under \"Brand Fonts\"."
          }
        ]
      },
      {
        "title": "LinkedIn — Personal & Company",
        "tasks": [
          {
            "id": "waba-b-12",
            "text": "B-12. Update your LinkedIn headline — do this today",
            "owner": "Founder B",
            "description": "Required format: \"Co-Founder at [Company] — Helping Real Estate Developers in Gujarat Book More Site Visits.\" This names your company, names your ICP, and names the outcome you deliver. A developer who reads this knows immediately whether you are relevant to them. Your current headline likely says nothing."
          },
          {
            "id": "waba-b-13",
            "text": "B-13. Write a compelling About section — 1st person, conversational, outcome-focused",
            "owner": "Founder B",
            "description": "Structure: Sentence 1 — the problem you saw (\"Real estate developers in Gujarat are spending lakhs on lead generation and losing 40–60% of those leads before anyone picks up the phone.\"). Sentences 2–3 — what you built and why. Sentence 4 — the result. Sentence 5 — the call to action (\"If you work with developers in Gujarat and this sounds familiar, I would be glad to connect and show you how it works.\"). First person. No bullet points. No features. Only outcomes."
          },
          {
            "id": "waba-b-14",
            "text": "B-14. Add a Featured section with your demo video and leave-behind PDF",
            "owner": "Founder B",
            "description": "LinkedIn Featured section appears prominently on your profile. Add: (1) Your Loom demo video link — title it \"See how a buyer inquiry becomes a booked site visit in 90 seconds.\" (2) Your leave-behind PDF — upload it directly as a document post with your company name and tagline as the title. Any developer who visits your profile can see the product working without you being present."
          },
          {
            "id": "waba-b-15",
            "text": "B-15. Add your Experience section correctly — title, company, outcome-focused description",
            "owner": "Founder B",
            "description": "Title: Co-Founder and CEO. Company: your company name (linked to the company page). Description: 2–3 sentences describing what the company does, who it serves, and what results customers get. Do not list responsibilities. Describe outcomes. Also add Diviner Media — it establishes that you understand marketing and the business of helping companies grow."
          },
          {
            "id": "waba-b-16",
            "text": "B-16. Get at least 3 LinkedIn recommendations on your profile before Week 8",
            "owner": "Founder B",
            "description": "Before you have developer testimonials, ask for recommendations from people you have worked with professionally (Diviner Media or other projects), people who know your work ethic, a mentor or advisor if you have one. A profile with 3 recommendations from credible people is a stronger signal than one with zero, even if those people are not in real estate."
          },
          {
            "id": "waba-b-17",
            "text": "B-17. Create your company LinkedIn page with complete information",
            "owner": "Founder B",
            "description": "LinkedIn.com → For Business → Create a Company Page → Small Business. You need: company name, website URL, company size (2–10 employees), industry (Technology, Information and Internet), company description (use the 2-paragraph description from your messaging document). Upload logo as profile photo. Create a banner (1128x191 pixels) showing company name, tagline, and ideally your operating city. Both founders must follow the company page and list the company under their personal profiles."
          },
          {
            "id": "waba-b-18",
            "text": "B-18. Write your company page description with four specific elements",
            "owner": "Founder B",
            "description": "Element 1 — who you serve (real estate developers and brokerage chains). Element 2 — the specific problem (lead response delay). Element 3 — what the product does (WhatsApp response within 30 seconds, inventory-aware). Element 4 — the outcome (more site visits from the same lead spend). Character limit: 2,000 characters. Write it, paste into a character counter, trim if needed."
          },
          {
            "id": "waba-b-19",
            "text": "B-19. Commit to posting from the company page at minimum twice per week from launch day",
            "owner": "Founder B",
            "description": "Personal profile posts are observations and insights. Company page posts are proof points, case study data, product updates, and customer results. Both types of content, posted consistently from both accounts, build the brand's presence in the LinkedIn feed of every developer connection."
          }
        ]
      },
      {
        "title": "Website & WhatsApp Business Profile",
        "tasks": [
          {
            "id": "waba-b-20",
            "text": "B-20. Audit your landing page against this 8-point checklist",
            "owner": "Founder B",
            "description": "(1) Does the headline describe your ICP and the outcome, not the technology? (2) Is there a demo booking button visible without scrolling? (3) Is the page free of technical jargon? (4) Is there at least one social proof element: testimonial, customer name, or usage number? (5) Do you say explicitly who this is NOT for? (6) Does the page load in under 3 seconds on mobile? (7) Is there a WhatsApp button so a developer can reach you immediately? (8) Does the footer contain GST number and links to Privacy Policy and Terms of Service? Mark each Pass or Fail. Fix every Fail before your next outreach campaign."
          },
          {
            "id": "waba-b-21",
            "text": "B-21. Add a WhatsApp contact button to your website — this is non-negotiable",
            "owner": "Founder B",
            "description": "A product whose entire value proposition is WhatsApp response speed must have a WhatsApp button on its website. In Carrd or Framer: add a button linked to wa.me/91XXXXXXXXXX (your company WhatsApp Business number). Label it: \"Chat with us on WhatsApp.\" Place it in the top navigation and as a floating button on mobile. Pre-filled message when tapped: \"Hi, I visited your website and want to know more about the lead response system.\""
          },
          {
            "id": "waba-b-22",
            "text": "B-22. Add a social proof section to the website as soon as you have one real data point",
            "owner": "Founder B",
            "description": "The moment any pilot customer gives you a result — even one sentence — add it to your website. If no data yet, use: \"Currently live with [X] real estate developers in Ahmedabad.\" Even a small number is more credible than nothing. Update this section every time a new pilot goes live."
          },
          {
            "id": "waba-b-23",
            "text": "B-23. Complete your WhatsApp Business profile for the company outreach number",
            "owner": "Founder B",
            "description": "In WhatsApp Business → Settings → Business Profile: Profile Photo — your logo (not a founder's photo). Business Name — company name exactly as on website and LinkedIn. Category — Professional Services or Technology. Business Description — your tagline followed by: \"We help real estate developers in Gujarat respond to buyer leads on WhatsApp within 30 seconds.\" Website URL. Business Hours: Monday to Saturday, 9am to 7pm. All of this takes 10 minutes. Without it, your outreach looks like it came from an individual, not a company."
          },
          {
            "id": "waba-b-24",
            "text": "B-24. Set up WhatsApp Business greeting message and away message",
            "owner": "Founder B",
            "description": "Greeting message (fires when someone messages you for the first time): \"Hi! Thanks for reaching out to [Company]. We help real estate developers in Gujarat respond to buyer leads on WhatsApp within 30 seconds. A team member will reply within a few hours during business hours. To see a quick demo: [Calendly link].\" Away message (outside business hours): \"Hi! We are currently outside business hours (Mon–Sat, 9am–7pm). We will reply first thing tomorrow. To book a demo: [Calendly link].\" Set both in WhatsApp Business → Settings."
          },
          {
            "id": "waba-b-25",
            "text": "B-25. Create a professional email signature for both founders",
            "owner": "Both",
            "description": "Must include: Full Name, Title (Co-Founder / CEO for Adii, Co-Founder / CTO for Hitesh), Company Name (bold), Tagline (smaller, italicized), Website URL (clickable), Phone number (company WhatsApp Business number), LinkedIn profile URL. Optional: one line linking to your demo video or Calendly. Must NOT include: inspirational quotes, lengthy legal disclaimers, multiple fonts or colors beyond your brand palette. Set up in Gmail → Settings → Signature. Both founders use the same format."
          }
        ]
      },
      {
        "title": "Founder Brand & Communities",
        "tasks": [
          {
            "id": "waba-b-26",
            "text": "B-26. Have 3 real estate developers review the automated WhatsApp message tone before going live",
            "owner": "Both",
            "description": "Show the full conversation flow (the sequence of WhatsApp messages a buyer receives) to 3 developers. Ask: \"If a buyer from your project received these messages, would you be comfortable? Does this sound like someone from your sales team or does it sound automated?\" If even 1 out of 3 says it sounds automated or uncomfortable: rewrite the messages before going live. A developer customer who is embarrassed by the messages your system sends will cancel. Their buyers' experience is their brand."
          },
          {
            "id": "waba-b-27",
            "text": "B-27. Define your personal positioning as a founder in one sentence",
            "owner": "Founder B",
            "description": "This is not your company's positioning. This is your personal positioning: what you are known for as an individual in the Gujarat real estate space. Example: \"I am the person who has studied how Gujarat real estate developers lose leads to slow response — and built a solution for it.\" This positioning goes into your LinkedIn headline, your About section, and is the implicit premise of every piece of content you publish."
          },
          {
            "id": "waba-b-28",
            "text": "B-28. Commit to 2 LinkedIn posts per week from your personal profile — non-negotiable",
            "owner": "Founder B",
            "description": "Every post must either teach something useful about real estate lead management or tell a story that makes a developer recognize their own experience. Topics: what happens to a lead after it is submitted at 11pm. The real cost of a 4-hour callback (the maths). What a buyer's first WhatsApp conversation should look like. The 3 questions every developer forgets to ask before running their next portal campaign. These posts attract developers because they describe a problem the developer recognizes."
          },
          {
            "id": "waba-b-29",
            "text": "B-29. Never post about your product directly on your personal profile in the first 60 days",
            "owner": "Founder B",
            "description": "Posts like \"Excited to announce our product launch!\" get engagement from friends and zero engagement from prospects. A developer does not follow you because you built something — they follow you because you understand their problem better than anyone else. Build that reputation first. After 60 days of consistent educational content, when you occasionally post about a customer result, it lands with an audience that already trusts your perspective."
          },
          {
            "id": "waba-b-30",
            "text": "B-30. Engage with real estate content on LinkedIn for 15 minutes every day",
            "owner": "Founder B",
            "description": "Before you post each day: spend 15 minutes in LinkedIn's feed engaging only with content from real estate developers, builders, marketing professionals, and property journalists in Gujarat. Leave thoughtful comments (not just \"Great post!\"). Add a specific observation or question. This puts your name in front of the developer community without you needing to post. LinkedIn's algorithm rewards profiles that engage actively with increased organic reach on your own posts."
          },
          {
            "id": "waba-b-31",
            "text": "B-31. Position yourself as the category authority on real estate lead response in India",
            "owner": "Founder B",
            "description": "Publish the LinkedIn posts consistently. Write a Medium or LinkedIn long-form article once a month on this topic. When you have 3–5 pilot customers with data, publish a \"State of Real Estate Lead Response in Gujarat\" data summary — even if it is 1 page with 3 data points. This kind of proprietary, data-backed content is impossible for any competitor without customers to replicate."
          },
          {
            "id": "waba-b-32",
            "text": "B-32. Identify 3 physical communities to attend in Ahmedabad this month",
            "owner": "Founder B",
            "description": "Communities where your ICP gathers: (1) CREDAI Gujarat events (credaigujarat.com — check events calendar). (2) GIHED (Gujarat Institute of Housing and Estate Developers) events and exhibitions. (3) Real estate expos — Ahmedabad Property Show or similar. (4) Brokerage association meetings. At every event: do not pitch. Have 5–8 conversations about the lead response problem. Ask questions. Listen. Leave a PDF with every person you speak to. Follow up within 24 hours by name on WhatsApp. One event per month, attended consistently for 6 months, will build more real estate relationships than any digital campaign."
          },
          {
            "id": "waba-b-33",
            "text": "B-33. Join 3–5 real estate WhatsApp groups and contribute before you promote",
            "owner": "Founder B",
            "description": "Find groups via existing contacts or by asking at events. Join via introduction, not by cold-adding yourself. Once in: spend 30 days contributing useful information (a market observation, a relevant data point, an answer to someone's question) before you ever mention your product. When you do mention it, frame it as a question: \"Has anyone here found a good solution for WhatsApp lead response? We have been working on something and would love feedback.\" This generates inbound curiosity rather than outbound rejection."
          }
        ]
      },
      {
        "title": "Brand Consistency System",
        "tasks": [
          {
            "id": "waba-b-34",
            "text": "B-34. Create your Brand Bible as a Google Doc with these sections",
            "owner": "Founder B",
            "description": "Section 1 — Name and Tagline (exact spelling and words). Section 2 — Brand Voice (4 voice parameters, 6 \"We are X not Y\" statements, 3-question content test). Section 3 — Colors (primary, secondary, neutral with HEX codes). Section 4 — Typography (heading font and body font with download links). Section 5 — Logo (links to Google Drive folder with all file formats). Section 6 — Key Messages (2-sentence pitch, 30-second verbal pitch, 3 message pillars, 5 objection responses). Section 7 — Approved Outreach Templates (cold WhatsApp message, cold LinkedIn message, post-demo follow-up, welcome message — marked \"Use as-is. Do not rewrite without both founders agreeing\"). Share with both founders. Both founders read before any external communication."
          },
          {
            "id": "waba-b-35",
            "text": "B-35. Store all brand assets in one organized Google Drive folder",
            "owner": "Founder B",
            "description": "Create folder: \"[Company Name] Brand Assets\". Inside: /Logo (all file formats), /Fonts (downloaded font files), /Collateral (leave-behind PDF, sales deck, case study template), /Templates (outreach message templates, email signature template). Every time a new brand asset is created, it goes here immediately. When any future team member needs brand assets, this is the only folder they are given."
          },
          {
            "id": "waba-b-36",
            "text": "B-36. Do a brand consistency audit every 4 weeks — set a calendar reminder now",
            "owner": "Both",
            "description": "Spend 30 minutes once every 4 weeks checking every brand touchpoint against your Brand Bible. Check: LinkedIn personal profile (photo, headline, About, Featured section). Company LinkedIn page (logo, banner, description). Website (colors, fonts, logo, tagline, copy tone). WhatsApp Business profile (logo, description, greeting message). Email signature. Leave-behind PDF. Sales deck. Mark anything that has drifted from the Brand Bible. Fix it before the next outreach campaign."
          }
        ]
      }
    ]
  },
  {
    "id": 12,
    "label": "Phase 12",
    "title": "Research & Risk Monitor Rhythms",
    "timeline": "Ongoing Monthly",
    "color": "#14B8A6",
    "description": "Feedback logs, churn warning alerts, Meta WABA pricing audit, pricing research, and monthly review.",
    "sections": [
      {
        "title": "Customer Feedback & Churn Warnings",
        "tasks": [
          {
            "id": "waba-r-01",
            "text": "R-01. Create a weekly feedback log in Google Sheets and fill it every Friday",
            "owner": "Founder B",
            "description": "Create a tab called \"Weekly Feedback Log\". Columns: Date, Customer Name, Source (Onboarding / Check-in / Renewal / Cancellation / Outreach call), What They Said (verbatim where possible), Category (Product / Pricing / Onboarding / Competitor mention / Feature request / Complaint / Compliment), Action Required (Yes/No), Action Taken. Fill this every Friday based on the week's customer conversations. 10 minutes. After 8 weeks, this log becomes your most accurate picture of what is working and what is not."
          },
          {
            "id": "waba-r-02",
            "text": "R-02. Record the exact words customers use — not your interpretation",
            "owner": "Founder B",
            "description": "When a customer says \"the buyers seem to be responding better\" — write that exact sentence. Do not write \"customer reports improved buyer engagement.\" Your interpretation adds a layer of inference that may be wrong. The customer's exact words are data. Your interpretation is a hypothesis. Keep them separate. When you eventually write your case study or your data report or your sales messaging, the customer's exact words are what you use."
          },
          {
            "id": "waba-r-03",
            "text": "R-03. Separate compliments from proof points — create a dedicated \"Proof Points\" tab",
            "owner": "Founder B",
            "description": "A customer saying \"this is great\" is a compliment. A customer saying \"we booked 6 site visits this month compared to 2 last month\" is a proof point. Every time a customer gives you a number — any number — record it separately in a tab called \"Proof Points\". These are the specific data points that go into your case studies, your data report, your PR pitches, and your sales conversations."
          },
          {
            "id": "waba-r-04",
            "text": "R-04. Tag every feedback entry with one of six categories — review distribution monthly",
            "owner": "Founder B",
            "description": "Category 1 — Product working as expected. Category 2 — Product not working as expected. Category 3 — Feature request. Category 4 — Pricing comment. Category 5 — Competitor mention. Category 6 — Onboarding friction. At the end of each month: what percentage of entries fall into each category? If Category 2 (not working) is above 20%: product stability is your priority. If Category 3 (feature requests) shows the same feature 3+ times: put it on the roadmap."
          },
          {
            "id": "waba-r-05",
            "text": "R-05. Review your customer health scorecard every Monday morning before anything else",
            "owner": "Founder B",
            "description": "In Google Sheets, your customer health scorecard has a row per customer and a column per week. Monday morning: update last week's row for every customer. Flag any customer who has triggered 2 or more warning signs in the past 2 weeks as At Risk. At Risk customers get a personal call from Founder B that day — not later in the week, not at the next scheduled check-in."
          },
          {
            "id": "waba-r-06",
            "text": "R-06. Know the four churn warning signs and respond within 24 hours each time",
            "owner": "Founder B",
            "description": "Warning Sign 1 — Customer misses 2 consecutive check-in calls without rescheduling: Call directly. \"I noticed we have missed our last two check-ins. I want to make sure everything is going well. Do you have 10 minutes today?\" Warning Sign 2 — Inventory sheet not updated in 3+ weeks: \"I noticed your inventory sheet has not been updated since [date]. Can you send me the current availability so the system is giving buyers accurate information?\" Warning Sign 3 — Customer asks about cancellation process: Call within the hour. \"Before we go there, can we talk about what is not working?\" Warning Sign 4 — Lead volume or response rate has dropped significantly: Check logs immediately. If system working: discuss lead volume issue with the developer. If system has a problem: fix it and call them."
          }
        ]
      },
      {
        "title": "Dependency Risk Monitor (BSP & Meta)",
        "tasks": [
          {
            "id": "waba-r-07",
            "text": "R-07. Audit your message template classifications quarterly with your BSP",
            "owner": "Founder A",
            "description": "Ask your BSP (WATI or Interakt) to run a report on how your messages are being classified: utility vs marketing vs authentication. Utility messages (direct responses to customer-initiated conversations) are significantly cheaper. Marketing messages (outbound messages not triggered by a user action) are significantly more expensive. If any of your messages are being classified as marketing when they should be utility, this is costing you money and needs to be corrected in your template structure."
          },
          {
            "id": "waba-r-08",
            "text": "R-08. Subscribe to Meta's WhatsApp Business blog and check it on the 1st of every month",
            "owner": "Founder B",
            "description": "Go to business.whatsapp.com and bookmark the blog/news section. On the 1st of every month: spend 10 minutes checking for any policy updates, pricing changes, or API changes. Also follow @WhatsAppBusiness on LinkedIn. When a change is announced: immediately assess the impact on your product and costs. Brief Hitesh within 24 hours of any technical change. Brief your customers if any change affects the messages they receive."
          },
          {
            "id": "waba-r-09",
            "text": "R-09. Set up a monthly email parser test for every portal your customers use",
            "owner": "Founder A",
            "description": "On the 1st of every month: Hitesh submits a test lead on 99acres, MagicBricks, and Housing.com using a personal email address. Confirms the parser detects the lead and triggers a WhatsApp response within 30 seconds. If any portal's test lead is not detected: Hitesh investigates the email format immediately. A monthly test takes 15 minutes and catches format changes before they affect real customers."
          },
          {
            "id": "waba-r-10",
            "text": "R-10. Add a monitoring alert if no leads are parsed from a specific portal in a 72-hour window",
            "owner": "Founder A",
            "description": "If a developer's project is generating leads on 99acres and the parser suddenly receives none for 3 days: something has changed. Either the developer's campaign has paused, or the portal has changed its email format, or there is a parser bug. Set up this alert per customer per portal. When it fires: test the portal lead manually that day."
          },
          {
            "id": "waba-r-11",
            "text": "R-11. Review your BSP contract and pricing on the 1st of every month",
            "owner": "Founder B",
            "description": "Log into your BSP dashboard on the 1st of every month. Check: (1) Has the pricing changed since last month? (2) Are there any announcements about feature changes or deprecations? (3) What is your current monthly spend? Compare month-over-month. A cost increase of more than 15% without a corresponding increase in customer volume should trigger a conversation with your BSP account manager about what changed and why."
          },
          {
            "id": "waba-r-12",
            "text": "R-12. Maintain awareness of alternative BSPs in case you need to migrate",
            "owner": "Both",
            "description": "The Indian WhatsApp BSP market has 5–8 credible options: WATI, Interakt, AiSensy, Gupshup, Kaleyra, Twilio. Know the pricing and key features of your top 2 alternatives. Switching BSPs is disruptive (requires new WABA application and template resubmission) but not impossible. If your current BSP raises prices significantly or drops a feature you depend on, you need to be able to migrate within 2–3 weeks. Not having a migration plan is a single-vendor dependency risk that can be catastrophic."
          }
        ]
      },
      {
        "title": "Pricing & Competitive Intelligence",
        "tasks": [
          {
            "id": "waba-r-13",
            "text": "R-13. Maintain a willingness-to-pay log in Google Sheets — start today",
            "owner": "Founder B",
            "description": "Columns: Date, Prospect Name, Company Type (Developer/Brokerage), Lead Volume (monthly), Price Presented (₹8,000 monthly / ₹80,000 annual), Outcome (Accepted without negotiation / Accepted after negotiation / Declined — price too high / Declined — other reason), If declined for price: what price did they say would be acceptable? If negotiated: what was the final agreed price? Notes. Fill this for every pricing conversation. After 20 conversations: calculate the acceptance rate at ₹8,000/month. If acceptance rate is above 70% without negotiation: you are underpriced."
          },
          {
            "id": "waba-r-14",
            "text": "R-14. Ask every prospect who declines on price one specific question",
            "owner": "Founder B",
            "description": "After they say the price is too high: \"Can I ask — at what monthly cost would this have been an automatic yes for you?\" Note their answer. This is not a negotiation — you are not offering that price. You are recording where willingness-to-pay sits in the market. After 10 developers answer this question, you have a price range with clear support. If 8 out of 10 say ₹6,000 would have been automatic yes but ₹8,000 is too high: you know your price ceiling."
          },
          {
            "id": "waba-r-15",
            "text": "R-15. Run a price test after your first 20 customers — raise standard price by 25% for 10 new prospects",
            "owner": "Founder B",
            "description": "After your founding cohort of 10 closes and you move to standard pricing: test raising the standard price from ₹12,000 to ₹15,000 for the next 10 prospects. Keep everything else identical. Track: how many of the 10 accept, negotiate, or decline? If acceptance rate is within 10–15 percentage points of your rate at ₹12,000: the higher price is sustainable. If it drops significantly: ₹12,000 is closer to the right price. A price test is the only way to know."
          },
          {
            "id": "waba-r-16",
            "text": "R-16. Set up Google Alerts for these 5 search terms today",
            "owner": "Founder B",
            "description": "Go to google.com/alerts. Create alerts for: (1) \"WhatsApp real estate lead India\" (2) \"property lead automation India\" (3) \"real estate chatbot India\" (4) your company name (to monitor mentions) (5) your product name (to monitor mentions). Set delivery to weekly digest — not immediate. Too many alerts creates noise. A weekly digest takes 10 minutes to scan and surfaces anything worth knowing."
          },
          {
            "id": "waba-r-17",
            "text": "R-17. Run a 30-minute competitive check on the first Monday of every month",
            "owner": "Both",
            "description": "Agenda: (1) Open each competitor's website or LinkedIn page. Has anything changed — pricing, positioning, new features, new case studies? (2) Scan the Google Alerts digest from the past month. Any new entrants? Any significant announcements? (3) Did any customer mention a competitor by name this month? What did they say? (4) Based on all of the above: does anything we are doing need to change? Usually the answer is no. The value is not in the frequency of change — it is in catching the one change that matters before it surprises you."
          },
          {
            "id": "waba-r-18",
            "text": "R-18. When a customer mentions a competitor, ask these two specific questions",
            "owner": "Founder B",
            "description": "(1) \"Have you used their product or just heard about it?\" (This tells you whether the competitor has real customers or is still pitching.) (2) \"What was the main thing that made you consider them?\" (This tells you what you are missing or what claim of theirs is resonating.) Log both answers in the feedback log under Category 5. After 5 mentions of the same competitor: that company deserves a deeper look."
          }
        ]
      },
      {
        "title": "Market Signals & Monthly Review",
        "tasks": [
          {
            "id": "waba-r-19",
            "text": "R-19. Spend 20 minutes on the first Monday of every month on market signal tracking",
            "owner": "Founder B",
            "description": "Read the property market summary for Gujarat from Knight Frank India, JLL India, or PropTiger. Scan for: any portal pricing announcements (99acres, MagicBricks, Housing.com), any RERA Gujarat news, any significant macro change in the Ahmedabad real estate market. Write 3 bullet points in the Monthly Learning Review document summarizing what you learned. The entire exercise should not exceed 20 minutes. You need to be informed enough to have a credible conversation with a developer about the market they are operating in."
          },
          {
            "id": "waba-r-20",
            "text": "R-20. Create the Monthly Learning Review Google Doc template now and use it every month",
            "owner": "Founder B",
            "description": "Create a Google Doc called \"Monthly Learning Review Template\". It contains 6 agenda items as section headers: (1) Customer feedback patterns — what is the single most important thing our customers are telling us? (2) Customer health — is any customer at risk of churning? What specific action are we taking this week? (3) Dependency risk — has anything changed in our dependencies? Any action required? (4) Pricing signals — should we change anything about our pricing next month? (5) Competitive and market signals — has anything in the competitive or market environment changed that requires us to respond? (6) Decisions and next actions — 3 decisions with owner and deadline. Each month: duplicate the template, rename it with the month and year, fill it during the session. Keep all monthly reviews in a Google Drive folder called \"Monthly Learning Reviews\"."
          },
          {
            "id": "waba-r-21",
            "text": "R-21. Never leave the Monthly Learning Review without 3 written decisions with owners and deadlines",
            "owner": "Both",
            "description": "A session that ends with \"we need to think about that\" has produced no value. Every topic discussed must end in one of three outcomes: (1) Decision made — who is responsible, what date it will be done. (2) Not enough information to decide — who will gather the information, by when. (3) Not relevant enough to decide — formally deprioritized. A 60-minute session with 3 concrete decisions is a successful session. A 90-minute session with vague observations is wasted time."
          }
        ]
      }
    ]
  }
];

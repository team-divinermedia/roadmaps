// 56-Task Roadmap to First 10 Paying Customers (Extracted from 10-Customer-Roadmap.docx)
// Structured across 7 Phases (Pre-Conditions + Phase 1 to Phase 6)

export const first10CustomersPhases = [
  {
    "id": 0,
    "label": "Pre-Conditions",
    "title": "Commercial & Tech Prerequisites",
    "timeline": "Day 1",
    "color": "#F59E0B",
    "description": "Prerequisites that unlock everything: WABA, message templates, legal agreements, Razorpay, and GST.",
    "sections": [
      {
        "title": "Day 1 Prerequisites",
        "tasks": [
          {
            "id": "f10-p-01",
            "text": "P-01. Submit WABA application — do this today before reading the rest of this document",
            "owner": "Founder A",
            "description": "Go to wati.io → Start Free Trial → connect your Facebook Business Manager account → submit application. Also bookmark interakt.shop as backup BSP. You need a fresh phone number never used on any WhatsApp. Meta will review in 1–3 weeks. Every day of delay here is a day you cannot go live with a customer."
          },
          {
            "id": "f10-p-02",
            "text": "P-02. Submit 3 WhatsApp message templates to Meta for pre-approval",
            "owner": "Founder A",
            "description": "Through your BSP dashboard: Template 1 (Initial Contact): buyer inquiry acknowledgement with configuration question. Template 2 (Qualification): inventory-aware response proposing site visit. Template 3 (Handoff): site visit confirmation message. All three needed before you can message a real buyer."
          },
          {
            "id": "f10-p-03",
            "text": "P-03. Draft pilot agreement template and have it reviewed by a CA or lawyer",
            "owner": "Founder B",
            "description": "One-page PDF: service name, duration (30 days, monthly renewal), monthly fee + GST, what is included, payment terms (due 1st of month), cancellation (7 days notice), data handling clause. Cost for legal review: ₹2,000–3,000. Must exist before any customer can sign. Use LegalDesk or a startup CA if you have no lawyer."
          },
          {
            "id": "f10-p-04",
            "text": "P-04. Set up Razorpay and confirm a real payment reaches your bank account",
            "owner": "Founder B",
            "description": "razorpay.com → Sign Up → Business. Add company PAN and bank account. Once verified: create a Payment Link for ₹8,000 labeled \"Pilot Month 1 — Test\". Pay ₹1 to yourself via UPI. Confirm money arrives within 2 days. Only after this test do you know the payment flow works before a real customer sends money."
          },
          {
            "id": "f10-p-05",
            "text": "P-05. Initiate GST registration",
            "owner": "Founder B",
            "description": "gst.gov.in → Register → New Registration. Takes approximately 7 working days. Your CA handles this for ₹1,500–2,500. Required because your customers are businesses who need a GST invoice to claim input credit. All invoices issued without a GST number are incomplete for a B2B customer. Product Stability"
          }
        ]
      }
    ]
  },
  {
    "id": 1,
    "label": "Phase 1",
    "title": "Product Stability",
    "timeline": "Week 1",
    "color": "#6366F1",
    "description": "End-to-end simulated lead testing, bug fixes, UptimeRobot, error alerts, and feature freeze.",
    "sections": [
      {
        "title": "Product Stability Tasks",
        "tasks": [
          {
            "id": "f10-1-01",
            "text": "1-01. Run a complete end-to-end test with a simulated lead — both founders present",
            "owner": "Founder A",
            "description": "Hitesh sets up the test environment. Adii sends a fake lead email through the parser. Both watch every step: email received → parser detects → WhatsApp message sent → buyer question answered with inventory data → site visit booked → handoff notification arrives at the developer&apos;s number. Time every step. Screenshot the full flow. If anything requires manual intervention: it is a bug."
          },
          {
            "id": "f10-1-02",
            "text": "1-02. Fix every identified break before any demo is shown to a prospect",
            "owner": "Founder A",
            "description": "From the end-to-end test: list every step that broke, was slow, or required manual action. Hitesh fixes in priority order: (1) anything that prevents the WhatsApp message from going out, (2) anything that prevents a buyer response from being received, (3) anything that prevents the handoff notification. No demo happens while any of these three are broken."
          },
          {
            "id": "f10-1-03",
            "text": "1-03. Set up UptimeRobot monitoring for the product&apos;s main endpoint",
            "owner": "Founder A",
            "description": "uptimerobot.com → free plan → add monitor for your product&apos;s main URL → configure alerts to both founders&apos; phones if the product goes down. A silent outage during a pilot means a developer&apos;s paid leads go cold. You must know about it within 5 minutes, not the next morning."
          },
          {
            "id": "f10-1-04",
            "text": "1-04. Set up an error alert if the email parser processes no emails for 6+ hours during business hours",
            "owner": "Founder A",
            "description": "If the parser is silent from 9am to 3pm on a working day: something is wrong. This alert must fire to Hitesh&apos;s phone that day, not be discovered in a weekly log review. Configure through your email parsing infrastructure."
          },
          {
            "id": "f10-1-05",
            "text": "1-05. Declare a feature freeze — no new features until all 10 founding cohort customers are live",
            "owner": "Founder B",
            "description": "Both founders agree in writing (in the Company Operating Doc): from today until the 10th paying customer is onboarded, Hitesh works only on bug fixes and stability. Zero new features. Feature requests from pilot customers go on a list and are reviewed at the 10-customer mark. Every hour spent building a new feature is an hour not spent making the current product reliable enough to charge for."
          },
          {
            "id": "f10-1-06",
            "text": "1-06. Have 3 developers review the automated WhatsApp message tone before any pilot goes live",
            "owner": "Founder B",
            "description": "Show the complete buyer-facing conversation flow to 3 developers who represent your ICP. Ask: \"If a buyer from your project received these messages, would you be comfortable? Does this sound like someone from your sales team or does it sound automated?\" If even 1 out of 3 says it sounds like a bot: rewrite before going live. A developer whose buyers receive robotic messages will cancel. Market Understanding + Positioning + Value Proposition"
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "label": "Phase 2",
    "title": "Market Understanding & Positioning",
    "timeline": "Week 1–2",
    "color": "#8B5CF6",
    "description": "10 discovery conversations, competitive landscape, formal positioning statement, category definition, and value prop.",
    "sections": [
      {
        "title": "Market & Positioning Tasks",
        "tasks": [
          {
            "id": "f10-2-01",
            "text": "2-01. Conduct 10 discovery conversations with real developers before finalising any messaging",
            "owner": "Founder B",
            "description": "These are listening calls, not pitches. 15–20 minutes each. Questions: How many leads do you get per month? How long does it take your team to call a new lead? Have you ever lost a buyer you know went to a competing project? What do you currently do with leads that come in after 6pm? Record their exact words. These conversations are the raw material for all messaging. Do not skip this step — positioning written without market input is guesswork."
          },
          {
            "id": "f10-2-02",
            "text": "2-02. Document the competitive landscape — every alternative a developer currently uses",
            "owner": "Founder B",
            "description": "Five alternatives exist: (1) Manual callback by sales team. (2) Outsourced telecalling centre. (3) IVR press-1-for-2BHK. (4) Generic WhatsApp chatbot. (5) Doing nothing. For each: note how long response takes, whether it uses live inventory, what it costs. This becomes your competitive matrix and your \"versus\" language in every sales conversation."
          },
          {
            "id": "f10-2-03",
            "text": "2-03. Write your formal positioning statement using the discovery conversation data",
            "owner": "Founder B",
            "description": "Format: \"For [ICP] who [have the problem], [Product] is [category] that [benefit] — unlike [alternative] which [limitation].\" Your version: \"For real estate developers in Gujarat who are losing paid leads to slow response, [Product] is the instant first-response layer that qualifies buyers on WhatsApp within 30 seconds using live inventory data — unlike manual callbacks and generic chatbots which are either too slow or too generic.\" Test with 3 developers before locking."
          },
          {
            "id": "f10-2-04",
            "text": "2-04. Define the category you own — use these exact words in every conversation",
            "owner": "Founder B",
            "description": "\"WhatsApp lead response engine\" or \"instant first-response layer for paid leads.\" Never \"chatbot.\" Never \"AI.\" Never \"automation.\" Developers have already rejected generic chatbots — you are something different. Every time you use the wrong word, you trigger the wrong comparison. Lock this term in the Company Operating Doc and use it identically in every conversation, every message, every piece of content."
          },
          {
            "id": "f10-2-05",
            "text": "2-05. Write your headline value proposition in 10 words or fewer",
            "owner": "Founder B",
            "description": "Write 5 versions. Test each on 3 people who match your ICP: show them the line with no other context. If they immediately understand what you do and who it is for: it works. Examples: \"Your leads answered in 30 seconds. Every time. Automatically.\" or \"Stop losing leads you have already paid for.\" Use the one that needs the least explanation."
          },
          {
            "id": "f10-2-06",
            "text": "2-06. Write your 30-second verbal pitch for in-person meetings and calls",
            "owner": "Founder B",
            "description": "\"When a buyer fills a form on 99acres at 7pm, your sales team calls them the next morning. By then they have called three competing projects. We close that gap. Our system responds on WhatsApp within 30 seconds of the form being submitted — it knows your actual inventory, answers their real questions, and books a site visit. Your team only gets involved once the buyer is ready.\" Practice saying this until it sounds natural, not recited."
          },
          {
            "id": "f10-2-07",
            "text": "2-07. Write competitive \"versus\" language for each of the top 3 alternatives",
            "owner": "Founder B",
            "description": "When a developer says \"we already use [X]\": For telecalling: \"How long does it take your telecalling team to reach a lead after it comes in?\" (let them say the number) \"Ours responds in 30 seconds. The buyer is still at their computer.\" For IVR: \"Does your IVR know which specific units are available at what price today?\" For nothing: open the ROI calculator and show them their own numbers. Write these responses down and practice them."
          },
          {
            "id": "f10-2-08",
            "text": "2-08. Compile all messaging into a 2-page reference document — both founders read before every call",
            "owner": "Founder B",
            "description": "Page 1: positioning statement, headline value proposition, 30-second verbal pitch, 3 message pillars (Speed, Accuracy, Complete flow), proof point templates (to fill with real data after Week 4). Page 2: developer vs brokerage chain messaging variants, competitive comparisons, top 5 objection responses. Both founders read this document before every sales call until they know it without looking. Target List + Assets + Commercial Readiness Target List"
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "label": "Phase 3",
    "title": "Target List, Assets & Commercial Readiness",
    "timeline": "Week 2",
    "color": "#EC4899",
    "description": "Scored list of 30 developers, HubSpot CRM setup, ROI calculator, 1-page PDF, Loom demo video, Carrd landing page, and Calendly.",
    "sections": [
      {
        "title": "Target List & CRM",
        "tasks": [
          {
            "id": "f10-3-01",
            "text": "3-01. Build a scored target list of 30 developers — source from 99acres, MagicBricks, Housing.com",
            "owner": "Founder B",
            "description": "For each developer: note company name, project name, marketing/sales head LinkedIn, phone number, how many portals they are listed on. Developers appearing on 2 or more platforms are spending real money on lead generation — they are your highest-priority targets. Score each using the ICP scorecard (0–12). Developers scoring 9+ are your first-week outreach. Store in HubSpot as contacts and companies."
          },
          {
            "id": "f10-3-02",
            "text": "3-02. Confirm the decision-maker for every account in your top 30",
            "owner": "Founder B",
            "description": "Before outreach: find the most senior person with \"Director\", \"CEO\", \"Sales Head\", or \"Marketing Head\" in their title. A positive conversation with a junior team member leads nowhere. When in doubt: \"Are you the right person to speak about your lead management process, or should I reach someone else?\" Do not spend demo time on someone who cannot approve a purchase."
          },
          {
            "id": "f10-3-03",
            "text": "3-03. Set up HubSpot CRM with your pipeline stages and all custom fields",
            "owner": "Founder B",
            "description": "hubspot.com → free tier. Pipeline stages: Contacted → Demo Scheduled → Pilot Proposed → Pilot Active → Paid Customer. Custom fields: Monthly Lead Volume (number), Company Type (Developer/Brokerage), ICP Score (0–12), Decision Maker Confirmed (checkbox), Lead Portals Used (text), Referral Source (text). Every prospect from your list goes into HubSpot before outreach begins. Track all conversations here — not in WhatsApp alone. Sales Assets"
          }
        ]
      },
      {
        "title": "Sales Assets & Web",
        "tasks": [
          {
            "id": "f10-3-04",
            "text": "3-04. Build the ROI calculator in Google Sheets",
            "owner": "Founder B",
            "description": "A1: Monthly leads (B1: 200). A2: Cost per lead ₹ (B2: 300). A3: Total lead spend (B3: =B1*B2). A4: Leads lost to slow response 40% (B4: =B1*0.4). A5: Value of lost leads ₹ (B5: =B4*B2). A6: Monthly product cost ₹ (B6: 8000). A7: Net saving ₹ (B7: =B5-B6). In every meeting: share your screen, put their real numbers into B1 and B2, say nothing while they read B7. The calculator does more selling than any pitch."
          },
          {
            "id": "f10-3-05",
            "text": "3-05. Design the 1-page leave-behind PDF in Canva — print 30 copies",
            "owner": "Founder B",
            "description": "A4 document. Top: logo + tagline. Section 1 (3 lines): the problem — \"You spent ₹X on leads last month. Up to 40% went cold before your team called.\" Section 2 (3 lines): your solution — \"[Product] responds in 30 seconds with accurate inventory data.\" Section 3: 3 proof points (placeholders until you have real data — update after first pilot). Section 4: founding cohort offer and price. Bottom: your name, phone, website, Calendly link. Print on 100gsm paper minimum — a flimsy leave-behind signals a flimsy product."
          },
          {
            "id": "f10-3-06",
            "text": "3-06. Record your demo video on Loom — under 4 minutes",
            "owner": "Founder B",
            "description": "Structure: Opening (20s): \"I will show you what a buyer experiences when they inquire about your project.\" Step 1 (30s): send test inquiry email, show timestamp. Step 2 (45s): WhatsApp response in 28 seconds, read it aloud. Step 3 (60s): buyer asks about a 2BHK, system pulls from inventory and answers. Step 4 (45s): site visit booked, handoff notification arrives. Close (20s): \"This runs 24 hours a day without your team.\" Record twice. Use the better one. This link goes in every follow-up message."
          },
          {
            "id": "f10-3-07",
            "text": "3-07. Build a minimal landing page on Carrd or Framer — 5 sections only",
            "owner": "Founder B",
            "description": "Section 1: headline value proposition. Section 2: how it works (3 steps). Section 3: who it is for — explicitly state \"residential developers and large brokerage chains — not individual agents.\" Section 4: founding cohort offer. Section 5: demo booking form linked to Calendly. Add a WhatsApp contact button. Link every outreach message to this page. Nothing else — no blog, no pricing page, no case studies section yet."
          },
          {
            "id": "f10-3-08",
            "text": "3-08. Set up Calendly for demo bookings and configure confirmation automation",
            "owner": "Founder B",
            "description": "calendly.com → free plan → \"30-Minute WhatsApp Lead Demo\" → connect to your Google Calendar → available hours Monday–Friday 10am–6pm. Confirmation email must include: the Loom demo video link, a brief agenda, your WhatsApp number for questions. Adii manually sends a WhatsApp reminder 2 hours before every booked demo. A prospect who books and forgets is a wasted slot."
          },
          {
            "id": "f10-3-09",
            "text": "3-09. Optimize both LinkedIn profiles and create the company LinkedIn page",
            "owner": "Founder B",
            "description": "Adii&apos;s headline: \"Co-Founder at [Company] — Helping Real Estate Developers in Gujarat Book More Site Visits from Paid Leads.\" About section: outcome-focused, first person, no feature list. Featured section: Loom video + leave-behind PDF. Company page: logo, tagline, 2-paragraph description, both founders listed. Both profiles must look credible before outreach begins — developers check LinkedIn before replying to a cold message. Sales Process Preparation + Customer Success Setup Sales Preparation"
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "label": "Phase 4",
    "title": "Sales Process Prep & Customer Success Setup",
    "timeline": "Week 2–3",
    "color": "#3B82F6",
    "description": "Founding cohort pricing, call script practice, objection handling, follow-up templates, onboarding checklist, and health scorecard.",
    "sections": [
      {
        "title": "Sales Preparation",
        "tasks": [
          {
            "id": "f10-4-01",
            "text": "4-01. Confirm founding cohort pricing and lock it in the Company Operating Doc",
            "owner": "Founder B",
            "description": "Tier 1: ₹8,000/month + 18% GST — up to 300 leads/month, 1 active project. Tier 2: ₹14,000/month + 18% GST — up to 700 leads/month, up to 3 projects. Annual option: ₹80,000/year (Tier 1) — effectively 2 months free. Both founders agree: no discount below ₹6,000/month. Adii can offer up to 10% discount unilaterally. Above 10% requires a 5-minute conversation between both founders first."
          },
          {
            "id": "f10-4-02",
            "text": "4-02. Practice the discovery call script 5 times out loud — with Hitesh playing a developer",
            "owner": "Founder B",
            "description": "The discovery call is not a pitch. It is listening. Questions: How many leads per month? How long does your team take to respond? What happens to leads that come in after 7pm? Have you ever lost a buyer to a competing project because of response time? Practice until you ask these questions naturally and actually listen to the answers rather than waiting to pitch."
          },
          {
            "id": "f10-4-03",
            "text": "4-03. Practice the demo 5 times with Hitesh timing every section and asking hard questions",
            "owner": "Founder B",
            "description": "Demo structure matches the Loom video but live. Hitesh asks the 3 hardest questions during practice: \"What if a buyer asks about a unit not in inventory?\" \"What if the buyer does not want to book a site visit?\" \"Can I see all conversations my leads have had?\" Practice until you answer all three without pausing. No demo is shown to a real prospect until both founders are satisfied with the live version."
          },
          {
            "id": "f10-4-04",
            "text": "4-04. Practice saying the price out loud — then say nothing for 10 seconds",
            "owner": "Founder B",
            "description": "After the ROI calculator: \"₹8,000 per month.\" Stop. Wait. Say nothing. Practice this specifically with Hitesh. The pause after the price is supposed to feel uncomfortable — the developer is thinking. Filling the silence with discounts or justifications before they object is the most common mistake first-time founders make in pricing conversations."
          },
          {
            "id": "f10-4-05",
            "text": "4-05. Memorize responses to the top 5 objections — practice in role-play with Hitesh",
            "owner": "Founder B",
            "description": "Objection 1 — \"Price is too high\": open ROI calculator, show their numbers, ask \"too high compared to what?\" Objection 2 — \"We already use telecalling\": \"How long does it take them to reach a lead after it comes in?\" Objection 3 — \"We need to think about it\": \"What specifically would you like to think through — is it the price, the setup, or something else?\" Objection 4 — \"We are too small / lead volume is low\": \"What is your monthly lead volume?\" (if under 100, they are not your ICP — say so clearly). Objection 5 — \"I need to show this to my partner/boss\": get that person into the conversation before the call ends."
          },
          {
            "id": "f10-4-06",
            "text": "4-06. Write the post-demo follow-up template — use it within 2 hours of every demo",
            "owner": "Founder B",
            "description": "WhatsApp message. Structure: 1-line summary of what they saw (\"Today you saw a buyer inquiry get answered in 28 seconds with accurate inventory data from your project\"). Loom link. ROI calculator link pre-filled with their numbers. Founding cohort offer and slots remaining. Specific date and time proposed for the next call. This template must be ready before your first demo. A demo without a same-day follow-up loses most of its impact. Customer Success Setup — Build These Before the First Customer Signs"
          }
        ]
      },
      {
        "title": "Customer Success Infrastructure",
        "tasks": [
          {
            "id": "f10-4-07",
            "text": "4-07. Build the onboarding checklist — sent to every new customer on the day they pay",
            "owner": "Founder B",
            "description": "6-item checklist as a PDF: (1) Confirm the email address that receives lead notifications from 99acres/MagicBricks/Housing.com. (2) Set up email forwarding from that address. (3) Share the inventory sheet in the agreed format. (4) Confirm the WhatsApp number for handoff notifications. (5) Book the onboarding call (both founders). (6) Review the Notion help center link. Every pilot customer must complete all 6 items before the system goes live with their real leads."
          },
          {
            "id": "f10-4-08",
            "text": "4-08. Build the customer health scorecard template in Google Sheets",
            "owner": "Founder B",
            "description": "One sheet per customer. Columns: Week number, Leads received, Leads responded to by system (%), Handoffs triggered, Site visits booked, Customer satisfaction (1–5, asked verbally at check-in). Green: all metrics up, satisfaction 4–5. Amber: one metric flat or satisfaction 3. Red: any metric declining or satisfaction below 3. A red week triggers a problem-solving call that week — not at the next scheduled check-in."
          },
          {
            "id": "f10-4-09",
            "text": "4-09. Write the weekly check-in agenda — use for every Friday call with every customer",
            "owner": "Founder B",
            "description": "Three questions, in this order: (1) \"How many leads came in this week, and how many did the system respond to?\" (2) \"Were there any questions the system did not handle well?\" (3) \"Is the handoff to your sales team working as expected?\" After the call: send a 3-line WhatsApp summary of what was said and any action taken. This takes 15 minutes. A customer who gets a consistent check-in every Friday stays."
          },
          {
            "id": "f10-4-10",
            "text": "4-10. Set up a dedicated support WhatsApp Business number — separate from your sales number",
            "owner": "Founder B",
            "description": "Customers use this for support issues. Adii monitors 9am–8pm Monday–Saturday. Set an auto-reply: \"Thank you for reaching out. We respond within 4 hours during business hours. For urgent issues (system down), call [Adii&apos;s personal number].\" Set this up before the first customer is onboarded — a customer who messages with a problem and gets silence will not renew. Outreach + Sales Execution Outreach — In This Exact Priority Order"
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "label": "Phase 5",
    "title": "Outreach & Sales Execution",
    "timeline": "Week 2 Onwards",
    "color": "#10B981",
    "description": "Personal WhatsApp outreach, cold outreach to top 30 prospects, LinkedIn messages, CREDAI events, and 5 demos/week targets.",
    "sections": [
      {
        "title": "Outreach Channels (Priority Order)",
        "tasks": [
          {
            "id": "f10-5-01",
            "text": "5-01. Priority 1: Personal WhatsApp outreach — your contacts and Hitesh&apos;s contacts",
            "owner": "Founder B",
            "description": "Both founders go through their personal WhatsApp contacts today. Anyone in real estate, or who knows a developer. Personal message — not a pitch: \"I have started something specifically for real estate developers in Gujarat — it automatically responds to buyer leads on WhatsApp within 30 seconds. Do you know anyone in that space I could speak to? Even a quick introduction would help.\" Warm referrals convert at 50%+ versus 10–15% for cold. Always start here."
          },
          {
            "id": "f10-5-02",
            "text": "5-02. Priority 2: Direct cold WhatsApp outreach to top 30 scored prospects",
            "owner": "Founder B",
            "description": "Send individual messages — not broadcast. Personalise each one with their project name and a specific observation. Template from Document 2: \"Hi [Name], I noticed [Project] is listed on both 99acres and MagicBricks. I have been working with developers in Ahmedabad on something that responds to buyer inquiries on WhatsApp within 30 seconds of the form being submitted — using your actual inventory data. Would 15 minutes this week make sense?\" Never send 10 identical messages in the same hour."
          },
          {
            "id": "f10-5-03",
            "text": "5-03. Priority 3: LinkedIn outreach to decision-makers in your target accounts",
            "owner": "Founder B",
            "description": "For each target: connect with a brief personal note (mention a specific project or observation, not a product pitch). After connection acceptance: message within 48 hours with the value proposition. Do not pitch in the connection request — it gets ignored. LinkedIn converts more slowly than WhatsApp for this audience. Treat it as a supplementary channel, not the primary one."
          },
          {
            "id": "f10-5-04",
            "text": "5-04. Priority 4: CREDAI Gujarat events and GIHED events — attend 1 per month",
            "owner": "Founder B",
            "description": "credaigujarat.com → events calendar. At every event: do not pitch. Have 5–8 conversations about the lead response problem by asking questions. \"What do you do with leads that come in after 6pm?\" Leave a PDF with every person you speak to. Follow up within 24 hours by name on WhatsApp. One event attended consistently every month for 6 months builds more real estate relationships than any digital campaign. Sales Execution — Every Conversation"
          }
        ]
      },
      {
        "title": "Sales Execution & Pipeline Discipline",
        "tasks": [
          {
            "id": "f10-5-05",
            "text": "5-05. Discovery call → Demo → ROI calculator → Pilot proposal — in one meeting where possible",
            "owner": "Founder B",
            "description": "Do not split these across multiple calls if you can avoid it. A developer who leaves the first call without seeing the ROI calculator has had a product conversation, not a value conversation. Aim to complete the full sequence in 45–60 minutes. If they need a second call, book it before ending the first. A second call without a confirmed time is a deal that will go cold."
          },
          {
            "id": "f10-5-06",
            "text": "5-06. Log every conversation in HubSpot — immediately after each call, not at the end of the day",
            "owner": "Founder B",
            "description": "After every outreach message, call, demo, or follow-up: update the HubSpot deal stage, add a note with what was said and what the next step is, and schedule the follow-up task. A deal without a next step in HubSpot is a deal that will be forgotten. This discipline takes 3 minutes per conversation and prevents every dropped deal."
          },
          {
            "id": "f10-5-07",
            "text": "5-07. Post-demo WhatsApp follow-up within 2 hours — no exceptions",
            "owner": "Founder B",
            "description": "Use the template from Task 4-06. Send within 2 hours of the call ending. If you wait until the next day, the demo&apos;s impact has faded. If you wait until next week, they have forgotten. The 2-hour rule is not a suggestion — it is a process requirement."
          },
          {
            "id": "f10-5-08",
            "text": "5-08. Three follow-up attempts for prospects who go silent — then stop",
            "owner": "Founder B",
            "description": "Day 5 after silence: \"Hi [Name], just following up on the demo. Any questions I can answer?\" Day 10: \"Hi [Name], I wanted to share one thing relevant to [Project]: [specific data point or insight].\" Day 20 (final): \"Hi [Name], I will leave it here for now — if anything changes, I am reachable at this number.\" Three attempts. Then stop. Chasing beyond this damages your positioning. WEEKLY TARGETS (non-negotiable)  50 outreach messages sent   |   5 demo calls held   |   2 pilot proposals sent   |   2 new paying customers signed. Review every Friday. If below target on any metric, change one thing — not everything at once. Customer Onboarding + Success + Referral Engine Onboarding — Every New Customer"
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "label": "Phase 6",
    "title": "Onboarding, Success & Referral Engine",
    "timeline": "Week 3–6",
    "color": "#14B8A6",
    "description": "Instant signing response, 60-min onboarding call, 5-day activation milestone, Friday check-ins, bug SLAs, and Week 4 referral engine.",
    "sections": [
      {
        "title": "Customer Onboarding",
        "tasks": [
          {
            "id": "f10-6-01",
            "text": "6-01. What to do within 1 hour of a customer signing and paying",
            "owner": "Founder B",
            "description": "Send the welcome WhatsApp message. Send the onboarding checklist PDF. Book the onboarding call within 2 business days (both founders attend). Confirm receipt of checklist within 24 hours. The first 24 hours of a customer&apos;s experience determine whether they feel they made a good decision. Move fast."
          },
          {
            "id": "f10-6-02",
            "text": "6-02. Run the onboarding call with both founders present — 60 minutes",
            "owner": "Founder B",
            "description": "On the call: walk through inventory sync, confirm email forwarding is active, confirm WhatsApp handoff number, run one real test lead through the full flow while the customer watches. The customer must leave the onboarding call having seen their own data go through the product and produce a WhatsApp response. If any step fails during the call: Hitesh fixes it on the spot or commits to a fix within 24 hours."
          },
          {
            "id": "f10-6-03",
            "text": "6-03. Define activation for each customer — and confirm it within 5 business days",
            "owner": "Founder B",
            "description": "Activation: the first real buyer inquiry (not a test) is responded to automatically within 30 seconds with accurate inventory data, and the developer&apos;s sales team receives a handoff notification. This is the aha moment. Until a customer reaches activation: onboarding is not complete. Track in the health scorecard. Ongoing Customer Success"
          }
        ]
      },
      {
        "title": "Ongoing Customer Success",
        "tasks": [
          {
            "id": "f10-6-04",
            "text": "6-04. Hold a weekly 15-minute check-in call with every pilot customer — every Friday",
            "owner": "Founder B",
            "description": "Three questions (from Task 4-09). After the call: 3-line WhatsApp summary. Update the health scorecard. If any customer is amber: schedule an extra call next week. If red: call today, not next Friday. Consistency in check-ins is the single biggest predictor of renewal."
          },
          {
            "id": "f10-6-05",
            "text": "6-05. Track every lead metric from Day 1 for every customer",
            "owner": "Founder B",
            "description": "In the customer tracking sheet: for each lead — date arrived, time responded by system, buyer&apos;s reply (yes/no), site visit booked (yes/no). At the end of each week: calculate response rate (leads responded ÷ total leads). This data is your renewal argument and your case study. Collect it from the first day — retroactively asking a customer for their data at Month 3 never works."
          },
          {
            "id": "f10-6-06",
            "text": "6-06. Fix bugs from real customer usage within 48 hours — with no exceptions",
            "owner": "Founder A",
            "description": "Every bug reported by a pilot customer during onboarding goes to Hitesh that day with a priority label: Critical (system not sending messages) = fix within 4 hours. High (wrong inventory data shown) = fix within 24 hours. Medium (formatting or timing issues) = fix within 48 hours. Hitesh commits to these SLAs. Adii communicates status to the customer immediately when a bug is reported."
          },
          {
            "id": "f10-6-07",
            "text": "6-07. Collect verbatim data from every customer — record exact words, not summaries",
            "owner": "Founder B",
            "description": "When a customer says \"we booked 6 site visits this month compared to 2 last month\" — write that sentence word for word in the feedback log (Research Loop task R-01). When they say \"the buyers seem more engaged\" — that is a compliment, not a proof point. Proof points are numbers. Collect numbers deliberately at every check-in call: \"How many site visits did you book this week compared to the same period last month?\" Referral Engine — From 3 to 10"
          }
        ]
      },
      {
        "title": "Referral Engine (3 to 10)",
        "tasks": [
          {
            "id": "f10-6-08",
            "text": "6-08. At the Week 4 check-in: ask every active customer for 1–2 introductions",
            "owner": "Founder B",
            "description": "Script: \"I am really glad this is working for your project. Do you know one or two developers personally who might have the same challenge with lead response? Even a quick WhatsApp introduction would mean a lot — it is the fastest way for us to grow right now.\" Ask every customer. Not the ones you think might say yes. Every one. If 3 customers each give you 2 introductions: you have 6 warm referrals. At 50%+ conversion that is 3 more customers without a single cold outreach message."
          },
          {
            "id": "f10-6-09",
            "text": "6-09. Collect a testimonial or case study quote from each customer at Week 3",
            "owner": "Founder B",
            "description": "At the Week 3 check-in: \"I would love to share what you have experienced with other developers I am speaking to. Would you be comfortable giving me a short quote?\" If yes: send 2 WhatsApp questions. Write the quote based on their voice note. Send back for approval before using anywhere. Real numbers from a real customer sell better than any amount of positioning language."
          },
          {
            "id": "f10-6-10",
            "text": "6-10. Update all sales assets with real proof points after the first pilot produces data",
            "owner": "Founder B",
            "description": "Once a pilot customer gives you a number (site visits booked, response time achieved, leads recovered) — update immediately: (1) Leave-behind PDF: replace placeholder language with the real number. (2) Landing page: add social proof section. (3) Loom demo video description: add the result. (4) Sales deck results slide: real numbers. Generic language in your assets after Week 4 signals you have no proof. Real numbers signal you do. Every task in this document has a named owner. This table shows the split at a glance. Hitesh (Founder A) Adii (Founder B) Both Together WABA application + templates End-to-end product test All bug fixes Monitoring + error alerts Feature freeze (enforces) Bug fixes from real customers Discovery conversations (10) All positioning + messaging Target list (30 developers) All sales assets + CRM All outreach + demos CS tools + check-ins Referral asks + testimonials Feature freeze decision Pricing locked Demo practice (role-play) Message tone review Every onboarding call Company Operating Doc THE ONE METRIC THAT MATTERS MOST Demo calls held per week. Target: 5. Everything else in this document creates the conditions for that number. If demos per week is below 5: increase outreach. If demos convert below 30%: improve the demo or the messaging. If converted pilots do not activate: there is a product or onboarding issue. These three levers — outreach volume, demo conversion, activation rate — are all you need to track to get to 10 customers."
          }
        ]
      }
    ]
  }
];

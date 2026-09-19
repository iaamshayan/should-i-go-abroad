/* Country pack: Saudi Arabia
 * Scored sections adapted from the owner's own scorecard (Ksa Score table.xlsx).
 * Knockouts and Section H added from research. See AUTHORING.md.
 */
PACKS["saudi-arabia"] = {
  id: "saudi-arabia",
  name: "Saudi Arabia",
  flag: "\u{1F1F8}\u{1F1E6}",
  origin: "Pakistan",
  authored: "owner",
  updated: "2026-09-08",

  tagline: "The largest market for Pakistani workers. Strict on visa type, licensing and Saudization.",
  intro: "For a Pakistan-based worker weighing a move to the Kingdom. Answer honestly. A flattering score helps nobody.",

  /* ---- Stage 0: unscored knockouts. A "stop" answer overrides the band. ---- */
  knockouts: [
    {
      id: "k-visa",
      text: "What visa will you actually travel on?",
      help: "This is the single most common way Pakistani workers lose everything.",
      options: [
        { label: "A work visa (block/employment visa) naming me and my employer", severity: "ok" },
        { label: "A visit or Umrah visa that I've been told converts to work there", severity: "stop" },
        { label: "A visit visa, and I'll job-hunt after I arrive", severity: "stop" },
        { label: "I don't know yet. The agent hasn't told me", severity: "stop" }
      ],
      stopTitle: "You are being set up to become undocumented",
      stopBody: "A visit or Umrah visa does not convert into a work visa. Workers sent this way become illegal the day the visa expires. They cannot work legally or leave without penalty, and they risk detention and deportation. Pakistani missions have repeatedly warned about agents selling visit visas as jobs. Do not travel until you hold a work visa with your name and your employer on it."
    },
    {
      id: "k-contract",
      text: "Do you have a written employment contract that you have read, before departure?",
      options: [
        { label: "Yes, a signed one with salary, hours, benefits and end-of-service in writing", severity: "ok" },
        { label: "An offer letter, but not a full contract", severity: "warn" },
        { label: "Only a verbal or WhatsApp promise", severity: "stop" },
        { label: "No", severity: "stop" }
      ],
      stopTitle: "You have nothing to enforce",
      stopBody: "A promise you cannot show a court, a ministry or an embassy is not a job. Salary, hours, benefits, end-of-service and who pays for the ticket must be written down and signed before you get on a plane. Ask for the contract, take it away, and read it without the agent in the room.",
      warnTitle: "An offer letter is not a contract",
      warnBody: "Offer letters routinely differ from the contract handed over on arrival. Get the full contract in writing and compare it line by line before you travel."
    },
    {
      id: "k-beoe",
      text: "Is your recruiter a BEOE-licensed Overseas Employment Promoter, and will your contract be stamped by the Protectorate of Emigrants?",
      help: "Protection is legally required under the Emigration Ordinance 1979.",
      options: [
        { label: "Yes, I verified the licence myself and protection is arranged", severity: "ok" },
        { label: "The agent says yes, but I haven't verified it", severity: "warn" },
        { label: "No, I'm going through a personal contact without protection", severity: "stop" },
        { label: "I don't know what this is", severity: "stop" }
      ],
      stopTitle: "You would be travelling outside Pakistan's legal protection",
      stopBody: "Every Pakistani going abroad on a work visa is legally required to have their Foreign Service Agreement protected by the Protectorate of Emigrants. Protection is what entitles you to help from the Pakistani mission in Saudi Arabia if the employer breaks the contract. Without it you are on your own. Verify your agent's licence on beoe.gov.pk before paying anyone anything.",
      warnTitle: "Verify the licence yourself",
      warnBody: "An agent's word about their own licence is worth nothing. The BEOE publishes the list of active OEP licences, so check it yourself on beoe.gov.pk, and confirm the specific office you are dealing with."
    },
    {
      id: "k-money",
      text: "Has anyone asked you for money beyond documented, receipted government fees?",
      options: [
        { label: "No, only official fees with receipts", severity: "ok" },
        { label: "A modest amount, and I got a receipt", severity: "warn" },
        { label: "A large amount in cash, with no receipt", severity: "stop" }
      ],
      stopTitle: "This is the standard shape of a recruitment scam",
      stopBody: "Large unreceipted cash demands are the defining feature of overseas job fraud in Pakistan. People lose their savings and their land to it every year. A legitimate employer does not charge you to be hired. Stop paying, keep every message and receipt you already have, and verify the employer independently using contact details you found yourself, not ones the agent gave you.",
      warnTitle: "Keep every receipt",
      warnBody: "Even documented fees are worth checking against the official schedule. Keep the paperwork. It is your evidence if the placement goes wrong."
    },
    {
      id: "k-licence",
      text: "Does your profession require Saudi licensing or credential verification, and have you started it?",
      help: "Dataflow primary-source verification, Mumaris+/SCFHS for health workers, Saudi Council of Engineers for engineers.",
      options: [
        { label: "Not required for my profession (I checked)", severity: "ok" },
        { label: "Required, and my verification/licence is complete", severity: "ok" },
        { label: "Required, started but not finished", severity: "warn" },
        { label: "Required, and I haven't started", severity: "stop" },
        { label: "I don't know whether it's required", severity: "stop" }
      ],
      stopTitle: "You may not be allowed to practise your profession",
      stopBody: "Regulated professions cannot legally work in the Kingdom without verification and a licence. Health workers need Dataflow primary-source verification, then eligibility and registration through Mumaris+/SCFHS; engineers need Saudi Council of Engineers registration. Dataflow contacts your universities and past employers directly, so it takes weeks to months, and any gap or exaggeration in your documents surfaces there. Find out what your profession requires and start before you commit to anything.",
      warnTitle: "Finish the licensing before you travel",
      warnBody: "An incomplete verification can leave you in the country unable to work legally while your savings drain. Get the positive Dataflow report and the eligibility decision in hand first."
    },
    {
      id: "k-saudization",
      text: "Is your target job in a category being localised under Saudization (Nitaqat)?",
      help: "The 2026–2028 phase reserves a large and growing set of roles for Saudi nationals.",
      options: [
        { label: "No, I checked and my field still hires expatriates", severity: "ok" },
        { label: "Partly. My field has quotas but still hires expats", severity: "warn" },
        { label: "Yes: admin support, HR, accounting clerical, customer service or reception", severity: "stop" },
        { label: "I don't know", severity: "warn" }
      ],
      stopTitle: "You are targeting roles that are closing to foreigners",
      stopBody: "Saudi Arabia is running a three-year plan to localise hundreds of thousands of private-sector jobs. Sixty-nine administrative-support professions now require 100% Saudi staffing in any firm employing even one person in those roles, and sales and marketing roles carry a 60% localisation requirement. Chasing these jobs from Pakistan is chasing a shrinking door. Healthcare specialisms and technical/IT roles still carry lower localisation targets, so aim there instead.",
      warnTitle: "Check the localisation rules for your specific role",
      warnBody: "Quotas differ sharply by sector and job title. Knowing exactly where your role sits changes which employers can realistically hire you."
    }
  ],

  /* ---- Stage 1: scored sections, 100 points ---- */
  sections: [
    {
      id: "A", name: "Education & qualification", max: 12,
      questions: [
        { text: "What is your highest level of education?", options: [
          { label: "Master's or PhD", points: 4 },
          { label: "Bachelor's", points: 3 },
          { label: "Diploma", points: 2 },
          { label: "High school", points: 1 },
          { label: "Below high school", points: 0 } ] },
        { text: "Is your education relevant to the work you want to do in Saudi Arabia?", options: [
          { label: "Highly relevant", points: 4 },
          { label: "Somewhat relevant", points: 2 },
          { label: "Not relevant", points: 0 } ] },
        { text: "Do you hold professional or technical certifications relevant to your target job?", options: [
          { label: "Multiple relevant certifications", points: 2 },
          { label: "One relevant certification", points: 1 },
          { label: "Only unrelated certifications, or none", points: 0 } ] },
        { text: "Are your degree and documents attested (HEC, MOFA, Saudi embassy)?", options: [
          { label: "All attested and in hand", points: 2 },
          { label: "In progress", points: 1 },
          { label: "Not started, or I don't know what's needed", points: 0 } ] }
      ],
      gap: "Your paperwork will be tested harder than you expect. Saudi employers and Dataflow verify degrees at source, and unattested documents stall visas for months. Complete HEC, MOFA and Saudi embassy attestation before you apply, and add one recognised certification in your actual target field. It moves you out of the undifferentiated pile."
    },
    {
      id: "B", name: "Work experience & employability", max: 20,
      questions: [
        { text: "How many years of relevant work experience do you have?", options: [
          { label: "5 or more", points: 6 },
          { label: "3–4", points: 5 },
          { label: "1–2", points: 3 },
          { label: "Less than 1", points: 1 },
          { label: "None", points: 0 } ] },
        { text: "Is that experience directly related to the job you want in Saudi Arabia?", options: [
          { label: "Directly related", points: 4 },
          { label: "Partially related", points: 2 },
          { label: "Weakly related", points: 1 },
          { label: "Not related", points: 0 } ] },
        { text: "Have you worked in a formal, registered organisation rather than only informal work?", options: [
          { label: "3+ years in registered companies", points: 3 },
          { label: "1–2 years", points: 2 },
          { label: "Some informal-sector work only", points: 1 },
          { label: "No formal employment", points: 0 } ] },
        { text: "Can you produce verifiable evidence of your experience, such as letters, payslips and contracts an outside verifier could confirm?", options: [
          { label: "Strong documentation for every role", points: 3 },
          { label: "Some documentation", points: 2 },
          { label: "Limited documentation", points: 1 },
          { label: "None", points: 0 } ] },
        { text: "Have you applied for jobs in Saudi Arabia or the wider GCC while still in Pakistan?", options: [
          { label: "Regularly", points: 2 },
          { label: "Occasionally", points: 1 },
          { label: "Once, or never", points: 0 } ] },
        { text: "Have Saudi or GCC employers contacted you for interviews?", options: [
          { label: "Multiple times", points: 2 },
          { label: "Once or twice", points: 1 },
          { label: "Never", points: 0 } ] }
      ],
      gap: "This is the heaviest section for a reason: employers hire proven people, and Dataflow verifies what you claim by contacting your past employers directly. If your documentation is thin, fix it now while you can still reach former managers. Get signed experience letters on company letterhead with dates, job title and duties. If Saudi employers have never contacted you, the problem is reach rather than worth: apply directly through Saudi job portals and company career pages every week instead of waiting for an agent."
    },
    {
      id: "C", name: "Language & communication", max: 12,
      questions: [
        { text: "How would you rate your English?", options: [
          { label: "Professional working level", points: 4 },
          { label: "Good", points: 3 },
          { label: "Basic", points: 1 },
          { label: "Very weak", points: 0 } ] },
        { text: "How would you rate your Arabic?", options: [
          { label: "Professional working level", points: 4 },
          { label: "Conversational", points: 3 },
          { label: "Basic", points: 1 },
          { label: "None", points: 0 } ] },
        { text: "How strong are your interview and workplace communication skills?", options: [
          { label: "Excellent", points: 4 },
          { label: "Good", points: 3 },
          { label: "Average", points: 1 },
          { label: "Weak", points: 0 } ] }
      ],
      gap: "Language is the cheapest score on this page to raise, and it compounds with everything else. Workers with conversational Arabic negotiate better, get promoted sooner and are far harder to exploit, because they can read what they are signing and speak for themselves at the ministry. Six months of consistent daily practice moves this section more than a year of anything else here."
    },
    {
      id: "D", name: "Practical & marketable skills", max: 10,
      questions: [
        { text: "Do you have a second marketable skill?", help: "Driving, IT, Excel, sales, digital marketing, video editing, graphic design, plumbing, electrical, HVAC, welding, fabrication, carpentry, masonry, professional cooking, heavy equipment or machinery operation.", options: [
          { label: "Three or more strong marketable skills", points: 5 },
          { label: "Two", points: 4 },
          { label: "One strong skill", points: 3 },
          { label: "Basic skills only", points: 1 },
          { label: "No additional skill", points: 0 } ] },
        { text: "How strong are your computer and digital skills?", options: [
          { label: "Advanced", points: 3 },
          { label: "Good", points: 2 },
          { label: "Basic", points: 1 },
          { label: "None", points: 0 } ] },
        { text: "Do you have a valid driving licence and real driving experience?", options: [
          { label: "Yes, car licence and strong experience", points: 2 },
          { label: "Yes, basic experience", points: 1 },
          { label: "No", points: 0 } ] }
      ],
      gap: "A second skill is what keeps you employed when the first job falls through, and it is the difference between waiting for work and finding it. Pick one trade or digital skill with visible demand, get certified in it, and be able to demonstrate it, not just claim it."
    },
    {
      id: "E", name: "Network & connections", max: 10,
      questions: [
        { text: "Do you have family or relatives in Saudi Arabia?", options: [
          { label: "Immediate family", points: 4 },
          { label: "Close relatives", points: 3 },
          { label: "Extended relatives", points: 2 },
          { label: "None", points: 0 } ] },
        { text: "Do you have people there who can genuinely help you find work, not just host you?", options: [
          { label: "A strong professional network", points: 3 },
          { label: "Some useful contacts", points: 2 },
          { label: "One weak contact", points: 1 },
          { label: "None", points: 0 } ] },
        { text: "Do you have a reference or referral into a specific industry or company?", options: [
          { label: "A strong referral", points: 3 },
          { label: "A possible referral", points: 2 },
          { label: "A general acquaintance", points: 1 },
          { label: "None", points: 0 } ] }
      ],
      gap: "Most Gulf hiring happens through referral, and a relative who can host you is not the same as a contact who can put your CV in front of a hiring manager. Spend the months before you go building the second kind: find people already doing your job in the Kingdom, contact them directly, and ask about their employer rather than asking for a favour."
    },
    {
      id: "F", name: "Financial preparation", max: 16,
      questions: [
        { text: "How will you financially support yourself after arriving?", options: [
          { label: "Personal savings covering 6+ months", points: 5 },
          { label: "Family support available for 6+ months", points: 4 },
          { label: "3–6 months of backup", points: 3 },
          { label: "1–3 months", points: 1 },
          { label: "No reliable backup", points: 0 } ] },
        { text: "Do you have a clear plan for accommodation?", options: [
          { label: "Employer-provided, confirmed in the contract", points: 3 },
          { label: "Free or low-cost with family", points: 3 },
          { label: "A temporary arrangement", points: 1 },
          { label: "No plan", points: 0 } ] },
        { text: "If you don't find a job within 3 months, what will you do?", options: [
          { label: "A clear financial and employment contingency plan", points: 3 },
          { label: "Some backup plan", points: 2 },
          { label: "Depend on relatives", points: 1 },
          { label: "No plan", points: 0 } ] },
        { text: "If you don't find a job within 6 months, could you survive financially or return home?", options: [
          { label: "Yes, comfortably", points: 3 },
          { label: "Yes, with difficulty", points: 2 },
          { label: "Maybe", points: 1 },
          { label: "No", points: 0 } ] },
        { text: "Have you budgeted the full cost of going (fees, medical, attestation, verification, ticket, first months), and can you cover it without debt?", options: [
          { label: "Fully, without borrowing", points: 2 },
          { label: "Mostly", points: 1 },
          { label: "Only by borrowing or selling assets", points: 0 } ] }
      ],
      gap: "Money is what converts a bad month into a disaster. People who go without a cushion take the first exploitative offer they are given, because they cannot afford to refuse it, and that is exactly how workers end up trapped. Do not travel funded by debt or a sold asset. Build six months of living costs plus a return ticket you could buy at any time, and treat that as non-negotiable."
    },
    {
      id: "G", name: "Career strategy & adaptability", max: 10,
      questions: [
        { text: "Do you have a specific target job?", options: [
          { label: "A specific job title, industry and realistic target", points: 3 },
          { label: "A general field", points: 2 },
          { label: "“Any job”", points: 0 } ] },
        { text: "Have you researched the Saudi market for your profession: salary range, demand, who actually hires?", options: [
          { label: "Extensive research", points: 2 },
          { label: "Some research", points: 1 },
          { label: "None", points: 0 } ] },
        { text: "Are you willing to start in a lower position or salary than your ideal target?", help: "This is not about accepting exploitation. It measures whether you understand that your first Saudi job may not be your final one.", options: [
          { label: "Yes", points: 2 },
          { label: "Depends on circumstances", points: 1 },
          { label: "No", points: 0 } ] },
        { text: "Are you willing to work outside your original profession if necessary?", options: [
          { label: "Yes, if reasonable", points: 2 },
          { label: "Maybe", points: 1 },
          { label: "No", points: 0 } ] },
        { text: "What is your main reason for going?", options: [
          { label: "Career development, a specific profession, GCC experience or a business opportunity", points: 1 },
          { label: "“I'll go first and figure everything out later”", points: 0 } ] }
      ],
      gap: "“Any job” is not a plan, and it is the answer that most reliably precedes a bad outcome. Employers hire for a named role. Pick one target job title, learn what it pays in the Kingdom and which companies hire for it, and aim the whole application at that. Then stay flexible about the first step, not about the direction."
    },
    {
      id: "H", name: "Legal & documentation readiness", max: 10,
      questions: [
        { text: "How long is your passport valid?", options: [
          { label: "2 years or more", points: 2 },
          { label: "1–2 years", points: 1 },
          { label: "Under a year, or expired", points: 0 } ] },
        { text: "Have you read the contract's terms on end-of-service, annual leave, ticket, notice period and who pays what?", options: [
          { label: "Read and understood all of it", points: 3 },
          { label: "Read most of it", points: 2 },
          { label: "Skimmed it", points: 1 },
          { label: "Haven't read it", points: 0 } ] },
        { text: "Do you know that you must never hand your original passport to an employer or agent, and have you kept certified copies of every document?", options: [
          { label: "Yes, copies kept and I know my rights", points: 2 },
          { label: "Partly", points: 1 },
          { label: "No", points: 0 } ] },
        { text: "What is the status of your medical (GAMCA/Wafid) and police clearance?", options: [
          { label: "Complete", points: 2 },
          { label: "In progress", points: 1 },
          { label: "Not started", points: 0 } ] },
        { text: "Do you know how you would leave the job or the country if things went wrong?", help: "Transfer rules, exit procedure, and the Pakistani mission's contact details.", options: [
          { label: "Yes, clearly", points: 1 },
          { label: "Not really", points: 0 } ] }
      ],
      gap: "The documents are the job. Workers who lose years to a bad placement almost always lost them at this stage: an unread clause, a surrendered passport, an expired medical. Read every line of the contract before signing, keep certified copies of everything in a second location, never surrender an original document to anyone, and save the Pakistani embassy and consulate numbers in your phone before you fly."
    }
  ],

  /* ---- Bands. Adjustable after seeing real answers. ---- */
  bands: [
    { min: 80, tone: "go", title: "Ready: go, with a plan",
      body: "Your preparation is genuinely strong. Nothing here says wait. Work through the action list below, keep your financial cushion intact, and go in aiming at a named target job rather than an open search." },
    { min: 65, tone: "close", title: "Nearly ready: close a few gaps first",
      body: "You are close, and the gaps are specific rather than fundamental. Fix the weakest areas below over the next three to six months and you move into a much stronger position. Going now means going with a known, avoidable weakness." },
    { min: 50, tone: "wait", title: "Not yet: give it 6–12 months",
      body: "There is a real foundation here, but not enough to absorb a setback. Going at this level usually means arriving, running low on money, and taking whatever is offered. Spend six to twelve months on the areas below, then take this again." },
    { min: 0, tone: "stop", title: "Do not go yet: high risk of losing money",
      body: "On these answers, going now would most likely cost you your savings without producing a stable job. That is not a judgement of you. It is what the gaps below add up to. Every one of them can be closed. Work through them and take this again." }
  ],

  /* ---- Post-arrival playbook ---- */
  first90: [
    { title: "Track the 90 days your employer has to get your iqama",
      body: "The sponsor must apply for your iqama and work permit within 90 days of arrival. Until you have it you cannot open a bank account, sign a rental contract, get a driving licence or use most government services. Ask for written confirmation that the application has been filed, and note the date you landed." },
    { title: "Know what happens if they miss the deadline",
      body: "If the employer fails to complete the iqama process within 90 days, you gain the right to transfer to a new employer without their approval. That is your leverage. Most workers never learn it." },
    { title: "Get your own copy of everything on day one",
      body: "Photograph your contract, iqama, passport and every receipt, and store them somewhere you can reach without your phone. Keep your original passport. If anyone asks you to hand it over, that is a violation, not a formality." },
    { title: "Open a bank account the moment the iqama lands",
      body: "Salary must reach an account in your name. Cash-in-hand arrangements leave no record of whether you were paid. Set up your remittance channel through a licensed bank or exchange, never an informal courier." },
    { title: "Check the contract you sign there against the one you signed here",
      body: "Compare the Arabic contract you are given in the Kingdom against the one you signed in Pakistan. If salary, role or hours differ, raise it immediately and in writing. The discrepancy is far harder to challenge six months later." },
    { title: "Register with the Pakistani mission",
      body: "Save the embassy in Riyadh and the consulate in Jeddah in your phone before you fly. If your contract was protected by the Protectorate of Emigrants you are entitled to their assistance, but only if you can reach them." },
    { title: "Don't send everything home in month one",
      body: "Hold your cushion until the job is confirmed stable and the iqama is issued. The pressure to remit immediately is enormous, and it is what leaves people stranded when a job collapses in month three." }
  ],

  boosters: [
    { title: "Arabic to conversational level",
      body: "The highest-return investment available to you. It changes what you can negotiate, what you can read before signing, and how quickly you are promoted." },
    { title: "A recognised certification in your actual field",
      body: "Not a general course, but the specific credential employers in your target industry name in their job adverts." },
    { title: "A Saudi driving licence",
      body: "Converts a large number of roles from inaccessible to accessible, and is worth real money in logistics, sales and field work." },
    { title: "Aim at sectors that are not being localised",
      body: "Healthcare specialisms and technical/IT roles carry lower Saudization targets than administrative, clerical and customer-facing work. Where you aim matters more than how hard you try." },
    { title: "Build a verifiable record from day one",
      body: "Keep signed experience letters, payslips and contracts for every role. It is what makes your next move possible, inside the Kingdom or beyond it." }
  ]
};

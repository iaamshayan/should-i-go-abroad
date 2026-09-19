/* Country pack: Qatar
 * DRAFT — assembled from public research, not from the owner's own expertise.
 * Review the wording, points and bands before relying on it. See AUTHORING.md.
 */
PACKS["qatar"] = {
  id: "qatar",
  name: "Qatar",
  flag: "\u{1F1F6}\u{1F1E6}",
  origin: "Pakistan",
  authored: "research",
  updated: "2026-09-08",

  intro: "For a Pakistan-based worker weighing a move to Qatar. Qatar's labour rules changed substantially after 2020 — several things that are true in Saudi Arabia are no longer true here.",

  knockouts: [
    {
      id: "k-visa",
      text: "What visa will you actually travel on?",
      options: [
        { label: "A work visa arranged by an employer, with a signed contract", severity: "ok" },
        { label: "A visit visa — I've been told it converts to work there", severity: "stop" },
        { label: "A visit visa, and I'll look for work after I arrive", severity: "stop" },
        { label: "I don't know yet — the agent hasn't told me", severity: "stop" }
      ],
      stopTitle: "You would arrive without the right to work",
      stopBody: "Work in Qatar requires a work visa and residence permit arranged by an employer before you travel. Arriving on a visit visa to look for work leaves you unable to take a job legally, burning savings on a clock you do not control, and exposed to overstay penalties and deportation. Do not travel until the work visa exists."
    },
    {
      id: "k-contract",
      text: "Is your contract registered with Qatar's Ministry of Labour, and have you read it?",
      help: "Contracts are registered and verified through the ministry's electronic system.",
      options: [
        { label: "Yes — registered, and I've read the version that was filed", severity: "ok" },
        { label: "I have a signed contract but I don't know if it's registered", severity: "warn" },
        { label: "Only a verbal or WhatsApp promise", severity: "stop" },
        { label: "No contract", severity: "stop" }
      ],
      stopTitle: "An unregistered promise is not a job",
      stopBody: "Qatar registers employment contracts digitally through the Ministry of Labour, and the registered contract is what governs your pay, hours and end-of-service. A promise outside that system cannot be enforced. Get the registered contract before you travel.",
      warnTitle: "Confirm the contract was actually registered",
      warnBody: "A signature is not registration. Ask for confirmation that the contract is filed in the ministry's system, and check that the registered terms match what you signed."
    },
    {
      id: "k-beoe",
      text: "Is your recruiter a BEOE-licensed Overseas Employment Promoter, and will your contract be stamped by the Protectorate of Emigrants?",
      help: "This is Pakistan-side protection and applies wherever you are going.",
      options: [
        { label: "Yes — I verified the licence myself and protection is arranged", severity: "ok" },
        { label: "The agent says yes, but I haven't verified it", severity: "warn" },
        { label: "No — going through a personal contact, without protection", severity: "stop" },
        { label: "I don't know what this is", severity: "stop" }
      ],
      stopTitle: "You would be travelling outside Pakistan's legal protection",
      stopBody: "Every Pakistani going abroad on a work visa is legally required to have their Foreign Service Agreement protected by the Protectorate of Emigrants. Protection is what entitles you to assistance from the Pakistani mission in Qatar if the employer breaks the contract. Verify your agent's licence on beoe.gov.pk before paying anyone anything.",
      warnTitle: "Verify the licence yourself",
      warnBody: "An agent's word about their own licence is worth nothing. The BEOE publishes the list of active OEP licences — check it yourself, and confirm the specific office you are dealing with."
    },
    {
      id: "k-money",
      text: "Has anyone asked you for money beyond documented, receipted government fees?",
      help: "Charging recruitment fees to the worker is prohibited under Qatar's rules — the employer carries those costs.",
      options: [
        { label: "No — only official fees, with receipts", severity: "ok" },
        { label: "A modest amount, and I got a receipt", severity: "warn" },
        { label: "A large amount in cash, with no receipt", severity: "stop" }
      ],
      stopTitle: "You are being charged for something the employer must pay for",
      stopBody: "Recruitment costs in Qatar are the employer's responsibility, not yours. Large unreceipted cash demands are the defining feature of overseas job fraud — and workers who arrive already in debt are the least able to walk away from a bad job. Stop paying, keep every message and receipt, and verify the employer independently.",
      warnTitle: "Keep every receipt",
      warnBody: "Keep the paperwork for anything you have paid. It is your evidence if the placement goes wrong, and fees charged to you may not have been legitimate in the first place."
    },
    {
      id: "k-wage",
      text: "Does your offered package meet Qatar's minimum wage rules?",
      help: "QAR 1,000 basic, plus QAR 500 accommodation allowance if housing is not provided, plus QAR 300 food allowance if meals are not provided.",
      options: [
        { label: "Yes — I checked the basic wage and the allowances against the rules", severity: "ok" },
        { label: "The salary looks fine but I haven't checked the allowance breakdown", severity: "warn" },
        { label: "No — the offer is below the minimum", severity: "stop" },
        { label: "I don't know what I'm being offered in writing", severity: "stop" }
      ],
      stopTitle: "The offer is below what the law requires",
      stopBody: "Qatar sets a floor of QAR 1,000 basic pay, with an additional QAR 500 for accommodation and QAR 300 for food where the employer does not provide them. An offer below that floor is either unlawful or is not the offer you will actually receive. Either way it tells you what kind of employer you are dealing with.",
      warnTitle: "Check the breakdown, not just the headline number",
      warnBody: "A package that looks adequate can still be structured wrongly — a high basic with no housing where housing is not provided, or allowances quietly folded in. Compare the basic wage and each allowance separately against the rules."
    },
    {
      id: "k-licence",
      text: "Does your profession require Qatari licensing or credential verification — and have you started it?",
      help: "The Department of Healthcare Professions for health workers; engineering and several other fields have their own registration.",
      options: [
        { label: "Not required for my profession — I checked", severity: "ok" },
        { label: "Required, and my licence or verification is complete", severity: "ok" },
        { label: "Required — started but not finished", severity: "warn" },
        { label: "Required — I haven't started", severity: "stop" },
        { label: "I don't know whether it's required", severity: "stop" }
      ],
      stopTitle: "You may not be allowed to practise your profession",
      stopBody: "Regulated professions need registration and primary-source verification of your credentials before you can legally work. Verification contacts your universities and past employers directly, so it takes weeks to months, and gaps in your documents surface there. Find out what applies to you and start before you commit.",
      warnTitle: "Finish the licensing before you travel",
      warnBody: "An incomplete licence can leave you in the country unable to work legally while your savings drain."
    }
  ],

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
        { text: "Is your education relevant to the work you want to do in Qatar?", options: [
          { label: "Highly relevant", points: 4 },
          { label: "Somewhat relevant", points: 2 },
          { label: "Not relevant", points: 0 } ] },
        { text: "Do you hold professional or technical certifications relevant to your target job?", options: [
          { label: "Multiple relevant certifications", points: 2 },
          { label: "One relevant certification", points: 1 },
          { label: "Only unrelated certifications, or none", points: 0 } ] },
        { text: "Are your degree and documents attested (HEC, Pakistan MOFA, Qatar embassy)?", options: [
          { label: "All attested and in hand", points: 2 },
          { label: "In progress", points: 1 },
          { label: "Not started, or I don't know what's needed", points: 0 } ] }
      ],
      gap: "Attestation is slow and it blocks everything downstream — the work permit cannot complete without it. Start HEC, MOFA and Qatar embassy attestation before you begin applying, and add one certification that your target industry actually names in its job adverts."
    },
    {
      id: "B", name: "Work experience & employability", max: 22,
      questions: [
        { text: "How many years of relevant work experience do you have?", options: [
          { label: "5 or more", points: 7 },
          { label: "3–4", points: 6 },
          { label: "1–2", points: 3 },
          { label: "Less than 1", points: 1 },
          { label: "None", points: 0 } ] },
        { text: "Is that experience directly related to the job you want in Qatar?", options: [
          { label: "Directly related", points: 5 },
          { label: "Partially related", points: 3 },
          { label: "Weakly related", points: 1 },
          { label: "Not related", points: 0 } ] },
        { text: "Have you worked in a formal, registered organisation rather than only informal work?", options: [
          { label: "3+ years in registered companies", points: 3 },
          { label: "1–2 years", points: 2 },
          { label: "Some informal-sector work only", points: 1 },
          { label: "No formal employment", points: 0 } ] },
        { text: "Can you produce verifiable evidence of your experience — letters, payslips and contracts an outside verifier could confirm?", options: [
          { label: "Strong documentation for every role", points: 3 },
          { label: "Some documentation", points: 2 },
          { label: "Limited documentation", points: 1 },
          { label: "None", points: 0 } ] },
        { text: "Have you applied for Qatari jobs directly, from Pakistan?", options: [
          { label: "Regularly, to named companies", points: 2 },
          { label: "Occasionally", points: 1 },
          { label: "Once, or never", points: 0 } ] },
        { text: "Have Qatari employers contacted you for interviews?", options: [
          { label: "Multiple times", points: 2 },
          { label: "Once or twice", points: 1 },
          { label: "Never", points: 0 } ] }
      ],
      gap: "Qatar's market is smaller than Saudi Arabia's or the UAE's, so proven, documented experience counts for proportionally more and speculative applications work less well. Get signed experience letters on company letterhead with dates, title and duties, and apply to named employers in your actual sector rather than broadcasting a CV."
    },
    {
      id: "C", name: "Language & communication", max: 10,
      questions: [
        { text: "How would you rate your English?", help: "English is the common working language across most of Qatar's private sector.", options: [
          { label: "Professional working level", points: 5 },
          { label: "Good", points: 4 },
          { label: "Basic", points: 2 },
          { label: "Very weak", points: 0 } ] },
        { text: "How would you rate your Arabic?", options: [
          { label: "Conversational or better", points: 2 },
          { label: "Basic", points: 1 },
          { label: "None", points: 0 } ] },
        { text: "How strong are your interview and workplace communication skills?", options: [
          { label: "Excellent", points: 3 },
          { label: "Good", points: 2 },
          { label: "Average", points: 1 },
          { label: "Weak", points: 0 } ] }
      ],
      gap: "English does most of the work here. It is also what lets you read your own registered contract, raise a complaint through the ministry, and negotiate a move to a better employer — which Qatar now allows. Weak English is the difference between having rights and being able to use them."
    },
    {
      id: "D", name: "Practical & marketable skills", max: 10,
      questions: [
        { text: "Do you have a second marketable skill?", help: "Driving, IT, Excel, sales, digital marketing, video editing, graphic design, plumbing, electrical, HVAC, welding, fabrication, carpentry, professional cooking, heavy equipment or machinery operation.", options: [
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
          { label: "Yes — car licence and strong experience", points: 2 },
          { label: "Yes — basic experience", points: 1 },
          { label: "No", points: 0 } ] }
      ],
      gap: "A second skill is what makes you worth keeping, and — now that changing employers is possible — worth hiring away. Pick one trade or digital skill with visible demand, get certified, and be able to demonstrate it."
    },
    {
      id: "E", name: "Network & connections", max: 8,
      questions: [
        { text: "Do you have family or relatives in Qatar?", options: [
          { label: "Immediate family", points: 3 },
          { label: "Close relatives", points: 2 },
          { label: "Extended relatives", points: 1 },
          { label: "None", points: 0 } ] },
        { text: "Do you have people there who can genuinely help you find work — not just host you?", options: [
          { label: "A strong professional network", points: 3 },
          { label: "Some useful contacts", points: 2 },
          { label: "One weak contact", points: 1 },
          { label: "None", points: 0 } ] },
        { text: "Do you have a reference or referral into a specific company?", options: [
          { label: "A strong referral", points: 2 },
          { label: "A possible referral", points: 1 },
          { label: "None", points: 0 } ] }
      ],
      gap: "Qatar is a small labour market where reputation travels fast, and referrals carry more weight than applications. Find people already doing your job there, ask about their employer rather than asking for a favour, and keep those contacts warm — they matter more later, when you are entitled to change jobs."
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
        { text: "Is accommodation provided, and is that written into the contract?", help: "If housing is not provided, the QAR 500 accommodation allowance is owed on top of basic pay.", options: [
          { label: "Provided and stated in the contract", points: 3 },
          { label: "Not provided, but the allowance is stated", points: 3 },
          { label: "A temporary or informal arrangement", points: 1 },
          { label: "No plan", points: 0 } ] },
        { text: "If the job ends within 3 months, what will you do?", options: [
          { label: "A clear financial and employment contingency plan", points: 3 },
          { label: "Some backup plan", points: 2 },
          { label: "Depend on relatives", points: 1 },
          { label: "No plan", points: 0 } ] },
        { text: "If you were out of work for 6 months, could you survive financially or return home?", options: [
          { label: "Yes, comfortably", points: 3 },
          { label: "Yes, with difficulty", points: 2 },
          { label: "Maybe", points: 1 },
          { label: "No", points: 0 } ] },
        { text: "Have you budgeted the full cost of going and can you cover it without debt?", options: [
          { label: "Fully, without borrowing", points: 2 },
          { label: "Mostly", points: 1 },
          { label: "Only by borrowing or selling assets", points: 0 } ] }
      ],
      gap: "Arriving in debt is what removes your ability to use the rights Qatar now gives you. A worker with savings can serve notice and move to a better employer; a worker who borrowed to get there cannot. Build the cushion before you go, not after."
    },
    {
      id: "G", name: "Career strategy & adaptability", max: 12,
      questions: [
        { text: "Do you have a specific target job?", options: [
          { label: "A specific job title, industry and realistic target", points: 3 },
          { label: "A general field", points: 2 },
          { label: "“Any job”", points: 0 } ] },
        { text: "Have you researched what your role actually pays in Qatar, against what it costs to live there?", options: [
          { label: "Extensively — I know the salary band and my monthly costs", points: 3 },
          { label: "Some research", points: 1 },
          { label: "None", points: 0 } ] },
        { text: "Do you know that you can change employers in Qatar without your current employer's permission?", help: "The No-Objection Certificate requirement was abolished; you serve your notice period and move through the ministry's system.", options: [
          { label: "Yes — and I know the notice periods", points: 2 },
          { label: "I'd heard something about it", points: 1 },
          { label: "No", points: 0 } ] },
        { text: "Are you willing to start in a lower position or salary than your ideal target?", options: [
          { label: "Yes", points: 2 },
          { label: "Depends on circumstances", points: 1 },
          { label: "No", points: 0 } ] },
        { text: "What is your main reason for going?", options: [
          { label: "Career development, a specific profession or a business opportunity", points: 2 },
          { label: "“I'll go first and figure everything out later”", points: 0 } ] }
      ],
      gap: "The most valuable thing to understand about Qatar is that your first job no longer has to be your only job — the NOC requirement is gone, and you can move after serving notice. That changes the calculation: a modest first role with a legitimate, registered employer is a far better bet than a higher number from someone who will not put it in the system."
    },
    {
      id: "H", name: "Legal & documentation readiness", max: 10,
      questions: [
        { text: "How long is your passport valid?", options: [
          { label: "2 years or more", points: 2 },
          { label: "1–2 years", points: 1 },
          { label: "Under a year, or expired", points: 0 } ] },
        { text: "Have you read the contract's terms on end-of-service gratuity, leave, ticket, notice period and probation?", options: [
          { label: "Read and understood all of it", points: 3 },
          { label: "Read most of it", points: 2 },
          { label: "Skimmed it", points: 1 },
          { label: "Haven't read it", points: 0 } ] },
        { text: "Do you know that you must never hand your original passport to an employer — and have you kept certified copies of every document?", options: [
          { label: "Yes — copies kept, and I know my rights", points: 2 },
          { label: "Partly", points: 1 },
          { label: "No", points: 0 } ] },
        { text: "What is the status of your medical and police clearance?", options: [
          { label: "Complete", points: 2 },
          { label: "In progress", points: 1 },
          { label: "Not started", points: 0 } ] },
        { text: "Do you know how you would leave the job or the country if things went wrong?", help: "Notice periods, the Ministry of Labour complaint route, and the Pakistani embassy's contact details.", options: [
          { label: "Yes, clearly", points: 1 },
          { label: "Not really", points: 0 } ] }
      ],
      gap: "Qatar's reforms only work for workers who know about them. Exit permits were abolished for most workers, the NOC is gone, wages run through a protection system and recruitment fees are the employer's cost. Learn each of those before you go — the workers who get exploited are usually the ones who never found out what had changed."
    }
  ],

  bands: [
    { min: 80, tone: "go", title: "Ready — go, with a plan",
      body: "Your preparation is strong. Work through the actions below, keep your savings intact, and remember that a registered contract with a legitimate employer beats a bigger number from someone who avoids the system." },
    { min: 65, tone: "close", title: "Nearly ready — close a few gaps first",
      body: "You are close, and the gaps are specific. Fix the weakest areas below over the next three to six months rather than going with a known weakness." },
    { min: 50, tone: "wait", title: "Not yet — give it 6–12 months",
      body: "There is a foundation here, but not enough to let you walk away from a bad employer — which is the whole advantage Qatar's reforms give you. Spend six to twelve months on the areas below, then take this again." },
    { min: 0, tone: "stop", title: "Do not go yet — high risk of losing money",
      body: "On these answers, going now would most likely cost you your savings without producing a stable job. Work through the gaps below and take this again." }
  ],

  first90: [
    { title: "Get your Qatar ID and check what it says",
      body: "Confirm the employer, job title and salary recorded on your residence permit match your registered contract. Discrepancies are far easier to challenge in week one than in month six." },
    { title: "Check your pay against the minimum and against your contract",
      body: "The floor is QAR 1,000 basic, plus QAR 500 for accommodation and QAR 300 for food where the employer does not provide them. Check the first payslip line by line, not just the total." },
    { title: "Confirm wages arrive through the Wage Protection System",
      body: "Payment into your own bank account creates the record that proves you were or were not paid. Cash arrangements remove it." },
    { title: "Keep your passport",
      body: "Withholding a worker's passport is not permitted. Keep the original, and store certified copies somewhere separate from where you live." },
    { title: "Learn your notice period — it is your exit",
      body: "One month for up to two years of service, two months beyond that. Because the NOC requirement is abolished, serving notice is all that stands between you and a better employer. Know the number from day one." },
    { title: "Find the Ministry of Labour complaint route before you need it",
      body: "Knowing where wage and contract disputes go changes what you are willing to tolerate. Save it alongside the Pakistani embassy in Doha." },
    { title: "Hold your cushion",
      body: "Do not remit everything home in the first months. Your savings are what let you use your right to leave a bad employer." }
  ],

  boosters: [
    { title: "English to professional level",
      body: "It sets your salary ceiling and it is what lets you read your own contract and raise a complaint in your own words." },
    { title: "A certification your target industry actually names",
      body: "Look at real Qatari job adverts for your target title and get the specific credential they list." },
    { title: "A Qatari driving licence",
      body: "Opens roles in logistics, sales and field work, and cuts what you spend getting to work." },
    { title: "Know your mobility rights cold",
      body: "The abolished NOC is the single biggest change in your favour. Workers who understand notice periods and the transfer process negotiate from a completely different position." },
    { title: "Build a documented record from day one",
      body: "Keep payslips, contracts and signed experience letters. In a market where you can now move employers, a verifiable record is what you move with." }
  ]
};

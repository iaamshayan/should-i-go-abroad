/* Country pack: United Arab Emirates
 * DRAFT: assembled from public research, not from the owner's own expertise.
 * Review the wording, points and bands before relying on it. See AUTHORING.md.
 */
PACKS["uae"] = {
  id: "uae",
  name: "United Arab Emirates",
  flag: "\u{1F1E6}\u{1F1EA}",
  origin: "Pakistan",
  authored: "research",
  updated: "2026-09-08",

  tagline: "An open, English-speaking market with a high cost of living. Visit visas can convert, with care.",
  intro: "For a Pakistan-based worker weighing a move to the Emirates. The rules here differ from Saudi Arabia in ways that matter, so read the questions carefully rather than assuming.",

  knockouts: [
    {
      id: "k-visa",
      text: "What visa will you actually travel on?",
      help: "Unlike Saudi Arabia, a visit visa can legally become an employment visa here, but only through an employer, and never by yourself.",
      options: [
        { label: "An employment visa arranged by an employer before I travel", severity: "ok" },
        { label: "A visit visa, with a signed offer, and the employer will convert it", severity: "warn" },
        { label: "A visit visa, and I'll look for work after I arrive", severity: "warn" },
        { label: "I don't know yet. The agent hasn't told me", severity: "stop" }
      ],
      stopTitle: "You cannot plan around a visa nobody will name",
      stopBody: "An agent who will not tell you which visa you are travelling on is hiding something. The visa type determines whether you can legally work, how long you can stay and what it costs you if the job falls through. Get it in writing before you pay anyone.",
      warnTitle: "Job-hunting on a visit visa is legal here, but the clock is expensive",
      warnBody: "You may enter on a visit visa and convert to employment without leaving the country, but only an employer can file that conversion, and you cannot legally work a single day before it completes. Conversion typically takes two to three weeks after labour approval. If your visa expires first, overstay is charged at AED 50 per day with no grace period since February 2026. Budget for the full search plus the conversion, not just the flight."
    },
    {
      id: "k-contract",
      text: "Has your offer been registered with MOHRE, and does it match what you were promised?",
      help: "The Ministry of Human Resources and Emiratisation registers the official offer letter and contract.",
      options: [
        { label: "Yes, I've seen the MOHRE offer letter and it matches", severity: "ok" },
        { label: "A company offer, but nothing registered with MOHRE yet", severity: "warn" },
        { label: "Only a verbal or WhatsApp promise", severity: "stop" },
        { label: "No offer at all", severity: "stop" }
      ],
      stopTitle: "There is nothing to hold the employer to",
      stopBody: "The MOHRE-registered contract is the document that governs your job. A promise outside that system cannot be enforced by the ministry, a court or your embassy. Do not travel on a conversation.",
      warnTitle: "The MOHRE contract is the one that counts",
      warnBody: "Company offer letters and the registered MOHRE contract routinely differ. Insist on seeing the registered version and compare salary, job title, hours and benefits line by line before you sign anything."
    },
    {
      id: "k-beoe",
      text: "Is your recruiter a BEOE-licensed Overseas Employment Promoter, and will your contract be stamped by the Protectorate of Emigrants?",
      help: "This is Pakistan-side protection and applies wherever you are going.",
      options: [
        { label: "Yes, I verified the licence myself and protection is arranged", severity: "ok" },
        { label: "The agent says yes, but I haven't verified it", severity: "warn" },
        { label: "No, I'm going through a personal contact without protection", severity: "stop" },
        { label: "I don't know what this is", severity: "stop" }
      ],
      stopTitle: "You would be travelling outside Pakistan's legal protection",
      stopBody: "Every Pakistani going abroad on a work visa is legally required to have their Foreign Service Agreement protected by the Protectorate of Emigrants. Protection is what entitles you to assistance from the Pakistani mission in the UAE if the employer breaks the contract. Verify your agent's licence on beoe.gov.pk before paying anyone anything.",
      warnTitle: "Verify the licence yourself",
      warnBody: "An agent's word about their own licence is worth nothing. The BEOE publishes the list of active OEP licences, so check it yourself, and confirm the specific office you are dealing with."
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
      stopBody: "Large unreceipted cash demands are the defining feature of overseas job fraud in Pakistan. A legitimate employer does not charge you to be hired. In the UAE, recruitment costs are the employer's to carry. Stop paying, keep every message and receipt, and verify the employer using contact details you found yourself.",
      warnTitle: "Keep every receipt",
      warnBody: "Even documented fees are worth checking against the official schedule, and the paperwork is your evidence if the placement goes wrong."
    },
    {
      id: "k-wps",
      text: "How will your salary actually be paid?",
      help: "The Wage Protection System routes salaries through banks so there is a record that you were paid.",
      options: [
        { label: "Through WPS, into a bank account in my name, stated in the contract", severity: "ok" },
        { label: "The contract states a salary but doesn't mention WPS", severity: "warn" },
        { label: "Cash in hand", severity: "stop" },
        { label: "I don't know", severity: "warn" }
      ],
      stopTitle: "Cash wages leave you unable to prove you were underpaid",
      stopBody: "Private-sector salaries in the UAE are meant to run through the Wage Protection System. Cash payment removes the only independent record that you were paid, or not paid, and it is the arrangement behind most wage-theft cases. Insist on WPS into an account in your own name.",
      warnTitle: "Confirm the WPS arrangement in writing",
      warnBody: "MOHRE now checks WPS compliance in real time when an employer applies for a visa, and a single month of late reporting can block the whole company's new permits. An employer vague about WPS is worth checking on before you commit."
    },
    {
      id: "k-licence",
      text: "Does your profession require UAE licensing or credential verification, and have you started it?",
      help: "DHA, DoH or MOHAP for health workers; engineering and several other fields have their own registration.",
      options: [
        { label: "Not required for my profession (I checked)", severity: "ok" },
        { label: "Required, and my licence or verification is complete", severity: "ok" },
        { label: "Required, started but not finished", severity: "warn" },
        { label: "Required, and I haven't started", severity: "stop" },
        { label: "I don't know whether it's required", severity: "stop" }
      ],
      stopTitle: "You may not be allowed to practise your profession",
      stopBody: "Regulated professions need a licence from the relevant emirate's health authority or professional body before you can legally work. Verification contacts your universities and past employers directly, so it takes weeks to months. Find out what applies to you and start before you commit to anything.",
      warnTitle: "Finish the licensing before you travel",
      warnBody: "An incomplete licence can leave you in the country unable to work while your savings drain and your visit visa runs down."
    }
  ],

  sections: [
    {
      id: "A", name: "Education & qualification", max: 12,
      questions: [
        { text: "What is your highest level of education?", help: "MOHRE classes you as skilled with a degree or equivalent diploma plus a salary at or above AED 4,000, which affects which employers can hire you.", options: [
          { label: "Master's or PhD", points: 4 },
          { label: "Bachelor's", points: 3 },
          { label: "Diploma", points: 2 },
          { label: "High school", points: 1 },
          { label: "Below high school", points: 0 } ] },
        { text: "Is your education relevant to the work you want to do in the UAE?", options: [
          { label: "Highly relevant", points: 4 },
          { label: "Somewhat relevant", points: 2 },
          { label: "Not relevant", points: 0 } ] },
        { text: "Do you hold professional or technical certifications relevant to your target job?", options: [
          { label: "Multiple relevant certifications", points: 2 },
          { label: "One relevant certification", points: 1 },
          { label: "Only unrelated certifications, or none", points: 0 } ] },
        { text: "Are your degree and documents attested (HEC, Pakistan MOFA, UAE embassy)?", options: [
          { label: "All attested and in hand", points: 2 },
          { label: "In progress", points: 1 },
          { label: "Not started, or I don't know what's needed", points: 0 } ] }
      ],
      gap: "Attestation is not optional here and it is slow. Without a fully attested degree your employer cannot complete the work permit, and a job offer can lapse while you chase paperwork. Start HEC, MOFA and UAE embassy attestation before you begin applying, not after you get an offer."
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
        { text: "Is that experience directly related to the job you want in the UAE?", options: [
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
        { text: "Have you applied for UAE jobs directly, from Pakistan?", options: [
          { label: "Regularly, to named companies", points: 2 },
          { label: "Occasionally", points: 1 },
          { label: "Once, or never", points: 0 } ] },
        { text: "Have UAE employers contacted you for interviews?", options: [
          { label: "Multiple times", points: 2 },
          { label: "Once or twice", points: 1 },
          { label: "Never", points: 0 } ] }
      ],
      gap: "The UAE market is more open to direct application than Saudi Arabia, which cuts both ways, because you are competing with the whole world rather than only with other Pakistanis. Apply directly to named companies rather than through agents, and make your documentation airtight: signed experience letters on letterhead, with dates, title and duties."
    },
    {
      id: "C", name: "Language & communication", max: 10,
      questions: [
        { text: "How would you rate your English?", help: "English, not Arabic, is the working language of most UAE private-sector workplaces.", options: [
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
      gap: "English carries almost all the weight here. Most UAE workplaces run in it, and weak English caps your salary far more than weak Arabic does. If your English is basic, that is the single highest-return thing you can fix before applying, and it is fixable in months rather than years."
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
          { label: "Yes, car licence and strong experience", points: 2 },
          { label: "Yes, basic experience", points: 1 },
          { label: "No", points: 0 } ] }
      ],
      gap: "A second skill is what keeps you employed when the first job falls through. Pick one trade or digital skill with visible demand, get certified in it, and be able to demonstrate it rather than just claim it."
    },
    {
      id: "E", name: "Network & connections", max: 8,
      questions: [
        { text: "Do you have family or relatives in the UAE?", options: [
          { label: "Immediate family", points: 3 },
          { label: "Close relatives", points: 2 },
          { label: "Extended relatives", points: 1 },
          { label: "None", points: 0 } ] },
        { text: "Do you have people there who can genuinely help you find work, not just host you?", options: [
          { label: "A strong professional network", points: 3 },
          { label: "Some useful contacts", points: 2 },
          { label: "One weak contact", points: 1 },
          { label: "None", points: 0 } ] },
        { text: "Do you have a reference or referral into a specific company?", options: [
          { label: "A strong referral", points: 2 },
          { label: "A possible referral", points: 1 },
          { label: "None", points: 0 } ] }
      ],
      gap: "Connections matter less here than in Saudi Arabia, but somewhere to stay during a job search is worth real money. Dubai accommodation is the fastest way to burn through a budget. Separate the two questions in your planning: who can host you, and who can actually get your CV read."
    },
    {
      id: "F", name: "Financial preparation", max: 18,
      questions: [
        { text: "How will you financially support yourself after arriving?", help: "Cost of living in Dubai and Abu Dhabi is high. Budget against real rents, not optimistic ones.", options: [
          { label: "Personal savings covering 6+ months", points: 6 },
          { label: "Family support available for 6+ months", points: 5 },
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
        { text: "Have you budgeted the full cost (fees, attestation, medical, ticket, visa conversion and first months), and can you cover it without debt?", options: [
          { label: "Fully, without borrowing", points: 3 },
          { label: "Mostly", points: 1 },
          { label: "Only by borrowing or selling assets", points: 0 } ] }
      ],
      gap: "Money is weighted heavily here because the UAE punishes running out of it faster than most places. Rent is high, a visit visa expires on a fixed date, and overstay costs AED 50 every day with no grace period. Arrive with six months of real living costs and a return ticket you could buy at any moment."
    },
    {
      id: "G", name: "Career strategy & adaptability", max: 12,
      questions: [
        { text: "Do you have a specific target job?", options: [
          { label: "A specific job title, industry and realistic target", points: 3 },
          { label: "A general field", points: 2 },
          { label: "“Any job”", points: 0 } ] },
        { text: "Have you researched what your role actually pays in the UAE, against what it costs to live there?", options: [
          { label: "Extensively. I know the salary band and my monthly costs", points: 3 },
          { label: "Some research", points: 1 },
          { label: "None", points: 0 } ] },
        { text: "Do you understand how Emiratisation affects your target role?", help: "Skilled-role quotas rise each year for larger private companies.", options: [
          { label: "Yes, I know where my role sits", points: 2 },
          { label: "Roughly", points: 1 },
          { label: "No", points: 0 } ] },
        { text: "Are you willing to start in a lower position or salary than your ideal target?", options: [
          { label: "Yes", points: 2 },
          { label: "Depends on circumstances", points: 1 },
          { label: "No", points: 0 } ] },
        { text: "What is your main reason for going?", options: [
          { label: "Career development, a specific profession or a business opportunity", points: 2 },
          { label: "“I'll go first and figure everything out later”", points: 0 } ] }
      ],
      gap: "A high UAE salary is not a high UAE income. Rent, schooling and transport take most of it, and people routinely move for a number that turns out to be worse than what they left. Do the arithmetic on take-home minus real living costs for the specific emirate you are targeting, before you accept anything."
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
        { text: "Do you know that you must never hand your original passport to an employer, and have you kept certified copies of every document?", help: "Withholding a worker's passport is illegal in the UAE.", options: [
          { label: "Yes, copies kept and I know my rights", points: 2 },
          { label: "Partly", points: 1 },
          { label: "No", points: 0 } ] },
        { text: "What is the status of your medical and police clearance?", options: [
          { label: "Complete", points: 2 },
          { label: "In progress", points: 1 },
          { label: "Not started", points: 0 } ] },
        { text: "Do you know how you would leave the job or the country if things went wrong?", help: "Notice periods, MOHRE complaints, and the Pakistani mission's contact details.", options: [
          { label: "Yes, clearly", points: 1 },
          { label: "Not really", points: 0 } ] }
      ],
      gap: "The UAE gives workers more formal protection than many neighbours. MOHRE takes complaints, passport withholding is illegal, and WPS creates a payment record. None of it helps if you do not know the rules or cannot show your own paperwork. Read the contract fully, keep certified copies somewhere separate, and save the complaint channels before you need them."
    }
  ],

  bands: [
    { min: 80, tone: "go", title: "Ready: go, with a plan",
      body: "Your preparation is strong. Work through the actions below, protect your financial cushion, and go in targeting named companies rather than running an open search." },
    { min: 65, tone: "close", title: "Nearly ready: close a few gaps first",
      body: "You are close, and the gaps are specific. Fix the weakest areas below over the next three to six months. Going now means going with a known, avoidable weakness in an expensive market." },
    { min: 50, tone: "wait", title: "Not yet: give it 6–12 months",
      body: "There is a foundation here, but not enough to absorb a slow job search in a high-cost country. Spend six to twelve months on the areas below, then take this again." },
    { min: 0, tone: "stop", title: "Do not go yet: high risk of losing money",
      body: "On these answers, going now would most likely cost you your savings without producing a stable job, and UAE living costs would drain them faster than you expect. Work through the gaps below and take this again." }
  ],

  first90: [
    { title: "Do not work a single day before your status is converted",
      body: "If you entered on a visit visa, you cannot legally work until the employment residence visa is issued, no matter what the employer says about starting immediately. Working before conversion is a violation that falls on you, not on them." },
    { title: "Watch the visa expiry date, not the job",
      body: "Overstay runs at AED 50 per day and the grace period was removed in February 2026. Know your exact expiry date and what the conversion timeline is, and keep enough money to leave if it slips." },
    { title: "Get your Emirates ID and labour card, and check the details",
      body: "Confirm the job title and salary recorded on your permit match your contract. Discrepancies are far easier to fix in week one than in month six." },
    { title: "Confirm your salary is arriving through WPS",
      body: "Check that payments land in your own bank account through the Wage Protection System. If wages are late or cash-based, that is a documented pattern worth acting on early through MOHRE." },
    { title: "Keep your passport",
      body: "An employer holding your passport is acting illegally in the UAE. Keep the original and store certified copies somewhere separate from where you live." },
    { title: "Learn the MOHRE complaint route before you need it",
      body: "MOHRE handles wage and contract disputes, and knowing the channel in advance changes what you are willing to accept. Save it alongside the Pakistani embassy in Abu Dhabi and consulate in Dubai." },
    { title: "Hold your cushion for the first few months",
      body: "Rent deposits and setup costs land early and heavily. Do not remit everything home until the job and the visa are both confirmed stable." }
  ],

  boosters: [
    { title: "English to professional level",
      body: "The highest-return investment for the UAE specifically. It is the working language, and it sets your salary ceiling more than any other single factor." },
    { title: "A UAE driving licence",
      body: "Opens a large set of roles in logistics, sales and field work, and reduces what you spend getting to them." },
    { title: "A certification your target industry actually names",
      body: "Look at real job adverts for your target title and get the specific credential they list, rather than a general course." },
    { title: "Aim at roles below the Emiratisation quota pressure",
      body: "Skilled-role quotas rise annually for larger private companies. Smaller firms, free-zone companies and specialised technical roles face different pressure. Where you aim changes your odds." },
    { title: "Understand take-home versus cost of living",
      body: "The workers who do well here are the ones who negotiated on net position rather than headline salary. Learn the real numbers for your emirate before you accept." }
  ]
};

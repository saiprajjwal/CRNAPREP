const categories = [
  { id: "clinical-icu", label: "Clinical ICU", focus: "Prioritization, safety, and bedside judgment" },
  { id: "hemodynamics", label: "Hemodynamics", focus: "Preload, afterload, perfusion, and shock patterns" },
  { id: "vent-abg", label: "Ventilator and ABG", focus: "Gas exchange, acid-base logic, and ventilator reasoning" },
  { id: "pharmacology", label: "Pharmacology", focus: "Common ICU vasoactive, sedative, and analgesic concepts" },
  { id: "airway", label: "Airway and Anesthesia Basics", focus: "Preparation, risk recognition, and anesthesia mindset" },
  { id: "behavioral", label: "Behavioral", focus: "Self-awareness, grit, accountability, and motivation" },
  { id: "leadership", label: "Leadership and Conflict", focus: "Teamwork, advocacy, communication, and composure" },
  { id: "why-crna", label: "Why CRNA?", focus: "Purpose, role clarity, and readiness for the path" },
  { id: "program-fit", label: "Program Fit", focus: "Mission alignment, contribution, and thoughtful curiosity" },
];

const questions = [
  {
    id: "icu-deteriorating-intubated",
    category: "clinical-icu",
    question: "Walk me through how you assess a deteriorating intubated ICU patient.",
    testing: "A structured, calm approach to unstable patients, including airway, breathing, circulation, and team communication.",
    answer:
      "I would first verify the immediate basics: patient appearance, monitor waveform, pulse, oxygen saturation, ventilator connection, airway position, and whether the tube is patent. I would call for help early while moving through airway, breathing, and circulation. For breathing, I would assess chest rise, breath sounds, peak pressures, secretions, compliance, pneumothorax risk, and recent ABG or end tidal data if available. For circulation, I would review rhythm, blood pressure trend, perfusion, access, drips, volume status, bleeding, sepsis, and bedside data. I would communicate concise updates to the team, anticipate orders, and reassess after each intervention.",
    keyPoints: [
      "Start with airway, breathing, circulation and verify the tube, circuit, and patient connection.",
      "Call for help early and communicate concise changes to the team.",
      "Use trends, monitor waveform quality, ventilator pressures, breath sounds, rhythm, perfusion, and recent labs.",
      "Reassess after each intervention and avoid anchoring on one cause.",
    ],
    redFlags: [
      "Jumping straight to a medication before checking the airway and equipment.",
      "Ignoring monitor artifact, waveform quality, or recent changes.",
      "Describing isolated tasks without prioritization or team communication.",
    ],
  },
  {
    id: "icu-septic-shock",
    category: "clinical-icu",
    question: "A septic shock patient remains hypotensive after initial fluids. What are you thinking through?",
    testing: "Whether you can balance perfusion, source control, vasopressor logic, volume responsiveness, and reassessment.",
    answer:
      "I would think in terms of perfusion and responsiveness rather than giving endless fluid. I would reassess MAP, mental status, urine output, lactate trend, skin perfusion, lung exam, echo or dynamic measures if available, and whether the patient is fluid responsive. If hypotension persists, I would anticipate vasopressor support such as norepinephrine per protocol while confirming source control, antibiotics, cultures, access, and ongoing losses. I would watch for evolving respiratory failure, myocardial dysfunction, dysrhythmias, and end-organ perfusion.",
    keyPoints: [
      "Reassess perfusion endpoints such as MAP, mentation, urine output, lactate trend, and skin signs.",
      "Avoid unlimited fluids when the patient is not fluid responsive.",
      "Connect hypotension to vasodilation, relative hypovolemia, myocardial dysfunction, and source control.",
      "Mention norepinephrine as a common first-line vasopressor concept while respecting protocols.",
    ],
    redFlags: [
      "Saying you would keep bolusing without reassessment.",
      "Leaving out antibiotics, cultures, or source control.",
      "Treating a number without discussing perfusion.",
    ],
  },
  {
    id: "icu-subtle-change",
    category: "clinical-icu",
    question: "Tell me about a time you recognized a subtle change in a critical patient.",
    testing: "Clinical vigilance, escalation, humility, and the ability to translate bedside pattern recognition into action.",
    answer:
      "A strong answer should use a real example and keep the focus on the patient. I noticed a shift from the patient's baseline, checked objective data, reassessed at the bedside, and escalated with a concise concern. I described what I saw, what I was worried about, and what I needed. After the intervention, I followed the response and reflected on how early recognition and clear communication changed the outcome.",
    keyPoints: [
      "Use a specific ICU example with a clear baseline change.",
      "Show bedside reassessment before escalation.",
      "Use concise communication such as concern, relevant data, and requested action.",
      "Close with outcome and lesson learned.",
    ],
    redFlags: [
      "Telling a story that makes other clinicians look careless.",
      "Skipping your assessment and only saying you notified someone.",
      "Using vague hero language instead of concrete actions.",
    ],
  },
  {
    id: "hemo-preload-afterload-contractility",
    category: "hemodynamics",
    question: "Explain preload, afterload, and contractility in practical ICU terms.",
    testing: "Foundational cardiovascular understanding and the ability to teach complex physiology clearly.",
    answer:
      "Preload is the stretch or filling before contraction, often reflected clinically by volume status and venous return. Afterload is the resistance the ventricle ejects against, so systemic vascular resistance and blood pressure are part of that picture. Contractility is the strength of the heart muscle independent of loading conditions. At the bedside, I connect these concepts to data: filling pressures, cardiac output, blood pressure, echo findings, perfusion, urine output, lactate, and how the patient responds to fluids, vasopressors, or inotropes.",
    keyPoints: [
      "Define preload as filling or stretch before contraction.",
      "Define afterload as resistance to ejection.",
      "Define contractility as pump strength independent of loading.",
      "Connect the concepts to bedside perfusion, trends, and response to therapy.",
    ],
    redFlags: [
      "Using memorized definitions without clinical application.",
      "Equating one number with the whole patient.",
      "Confusing vasopressors, fluids, and inotropes as interchangeable.",
    ],
  },
  {
    id: "hemo-cardiogenic-pattern",
    category: "hemodynamics",
    question: "Interpret this pattern: CVP 14, PCWP 20, cardiac index 1.8, SVR 1600, and hypotension.",
    testing: "Pattern recognition, shock differentiation, and whether you avoid harmful reflex interventions.",
    answer:
      "That pattern suggests elevated filling pressures, low forward flow, and high afterload, which is concerning for a cardiogenic shock or poor pump state depending on the full clinical picture. I would not reflexively give fluid without more assessment. I would look at rhythm, ischemia, echo, valve function, ventilator effects, oxygenation, urine output, lactate, perfusion, and current vasoactive medications. I would anticipate a discussion about inotropy, afterload reduction if appropriate, or mechanical support depending on the patient's condition and team plan.",
    keyPoints: [
      "Recognize high filling pressures with low cardiac index and high SVR.",
      "Name cardiogenic shock or poor pump function as a concern.",
      "Avoid reflex fluid boluses without assessing responsiveness and congestion.",
      "Bring in rhythm, ischemia, echo, perfusion, lactate, and team-directed support.",
    ],
    redFlags: [
      "Calling it septic shock without reconciling the high SVR and filling pressures.",
      "Treating the CVP or wedge alone.",
      "Recommending a fixed medication plan without context.",
    ],
  },
  {
    id: "hemo-low-svr",
    category: "hemodynamics",
    question: "What does low SVR with normal or high cardiac output suggest?",
    testing: "Distributive physiology and ability to connect numbers to the patient.",
    answer:
      "Low SVR with normal or high cardiac output suggests a distributive pattern, with sepsis being a common ICU cause. The patient may be vasodilated and relatively hypovolemic even if the cardiac output is preserved early. I would correlate with temperature, infection source, lactate, perfusion, capillary refill, urine output, vasopressor needs, sedation, liver disease, spinal injury, or anaphylaxis depending on the presentation.",
    keyPoints: [
      "Identify distributive shock physiology.",
      "Name sepsis as a common ICU cause while keeping a differential.",
      "Discuss vasodilation, relative hypovolemia, and perfusion endpoints.",
      "Correlate numbers with the clinical picture and trends.",
    ],
    redFlags: [
      "Equating high cardiac output with adequate tissue perfusion.",
      "Ignoring causes other than sepsis.",
      "Not mentioning clinical correlation.",
    ],
  },
  {
    id: "abg-respiratory-acidosis",
    category: "vent-abg",
    question: "Interpret this ABG: pH 7.25, PaCO2 60, HCO3 26, PaO2 70 on FiO2 50 percent.",
    testing: "Basic acid-base interpretation, ventilator thinking, and oxygenation awareness.",
    answer:
      "This is an acidemia with an elevated PaCO2 and near-normal bicarbonate, so I would call it a primary respiratory acidosis, likely acute or not fully compensated. PaO2 70 on FiO2 50 percent also raises concern for impaired oxygenation. I would assess the patient and ventilator together: airway patency, sedation, synchrony, minute ventilation, respiratory rate, tidal volume within lung-protective goals, dead space, compliance, secretions, pneumothorax, and underlying lung disease. Changes would be made with the team and reassessed by patient response and repeat gas if indicated.",
    keyPoints: [
      "Identify acidemia and primary respiratory acidosis.",
      "Notice the oxygenation concern on FiO2 50 percent.",
      "Separate ventilation issues from oxygenation issues.",
      "Assess airway patency, minute ventilation, synchrony, compliance, and lung pathology.",
    ],
    redFlags: [
      "Calling it metabolic acidosis because pH is low.",
      "Only changing FiO2 for a CO2 problem.",
      "Making ventilator changes without assessing the patient.",
    ],
  },
  {
    id: "vent-oxygenation-ventilation",
    category: "vent-abg",
    question: "Which ventilator changes mainly affect oxygenation, and which affect ventilation?",
    testing: "Whether you understand practical ventilator levers instead of memorizing settings.",
    answer:
      "Oxygenation is mainly influenced by FiO2 and PEEP, along with recruitment, lung mechanics, positioning, and the underlying disease process. Ventilation is driven by minute ventilation, so respiratory rate and tidal volume are major levers, while dead space and patient effort also matter. I would always think about lung-protective limits, plateau pressure, driving pressure, hemodynamics, and patient synchrony before asking for or responding to changes.",
    keyPoints: [
      "Link FiO2 and PEEP primarily with oxygenation.",
      "Link respiratory rate, tidal volume, and minute ventilation with CO2 clearance.",
      "Mention patient synchrony, dead space, and lung mechanics.",
      "Respect lung-protective ventilation and hemodynamic effects.",
    ],
    redFlags: [
      "Saying FiO2 fixes hypercapnia.",
      "Ignoring PEEP's hemodynamic effects.",
      "Forgetting lung-protective limits.",
    ],
  },
  {
    id: "vent-avoid-high-tidal-volume",
    category: "vent-abg",
    question: "Why do we avoid high tidal volumes in many critically ill ventilated patients?",
    testing: "Understanding of lung-protective ventilation and harm prevention.",
    answer:
      "High tidal volumes can overdistend alveoli and contribute to ventilator-induced lung injury, especially in ARDS or reduced compliance states. Lung-protective ventilation uses lower tidal volumes based on predicted body weight and monitors plateau pressure, driving pressure, oxygenation, ventilation, and patient comfort. The answer is not just a number; it is balancing gas exchange with avoiding additional lung injury.",
    keyPoints: [
      "Describe overdistension and ventilator-induced lung injury.",
      "Mention ARDS or low compliance patients as higher-risk contexts.",
      "Tie tidal volume to predicted body weight rather than actual body weight.",
      "Balance gas exchange goals with harm reduction.",
    ],
    redFlags: [
      "Using actual body weight for lung-protective tidal volume.",
      "Ignoring plateau pressure or driving pressure.",
      "Saying lower tidal volume is always simple without considering CO2, pH, and synchrony.",
    ],
  },
  {
    id: "pharm-pressor-compare",
    category: "pharmacology",
    question: "Compare norepinephrine, phenylephrine, and vasopressin at a high level.",
    testing: "Core ICU pharmacology, receptor logic, and safe clinical language.",
    answer:
      "Norepinephrine has strong alpha activity with some beta effect, so it increases vascular tone and can support pressure with modest inotropy. Phenylephrine is primarily alpha agonist activity, so it increases SVR but may reduce heart rate or cardiac output in some patients. Vasopressin works through V1-mediated vasoconstriction and is often used as an adjunct in vasodilatory shock. I would choose language based on the clinical goal, rhythm, cardiac function, volume status, and protocol.",
    keyPoints: [
      "Norepinephrine: strong alpha effect with some beta activity.",
      "Phenylephrine: primarily alpha activity and may reduce heart rate or cardiac output.",
      "Vasopressin: V1-mediated vasoconstriction, often adjunctive in vasodilatory shock.",
      "Tie medication choice to rhythm, cardiac function, volume status, and protocol.",
    ],
    redFlags: [
      "Calling all vasopressors the same.",
      "Ignoring cardiac output when increasing SVR.",
      "Giving specific dosing advice as if it applies to every patient.",
    ],
  },
  {
    id: "pharm-sedation-hypotension",
    category: "pharmacology",
    question: "What sedative would concern you in a hypotensive ICU patient and why?",
    testing: "Medication risk awareness and ability to individualize sedation decisions.",
    answer:
      "Propofol would be one sedative I would think carefully about because it can cause vasodilation and myocardial depression, which may worsen hypotension. That does not mean it is never used; it means I would consider dose, hemodynamics, goals, airway status, analgesia needs, and alternatives. Dexmedetomidine can also cause bradycardia and hypotension, and benzodiazepines can accumulate and contribute to delirium, so the best choice depends on the patient and sedation goal.",
    keyPoints: [
      "Identify propofol as a common concern in hypotension.",
      "Explain vasodilation and possible myocardial depression.",
      "Mention alternatives have risks too, such as dexmedetomidine bradycardia or benzodiazepine accumulation.",
      "Frame sedation around goals, analgesia, airway, and hemodynamics.",
    ],
    redFlags: [
      "Saying one sedative is always right or always wrong.",
      "Forgetting analgesia when discussing sedation.",
      "Ignoring bradycardia, hypotension, delirium, or accumulation.",
    ],
  },
  {
    id: "pharm-propofol-dex",
    category: "pharmacology",
    question: "How would you compare propofol and dexmedetomidine for ICU sedation?",
    testing: "Sedation pharmacology, side effect awareness, and patient-centered reasoning.",
    answer:
      "Propofol is rapid on and off and is useful when deeper titratable sedation is needed, but it can cause hypotension, respiratory depression, hypertriglyceridemia, and rare infusion syndrome. Dexmedetomidine provides lighter, cooperative sedation with minimal respiratory depression, but bradycardia and hypotension can be limiting. Neither is an analgesic substitute, so I would also assess pain control and the daily sedation goal.",
    keyPoints: [
      "Propofol is rapid and titratable but can worsen hypotension and respiratory depression.",
      "Dexmedetomidine supports lighter cooperative sedation with minimal respiratory depression.",
      "Dexmedetomidine can cause bradycardia and hypotension.",
      "Assess analgesia and sedation goals separately.",
    ],
    redFlags: [
      "Treating sedation and analgesia as the same thing.",
      "Leaving out major hemodynamic effects.",
      "Reciting facts without saying how they guide bedside decisions.",
    ],
  },
  {
    id: "airway-difficult-prep",
    category: "airway",
    question: "How would you prepare for a potentially difficult airway?",
    testing: "Preparation mindset, backup planning, communication, and respect for airway risk.",
    answer:
      "I would start by identifying risk factors from history, exam, imaging, previous airway notes, oxygenation, aspiration risk, hemodynamics, and urgency. Preparation means having the right people, plan A and backup plans, suction, oxygenation strategy, positioning, monitoring, IV access, drugs, airway equipment, and a clear plan for failed oxygenation or failed intubation. I would communicate the plan out loud and keep the patient safe by prioritizing oxygenation.",
    keyPoints: [
      "Review prior airway history, anatomy, aspiration risk, oxygenation, hemodynamics, and urgency.",
      "Prepare equipment, suction, positioning, monitoring, IV access, drugs, and help.",
      "Name plan A and backup plans before starting.",
      "Prioritize oxygenation and clear team communication.",
    ],
    redFlags: [
      "Only naming a laryngoscope without a backup plan.",
      "Ignoring aspiration, hemodynamics, or oxygenation reserve.",
      "Sounding overconfident about a high-risk airway.",
    ],
  },
  {
    id: "airway-rsi-concept",
    category: "airway",
    question: "What is rapid sequence induction trying to accomplish conceptually?",
    testing: "Basic anesthesia safety principles without pretending to be an anesthesia provider yet.",
    answer:
      "Conceptually, rapid sequence induction is designed to secure the airway while reducing aspiration risk in patients who are not ideal candidates for routine mask ventilation and induction. The priorities are preparation, preoxygenation, appropriate induction and neuromuscular blockade by the anesthesia team, minimizing the unprotected airway interval, and having backup plans ready. I would answer at the concept level and defer exact technique and medication dosing to provider training and institutional practice.",
    keyPoints: [
      "Explain the goal of reducing aspiration risk while securing the airway.",
      "Mention preparation, preoxygenation, and minimizing the unprotected airway interval.",
      "Discuss backup plans and team readiness.",
      "Avoid claiming independent anesthesia technique beyond current training.",
    ],
    redFlags: [
      "Giving a rigid recipe or dosing plan.",
      "Ignoring preoxygenation and backup planning.",
      "Sounding casual about aspiration or failed airway risk.",
    ],
  },
  {
    id: "airway-icu-to-anesthesia",
    category: "airway",
    question: "What ICU information helps an anesthesia team plan for a case?",
    testing: "Whether you see the anesthesia plan as integrated physiology, not just an airway event.",
    answer:
      "Helpful ICU information includes diagnosis, trajectory, airway history, ventilator settings and recent ABGs, hemodynamics, vasoactive drips, access, allergies, NPO or aspiration risk, labs, anticoagulation, renal and hepatic function, neuro status, infection concerns, code status, family context, and what has changed recently. I would present this concisely with the problem list and current stability.",
    keyPoints: [
      "Include airway history, ventilator settings, ABGs, and oxygenation.",
      "Include hemodynamics, drips, access, and recent instability.",
      "Include labs, allergies, anticoagulation, organ function, and aspiration risk.",
      "Present data concisely with trajectory and current stability.",
    ],
    redFlags: [
      "Only discussing the airway.",
      "Ignoring vasoactive medications or access.",
      "Dumping data without prioritizing what matters.",
    ],
  },
  {
    id: "behavioral-tell-me-about-yourself",
    category: "behavioral",
    question: "Tell me about yourself.",
    testing: "Your ability to frame your story with maturity, purpose, and relevance to nurse anesthesia.",
    answer:
      "I would give a focused professional snapshot: my ICU background, the experiences that shaped my interest in high-acuity physiology, the habits that prepared me for graduate study, and the personal qualities I will bring to the cohort. I would keep it human but concise, then bridge naturally to why nurse anesthesia is the next step.",
    keyPoints: [
      "Keep the answer professional, concise, and personal enough to be memorable.",
      "Connect ICU experience to physiology, vigilance, and patient safety.",
      "Show readiness through habits, reflection, and growth.",
      "Bridge to CRNA motivation without reciting your resume.",
    ],
    redFlags: [
      "Giving a full life history without a clear point.",
      "Sounding rehearsed but emotionally flat.",
      "Only talking about lifestyle, money, or schedule.",
    ],
  },
  {
    id: "behavioral-mistake",
    category: "behavioral",
    question: "Describe a mistake or failure and what you learned.",
    testing: "Accountability, reflection, emotional maturity, and safe practice habits.",
    answer:
      "A strong answer takes ownership without being reckless. I would choose a real but appropriate example, state what happened, what my responsibility was, how I corrected it, who I communicated with, and what system or habit I changed afterward. I would end with the lesson: accountability means acting early, learning thoroughly, and preventing recurrence.",
    keyPoints: [
      "Choose an appropriate real example and take ownership.",
      "Explain corrective action and communication.",
      "Describe a specific habit or system change.",
      "End with a lesson tied to safer practice.",
    ],
    redFlags: [
      "Blaming others.",
      "Choosing an unsafe example without insight.",
      "Saying you cannot think of a mistake.",
    ],
  },
  {
    id: "behavioral-stress",
    category: "behavioral",
    question: "How do you handle stress during high-pressure clinical situations?",
    testing: "Composure, prioritization, and whether your coping strategies are mature and reliable.",
    answer:
      "In the moment, I slow down enough to prioritize: what is the immediate threat, who needs to know, and what can I do next. I use structured communication, ask for help early, and focus on the patient rather than the emotion of the room. Afterward, I debrief, identify what I can improve, and use healthy routines outside work so stress does not accumulate unchecked.",
    keyPoints: [
      "Prioritize immediate patient threats.",
      "Use structured communication and ask for help early.",
      "Stay task-focused without ignoring the team.",
      "Mention reflection, debriefing, and healthy long-term coping.",
    ],
    redFlags: [
      "Claiming you do not get stressed.",
      "Using coping strategies that sound avoidant or unhealthy.",
      "Leaving out patient safety and team communication.",
    ],
  },
  {
    id: "leadership-conflict-physician",
    category: "leadership",
    question: "Tell me about a conflict with a physician or teammate.",
    testing: "Respectful advocacy, conflict resolution, and communication under pressure.",
    answer:
      "I would use STAR and choose a conflict about patient care or communication, not personality. I would describe the situation, my concern, how I used objective data and respectful language, how I listened to the other person's perspective, and how we reached a plan. The key lesson is that advocacy and collaboration can happen at the same time.",
    keyPoints: [
      "Frame the conflict around patient care, not personality.",
      "Use objective data and respectful language.",
      "Show listening and collaboration.",
      "End with patient outcome and what changed in your communication.",
    ],
    redFlags: [
      "Making the other person the villain.",
      "Being passive when patient safety is at stake.",
      "Using sarcasm or gossip as the story's energy.",
    ],
  },
  {
    id: "leadership-charge-pressure",
    category: "leadership",
    question: "Describe a time you led under pressure.",
    testing: "Situational awareness, delegation, communication, and calm leadership.",
    answer:
      "I would describe a specific shift or event where priorities were competing. I identified the sickest patient or highest risk issue, delegated clearly, communicated updates, and kept reassessing. I also made sure the team had what they needed and followed up afterward. Leadership was not about control; it was about clarity, safety, and supporting the team.",
    keyPoints: [
      "Use a specific high-pressure example.",
      "Prioritize risk and delegate clearly.",
      "Communicate updates and reassess.",
      "Show team support and follow-up.",
    ],
    redFlags: [
      "Equating leadership with doing everything yourself.",
      "Ignoring delegation or closed-loop communication.",
      "Only focusing on being busy.",
    ],
  },
  {
    id: "leadership-advocacy",
    category: "leadership",
    question: "Tell me about a time you advocated for patient safety.",
    testing: "Moral courage, bedside assessment, and escalation with professionalism.",
    answer:
      "A strong answer starts with what you noticed, what risk you identified, and how you escalated. I would include the objective data, the language I used, who I involved, and how I continued to monitor the patient. I would close with the outcome and a lesson about respectful persistence when something feels unsafe.",
    keyPoints: [
      "Name the safety risk clearly.",
      "Use objective data and direct communication.",
      "Escalate through appropriate channels if needed.",
      "Close with outcome, follow-up, and lesson learned.",
    ],
    redFlags: [
      "Being vague about the risk.",
      "Equating advocacy with being confrontational.",
      "Failing to mention follow-up after escalation.",
    ],
  },
  {
    id: "why-crna-not-np-pa",
    category: "why-crna",
    question: "Why CRNA instead of NP, PA, or another advanced practice path?",
    testing: "Role clarity and intrinsic motivation for nurse anesthesia specifically.",
    answer:
      "Nurse anesthesia fits the part of ICU nursing that most energizes me: applied physiology, pharmacology, moment-to-moment vigilance, airway and hemodynamic management, and being fully present for a patient during a vulnerable time. I respect other advanced practice roles, but CRNA practice aligns most directly with how I think, what I enjoy learning, and the kind of responsibility I am preparing for.",
    keyPoints: [
      "Show respect for other roles.",
      "Name anesthesia-specific interests: physiology, pharmacology, vigilance, airway, hemodynamics.",
      "Connect motivation to ICU experiences.",
      "Show readiness for responsibility rather than prestige.",
    ],
    redFlags: [
      "Comparing roles in a dismissive way.",
      "Focusing on salary, autonomy, or schedule first.",
      "Sounding like you chose CRNA only because you dislike bedside nursing.",
    ],
  },
  {
    id: "why-crna-meaning",
    category: "why-crna",
    question: "What does the CRNA role mean to you?",
    testing: "Professional identity, respect for the role, and patient-centered motivation.",
    answer:
      "To me, the CRNA role combines clinical precision with deep trust. Patients meet anesthesia providers at moments when they may feel vulnerable, and the CRNA has to integrate physiology, pharmacology, technical skill, communication, and vigilance. The role means accepting responsibility for preparation, continuous assessment, and calm presence during critical moments.",
    keyPoints: [
      "Describe clinical precision and patient trust.",
      "Mention physiology, pharmacology, technical skill, and vigilance.",
      "Center patient vulnerability and safety.",
      "Show humility about the responsibility.",
    ],
    redFlags: [
      "Only talking about independence.",
      "Using generic helping language without anesthesia specifics.",
      "Sounding entitled to the role before training.",
    ],
  },
  {
    id: "why-crna-rigor",
    category: "why-crna",
    question: "How have you prepared for the rigor of CRNA school?",
    testing: "Realistic self-assessment, study discipline, support systems, and resilience.",
    answer:
      "I have prepared by strengthening my ICU foundation, reviewing physiology and pharmacology, seeking feedback, taking challenging assignments, and building consistent study habits. I also understand that CRNA school requires sacrifice, humility, and sustained focus, so I have planned support at home, finances, time management, and wellness routines. My goal is not just to get accepted; it is to be ready to learn at the level the program expects.",
    keyPoints: [
      "Show academic and clinical preparation.",
      "Mention feedback, challenging assignments, and study discipline.",
      "Address support systems, finances, time management, and wellness.",
      "Express humility and readiness to learn.",
    ],
    redFlags: [
      "Underestimating the workload.",
      "Only saying you are a hard worker.",
      "Skipping support systems or realistic planning.",
    ],
  },
  {
    id: "program-fit-why-this-program",
    category: "program-fit",
    question: "Why this CRNA program?",
    testing: "Whether you did program-specific research and can connect your goals to their training environment.",
    answer:
      "I would answer with specifics from the program: curriculum structure, clinical sites, simulation, faculty interests, mission, board preparation, mentorship, and student culture. Then I would connect those features to how I learn and the kind of nurse anesthetist I want to become. I would avoid generic praise and make it clear I understand what makes the program distinct.",
    keyPoints: [
      "Use program-specific details from current research.",
      "Connect curriculum, clinical experience, simulation, mentorship, or mission to your goals.",
      "Show fit with how you learn and contribute.",
      "Avoid generic statements that could apply anywhere.",
    ],
    redFlags: [
      "Only mentioning location or convenience.",
      "Giving compliments without specifics.",
      "Not knowing basic program structure.",
    ],
  },
  {
    id: "program-fit-contribute",
    category: "program-fit",
    question: "How will you contribute to your cohort?",
    testing: "Self-awareness, teamwork, and the ability to support peers without arrogance.",
    answer:
      "I would contribute by bringing preparation, steady communication, humility, and a team-first mindset from the ICU. I learn well with others, share resources, ask for help early, and try to create psychological safety during stressful learning moments. I also know that a strong cohort requires reliability, accountability, and respect for different backgrounds.",
    keyPoints: [
      "Name specific strengths you bring to a cohort.",
      "Show humility and willingness to ask for help.",
      "Mention reliability, accountability, and respect.",
      "Avoid sounding competitive or self-important.",
    ],
    redFlags: [
      "Saying you will be the top student or leader without humility.",
      "Only focusing on what you will receive from classmates.",
      "Ignoring the stress of graduate training.",
    ],
  },
  {
    id: "program-fit-questions-faculty",
    category: "program-fit",
    question: "What questions would you ask faculty at the end of the interview?",
    testing: "Curiosity, preparation, and whether you understand what matters in training.",
    answer:
      "I would ask questions that show I am evaluating fit thoughtfully, such as how students are supported during the transition into clinical, what habits distinguish successful students, how feedback is delivered, how simulation prepares students for high-acuity cases, and what faculty hope graduates carry into practice. I would avoid questions that are easily answered on the website.",
    keyPoints: [
      "Ask questions about learning, support, feedback, simulation, and clinical transition.",
      "Show that you researched basic program facts already.",
      "Keep questions professional and fit-focused.",
      "Avoid questions that sound like you are negotiating effort.",
    ],
    redFlags: [
      "Asking only about time off, breaks, or convenience.",
      "Asking questions clearly answered on the website.",
      "Having no questions.",
    ],
  },
];

const dailyTasks = [
  {
    id: "clinical",
    label: "Practice two clinical questions",
    detail: "Use bedside reasoning out loud and name what you would reassess.",
  },
  {
    id: "behavioral",
    label: "Build one STAR answer",
    detail: "Keep it specific, accountable, and under two minutes.",
  },
  {
    id: "flashcards",
    label: "Review one flashcard deck",
    detail: "Focus on ranges, patterns, and why the numbers matter.",
  },
  {
    id: "why-crna",
    label: "Rehearse the CRNA motivation answer",
    detail: "Connect ICU experience to anesthesia-specific responsibility.",
  },
  {
    id: "program",
    label: "Add one program-fit note",
    detail: "Tie a real program detail to your learning style or goals.",
  },
];

const prepChecklist = [
  { id: "documents", label: "Documents ready", detail: "CV, certifications, ID, schedule, directions, and backup copies." },
  { id: "outfit", label: "Outfit ready", detail: "Professional, comfortable, steamed, and tested sitting down." },
  { id: "program-research", label: "Program research done", detail: "Mission, curriculum, clinical sites, simulation, faculty, and recent updates." },
  { id: "personal-story", label: "Personal story practiced", detail: "One-minute version and two-minute version." },
  { id: "why-crna", label: '"Why CRNA?" answer ready', detail: "Specific to anesthesia, patient trust, physiology, and readiness." },
  { id: "faculty-questions", label: "Questions to ask faculty ready", detail: "Learning support, feedback, clinical transition, and successful student habits." },
  { id: "logistics", label: "Logistics checked", detail: "Travel time, parking, technology, water, meal timing, and sleep plan." },
];

const flashcards = [
  {
    id: "hemo-map",
    deck: "Hemodynamic Values",
    front: "MAP: what does it represent and what interview number is commonly discussed?",
    back:
      "Mean arterial pressure estimates average perfusion pressure across the cardiac cycle. A MAP around 65 mm Hg is commonly discussed as an initial resuscitation target in many shock conversations, but goals are individualized.",
  },
  {
    id: "hemo-co-ci",
    deck: "Hemodynamic Values",
    front: "Normal cardiac output and cardiac index ranges",
    back:
      "Typical adult cardiac output is roughly 4 to 8 L/min. Cardiac index is often about 2.5 to 4.0 L/min/m2. Trend, body size, clinical condition, and perfusion matter more than a single number.",
  },
  {
    id: "hemo-cvp-wedge",
    deck: "Hemodynamic Values",
    front: "CVP and PCWP: what do they reflect?",
    back:
      "CVP estimates right-sided filling pressure. PCWP estimates left atrial pressure and left-sided filling under specific assumptions. Both are context-dependent and should be interpreted with trends, exam, echo, ventilation, and perfusion.",
  },
  {
    id: "hemo-svr",
    deck: "Hemodynamic Values",
    front: "Typical SVR range and meaning",
    back:
      "SVR is often cited around 800 to 1200 dynes sec/cm5. High SVR suggests vasoconstriction or increased afterload; low SVR suggests vasodilation, such as distributive shock. Always pair it with cardiac output and perfusion.",
  },
  {
    id: "shock-hypovolemic",
    deck: "Shock Types",
    front: "Hypovolemic shock hemodynamic pattern",
    back:
      "Low preload, low stroke volume or cardiac output, compensatory high SVR, tachycardia, cool clammy skin, and poor perfusion. Think bleeding, dehydration, third spacing, or fluid losses.",
  },
  {
    id: "shock-cardiogenic",
    deck: "Shock Types",
    front: "Cardiogenic shock hemodynamic pattern",
    back:
      "Poor pump function: low cardiac output or index, often high filling pressures, high SVR, pulmonary congestion, cool extremities, low urine output, and possible dysrhythmia or ischemia.",
  },
  {
    id: "shock-distributive",
    deck: "Shock Types",
    front: "Distributive shock hemodynamic pattern",
    back:
      "Vasodilation with low SVR. Cardiac output may be high early, especially in sepsis. Think sepsis, anaphylaxis, neurogenic shock, adrenal crisis, or medication effects.",
  },
  {
    id: "shock-obstructive",
    deck: "Shock Types",
    front: "Obstructive shock examples",
    back:
      "Blood cannot fill or eject normally because of a mechanical obstruction. Classic examples include pulmonary embolism, cardiac tamponade, and tension pneumothorax.",
  },
  {
    id: "pressor-norepi",
    deck: "Vasopressors",
    front: "Norepinephrine high-level profile",
    back:
      "Strong alpha-1 vasoconstriction with some beta-1 activity. Commonly discussed as first-line for septic or vasodilatory shock. Watch perfusion, rhythm, ischemia, access, and response.",
  },
  {
    id: "pressor-phenyl",
    deck: "Vasopressors",
    front: "Phenylephrine high-level profile",
    back:
      "Primarily alpha-1 vasoconstriction. It raises SVR and blood pressure but may cause reflex bradycardia and may reduce cardiac output in some patients.",
  },
  {
    id: "pressor-vasopressin",
    deck: "Vasopressors",
    front: "Vasopressin high-level profile",
    back:
      "V1 receptor vasoconstriction, often used as an adjunct in vasodilatory shock. It is not titrated the same way as catecholamines in many protocols.",
  },
  {
    id: "pressor-epi",
    deck: "Vasopressors",
    front: "Epinephrine high-level profile",
    back:
      "Alpha and beta activity. Supports heart rate, contractility, and vasoconstriction depending on dose and context. Can increase lactate, cause tachyarrhythmias, and increase myocardial oxygen demand.",
  },
  {
    id: "sed-propofol",
    deck: "Sedation Meds",
    front: "Propofol: key ICU interview points",
    back:
      "Rapid, titratable sedative-hypnotic with no analgesia. Watch hypotension, respiratory depression, triglycerides, and rare propofol infusion syndrome risk with prolonged high-dose use.",
  },
  {
    id: "sed-dex",
    deck: "Sedation Meds",
    front: "Dexmedetomidine: key ICU interview points",
    back:
      "Alpha-2 agonist associated with cooperative sedation and minimal respiratory depression. Watch bradycardia and hypotension. It is not an analgesic replacement.",
  },
  {
    id: "sed-midaz",
    deck: "Sedation Meds",
    front: "Midazolam: key ICU interview points",
    back:
      "Benzodiazepine with anxiolysis, amnesia, and sedation. Watch respiratory depression, delirium risk, tolerance, and prolonged sedation, especially with organ dysfunction.",
  },
  {
    id: "sed-ketamine",
    deck: "Sedation Meds",
    front: "Ketamine: key ICU interview points",
    back:
      "NMDA antagonist with analgesic and dissociative properties. It may preserve respiratory drive better than some agents and can support sympathetic tone, but watch secretions, emergence reactions, and context-specific cautions.",
  },
  {
    id: "abg-normal",
    deck: "ABGs",
    front: "Common adult ABG reference ranges",
    back:
      "pH 7.35 to 7.45, PaCO2 35 to 45 mm Hg, HCO3 22 to 26 mEq/L, PaO2 roughly 80 to 100 mm Hg on room air in a healthy adult. Interpret with age, FiO2, condition, and trend.",
  },
  {
    id: "abg-resp-acidosis",
    deck: "ABGs",
    front: "Respiratory acidosis pattern",
    back:
      "Low pH with high PaCO2. Think hypoventilation, airway obstruction, oversedation, COPD exacerbation, neuromuscular weakness, or ventilator mismatch.",
  },
  {
    id: "abg-metabolic-acidosis",
    deck: "ABGs",
    front: "Metabolic acidosis pattern",
    back:
      "Low pH with low HCO3. Think lactic acidosis, renal failure, DKA, diarrhea, toxins, or shock. Assess compensation, anion gap, lactate, glucose, renal function, and perfusion.",
  },
  {
    id: "abg-oxygenation",
    deck: "ABGs",
    front: "PaO2 70 on FiO2 50 percent: why it matters",
    back:
      "The PaO2 may look only mildly low, but on FiO2 50 percent it suggests impaired oxygen transfer. Think shunt, V/Q mismatch, atelectasis, ARDS, edema, pneumonia, or ventilator issues.",
  },
  {
    id: "vent-oxygenation",
    deck: "Ventilator Basics",
    front: "Vent settings that mainly affect oxygenation",
    back:
      "FiO2 and PEEP are the main oxygenation levers. Also think recruitment, positioning, secretion clearance, lung disease, hemodynamics, and avoiding harm from excessive pressures.",
  },
  {
    id: "vent-ventilation",
    deck: "Ventilator Basics",
    front: "Vent settings that mainly affect ventilation",
    back:
      "Minute ventilation drives CO2 clearance. Respiratory rate and tidal volume are the main settings, but dead space, synchrony, airway resistance, and patient effort matter.",
  },
  {
    id: "vent-plateau",
    deck: "Ventilator Basics",
    front: "Plateau pressure interview target",
    back:
      "Plateau pressure reflects alveolar pressure during an inspiratory pause. In ARDS discussions, keeping plateau pressure at or below 30 cm H2O is a common lung-protective target.",
  },
  {
    id: "vent-autopeep",
    deck: "Ventilator Basics",
    front: "Auto-PEEP clues",
    back:
      "Air trapping from incomplete exhalation. Clues include high peak pressures, difficulty triggering, hypotension, expiratory flow not returning to baseline, COPD/asthma, high RR, or short expiratory time.",
  },
  {
    id: "scenario-ards",
    deck: "Common ICU Scenarios",
    front: "ARDS: what interview themes matter?",
    back:
      "Impaired oxygenation, diffuse inflammatory lung injury, low compliance, lung-protective ventilation, PEEP strategy, prone positioning when appropriate, conservative fluids after shock, and close team coordination.",
  },
  {
    id: "scenario-dka",
    deck: "Common ICU Scenarios",
    front: "DKA: key priorities",
    back:
      "Volume resuscitation, insulin therapy, potassium monitoring and replacement, glucose trend, anion gap closure, precipitating cause, neuro status, and avoiding rapid unsafe shifts.",
  },
  {
    id: "scenario-neuro",
    deck: "Common ICU Scenarios",
    front: "Neuro ICU: why ventilation and hemodynamics matter",
    back:
      "Oxygenation, CO2, blood pressure, sedation, temperature, glucose, and positioning can affect cerebral physiology. Avoid hypotension and hypoxia, and communicate neuro baseline and changes.",
  },
  {
    id: "scenario-extubation",
    deck: "Common ICU Scenarios",
    front: "Extubation readiness themes",
    back:
      "Improving cause of respiratory failure, oxygenation, ventilation, mental status, cough and secretion handling, hemodynamic stability, spontaneous breathing trial results, and airway risk.",
  },
];

const resourceLinks = [
  { label: "AANA: Become a CRNA", url: "https://www.aana.com/about-us/about-crnas/become-a-crna/" },
  { label: "AANA: CRNA Fact Sheet", url: "https://www.aana.com/about-us/about-crnas/crna-fact-sheet/" },
  { label: "ARDSNet Ventilation", url: "https://www.ardsnet.org/tools.shtml" },
  { label: "NCBI: Mechanical Ventilation", url: "https://www.ncbi.nlm.nih.gov/books/NBK539742/" },
  { label: "SCCM ICU Guidelines", url: "https://www.sccm.org/clinical-resources/guidelines" },
];

const categoryById = Object.fromEntries(categories.map((category) => [category.id, category]));
const questionById = Object.fromEntries(questions.map((question) => [question.id, question]));
const decks = ["All", ...Array.from(new Set(flashcards.map((card) => card.deck)))];
const storageKey = "crnaInterviewPrepState.v1";

let state = loadState();
let currentView = "dashboard";
let questionFilter = "all";
let questionSearch = "";
let flashDeck = "All";
let flashIndex = 0;
let flashFlipped = false;
let mockSession = null;
let timerInterval = null;
let starDraft = {
  title: "",
  situation: "",
  task: "",
  action: "",
  result: "",
  lesson: "",
};

document.addEventListener("DOMContentLoaded", () => {
  ensureDailyState();
  bindEvents();
  render();

  const hashView = window.location.hash.replace("#", "");
  if (hashView && document.getElementById(hashView)) {
    showView(hashView);
  }
});

function bindEvents() {
  document.querySelector(".primary-nav").addEventListener("click", (event) => {
    const button = event.target.closest("[data-view]");
    if (!button) return;
    showView(button.dataset.view);
  });

  document.addEventListener("click", handleClick);
  document.addEventListener("change", handleChange);
  document.addEventListener("input", handleInput);
  document.addEventListener("keydown", handleKeydown);
  document.querySelector(".mobile-menu-toggle")?.addEventListener("click", () => {
    document.querySelector(".primary-nav")?.classList.toggle("open");
  });
  window.addEventListener("hashchange", () => {
    const next = window.location.hash.replace("#", "") || "dashboard";
    if (document.getElementById(next)) showView(next, false);
  });
}

function handleClick(event) {
  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) return;

  const { action, id, value } = actionTarget.dataset;

  if (action === "toggle-question") {
    const card = actionTarget.closest(".question-card");
    if (card) card.classList.toggle("expanded");
    return;
  }

  if (action === "goto") {
    showView(value);
  }

  if (action === "set-filter") {
    questionFilter = value;
    renderQuestions();
  }

  if (action === "toggle-practiced") {
    toggleListValue(state.practiced, id);
    if (state.practiced.includes(id)) recordPractice();
    saveState();
    render();
    showToast(state.practiced.includes(id) ? '✓ Marked as practiced' : 'Unmarked');
  }

  if (action === "toggle-weak") {
    toggleListValue(state.weak, id);
    saveState();
    render();
    showToast(state.weak.includes(id) ? '⚠ Marked as weak area' : 'Removed weak mark');
  }

  if (action === "toggle-favorite") {
    toggleListValue(state.favorites, id);
    saveState();
    render();
    showToast(state.favorites.includes(id) ? '★ Saved to favorites' : 'Removed from favorites');
  }

  if (action === "start-mock") {
    const select = document.getElementById("mockCount");
    startMock(Number(select?.value || 12));
  }

  if (action === "quick-mock") {
    startMock(Number(value || 12));
  }

  if (action === "mock-feedback") {
    showMockFeedback();
  }

  if (action === "mock-next") {
    nextMockQuestion();
  }

  if (action === "mock-end") {
    endMock(false);
  }

  if (action === "speak-answer") {
    startSpeechAnswer();
  }

  if (action === "save-star") {
    saveStarStory();
  }

  if (action === "load-story") {
    loadStarStory(id);
  }

  if (action === "delete-story") {
    state.starStories = state.starStories.filter((story) => story.id !== id);
    saveState();
    renderStar();
  }

  if (action === "set-flash-deck") {
    flashDeck = value;
    flashIndex = 0;
    flashFlipped = false;
    renderFlashcards();
  }

  if (action === "flip-card") {
    flashFlipped = !flashFlipped;
    renderFlashcards();
  }

  if (action === "next-card") {
    moveFlashcard(1);
  }

  if (action === "prev-card") {
    moveFlashcard(-1);
  }

  if (action === "mark-flash-known") {
    markFlashcard("known");
    showToast('✓ Marked as known');
  }

  if (action === "mark-flash-review") {
    markFlashcard("review");
    showToast('⚠ Marked for review');
  }
}

function handleChange(event) {
  const daily = event.target.closest("[data-daily]");
  if (daily) {
    ensureDailyState();
    state.daily.items[daily.dataset.daily] = daily.checked;
    if (daily.checked) recordPractice();
    saveState();
    renderDashboard();
    renderTracker();
    return;
  }

  const prep = event.target.closest("[data-prep]");
  if (prep) {
    state.interviewPrep[prep.dataset.prep] = prep.checked;
    saveState();
    renderInterview();
    return;
  }
}

function handleInput(event) {
  if (event.target.id === "questionSearch") {
    questionSearch = event.target.value;
    renderQuestions();
    return;
  }

  if (event.target.id === "mockAnswer" && mockSession) {
    mockSession.answers[mockSession.index] = event.target.value;
    return;
  }

  if (event.target.matches("[data-star-field]")) {
    starDraft[event.target.dataset.starField] = event.target.value;
    renderStarPreview();
    return;
  }

  if (event.target.matches("[data-notes-field]")) {
    state[event.target.dataset.notesField] = event.target.value;
    saveState();
  }
}

function showView(viewId, pushHash = true) {
  currentView = viewId;
  document.querySelectorAll('.view').forEach((view) => {
    if (view.id === viewId) {
      view.classList.add('active');
      view.style.animation = 'none';
      view.offsetHeight; // trigger reflow
      view.style.animation = '';
    } else {
      view.classList.remove('active');
    }
  });
  document.querySelectorAll('.nav-item').forEach((item) => {
    item.classList.toggle('active', item.dataset.view === viewId);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (pushHash) {
    history.replaceState(null, '', `#${viewId}`);
  }
  // Close mobile menu
  document.querySelector('.primary-nav')?.classList.remove('open');
}

function render() {
  ensureDailyState();
  renderDashboard();
  renderQuestions();
  renderMock();
  renderStar();
  renderFlashcards();
  renderTracker();
  renderInterview();
  showView(currentView, false);
}

function renderDashboard() {
  const root = document.getElementById("dashboard");
  const stats = getStats();
  const dailyCompleted = dailyTasks.filter((task) => state.daily.items[task.id]).length;
  const nextWeak = state.weak
    .slice(0, 3)
    .map((id) => questionById[id])
    .filter(Boolean);

  root.innerHTML = `
    <div class="hero">
      <div class="hero-content">
        <p class="hero-kicker">Confident, calm, clinically grounded</p>
        <h2 id="dashboard-title">Pratima's CRNA Interview Prep</h2>
        <p>Practice clinical reasoning, emotional intelligence, leadership, and program-fit answers with a serious but encouraging structure.</p>
        <div class="hero-actions">
          <button class="button primary" type="button" data-action="quick-mock" data-value="12">Start mock interview</button>
          <button class="button secondary" type="button" data-action="goto" data-value="questions">Review question bank</button>
        </div>
      </div>
    </div>

    <div class="dashboard-grid">
      <div class="grid">
        <div class="stats-row">
          ${renderStatCard("Practiced", `${stats.practiced}/${stats.total}`, `${stats.practicePercent}% complete`)}
          ${renderStatCard("Weak Areas", state.weak.length, "Marked for review")}
          ${renderStatCard("Favorites", state.favorites.length, "Saved questions")}
          ${renderStatCard("Streak", `${state.streak || 0}`, "Practice days")}
        </div>

        <div class="panel">
          <div class="panel-heading">
            <div>
              <h3>Progress Overview</h3>
              <p class="tiny">Question bank completion</p>
            </div>
            <span class="status-pill done">${stats.practicePercent}%</span>
          </div>
          <div class="progress-track" aria-label="Overall progress">
            <div class="progress-fill" style="width:${stats.practicePercent}%"></div>
          </div>
          <div class="grid three" style="margin-top:14px">
            ${renderMiniMetric("Clinical practiced", stats.clinicalPracticed, "Clinical and science questions")}
            ${renderMiniMetric("Behavioral practiced", stats.behavioralPracticed, "Behavioral and fit questions")}
            ${renderMiniMetric("Flashcards known", state.flashKnown.length, "Marked known")}
          </div>
        </div>

        <div class="panel">
          <div class="panel-heading">
            <div>
              <h3>Practice Next</h3>
              <p class="tiny">A short list pulled from weak areas and high-yield categories</p>
            </div>
          </div>
          ${
            nextWeak.length
              ? `<ul class="compact-list">${nextWeak.map((question) => `<li><strong>${escapeHtml(question.question)}</strong><p class="tiny">${escapeHtml(categoryById[question.category].label)}</p></li>`).join("")}</ul>`
              : `<div class="empty-state"><p>Mark weak questions as you practice and this area will become a focused review list.</p></div>`
          }
        </div>
      </div>

      <aside class="panel">
        <div class="panel-heading">
          <div>
            <h3>Daily Checklist</h3>
            <p class="tiny">${dailyCompleted}/${dailyTasks.length} complete today</p>
          </div>
        </div>
        <div class="checklist">
          ${dailyTasks.map(renderDailyTask).join("")}
        </div>
      </aside>
    </div>
  `;
  animateStatCounters();
}

function renderQuestions() {
  const root = document.getElementById("questions");
  const normalizedSearch = normalize(questionSearch);
  const filtered = questions.filter((question) => {
    const matchesCategory = questionFilter === "all" || question.category === questionFilter;
    const haystack = normalize(
      `${question.question} ${question.testing} ${question.answer} ${categoryById[question.category].label}`
    );
    return matchesCategory && (!normalizedSearch || haystack.includes(normalizedSearch));
  });

  root.innerHTML = `
    <div class="section-heading">
      <div>
        <h2 id="questions-title">Question Bank</h2>
        <p>Clinical, behavioral, leadership, CRNA motivation, and program-fit questions with structured answer guidance.</p>
      </div>
      <div class="section-actions">
        <button class="button primary" type="button" data-action="quick-mock" data-value="12">Start mock</button>
      </div>
    </div>

    <div class="question-layout">
      <aside class="panel sticky-panel">
        <div class="panel-heading">
          <h3>Categories</h3>
        </div>
        <div class="category-strip">
          <button class="chip ${questionFilter === "all" ? "active" : ""}" type="button" data-action="set-filter" data-value="all">All</button>
          ${categories
            .map(
              (category) => `
                <button class="chip ${questionFilter === category.id ? "active" : ""}" type="button" data-action="set-filter" data-value="${category.id}">
                  ${escapeHtml(category.label)}
                </button>
              `
            )
            .join("")}
        </div>
        <label class="field-stack" style="margin-top:16px">
          <span>Search questions</span>
          <input id="questionSearch" type="search" value="${escapeHtml(questionSearch)}" placeholder="ABG, conflict, vasopressor..." />
        </label>
      </aside>

      <div class="question-list">
        ${
          filtered.length
            ? filtered.map(renderQuestionCard).join("")
            : `<div class="empty-state"><p>No questions match the current filters.</p></div>`
        }
      </div>
    </div>
  `;
}

function renderQuestionCard(question) {
  const practiced = state.practiced.includes(question.id);
  const weak = state.weak.includes(question.id);
  const favorite = state.favorites.includes(question.id);

  return `
    <article class="question-card" data-question-id="${question.id}">
      <div class="question-topline">
        <div>
          <span class="category-label">${escapeHtml(categoryById[question.category].label)}</span>
          <h3>${escapeHtml(question.question)}</h3>
        </div>
        <div style="display:flex;gap:8px;align-items:start;flex-shrink:0">
          <div class="tag-row">
            ${practiced ? '<span class="status-pill done">Practiced</span>' : ''}
            ${weak ? '<span class="status-pill weak">Weak</span>' : ''}
            ${favorite ? '<span class="status-pill favorite">Favorite</span>' : ''}
          </div>
          <button class="question-toggle" type="button" data-action="toggle-question" data-id="${question.id}" aria-label="Expand answer">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>

      <div class="question-details">
        <div class="detail-grid">
          ${renderDetailBlock("What They Are Testing", question.testing, true)}
          ${renderDetailBlock("Strong Sample Answer", question.answer, true)}
          ${renderListBlock("Key Points To Mention", question.keyPoints)}
          ${renderListBlock("Red Flags To Avoid", question.redFlags)}
        </div>

        <div class="card-actions">
          <button class="button ghost" type="button" data-action="toggle-practiced" data-id="${question.id}">
            ${practiced ? 'Unmark practiced' : 'Mark practiced'}
          </button>
          <button class="button ${weak ? 'warning' : 'ghost'}" type="button" data-action="toggle-weak" data-id="${question.id}">
            ${weak ? 'Remove weak mark' : 'Mark weak area'}
          </button>
          <button class="button ${favorite ? 'danger' : 'ghost'}" type="button" data-action="toggle-favorite" data-id="${question.id}">
            ${favorite ? 'Remove favorite' : 'Save favorite'}
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderMock() {
  const root = document.getElementById("mock");

  if (!mockSession) {
    root.innerHTML = `
      <div class="section-heading">
        <div>
          <h2 id="mock-title">Mock Interview Mode</h2>
          <p>Randomized clinical and behavioral questions with a timer, typed or spoken answers, and immediate feedback.</p>
        </div>
      </div>

      <div class="mock-shell">
        <section class="panel">
          <div class="panel-heading">
            <div>
              <h3>Session Setup</h3>
              <p class="tiny">Clinical questions are mixed with behavioral and program-fit prompts.</p>
            </div>
          </div>
          <div class="grid two">
            <label class="field-stack">
              <span>Number of questions</span>
              <select id="mockCount">
                <option value="10">10 questions</option>
                <option value="12" selected>12 questions</option>
                <option value="15">15 questions</option>
              </select>
            </label>
            <div class="panel" style="box-shadow:none">
              <strong>Recommended rhythm</strong>
              <p class="tiny">Answer out loud first, then type the strongest version and check the feedback.</p>
            </div>
          </div>
          <div class="hero-actions">
            <button class="button primary" type="button" data-action="start-mock">Start mock interview</button>
          </div>
        </section>

        <aside class="panel">
          <div class="panel-heading">
            <h3>Session Mix</h3>
          </div>
          <ul class="compact-list">
            <li><strong>Clinical reasoning</strong><p class="tiny">ICU, hemodynamics, ventilator, pharmacology, and airway basics.</p></li>
            <li><strong>Behavioral maturity</strong><p class="tiny">STAR stories, accountability, stress, leadership, and conflict.</p></li>
            <li><strong>Program fit</strong><p class="tiny">Why CRNA, why this program, and questions for faculty.</p></li>
          </ul>
        </aside>
      </div>
    `;
    return;
  }

  if (mockSession.complete) {
    const answered = Object.keys(mockSession.feedback).length;
    const scores = Object.values(mockSession.feedback).map((item) => item.score);
    const average = scores.length ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length) : 0;

    root.innerHTML = `
      <div class="section-heading">
        <div>
          <h2 id="mock-title">Mock Interview Complete</h2>
          <p>${answered}/${mockSession.questions.length} answers reviewed. Average feedback score: ${average}%.</p>
        </div>
        <div class="section-actions">
          <button class="button primary" type="button" data-action="quick-mock" data-value="${mockSession.questions.length}">Start new session</button>
          <button class="button ghost" type="button" data-action="mock-end">Close session</button>
        </div>
      </div>
      <div class="grid two">
        ${mockSession.questions
          .map((question, index) => {
            const feedback = mockSession.feedback[index];
            return `
              <article class="question-card">
                <span class="category-label">${escapeHtml(categoryById[question.category].label)}</span>
                <h3>${escapeHtml(question.question)}</h3>
                ${
                  feedback
                    ? `<p class="feedback-score">${feedback.score}%</p><p class="muted">${escapeHtml(feedback.summary)}</p>`
                    : `<p class="muted">Skipped or not reviewed.</p>`
                }
              </article>
            `;
          })
          .join("")}
      </div>
    `;
    return;
  }

  const question = mockSession.questions[mockSession.index];
  const answer = mockSession.answers[mockSession.index] || "";
  const feedback = mockSession.feedback[mockSession.index];

  root.innerHTML = `
    <div class="section-heading">
      <div>
        <h2 id="mock-title">Mock Interview</h2>
        <p>Question ${mockSession.index + 1} of ${mockSession.questions.length}</p>
      </div>
      <div class="section-actions">
        <span id="mockTimer" class="timer">${formatElapsed(Date.now() - mockSession.startedAt)}</span>
        <button class="button ghost" type="button" data-action="mock-end">End</button>
      </div>
    </div>

    <div class="mock-shell">
      <section class="panel">
        <span class="category-label">${escapeHtml(categoryById[question.category].label)}</span>
        <h3 class="mock-question">${escapeHtml(question.question)}</h3>
        <p class="muted"><strong>Testing:</strong> ${escapeHtml(question.testing)}</p>
        <label class="field-stack" style="margin-top:16px">
          <span>Your answer</span>
          <textarea id="mockAnswer" placeholder="Type the answer you would give in the interview.">${escapeHtml(answer)}</textarea>
        </label>
        <div class="mock-controls" style="margin-top:12px">
          <button class="button ghost" type="button" data-action="speak-answer">${speechSupported() ? "Speak answer" : "Speech unavailable"}</button>
          <button class="button primary" type="button" data-action="mock-feedback">Show feedback</button>
          <button class="button ghost" type="button" data-action="mock-next">${mockSession.index === mockSession.questions.length - 1 ? "Finish session" : "Next question"}</button>
        </div>

        ${feedback ? renderFeedback(question, feedback) : ""}
      </section>

      <aside class="panel">
        <div class="panel-heading">
          <h3>Answer Targets</h3>
        </div>
        <ul class="compact-list">
          ${question.keyPoints.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
        </ul>
      </aside>
    </div>
  `;
}

function renderFeedback(question, feedback) {
  return `
    <div class="feedback-box">
      <span class="feedback-score">${feedback.score}%</span>
      <p><strong>${escapeHtml(feedback.summary)}</strong></p>
      ${
        feedback.missing.length
          ? `<div><strong>Add next time:</strong><ul>${feedback.missing.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul></div>`
          : `<p>Strong coverage of the core points. Now polish delivery, pacing, and confidence.</p>`
      }
      <div>
        <strong>Sample answer:</strong>
        <p class="answer-text">${escapeHtml(question.answer)}</p>
      </div>
      <div>
        <strong>Red flags:</strong>
        <ul>${question.redFlags.map((flag) => `<li>${escapeHtml(flag)}</li>`).join("")}</ul>
      </div>
    </div>
  `;
}

function renderStar() {
  const root = document.getElementById("star");
  root.innerHTML = `
    <div class="section-heading">
      <div>
        <h2 id="star-title">STAR Answer Builder</h2>
        <p>Build behavioral answers that are specific, accountable, and easy to deliver under pressure.</p>
      </div>
      <div class="section-actions">
        <button class="button primary" type="button" data-action="save-star">Save story</button>
      </div>
    </div>

    <div class="builder-grid">
      <section class="panel">
        <div class="field-stack">
          ${renderStarField("title", "Story title", "Conflict with resident, first rapid response, difficult family conversation", "input")}
          ${renderStarField("situation", "Situation", "Where were you, what was happening, and why did it matter?")}
          ${renderStarField("task", "Task", "What was your responsibility?")}
          ${renderStarField("action", "Action", "What did you do, communicate, assess, escalate, or change?")}
          ${renderStarField("result", "Result", "What happened because of your action? Use patient, team, or learning outcomes.")}
          ${renderStarField("lesson", "Lesson learned", "What did it teach you about CRNA school, safety, teamwork, or growth?")}
        </div>
      </section>

      <aside class="builder-preview">
        <h3>Answer Preview</h3>
        <div id="starPreview" class="star-output"></div>
      </aside>
    </div>

    <div class="grid two" style="margin-top:18px">
      <section class="panel">
        <div class="panel-heading">
          <h3>Behavioral Prompts To Build</h3>
        </div>
        <ul class="compact-list">
          <li>Tell me about a time you received hard feedback.</li>
          <li>Tell me about a time you advocated for safety.</li>
          <li>Tell me about a conflict with a teammate.</li>
          <li>Tell me about a time you handled failure.</li>
          <li>Tell me about a time you led during a stressful shift.</li>
        </ul>
      </section>
      <section class="panel">
        <div class="panel-heading">
          <h3>Saved Stories</h3>
        </div>
        <div class="saved-stories">
          ${
            state.starStories.length
              ? state.starStories.map(renderSavedStory).join("")
              : `<div class="empty-state"><p>Saved STAR stories will appear here.</p></div>`
          }
        </div>
      </section>
    </div>
  `;
  renderStarPreview();
}

function renderStarField(field, label, placeholder, type = "textarea") {
  const value = escapeHtml(starDraft[field] || "");
  if (type === "input") {
    return `
      <label>
        ${label}
        <input data-star-field="${field}" type="text" value="${value}" placeholder="${escapeHtml(placeholder)}" />
      </label>
    `;
  }

  return `
    <label>
      ${label}
      <span>${placeholder}</span>
      <textarea data-star-field="${field}">${value}</textarea>
    </label>
  `;
}

function renderStarPreview() {
  const preview = document.getElementById("starPreview");
  if (!preview) return;

  const filled = ["situation", "task", "action", "result", "lesson"].some((field) => starDraft[field].trim());
  if (!filled) {
    preview.innerHTML = `<p class="muted">Your answer will build here as you write.</p>`;
    return;
  }

  preview.innerHTML = `
    ${renderPreviewLine("Situation", starDraft.situation)}
    ${renderPreviewLine("Task", starDraft.task)}
    ${renderPreviewLine("Action", starDraft.action)}
    ${renderPreviewLine("Result", starDraft.result)}
    ${renderPreviewLine("Lesson", starDraft.lesson)}
  `;
}

function renderFlashcards() {
  const root = document.getElementById("flashcards");
  const cards = getCurrentFlashcards();
  if (flashIndex >= cards.length) flashIndex = 0;
  const card = cards[flashIndex];
  const known = card ? state.flashKnown.includes(card.id) : false;
  const review = card ? state.flashReview.includes(card.id) : false;

  root.innerHTML = `
    <div class="section-heading">
      <div>
        <h2 id="flashcards-title">Flashcards</h2>
        <p>High-yield ICU and anesthesia-adjacent concepts for interview practice.</p>
      </div>
    </div>

    <div class="flashcard-shell">
      <section>
        <div class="flash-meta">
          <span class="category-label">${escapeHtml(flashDeck)}</span>
          <span class="status-pill">${cards.length ? `${flashIndex + 1}/${cards.length}` : "0/0"}</span>
          ${known ? `<span class="status-pill done">Known</span>` : ""}
          ${review ? `<span class="status-pill weak">Review</span>` : ""}
        </div>
        ${
          card
            ? `
              <div class="flashcard-scene">
                <div class="flashcard ${flashFlipped ? 'flipped' : ''}">
                  <div class="flashcard-inner">
                    <div class="flashcard-face front">
                      <h3>${escapeHtml(card.front)}</h3>
                      <p class="muted">Click flip to reveal the answer.</p>
                    </div>
                    <div class="flashcard-face back">
                      <h3>Answer</h3>
                      <div class="flashcard-answer">${escapeHtml(card.back)}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flash-controls" style="margin-top:14px">
                <button class="button ghost" type="button" data-action="prev-card">Previous</button>
                <button class="button primary" type="button" data-action="flip-card">${flashFlipped ? "Hide answer" : "Flip card"}</button>
                <button class="button ghost" type="button" data-action="next-card">Next</button>
                <button class="button ghost" type="button" data-action="mark-flash-known">${known ? "Unmark known" : "Mark known"}</button>
                <button class="button warning" type="button" data-action="mark-flash-review">${review ? "Remove review" : "Needs review"}</button>
              </div>
            `
            : `<div class="empty-state"><p>No flashcards in this deck.</p></div>`
        }
      </section>

      <aside class="panel" style="box-shadow:none">
        <div class="panel-heading">
          <h3>Decks</h3>
        </div>
        <div class="category-strip">
          ${decks
            .map(
              (deck) => `
                <button class="chip ${flashDeck === deck ? "active" : ""}" type="button" data-action="set-flash-deck" data-value="${escapeHtml(deck)}">
                  ${escapeHtml(deck)}
                </button>
              `
            )
            .join("")}
        </div>
      </aside>
    </div>
  `;
}

function renderTracker() {
  const root = document.getElementById("tracker");
  const weakQuestions = state.weak.map((id) => questionById[id]).filter(Boolean);
  const favoriteQuestions = state.favorites.map((id) => questionById[id]).filter(Boolean);
  const stats = getStats();

  root.innerHTML = `
    <div class="section-heading">
      <div>
        <h2 id="tracker-title">Study Tracker</h2>
        <p>Track practiced questions, weak areas, favorites, flashcard confidence, and daily consistency.</p>
      </div>
    </div>

    <div class="tracker-grid">
      <section class="panel">
        <div class="panel-heading">
          <div>
            <h3>Category Progress</h3>
            <p class="tiny">${stats.practiced}/${stats.total} questions practiced</p>
          </div>
        </div>
        <div class="category-progress">
          ${categories.map(renderCategoryProgress).join("")}
        </div>
      </section>

      <aside class="grid">
        <section class="panel">
          <div class="panel-heading">
            <h3>Daily Streak</h3>
            <span class="status-pill done">${state.streak || 0} days</span>
          </div>
          <p class="muted">A streak updates when a daily task is checked, a question is practiced, or mock feedback is reviewed.</p>
        </section>

        <section class="panel">
          <div class="panel-heading">
            <h3>Weak Areas</h3>
          </div>
          ${renderQuestionMiniList(weakQuestions, "No weak areas marked yet.")}
        </section>

        <section class="panel">
          <div class="panel-heading">
            <h3>Favorites</h3>
          </div>
          ${renderQuestionMiniList(favoriteQuestions, "No favorites saved yet.")}
        </section>
      </aside>
    </div>
  `;
}

function renderInterview() {
  const root = document.getElementById("interview");
  const done = prepChecklist.filter((item) => state.interviewPrep[item.id]).length;
  const percent = Math.round((done / prepChecklist.length) * 100);

  root.innerHTML = `
    <div class="section-heading">
      <div>
        <h2 id="interview-title">Interview Day Prep</h2>
        <p>Final readiness checklist, program notes, faculty questions, and a focused CRNA motivation draft.</p>
      </div>
      <span class="status-pill done">${percent}% ready</span>
    </div>

    <div class="prep-grid">
      <section class="prep-card">
        <h3>Checklist</h3>
        <div class="progress-track" aria-label="Interview day prep progress" style="margin-bottom:14px">
          <div class="progress-fill" style="width:${percent}%"></div>
        </div>
        <div class="checklist">
          ${prepChecklist.map(renderPrepItem).join("")}
        </div>
      </section>

      <aside class="grid">
        <section class="prep-card">
          <h3>Program Research Notes</h3>
          <textarea data-notes-field="programNotes" placeholder="Mission, curriculum, clinical sites, simulation, faculty, student support...">${escapeHtml(state.programNotes || "")}</textarea>
        </section>

        <section class="prep-card">
          <h3>Questions To Ask Faculty</h3>
          <textarea data-notes-field="facultyQuestions" placeholder="What habits distinguish successful students? How is feedback delivered? How do students transition into clinical?">${escapeHtml(state.facultyQuestions || "")}</textarea>
        </section>

        <section class="prep-card">
          <h3>Why CRNA Draft</h3>
          <textarea data-notes-field="whyCrnaDraft" placeholder="Anesthesia-specific motivation, ICU experiences, patient trust, physiology, readiness...">${escapeHtml(state.whyCrnaDraft || "")}</textarea>
        </section>

        <section class="prep-card">
          <h3>Reference Links</h3>
          <div class="resource-links">
            ${resourceLinks.map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`).join("")}
          </div>
        </section>
      </aside>
    </div>
  `;
}

function renderStatCard(label, value, note) {
  return `
    <div class="stat-card">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(String(value))}</strong>
      <p class="tiny">${escapeHtml(note)}</p>
    </div>
  `;
}

function renderMiniMetric(label, value, note) {
  return `
    <div class="detail-block">
      <h4>${escapeHtml(label)}</h4>
      <strong>${escapeHtml(String(value))}</strong>
      <p class="tiny">${escapeHtml(note)}</p>
    </div>
  `;
}

function renderDailyTask(task) {
  const checked = state.daily.items[task.id] ? "checked" : "";
  return `
    <div class="check-row">
      <input id="daily-${task.id}" data-daily="${task.id}" type="checkbox" ${checked} />
      <div>
        <label for="daily-${task.id}">${escapeHtml(task.label)}</label>
        <p>${escapeHtml(task.detail)}</p>
      </div>
    </div>
  `;
}

function renderPrepItem(item) {
  const checked = state.interviewPrep[item.id] ? "checked" : "";
  return `
    <div class="check-row">
      <input id="prep-${item.id}" data-prep="${item.id}" type="checkbox" ${checked} />
      <div>
        <label for="prep-${item.id}">${escapeHtml(item.label)}</label>
        <p>${escapeHtml(item.detail)}</p>
      </div>
    </div>
  `;
}

function renderDetailBlock(title, content, full = false) {
  return `
    <div class="detail-block ${full ? "full" : ""}">
      <h4>${escapeHtml(title)}</h4>
      <p class="answer-text">${escapeHtml(content)}</p>
    </div>
  `;
}

function renderListBlock(title, items) {
  return `
    <div class="detail-block">
      <h4>${escapeHtml(title)}</h4>
      <ul>
        ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </div>
  `;
}

function renderSavedStory(story) {
  return `
    <article class="saved-story">
      <h4>${escapeHtml(story.title || "Untitled STAR story")}</h4>
      <p class="tiny">${escapeHtml(story.updatedAt)}</p>
      <div class="card-actions">
        <button class="button ghost" type="button" data-action="load-story" data-id="${story.id}">Load</button>
        <button class="button danger" type="button" data-action="delete-story" data-id="${story.id}">Delete</button>
      </div>
    </article>
  `;
}

function renderPreviewLine(label, value) {
  const display = value.trim() || "Add this section.";
  return `<p><strong>${label}:</strong> ${escapeHtml(display)}</p>`;
}

function renderCategoryProgress(category) {
  const categoryQuestions = questions.filter((question) => question.category === category.id);
  const practiced = categoryQuestions.filter((question) => state.practiced.includes(question.id)).length;
  const percent = categoryQuestions.length ? Math.round((practiced / categoryQuestions.length) * 100) : 0;
  return `
    <div class="progress-line">
      <header>
        <span>${escapeHtml(category.label)}</span>
        <span>${practiced}/${categoryQuestions.length}</span>
      </header>
      <div class="progress-track">
        <div class="progress-fill" style="width:${percent}%"></div>
      </div>
      <p class="tiny">${escapeHtml(category.focus)}</p>
    </div>
  `;
}

function renderQuestionMiniList(list, emptyText) {
  if (!list.length) {
    return `<div class="empty-state"><p>${escapeHtml(emptyText)}</p></div>`;
  }

  return `
    <ul class="compact-list">
      ${list
        .slice(0, 6)
        .map(
          (question) => `
            <li>
              <strong>${escapeHtml(question.question)}</strong>
              <p class="tiny">${escapeHtml(categoryById[question.category].label)}</p>
            </li>
          `
        )
        .join("")}
    </ul>
  `;
}

function getStats() {
  const total = questions.length;
  const practiced = state.practiced.length;
  const clinicalCategories = ["clinical-icu", "hemodynamics", "vent-abg", "pharmacology", "airway"];
  const behavioralCategories = ["behavioral", "leadership", "why-crna", "program-fit"];
  return {
    total,
    practiced,
    practicePercent: total ? Math.round((practiced / total) * 100) : 0,
    clinicalPracticed: questions.filter(
      (question) => clinicalCategories.includes(question.category) && state.practiced.includes(question.id)
    ).length,
    behavioralPracticed: questions.filter(
      (question) => behavioralCategories.includes(question.category) && state.practiced.includes(question.id)
    ).length,
  };
}

function startMock(count) {
  const clinicalCategories = ["clinical-icu", "hemodynamics", "vent-abg", "pharmacology", "airway"];
  const behavioralCategories = ["behavioral", "leadership", "why-crna", "program-fit"];
  const clinicalCount = Math.min(Math.ceil(count * 0.62), questions.filter((q) => clinicalCategories.includes(q.category)).length);
  const behavioralCount = count - clinicalCount;
  const clinical = takeRandom(
    questions.filter((question) => clinicalCategories.includes(question.category)),
    clinicalCount
  );
  const behavioral = takeRandom(
    questions.filter((question) => behavioralCategories.includes(question.category)),
    behavioralCount
  );
  const selected = shuffle([...clinical, ...behavioral]).slice(0, count);

  mockSession = {
    questions: selected,
    index: 0,
    startedAt: Date.now(),
    answers: {},
    feedback: {},
    complete: false,
  };

  startTimer();
  currentView = "mock";
  render();
}

function showMockFeedback() {
  if (!mockSession) return;
  const question = mockSession.questions[mockSession.index];
  const answer = mockSession.answers[mockSession.index] || document.getElementById("mockAnswer")?.value || "";
  mockSession.answers[mockSession.index] = answer;
  mockSession.feedback[mockSession.index] = buildAnswerFeedback(answer, question);

  if (!state.practiced.includes(question.id)) {
    state.practiced.push(question.id);
  }
  recordPractice();
  saveState();
  render();
}

function nextMockQuestion() {
  if (!mockSession) return;
  const answerBox = document.getElementById("mockAnswer");
  if (answerBox) {
    mockSession.answers[mockSession.index] = answerBox.value;
  }

  if (mockSession.index >= mockSession.questions.length - 1) {
    mockSession.complete = true;
    stopTimer();
  } else {
    mockSession.index += 1;
  }

  renderMock();
  startTimer();
}

function endMock(closeOnly) {
  stopTimer();
  if (closeOnly || !mockSession || mockSession.complete) {
    mockSession = null;
  } else {
    mockSession.complete = true;
  }
  render();
}

function startTimer() {
  stopTimer();
  if (!mockSession || mockSession.complete) return;
  timerInterval = window.setInterval(() => {
    const timer = document.getElementById("mockTimer");
    if (timer) timer.textContent = formatElapsed(Date.now() - mockSession.startedAt);
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    window.clearInterval(timerInterval);
    timerInterval = null;
  }
}

function buildAnswerFeedback(answer, question) {
  const normalizedAnswer = normalize(answer);
  if (!normalizedAnswer) {
    return {
      score: 0,
      summary: "Start with a clear structure, then add bedside specifics.",
      covered: [],
      missing: question.keyPoints.slice(0, 4),
    };
  }

  const covered = question.keyPoints.filter((point) => pointCovered(point, normalizedAnswer));
  const missing = question.keyPoints.filter((point) => !covered.includes(point));
  const lengthScore = Math.min(20, Math.floor(answer.trim().split(/\s+/).length / 8));
  const coverageScore = Math.round((covered.length / question.keyPoints.length) * 80);
  const score = Math.min(100, coverageScore + lengthScore);

  let summary = "Good start. Add more structure and interviewer-facing clarity.";
  if (score >= 85) summary = "Strong answer. You covered the main substance and can now polish delivery.";
  else if (score >= 65) summary = "Solid answer. A few missing details would make it interview-ready.";
  else if (score >= 40) summary = "Usable foundation. Make the reasoning more explicit and organized.";

  return {
    score,
    summary,
    covered,
    missing: missing.slice(0, 4),
  };
}

function pointCovered(point, normalizedAnswer) {
  const tokens = normalize(point)
    .split(" ")
    .filter((token) => token.length > 4 && !stopWords.has(token));
  if (!tokens.length) return false;
  const matches = tokens.filter((token) => normalizedAnswer.includes(token));
  return matches.length >= Math.min(2, tokens.length);
}

function startSpeechAnswer() {
  if (!speechSupported()) return;
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new Recognition();
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.lang = "en-US";

  const textarea = document.getElementById("mockAnswer");
  if (!textarea) return;

  const existing = textarea.value.trim();
  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map((result) => result[0].transcript)
      .join(" ");
    textarea.value = `${existing}${existing ? " " : ""}${transcript}`.trim();
    if (mockSession) mockSession.answers[mockSession.index] = textarea.value;
  };
  recognition.start();
}

function speechSupported() {
  return Boolean(window.SpeechRecognition || window.webkitSpeechRecognition);
}

function saveStarStory() {
  const hasContent = Object.values(starDraft).some((value) => value.trim());
  if (!hasContent) return;

  const now = new Date();
  const story = {
    id: `story-${now.getTime()}`,
    ...starDraft,
    title: starDraft.title.trim() || "Untitled STAR story",
    updatedAt: now.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }),
  };
  state.starStories.unshift(story);
  starDraft = {
    title: "",
    situation: "",
    task: "",
    action: "",
    result: "",
    lesson: "",
  };
  recordPractice();
  saveState();
  renderStar();
  renderDashboard();
  renderTracker();
  showToast('✓ STAR story saved');
}

function loadStarStory(id) {
  const story = state.starStories.find((item) => item.id === id);
  if (!story) return;
  starDraft = {
    title: story.title || "",
    situation: story.situation || "",
    task: story.task || "",
    action: story.action || "",
    result: story.result || "",
    lesson: story.lesson || "",
  };
  renderStar();
}

function getCurrentFlashcards() {
  return flashDeck === "All" ? flashcards : flashcards.filter((card) => card.deck === flashDeck);
}

function moveFlashcard(direction) {
  const cards = getCurrentFlashcards();
  if (!cards.length) return;
  flashIndex = (flashIndex + direction + cards.length) % cards.length;
  flashFlipped = false;
  renderFlashcards();
}

function markFlashcard(type) {
  const card = getCurrentFlashcards()[flashIndex];
  if (!card) return;

  const targetList = type === "known" ? state.flashKnown : state.flashReview;
  toggleListValue(targetList, card.id);
  if (type === "known" && state.flashKnown.includes(card.id)) {
    state.flashReview = state.flashReview.filter((id) => id !== card.id);
    recordPractice();
  }
  if (type === "review" && state.flashReview.includes(card.id)) {
    state.flashKnown = state.flashKnown.filter((id) => id !== card.id);
  }

  saveState();
  render();
}

function loadState() {
  const fallback = {
    practiced: [],
    weak: [],
    favorites: [],
    flashKnown: [],
    flashReview: [],
    starStories: [],
    interviewPrep: {},
    daily: { date: dateKey(new Date()), items: {} },
    streak: 0,
    lastPracticeDate: "",
    programNotes: "",
    facultyQuestions: "",
    whyCrnaDraft: "",
  };

  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey) || "{}");
    return {
      ...fallback,
      ...parsed,
      practiced: Array.isArray(parsed.practiced) ? parsed.practiced : [],
      weak: Array.isArray(parsed.weak) ? parsed.weak : [],
      favorites: Array.isArray(parsed.favorites) ? parsed.favorites : [],
      flashKnown: Array.isArray(parsed.flashKnown) ? parsed.flashKnown : [],
      flashReview: Array.isArray(parsed.flashReview) ? parsed.flashReview : [],
      starStories: Array.isArray(parsed.starStories) ? parsed.starStories : [],
      interviewPrep: parsed.interviewPrep || {},
      daily: parsed.daily || fallback.daily,
    };
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function ensureDailyState() {
  const today = dateKey(new Date());
  if (!state.daily || state.daily.date !== today) {
    state.daily = { date: today, items: {} };
    saveState();
  }
}

function recordPractice() {
  const today = dateKey(new Date());
  const yesterday = dateKey(new Date(Date.now() - 24 * 60 * 60 * 1000));
  if (state.lastPracticeDate === today) return;
  state.streak = state.lastPracticeDate === yesterday ? (state.streak || 0) + 1 : 1;
  state.lastPracticeDate = today;
}

function dateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function toggleListValue(list, value) {
  const index = list.indexOf(value);
  if (index >= 0) list.splice(index, 1);
  else list.push(value);
}

function takeRandom(list, count) {
  return shuffle(list).slice(0, count);
}

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function formatElapsed(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function showToast(message, duration = 2800) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('exit');
    toast.addEventListener('animationend', () => toast.remove());
  }, duration);
}

function handleKeydown(event) {
  // Flashcard navigation
  if (currentView === 'flashcards') {
    if (event.key === 'ArrowLeft') { event.preventDefault(); moveFlashcard(-1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); moveFlashcard(1); }
    if (event.key === ' ' || event.key === 'Enter') {
      if (!event.target.matches('button, input, textarea, select')) {
        event.preventDefault();
        flashFlipped = !flashFlipped;
        renderFlashcards();
      }
    }
  }
  // Mock interview Enter for feedback
  if (currentView === 'mock' && mockSession && !mockSession.complete) {
    if (event.key === 'Enter' && event.ctrlKey) {
      event.preventDefault();
      showMockFeedback();
    }
  }
}

function animateStatCounters() {
  document.querySelectorAll('.stat-card strong').forEach((el) => {
    const text = el.textContent;
    const match = text.match(/^(\d+)/);
    if (!match) return;
    const target = parseInt(match[1], 10);
    const suffix = text.replace(match[1], '');
    if (target === 0) return;
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 25));
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current + suffix;
      if (current >= target) clearInterval(interval);
    }, 30);
  });
}

const stopWords = new Set([
  "about",
  "after",
  "again",
  "against",
  "being",
  "before",
  "between",
  "clinical",
  "connect",
  "context",
  "could",
  "early",
  "every",
  "first",
  "from",
  "having",
  "include",
  "interview",
  "matter",
  "mention",
  "patient",
  "patients",
  "point",
  "question",
  "rather",
  "should",
  "their",
  "there",
  "these",
  "think",
  "through",
  "while",
  "with",
  "would",
]);

# Ethical Considerations — Co-Lingo (BMO)

**DECO3500 | Team 5 | Semester 2, 2026**  
**Focus:** Ethical evaluation of BMO's workplace-jargon explanation interface  
**Approach:** Ethical Disclaimer method, informed by Loke and Matthews (2020)

> **Design position:** Co-Lingo should make unfamiliar workplace language easier to understand **without monitoring employees, treating one cultural communication style as superior, or replacing human clarification**. A useful explanation is not automatically a trustworthy explanation.
>
> **Evidence and implementation note:** This is a critical analysis of the team's documented design direction and research, not a claim that every safeguard has been implemented or tested. Terms such as **current scope**, **proposed safeguard**, and **requires verification** are deliberately distinguished below.

## 1. Context, purpose and ethical scope

Co-Lingo addresses the difficulty that new employees, graduates and people unfamiliar with Australian workplace conventions may experience when encountering abbreviations, idioms and corporate jargon. Its BMO interface is intended to explain an unfamiliar expression in simpler terms so that the user can understand the communication and decide what to do next.

For the final project direction, the focus is **BMO's explanation interface**, not a separate phone app. **BMO is not a meeting note-taking tool.** Earlier research and prototype feedback explored ideas such as proactive listening, word capture and review features. Those ideas are *research directions*, not features that this page assumes exist in the final interface.

The ethical question is therefore broader than whether BMO can give a definition: **Who controls an explanation, who could be exposed or excluded when requesting it, and what happens if it is wrong?** Relevant stakeholders include learners, coworkers whose language is being interpreted, supervisors, organisations, interview and testing participants, and people who may not choose to interact with the system.

### Ethical intentions

1. **Comprehension, not conformity:** Help newcomers interpret workplace language without implying that their existing language or culture is deficient.
2. **Agency, not dependence:** Let users interpret, question and verify BMO's explanations rather than treating them as instructions from an authority.
3. **Support, not surveillance:** Avoid collecting or exposing workplace conversations or individual learning difficulties beyond what a demonstrated function genuinely requires.
4. **Inclusion, not stigma:** Make clarification feel like an ordinary part of workplace learning, rather than a public indicator of someone's language proficiency.
5. **Accountability, not overclaiming:** Separate confirmed prototype behaviour from suggested production safeguards and acknowledge what has not been evaluated.

## 2. Ethical framework: applying the Ethical Disclaimer method

This page **retrospectively applies** the five-stage [Ethical Disclaimer method](https://www.ethicsfordesigners.com/ethical-disclaimer) to the Co-Lingo design. It does *not* claim that the team previously conducted a formal Ethical Disclaimer workshop. The method asks designers to define the situation and stakeholders, state their intentions, imagine harmful outcomes, and explain which responsibilities they accept. Loke and Matthews (2020) support the broader educational principle that ethical reflection should be integrated with concrete interaction-design decisions rather than treated as a final checklist.

| Ethical Disclaimer step | Application to Co-Lingo | Output in this page |
| --- | --- | --- |
| **1. Describe the situation** | Newcomers encounter terms whose meaning depends on team, industry and social context. | Sections 1 and 3 |
| **2. Identify stakeholders** | Learners, coworkers, bystanders, managers, research participants and future maintainers can experience different benefits or harms. | Sections 1, 4 and 5 |
| **3. State intentions** | Increase understanding while preserving privacy, dignity, autonomy and accuracy. | Ethical intentions above |
| **4. Imagine unethical situations** | A misleading explanation causes a mistake; public assistance labels a person as less capable; workplace speech is captured without consent. | Decisions E01–E05 |
| **5. Define responsibility** | Specify design responses, unresolved risks, and evidence needed before deployment; do not promise unimplemented features. | Sections 4–8 |

The framework reveals a key tension: a feature that seems more *helpful* to one stakeholder (for example, listening automatically so a learner need not ask) can simultaneously reduce *privacy and control* for the learner and nearby coworkers. Ethical quality therefore depends on justified trade-offs, not simply maximising convenience.

## 3. Evidence informing the analysis

The team's repository contains [Round 1 interview synthesis](https://github.com/natashalim-uq/DECO3500_Co-Lingo/blob/main/research/interviews/interviewround1.md), [Round 2 interview synthesis](https://github.com/natashalim-uq/DECO3500_Co-Lingo/blob/main/research/interviews/interviewround2.md), and an [early prototype-evaluation synthesis](https://github.com/natashalim-uq/DECO3500_Co-Lingo/blob/main/evaluation/prototype-2/Protoype_Overview.md). They provide *documented themes*, not proof that an ethical safeguard has been successfully implemented.

| Documented finding or tension | Ethical implication | Relevant decision |
| --- | --- | --- |
| Interview summaries distinguish understanding individual English words from interpreting workplace-specific expressions. | A simplified definition can omit the intended action or local context. | **E01 — Accuracy and context** |
| Earlier interviews describe reluctance to ask for clarification publicly and concern about recording or manager access. | Clarification must not expose competence or become employee monitoring. | **E02 — Privacy and dignity** |
| Early prototype feedback suggests that users may not know which terms to ask about in a fast conversation, and some preferred proactive assistance. | Convenience creates a conflict with consent and the privacy of bystanders. | **E02 — Privacy and dignity** |
| Participants in the syntheses warn against framing the system as a tool only for people whose first language is not English. | A design can reproduce cultural stereotypes while claiming to be inclusive. | **E03 — Cultural fairness** |
| Round 2 summaries question the reliability of automated explanations for important workplace instructions and emphasise human help. | Users need ways to check uncertainty and seek clarification from people. | **E01 and E04** |

**Evidence integrity:** The linked files are team-produced summaries, not an independently audited dataset. Some Round 1 material is labelled **“AI-formatted”** and the prototype synthesis notes a small sample and potentially leading questions. The team must check the original consented records before presenting any summary, quote, number or AI-formatted interview as a verified empirical finding. This page deliberately avoids asserting a representative sample or a proven effect on workplace performance.

## 4. Ethical decisions, trade-offs and residual risks

### E01 — Simplification versus accuracy and contextual meaning

**People affected:** New employees, graduates, their coworkers and supervisors.  
**Competing values:** Readability and speed **versus** truthfulness, professional safety and contextual accuracy.

BMO's main benefit is explaining unfamiliar corporate jargon in accessible language. However, a phrase such as **“circle back”** may have a common meaning while still implying different responsibilities or timing in a specific workplace. Reducing it to a single definitive instruction risks misunderstanding. This is particularly consequential for tasks involving safety, policy, money or deadlines. The Round 2 synthesis directly raises inaccurate explanations and the need to verify important instructions.

**Design response (proposed specification):** Keep the **original phrase visible**, provide a **short plain-language interpretation** and, where context is known, supply **one realistic example**. Distinguish a general meaning from organisation-specific usage. Do not fabricate certainty: for ambiguous or consequential requests, BMO should prompt users to confirm the intended meaning with the relevant coworker or supervisor. If explanations are AI-generated, the interface should make that clear; an unverified generated answer must not be represented as an approved workplace policy.

**Why this trade-off:** A slightly longer but qualified answer may be less instantaneous, yet it protects the user's capacity to make an informed decision. The ethical goal is *understanding*, not blind compliance with a concise response.

**Residual risk and evidence needed:** More detail can increase cognitive load, and a general-language model may still misunderstand context. Test ambiguous expressions with users and, where relevant, compare explanations against authorised workplace meanings. **Implementation and accuracy testing remain unverified in the public prototype documentation.**

### E02 — Helpful assistance versus privacy, dignity and consent

**People affected:** Learners, speakers in the shared workplace, nearby coworkers and organisations.  
**Competing values:** Timely contextual assistance **versus** individual choice, confidentiality and psychological safety.

The documented prototype feedback exposes a genuine conflict. Proactive listening could reduce the effort of identifying jargon in a fast conversation. Yet earlier interviews express discomfort about public requests, persistent recording and employers seeing information about what a person does not understand. A microphone-enabled design could also capture people who never agreed to use Co-Lingo.

**Current scope:** The final concept centres on the **explanation interface**; this documentation does **not** establish that BMO records, transcribes, stores meeting notes or continuously listens. Such functions must not be implied in the demonstration or submission if they are absent.

**Design response (proposed safeguard):** Prefer explicit, user-initiated requests where practical. If speech input or future context awareness is explored, provide clear activation and stop controls, visible recording state, consent procedures appropriate to all affected participants, and strict data minimisation. Avoid publicly broadcasting a user's uncertainty, presenting individual query histories to managers, or using language-support interactions for employee appraisal. These are **design requirements, not claims of current implementation**.

**Why this trade-off:** Automatically detecting more jargon might make BMO faster, but it is not ethically justified if the price is unchosen observation of a workplace. Being able to decline assistance matters as much as being able to receive it.

**Residual risk and evidence needed:** Even a visible interface can make help-seeking noticeable to nearby people. Evaluate discreet and openly shared interaction scenarios and verify the actual microphone, network and storage behaviour before any public claim about privacy.

### E03 — Workplace inclusion versus cultural stereotyping and assimilation

**People affected:** International students, graduates, first-language English speakers, multilingual employees and teams.  
**Competing values:** Explaining local communication conventions **versus** cultural respect, belonging and equality.

Co-Lingo could unintentionally suggest that unfamiliarity with Australian corporate jargon is a deficiency in a person rather than a characteristic of a particular workplace culture. Treating idioms as universal rules could also reinforce one dominant way of speaking, even though the appropriateness and meaning of expressions depend on industry, relationship and setting. The interview syntheses support framing jargon assistance as useful to *all* newcomers, not only international employees.

**Design response (proposed safeguard):** Use neutral wording such as **“A common meaning in this context is…”** rather than **“The correct way to speak is…”**. Introduce BMO as a resource for anyone encountering unfamiliar workplace terminology. Avoid assumptions about a user's origin, accent, competence or intelligence. Where possible, show that multiple interpretations may be legitimate and let users challenge an explanation.

**Why this trade-off:** A highly standardised answer is easy to produce, but it can hide variation between teams and cultures. An inclusive system supports navigation of workplace norms without demanding cultural conformity.

**Residual risk and evidence needed:** The available research is concentrated in Australian workplace examples and cannot establish that explanations are appropriate across industries or cultures. Evaluate terminology and tone with people from varied linguistic backgrounds and workplaces; document disagreements rather than averaging them away.

### E04 — Convenient AI assistance versus human agency and relationships

**People affected:** Learners, colleagues, supervisors and teams.  
**Competing values:** Independent, judgement-free assistance **versus** interpersonal trust, responsibility and human judgement.

An accessible interface may make it easier to ask a question without embarrassment. However, an employer could wrongly treat BMO as a substitute for clear communication or onboarding. A worker could also follow a confidently worded explanation when the actual speaker intended something different. The Round 2 interview synthesis explicitly questions whether a robot should replace asking a coworker.

**Design response (proposed safeguard):** Present BMO as a **support tool**, not an authority on organisation-specific instructions. Use human-verification prompts when context is missing or the consequences of misunderstanding are significant. Make it clear that coworkers and supervisors remain responsible for explaining their instructions; support should not become a reason to dismiss a person's questions.

**Why this trade-off:** Fewer interruptions may be convenient, but reducing opportunities for clarification can weaken team inclusion. The design should increase confidence to participate in conversations, not discourage those conversations.

**Residual risk and evidence needed:** We have not established whether BMO improves or reduces subsequent human interaction. Future evaluation should examine whether users can explain a term in their own words and know when to confirm it with someone else.

### E05 — Fast, simple interaction versus accessibility

**People affected:** People with visual, hearing, motor, cognitive or language-access needs, including users in noisy or time-pressured workplaces.  
**Competing values:** A minimal interface and rapid response **versus** equitable access and comprehension.

A single quick explanation may suit a busy user but still exclude someone who needs more reading time, larger text, keyboard control or another mode of presentation. Voice-only communication would also exclude some users or fail in noisy environments. The team's documented requirement for speed therefore needs to be tested alongside accessibility, not used to justify omitting it.

**Design response (proposed safeguard):** Prioritise readable on-screen text; make controls identifiable and keyboard-operable; support resizing and sufficient contrast; avoid communicating meaning by colour alone; use concise, non-patronising language. Treat the **Web Content Accessibility Guidelines (WCAG) 2.2** as a relevant benchmark where the interface uses web technologies. Do not claim WCAG conformance until audited against applicable success criteria.

**Residual risk and evidence needed:** Accessibility cannot be demonstrated by appearance alone. Conduct a keyboard and screen-reader review where applicable, check comprehension with representative users, and document which criteria the final prototype meets or fails.

## 5. Research ethics and responsible data handling

### 5.1 Public documentation and participant consent

The GitHub repository is public-facing. Its research and testing summaries currently include **some participant first names and interview excerpts**. Using only a first name does not guarantee anonymity, particularly when combined with occupation or workplace context. Before final publication, the team should verify permission to publish each quotation, photograph and identifiable descriptor, and use participant codes or pseudonyms wherever appropriate. A participant's agreement to *take part* in an interview does not automatically establish agreement to *publicly publish identifiable material*.

For future interviews and evaluations, participants should know what is being collected, the purpose of the study, whether audio/images are recorded, who can access records, how withdrawal is handled, and how results will be reported. Research files should be stored in an approved, access-controlled location and public material should be appropriately de-identified. Follow relevant UQ course guidance and the University's [Human Research Ethics Procedure](https://policies.uq.edu.au/document/view-current.php?id=346); the team should not claim ethics approval unless it can substantiate it.

### 5.2 Prototype data versus a possible deployed product

The following is a **data-handling specification to verify**, not a declaration that BMO already enforces these controls:

| Data or activity | Ethical concern | Required check or proposed control |
| --- | --- | --- |
| User-entered jargon | Inputs may include names, client details or internal instructions. | Encourage non-sensitive examples; avoid unnecessary persistence; document any external services receiving input. |
| Microphone or speech input, **if present** | Bystander speech may be processed without meaningful awareness or consent. | Verify actual capability; disclose activation; obtain appropriate consent; minimise capture and retention. |
| Explanation output | An inaccurate or biased answer may be mistaken for official guidance. | Clearly distinguish general explanations from verified company policy; allow correction and human checking. |
| Lookup histories, **if implemented** | Patterns of questions could be used to infer a person's confidence or competence. | Default to privacy; restrict visibility; define a defensible retention/deletion policy; prohibit performance profiling. |
| Interview, testing and tradeshow records | Names, direct quotes or photographs may identify participants. | Confirm consent for publication; de-identify public evidence; restrict raw files to authorised researchers. |

The Australian [Privacy Principles](https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-quick-reference) offer useful benchmarks for collection minimisation, transparency, security, access and correction. Their **legal applicability depends on the organisation and processing arrangement**; this student project should not present compliance as already established. Actual infrastructure, third-party processing, data retention, deletion and access permissions must be checked before deployment.

## 6. Risk priorities and accountability

The priority levels below represent **reasoned design attention**, not measured incident probabilities.

| Priority | Risk | Responsibility accepted by the design team | Current evidence/status |
| --- | --- | --- | --- |
| **High** | Confident but contextually wrong explanation | Qualify answers, preserve original wording, direct users to human verification for high-stakes tasks. | Concern documented in Round 2; safeguards require interface verification. |
| **High** | Unwanted workplace listening or exposure of learner difficulties | Avoid implied recording; require transparent, consensual activation if audio capability exists. | Conflict identified across interviews and prototype feedback; technical behaviour unverified. |
| **High** | Public disclosure of participant identity | Audit consent, pseudonymise where needed, review public repository evidence. | First names appear in some currently published research summaries. |
| **Medium–High** | Stigmatising users or privileging one workplace culture | Use culturally neutral framing and evaluate with diverse users. | Concern supported by research themes; cross-cultural evaluation incomplete. |
| **Medium** | Over-reliance on BMO rather than conversations with people | Provide confirmation cues and position BMO as supplementary support. | Research indicates tension; real-world impact untested. |
| **Medium** | Accessibility barriers | Test keyboard, readability, contrast, screen-reader support and comprehension. | WCAG conformance not established. |

## 7. What changed in the team's thinking — and what remains uncertain

The evidence suggests an important evolution in the ethical design problem. Initial interviews emphasised private, low-pressure clarification. Early prototype testers then identified a practical weakness: in fast conversations, users might not know which unfamiliar term to ask about. This made automatic context-awareness attractive, **but also intensified concerns about recording and consent**. The final BMO interface must therefore be evaluated against both expectations rather than treating the latest suggestion as automatically the most ethical one.

Likewise, the concept moved from general language support toward explaining workplace jargon and its practical meaning. That tighter scope offers an opportunity to make responses more useful, but increases the need to avoid context-free certainty. **This page identifies these as evidence-informed design priorities; it does not claim every recommendation was implemented or causally validated by tradeshow feedback.**

### Evaluation questions and evidence required

1. **Accuracy:** Can representative newcomers correctly interpret a jargon phrase after seeing BMO's explanation? For ambiguous examples, do they recognise when human verification is needed?
2. **Dignity and privacy:** In a shared-workplace scenario, can users ask for assistance without unwanted disclosure? Do observers correctly understand whether BMO is listening or storing anything?
3. **Cultural inclusivity:** Do learners with different workplace and language backgrounds find the explanations respectful, understandable and not stereotyping?
4. **Agency:** After using BMO, do users feel equipped to ask follow-up questions of coworkers rather than relying exclusively on the interface?
5. **Accessibility:** Can users complete the core explanation flow with keyboard access and accessible presentation, where applicable?

A defensible next evaluation would use scenario-based tasks, observation, short post-task interviews, accessible interaction checks and anonymised evidence linking each issue to a design revision. **No completion counts, positive test results, or compliance outcomes are asserted here without supporting records.**

## 8. Limitations and conclusion

The ethical analysis is limited by the available evidence: interview syntheses require source and consent verification; early prototype feedback comes from a small and context-specific sample; some interview prompts may have influenced responses; and the public repository does not currently establish the implementation status of all proposed safeguards. Workplace expectations also vary across organisations. Any broader deployment would require an actual data-flow audit, an accessibility review, verified explanation quality and testing with more diverse users.

The most important ethical insight is that **making jargon understandable is not the same as making workplace communication equitable**. Co-Lingo cannot solve exclusion if coworkers continue using inaccessible language or if managers treat clarification as a sign of poor performance. BMO is most defensible when it helps people participate confidently while leaving them free to question both the system's explanations and workplace conventions. The responsible design choice is not maximum automation, but **accurate, discreet, culturally respectful support that reinforces human agency**.

## References

### Ethical-design framework and external standards

- Ethics for Designers. (n.d.). *Ethical Disclaimer* (method and five-step process). https://www.ethicsfordesigners.com/ethical-disclaimer
- Loke, L., & Matthews, B. (2020). Scaffolding of interaction design education towards ethical design thinking. In G. Melles (Ed.), *Design Thinking in Higher Education: Interdisciplinary Encounters* (pp. 165–181). Springer. https://doi.org/10.1007/978-981-15-5780-4_8
- Office of the Australian Information Commissioner. (n.d.). *Australian Privacy Principles quick reference*. https://www.oaic.gov.au/privacy/australian-privacy-principles/australian-privacy-principles-quick-reference
- The University of Queensland. (n.d.). *Human Research Ethics Procedure*. https://policies.uq.edu.au/document/view-current.php?id=346
- World Wide Web Consortium. (2024). *Web Content Accessibility Guidelines (WCAG) 2.2*. https://www.w3.org/TR/WCAG22/

### Co-Lingo team documentation (interpret with the evidence limitations above)

- Team 5. (2026). [*Interview Round 1 synthesis*](https://github.com/natashalim-uq/DECO3500_Co-Lingo/blob/main/research/interviews/interviewround1.md). Co-Lingo GitHub repository.
- Team 5. (2026). [*Interview Round 2 synthesis*](https://github.com/natashalim-uq/DECO3500_Co-Lingo/blob/main/research/interviews/interviewround2.md). Co-Lingo GitHub repository.
- Team 5. (2026). [*Early prototype evaluation synthesis*](https://github.com/natashalim-uq/DECO3500_Co-Lingo/blob/main/evaluation/prototype-2/Protoype_Overview.md). Co-Lingo GitHub repository.

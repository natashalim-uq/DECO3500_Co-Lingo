**Project:** Co-Lingo / BMO · **Domain:** Workplace onboarding and corporate jargon · **Team:** 05

> **Our ethical position:** A workplace language-support tool should make it easier to understand and participate in conversations **without turning someone's uncertainty into workplace surveillance, stigma or an excuse for colleagues to stop helping**. This page assesses both the potential benefits and the remaining risks. It is a design analysis, **not** evidence that every mitigation has been implemented or tested.

## 1. Framework: Ethical Disclaimer Canvas

We structure this review around the five prompts of the [Ethical Disclaimer Canvas](https://www.ethicsfordesigners.com/ethical-disclaimer) (Ethics for Designers): **(1) context; (2) stakeholders; (3) intentions; (4) potentially unethical situations; and (5) responsibilities.** The canvas prompts designers to consider risks from different stakeholders' positions and decide which consequences they can reasonably take responsibility for. The following is our application of those prompts to Co-Lingo; we do not claim to have completed a stakeholder workshop using the canvas.

### Context and intentions

BMO is a proposed workplace companion presented through a **physical robot's own interface**. Its focused task is to explain unfamiliar corporate jargon in plain English, using context where available. For example, *"circle back"* can be explained as *"return to this topic later with an update"*. The latest team direction **does not include a separate phone application or a meeting note-taking/to-do-list feature**. Earlier versions exploring these capabilities are documented as design iterations, not as current functionality.

The aim is not to assess language proficiency or substitute for a colleague. It is to help an employee understand a term and continue the **human** conversation. Important questions about the final build's input method, any microphone activation and data handling must be verified against the running prototype before these pages are submitted.

### Stakeholder perspectives

| Stakeholder | Potential benefit | Potential concern or unequal impact |
| --- | --- | --- |
| New employees, graduates and people using English as an additional language | More confident interpretation of unfamiliar workplace terms | Being labelled less capable; publicly exposing what they do not know |
| Coworkers and mentors | Shared understanding; less repetitive clarification | Being encouraged to send colleagues to the robot instead of communicating clearly |
| Supervisors and employers | Smoother onboarding and fewer misunderstandings | A temptation to monitor questions, infer competence, or impose use |
| Meeting participants and bystanders | Clearer communication, if used appropriately | Being listened to or recorded without meaningful consent |
| Designers and prototype testers | Evidence about real needs and responsible interaction design | Misrepresentation or publication of identifiable interview or test data |

## 2. Ethical tensions, design responses and remaining gaps

| ID | Risk and affected values | Evidence or plausible scenario | Our design response / recommendation | Remaining verification |
| --- | --- | --- | --- | --- |
| **E01 · Privacy and consent** | Privacy vs contextual awareness. A robot in a workplace could capture speech from people who did not choose to interact. | Early prototype feedback requested more context-sensitive support, while interview summaries raised concerns about recording and management visibility. [Testing evidence](https://github.com/natashalim-uq/DECO3500_Co-Lingo/blob/main/evaluation/prototype-2/Protoype_Overview.md) | Prefer deliberate, visible activation; explain exactly when microphones operate; avoid recording or storing whole meetings for a simple jargon explanation. | Not verified: whether the final implementation listens continuously, processes audio externally, logs requests, or retains transcripts. |
| **E02 · Dignity and stigma** | Inclusion vs unwanted exposure. Using the tool might publicly identify a newcomer as confused. | The [Round 1 research synthesis](https://github.com/natashalim-uq/DECO3500_Co-Lingo/blob/main/research/interviews/interviewround1.md) records concerns about asking publicly or having a robot announce a misunderstanding. | Make the language and character friendly but not childish; use neutral wording such as "What does this phrase mean?" rather than "You don't understand English." Make the interface a resource anyone can use. | Test whether the robot's visibility and any spoken responses make participants uncomfortable. |
| **E03 · Accuracy and harm** | Efficiency vs reliability. A confident but incorrect explanation might change how someone carries out a task. | The [Round 2 interview summary](https://github.com/natashalim-uq/DECO3500_Co-Lingo/blob/main/research/interviews/interviewround2.md) highlights concern about incorrect translations or misinterpreted instructions. | Explain the phrase and its likely intention, not a universal definition; show uncertainty when meaning depends on context; encourage users to confirm important, safety-related or consequential instructions with a person. | Verify output accuracy across industries and ambiguous terms; document limitations of generated content. |
| **E04 · Power imbalance** | Employee autonomy vs employer control. Company-owned technology might be mistaken for a performance-monitoring system. | Participants described concern that managers could infer language ability from support requests. [Round 1 summary](https://github.com/natashalim-uq/DECO3500_Co-Lingo/blob/main/research/interviews/interviewround1.md) | Treat use as voluntary; do not introduce employee proficiency scores, ranking or manager-facing lookup dashboards; separate any necessary diagnostics from identifiable user requests. | An actual deployment would need a written ownership, access-control and retention policy. |
| **E05 · Cultural representation** | Simplicity vs nuance. One plain-English explanation might flatten cultural, occupational or Australian expressions into an inaccurate rule. | Interview notes distinguish understanding individual words from understanding the social meaning of an expression. | Use neutral, non-stereotyping examples; acknowledge different meanings across teams and countries; provide alternative phrasings where feasible. | Test examples with newcomers from different backgrounds; avoid claiming universality from a small sample. |
| **E06 · Human relationships** | Convenience vs connection. Colleagues might stop explaining and tell someone to "ask BMO". | [Early prototype feedback](https://github.com/natashalim-uq/DECO3500_Co-Lingo/blob/main/evaluation/prototype-2/Protoype_Overview.md) shows some people instinctively ask coworkers first; the research summary also values coworker support. | Design the robot as a conversation aid, not the conversation partner of last resort. The two-person demonstration should end with colleagues talking to each other. | Observe whether using the tool changes who explains what during authentic interactions. |
| **E07 · Accessibility** | Ease for some vs exclusion of others. Audio-only, small text or complex interaction may exclude certain participants. | The user population and noisy workplace settings create varying interaction needs. | Aim for legible text, simple language, touch-friendly controls, clear status feedback and alternatives to speech-only access. | Test readability, hearing/vision accessibility and use in noisy environments; do not claim compliance without testing. |

## 3. Data lifecycle and informed participation

The **minimal-data design goal** is important because corporate jargon does not require permanent meeting records. However, *a stated design goal is not a verified technical guarantee*. Before exhibiting or publishing the final version, the team must document:

1. **Input:** Is the term typed, selected, spoken or inferred from nearby speech? Who activates listening?
2. **Processing:** Is input handled locally or sent to an external service? What information is transmitted?
3. **Storage:** Are prompts, audio, generated explanations or technical logs stored? If so, for how long and by whom?
4. **Access:** Can teammates, employers, vendors or researchers see a user's requests?
5. **Control:** How can someone stop the interaction, clear a session or decline participation?

For **research and testing**, participation should be voluntary; participants should know the study's purpose and what will be recorded, and quotations should be anonymised before publishing. Images, recordings, employer names and raw transcripts should only be uploaded when consent and permissions cover **public GitHub publication**. Some archived interview documents describe AI-assisted formatting. The team must establish which excerpts are authentic participant evidence, how they were altered, and whether they can be quoted before stating sample sizes or claiming validated findings.

## 4. Decisions and trade-offs across the design process

**Narrowing the product is itself an ethical choice.** The earlier concept explored recording meeting conversations, saving unfamiliar terms, producing recaps and using a phone companion. Those ideas could bring convenience, but they also increase the amount of sensitive workplace information captured and make the product's role harder to explain. The current narrower scope focuses on **plain-language jargon explanation through the BMO interface**, without meeting notes or a second app. This **reduces the intended data needs**, but does not establish that the implemented software is private by default.

**Public versus private assistance remains unresolved.** A friendly physical robot can make support visible and normal for a team. The same visibility can make someone self-conscious. Earlier feedback differed by situation: some valued a shared object, while others preferred to look things up discreetly. The appropriate response is not to declare one mode universally better; it is to let user testing determine whether the interface is sufficiently discreet while preserving the co-located experience.

**Explanation versus authority is another tension.** BMO can help a newcomer interpret jargon, but it cannot reliably know every company's conventions, promises or policies. A short explanation should be framed as assistance for understanding, not an instruction that overrides a supervisor, written policy or an agreed task description.

## 5. Responsibilities, limitations and next ethical review

We take responsibility for **honestly explaining the prototype's capabilities**, limiting unnecessary collection, making participation non-coercive, using participant-safe evidence, and checking whether the interaction helps people communicate. A workplace owner would have additional obligations around lawful processing, employee access, retention and monitoring; these are beyond what this proof of concept establishes.

**Before final submission:** record the actual input and data flows; inspect the running build; check all public quotations and images for consent; test with at least one person outside the team; and describe any remaining privacy or accuracy limitations. If a safeguard has not been built, state it as a **recommendation**, not an implemented feature.

### Sources

- Ethics for Designers. (n.d.). [*Ethical Disclaimer*](https://www.ethicsfordesigners.com/ethical-disclaimer). The five-step ethical review method used above.
- Loke, L., & Matthews, B. (2020). *Scaffolding of interaction design education towards ethical design thinking*. In *Design Thinking in Higher Education* (pp. 165–181). Springer. https://doi.org/10.1007/978-981-15-5780-4_8 (context for values-sensitive ethical reflection; not claimed as the method directly applied here).
- Co-Lingo Team 5. (2026). [Round 1 interview synthesis](https://github.com/natashalim-uq/DECO3500_Co-Lingo/blob/main/research/interviews/interviewround1.md); [Round 2 interview synthesis](https://github.com/natashalim-uq/DECO3500_Co-Lingo/blob/main/research/interviews/interviewround2.md); [formative prototype feedback](https://github.com/natashalim-uq/DECO3500_Co-Lingo/blob/main/evaluation/prototype-2/Protoype_Overview.md).

---

**Related pages:** [[Primary-User-Context-Research-Data-Collection-and-Analysis]] · [[Problem-and-Solution]] · [[Prototype-Access-and-Instructions]] · [[Design-Process-Overview]]

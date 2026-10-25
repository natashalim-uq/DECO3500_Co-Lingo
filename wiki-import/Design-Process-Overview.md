# Design Process Overview — Co-Lingo / BMO

**DECO3500 | Team 05 | Semester 2, 2026**  
**Repository:** [Co-Lingo](https://github.com/natashalim-uq/DECO3500_Co-Lingo)  
**Related Wiki pages:** [[Design-Journal]] · [[Ethical-Considerations]]

> **Project overview:** Co-Lingo's **BMO** is a desk-sized robot and explanation interface designed to help newcomers understand corporate jargon while workplace conversations are happening. Our journey included a real Week 8 **Duolingo-inspired Figma app prototype**, a **cardboard robot using ChatGPT as an early explanation interface**, subsequent refinement of the physical robot, and a **Week 12 tradeshow**. The final focus is the BMO companion—not a separate phone-based learning app. Continuous contextual listening, meeting recaps and multilingual modes remain **future design considerations**, not claimed prototype functionality.

## Start here: our project artefacts

| Artefact | Evidence |
| --- | --- |
| **Interactive Week 8 app** | [Original Figma Make prototype](https://www.figma.com/make/4cYE3d1leQFpmXht1OIT3T/Create-app-interface?p=f&t=9rGGHJmfjgRlRXkB-0) · [Figma screen exports](https://github.com/natashalim-uq/DECO3500_Co-Lingo/tree/main/design/figma) |
| **BMO physical prototype** | [Prototype photographs and iterations](https://github.com/natashalim-uq/DECO3500_Co-Lingo/tree/main/prototype) |
| **Research and evaluation** | [Round 1](https://github.com/natashalim-uq/DECO3500_Co-Lingo/blob/main/research/interviews/interviewround1.md) · [Round 2](https://github.com/natashalim-uq/DECO3500_Co-Lingo/blob/main/research/interviews/interviewround2.md) · [Prototype-test findings](https://github.com/natashalim-uq/DECO3500_Co-Lingo/blob/main/evaluation/prototype-2/Protoype_Overview.md) |
| **Week 12 exhibition** | [BMO posters (PDF)](https://github.com/natashalim-uq/DECO3500_Co-Lingo/blob/main/tradeshow/DECO3500%20Team%2005%20BMO%20Posters.pdf) |
| **Full design story** | [[Design-Journal](https://github.com/natashalim-uq/DECO3500_Co-Lingo/wiki/Design-Journal)] |

## Opportunity and users

Our team investigated a specific workplace communication problem: employees may understand conversational English but still misinterpret **business jargon, abbreviations and informal instructions**. A new graduate might recognise every word in “circle back after the QBR” without knowing what their colleague expects. The difficulty is social as well as linguistic. In a fast meeting, requesting repeated clarification may feel awkward, yet staying silent can undermine understanding and participation.

Our guiding question was: **How might we help workplace newcomers interpret unfamiliar corporate jargon quickly and confidently, without pulling them away from the conversation or replacing human support?** Our primary audience includes new employees and graduates, including—but not limited to—people who use English as an additional language. Colleagues and supervisors are secondary stakeholders because communication is a shared activity.

## Research and what changed our assumptions

The team's [first interview synthesis](https://github.com/natashalim-uq/DECO3500_Co-Lingo/blob/main/research/interviews/interviewround1.md) identified three recurring concerns: **context matters more than word-for-word translation**, people sometimes hesitate to ask questions in front of others, and useful help needs to be **fast enough to fit a live conversation**. The [second interview synthesis](https://github.com/natashalim-uq/DECO3500_Co-Lingo/blob/main/research/interviews/interviewround2.md) added coworkers' and supervisory perspectives: company terminology can be highly local, important explanations must be verified, and human support should remain central.

These findings challenged the assumption that more vocabulary-practice features would necessarily produce a better workplace experience. A learner needs understanding **at the moment of use**, not only a catalogue of words. The evidence is formative rather than representative: the interview files are team-created syntheses, some material is labelled AI-formatted, and the underlying records and consent should be checked before quoting individuals publicly.

## Week 1 — 
## Week 2 — 
## Week 3 —
## Week 4 — 
## Week 5 —
## Week 6 — 
## Week 7 — 

## Week 8 — Designing and testing two alternatives

We built a genuine [interactive Figma Make app](https://www.figma.com/make/4cYE3d1leQFpmXht1OIT3T/Create-app-interface?p=f&t=9rGGHJmfjgRlRXkB-0) inspired by Duolingo, substituting corporate and business topics for everyday vocabulary. Examples included **KPI, deadline, presentation, feedback, agenda, collaborate and stakeholder**. The design explored a word-of-the-day, practice activities, a vocabulary collection and progress/streak indicators.

![Figma corporate vocabulary app](https://raw.githubusercontent.com/natashalim-uq/DECO3500_Co-Lingo/main/design/figma/Prototype_Figma_Home.png)

*Figure 1. Actual Week 8 Figma app design, preserved as an explored alternative rather than the final standalone product.*

The app appeared promising for independent learning, but the team recognised a contextual mismatch: to use it mid-meeting, the worker would have to switch their attention from a live conversation to a separate screen, find the unfamiliar phrase and then catch up with colleagues. This reflected concerns in our interviews about the pace of workplace communication. **Our reason for pivoting was therefore not that the app was unusable, but that its learning-session format could compete with the very interaction we hoped to support.** This is a reasoned design judgment supported by interview themes, not a controlled comparison of the two prototypes.

At our **Week 8 second team stand-up/design exhibit**, we also demonstrated a **cardboard BMO robot** with a screen and **ChatGPT used as the early explanation interface**. Users could speak and ask for the meaning of business expressions. The cardboard prototype allowed us to assess BMO's physical presence and role without claiming full conversational intelligence. Houde and Hill (1997) explain why this is valid prototyping: *role*, *look and feel* and *implementation* can be investigated at different levels of fidelity.

![First cardboard BMO](https://github.com/natashalim-uq/DECO3500_Co-Lingo/blob/main/prototype/Prototoype1_Full.jpeg)

*Figure 2. Team-provided photo of early cardboard BMO with inserted screen (capture date to verify).*

##  Week 9 — Formative evaluation and the key pivot

The [prototype-evaluation synthesis](https://github.com/natashalim-uq/DECO3500_Co-Lingo/blob/main/evaluation/prototype-2/Protoype_Overview.md) records an important criticism associated with **Tom**: the robot still felt too much like **using a chat interface**. Other testing suggested that a workplace exchange can move so fast that people do not know which jargon to ask about until the moment has passed. This indicated that a generic translator placed inside a robot was not enough to justify BMO's presence.

We consequently focused on **BMO as an in-the-moment companion** rather than a separate learning app. The longer-term ambition is contextual understanding: with proper consent and controls, BMO might use relevant conversation context to interpret a phrase and potentially offer a short recap when requested. **That capability was proposed, not demonstrated as a reliably implemented feature.** Our earlier interviews simultaneously warned that public clarification and recording can be uncomfortable, revealing an unresolved tension between proactivity and privacy.

| Evidence | What it revealed | Design response |
| --- | --- | --- |
| Interviews: conversation is fast | App lookup may interrupt attention | Focus on short, situated assistance through BMO |
| Test feedback: robot feels like chat/translation | Physical form alone adds little contextual value | Define a stronger role for BMO within conversation |
| Interviews: embarrassment asking publicly | Assistance can stigmatise users | Explore a friendly, nonjudgemental presence and private options |
| Interviews: important instructions need checking | Jargon explanations may be ambiguous | Treat BMO as support, not a replacement for human confirmation |

## Weeks 10–11 — Refining BMO and preparing the exhibit

The subsequent design work prioritised BMO's **physical form and on-device interface**. The turquoise body, integrated screen, decorative elements and friendly facial display presented the assistant as approachable rather than intimidating. This choice responds to interviewees' concerns about appearing incompetent when asking for clarification. However, **a cute face reducing anxiety is our hypothesis, not an observed result**; some users might also find a conspicuous robot distracting. Our planned measure of success remained whether people could return to a productive discussion after asking for help.

Week 11 poster guidance emphasised that a tradeshow poster should explain the **opportunity, evidence, solution and design rationale** without becoming either a wall of academic prose or a purely promotional advertisement. We developed poster materials and a short scenario-based explanation of the robot, supported by [our full Wiki design journal](https://github.com/natashalim-uq/DECO3500_Co-Lingo/wiki) and artefact archive.

## Week 12 — Tradeshow and new questions from feedback

For the **Week 12 tradeshow**, we brought together a physical BMO, its on-screen face, a voice-based explanation demonstration and our [poster designs](https://github.com/natashalim-uq/DECO3500_Co-Lingo/tree/main/tradeshow). Team-reported conversations with tutors and visitors identified several directions for the next version: spoken replies may **interrupt group discussion**; adding **on-screen subtitles** would provide another way to follow answers; a **private earpiece** could support whispered questions and private audio replies; **multilingual support** could improve access; and BMO might eventually facilitate **group onboarding or icebreaker activities** for new workers.

![BMO at the Week 12 tradeshow](https://github.com/natashalim-uq/DECO3500_Co-Lingo/blob/main/prototype/Prototype3_WithScreenFaceSide.png)

*Figure 3. Team-provided Week 12 photo of BMO with its screen face and tradeshow display.*
<img width="960" height="1280" alt="ccf446f57fb6b731ea382683ea01338d" src="https://github.com/user-attachments/assets/986b922e-11de-4e34-9801-4fd58f3f4c97" />


The most useful critical insight is that our pivot did not remove every interruption: **a phone app can divert visual attention, while a speaking robot can divert conversational attention**. The design question therefore evolved from simply *providing an answer* to choosing **the right timing, audience and channel for that answer**. The proposed earpiece, captions, multilingual interactions, contextual monitoring and meeting recaps have **not** been represented as implemented features or validated outcomes.

##  Theory, ethics and limitations

Our work applies the course's collaborative and contextual perspective: success depends on what happens *between people*. Week 8 teaching encouraged evaluation in a realistic setting with multiple users, observing interruption, turn-taking, clarification and return to the task rather than measuring usability alone. Grudin (1994) reminds us that cooperative technologies can distribute benefits and burdens unevenly. BMO might ease clarification for one worker while affecting coworkers' privacy or the meeting's flow.

These concerns are analysed further in [[Ethical-Considerations]]. Key unresolved issues include consent for any future listening, accuracy of company-specific explanations, the possibility of public embarrassment, accessibility of speech-only responses and whether the robot supports rather than displaces human relationships. Our prototype evaluations and tradeshow feedback were formative; they **do not establish measured increases in comprehension, confidence or workplace inclusion**.

##  Contributions and next steps

Team 05 produced the Figma app, interview synthesis, physical BMO iterations, prototype demonstration, feedback analysis and tradeshow artefacts. **Individual authorship, exact meeting dates and attendance should be populated from authentic team records**, not inferred from commit counts. Weeks 1–6 are intentionally reserved in [[Design-Journal]] so other members can complete the earlier history.

For future evaluation, we would stage a realistic coworker–newcomer briefing and compare **public speech, subtitled output and private earpiece interaction**. We would study the time and attention needed for clarification, whether explanations are correct in context, and whether the interaction returns smoothly to the people involved. This matters more than adding every proposed function.

## References and evidence

- [Round 1 interview synthesis](https://github.com/natashalim-uq/DECO3500_Co-Lingo/blob/main/research/interviews/interviewround1.md); [Round 2 interview synthesis](https://github.com/natashalim-uq/DECO3500_Co-Lingo/blob/main/research/interviews/interviewround2.md); [Prototype evaluation synthesis](https://github.com/natashalim-uq/DECO3500_Co-Lingo/blob/main/evaluation/prototype-2/Protoype_Overview.md).
- Grudin, J. (1994). *Groupware and social dynamics: Eight challenges for developers*. *Communications of the ACM, 37*(1), 92–105. https://doi.org/10.1145/175222.175230
- Houde, S., & Hill, C. (1997). *What do prototypes prototype?* In *Handbook of Human-Computer Interaction* (pp. 367–381). https://creativetech.mat.ucsb.edu/readings/Prototypes_prototype.pdf
- All the prototype details: https://github.com/natashalim-uq/DECO3500_Co-Lingo/tree/main/prototype

# Co-Lingo

**DECO3500 — Social & Mobile Computing | Team 05 | Semester 2, 2026**

Meet **BMO**, a desk-sized robot companion that explains corporate jargon in plain English during workplace onboarding.

## At a glance

Co-Lingo is a social and mobile experience for people who are new to a workplace and find themselves lost in its language. Our users are not short on English. They are short on the specific phrasing a company uses, and on a low-cost way to ask about it in front of colleagues.

BMO sits on the desk during a meeting or handover, follows the conversation for context, and explains a phrase when asked, in short plain language tied to what was actually said. It is designed to hand the conversation back to the people having it, not to replace the coworker who would otherwise explain.

| Quick access | Link |
| --- | --- |
| **Try the prototype** | [Prototype and demonstration instructions](prototype/README.md) |
| **Figma design** | [Design folder](design/README.md) |
| **Research findings** | [Research synthesis](research/research-findings.md) |
| **Experience requirements** | [Requirements](requirements/experience-requirements.md) |
| **Design iterations** | [Design decisions](design/design-decisions.md) |
| **Evaluation** | [Testing summary](evaluation/findings.md) |
| **Wiki** | [Project wiki](wiki-import/Home.md) |
| **Poster and pitch** | [Tradeshow materials](tradeshow/README.md) |

## The opportunity

**Problem statement.** Unfamiliar corporate jargon limits participation even when a person is fluent in everyday English. A new graduate can understand every word of "let's circle back after the QBR and send it by EOD" and still not know what they are expected to do. Asking costs something socially, so people often stay quiet and the moment passes. Our interviews found this across both groups we spoke to: newcomers described not wanting to look unprepared in front of a manager, and a supervisor described people saying yes because they think they understood, even when they did not.

**How might we** help workplace newcomers understand unfamiliar corporate jargon quickly and confidently, so they can participate in conversations without replacing human interaction?

**Target users.** Recent graduates, new employees and workplace newcomers, including but not limited to people using English as an additional language. Secondary stakeholders are the coworkers, mentors and supervisors who currently absorb the explaining.

## What is the experience?

Two people sit at a desk during a briefing or handover, with BMO between them. The supervisor or coworker talks at normal working pace, using the abbreviations and informal instructions that any team accumulates. BMO follows the conversation so it holds the context of how a phrase was used.

When the newcomer hits something they do not understand, they ask BMO, and it answers with a short plain-English explanation of the phrase and the action it implies, reflecting what the term meant in that specific exchange rather than a dictionary definition. The newcomer then says the task back to their colleague in their own words, and the two of them confirm they mean the same thing.

The experience is mobile because the meaning of a phrase depends on the workplace and the moment it was said in, and social because it takes two people to complete: the explanation only counts if the conversation resumes.

### Key interactions

1. **A colleague speaks at working pace.** BMO is on the desk, listening for context, not interrupting.
2. **The newcomer asks about a phrase.** Low-cost and repeatable, without a person having to be asked the same thing a fifth time.
3. **BMO explains in plain language.** The meaning and the expected action, grounded in how the phrase was used in this conversation.
4. **The conversation resumes between the two people.** The newcomer restates the task and confirms it with their colleague.

## Run or explore the prototype

See [prototype instructions](prototype/README.md) for the demonstration setup, the two-person walkthrough and what is implemented versus simulated. The exhibit is a physical device plus its on-screen interface, so visitors interact with it directly rather than viewing screenshots.

## How we designed it

**Research → Requirements → Concepts → Prototype 1 → Evaluation → Refinement → Final prototype**

The project pivoted in Week 4 from an earlier fashion domain, ran three rounds of user research with eleven participants, built and tested a cardboard prototype in Week 8, and refined the form and scope after the Week 9 stand-up. The whole arc, including what we got wrong, is documented in the wiki.

- [Research and interview synthesis](research/research-findings.md)
- [Experience requirements](requirements/experience-requirements.md)
- [Evolution of design decisions](design/design-decisions.md)
- [Evaluation evidence](evaluation/findings.md)
- [Wiki: process overview](wiki-import/Design-Process-Overview.md)
- [Wiki: ethics](wiki-import/Ethical-Considerations.md)

## Repository guide

| Folder | Purpose |
| --- | --- |
| `research/` | Literature, interviews, participant-safe findings |
| `requirements/` | Evidence-linked experience requirements |
| `design/` | Concepts, low- and high-fidelity iterations, Figma references |
| `prototype/` | Code or link and demonstration instructions |
| `evaluation/` | Test methods, findings, changes |
| `evidence/` | Consented and anonymised media, plus the evidence inventory |
| `team/` | Roles, charter, contribution log |
| `tradeshow/` | A2 portrait poster, pitch, promotional media |
| `wiki-import/` | Copies of the GitHub Wiki pages, kept here for submission |
| `.github/` | Issue and PR templates |

## Team

Ameera Tawfiqa · Isabelle (Ya Jie) Han · Natasha Lim · Nayla Pramita · Trent Ng

## Ethical Concerns and References

BMO is a proof of concept, not a validated workplace system. It is designed around a problem we have not fully resolved: the same visibility that makes asking feel normal can also make someone self-conscious, and the device being company property means any discretion it offers is discretion from coworkers rather than from an employer.

- [Ethical Considerations](wiki-import/Ethical-Considerations.md)
- [References](docs/references.md)

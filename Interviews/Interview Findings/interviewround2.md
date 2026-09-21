# Co-lingo: Round 2 interview excerpts that support design decisions

**Participant key** (labels are mine, so rename them to match your records)
- **Jonathan**: Part-time worker who works alongside international students, including a Vietnamese coworker
- **Kaden**: Retail worker who has worked with colleagues less confident in English
- **Sharon**: Supervisor of people from a range of backgrounds

Round 1 participants (P1 to P6) are cited where they reinforce a finding.

---

## 1. Focus on workplace-specific language, not general English

This is the strongest support for Co-lingo's core concept. Sharon and Jonathan both said the barrier is workplace-specific phrasing rather than English ability.

- **Sharon:** "Usually the main issue isn't that they can't speak English. It's more that workplace communication can be quite specific."
- **Sharon:** "We use a lot of abbreviations, workplace jargon and informal instructions. Someone might understand normal English perfectly but not understand what 'close this off,' 'put this on hold' or 'follow up with them' means in our particular workplace."
- **Jonathan:** "Her English is pretty good, but sometimes she doesn't understand certain workplace words or slang."
- **Jonathan:** A colleague told to put something "out the back" went outside the building to look for it.
- **Kaden:** Suggested the robot's purpose is "for more complicated stuff. Like workplace policies or specific terminology."

**Design implication:** Build the content library around abbreviations, informal instructions and phrases whose meaning depends on the workplace. Explain the intended action as well as the definition. This matches Round 1 (P2: "have a crack at it and circle back later").

## 2. Target onboarding and new hires

- **Sharon:** "Particularly for onboarding new employees. If someone could quickly ask, 'What does this mean?' without interrupting their supervisor, that could save time."
- **Sharon:** "When someone is new, you have to spend more time explaining things. But eventually they learn the terminology."
- **Jonathan:** "I think that would actually be really useful. Especially for new workers."

**Design implication:** Position Co-lingo as an onboarding companion, which matches your brief. Sharon's remark that people eventually learn the terminology suggests the value is highest in the first weeks. It might include a "first week" glossary that companies can preload.

## 3. Asking a robot removes the embarrassment of asking a person

- **Jonathan:** "They could ask the robot something without feeling embarrassed about asking another person."
- **Jonathan:** "People might be uncomfortable asking the same question five times, but asking a robot would feel less embarrassing."
- **Sharon:** "Usually it's because someone is too embarrassed to ask for clarification. They might say yes because they think they understood, even when they didn't."
- **Sharon:** "If everyone else seems to understand something, you don't necessarily want to be the only person asking what it means."

**Design implication:** Make repeated, judgement-free asking a core feature, so users can ask the same thing again without a person seeing it. This is consistent with Round 1's private-clarification finding (P2, P4).

## 4. Keep it fast and simple to use

- **Jonathan:** "Yeah, if it was really easy to use."
- **Kaden:** "If it was really quick. Like you press a button, ask something and immediately get an answer. I wouldn't want to go through heaps of menus."
- **Kaden:** "If I'm working with someone and they don't understand something, I'd probably just explain it to them. It might be quicker than getting a robot involved."
- **Jonathan:** "You don't really have time to stop for five minutes and explain something."

**Design implication:** Use one-button or one-step interaction, a minimal interface and answers that arrive immediately. If the robot is slower than asking a coworker, people will skip it. This supports Round 1's speed evidence (P3, P4).

## 5. Accuracy, uncertainty and verification matter

- **Jonathan:** "Maybe if the robot gives the wrong translation. That could actually make things worse. So I'd want it to be pretty accurate and maybe tell you when it's not sure."
- **Kaden:** "If it translated something incorrectly and someone followed the wrong instruction, that could be a problem."
- **Kaden:** "A robot can't necessarily understand the context behind everything someone says."
- **Sharon:** "I'd trust it for basic explanations. I wouldn't rely on it for important instructions unless I could verify the information."
- **Sharon:** "You don't want someone misunderstanding an AI-generated explanation and then making a workplace mistake."

**Design implication:**
- Show a confidence indicator or "I'm not sure" state.
- Let employers approve company-specific definitions rather than relying on generic AI output.
- Point users to a human (a buddy or supervisor) for high-stakes instructions.

## 6. Give examples and keep the original wording visible

- **Sharon:** "A simple way to explain workplace terminology, maybe examples of how a phrase is normally used, and potentially translation."
- **Sharon:** "I'd also want the original message available so the person can compare it with the explanation."
- **Jonathan:** "Sometimes it's easier to demonstrate something instead of explaining it with words."

**Design implication:** Each answer should show the original phrase, a plain explanation and a usage example, with translation as an optional layer. Consider visual or demonstrative cues. This matches Round 1 (P2, P3 on rephrasing, examples and showing).

## 7. Treat it as normal team support, not something that singles people out

- **Kaden:** "I think it should be normal workplace support. I wouldn't want someone to feel like they're being singled out because they speak differently."
- **Jonathan:** "I don't think you should treat them differently either."
- **Jonathan:** It could help people "understand what's happening without making them feel like they're different from everyone else."

**Design implication:** Frame Co-lingo as a general workplace resource, which reinforces Round 1's "not the robot for international workers" finding (P2, P3).

## 8. Support people, don't replace them

- **Kaden:** "For simple things, I think people should just talk to each other."
- **Kaden:** "I think people should still be the main source of support."
- **Sharon:** "I don't think technology alone solves the problem. Managers and coworkers still need to create an environment where people feel comfortable asking questions."
- **Sharon:** "It should make communication easier, not replace the communication between coworkers."

**Design implication:** Keep Co-lingo focused on jargon, policies and terminology. Consider prompts that send users back to colleagues, such as "ask your buddy about this one". This echoes Round 1 (P2, P3).

## 9. Inclusion problems come from speed and slang, and are usually unintentional

- **Jonathan:** "If everyone starts talking really quickly or using slang, they might just stop participating because they can't follow the conversation."
- **Sharon:** "Good teams usually notice when someone isn't participating and bring them into the conversation. But when you're busy, it's easy to overlook."
- **Kaden:** "Usually people just keep talking and if someone doesn't understand, they'll ask." (a counterpoint, see the caveats below)

**Design implication:** Consider a lightweight feature that lets the robot flag jargon in a group setting or prompt the team to pause. It could also give a low-pressure way for quieter members to check a term. This links to Round 1's speaker-support finding (P3, P4).

---

## Where Round 2 adds to or challenges Round 1

- **New evidence on trust:** Round 2 raises accuracy and verification much more than Round 1 did. This looks like a design requirement rather than a nice-to-have.
- **Not raised in Round 2:** Privacy, recording and manager visibility were strong themes in Round 1 (P2, P3, P4) and nobody mentioned them here. That is probably because no Round 2 participant is a non-native speaker. Keep relying on Round 1 for that requirement.
- **A skeptic:** Kaden doubted that everyone would use it and thought simple things are quicker to explain in person. That is a useful challenge to your assumptions about adoption.
- **Kaden's view on miscommunication:** He said the mistake he described wasn't necessarily because of English, since "everyone makes mistakes at work". Don't overstate language as the sole cause of errors.

## Caveats for your write-up
- All three Round 2 participants are coworkers or a supervisor, so this round tells you what supporters observe, not what learners experience. Their statements about how new hires feel (for example, that they would feel less embarrassed) are secondhand and are best supported by Round 1's non-native-speaker interviews (P2, P3, P4).
- The concept was described to participants as a robot that translates, explains jargon and supports communication, so some enthusiasm may reflect the prompt. Kaden was the most critical.
- Participants mention retail, part-time and supervisory work, so the corporate-office context may only partly apply.

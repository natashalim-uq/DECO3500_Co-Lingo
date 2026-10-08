# Co-lingo: Prototype test excerpts that support design decisions

**Participant key** (labels are mine, taken from the file names)
- **Liam**: Tested the first prototype and was interviewed afterwards
- **Tom**: Tested the first prototype and was interviewed afterwards. His notes at the top of the PDF are quoted as "Tom's notes."

Round 1 and Round 2 findings are cited where they reinforce or conflict with these.

---

## 1. The robot needs to listen and help proactively, not wait to be asked

This is the clearest finding from the prototype test. Users could not use a robot that only answers questions, because they didn't know which questions to ask.

- **Liam:** "I didn't know what questions to ask it because it all went so fast. So I feel like it needs to be listening to the conversation."
- **Liam:** "Because I didn't know what I didn't know… So I didn't know what to ask the robot after the fact."
- **Liam:** (on adding context before he asks) "Yeah, right. Or like giving it as I go."
- **Tom:** "I probably would want it to play a more active role in assisting… as the person's talking, in between those chunks, it fills in the conversation, or just repeats the entire conversation again, but more in a plainer language, rather than me having to manually do this myself."
- **Tom's notes:** "If the robot has voice activation it would be better, save time."

**Design implication:** Detect jargon in the conversation and surface it automatically, rather than relying on the user to query. This is a shift from Round 1 and 2, where participants pictured asking the robot.

**Tension to resolve:** Round 1 participants worried about always-on listening. P4 said, "I wouldn't want it translating everything all the time," and P2 and P4 raised recording and privacy. Proactive listening makes those concerns bigger. Consider proactive help limited to flagged jargon terms rather than full translation, with clear recording and storage transparency.

## 2. If it only sits in the room and doesn't listen, it offers no advantage over a laptop

- **Liam:** "There wasn't any benefit. Being here because even though it was like there, it wasn't listening, so it wasn't in the space… I still had to like interface with it afterwards like I would a computer."
- **Liam:** "I think I would have just privately looked it up."
- **Liam:** (without the robot) "Probably similar to how it went, except I would just use my computer to look it up… I think I just would have gone like Google or ChatGPT and asked it."

**Design implication:** A physical, shared robot has to justify itself against a phone or laptop. Its value is being context-aware in the space, so it should use what it hears rather than behaving like a chatbot in a different body. Liam also names ChatGPT as the real competitor.

## 3. The robot is more comforting than asking a coworker, and lower-stakes

- **Liam:** "It's nice to have… it's like a good comfort that I have something. Um, and I guess it's less scary than asking coworkers."
- **Liam:** "Because it saves the embarrassment."
- **Tom's notes:** "Helps not feel left behind but it depends on the context and background of target user."

**Design implication:** The emotional benefit is real even in a very rough prototype. Design the tone to reassure. This supports Round 2's finding that asking a robot feels less embarrassing than asking a person (Jonathan, Sharon).

## 4. Decide whether Co-lingo is visible or discreet, because the answer depends on the user's situation

- **Tom:** "If I was trying to conceal that I didn't understand the lingo, it'd be nice to have it there in some form so that it can do its job."
- **Tom:** "If I'm trying to pretend like I do understand and I don't want people to know that I need assistance, then I'd want the robot to be more like hidden."
- **Tom:** "If no one knows I'm using it, then like, yeah, it's fine."
- **Tom:** On the open scenario, "everyone knows I don't understand. So it's like there's a thing here helping me. Everyone understands that." (for example, someone new from a different industry)
- **Tom:** "You may have to narrow that down yourselves. If you want to make this thing a thing that's concealed, or do you want to make it a thing that's out in the open."
- **Liam:** Would rather use his computer privately than have the robot respond publicly, "because it saves the embarrassment."

**Design implication:** This backs Round 1's private-clarification finding (P2, P4) and Round 2's "not singled out" finding (Kaden). Both testers leaned toward private responses. Tom's point that an open robot can normalise support for someone visibly new suggests testing both. A hybrid could be a shared presence in the room with private output to the user's own device.

## 5. Human-first instinct: the robot works best when people aren't available

- **Liam:** "My first reaction was to actually ask you guys what it was… But that tied into my first response of like, I didn't know what to ask."
- **Liam:** "If I had a meeting and then it sort of just ended, and… the people who were in the meeting with me I couldn't reach out to, then I would use it because it's like with me."
- **Tom:** (without the robot) "I would just ask someone, or maybe I'd just ask the person talking to me to clarify things."
- **Tom:** "If we're trying to avoid those situations, then that's like when this is useful."

**Design implication:** Position Co-lingo as a fallback for moments when a colleague is unavailable or when asking feels awkward, such as after a meeting or in fast-moving briefings. This matches Kaden's view that people should still be the main source of support, and Sharon's view of the robot as a support tool.

## 6. Jargon is forgotten by the time users can ask, so capture it during the meeting

- **Liam:** "The meeting was happening so fast. But I couldn't actually ask him while it was happening. And then by the time I asked him, I had forgotten what I didn't know because all these buzzwords."
- **Liam:** "Everything happened so fast."

**Design implication:** Log the jargon terms as they occur and offer a recap or personal glossary afterwards. This adds to Round 1's finding that participants already kept their own lists (P2) and used meeting notes and captions (P4).

## 7. Context-specific explanations are the point of difference from generic lookup

- **Liam:** "Even with looking it up, I wouldn't be sure that that's what they meant in the context."
- **Liam:** "I think I just would have gone like Google or ChatGPT and asked it."

**Design implication:** Generic tools give generic meanings. Co-lingo should explain what a term means in this workplace, for example through company-specific glossaries. This connects to Sharon's point that terms like "close this off" are specific to a particular workplace, and to the accuracy and verification requirement from Round 2.

## 8. Plain-language restatement is a valued output

- **Tom:** "Just repeats the entire conversation again, but more in a plainer language."

**Design implication:** Offer a plain-language rewording of what was just said, alongside individual term definitions. This echoes Round 1's request for rephrasing rather than repeating (P2, P3) and Round 2's suggestion that the robot could help speakers simplify (P3, P4).

## 9. Prototype output: text chat is a stopgap

- **Tom:** "This is a very good prototype, but I'll call it like a very, very early working prototype… I can see that this is just using like chat… So this won't be super good as like a final thing, but it's fine for now is like a practice thing."
- **Tom:** "We'll have to come up with some kind of like, um, other way for it to communicate the message to people that's not just relying on like chat."
- **Liam:** Saw the robot showing text, but preferred to interact privately on his own computer.

**Design implication:** Explore other output channels for the next iteration, such as earpiece audio, glanceable visuals, personal-device notifications or an ambient display. Test them against the visible-or-discreet question in section 4.

---

## Caveats for your write-up
- **Small sample and early prototype.** This is two users on a makeshift prototype. It suggests direction, but it is not strong evidence.
- **Tom's second half reads more like feedback on your method than user data.** His comments on prototype quality and question design sound like an instructor or peer reviewer, so present them as expert feedback. Confirm this with your team before citing them as a user's opinion.
- **Liam's file has no name inside.** I used the file name. Check that it matches your records.
- **Tom's handwritten notes are incomplete.** Items 1 and 3 to 4 are blank or missing, and the "voice activation" note is the interviewer's summary rather than a transcript quote, so cite it as a note.
- **Leading questions.** Some prompts suggested answers, such as "So you want the robot add some context prior to you asking?" and "So you would rather privately solve the issues yourself?" Liam agreed both times, so treat those confirmations as weaker evidence than his unprompted statements.

## Method points for the next round
Tom's feedback is worth acting on. Avoid double-barrelled questions (two questions in one), as in "Do you feel left behind, and would the robot make a difference?". Ask them separately, and keep them short.

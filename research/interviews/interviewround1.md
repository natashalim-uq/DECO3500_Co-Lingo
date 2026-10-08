# Co-lingo: Interview excerpts that support design decisions

**Participant key** (labels are mine, so rename them to match your records)
- **P1**: Ameera, university student (Comp 1100 team project)
- **P2**: Graduate employee (AI-formatted "Interview 1")
- **P3**: Café worker (AI-formatted "Interview 2")
- **P4**: Design-team worker (AI-formatted "Interview 3")
- **P5**: Coworker who supports colleagues (Otter transcript)
- **P6**: Coworker interviewed by Trent

---

## 1. Focus on corporate expressions and idioms, not word-for-word translation

Participants said the words were rarely the problem. Unwritten meaning was.

- **P2:** "Usually I understand the English words, but sometimes I don't understand the expression or what the person actually means." (The trigger was a manager saying "have a crack at it and circle back later.")
- **P2:** "Sometimes I know all the words and still don't understand what the person expects me to do."
- **P3:** "I might understand the work part but not the social part."
- **P4:** "Sometimes everyone laughs at a joke and I understand all the words, but I still don't understand why it is funny."
- **P5:** "There might be certain… things that are specific to the industry, or maybe slang… that the robot may not yet be programmed to understand."

**Design implication:** Explain what a phrase means *and what action is expected*. Consider letting each company add its own jargon.

## 2. Make clarification private and on-demand

- **P2:** "I think it could help me participate more, especially if I could quietly check something I didn't understand."
- **P2:** "If I have to say out loud, 'Robot, translate this for me,' then probably not… Because then everybody knows I'm the person who didn't understand."
- **P2:** "A private clarification feature. Maybe I press a button and it gives me a simple explanation on my phone without interrupting everyone."
- **P2:** "In a group, when I ask a question, suddenly everyone is looking at me."
- **P4:** (on the robot announcing what they didn't understand) "I definitely wouldn't want that."

**Design implication:** Use a discreet input such as a phone or button, and give a quiet response. Avoid voice-activated public interaction.

## 3. Position it as a tool for everyone, not "the robot for international workers"

- **P2:** "I don't want it to be something only international employees use."
- **P3:** "Oh, this is the robot for people who can't speak English. I wouldn't like that."
- **P3:** "It should help everybody communicate, not just people who speak English as a second language."
- **P3 / P4:** Comfortable using it "if everybody used it" / "if everyone used it."

**Design implication:** Frame Co-lingo around new hires and new grads generally. This also fits your audience, since graduates and non-native speakers both face unfamiliar corporate language.

## 4. Explain in different ways rather than repeating

- **P2:** "She doesn't just repeat the same sentence. She changes the words and gives examples."
- **P3:** "She doesn't repeat the exact same sentence louder. She finds a different way to say it."
- **P3:** "Showing me usually works best. If someone points to something while explaining it, I understand very quickly."
- **P2:** "Written explanations are really helpful because I can read them again."
- **P1:** "The most work done was us talking in simpler terms."

**Design implication:** Offer a simple definition, then a rephrase, then a real workplace example. Add visual cues where possible, and keep explanations saved so users can reread them.

## 5. Keep it fast and light during work, with a review and learning layer afterwards

- **P2:** (on current tools) "They work well after a meeting, but not really during a conversation because everything happens too fast."
- **P3:** "It's too slow. I can't stop, take out my phone, type something, translate it, and then continue working."
- **P3:** "It needs to be really fast… I wouldn't want to have a long conversation with a robot while I'm working."
- **P4:** "I wouldn't want it translating everything all the time… It could become distracting."
- **P2:** "I keep a list of workplace words and phrases I hear a lot."
- **P4:** "I check the meeting notes first… It gives me more time to think about exactly what I want to ask."

**Design implication:** Use short, glanceable answers in the moment. Automatically build a personal glossary of the phrases a user has met and offer review or practice later. This is the core of "learning the lingo."

## 6. Protect privacy and keep learning data out of performance evaluation

- **P2:** "I would want to know if it records conversations." "I wouldn't like that. I might stop using it because I wouldn't want that information connected to my work performance."
- **P3:** "If it's helping me learn, that information should be private."
- **P4:** "Language support should help people improve, not become part of evaluating their performance."
- **P4:** "If it listens to meetings, I want to know where that information is stored."

**Design implication:** Be transparent about recording and storage. Make individual usage and lookup history private from managers, or make it optional. Trust here directly affects adoption.

## 7. Build psychological safety: reduce the fear of looking incompetent

- **P2:** "I don't want my manager to think my English is not good enough."
- **P2:** "Even if nobody says anything negative, I feel pressure to just say I understand."
- **P3:** "I don't want them to think I'm not professional." (on customers)
- **P5:** "Try always not to make them feel that they are inferior to you."
- **P2:** "Sometimes I understand more than people think I do. I just need more confidence and maybe a little more time."

**Design implication:** Use a neutral, encouraging tone. Don't label users as struggling, and make asking the robot feel routine rather than remedial.

## 8. Support human connection and two-way learning; don't replace it

- **P3:** "Maybe a shared vocabulary feature. I could teach my coworkers some Spanish words and they could teach me Australian expressions… Then learning goes both ways."
- **P2:** "I still want coworkers to talk to me normally instead of just depending on the robot."
- **P3:** "There's also a risk people become lazy and just say, 'Use the robot.'" "[It could strengthen relationships] only if it encourages people to talk more."
- **P1:** "I'd much rather imagine them speaking in English, but in simpler terms. So that not only will help their English, but will also help us communicate."

**Design implication:** Consider team-contributed vocabulary and prompts that nudge people to speak with each other. Position the robot as a learning aid, not a replacement for conversation.

## 9. Support the speaker as well as the learner

- **P3:** "Maybe it could suggest, 'Try explaining that in a simpler way,' instead of just translating everything."
- **P4:** Wants help that makes "everyone communicate more clearly," because "translation doesn't solve problems like people speaking too quickly or interrupting each other."
- **P1:** "I somehow had to step up to be the most extroverted member of the team." (a colleague carrying the communication load)

**Design implication:** Add an optional feature that flags jargon or idioms a colleague just used and suggests plain alternatives. This eases the load on the coworkers who currently absorb it.

## 10. Scope limits worth stating

- **P3:** "Humour and personality… Translating it doesn't really give you the same feeling."
- **P4:** "Sometimes people assume that if somebody speaks slowly, they don't understand the topic. But maybe they just need more time to express the same idea in another language."

**Design implication:** Co-lingo teaches meaning and convention, not humour or personality. Don't treat slower responses as a sign of low understanding.

---

**Caveats for your write-up**
- P1, P5 and P6 fit your interview guide (coworkers *supporting* someone). P2 to P4 are non-native speakers describing their own experience, so they carry most of the design evidence. Say so when you cite them.
- P5 and P6 were mostly positive about a robot but gave little detail. The strongest evidence is from P2 to P4.
- Participants were mostly in Australian workplaces, so "Australian expressions" may be specific to that context.

I can put this into a Word doc or a table (quote / participant / theme / design decision) if you want it in a format for your report.

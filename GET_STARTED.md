# How to use this starter package

This pack is **new starter documentation**, not a copy of your existing team's repo. It was created from the provided repository screenshot, your assignment brief, and the Co-Lingo direction discussed in the project. **Do not overwrite existing team content blindly.**

1. Download and unzip this pack locally.
2. Open your existing `DECO3500_Co-Lingo` repo and review files already there.
3. Copy the folders and files you want into the existing clone, **merging** with any real evidence already committed. In particular, compare the existing README before replacing it.
4. Move your existing interview documents into `research/interviews/`, real Figma screenshots into `design/`, your charter into `team/`, and existing evidence into the corresponding folders. Retain accurate authorship/history.
5. Replace every `[TO COMPLETE]` and `[ADD ...]` item; delete irrelevant example content.
6. Copy each `.md` file in `wiki-import/` into a corresponding page in the actual repository **Wiki**. A folder alone does not satisfy the Wiki requirement.
7. Use GitHub **Projects** and **Issues**; the issue template is in `.github/ISSUE_TEMPLATE/`.
8. Commit your changes via a feature branch and PR, or coordinate with the team before direct updates to `main`.
9. Follow [SUBMISSION_CHECKLIST.md](SUBMISSION_CHECKLIST.md).

### Helpful Git commands (after you have checked the repository)
```bash
git clone https://github.com/natashalim-uq/DECO3500_Co-Lingo.git
cd DECO3500_Co-Lingo
git switch -c docs/organise-project-documentation
# Merge the relevant files from the unzipped package here.
git add .
git commit -m "Organise Co-Lingo research, design and evaluation documentation"
git push -u origin docs/organise-project-documentation
```
Open a pull request and ask your teammates to review it. The remote URL above is based on the visible screenshot and should be verified.

### Important
Do not post participant names, identifiable recordings or contact information without appropriate consent. These files deliberately contain placeholders rather than fabricated interviews, usability data or links.

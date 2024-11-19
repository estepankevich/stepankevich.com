---
created: 2024-11-12 20:38
updated: 2024-11-19 16:55
---
# Welcome to My Notes
This site is built using [Quartz 4](https://quartz.jzhao.xyz/) and is part of my [Obsidian](https://obsidian.md/) repository, showcasing the notes I’ve chosen to publish. The site is open source, and the code is [available on GitHub](https://github.com/estepankevich/stepankevich.com).

### Why I Decided to Publish My Notes
- **Accessibility:** Making my notes and resources openly available allows anyone to benefit from them.
- **Documentation:** I frequently use my notes as a personal reference. By sharing them, I hope they’ll serve as useful documentation for others too.
- **Blogging & Writing:** I’ve always wanted to start a blog. A well-structured notes repository feels like the perfect stepping stone to achieve this goal.
- **Sharing Knowledge:** I believe the insights and inspiration I’ve gathered can be valuable or interesting to others.
- **Organizational Motivation:** Knowing my notes are publicly visible pushes me to organize them more clearly and thoughtfully.

### About Quartz 4 and the Customizations I Made
Quartz 4 is an excellent open-source tool that I found intuitive to use and customize. It took me just two days to tailor it to my preferences before publishing the site. Here are the customizations I made:

- [Added links from properties to appear after the article title](https://github.com/estepankevich/stepankevich.com/pull/1)
- [Integrated a links header element](https://github.com/estepankevich/stepankevich.com/pull/2)
- [Adapted the design and applied custom styles](https://github.com/estepankevich/stepankevich.com/pull/3)
- [Disabled SPA and popovers to improve the experience on mobile devices](https://github.com/jackyzha0/quartz/commit/362b01c2dc8e574d774d2fbdd597b9c11757e2af)

### Publishing Workflow: Automating the Process (Almost!)
To streamline publishing, I attempted to automate note synchronization using Obsidian's [Enveloppe plugin](https://github.com/Enveloppe/obsidian-enveloppe). The main challenge was handling [Dataview](https://github.com/blacksmithgu/obsidian-dataview) queries, which are internal to Obsidian and not easily converted for external use. Although Enveloppe promised a solution by syncing notes directly to GitHub, I ran into issues with broken relative links when integrating with Quartz 4.

For now, I follow a semi-manual process:
1. Use the Enveloppe plugin locally to expand Dataview queries into static Markdown files.
2. Copy the updated files to the Quartz repository’s content folder.
3. Review the changes locally for typos or sensitive information before committing.

This process takes about two minutes, which is manageable and gives me an opportunity to catch any errors or oversights.

### Why I Love Quartz 4
Even as someone with no prior experience in TypeScript, I found Quartz 4 easy to understand and extend. I’ll be following its ongoing development and am excited to explore new features as they’re released.


# Thank you for visiting my site!
 I hope you find these notes useful, inspiring, or at the very least, interesting. Feel free to explore and share your thoughts.
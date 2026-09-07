# Syed Muhammad Osama — Portfolio

Personal portfolio website showcasing my background, technical skills, and project work. Deployed via GitHub Pages.

## Sections
- 👋 **About** — Bio, background (SAP & Data Engineering + Full-Stack Development)
- 💼 **Projects** — Showcase of featured work:
  - Nexus AI Desktop Assistant
  - Company Knowledge Assistant (RAG Chatbot)
  - Food Delivery Application
- 📄 **Resume** — Downloadable PDF resume
- 🔗 **Contact** — Links to GitHub, LinkedIn, email

## Tech Stack
| Layer | Technology |
|---|---|
| Language | TypeScript |
| Hosting | GitHub Pages |

## Project Structure
Syed0sama.github.io/
├── src/
│ ├── components/ # About, Projects, Resume, Contact sections
│ ├── data/ # Project metadata (title, description, tech stack, links)
│ └── assets/ # Resume PDF, images/icons
├── public/
└── index.html


## Setup & Run Locally
```bash
# Clone the repo
git clone https://github.com/Syed0sama/Syed0sama.github.io.git
cd Syed0sama.github.io

# Install dependencies
npm install

# Run locally
npm start
```
Site will be available at `http://localhost:3000`.

## Deployment
Deployed automatically to GitHub Pages from the `main` branch:
```bash
npm run build
npm run deploy
```
Live at: [syed0sama.github.io](https://syed0sama.github.io)

## Key Design Decisions
- **TypeScript** used for type safety and better maintainability as the site grows with more projects.
- **Static site on GitHub Pages** — no backend needed, fast load times, free hosting tied directly to the GitHub profile.

## Future Improvements
- Add blog/articles section
- Add dark/light theme toggle
- Add project filtering by tech stack

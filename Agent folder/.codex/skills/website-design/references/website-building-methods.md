---
title: Website Building Methods (AI-Powered)
category: web-design-and-ux
tags: [claude-code, stitch, higgsfield, parallax, scroll-animation, workflows]
status: current
reviewed: 2026-07-12
sources:
  - archive/originals/Web design/Methods.docx
  - archive/originals/Web design/Stitch to Claude app UI.docx
  - archive/originals/Web design/Higsfield MCP to make cool animation.docx
  - archive/originals/Other/Make localhost servers public in VSCode.docx
  - archive/originals/inbox-processed/2026-07/reel-notes/03 - Generating Games from Research using Claude and Higgsfield MCP.md
  - archive/originals/inbox-processed/2026-07/reel-notes/06 - Vercel Templates and Aceternity UI for Fast Development.md
---

# Website Building Methods (AI-Powered)

Concrete workflows for producing professional websites with AI. Resources/skills: [[design-resources-and-skills]]; prompts: [[design-prompts]]; selling these as a service: [[business-models-and-strategies#local-business-website-redesign]].

## Method 1: Professional websites with Claude Code

1. Install Claude Code
2. Install Framer Motion for animations
3. Install the UI/UX Pro Max skill
4. Use components/prompts from twentyfirst.dev (21st.dev)
5. Claude generates polished websites automatically

(Also: Claude can keep generating → screenshot → correct repeatedly until it's super good — see [[claude-code-fundamentals]].)

## Method 2: Video → parallax scroll website

1. Get or generate a video (e.g. with Kling)
2. Give the video file to Claude Code
3. Ask it to split the video into frames
4. Turn frames into a scroll animation
5. Result: premium landing page with video-like parallax effect

## Method 3: Free cinematic scroll animation

1. Use Google Whisk to create start + end frames
2. Use Google Flow to turn frames into a video
3. Use ezgif.com to export the video into 30 FPS image frames
4. Download frames as a zip, put them into Cursor
5. Prompt Cursor to connect frames to scroll position
6. Result: premium scroll animation effect for free

## Start from templates, not scratch

Use proven starter templates instead of building common app features yourself:

* **Vercel Portfolio Starter Kit** — portfolio sites
* **Vercel AI Chatbot Template** — chatbots
* **Next.js Commerce** — Shopify stores
* **Next.js SaaS Starter** — auth, Stripe, dashboard
* Main idea: templates handle the boring 90%; focus on the unique 10%
* Bonus: usually faster and safer than asking AI to build everything from zero

([vercel.com/templates](https://vercel.com/templates))

## Google Stitch → Claude Code app UI

1. Describe the app idea in Stitch
2. Add Pinterest/Dribbble reference images
3. Generate screens + design system
4. Export the design as MCP and connect it to Claude Code
5. Ask Claude to build the app from the designs
6. Add screen connections + animations
7. Result: cleaner front-end code from better UI designs

## Higgsfield MCP: 3D property walkthrough animations

Paste the Higgsfield MCP link into connectors: `https://mcp.higgsfield.ai/mcp`

Then go to e.g. a real-estate listing site (nehnutelnosti) with lots of pictures and give Claude the URL plus a prompt like:

> use Higgsfield to create a 3d walkthrough that follows the same layout and look as the pictures of this apartment listing. Make it look realistic and professional.

You get a cool video for each of the rooms. (Example listing: [rentler.com listing](https://www.rentler.com/places-for-rent/ut/centerville/305-n-1300-w/10201333), [reel](https://www.instagram.com/p/DZGfUlBxWdG/).)

## Higgsfield MCP: games from research documents

Demonstrated: a 947-page scientific PDF (chimpanzee social behavior) turned into an interactive simulator game ("A Chimpanzee's Life" — roam, swing, forage, survive predators, build social bonds).

1. Claude analyzes the document — maps habitats, behavioral patterns, hierarchies, diets into game mechanics
2. Higgsfield MCP directly generates cohesive game assets: character designs, environment art, UI/HUD, in multiple matching art styles
3. Result: academic knowledge converted into a playable experience

## Dev tip: make localhost public from VS Code

In the terminal panel click **Ports** → **Forward**, enter the port number, set visibility to public, and copy the link.

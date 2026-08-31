---
title: Web Design Tools & Principles
category: web-design-and-ux
tags: [web-design, ui, ux, frontend, components, animation, design-systems, ai-workflows]
status: current
reviewed: 2026-07-13
sources:
  - knowledge/web-design-and-ux/design-resources-and-skills.md
  - knowledge/web-design-and-ux/website-building-methods.md
  - knowledge/web-design-and-ux/design-prompts.md
  - Agent folder/.codex/skills/tools-knowledge/data/tools.full.json
---

# Web Design Tools & Principles

This is the practical workflow for creating distinctive, polished websites with the saved design references, AI tools, component libraries, and frontend workflows in this knowledge base.

## The central workflow

Use this sequence: **inspiration → design direction → design system → prototype → implementation → motion → visual QA**.

Start by defining the audience, business goal, primary CTA, and one memorable design idea. Choose one aesthetic direction—editorial, luxury, brutalist, playful, organic, retro-futurist, or another deliberate lane—and make typography, color, composition, texture, and motion support it.

Avoid generic AI-looking interfaces: default fonts, timid palettes, purple-on-white gradients, predictable centered stacks, unrelated component collections, and animation without purpose. Prefer characterful font pairings, CSS design tokens, asymmetry or overlap, atmospheric backgrounds, and a small number of high-impact motion moments.

## Research and inspiration

- **Refero** ([refero.design](https://refero.design/)) — searchable UI/UX references from real products. Study specific patterns such as pricing, onboarding, navigation, and dashboards.
- **Mobbin** ([mobbin.com](https://mobbin.com/)) — real web and mobile product screenshots.
- **Godly** ([godly.website](https://godly.website/)) — curated, highly art-directed websites.
- **Dribbble** ([dribbble.com](https://dribbble.com/)) — visual direction and creative exploration; validate its ideas against real UX patterns.
- **style.refero.design** ([style.refero.design](https://style.refero.design/)) — typography, color, spacing, and UI inspiration.

Collect three to five references, each for a specific reason, then synthesize them rather than copying one site.

## Design and prototyping

- **Google Stitch** ([stitch.withgoogle.com](https://stitch.withgoogle.com/)) — generate web/mobile screens and a design system from a description and reference images; then connect/export the design to Claude Code through MCP.
- **Figma** ([figma.com](https://www.figma.com/)) — refine layouts, create components and variants, prototype flows, and review designs collaboratively.
- **Kombai** ([kombai.com](https://kombai.com/)) — saved as an AI design engineer for designing UIs and shipping frontend code; verify current capabilities before depending on it.
- **MotionSites** ([motionsites.ai](https://motionsites.ai/)) — prompts, hero sections, animated backgrounds, gradients, and templates.

Create a `DESIGN.md` for coding agents containing brand personality, colors, typography, spacing, component rules, motion principles, accessibility requirements, and visual do/don’t examples.

## Components and frontend building blocks

- **21st.dev** ([21st.dev/community/components](https://21st.dev/community/components)) — React components to copy, remix, and adapt.
- **Aceternity UI** ([ui.aceternity.com](https://ui.aceternity.com/)) — React/Next.js/Tailwind/Framer Motion components, blocks, and templates.
- **React Bits** ([reactbits.dev](https://reactbits.dev/get-started/index)) — animated and interactive customizable React components.
- **Watermelon UI** ([ui.watermelon.sh](https://ui.watermelon.sh/)) — React components, dashboards, and UI blocks.
- **Cult UI** ([cult-ui.com](https://www.cult-ui.com/)) — shadcn-style animated blocks and templates for TypeScript/Next.js.
- **Componentry** ([componentry.fun](https://componentry.fun/)) — React components and effects.
- **Dot Matrix** ([dotmatrix.zzzshawn.com](https://dotmatrix.zzzshawn.com/)) — loaders and loading-state treatments.

Use these libraries selectively. First establish tokens for type, spacing, radius, borders, shadows, and colors; then restyle components so the site feels like one system.

## Motion and cinematic effects

- Use **Framer Motion** in React for page-load reveals, staggered sections, scroll triggers, transitions, and shared-layout effects.
- Use **Swishy** ([swishy.ai](https://www.swishy.ai/)) for motion graphics, animated type, and exported video assets.
- For video-to-parallax pages: generate a video with Kling or another video tool, split it into frames, and map frame progression to scroll position.
- For a lower-cost cinematic workflow: create start/end frames with Whisk, generate the transition with Flow, export frames with ezgif, and connect them to scroll in Cursor.
- Use **Higgsfield** ([higgsfield.ai](https://higgsfield.ai/)) for cinematic media and 3D-style property walkthroughs.

Keep motion intentional, fast enough to preserve usability, performant on mobile, and disabled or reduced when the user prefers reduced motion. Compress frame sequences and lazy-load heavy media.

## Implementation and QA

Use Claude Code or Cursor to implement the design. A reliable loop is: build → run locally → screenshot → inspect typography, spacing, hierarchy, responsiveness, states, and motion → correct → repeat. Playwright can help an agent see and test the rendered result.

Before launch, verify keyboard navigation, focus states, contrast, loading/error/empty states, reduced motion, responsive breakpoints, image optimization, SEO metadata, and Core Web Vitals.

## Prompt architecture

For larger projects, work through five prompts in order: systems architecture, visual system, conversion copy, interaction systems, and final design-tool translation. Specify sitemap, user journeys, design tokens, component inventory, responsive behavior, animation behavior, validation states, and accessibility—not only colors and screenshots.

Most saved tool records are partial and should be verified for current pricing, licensing, integrations, and framework support before commercial use.

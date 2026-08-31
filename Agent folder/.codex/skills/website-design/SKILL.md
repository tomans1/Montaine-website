---
name: website-design
description: Design, build, redesign, and polish distinctive production websites and frontend interfaces using the user's curated web-design knowledge. Use for landing pages, portfolios, marketing sites, dashboards, responsive UI, design systems, typography, color, layout, motion, component selection, frontend aesthetics, visual QA, or requests to make a website look less generic and more professionally designed.
---

# Website Design

Create a coherent website around its audience, business goal, primary action, and one memorable visual idea. Preserve the project's framework, conventions, and existing brand constraints unless the user asks to replace them.

## Load the relevant references

- Read [web-design-tools-and-principles.md](references/web-design-tools-and-principles.md) for every substantial design or redesign task. Treat it as the core workflow and quality bar.
- Read [design-prompts.md](references/design-prompts.md) when defining a new site's architecture, visual system, copy structure, interactions, or implementation specification.
- Read [website-building-methods.md](references/website-building-methods.md) when choosing an implementation approach, starter template, scroll animation, or AI-assisted workflow.
- Read [design-resources-and-skills.md](references/design-resources-and-skills.md) when selecting inspiration, components, external design tools, UX references, or palettes.
- Inspect the five `assets/pretty-colours-to-use-in-design-*.png` images when palette inspiration would help. Use them as references; do not force them into an established brand.

The design-skill names listed in `design-resources-and-skills.md` are a catalogue from the source repo, not bundled third-party installations. Apply the documented principles directly. Do not claim those external skills, MCPs, or services are installed, and do not install or connect them without the user's request.

## Workflow

1. Inspect the repository, rendered interface if available, existing design tokens, assets, content, and technical constraints.
2. Define the audience, page purpose, primary CTA, desired tone, and the single most memorable visual idea. For an existing site, infer these from the product and preserve recognizable brand elements.
3. Choose one deliberate aesthetic direction. Define typography, color tokens, spacing, grid, radii, borders, shadows, imagery, and motion as one system.
4. Plan page hierarchy and responsive behavior before styling isolated components. Include loading, empty, error, hover, focus, and disabled states where relevant.
5. Implement with semantic HTML and the repository's current stack. Reuse components only after adapting them to the design system. Keep motion purposeful and support reduced-motion preferences.
6. Render and inspect the result at representative desktop and mobile sizes. Use available browser or screenshot tooling to check actual output, then correct typography, spacing, alignment, hierarchy, overflow, states, and motion.
7. Verify keyboard access, visible focus, contrast, responsive breakpoints, image sizing, performance-sensitive effects, metadata, and the repository's tests or build.

## Design quality rules

- Prefer a specific art direction over a collection of fashionable effects.
- Use characterful, context-appropriate typography and a controlled type scale. Respect existing brand fonts when present.
- Use CSS variables or equivalent tokens so color, spacing, type, radius, and motion stay consistent.
- Build composition with intentional hierarchy, negative space, asymmetry, overlap, or controlled density where the concept supports it.
- Favor one or two high-impact motion moments over many unrelated animations.
- Avoid default-looking centered stacks, generic card grids, timid palettes, decorative gradients without purpose, and components that feel imported from unrelated systems.
- Never sacrifice readability, accessibility, responsiveness, or task completion for novelty.

## Scope decisions

- For a small polish request, keep the existing information architecture and focus on the affected surface.
- For a redesign, establish tokens and page structure first, then implement sections and states.
- For a new complex site, use the five-stage specification in `design-prompts.md`: systems architecture, visual system, conversion copy, interaction systems, and final implementation translation.
- For external tools, templates, libraries, pricing, or integrations, verify current details before relying on them; the transferred references are curated notes and may age.

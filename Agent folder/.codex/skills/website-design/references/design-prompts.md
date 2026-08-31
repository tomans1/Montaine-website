---
title: Design & Website Structure Prompts
category: web-design-and-ux
tags: [prompts, design-system, figma-make, website-structure, aesthetics]
status: current
reviewed: 2026-06-11
sources:
  - archive/originals/Web design/Design master prompt.docx
  - archive/originals/Web design/Actual website structure prompts (not just design).docx
---

# Design & Website Structure Prompts

Full prompt texts for design direction and complete website specs. Prompting techniques behind these: [[prompting-principles]].

## The Design Master Prompt (frontend aesthetics)

```
<Design Master Prompt/>
<frontend_aesthetics>
Before writing any code, commit to a bold aesthetic direction by answering:
• What problem does this interface solve, and for whom?
• What tone defines it? (brutally minimal / maximalist / retro-futuristic / editorial / brutalist / art deco / organic / luxury / playful — pick a lane and go all-in)
• What's the ONE thing a user will remember about this design?

Then build from that direction with intention. Match implementation complexity to the vision: maximalist requires elaborate animations and layered effects; refined minimalism requires precision in spacing, type, and subtle detail.

Focus on:
• Typography: Choose characterful, unexpected fonts — pair a distinctive display face with a refined body font. Avoid Inter, Roboto, Arial, Space Grotesk, and any system-default fallback.
• Color & Theme: Commit to a dominant palette with sharp accents. Use CSS variables for consistency. Avoid timid, evenly-distributed palettes. Draw from film, fashion, architecture, or print aesthetics for inspiration.
• Motion: Prioritize high-impact moments over scattered micro-interactions. One well-orchestrated page load with staggered reveals (animation-delay) beats five forgettable hover states. Use CSS-only for HTML; Motion library for React.
• Spatial Composition: Break the grid. Use asymmetry, overlap, diagonal flow, generous negative space, or controlled density — never default centered stacks.
• Backgrounds & Texture: Build atmosphere and depth. Use gradient meshes, noise textures, geometric patterns, layered transparencies, grain overlays, dramatic shadows, or decorative borders. No flat solid backgrounds unless the aesthetic explicitly demands it.

Never produce:
• Overused font families (Inter, Roboto, Arial, Space Grotesk, system fonts)
• Clichéd color schemes (particularly purple gradients on white backgrounds)
• Predictable centered layouts, card grids, or component patterns that could belong to any project
• Cookie-cutter design that lacks context-specific character

Interpret creatively and make stylistic choices that feel genuinely designed for the context. Every project should be unrepeatable. Vary the balance between light and dark themes, fonts, and aesthetics across projects.
</frontend_aesthetics>
```

## Website structure prompts (the full Figma Make sequence)

Five prompts that go beyond visuals into actual site architecture. Use in order.

### 1. The Systems Architect

> You are a Senior Platform Architect at a world-class web infrastructure company. I need to architect a high-performance [WEBSITE TYPE: portfolio / SaaS / e-commerce].
>
> Context: • Primary audience: [DESCRIBE IN DETAIL] • Core capabilities required: [LIST 3-5] • Technical priorities: [RESPONSIVE / SEO / PERFORMANCE / SCALABILITY]
>
> Produce a comprehensive technical blueprint including:
> - Information Architecture — complete sitemap with page hierarchy and logical grouping
> - User Journey Mapping — three critical conversion paths from entry to completion
> - Data Architecture — entity relationships and schema models (for dynamic content)
> - API Surface Definition — required endpoints, integrations, and authentication logic
> - Component Inventory — minimum 30 UI components with purpose definitions
> - Page Blueprints — structural wireframe descriptions for each template
> - Technology Stack Recommendation — frameworks, hosting, CMS, database, deployment
> - Performance Benchmarks — target load times, Core Web Vitals thresholds
> - SEO Framework — URL conventions, meta structures, schema markup strategy
>
> Format this as a structured technical specification suitable for direct implementation inside Figma Make.

### 2. The Visual System Architect

> You are a Global Design Director tasked with building a scalable design system for [BRAND].
>
> Brand personality: [MINIMAL / BOLD / LUXURY / PLAYFUL / MODERN / TECHNICAL]
>
> Deliver a production-ready design system including:
> - Color System — primary, secondary, semantic, neutral palettes + dark mode equivalents
> - Typography Framework — 9-step type scale with font pairing rationale
> - Spatial System — 8px grid foundation with spacing tokens
> - Component Library — 30+ components with interaction states and usage rules
> - Responsive Layout Patterns — breakpoints and adaptive behavior logic
> - Motion Principles — transition curves, durations, micro-interaction philosophy
> - Accessibility Standards — WCAG AA compliance guidance and contrast ratios
>
> Export deliverables in three formats: design tokens (JSON structure), CSS variable declarations, Figma-ready component documentation. This output will power the visual foundation inside Figma Make.

### 3. The Conversion Copy Architect

> You are a Senior Conversion Strategist at a top global agency. Write the complete website copy for a [WEBSITE TYPE].
>
> Parameters: • Brand tone: [PROFESSIONAL / CASUAL / AUTHORITATIVE / BOLD] • Target audience: [DEFINE] • Primary objective: [CONVERSION / AWARENESS / RETENTION]
>
> For every page, provide:
> - Hero Section: headline (max 6 words), subheadline (approx. 15 words), primary CTA
> - Feature Sections: three benefit blocks (headline + persuasive description)
> - Social Proof: testimonial framework, authority indicators, quantifiable results
> - FAQ Section: eight high-intent questions with conversion-focused answers
> - Footer Content: structured navigation, legal disclaimers, social prompts
>
> Formatting requirements: use persuasion triggers such as authority, urgency, and exclusivity; integrate high-impact power words; specify character counts; clearly label hierarchy (H1, H2, Body). This content will populate Figma Make layouts directly.

### 4. The Interaction Systems Engineer

> You are a Senior Frontend Systems Engineer. Architect the functional logic for the following advanced interactive modules:
>
> Required components: multi-step form with validation and progress tracking; real-time pricing calculator with dynamic computation; faceted search with filtering, sorting, and pagination; user dashboard with analytics visualization and CRUD capability; full authentication lifecycle (login, registration, password recovery).
>
> For each module, define: state machine structure (textual diagram explanation), data flow (props, events, API communication patterns), error management strategy, loading behavior, empty state UX, edge case handling.
>
> Then generate a React component architecture outline including hooks, handlers, and structural logic. This will inform the interactive prototype build within Figma Make.

### 5. The Figma Make Prompt Translator

> You are a specialist in translating technical specifications into optimized Figma Make prompts.
>
> Convert the following full specification into five separate high-precision Figma Make prompts: [PASTE SPECIFICATION HERE]
>
> Each prompt must: begin with the final visual outcome; embed brand identity context (color, typography, tone); define interaction behaviors (hover, click, scroll, animated transitions); specify responsive adaptation across breakpoints; clearly request structural sections (hero, feature grid, CTA, footer).
>
> Required format example: "Create a [TYPE] website with a [MOOD] aesthetic. Use [PRIMARY COLOR] and [FONT SYSTEM]. Include: 1) Hero section with [SPECIFIC ELEMENTS], 2) Interactive feature grid with [DEFINED BEHAVIORS], 3) Conversion-focused CTA block, 4) Structured footer. Ensure full responsiveness and smooth [ANIMATION STYLE] transitions."

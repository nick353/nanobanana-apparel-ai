# NanoBanana Design System: Complete Style Guide

*For AI-Powered Apparel Design Studio*

---

## Pontificating: Adapting Marketplace Design to Creative Tool Design

### On Trust: From Social Proof to Process Transparency

**The Marketplace Context (Airbnb):**
In Airbnb's world, trust is built through social proof—ratings, reviews, badges, authentic photos. Users trust the platform because other users have validated it. The design system reinforces this through persistent visibility of ratings, prominent Superhost badges, and review counts everywhere. Trust is horizontal: user-to-user, mediated by platform.

**The Creative Tool Context (NanoBanana):**
In NanoBanana's world, trust must be built differently. There are no peer reviews of AI-generated designs. Instead, trust comes from **process transparency**—showing users exactly what the AI is doing, giving them control at every step, and never hiding the "how" behind a black box. The live results panel isn't just a nice-to-have; it's existential. Users need to see the AI working, understand the transformations happening, and feel confident that they're in control of the creative process.

**Design Implications:**
- Replace "reviews and ratings" with "process steps and progress indicators"
- Make loading states informative, not just decorative (show what's happening: "Analyzing fabric texture...", "Applying color palette...")
- Provide undo/redo prominently—users must feel they can experiment without fear
- Show the AI's "reasoning" when possible (e.g., "Detected: Cotton fabric, adjusting lighting for texture preservation")

### On Friction: From Booking Flow to Creative Flow

**The Marketplace Context:**
Airbnb obsesses over reducing friction in a linear journey: search → browse → evaluate → book. Every extra tap is a potential abandonment. Speed equals conversion. The goal is to make booking feel as easy as ordering takeout.

**The Creative Tool Context:**
In creative tools, **not all friction is bad**. Some friction—the ability to tweak parameters, preview before committing, compare variations side-by-side—is actually desired. The goal isn't to rush users through; it's to keep them in flow state. A designer spending 20 minutes experimenting with color variations isn't "friction"—it's engagement. It's value.

**Design Implications:**
- Don't auto-apply AI suggestions—show preview, let user choose
- Embrace comparison views (before/after, variant A vs B vs C)
- Make "experimentation" easy, not "speed to done"
- Provide keyboard shortcuts for power users (Ctrl+Z, Ctrl+D for duplicate, etc.)
- Allow parameter adjustment sliders, not just one-click magic
- Save workspace state—users should be able to leave and return to exactly where they were

### On Hierarchy: From Photo-First to Process-First

**The Marketplace Context:**
Airbnb is photo-first because the property image does 80% of the selling. Everything else is supporting information. The hierarchy is clear: Image > Price > Rating > Details.

**The Creative Tool Context:**
NanoBanana must be **process-first**. The hierarchy is: Current Workflow Step > Input/Parameters > Action Button > Results. Users need to know where they are in the process before anything else. Unlike Airbnb where all listings compete for attention, in NanoBanana, each workflow is a focused journey. The interface should make the current step unmistakable.

**Design Implications:**
- Prominent workflow breadcrumb/stepper showing current position
- Clear "You are here" indicators
- Active workflow occupies primary real estate
- Results panel is prominent but doesn't dominate (users need to see both input and output simultaneously)
- Use spatial layout: inputs left, preview center, results right (or inputs top, results bottom on mobile)

### On Emotion: From Aspiration to Confidence

**The Marketplace Context:**
Airbnb wants users to feel **inspired** (beautiful destinations), **confident** (clear information), **excited** (about upcoming travel), and **welcomed** (after booking). The emotional arc is anticipation → confirmation → satisfaction.

**The Creative Tool Context:**
NanoBanana wants users to feel **creative** (empowered to experiment), **confident** (in the AI's suggestions), **in control** (over the final output), and **productive** (getting real work done). The emotional arc is curiosity → exploration → refinement → accomplishment.

**Design Implications:**
- Celebrate creative achievements (smooth save animation, "Draft saved" confirmation)
- Make experimentation feel safe ("Preview" before "Apply")
- Provide positive feedback for every action ("Color scheme adjusted", not just a loading spinner)
- Use warmer, more creative color palette vs. corporate blue or aggressive red
- Glassmorphism and soft gradients create a creative, studio-like atmosphere

### On Glassmorphism: Material Language for Digital Creation

**Why Glassmorphism for NanoBanana:**

Traditional flat design (like Airbnb's) communicates clarity and content-focus. Glassmorphism communicates **layers of creativity**—the metaphor of transparent sheets where you can see your work beneath the controls. It's perfect for a creative tool because:

1. **Depth without distraction:** Glass cards float above the workspace, clearly delineating tool from canvas
2. **Professional creativity:** Not as playful as neomorphism, not as corporate as flat—it's the sweet spot for professional creative tools
3. **Focus on content:** The blur behind glass UI naturally draws attention to what's in focus (the current work)
4. **Modern, premium feel:** Communicates that this is cutting-edge AI technology, not a basic photo editor

**Design Implications:**
- Use frosted glass (backdrop-filter: blur) for panels, modals, and overlays
- Subtle gradients on glass surfaces (not flat colors)
- Lighter borders and shadows (glass is naturally subtle)
- Be judicious—too much glass makes interfaces hard to read. Use solid backgrounds for primary work areas.

### On Color: From Brand Energy to Creative Calm

**The Marketplace Context:**
Rausch Pink is energetic, attention-grabbing, celebratory. It signals "take action!" It creates urgency and excitement. It's meant to convert.

**The Creative Tool Context:**
NanoBanana needs **creative calm**—colors that energize without overwhelming, that provide clarity without sterility. Designers will spend hours in this interface. Aggressive CTAs would be exhausting. Instead, we need:

1. **Warm neutrals** as primary (cream, warm gray, soft beige)
2. **Soft accent colors** that inspire creativity (muted teal, dusty purple, warm coral)
3. **High contrast for clarity** but not harshness (charcoal on cream, not black on white)
4. **Semantic colors** that communicate clearly (soft green = success, warm amber = processing, soft red = error)

**Design Implications:**
- Primary actions in soft, confident color (not aggressive pink)
- Use color psychology: blues for trust, greens for confirmation, amber for AI processing
- Background: warm off-white or very light cream (easier on eyes than pure white)
- Dark mode should be warm gray, not cold blue-gray

### On Animation: From Delight to Feedback

**The Marketplace Context:**
Airbnb animations create subtle delight—a gentle scale on hover, a smooth modal transition. They're quick (150-300ms) and purposeful but primarily aesthetic.

**The Creative Tool Context:**
In NanoBanana, animations are **functional feedback**. When AI is processing, users need to know it's working (not frozen). When a change applies, users need to see what changed. Animations are documentation—they show causality.

**Design Implications:**
- Progress animations during AI processing (show actual progress, not infinite spinners)
- State transition animations (show before → after, not just replace)
- Morph/transform animations when AI edits images (fade from original to edited)
- Skeleton screens that match actual content structure
- Celebrate completions (gentle success animation when workflow finishes)

---

## Pontificating: The Nine Workflows and Information Architecture

**The Challenge:**
NanoBanana has 9 distinct AI workflows. Airbnb-style card grids won't work—these aren't items to browse and compare. They're tools to choose and use sequentially.

**The Solution:**
Organize by **creative intent**, not alphabetically:

### 1. **Ideation Phase**
- Design Idea Generation (from text prompt)
- Design Variation (from existing design)

### 2. **Visualization Phase**
- AI Model Wearing (product on model)
- Background Selection (product in context)

### 3. **Refinement Phase**
- Image Retouch (general improvements)
- Color Customize (specific color changes)
- Background Change (background manipulation)
- Design Instruction Integration (complex edits from natural language)

### 4. **Advanced Workflows**
- Background Image Selection (custom background upload)
- AI Model Selection (specific model choice)

**Interface Structure:**
Rather than a 3x3 grid of equal cards, organize hierarchically:
- **Main navigation:** Tabs or stepper showing phase (Ideate → Visualize → Refine)
- **Within phase:** Workflow cards, each expanding to reveal the interface
- **Active workflow:** Takes over primary screen area with dedicated UI
- **Results history:** Persistent sidebar showing all outputs from current session

This prevents decision paralysis (9 equal choices) and guides users through a natural creative process.

---

## Pontificating: Transparency as Trust—The Live Results Panel

**The Airbnb Equivalent:**
In Airbnb, transparency means showing total price, reviews, and photos upfront. No surprises, no hidden fees. This builds trust in the transaction.

**The NanoBanana Equivalent:**
In NanoBanana, transparency means **showing the AI's work process**. The live results panel is where trust is built or broken. Users need to see:

1. **What's happening:** "Analyzing product dimensions..."
2. **How long it might take:** Progress indicator (0-100% or estimated time)
3. **What changed:** Before/after comparison
4. **Processing details:** Resolution, file size, any quality adjustments made
5. **The ability to trace back:** Each result stored with the parameters that created it

**Design Implications:**
- Results panel always visible (not hidden in a modal)
- Show processing log (timestamped steps)
- Provide metadata for every output (dimensions, file size, AI model used, parameters applied)
- Allow downloading results with metadata embedded
- Show costs/credits used per operation (if applicable)
- Visual comparison tools (slider, side-by-side, overlay)

**The Panel Layout:**
```
┌─────────────────────────────────┐
│ AI Processing: Color Adjustment │
│ ═══════════░░░░░░░░░░░░ 45%     │
│                                 │
│ Current step:                   │
│ • Analyzing original colors ✓   │
│ • Generating palette ⟳         │
│ • Applying to product           │
│ • Finalizing output             │
│                                 │
│ [Preview] [Download] [Copy URL]│
└─────────────────────────────────┘
```

---

## Pontificating: Drag-and-Drop as First-Class Interaction

**The Airbnb Context:**
Airbnb doesn't need drag-and-drop. Users type, tap, and scroll. File upload (for verification documents, host photos) is secondary, hidden in settings.

**The NanoBanana Context:**
Drag-and-drop is **primary interaction**. Designers work with images—it should be effortless to get images into the system. Every workflow that accepts an image should have a prominent, beautiful drop zone.

**Design Principles:**
1. **Visible by default:** Don't hide drop zones behind "Upload" buttons
2. **Always active:** Drop zones should always accept drops, not just when "active"
3. **Visual feedback:** Clear indication when dragging over (border glow, background lift)
4. **Forgiving:** Accept multiple formats (JPG, PNG, WEBP, even PSD or AI files)
5. **Smart handling:** Auto-crop, auto-resize, auto-compress—but always show user what happened
6. **Error recovery:** If file is wrong format/size, explain clearly and offer to fix ("Image is 8000x6000. Resize to 2000x1500 for faster processing?")

**The Drop Zone Design:**
```
┌─────────────────────────────────────────────┐
│                                             │
│          [Icon: Image upload]               │
│                                             │
│    Drop your product photo here            │
│    or click to browse                       │
│                                             │
│    JPG, PNG, WEBP • Max 10MB                │
│                                             │
└─────────────────────────────────────────────┘

On drag-over:
┌─────────────────────────────────────────────┐
│  ╔══════════════════════════════════════╗ │
│  ║                                       ║ │
│  ║       [Icon: Animated pulse]          ║ │
│  ║                                       ║ │
│  ║       Release to upload               ║ │
│  ║                                       ║ │
│  ╚══════════════════════════════════════╝ │
└─────────────────────────────────────────────┘
```

---

## Pontificating: Workspace Persistence and History

**The Airbnb Context:**
Airbnb is stateless between sessions. If you close the browser, you start fresh. Search history is minimal. This is fine for browsing—most people don't return to the exact same search.

**The Creative Tool Context:**
NanoBanana must be **stateful and persistent**. Designers work in sessions—they experiment with variations, compare outputs, return hours later to continue. Losing work is catastrophic.

**Design Implications:**
1. **Auto-save everything:** Every AI generation is automatically saved to session history
2. **Session recovery:** If browser closes, reopening shows exactly where user left off
3. **History panel:** Chronological list of all generated outputs in current session
4. **Naming and organization:** Let users name sessions, add notes, organize into projects
5. **Export session:** Download entire session as ZIP with all outputs and parameters
6. **Version history:** If user re-runs same workflow with different parameters, show as versions

**The History Panel:**
```
Session: Spring Collection 2024
Started: Today at 2:14 PM

┌─────────────────────────────────┐
│ [Thumbnail] 2:34 PM             │
│ AI Model Wearing                │
│ Model: Female, Casual Pose      │
│ [View] [Download] [Rerun]       │
├─────────────────────────────────┤
│ [Thumbnail] 2:28 PM             │
│ Background Change               │
│ Style: Studio White             │
│ [View] [Download] [Rerun]       │
├─────────────────────────────────┤
│ [Thumbnail] 2:19 PM             │
│ Color Customize                 │
│ Changed: Blue → Navy            │
│ [View] [Download] [Rerun]       │
└─────────────────────────────────┘
```

---

# Part I: Design Philosophy for NanoBanana

## Welcome to the NanoBanana Design Team

Welcome to NanoBanana. You're joining a team that's building something special: an AI-powered creative studio that empowers apparel designers to do their best work. This isn't just another photo editor, and it's not just another AI tool. It's a **creative partner**—a space where human creativity and artificial intelligence collaborate to produce exceptional apparel visuals.

This style guide will teach you how we think about design at NanoBanana. The technical specifications matter, but the philosophy behind them matters more. Every color, every animation, every bit of microcopy has been chosen to support our core mission: **helping apparel designers create confidently**.

---

## The Foundation: Create Confidently

At its core, NanoBanana exists to empower apparel designers with AI tools they can trust. When a designer opens NanoBanana, they're not just looking to apply a filter or automate a task—they're seeking a **creative partner** that augments their skills, speeds up their workflow, and produces professional results they can confidently present to stakeholders.

This mission manifests in our design through several key tenets:

### 1. Transparency is Trust

In a world where AI is often a "black box," transparency isn't optional—it's existential. Our design system must make the invisible visible.

**How this manifests in design:**

- **Process visibility:** Users see exactly what the AI is doing at each step. Not just "Processing..." but "Analyzing fabric texture • Adjusting lighting • Enhancing details."

- **Before/after comparisons:** Every AI transformation shows clear before/after states. Users can slide to compare, view side-by-side, or overlay with opacity control.

- **Parameter exposure:** We don't hide the settings. If the AI makes a decision (color temperature adjustment, brightness correction), we show it. Users can override.

- **Results panel always visible:** The live results panel isn't hidden in a tab—it's a first-class citizen of the interface. Processing logs, metadata, and outputs are always accessible.

**Why it matters:** Designers need to trust the tool to trust the output. When presenting to a creative director or client, they need to confidently explain what was done and why. Our transparency enables their confidence.

### 2. Control Over Automation

AI should **augment** human creativity, not replace it. We provide intelligent suggestions, not fait accompli.

**How this manifests in design:**

- **Preview before apply:** AI suggestions are shown as previews. Users explicitly choose to apply them. No auto-commits.

- **Undo is always prominent:** Ctrl+Z, visual undo button, history panel. Users experiment freely because they can always go back.

- **Parameter sliders:** Instead of one-click magic, we often provide sliders (intensity, strength, confidence) that let users tune AI behavior.

- **Multiple variations:** Generate 2-4 variations, let user choose the best or elements from each.

**Why it matters:** Designers don't want to be automated out of their jobs—they want to work faster and better. Giving control respects their expertise while leveraging AI's capabilities.

### 3. Workflow Over Features

We don't organize by "what the tech does" (background removal, color adjustment, style transfer). We organize by **what the designer wants to accomplish** (ideate, visualize, refine).

**How this manifests in design:**

- **Phase-based navigation:** Workflows grouped into Ideation, Visualization, Refinement phases that match creative process.

- **Contextual tool suggestions:** If user uploads product photo, we suggest "Try AI Model Wearing" or "Change Background."

- **Session continuity:** The interface remembers where you are in your creative journey and helps you proceed to logical next steps.

- **Integrated workspace:** Everything happens in one place. No "export to another tool to do X."

**Why it matters:** Designers think in workflows, not in isolated features. Matching their mental model reduces cognitive load and keeps them in creative flow.

### 4. Creative Calm

Designers will spend hours in NanoBanana. The interface must be energizing without being exhausting, clear without being clinical.

**How this manifests in design:**

- **Warm, muted color palette:** Soft teals, dusty purples, warm corals—not aggressive primary colors.

- **Generous space, soft edges:** Room to breathe, rounded corners, glassmorphism instead of harsh borders.

- **Smooth, purposeful animations:** Transitions feel natural, never jarring. Everything has momentum and ease.

- **Calm typography:** Readable, generous line heights, not overly condensed or aggressive weights.

**Why it matters:** Creative work requires sustained focus. An interface that feels like a calm studio rather than a buzzing arcade supports better work.

### 5. Fast Feedback, Patient Process

Immediate responsiveness where it matters, thoughtful pacing where it helps.

**How this manifests in design:**

- **Instant interactions:** Hover states, button clicks, tab switches—all immediate (<100ms).

- **Progress indicators for AI:** When waiting for AI, users see detailed progress, not just spinners. "Analyzing image: 23% • Est. 45s remaining."

- **Skeleton screens:** While loading, show structure of what's coming (preview panes, result cards) so users know what to expect.

- **Interruptible processes:** If AI is running, users can cancel cleanly. No forcing them to wait.

**Why it matters:** Responsiveness builds trust. When UI is instant but AI takes time, users trust the tool and understand AI requires processing. When UI is also slow, users question everything.

### 6. Accessible to All Skill Levels

From junior designers to creative directors, NanoBanana should feel approachable yet powerful.

**How this manifests in design:**

- **Simple defaults, powerful customization:** Main workflows use smart defaults (auto-detect product, auto-choose model pose). Advanced users can override everything.

- **Progressive disclosure:** Basic parameters visible; advanced options behind "Advanced" expander.

- **Keyboard shortcuts for power users:** Ctrl+Z undo, Ctrl+D duplicate, Ctrl+S save, arrow keys to navigate results.

- **Contextual help:** Inline tooltips, example images showing what each option does, help links where needed.

**Why it matters:** The tool should grow with the user. Beginners get results fast; experts get the control they need. Neither group is alienated.

### 7. Collaboration-Ready

Designs aren't created in isolation. They're shared, reviewed, and iterated upon.

**How this manifests in design:**

- **Export with context:** Downloaded images include metadata (parameters, AI model used, timestamp) embedded.

- **Shareable sessions:** Generate link to current session; colleagues can view results or even pick up where you left off.

- **Annotation and notes:** Add comments to outputs ("Try this for spring campaign" or "Client prefers version 2").

- **Version history:** See all iterations of a design, compare, revert, branch.

**Why it matters:** Professional creative work is collaborative. The tool that facilitates sharing and iteration wins.

---

## The Emotional Journey

When a designer uses NanoBanana, we want them to feel:

### Curious (First Impression)
"What can this do?" The interface should invite exploration with clear, inviting workflow cards and inspiring example outputs. Not intimidating, not overwhelming—intriguing.

### Empowered (Early Use)
"I can do this!" First successful AI generation should happen fast (<2 minutes from landing to first output). Immediate positive feedback builds confidence.

### In Flow (Deep Use)
"I'm making great progress!" During extended sessions, the interface fades to background. Designer focuses on the work, not the tool. Friction disappears.

### Confident (Completion)
"This is good work!" When exporting final results, designers feel proud. The outputs are professional, the process was efficient, and they can explain every decision.

### Supported (Throughout)
"The tool is helping me!" At no point should designers feel abandoned or frustrated. Clear error messages, helpful suggestions, and easy recovery from mistakes create a sense of partnership.

---

## Color Psychology for Creative Tools

### Primary Palette: Creative Neutrals

**Warm Cream (#FAF8F5)** - Primary background
- Softer than white, easier on eyes during long sessions
- Creates warmth and approachability
- Reflects light without glare

**Charcoal (#2D2D2D)** - Primary text
- Strong contrast without harshness of pure black
- Professional and serious but not intimidating
- Readable for hours without fatigue

**Soft Gray (#9CA3AF)** - Secondary text and borders
- Provides hierarchy without high contrast
- Subtle boundaries, doesn't draw attention

### Accent Palette: Creative Energy

**Muted Teal (#4FB3A0)** - Primary actions and AI active state
- Calming yet energetic—signals "creation happening"
- Associated with trust, technology, and creativity
- Gender-neutral and culturally positive
- Use for: Primary buttons, AI processing indicators, active workflow highlights

**Dusty Purple (#8B7BB5)** - Secondary actions and creative tools
- Inspires creativity and imagination
- Differentiates from primary without competing
- Use for: Secondary buttons, creative suggestions, "try this" prompts

**Warm Coral (#F27C7C)** - Caution and errors (soft, not alarming)
- Warm rather than aggressive red
- Indicates issues without creating panic
- Use for: Error messages, warnings, destructive actions

**Soft Gold (#F4C47D)** - Success and celebration
- Warm, positive, celebratory
- Associated with quality and achievement
- Use for: Success confirmations, completed workflows, premium features

### Glassmorphism Colors

**Frosted Glass Effect:**
- Background: `rgba(255, 255, 255, 0.7)`
- Backdrop blur: `blur(12px)`
- Border: `1px solid rgba(255, 255, 255, 0.3)`
- Shadow: Soft, elevated

**When to use glass:**
- Floating panels over workspace
- Modals and overlays
- Results panel that sits above canvas
- Workflow selection cards

**When NOT to use glass:**
- Primary work areas (need solid backgrounds for image editing)
- Text-heavy content (blur reduces readability)
- Everywhere (reserve for elevation and focus)

---

## Typography as Functional Beauty

### Font Family: Inter

We use **Inter** because:
- **Designed for screens:** Excellent hinting and readability at all sizes
- **Neutral but friendly:** Professional without being corporate, approachable without being casual
- **Wide glyph support:** Works globally, handles technical characters (•, ✓, →) cleanly
- **Open source:** Reliable, well-maintained, freely available
- **Variable font support:** Fine-tune weights for exact hierarchy needs

**Fallback stack:**
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
```

### Font Weights

- **Regular (400):** Body text, descriptions, most UI copy
- **Medium (500):** Button text, input labels, subtle emphasis
- **Semibold (600):** Headings, active states, key information
- **Bold (700):** Large headings only, use sparingly for maximum impact

### Line Heights for Extended Reading

Creative work involves reading instructions, reviewing descriptions, comparing options. Generous line heights prevent fatigue:

- **Headings:** 1.3 (tighter for visual impact)
- **Body text:** 1.6 (generous for comfortable reading)
- **UI labels:** 1.4 (balanced)
- **Code/technical:** 1.5 (monospace needs more space)

---

## Interaction Principles

### 1. Immediate Feedback
Every interaction receives immediate visual feedback (<100ms). Button press, checkbox toggle, tab switch—users should never wonder "did that work?"

### 2. Smooth State Transitions
States don't snap—they transition. Images fade in, panels slide, modals scale. This creates a sense of physicality and polish.

### 3. Reversible Actions
Undo is always available. Dangerous actions (delete, overwrite) require confirmation. Users experiment freely when they know they can reverse.

### 4. Visible System Status
Users always know: Where am I? What's happening? How long will it take? What can I do next?

### 5. Respect Attention
Notifications are minimal and purposeful. No modal interruptions during creative flow. Status updates are ambient (corner notifications, progress in sidebar).

---

# Part II: How To Leverage This Style Guide

## For Product Designers

### Start with User Goals, Not AI Capabilities

**Wrong approach:**
"We have a background removal API. Let's add a background removal feature."

**Right approach:**
"Designers need product photos on clean backgrounds for e-commerce. What's the fastest path from raw photo to clean result? Background removal is one step in that workflow."

Build workflows around **desired outcomes**, not around what the AI can do.

### Design for the "First 5 Minutes" and the "Deep 2 Hours"

**First 5 minutes:**
- Dead simple onboarding (single workflow, one example)
- Instant gratification (first result in <2 minutes)
- Clear next steps ("Now try adding a model")

**Deep 2 hours:**
- Keyboard shortcuts available
- History panel for comparing 20+ variations
- Parameter customization for experts
- Batch operations for efficiency

Both users might be the same person at different times. Design for both modes.

### Embrace Comparison Views

Creative decisions require comparison:
- Before/after slider
- Side-by-side layouts (2, 3, or 4 results at once)
- Grid view of all session outputs
- Overlay mode (fade between versions)

Don't force users to remember—show them simultaneously.

### Use Glass Thoughtfully

Glassmorphism is beautiful but can reduce readability:

**Good uses:**
- Modal overlays (glass over blurred background)
- Floating tool panels (glass over workspace)
- Results panel (glass over canvas)

**Bad uses:**
- Text-heavy documentation (hard to read through blur)
- Primary editing canvas (needs solid background)
- Everywhere (loses impact, reduces clarity)

**Rule of thumb:** Glass for UI that "floats above" work. Solid for work itself.

---

## For Engineers

### Prioritize Perceived Performance Over Actual Performance

What matters isn't how fast the AI runs—it's how fast it *feels*.

**Techniques:**
- Optimistic UI updates (assume success, revert on error)
- Skeleton screens (show structure while loading actual content)
- Progressive image loading (blur → sharp)
- Background prefetching (if user hovers "AI Model Wearing", prefetch model data)
- Chunked progress (show 5 discrete steps rather than smooth 0-100%)

### Make Loading States Informative

Replace:
```
⟳ Processing...
```

With:
```
⟳ Processing image (45%)
  • Removing background ✓
  • Detecting product type ✓
  • Generating variations ⟳
  • Finalizing output

  Est. 30 seconds remaining
```

Users tolerate waiting when they understand what's happening.

### Handle Errors Gracefully

AI fails. Networks fail. Inputs are weird. Design for failure:

**Bad error:**
```
Error: API returned 500
[OK]
```

**Good error:**
```
⚠️ Image processing failed

The AI had trouble analyzing this image.
This usually happens with:
- Very low resolution images (< 500px)
- Heavily compressed files
- Unusual file formats

Try:
• Uploading a higher quality version
• Converting to JPG or PNG
• Cropping to focus on product only

[Try Again] [Contact Support]
```

### Implement Real Undo/Redo

Not just Ctrl+Z for last action—full history stack:
- Every AI generation is a history state
- Undo moves backward, redo moves forward
- History panel shows entire stack visually
- Branching: if user undoes then does something new, create branch (don't delete redo path)

This is complex but essential for creative confidence.

---

## For Content Designers

### Write for Creators, Not Consumers

Airbnb writes for people booking travel (consumers). NanoBanana writes for people creating professional work (creators). The tone shifts from friendly-helpful to professional-supportive.

**Consumer tone (Airbnb):**
"Find your next adventure!"

**Creator tone (NanoBanana):**
"Generate design variations"

Be clear, direct, professional. Avoid:
- Marketing hype ("Amazing AI magic!")
- Overly casual ("Let's make some cool stuff!")
- Condescension ("Easy as 1-2-3!")

Aim for knowledgeable colleague, not enthusiastic friend.

### Front-Load Critical Information

Designers scan quickly:

**Bad:**
"Our advanced AI system has been trained on millions of apparel images to provide you with the best possible background removal results."

**Good:**
"Remove background from product photo. Best results with solid-color backgrounds and good lighting."

Key info first, details later.

### Make Errors Actionable

Every error message should answer three questions:
1. What went wrong?
2. Why did it happen?
3. What can I do about it?

**Bad:**
"Upload failed"

**Good:**
"Image too large (15MB)
Our system supports images up to 10MB. Try:
• Resizing to 2000px width or less
• Compressing with TinyPNG
• Converting to JPG (smaller than PNG)"

---

## Common Design Decisions for Creative Tools

### "Should this be real-time or on-demand?"

**Real-time when:**
- Effect is instant (< 200ms) — color picker, crop, rotate
- Seeing immediate feedback aids the creative decision
- Processing is lightweight

**On-demand when:**
- Processing takes > 2 seconds — AI generation, complex filters
- Multiple parameters should be set before running
- Processing costs money/credits

**Hybrid approach:**
Provide real-time preview at low quality, on-demand for full quality.

### "Should AI results replace the original or create a new version?"

**Always create new versions.** Never destroy the original.

Designers often realize the AI's first suggestion wasn't best. They need to compare, revert, or blend.

**Pattern:**
- Original remains in workspace
- AI result appears as new item
- User can compare, keep both, or discard AI result
- History shows both

### "How much information should be visible by default?"

**Visible by default:**
- Current workflow step
- Input controls (upload, parameters)
- Primary action button
- Results preview
- Basic progress/status

**Hidden behind expander or secondary panel:**
- Advanced parameters
- Technical metadata
- Processing logs
- Help documentation
- Settings

**Rule:** If 80% of users don't need it for 80% of tasks, it can be hidden.

### "Should we show one AI result or multiple variants?"

**Show multiple when:**
- Processing time is similar (generating 3 variants vs 1 takes ~same time)
- Creative decision benefits from comparison (color schemes, poses, compositions)
- Cost is similar

**Show one when:**
- Processing time multiplies (3x longer for 3 variants)
- There's a clear "best" result (technical processing like upscaling)
- Parameters are so specific only one result makes sense

**Best practice:** Generate 2-4 variants, show all, let user pick.

---

## Quality Checklist for Creative Tools

Before marking any design as "ready for development":

### Functional Design
- [ ] All workflows have clear entry points
- [ ] Upload/input method is obvious (drag-drop zone visible)
- [ ] Processing states show progress and estimated time
- [ ] Error states provide actionable recovery steps
- [ ] Results can be compared (before/after, side-by-side)
- [ ] Undo/redo works for all user actions
- [ ] Session state persists (can leave and return)

### Visual Design
- [ ] Glass effects used judiciously (not everywhere)
- [ ] Color contrast meets WCAG AA (4.5:1 text)
- [ ] Warm color palette (not cold corporate blues)
- [ ] Rounded corners consistently 8-12px
- [ ] Shadows create clear elevation hierarchy
- [ ] Typography readable for extended sessions

### Interaction Design
- [ ] Immediate feedback (< 100ms) on all interactions
- [ ] Smooth transitions (200-300ms) between states
- [ ] Hover states on all interactive elements
- [ ] Focus states visible for keyboard navigation
- [ ] Loading states informative (not just spinners)

### Content Design
- [ ] Workflow names describe outcomes, not features
- [ ] Instructions front-load key information
- [ ] Error messages explain what/why/how-to-fix
- [ ] Technical jargon avoided or explained
- [ ] Tone professional-supportive, not casual-marketing

### Accessibility
- [ ] Keyboard shortcuts for common actions
- [ ] Screen reader labels on all interactive elements
- [ ] Color not the only indicator (icons + text)
- [ ] Touch targets 44px minimum
- [ ] Zoom to 200% without breaking layout

---

# Part III: Technical Style Guide Reference

---

## Color Palette

### Primary Colors

* **Warm Cream** - `#FAF8F5`
  * Primary background color for main workspace
  * Easier on eyes than pure white for extended creative sessions
  * Creates warm, approachable studio atmosphere

* **Charcoal** - `#2D2D2D`
  * Primary text color for all body content and headings
  * Strong contrast without harshness of pure black
  * Professional and readable for hours

* **Soft White** - `#FFFFFF`
  * Card backgrounds, modals, elevated surfaces
  * Reserve for content that should stand out from workspace
  * Use for glass effect base color

### Secondary Colors

* **Medium Gray** - `#6B7280`
  * Secondary text, metadata, supporting information
  * Use for less critical information
  * Good for disabled states

* **Light Gray** - `#9CA3AF`
  * Borders, dividers, subtle separators
  * Placeholder text in inputs
  * Inactive UI elements

* **Very Light Gray** - `#E5E7EB`
  * Subtle backgrounds for nested content
  * Hover states on neutral elements
  * Drop zone borders in default state

### Accent Colors

* **Muted Teal** - `#4FB3A0` (Primary action color)
  * Use for: Primary buttons, AI processing indicators, active workflow
  * Hover: `#45A08E` (10% darker)
  * Active: `#3D8B7B` (20% darker)
  * Meaning: Trust, creativity, AI at work

* **Dusty Purple** - `#8B7BB5` (Secondary action color)
  * Use for: Secondary buttons, creative suggestions, alternate actions
  * Hover: `#7D6DA7` (10% darker)
  * Meaning: Creativity, imagination, inspiration

* **Warm Coral** - `#F27C7C` (Error/warning color)
  * Use for: Errors, warnings, destructive actions
  * Background: `#FEF2F2` (very light coral for error backgrounds)
  * Meaning: Caution (but warm, not alarming)

* **Soft Gold** - `#F4C47D` (Success color)
  * Use for: Success messages, completions, achievements
  * Background: `#FFFBEB` (very light gold for success backgrounds)
  * Meaning: Success, quality, accomplishment

* **Sky Blue** - `#7FB3D5` (Information color)
  * Use for: Informational messages, tips, hints
  * Background: `#F0F9FF` (very light blue for info backgrounds)
  * Meaning: Neutral information, guidance

### Glassmorphism Colors

* **Frosted Glass Panel:**
  * Background: `rgba(255, 255, 255, 0.75)`
  * Backdrop Filter: `blur(16px) saturate(180%)`
  * Border: `1px solid rgba(255, 255, 255, 0.4)`
  * Shadow: `0 8px 32px rgba(0, 0, 0, 0.08)`

* **Frosted Glass Panel (Dark mode):**
  * Background: `rgba(45, 45, 45, 0.75)`
  * Backdrop Filter: `blur(16px) saturate(180%)`
  * Border: `1px solid rgba(255, 255, 255, 0.1)`
  * Shadow: `0 8px 32px rgba(0, 0, 0, 0.3)`

* **Glass Hover State:**
  * Background: `rgba(255, 255, 255, 0.85)` (more opaque)
  * Border: `1px solid rgba(255, 255, 255, 0.5)` (stronger)

---

## Typography

### Font Family

* **Primary Font:** Inter
  * Web Font: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif`
  * Variable Font: Use Inter variable font for fine-tuned weights
  * Japanese: Noto Sans JP as primary, fall back to system fonts

### Font Weights

* **Regular (400)** - Body text, most UI copy
* **Medium (500)** - Button text, input labels, links
* **Semibold (600)** - Headings, active states, emphasis
* **Bold (700)** - Major headings only, use sparingly

### Text Styles

#### Headings

* **H1 (Page Title):** 28px/36px, Semibold (600), Letter spacing -0.4px
  * Color: Charcoal `#2D2D2D`
  * Use for: Main page titles, workflow names when active
  * Example: "AI Model Wearing" when that workflow is active

* **H2 (Section Header):** 20px/28px, Semibold (600), Letter spacing -0.2px
  * Color: Charcoal `#2D2D2D`
  * Use for: Panel titles, major sections within workflows
  * Example: "Upload Product Photo", "Generated Results"

* **H3 (Subsection):** 16px/24px, Medium (500), Letter spacing 0px
  * Color: Charcoal `#2D2D2D`
  * Use for: Card titles, parameter groups, result labels

#### Body Text

* **Body Large:** 16px/26px, Regular (400), Letter spacing 0px
  * Color: Charcoal `#2D2D2D`
  * Use for: Primary instructions, descriptions, important information
  * Line height 1.6 for comfortable extended reading

* **Body Regular:** 14px/22px, Regular (400), Letter spacing 0.1px
  * Color: Charcoal `#2D2D2D`
  * Use for: Standard UI text, button labels, most content
  * Most common text style in the interface

* **Body Small:** 12px/18px, Regular (400), Letter spacing 0.2px
  * Color: Medium Gray `#6B7280`
  * Use for: Metadata, timestamps, supporting details
  * Minimum readable size—use sparingly

#### Special Text

* **Button Text:** 14px/20px, Medium (500), Letter spacing 0.3px
  * Color: White `#FFFFFF` (on colored buttons) or Charcoal (on neutral buttons)
  * Slightly increased letter spacing for clarity

* **Input Label:** 12px/16px, Medium (500), Letter spacing 0.2px
  * Color: Charcoal `#2D2D2D`
  * Always above input, 8px gap

* **Helper Text:** 12px/18px, Regular (400), Letter spacing 0.1px
  * Color: Medium Gray `#6B7280`
  * Below inputs or fields, provides guidance

* **Badge/Tag Text:** 11px/16px, Medium (500), Letter spacing 0.4px
  * Often uppercase for labels like "NEW", "PROCESSING", "COMPLETED"
  * Color varies by badge type

* **Code/Technical:** 13px/20px, Regular (400), Monospace
  * Font: `'Fira Code', 'SF Mono', 'Consolas', monospace`
  * Color: Charcoal on light background
  * Use for: file names, technical parameters, resolution specs

---

## Component Styling

### Buttons

#### Primary Button

**Use for:** Main actions (Generate, Apply, Download, Save)

* **Background:** Muted Teal `#4FB3A0`
* **Text:** White `#FFFFFF`, 14px, Medium (500)
* **Height:** 44px
* **Corner Radius:** 8px
* **Padding:** 20px horizontal, 12px vertical
* **Border:** None
* **Hover:** Background `#45A08E`, subtle lift (translateY -1px)
* **Active:** Background `#3D8B7B`, scale 0.98
* **Disabled:** 40% opacity, cursor not-allowed
* **Transition:** 150ms ease-out all properties

**Implementation notes:**
- Include icon if action is ambiguous (e.g., download icon for "Download")
- Minimum width: 100px
- Never two primary buttons side-by-side (use primary + secondary)

#### Secondary Button

**Use for:** Secondary actions (Cancel, Back, Preview, Compare)

* **Background:** Transparent or Very Light Gray `#E5E7EB`
* **Text:** Charcoal `#2D2D2D`, 14px, Medium (500)
* **Height:** 44px
* **Corner Radius:** 8px
* **Padding:** 20px horizontal, 12px vertical
* **Border:** 1px solid Light Gray `#9CA3AF`
* **Hover:** Background `#E5E7EB`, border Medium Gray `#6B7280`
* **Active:** Background `#D1D5DB`, scale 0.98
* **Disabled:** 40% opacity

#### Glass Button (Special)

**Use for:** Buttons on glass panels or overlays

* **Background:** `rgba(255, 255, 255, 0.2)`
* **Backdrop Filter:** `blur(8px)`
* **Text:** Charcoal or White (depending on background darkness)
* **Border:** `1px solid rgba(255, 255, 255, 0.3)`
* **Hover:** Background `rgba(255, 255, 255, 0.3)`

#### Icon Button

**Use for:** Single actions (close, info, settings, favorite)

* **Size:** 40px × 40px
* **Icon Size:** 20px × 20px centered
* **Background:** Transparent (default), Light Gray on hover
* **Corner Radius:** 8px (rounded square) or 50% (circle)
* **Hover:** Background `#E5E7EB`
* **Active:** Scale 0.94

**Accessibility:** Include aria-label for screen readers

---

### Cards

#### Workflow Card

**Use for:** Selecting AI workflows from main menu

* **Background:** White `#FFFFFF` or Glass effect
* **Corner Radius:** 12px
* **Padding:** 24px
* **Border:** 1px solid Very Light Gray `#E5E7EB`
* **Shadow Default:** `0 1px 3px rgba(0, 0, 0, 0.08)`
* **Shadow Hover:** `0 4px 12px rgba(0, 0, 0, 0.12)`
* **Hover:** Subtle scale 1.02, border color Muted Teal `#4FB3A0`
* **Transition:** 200ms ease-out

**Content structure:**
1. Icon (48px × 48px) — represents workflow visually
2. Workflow name (H3, Semibold) — "AI Model Wearing"
3. Description (Body Regular) — Brief explanation
4. Badge (if applicable) — "NEW", "BETA", "PRO"

#### Result Card

**Use for:** Displaying AI-generated outputs in results panel

* **Background:** White `#FFFFFF`
* **Corner Radius:** 8px
* **Padding:** 12px
* **Border:** 1px solid Light Gray `#9CA3AF`
* **Shadow:** None (unless selected)
* **Selected State:** Border 2px solid Muted Teal, Shadow `0 4px 12px rgba(79, 179, 160, 0.2)`

**Content structure:**
1. Image thumbnail (aspect ratio maintained, max height 200px)
2. Metadata (timestamp, workflow name) — Body Small
3. Actions (download, view full, delete) — Icon buttons

#### Glass Panel

**Use for:** Floating panels, modals, results panel overlay

* **Background:** `rgba(255, 255, 255, 0.75)`
* **Backdrop Filter:** `blur(16px) saturate(180%)`
* **Corner Radius:** 16px (larger for panels vs 12px for cards)
* **Border:** `1px solid rgba(255, 255, 255, 0.4)`
* **Shadow:** `0 8px 32px rgba(0, 0, 0, 0.08)`
* **Padding:** 32px (desktop), 24px (mobile)

**When to use:**
- Floating tool panels
- Modal overlays
- Results panel when over canvas
- Settings panel

**When NOT to use:**
- Primary work area (needs solid background)
- Text-heavy content
- Areas where glass reduces readability

---

### Input Fields

#### Text Input

**Use for:** Single-line text entry (prompts, names, descriptions)

* **Height:** 44px
* **Corner Radius:** 8px
* **Border:** 1px solid Light Gray `#9CA3AF`
* **Background:** White `#FFFFFF`
* **Text:** 14px Regular, Charcoal
* **Placeholder:** 14px Regular, Medium Gray `#6B7280`
* **Padding:** 12px horizontal
* **Focus:** Border 2px solid Muted Teal `#4FB3A0`, shadow `0 0 0 3px rgba(79, 179, 160, 0.1)`
* **Error:** Border 2px solid Warm Coral `#F27C7C`
* **Disabled:** Background Very Light Gray, opacity 50%

**Label:** 12px Medium, above input with 8px gap

#### Textarea

**Use for:** Multi-line text (design briefs, instructions)

* **Min Height:** 100px
* **Corner Radius:** 8px
* **All other properties:** Same as Text Input
* **Resize:** Vertical only

#### File Upload / Drop Zone

**Use for:** Uploading product photos, backgrounds, reference images

**Default state:**
* **Height:** 200px (or auto if contains preview)
* **Background:** Very Light Gray `#E5E7EB` with dashed border
* **Border:** 2px dashed Light Gray `#9CA3AF`
* **Corner Radius:** 12px
* **Padding:** 32px
* **Content:** Icon (upload), text, supported formats

**Drag-over state:**
* **Background:** Muted Teal 10% opacity `rgba(79, 179, 160, 0.1)`
* **Border:** 2px solid Muted Teal `#4FB3A0`
* **Animation:** Subtle pulse

**With file loaded:**
* **Background:** White
* **Border:** 1px solid Light Gray
* **Content:** Image preview + filename + remove button

**Implementation:**
```html
<div class="drop-zone">
  <svg class="upload-icon">...</svg>
  <p class="primary">Drop your product photo here</p>
  <p class="secondary">or click to browse</p>
  <span class="formats">JPG, PNG, WEBP • Max 10MB</span>
</div>
```

#### Slider

**Use for:** Adjusting AI parameters (intensity, strength, confidence)

* **Track Height:** 4px
* **Track Color:** Light Gray `#9CA3AF`
* **Track Active Color:** Muted Teal `#4FB3A0`
* **Thumb Size:** 20px × 20px
* **Thumb Color:** White with border
* **Thumb Shadow:** `0 2px 4px rgba(0,0,0,0.2)`
* **Thumb Hover:** Scale 1.1
* **Corner Radius:** Track 2px, Thumb 50%

**Value display:** Show current value above or beside thumb

#### Dropdown/Select

**Use for:** Selecting from predefined options (model type, background style)

* **Height:** 44px
* **Appearance:** Same as Text Input with chevron icon
* **Chevron:** 16px × 16px, positioned right with 12px margin
* **Dropdown Menu:**
  * Background: White with glass effect
  * Shadow: `0 8px 24px rgba(0,0,0,0.12)`
  * Corner Radius: 8px
  * Max Height: 300px (scrollable)
  * Options: 44px height, 12px horizontal padding
  * Option Hover: Background Very Light Gray
  * Option Selected: Muted Teal 10% background, checkmark icon

---

### Navigation

#### Main Navigation

**Use for:** Top-level navigation between major sections

* **Height:** 64px
* **Background:** White `#FFFFFF` with subtle shadow
* **Border Bottom:** 1px solid Very Light Gray `#E5E7EB`
* **Padding:** 16px horizontal
* **Logo:** 32px height, left-aligned
* **Nav Items:** Right-aligned, 14px Medium text
* **Sticky:** Yes (remains at top on scroll)

**Structure:**
```
[Logo] [Workflow Phases: Ideate | Visualize | Refine] [User Menu]
```

#### Phase Navigation / Tabs

**Use for:** Switching between workflow phases (Ideate, Visualize, Refine)

* **Height:** 48px
* **Background:** Transparent
* **Tab Padding:** 16px horizontal, 14px vertical
* **Text:** 14px Medium
* **Text Color:** Medium Gray `#6B7280` (inactive), Charcoal (active)
* **Active Indicator:** 3px bottom border, Muted Teal
* **Hover:** Text color transitions to Charcoal
* **Transition:** 200ms ease-out

#### Workflow Stepper (Within Workflow)

**Use for:** Showing progress within multi-step workflow

* **Style:** Horizontal stepper with circles and connecting lines
* **Circle Size:** 32px
* **Circle Color:** Light Gray (incomplete), Muted Teal (complete), Muted Teal outline (current)
* **Connector Line:** 2px, Light Gray (incomplete), Muted Teal (complete)
* **Step Label:** Below circle, 12px Medium

```
● ————— ● ————— ○ ————— ○
Upload  Process Preview  Export
```

---

### Special Components

#### Live Results Panel

**Purpose:** Show AI processing status and outputs in real-time

**Layout:**
* **Position:** Right sidebar (desktop), bottom drawer (mobile)
* **Width:** 360px (desktop), full width (mobile)
* **Background:** Glass effect or White
* **Sticky:** Yes (remains visible during scroll)

**Content structure:**
```
┌─────────────────────────────────┐
│ Results                     [×] │
├─────────────────────────────────┤
│ ⟳ Processing: Color Adjust     │
│ ███████████░░░░░░░░░ 60%       │
│                                 │
│ • Analyzing colors ✓            │
│ • Generating palette ⟳         │
│ • Applying changes              │
│ • Finalizing                    │
│                                 │
│ Est. 25 seconds                 │
├─────────────────────────────────┤
│ [Thumbnail] 2:34 PM             │
│ Background Change ✓             │
│ [View] [Download] [Delete]      │
├─────────────────────────────────┤
│ [Thumbnail] 2:28 PM             │
│ AI Model Wearing ✓              │
│ [View] [Download] [Delete]      │
└─────────────────────────────────┘
```

**States:**
- Empty: Show prompt to start workflow
- Processing: Progress bar + step list + estimated time
- Complete: Thumbnail + metadata + actions
- Error: Error icon + message + retry button

#### Progress Indicator

**Use for:** Showing AI processing progress

**Linear Progress Bar:**
* **Height:** 6px
* **Background:** Light Gray `#9CA3AF`
* **Fill:** Muted Teal `#4FB3A0` with animated gradient
* **Corner Radius:** 3px
* **Animation:** Subtle shimmer effect during processing

**Circular Spinner:**
* **Size:** 24px (small), 48px (large)
* **Stroke:** 3px, Muted Teal
* **Animation:** Smooth rotation, 1s linear infinite

**Percentage Display:** Show alongside bar (e.g., "68%")

#### Before/After Comparison

**Use for:** Comparing original image with AI-generated result

**Slider Mode:**
* **Slider Handle:** 48px × 48px circle, white with shadow
* **Slider Track:** 2px white line
* **Images:** Positioned absolutely, clipped by slider position
* **Instructions:** "Drag to compare" text initially shown

**Side-by-Side Mode:**
* **Layout:** Two equal columns
* **Labels:** "Before" and "After" above each image
* **Sync:** If images are zoomable, sync zoom and pan

**Overlay Mode:**
* **Opacity Slider:** Control overlay transparency (0% = before, 100% = after)
* **Keyboard:** Arrow keys to adjust opacity

#### Status Badges

**Use for:** Workflow state, file status, processing state

**Variants:**

* **Processing:** Amber background, white text, spinner icon
  * Background: `#FEF3C7`, Text: `#92400E`, Icon: animated

* **Success:** Soft Gold background, text, checkmark icon
  * Background: `#FEF9EB`, Text: `#78350F`, Icon: `✓`

* **Error:** Coral background, text, X icon
  * Background: `#FEF2F2`, Text: `#991B1B`, Icon: `×`

* **New:** Sky Blue background, text
  * Background: `#DBEAFE`, Text: `#1E40AF`

**Styling:**
* **Padding:** 4px horizontal, 2px vertical
* **Corner Radius:** 4px
* **Font:** 11px Medium, uppercase letter spacing

#### Toast Notifications

**Use for:** Temporary feedback messages (saved, error, info)

**Position:** Top-right corner, 16px from edges (desktop); bottom, full width (mobile)

**Styling:**
* **Background:** White with shadow
* **Corner Radius:** 8px
* **Padding:** 16px
* **Shadow:** `0 4px 12px rgba(0,0,0,0.15)`
* **Max Width:** 400px (desktop)
* **Auto-dismiss:** 5 seconds (success/info), manual (error/warning)

**Content:**
* Icon (24px) + Message (14px Regular) + Close button (icon button)

**Variants:**
- Success: Soft Gold icon, message
- Error: Warm Coral icon, message
- Info: Sky Blue icon, message
- Warning: Amber icon, message

---

## Spacing System

**Base unit: 4px** (all spacing is multiple of 4)

* **4px** - Micro spacing (tight grouping, badge padding)
* **8px** - Small spacing (icon-text gap, input label gap)
* **12px** - Compact spacing (card internal padding, element clusters)
* **16px** - Default spacing (between UI elements, button padding)
* **24px** - Medium spacing (section spacing, card padding)
* **32px** - Large spacing (panel padding, major sections)
* **48px** - Extra large (between distinct content blocks)
* **64px** - XXL (page margins, hero spacing)

**Guidelines:**
- Default to 16px or 24px for most spacing
- Use 8px within components, 32px between components
- Maintain consistency within a context

---

## Layout Principles

### Workspace Layout

**Desktop (> 1024px):**
```
┌──────────────────────────────────────────────────────┐
│ [Top Navigation - 64px height]                       │
├────────────┬───────────────────────────┬─────────────┤
│            │                           │             │
│ Workflow   │   Main Canvas /          │  Results    │
│ Selector   │   Active Workflow        │  Panel      │
│            │                           │             │
│ 280px      │   (flexible)              │  360px      │
│            │                           │             │
└────────────┴───────────────────────────┴─────────────┘
```

**Tablet (768px - 1023px):**
```
┌──────────────────────────────────────────────────────┐
│ [Top Navigation - 64px height]                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│   Main Canvas / Active Workflow                      │
│   (full width)                                        │
│                                                       │
├──────────────────────────────────────────────────────┤
│   Results Panel (bottom drawer, collapsible)         │
└──────────────────────────────────────────────────────┘
```

**Mobile (< 768px):**
```
┌──────────────────────────┐
│ [Top Nav - 56px]         │
├──────────────────────────┤
│                          │
│   Main Canvas            │
│   (full width)           │
│                          │
├──────────────────────────┤
│ [Bottom: Results button] │
└──────────────────────────┘
```

### Card Grid (Workflow Selection)

* **Desktop:** 3 columns, 24px gap
* **Tablet:** 2 columns, 16px gap
* **Mobile:** 1 column, 16px gap

### Container Padding

* **Desktop:** 32px horizontal
* **Tablet:** 24px horizontal
* **Mobile:** 16px horizontal

---

## Motion & Animation

### Timing

* **Micro-interactions:** 100ms ease-out (button hover, checkbox toggle)
* **UI transitions:** 200ms ease-in-out (modal open, panel slide)
* **Image fade-in:** 300ms ease-out (result preview appears)
* **Progress animation:** 1.5s ease-in-out infinite (shimmer on loading bar)

### Easing Functions

* **Ease-out:** `cubic-bezier(0, 0, 0.2, 1)` - Quick start, slow finish (hover effects)
* **Ease-in-out:** `cubic-bezier(0.4, 0, 0.2, 1)` - Smooth both ways (modals, transitions)
* **Spring:** `cubic-bezier(0.68, -0.55, 0.265, 1.55)` - Subtle bounce (success confirmations)

### Animation Principles for Creative Tools

1. **Immediate UI feedback:** Button clicks, toggles feel instant
2. **Purposeful AI feedback:** Show what AI is doing, don't hide processing
3. **Smooth state transitions:** Fade between before/after, don't snap
4. **Respect reduced motion:** Disable animations if `prefers-reduced-motion: reduce`

### Key Animations

**Loading Shimmer (for skeleton screens):**
```css
@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}

.skeleton {
  background: linear-gradient(
    90deg,
    #E5E7EB 0px,
    #F3F4F6 50%,
    #E5E7EB 100%
  );
  background-size: 2000px 100%;
  animation: shimmer 1.5s infinite;
}
```

**Success Checkmark Animation:**
```css
@keyframes checkmark {
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); opacity: 1; }
}
```

---

## Elevation & Shadows

### Shadow Levels

* **Level 1 (Subtle):** `0 1px 3px rgba(0, 0, 0, 0.08)`
  * Use for: Default card state, subtle elevation

* **Level 2 (Raised):** `0 4px 12px rgba(0, 0, 0, 0.12)`
  * Use for: Hover states, active cards, selected items

* **Level 3 (Floating):** `0 8px 24px rgba(0, 0, 0, 0.12)`
  * Use for: Dropdowns, tooltips, popovers

* **Level 4 (Modal):** `0 16px 48px rgba(0, 0, 0, 0.15)`
  * Use for: Modals, dialogs, important overlays

* **Glass Shadow:** `0 8px 32px rgba(0, 0, 0, 0.08)`
  * Use for: Glass panels (softer than solid panels)

**Guidelines:**
- Use lowest level that creates necessary separation
- Match shadow to interaction (hover = Level 2, click = Level 3-4)
- Glass panels use softer shadows

---

## Accessibility

### Touch Targets

* **Minimum:** 44px × 44px (all interactive elements)
* **Preferred:** 48px × 48px (for primary actions)
* **Spacing:** 8px minimum between touch targets

### Color Contrast

* **Body text:** 4.5:1 minimum (WCAG AA)
  * Charcoal `#2D2D2D` on Warm Cream `#FAF8F5`: 11.2:1 ✓

* **Large text (18px+):** 3:1 minimum
  * All accent colors on white exceed 3:1 ✓

* **Interactive elements:** 3:1 against adjacent colors
  * Muted Teal buttons on white: 3.8:1 ✓

### Keyboard Navigation

* **Tab order:** Logical, matches visual flow
* **Focus indicators:** 2px solid Muted Teal outline, 2px offset
* **Shortcuts:**
  * `Ctrl+Z` / `Cmd+Z` - Undo
  * `Ctrl+Shift+Z` / `Cmd+Shift+Z` - Redo
  * `Ctrl+S` / `Cmd+S` - Save/Export
  * `Escape` - Close modal/cancel action
  * `Space` - Toggle selection in results
  * `Arrow keys` - Navigate results grid

### Screen Readers

* **All images:** Descriptive alt text
* **All icons:** ARIA labels
* **All inputs:** Associated `<label>` elements
* **Loading states:** `aria-live="polite"` regions for status updates
* **Progress bars:** `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax`

### Motion Sensitivity

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Responsive Breakpoints

* **Mobile:** 0 - 767px
* **Tablet:** 768px - 1023px
* **Desktop:** 1024px - 1439px
* **Large Desktop:** 1440px+

### Adaptive Patterns

**Navigation:**
- Mobile: Hamburger menu + bottom results button
- Tablet: Horizontal tabs + bottom drawer for results
- Desktop: Full navigation + persistent right sidebar for results

**Workflow Cards:**
- Mobile: 1 column, full width
- Tablet: 2 columns, 16px gap
- Desktop: 3 columns, 24px gap

**Results Panel:**
- Mobile: Bottom sheet (slides up from bottom)
- Tablet: Bottom drawer (half height, resizable)
- Desktop: Right sidebar (fixed 360px width)

---

## Design Principles Summary

**Quick reference for creative tool design:**

1. **Transparency is Trust**
   - Show AI process, don't hide it
   - Before/after comparisons everywhere
   - Metadata and parameters visible

2. **Control Over Automation**
   - Preview before apply
   - Undo always available
   - Parameters adjustable

3. **Workflow Over Features**
   - Organize by creative phase (Ideate → Visualize → Refine)
   - Suggest next logical steps
   - Session continuity

4. **Creative Calm**
   - Warm, muted color palette
   - Glassmorphism for depth without distraction
   - Generous spacing and soft edges

5. **Fast Feedback, Patient Process**
   - Immediate UI interactions
   - Detailed progress for AI processing
   - Skeleton screens while loading

6. **Accessible to All Skill Levels**
   - Simple defaults, advanced customization
   - Progressive disclosure
   - Keyboard shortcuts for power users

7. **Collaboration-Ready**
   - Export with metadata
   - Shareable sessions
   - Version history

8. **Process-First Hierarchy**
   - Current workflow step is unmistakable
   - Input/parameters clearly separated from output
   - Results panel always accessible

---

## Continuous Evolution

This style guide evolves with NanoBanana. As we add workflows, refine AI models, and learn from users, the design system grows.

**How to propose changes:**
1. Identify the problem or gap
2. Design and prototype solution
3. Test with actual designers (our users)
4. Document new pattern
5. Update component library
6. Communicate to team

**Remember:** These patterns exist to support designers in their creative work. If a pattern doesn't serve that goal, it should change. Always advocate for the user—the apparel designer trying to do great work.

---

## Conclusion

Welcome to NanoBanana's design team. You now have the tools, principles, and specifications to create an AI-powered creative studio that designers love to use.

When making any design decision, ask: **"Does this help designers create confidently?"**

If yes, you're on the right path.

---

*Last updated: November 2025*
*For questions: design@nanobanana.studio*

# Airbnb Design System: Complete Style Guide

---

## Welcome to the Airbnb Design Family

*A message from the Lead Designer*

Welcome to Airbnb's design team. You're joining us at an exciting time, and we're thrilled to have you contribute to a platform that helps millions of people belong anywhere. This document is more than a style guide—it's a comprehensive exploration of how we think about design, why we make the choices we do, and how you can leverage our design system to create experiences that embody our mission.

Take your time with this guide. The technical specifications are important, but the philosophy behind them is what will make you an effective designer on this team. Every color, every corner radius, every animation timing has a reason rooted in human psychology, trust-building, and our commitment to making travel and hosting accessible to everyone.

---

# Part I: Design Philosophy

## The Foundation: Belong Anywhere

At its core, Airbnb exists to create a world where anyone can belong anywhere. This isn't marketing speak—it's the philosophical foundation that informs every design decision we make. When someone opens our app or website, they're not just looking for a place to sleep; they're seeking connection, adventure, authenticity, and a sense of belonging in an unfamiliar place.

This mission manifests in our design through several key tenets:

### 1. Trust is Everything

In a marketplace where strangers invite strangers into their homes, trust isn't just important—it's existential. Our design system is engineered to build and reinforce trust at every touchpoint.

**How this manifests in design:**

- **Transparency in pricing:** We show the total price prominently, including all fees. No surprises, no fine print hunting. The price you see is the price you pay.

- **Social proof everywhere:** Ratings aren't hidden in a details page—they're right there on every listing card. Review counts, Superhost badges, Guest Choice labels, and quality indicators create a persistent layer of social validation.

- **Authentic photography:** We prioritize real, unfiltered photos over staged professional shots. The 4:3 aspect ratio and generous image sizing let properties speak for themselves. Users can see exactly what they're getting.

- **Clear, honest communication:** Our microcopy never oversells or uses dark patterns. If something is "often booked," we say so plainly. If dates are flexible, we make that easy to indicate.

**Why it matters:** Trust is fragile and cumulative. Each small design decision either deposits into or withdraws from the user's trust account. Our generous white space, readable typography, and straightforward interactions all signal "we have nothing to hide."

### 2. Reduce Friction, Not Features

Booking accommodation should be as simple as choosing a movie to watch, yet traditionally it's been fraught with anxiety. We obsess over removing friction from the booking journey.

**How this manifests in design:**

- **The persistent search bar:** Users never have to hunt for how to refine their search. The pill-shaped search bar is always accessible, always inviting a new query. It's our "homepage" in a very real sense—the place users return to orient themselves.

- **Smart defaults and progressive disclosure:** We don't overwhelm with every filter and option upfront. The initial search requires just three inputs: location, dates, guests. Everything else can be refined later. This respects the user's cognitive capacity.

- **One-click favorites:** The heart icon is always accessible on every card. Collecting favorites is instant, requiring zero navigation or modal interruption.

- **Map integration without context switching:** The map view appears alongside search results rather than replacing them. Users can explore spatially without losing their place in the list view.

**Why it matters:** Every additional tap, every moment of confusion, every unnecessary step is an opportunity for users to abandon their booking. Friction kills conversion and, more importantly, it kills the joy of discovery. We want browsing Airbnb to feel effortless, almost meditative.

### 3. Content Over Chrome

Our users care about places, not interfaces. Our design philosophy is to get out of the way and let the properties, hosts, and experiences shine.

**How this manifests in design:**

- **Generous white space:** We resist the temptation to fill every pixel. White space isn't wasted space—it's breathing room that lets each listing get the attention it deserves.

- **Minimal UI decoration:** No drop shadows everywhere, no gradients for the sake of gradients, no borders unless they serve a functional purpose. We let typography and spacing create hierarchy rather than relying on visual noise.

- **Photo-first cards:** Listing cards are essentially full-bleed images with minimal text overlay. The property photo is the hero—everything else supports it.

- **Subtle animations:** Our animations exist to provide feedback and smooth transitions, not to impress. They're quick (150-300ms) and physically plausible, using ease-out curves that mimic real-world motion.

**Why it matters:** When users open Airbnb, they're dreaming about their next adventure. Heavy interfaces break that spell. By keeping our design minimal and content-forward, we become a window rather than a wall.

### 4. Consistency Enables Freedom

This might seem contradictory, but it's not: strict consistency in our design system actually creates more freedom for creativity.

**How this manifests in design:**

- **Standardized components:** We have defined button styles, card layouts, input fields, and navigation patterns. You'll never wonder "how should this button look?"—you know because it's documented here.

- **Predictable spacing:** Our 4px-based spacing system means you're never guessing how much space to add between elements. It's always a multiple of 4: 8px, 16px, 24px, 32px, etc.

- **Limited color palette:** Rausch Pink for primary actions, charcoal for text, white for backgrounds. This constraint isn't limiting—it's liberating. You can focus on solving user problems rather than agonizing over color choices.

**Why it matters:** When the fundamentals are consistent, users develop muscle memory. They know where to find the search bar, they recognize what a primary button looks like, they understand our information hierarchy. This consistency creates a foundation of trust upon which we can build more experimental features.

### 5. Accessible By Default, Not As An Afterthought

Accessibility isn't a feature—it's a fundamental human right. One billion people globally have some form of disability. If our design excludes them, we're not living up to "belong anywhere."

**How this manifests in design:**

- **Contrast ratios that exceed WCAG AA standards:** Our charcoal text on white backgrounds provides 17:1 contrast ratio—well beyond the 4.5:1 minimum.

- **Touch targets that respect human fingers:** 44px minimum touch targets based on iOS guidelines, not the bare minimum of 32px some get away with.

- **Keyboard navigation that's not an afterthought:** Every interactive element can be reached via keyboard, and focus states are visible and clear.

- **Screen reader support baked in:** All images have meaningful alt text, all interactive elements have ARIA labels, all form inputs have associated labels.

**Why it matters:** Designing for accessibility makes our product better for everyone. Curb cuts were designed for wheelchairs but help parents with strollers, travelers with rolling luggage, delivery drivers with hand trucks. Similarly, our accessible design choices—like high contrast and large touch targets—make Airbnb easier to use in bright sunlight, in moving vehicles, and for anyone with temporary limitations (broken arm, anyone?).

### 6. Global, Yet Local

Airbnb operates in 220+ countries and regions. Our design must work in Tokyo, Toronto, and Timbuktu—but it shouldn't feel generic.

**How this manifests in design:**

- **Localized font stacks:** We use Airbnb Cereal globally but fall back to culturally appropriate fonts like Yu Gothic for Japanese, ensuring text always feels native.

- **Right-to-left support:** Our layouts flip gracefully for RTL languages like Arabic and Hebrew.

- **Cultural color sensitivity:** We're mindful that colors carry different meanings globally. Our red-pink isn't aggressive; it's energetic and welcoming across cultures.

- **Flexible components:** Our design system components handle variable text lengths, different number formats (¥10,000 vs $10,000.00), and varied content density.

**Why it matters:** When a user in Japan sees our interface, they should feel it was designed for them, not translated from American English. This attention to local detail while maintaining global consistency is part of what makes Airbnb feel like it helps you "belong anywhere."

### 7. Empowered, Not Overwhelmed

Information design is about empowering users to make confident decisions without cognitive overload.

**How this manifests in design:**

- **Progressive information disclosure:** Critical information (price, rating, location, photos) is immediately visible. Secondary details (amenities, house rules, cancellation policy) are available but not forced upon first glance.

- **Scannable cards:** You can evaluate a listing in 2-3 seconds: glance at the photo, check the price, note the rating. Done. If interested, click for more. If not, keep scrolling.

- **Clear visual hierarchy:** Font sizes, weights, and colors create an obvious reading order. H1 > H2 > H3, Primary > Secondary > Tertiary. Users never have to hunt for the important information.

- **Contextual information:** Price markers on the map appear when browsing spatially. Review counts appear next to ratings when building trust matters. Superhost badges appear on hosts who've earned them. The right information at the right moment.

**Why it matters:** Travel planning can be overwhelming. There are thousands of options, countless variables, and real money at stake. Our job is to make this complexity manageable—to help users feel confident in their choices rather than paralyzed by options.

---

## The Emotional Journey

Good design considers not just functionality but emotion. When someone uses Airbnb, we want them to feel:

### Inspired
The first emotion should be inspiration. Beautiful photography, aspirational destinations, unique properties that spark wanderlust. This is why our card layouts are photo-first with generous imagery.

### Confident
As users browse, confidence should grow. Clear pricing, prominent reviews, detailed information all serve to reduce anxiety and increase certainty. This is why transparency is baked into every component.

### Excited
As they prepare to book, excitement should build. The Rausch Pink CTA, the smooth animations, the quality badges—these create positive anticipation. This is why our primary actions are bold and celebratory.

### Welcomed
After booking, they should feel welcomed and supported. Clear communication, helpful prompts, and accessible help options maintain this. This is why our helper text and microcopy are friendly and clear.

---

## Color Psychology

Let's dive deeper into why our colors work:

### Rausch Pink (#FF385C)
Named after the street where Airbnb was founded, Rausch Pink is warm without being aggressive, energetic without being anxious. It's:
- **Gender-neutral:** Works equally for all users globally
- **Attention-grabbing:** High visibility for CTAs without being shouty
- **Emotionally warm:** Creates positive associations with hospitality and welcome
- **Distinctive:** Immediately recognizable as Airbnb in a sea of blue tech companies

### Charcoal (#222222) Over Pure Black (#000000)
We use charcoal for text rather than pure black because:
- **More readable:** Pure black on pure white can cause halation (optical bleeding)
- **More sophisticated:** Slightly softened, less harsh
- **More flexible:** Provides room for true black as an accent if needed

### Generous White Space
White (#FFFFFF and #F7F7F7) isn't just background—it's a design element:
- **Creates focus:** Draws attention to content by providing visual rest
- **Reduces anxiety:** Cluttered interfaces create stress; space creates calm
- **Implies quality:** Luxury brands use space generously; we do too to signal we're premium

---

## Typography As Brand Voice

Our typography choices directly influence how users perceive our brand:

### Airbnb Cereal
Custom-designed for Airbnb, Cereal is:
- **Friendly but professional:** Rounded enough to be approachable, structured enough to be trustworthy
- **Highly readable:** Generous x-height, clear letterforms, excellent hinting
- **Globally compatible:** Extensive character set for international use

### Font Weight Hierarchy
We use four weights intentionally:
- **Bold (700):** Only for major headings—establishes clear information architecture
- **Semibold (600):** For card titles and important CTAs—creates emphasis without shouting
- **Medium (500):** For buttons and links—signals interactivity
- **Regular (400):** For body text—maximum readability, minimum fatigue

### Line Height and Spacing
Our generous line heights (1.4-1.5 ratio) aren't accidental:
- **Improves comprehension:** More space between lines = easier reading
- **Supports multiple languages:** Some scripts (Thai, Arabic) need more vertical space
- **Reduces eye fatigue:** Particularly important for longer descriptions

---

## The Philosophy of Corner Radius

Every element in our system has rounded corners (8-12px typically). This isn't just aesthetic—it's psychological:

### Why Rounded?
- **Friendlier:** Humans perceive sharp angles as potentially threatening (evolutionary psychology)
- **More approachable:** Soft edges signal warmth and welcome
- **Less formal:** Rectangular with hard angles feels corporate and cold
- **Better for touch:** Rounded buttons feel more natural to tap

### Why 8-12px specifically?
- **8px for buttons/inputs:** Subtle enough to not feel cartoonish, noticeable enough to soften the form
- **12px for cards/images:** More pronounced because larger elements can handle more radius
- **32px for search bar:** Full pill shape creates a distinctive, friendly control

---

## Animation Philosophy: Subtle Delight

Our animations follow principles established by Disney animators and refined for digital:

### Speed (150-300ms)
- **Fast enough:** Not sluggish or annoying
- **Slow enough:** Perceptible and provides feedback
- **Respectful:** Honors prefers-reduced-motion accessibility setting

### Easing (ease-out, spring curves)
- **Physically plausible:** Objects accelerate quickly then decelerate (like real physics)
- **Natural feeling:** Spring curves add subtle bounce, mimicking real-world objects
- **Purposeful:** Every animation communicates state change, never decorative

### When to Animate
- **State changes:** Button press, favorite toggled, modal opened
- **Spatial movement:** Cards sliding, pages transitioning
- **Loading states:** Skeleton screens, spinners
- **Micro-feedback:** Hover states, focus indicators

### When NOT to Animate
- **Static content loads:** Text and images appear instantly
- **Critical information:** Prices and availability shown immediately
- **Reduced motion context:** Users who've indicated motion sensitivity

---

# Part II: How To Leverage This Style Guide

## Your Design Process at Airbnb

### 1. Start With User Needs, Not Components

**The Wrong Approach:**
"I need a card, a button, and an input field for this feature."

**The Right Approach:**
"Users need to filter search results by price range. How can I make this fast, clear, and non-intrusive?"

Once you understand the user need, you'll naturally reach for the appropriate components. The style guide provides the building blocks, but you provide the insight into how to arrange them.

### 2. Follow the System 90% of the Time

This style guide documents our established patterns. When you follow them:
- ✅ Your designs will be consistent with the rest of Airbnb
- ✅ Your implementation will be faster (engineers can use existing components)
- ✅ Your designs will automatically meet accessibility standards
- ✅ Your users will benefit from familiar patterns

**When to follow exactly:**
- Standard flows (search, booking, messaging)
- Common UI elements (buttons, inputs, cards)
- Typography and color choices
- Spacing and layout grids

### 3. Break the Rules 10% of the Time (With Intent)

Innovation requires experimentation. Sometimes the right design solution isn't in this guide—yet.

**When you might break the rules:**
- Launching a truly new feature with no existing pattern
- Solving an accessibility problem the current system doesn't handle
- Experimenting with emerging interaction patterns (but A/B test!)
- Creating a special moment (like our annual year-in-review)

**How to break rules responsibly:**
1. **Document your reasoning:** Why doesn't the existing pattern work?
2. **Propose your alternative:** Show, don't just tell
3. **Validate with users:** Test your approach before implementing widely
4. **Share learnings:** If it works, help us evolve the system
5. **Be prepared to iterate:** Breaking patterns means accepting more risk

### 4. Use the Component Library

Our Figma component library mirrors this style guide. Here's how to use it effectively:

**Do:**
- ✅ Use components from the library (don't recreate from scratch)
- ✅ Use component variants for different states
- ✅ Detach when you need to create something truly new
- ✅ Propose new components when you find gaps

**Don't:**
- ❌ Modify component internals without discussing with the design systems team
- ❌ Create one-off button styles instead of using primary/secondary
- ❌ Ignore component constraints (they're there for accessibility)
- ❌ Forget to update master components when improving patterns

---

## Practical Application Guide

### Designing a New Search Filter

**Step 1: Define the user problem**
Users want to filter by number of bedrooms.

**Step 2: Choose the appropriate pattern**
Reference "Input Fields" section → Dropdown is appropriate for limited options

**Step 3: Apply style specifications**
- Height: 56px
- Corner radius: 8px
- Border: 1px solid #B0B0B0
- Label: "Bedrooms" in 12px Semibold
- Focus state: 2px border in #222222

**Step 4: Consider context**
Where in the search flow? Primary search bar or advanced filters? This affects prominence and styling.

**Step 5: Test accessibility**
- Can you reach it via keyboard?
- Does it have proper labeling for screen readers?
- Is the touch target at least 44px?

### Designing a New Card Type

**Step 1: Identify card purpose**
Is this for browsing (like listing cards) or detail view (like modal cards)?

**Step 2: Follow established patterns**
- Listing cards: Transparent background, 12px corner radius, photo-first
- Modal cards: White background, 12px corners, 20px blur shadow

**Step 3: Maintain information hierarchy**
- H3 (16px Semibold) for card title
- Body Small (12px Regular, #717171) for metadata
- Price Text (16px Semibold) for pricing

**Step 4: Consider hover states**
Listings get subtle scale (1.03) and shadow enhancement. Informational cards might not need hover effects.

**Step 5: Test in grid context**
Cards should work in 1-column (mobile), 2-column (tablet), and 3-4 column (desktop) grids.

### Creating a New Feature

**Step 1: User research first**
Understand the problem deeply before designing solutions.

**Step 2: Sketch low-fidelity first**
Don't jump into Figma with full styling. Work out the interaction flow on paper or with wireframes.

**Step 3: Map to existing patterns**
Look through this guide. Have we solved similar problems before? What can you learn from existing solutions?

**Step 4: Design with components**
Use the Figma library. Assemble solutions from existing pieces whenever possible.

**Step 5: Stress test your design**
- Does it work in different languages (longer text)?
- Does it work on mobile and desktop?
- Does it work with minimal content? With maximum content?
- Does it pass accessibility checks?

**Step 6: Document any new patterns**
If you created something novel that worked well, work with the design systems team to add it to this guide.

---

## Common Design Decisions & How to Make Them

### "Should this be a button or a link?"

**Use a Button when:**
- The action submits data (Search, Book, Sign Up)
- The action changes state (Add to Favorites, Apply Filter)
- The action needs high visual prominence
- The action is the primary goal of the screen

**Use a Link when:**
- The action navigates to new content (Learn More, View Profile)
- The action is secondary or tertiary priority
- The action is inline within text
- The action leads users deeper into content

**Technical difference:**
- Buttons use `<button>` or `role="button"`
- Links use `<a href>`

### "Should this open in a modal or new page?"

**Use a Modal when:**
- The action is quick (login, simple form, confirmation)
- You want to maintain current context (don't lose search results)
- The content is supplementary (language selection, filters)
- Users need to return immediately after (editing settings)

**Use a New Page when:**
- The content is complex (full listing details)
- The content deserves full focus (checkout flow)
- The content has its own URL for sharing
- Users might spend significant time there

### "Should this information be immediately visible or behind a toggle?"

**Immediately Visible when:**
- Information influences primary decision (price, rating, location)
- Users need it for comparison (key amenities)
- It's required for next step (availability)
- Hiding it would feel deceptive

**Behind a Toggle/Dropdown when:**
- Information is detailed but not critical (full house rules)
- Not all users need it (cancellation policy details)
- It would create visual clutter (all 50 amenities)
- Progressive disclosure improves comprehension

### "Should I use Rausch Pink or keep it neutral?"

**Use Rausch Pink when:**
- It's the primary CTA on the screen (Search, Book)
- It's a positive action (Add to Favorites)
- You need to draw attention
- It's an interactive element users should notice

**Keep Neutral when:**
- It's a secondary action (Cancel, Go Back)
- It's destructive (Delete, Remove)
- The screen already has multiple pink elements
- It's purely informational (labels, badges)

**Remember:** Pink is our brand accent. Use it purposefully. If everything is pink, nothing stands out.

### "How much spacing should I use here?"

Reference our spacing system (4px increments):
- **8px:** Between closely related items (icon and text in a button)
- **16px:** Between UI elements in a component (sections within a card)
- **24px:** Between distinct components (cards in a list)
- **32px:** Between major sections (search bar and results)
- **48px+:** Between page sections (header and content)

**When in doubt:** Use the next larger increment. Extra space rarely hurts; cramped interfaces always do.

---

## Working With Engineering

### Handoff Best Practices

1. **Use component names from the design system**
   - Don't say "the pink rectangle"
   - Do say "Primary Button (48px height)"

2. **Document interactive states explicitly**
   - Default, Hover, Active, Focus, Disabled
   - Don't assume engineers will infer hover states

3. **Provide spacing in system units**
   - Say "24px" not "approximately this much space"
   - Reference the 4px grid system

4. **Note accessibility requirements**
   - ARIA labels for screen readers
   - Keyboard navigation flows
   - Focus order

5. **Include responsive behavior**
   - How does this adapt to mobile?
   - What's the minimum and maximum width?
   - Do elements stack or remain side-by-side?

### Communication Tips

**Instead of:** "Make this pop more"
**Say:** "Increase the button to Primary Button style (Rausch Pink background) to better establish visual hierarchy"

**Instead of:** "The spacing feels off"
**Say:** "Let's increase the gap between cards from 16px to 24px to align with our standard section spacing"

**Instead of:** "Can you make it look more premium?"
**Say:** "Let's use Level 4 shadow (0 10px 40px rgba(0,0,0,0.15)) and increase the corner radius to 12px to match our modal card styling"

---

## Quality Checklist

Before marking any design as "ready for development," verify:

### Visual Design
- [ ] All colors are from the approved palette
- [ ] All typography uses defined styles (not arbitrary sizes)
- [ ] All spacing uses 4px increments
- [ ] All corners use standard radius values (8px or 12px typically)
- [ ] All shadows use defined elevation levels

### Interaction Design
- [ ] All interactive elements have hover states
- [ ] All buttons have active/pressed states
- [ ] All form inputs have focus states
- [ ] All interactive elements have clear affordances

### Accessibility
- [ ] Color contrast meets WCAG AA (4.5:1 for body text)
- [ ] Touch targets are minimum 44px × 44px
- [ ] Focus states are visible and clear
- [ ] All images have alt text planned
- [ ] All form inputs have associated labels

### Responsiveness
- [ ] Design works on mobile (375px width minimum)
- [ ] Design works on tablet (768px width)
- [ ] Design works on desktop (1440px width)
- [ ] Content adapts gracefully (doesn't break with longer text)

### Content
- [ ] Microcopy is clear and conversational
- [ ] Error messages are helpful, not just alerts
- [ ] Loading states are designed
- [ ] Empty states are designed

---

## Continuous Learning

This guide is a living document. As you work at Airbnb, you'll deepen your understanding of why these patterns exist and when they work best.

### Ways to Keep Learning:

1. **Use Airbnb regularly as a customer**
   - Book a stay
   - Browse experiences
   - Notice what works and what frustrates you

2. **Conduct user research**
   - Watch users interact with your designs
   - Listen to support calls
   - Read user feedback

3. **Study competitor products**
   - What do Booking.com, VRBO, and Expedia do differently?
   - What can we learn from them?
   - What should we explicitly avoid?

4. **Participate in design critiques**
   - Share your work early and often
   - Critique others thoughtfully
   - Learn from senior designers' feedback

5. **Contribute to this guide**
   - Found a gap? Document it
   - Discovered a better pattern? Propose it
   - Built something reusable? Add it to the component library

---

# Part III: Technical Style Guide Reference

*The following sections provide the exact specifications you'll use in your daily design work. Refer to Parts I and II for the philosophy and guidance on when to apply these specifications.*

---

## Color Palette

### Primary Colors

* **Rausch Pink** - `#FF385C` (Primary brand color for CTAs, accents, and interactive elements)
* **Pure White** - `#FFFFFF` (Primary background color for cards, modals, and main content areas)
* **Light Gray Background** - `#F7F7F7` (Page backgrounds and subtle section separators)

### Secondary Colors

* **Charcoal Text** - `#222222` (Primary text color for headings and body content)
* **Medium Gray Text** - `#717171` (Secondary text, metadata, supporting information)
* **Light Gray Text** - `#B0B0B0` (Tertiary text, placeholders, disabled states)

### Accent Colors

* **Gold Badge** - `#FFB400` (Quality indicators, awards, premium features)
* **Success Green** - `#00A699` (Confirmations, positive states, Superhost badges)
* **Star Rating Yellow** - `#FFB400` (Rating stars)

### Interactive Colors

* **Link Blue** - `#008489` (Seldom used; typically pink is preferred for links)
* **Hover Pink** - `#E31C5F` (Darker shade of Rausch pink for hover states)
* **Border Gray** - `#DDDDDD` (Input borders, card outlines, dividers)

### Background Colors

* **Modal Overlay** - `rgba(34, 34, 34, 0.6)` (Semi-transparent overlay behind modals)
* **Selected/Hover Background** - `#F7F7F7` (Subtle highlight for interactive elements)

---

## Typography

### Font Family

* **Primary Font:** Airbnb Cereal (custom font family)
  * **Web Fallback:** 'Circular', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif
  * **Japanese Text:** 'Yu Gothic', 'Hiragino Sans', sans-serif

### Font Weights

* **Regular:** 400
* **Medium:** 500
* **Semibold:** 600
* **Bold:** 700

### Text Styles

#### Headings

* **H1 (Page Title):** 32px/40px, Bold (700), Letter spacing -0.5px
  * Used for main page headings like "東京23区で人気の宿泊先"
  * Color: `#222222`
  * Use case: Main page headers, screen titles

* **H2 (Section Header):** 22px/28px, Semibold (600), Letter spacing -0.3px
  * Used for section titles and category headers
  * Color: `#222222`
  * Use case: Major content sections, category labels

* **H3 (Card Title):** 16px/20px, Semibold (600), Letter spacing 0px
  * Used for listing titles, property names
  * Color: `#222222`
  * Use case: Card headers, item titles

#### Body Text

* **Body Large:** 16px/24px, Regular (400), Letter spacing 0px
  * Primary reading text for descriptions and longer content
  * Color: `#222222`
  * Use case: Listing descriptions, article content, important information

* **Body Regular:** 14px/20px, Regular (400), Letter spacing 0.2px
  * Standard text for most UI elements, descriptions
  * Color: `#222222`
  * Use case: Default body text, most UI copy

* **Body Small:** 12px/16px, Regular (400), Letter spacing 0.3px
  * Metadata, secondary information, fine print
  * Color: `#717171`
  * Use case: Timestamps, metadata, supporting details

#### Special Text

* **Price Text:** 16px/20px, Semibold (600), Letter spacing -0.1px
  * Prominent pricing display
  * Color: `#222222`
  * Format: ¥10,000
  * Use case: All pricing display

* **Button Text:** 16px/24px, Semibold (600), Letter spacing 0.3px
  * All button labels
  * Color: `#FFFFFF` (on primary buttons) or `#222222` (on secondary buttons)
  * Use case: All button copy

* **Badge Text:** 12px/16px, Medium (500), Letter spacing 0.5px
  * Labels like "ゲストチョイス", "スーパーホスト", "NEW"
  * Often uppercase or small caps
  * Use case: Status badges, quality indicators

* **Link Text:** 14px/20px, Medium (500), Letter spacing 0px
  * Clickable text links
  * Color: `#222222` with underline on hover
  * Use case: Inline links, footer links, navigation

* **Rating Text:** 13px/16px, Regular (400), Letter spacing 0.2px
  * Rating numbers and review counts
  * Color: `#222222`
  * Format: "★ 4.81 (134)"
  * Use case: Review ratings and counts

---

## Component Styling

### Buttons

#### Primary Button

**Use for:** Main actions (Search, Book Now, Continue, Submit)

* **Background:** Rausch Pink (`#FF385C`)
* **Text:** White (`#FFFFFF`), 16px, Semibold (600)
* **Height:** 48px
* **Corner Radius:** 8px
* **Padding:** 24px horizontal, 14px vertical
* **Hover State:** Darker pink (`#E31C5F`)
* **Active State:** Scale 0.96
* **Disabled State:** 50% opacity, cursor not-allowed
* **Transition:** 150ms ease-out

**Implementation notes:**
- Minimum width: 120px (for single-word buttons)
- Text should be vertically and horizontally centered
- Never place two primary buttons side by side (use primary + secondary instead)

#### Secondary Button (Outlined)

**Use for:** Secondary actions (Cancel, Back, Learn More)

* **Border:** 1px solid `#222222`
* **Text:** Charcoal (`#222222`), 16px, Semibold (600)
* **Background:** Transparent
* **Height:** 48px
* **Corner Radius:** 8px
* **Padding:** 22px horizontal, 13px vertical (1px less than primary to account for border)
* **Hover State:** Background `#F7F7F7`
* **Active State:** Border 2px, padding adjusted to compensate
* **Disabled State:** 50% opacity, cursor not-allowed

**Implementation notes:**
- Border counts toward overall dimensions
- Maintains same visual weight as primary despite being less prominent
- Pair with primary buttons for clear hierarchy

#### Icon Button

**Use for:** Single-action buttons with icon only (close, menu, share)

* **Size:** 32px × 32px (circular or square)
* **Background:** Transparent or white with shadow
* **Icon Color:** `#222222` or `#FFFFFF` (depending on background)
* **Icon Size:** 20px × 20px centered within button
* **Hover State:** Background `#F7F7F7` or subtle shadow increase
* **Active State:** Scale 0.94

**Implementation notes:**
- Ensure 44px touch target via padding or parent container
- Include accessible label for screen readers
- Consider floating versions with subtle shadow for use over images

#### Social Login Buttons

**Use for:** Third-party authentication (Google, Apple, Facebook)

* **Height:** 48px
* **Corner Radius:** 8px
* **Border:** 1px solid `#DDDDDD`
* **Background:** White (`#FFFFFF`)
* **Text:** 14px, Medium (500), Charcoal (`#222222`)
* **Icon:** Brand icons at 20px × 20px, positioned left with 12px gap from text
* **Padding:** 16px
* **Hover State:** Border darkens to `#B0B0B0`

**Implementation notes:**
- Always use official brand logos
- Maintain consistent button height with other auth options
- Stack vertically on mobile, can be side-by-side on desktop if space allows

---

### Cards

#### Listing Card

**Use for:** Property listings in search results, favorites, recommendations

* **Background:** Transparent (image-first design)
* **Corner Radius:** 12px (for images)
* **Image Aspect Ratio:** 4:3 (primary) or 1:1 (grid layouts)
* **Shadow on Image:** Subtle on hover - Y-offset 2px, Blur 8px, `rgba(0,0,0,0.08)`
* **Padding:** 0px (images bleed to edge)
* **Info Section Padding:** 12px top, 0px horizontal
* **Hover Effect:** Image subtle scale (1.03) with shadow enhancement
* **Transition:** 300ms ease-out

**Content hierarchy within card:**
1. Photo (hero element, 12px corner radius)
2. Location/Title (16px Semibold, #222222)
3. Rating & Review Count (13px Regular with star icon)
4. Host Type or Badge (12px Regular, #717171)
5. Price (16px Semibold, #222222) with "per night" label

**Implementation notes:**
- Heart favorite button positioned absolute top-right with 12px margin
- Badge labels (Guest Choice, Superhost) positioned absolute top-left with 12px margin
- Cards must work in responsive grids (1-5 columns)
- Maintain aspect ratio when resizing

#### Modal Card

**Use for:** Dialogs, confirmations, detail overlays

* **Background:** White (`#FFFFFF`)
* **Corner Radius:** 12px
* **Shadow:** Y-offset 0px, Blur 20px, `rgba(0,0,0,0.15)`
* **Max Width:** 568px (login modal), 700px (language selection modal)
* **Padding:** 24px (mobile), 32px (desktop)
* **Backdrop:** rgba(34, 34, 34, 0.6) overlay covering viewport

**Implementation notes:**
- Always include close button (X icon) in top-right with 16px margin
- Center vertically and horizontally in viewport
- Trap focus within modal while open
- Close on backdrop click (unless destructive action pending)
- Animate in with 200ms fade and slight scale (0.96 to 1.0)

#### Badge/Label Component

**Use for:** Status indicators, quality markers, feature labels

* **Background:** White with 90% opacity (floating on images) or solid colors for emphasis
* **Padding:** 6px horizontal, 4px vertical
* **Corner Radius:** 4px
* **Font:** 12px, Medium (500)
* **Text Color:** `#222222` (on white) or `#FFFFFF` (on colored backgrounds)
* **Shadow:** Subtle - Y-offset 1px, Blur 3px, `rgba(0,0,0,0.1)` (for floating badges)

**Variants:**
- **Guest Choice:** Gold background (`#FFB400`), black text, crown icon
- **Superhost:** Success green background (`#00A699`), white text
- **NEW:** Dark background (`#222222`), white text

---

### Input Fields

#### Text Input

**Use for:** Single-line text entry (name, email, search)

* **Height:** 56px
* **Corner Radius:** 8px
* **Border:** 1px solid `#B0B0B0`
* **Background:** White (`#FFFFFF`)
* **Text:** 16px, Regular (400), `#222222`
* **Placeholder:** 16px, Regular (400), `#717171`
* **Padding:** 16px
* **Focus State:** Border 2px solid `#222222`, slight shadow `0 0 0 3px rgba(34,34,34,0.1)`
* **Error State:** Border 2px solid `#E53935`, error message below in 12px Regular
* **Label:** 12px, Semibold (600), `#222222`, positioned above input with 8px gap

**Implementation notes:**
- Labels should always be visible (not floating placeholders)
- Error messages appear below with 8px gap
- Include appropriate input type (email, tel, etc.) for mobile keyboards
- Disable autocomplete only when security requires (passwords on shared devices)

#### Search Bar (Compound Input)

**Use for:** Main search interface

* **Height:** 64px
* **Corner Radius:** 32px (full pill shape)
* **Background:** White (`#FFFFFF`)
* **Shadow:** Y-offset 0px, Blur 16px, `rgba(0,0,0,0.15)`
* **Border:** 1px solid `#DDDDDD`
* **Sections:** Divided by 1px vertical dividers (`#DDDDDD`)
* **Search Button:** Circular, 48px diameter, Rausch Pink background, white search icon (24px)
* **Hover State:** Enhanced shadow - Blur 24px, `rgba(0,0,0,0.18)`

**Sections within search bar:**
1. Location (flex: 2)
2. Check-in date (flex: 1)
3. Check-out date (flex: 1)
4. Guests (flex: 1)
5. Search button (fixed 48px)

**Implementation notes:**
- Each section is clickable and triggers appropriate input modal
- Active section gets subtle background highlight (`#F7F7F7`)
- On mobile, collapses to simplified single-section bar
- Should be sticky/fixed for easy access while scrolling

#### Dropdown/Select

**Use for:** Selection from predefined options (language, filters)

* **Styled like text input** with chevron icon (20px × 20px)
* **Height:** 56px
* **Icon:** Positioned right with 16px margin from edge
* **Expanded State:** Dropdown appears below with 8px gap, shadow Level 3

**Dropdown menu styling:**
- White background
- 8px corner radius
- Shadow: `0 6px 16px rgba(0,0,0,0.12)`
- Options: 44px height, 16px horizontal padding
- Hover: `#F7F7F7` background
- Selected: Checkmark icon right-aligned

---

### Icons

**Icon System Overview:**
All icons use outlined style with 2px stroke weight and rounded line caps

* **Primary Size:** 24px × 24px (for UI icons)
* **Small Size:** 16px × 16px (inline with text)
* **Large Size:** 48px × 48px (feature icons, empty states)
* **Navigation Icons:** 24px × 24px
* **Primary Color:** `#222222` (default icons)
* **Interactive Color:** `#FF385C` (active states, selected)
* **Inactive Color:** `#B0B0B0` (disabled, decorative)
* **Style:** Outlined, 2px stroke weight, rounded line caps

**Common Icons:**
- Search (magnifying glass)
- Heart/Favorite (outline/filled states)
- Menu (hamburger, 3 lines)
- Close (X)
- Arrow right (navigation)
- Star (rating, filled)
- Calendar (date selection)
- User (profile)
- Share (export/social)
- Filter (funnel)

**Implementation notes:**
- Use SVG format for scalability
- Maintain 2px grid alignment (icons should align to 2px increments)
- Include accessible label for screen readers
- Consider filled vs outline variants for toggle states (favorite heart)

---

### Navigation

#### Top Navigation Bar

**Use for:** Global site navigation

* **Height:** 80px (desktop), 64px (mobile)
* **Background:** White (`#FFFFFF`)
* **Border Bottom:** 1px solid `#EBEBEB`
* **Logo Height:** 32px
* **Padding:** 24px horizontal (desktop), 16px (mobile)
* **Sticky:** Yes (follows scroll)
* **Shadow on Scroll:** Y-offset 1px, Blur 4px, `rgba(0,0,0,0.08)`

**Navigation structure:**
- Logo (left, links to homepage)
- Category tabs (center, desktop only)
- User controls (right: Become a Host, Language/Currency, Menu)

**Implementation notes:**
- Becomes sticky after scrolling 80px
- On mobile, simplifies to logo + menu button
- Menu button reveals slide-out navigation drawer
- Maintains white background even over hero images (for readability)

#### Tab Bar

**Use for:** Section navigation (Stays, Experiences, Services)

* **Height:** 48px
* **Background:** Transparent
* **Active Tab Indicator:** 2px bottom border, `#222222`
* **Text:** 14px, Semibold (600)
* **Text Color:** `#717171` (inactive), `#222222` (active)
* **Padding:** 16px horizontal per tab
* **Hover State:** Text color transitions to `#222222`

**Implementation notes:**
- Indicator animates smoothly between tabs (200ms ease-in-out)
- On mobile, tabs are horizontally scrollable if overflow
- Always show indicator on current tab for orientation

#### Footer Links

**Use for:** Secondary navigation, legal links, sitemap

* **Text:** 14px, Regular (400)
* **Color:** `#222222`
* **Line Height:** 24px
* **Hover:** Underline decoration
* **Section Spacing:** 48px vertical between groups
* **Background:** `#F7F7F7` (distinct from page content)

**Footer structure:**
- Multiple columns on desktop (3-4 columns)
- Sections: Support, Community, Hosting, Airbnb, Legal
- Social icons at bottom (24px × 24px)

---

## Spacing System

**Base unit: 4px** (all spacing is a multiple of 4)

* **2px** - Micro spacing (borders, fine adjustments, optical alignment)
* **4px** - Minimal spacing (tight grouping, badge padding, icon-text gap when very compact)
* **8px** - Small spacing (icon-to-text gaps, between related elements, input label gap)
* **12px** - Compact spacing (card internal padding top, tight element separation)
* **16px** - Default spacing (standard padding, between UI elements, button padding)
* **24px** - Medium spacing (card padding, section spacing, navigation padding, between distinct components)
* **32px** - Large spacing (modal padding, between major sections, generous breathing room)
* **48px** - Extra large spacing (footer sections, page top/bottom margins, major section separation)
* **64px** - XXL spacing (between major page sections, landing page sections)

**Usage guidelines:**
- Default to 16px or 24px when unsure
- Use smaller increments (8px, 12px) within components
- Use larger increments (32px, 48px) between major sections
- Maintain consistent spacing throughout a given context (don't mix 14px and 16px randomly)

---

## Layout Grid

**Container Specifications:**

* **Container Max Width:** 1760px (desktop)
* **Container Padding:** 
  - Mobile: 24px horizontal
  - Tablet: 40px horizontal
  - Desktop: 80px horizontal
  - Large Desktop: 80px horizontal (centered with max-width)

**Card Grid System:**

* **Mobile (0-743px):** 
  - 1 column
  - Full width cards
  - 16px vertical gap between cards

* **Tablet (744px-1127px):** 
  - 2 columns
  - 16px gap between columns
  - 24px gap between rows

* **Desktop (1128px-1439px):** 
  - 3-4 columns (depending on content)
  - 24px gap between columns
  - 24px gap between rows

* **Large Desktop (1440px+):** 
  - 4-5 columns
  - 24px gap between columns and rows
  - Container max-width maintains readable line lengths

**Implementation notes:**
- Use CSS Grid for layouts (better than flexbox for complex grids)
- Cards should maintain consistent width within a row
- Allow fractional pixel widths (don't force integers)
- Test with variable content heights (cards don't always align bottoms)

---

## Motion & Animation

### Timing Specifications

* **Micro-interactions:** 150ms, ease-out
  - Use for: Button hovers, icon state changes, small toggles
  - Why: Fast enough to feel instant, slow enough to perceive

* **Standard Transition:** 200ms, ease-in-out
  - Use for: Modal open/close, dropdown expand, tab switches
  - Why: Balanced speed for state changes

* **Card Hover:** 300ms, ease-out
  - Use for: Image scale, shadow enhancement, card elevation
  - Why: Slower to feel luxurious rather than jarring

* **Page Transition:** 250ms, cubic-bezier(0.25, 0.46, 0.45, 0.94)
  - Use for: Route changes, view transitions
  - Why: Custom curve feels smooth and natural

* **Skeleton Loading:** 1.5s infinite pulse animation
  - Use for: Content loading placeholders
  - Why: Slower pulse prevents anxiety, suggests processing not freezing

* **Scroll Behavior:** Smooth with momentum (native platform behavior)
  - Use for: Programmatic scrolling
  - Why: Maintains OS consistency

### Animation Principles

* **Favor subtle over dramatic** 
  - Animations should feel natural, not call attention to themselves
  - User should barely notice the animation, just feel smooth interaction

* **Respect user preferences** 
  - Honor `prefers-reduced-motion` media query
  - Provide instant state changes for users who request reduced motion

* **Fast follows, slow reveals** 
  - Quick interactions (hover states): 150ms
  - Slower major state changes (modals): 200-300ms
  - This creates proper pacing for user perception

* **Spring physics for natural motion** 
  - Slight bounce on modals (spring curve with tension: 300, friction: 35)
  - Elastic on important CTAs creates delight
  - Use sparingly—not every animation needs spring physics

### When to Animate

✅ **Animate these:**
- State changes (button press, toggle on/off)
- Spatial movement (cards sliding in list, modal appearing)
- Loading states (spinner, skeleton screen)
- Micro-feedback (hover states, focus rings)
- Success confirmations (checkmark animation)

❌ **Don't animate these:**
- Static content initial load (text, images appear instantly)
- Critical information (price, availability shown immediately)
- Large content areas (full listing descriptions)
- When user has `prefers-reduced-motion` set

### CSS Implementation

```css
/* Micro-interaction (button hover) */
transition: background-color 150ms ease-out;

/* Standard transition (modal) */
transition: all 200ms ease-in-out;

/* Card hover */
transition: transform 300ms ease-out, box-shadow 300ms ease-out;

/* Page transition */
transition: opacity 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Elevation & Shadows

Our shadow system creates depth hierarchy using 5 levels:

### Shadow Level 1 (Subtle)
**Value:** `0 1px 2px rgba(0,0,0,0.08)`
**Use for:** Default card state, subtle separation, elements that sit on the page surface
**Example:** Inactive listing cards, badges

### Shadow Level 2 (Card Hover)
**Value:** `0 2px 8px rgba(0,0,0,0.12)`
**Use for:** Cards on hover, slight elevation to indicate interactivity
**Example:** Listing cards when hovered, clickable elements

### Shadow Level 3 (Dropdown)
**Value:** `0 6px 16px rgba(0,0,0,0.12)`
**Use for:** Dropdowns, tooltips, popovers—elements that float above content
**Example:** Date picker, filter dropdown, language selector

### Shadow Level 4 (Modal)
**Value:** `0 10px 40px rgba(0,0,0,0.15)`
**Use for:** Modals, dialogs, important overlays—demands attention
**Example:** Login modal, booking confirmation, important announcements

### Shadow Level 5 (Navigation)
**Value:** `0 1px 4px rgba(0,0,0,0.08)`
**Use for:** Fixed navigation bars on scroll, sticky headers
**Example:** Top navigation after scroll, sticky search bar

**Usage principles:**
- Use lowest level that creates necessary separation
- Don't skip levels (don't go from Level 1 to Level 4)
- Match shadow to elevation (higher elements = stronger shadows)
- Combine with subtle background color changes for depth

---

## Imagery Guidelines

### Listing Photos

**Requirements:**
* **Minimum Resolution:** 1200px × 900px
* **Aspect Ratio:** 4:3 (primary), 1:1 (alternate for grid layouts)
* **File Format:** JPG (optimized) or WebP
* **File Size:** < 500KB (balance quality and performance)
* **Quality:** High quality, well-lit, authentic representation
* **Corner Radius:** 12px

**Content guidelines:**
- Show the actual space, not staged perfection
- Natural lighting preferred over artificial
- Include context (neighborhood, view, surroundings)
- No wide-angle distortion that misrepresents size
- Primary photo should show the most appealing view

### Profile Photos

**Requirements:**
* **Shape:** Circular crop
* **Minimum Resolution:** 225px × 225px
* **File Format:** JPG or PNG
* **Border:** 1px solid `#EBEBEB` (optional, context-dependent)

**Content guidelines:**
- Clear, recognizable face
- Friendly expression
- Good lighting
- Solid or simple background preferred

### Badge/Icon Graphics

**Requirements:**
* **Format:** Vector (SVG preferred)
* **Color:** Single color or simple gradients
* **Complexity:** Simple, recognizable at all sizes
* **Sizes:** Must be clear at 16px, 24px, 48px

**Content guidelines:**
- Consistent style with outlined icon system
- 2px stroke weight
- Rounded line caps
- Align to 2px grid

---

## Accessibility

Accessibility is non-negotiable. Every design must meet these standards:

### Minimum Touch Target
* **Size:** 44px × 44px minimum (following iOS/WCAG guidelines)
* **Application:** All interactive elements (buttons, links, form inputs)
* **Implementation:** May use padding or parent container to achieve size

### Color Contrast

* **Body text (14-16px):** 4.5:1 minimum (WCAG AA)
  - Our `#222222` on `#FFFFFF` provides 17:1 ✅

* **Large text (18px+, or 14px bold+):** 3:1 minimum (WCAG AA)
  - Our headings exceed this easily ✅

* **Interactive elements:** 3:1 minimum against adjacent colors
  - Pink buttons on white: 4.3:1 ✅
  - Borders and focus states must be visible

**Testing:** Use WebAIM Contrast Checker or browser DevTools

### Focus States

* **Style:** 2px solid outline in `#222222` with 2px offset
* **Apply to:** All interactive elements (links, buttons, inputs)
* **Never remove:** Keyboard users need focus indicators
* **Make obvious:** 3px outline + offset creates clear visibility

```css
:focus {
  outline: 2px solid #222222;
  outline-offset: 2px;
}

:focus:not(:focus-visible) {
  outline: none; /* Only hide for mouse users */
}
```

### Screen Reader Support

* **All images:** Meaningful alt text (not "image" or filename)
  - Decorative images: `alt=""` (empty alt, not missing)
  - Informational images: Describe content and purpose

* **All interactive elements:** Proper ARIA labels
  - Buttons with icons only: `aria-label="Close dialog"`
  - Links: Link text describes destination

* **All form inputs:** Associated `<label>` elements
  - Use `for` attribute matching input `id`
  - Don't use placeholder as label

### Keyboard Navigation

* **Tab order:** Logical flow, left-to-right, top-to-bottom
* **Focus management:** Modal traps focus, returns focus on close
* **Shortcuts:** Escape closes modals, Enter submits forms
* **Skip links:** "Skip to main content" for long navigation

### Additional Considerations

* **Error messaging:** Clear, specific, associated with field
* **Loading states:** Indicate progress, don't just show spinner
* **Time limits:** Provide option to extend (booking timer)
* **Motion:** Respect `prefers-reduced-motion` setting

---

## Special Components

### Star Rating Display

**Purpose:** Show property/experience rating with review count

**Visual structure:**
* **Star Icon:** 14px × 14px, filled star in Rausch Pink (`#FF385C`)
* **Format:** ★ [rating] ([review count])
* **Rating Text:** 13px, Regular (400), `#222222`
* **Spacing:** 4px between star and rating number, 2px before review count

**Example:** ★ 4.81 (134)

**Implementation notes:**
- Always show one decimal place for ratings
- Review count in parentheses
- If no reviews yet, show "New" badge instead of rating
- Link to reviews when clicked (full listing page)

### Price Display

**Purpose:** Show nightly rate clearly and consistently

**Visual structure:**
* **Large Price:** 16px, Semibold (600), `#222222`
* **Currency symbol:** Part of price text
* **Number format:** Localized (¥10,000 vs $10,000 vs €10.000)
* **Per night label:** 14px, Regular (400), `#717171`, follows price
* **Strikethrough original:** 14px, Regular (400), `#717171`, line-through

**Examples:**
- `¥10,000 per night`
- `$145 per night`
- `~~$180~~ $145 per night` (discounted)

**Implementation notes:**
- Always show currency symbol
- Use localized number formatting
- "per night" label can be shortened to "/night" when space constrained
- Show discount prominently with strikethrough original

### Map Price Markers

**Purpose:** Show pricing on map view, allow selection

**Visual structure:**
* **Background:** White (`#FFFFFF`)
* **Text:** 14px, Semibold (600), `#222222`
* **Padding:** 8px horizontal, 6px vertical
* **Corner Radius:** 20px (pill shape)
* **Border:** 1px solid `#DDDDDD`
* **Shadow:** Level 1 (subtle elevation)

**States:**
- **Default:** White background, charcoal text, gray border
- **Hover:** Scale 1.05, shadow enhancement
- **Active/Selected:** Background `#222222`, Text `#FFFFFF`, scale 1.1

**Implementation notes:**
- Markers cluster at zoom-out levels
- Selected marker stays prominent when card is active
- Clicking marker scrolls to corresponding listing card
- Marker text is just price (¥10,000), not "per night"

### Quality Badge (Modal)

**Purpose:** Explain quality indicators like "Guest Choice"

**Visual structure:**
* **Icon:** Gold medallion with Airbnb logo, 120px × 120px
* **Background:** White modal with rounded corners (12px)
* **Title:** 18px, Bold (700), `#222222`
* **Body Text:** 15px, Regular (400), `#717171`
* **Spacing:** 24px between elements

**Content structure:**
1. Large icon (centered)
2. Title (e.g., "Airbnbの体験はすべてクオリティチェック済み")
3. Explanation paragraph
4. Primary button to close/continue

**Implementation notes:**
- Appears when user clicks on quality badge
- Modal max width: 568px
- Close button in top-right
- Backdrop darkens background

### Heart/Favorite Button

**Purpose:** Add/remove listings from favorites

**Visual structure:**
* **Icon Size:** 24px × 24px
* **Touch Target:** 40px × 40px (use padding)
* **Position:** Absolute, top-right corner of card with 12px margin
* **Background:** Semi-transparent white circle, 90% opacity (when over images)

**States:**
* **Default:** Outlined heart, 2px stroke, `#FFFFFF` (on images) or `#222222` (on white)
* **Hover:** Subtle scale 1.1, background opacity 100%
* **Active/Favorited:** Filled heart, Rausch Pink (`#FF385C`)

**Implementation notes:**
- State persists across sessions (saved to account)
- Immediate visual feedback on click (no loading delay)
- Works even when not logged in (prompts login after click)
- Animation: quick scale and fill (150ms)

---

## Responsive Breakpoints

Our responsive design adapts across 4 major breakpoints:

### Mobile: 0-743px

**Layout:**
- Single column layout
- Full-width cards
- Simplified navigation (hamburger menu)
- Collapsed search bar (single section, expands to modal)
- Touch-optimized (larger tap targets)

**Navigation:**
- Logo + hamburger menu (top)
- Bottom sheet navigation drawer
- Sticky search bar simplified

**Typography:**
- Slightly smaller heading sizes (H1: 28px instead of 32px)
- Maintain readability (minimum 14px body text)

### Tablet: 744px-1127px

**Layout:**
- 2 column card grid
- 16px gap between columns
- Expanded navigation appears
- Search bar shows all sections in single row

**Navigation:**
- Full navigation bar visible
- Category tabs horizontally scrollable if needed

**Typography:**
- Standard sizes (same as desktop)

### Desktop: 1128px-1439px

**Layout:**
- 3-4 column card grid (depending on content type)
- 24px gap between columns and rows
- Map view appears side-by-side with listings (50/50 split)
- Full search bar with all sections visible

**Navigation:**
- Full navigation with all options
- Hover states active
- Dropdown menus instead of modals

**Typography:**
- Full sizes as specified in style guide

### Large Desktop: 1440px+

**Layout:**
- 4-5 column card grid
- Container max-width of 1760px (centered)
- 80px horizontal padding
- Generous white space around content

**Navigation:**
- Same as desktop

**Typography:**
- Same as desktop

**Implementation notes:**
```css
/* Mobile-first approach */
.container {
  padding: 0 24px; /* Mobile */
}

@media (min-width: 744px) {
  .container {
    padding: 0 40px; /* Tablet */
  }
}

@media (min-width: 1128px) {
  .container {
    padding: 0 80px; /* Desktop */
    max-width: 1760px;
    margin: 0 auto;
  }
}
```

---

## State Variations

### Interactive States

Every interactive element must have defined states:

#### Default
Base styling as defined in each component specification

#### Hover
**Purpose:** Indicate interactivity, provide feedback
**Styling:** 
- Buttons: Background darkens slightly
- Cards: Subtle scale (1.03) + shadow enhancement
- Links: Underline appears
- Icons: Color may change or scale slightly
**Timing:** 150-300ms depending on element

#### Active/Pressed
**Purpose:** Provide immediate feedback that action registered
**Styling:**
- Scale 0.96-0.98 (slight press-down effect)
- Colors slightly darker than hover
- No shadow (element appears pressed into page)
**Timing:** Instant (0ms) on press, 150ms on release

#### Focus
**Purpose:** Keyboard navigation indicator
**Styling:**
- 2px solid outline in `#222222`
- 2px offset from element
- Never remove focus indicators
**Application:** All interactive elements

#### Disabled
**Purpose:** Show unavailable actions
**Styling:**
- 50% opacity on entire element
- `cursor: not-allowed`
- No hover effects
- Often with explanatory tooltip
**Use when:** Action temporarily unavailable (dates full, form incomplete)

#### Loading
**Purpose:** Indicate processing
**Styling:**
- Spinner or skeleton UI
- 70% opacity on existing content
- Disable interaction
- May show "Loading..." text
**Use when:** Waiting for server response, data fetching

### Toggle States (Checkmark)

**Purpose:** On/off switches for settings and options

**Visual structure:**
* **Container:** 48px × 28px rounded rectangle
* **Handle:** 24px circle
* **Off State:** 
  - Background `#DDDDDD`
  - Handle positioned left
  - No icon
* **On State:** 
  - Background `#222222`
  - Handle positioned right
  - Checkmark icon (12px, white)
* **Transition:** 200ms ease-in-out (handle slides smoothly)

**Implementation notes:**
- Label to left of toggle
- Toggle is touch target (don't require precise click on handle)
- Immediate visual feedback
- Consider color-blind users (don't rely on color alone—use checkmark icon)

---

## Design Principles Summary

**Quick reference for decision-making:**

1. **Photo-First: High-quality imagery drives inspiration and trust**
   - Lead with beautiful, authentic photos
   - Large images, generous sizing
   - Real photos over stock imagery

2. **Clarity Over Cleverness: Straightforward UI beats clever interactions**
   - Clear labels over icons-only
   - Standard patterns over novel interactions
   - Explicit over implicit

3. **Unified But Not Uniform: Consistency in patterns, variety in content**
   - Reuse components and patterns
   - Let content provide variety
   - Don't make everything look identical

4. **Build Trust: Transparent pricing, prominent reviews, authentic photos**
   - Show total price upfront
   - Reviews visible everywhere
   - No hidden fees or surprises

5. **Reduce Friction: Persistent search, minimal form fields, smart defaults**
   - One-click actions when possible
   - Progressive disclosure
   - Smart defaults reduce decisions

6. **Accessible to All: Strong contrast, readable type, keyboard navigation**
   - Exceed minimum accessibility standards
   - Design for everyone
   - Test with assistive technology

7. **Subtle Delight: Small animations, smooth transitions, thoughtful micro-interactions**
   - Animations enhance, don't distract
   - Smooth, natural motion
   - Surprise and delight in small moments

8. **Content Over Chrome: Generous white space, minimal decoration, content focus**
   - Let content be the star
   - Remove unnecessary UI
   - White space is valuable

---

## Continuous Evolution

This style guide is a living document. As Airbnb grows and evolves, so too will our design system.

**How to propose changes:**
1. Document the problem with current patterns
2. Design and prototype alternative
3. Test with users and gather data
4. Present findings to design systems team
5. If approved, document new pattern
6. Update component library
7. Communicate changes to all designers and engineers

**How to stay current:**
- Review quarterly updates to this guide
- Attend design system office hours
- Join the #design-systems Slack channel
- Contribute to pattern documentation

**Remember:** These patterns exist because they solve real user problems and have been tested at scale. Follow them thoughtfully, break them intentionally, and always advocate for users.

---

## Conclusion

Welcome to Airbnb's design team. You now have the tools, knowledge, and principles to create experiences that help people belong anywhere. Use this guide as your foundation, but always remember: the best design serves users, builds trust, and makes the complex feel simple.

When in doubt, ask: "Does this help someone feel like they belong?"

If yes, you're on the right path.

---

*Last updated: November 2025*
*For questions or contributions: design-systems@airbnb.com*

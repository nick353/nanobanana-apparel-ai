# Airbnb UX/UI Style Guide

## Pondering Analysis

Airbnb's design philosophy centers on creating a warm, trustworthy, and effortlessly navigable experience that reflects its core mission: making anyone feel like they can "belong anywhere." The interface strikes a delicate balance between functionality and aspiration—it's both a practical booking tool and a window into unique experiences around the world.

The aesthetic is defined by generous white space, which creates breathing room and prevents cognitive overload despite the density of information (thousands of listings, prices, ratings, images). This minimalism isn't cold or sterile; it's offset by vibrant photography and the signature "Rausch" pink that injects warmth and energy at strategic touchpoints.

The design system adheres strongly to principles of clarity and trust-building. Every element serves to reduce friction in the booking process: large, high-quality photos showcase properties authentically; prominent ratings and review counts build social proof; clear pricing with no hidden surprises establishes transparency; and the persistent, accessible search bar reinforces that users are always just one click away from finding their next adventure.

Typography is exceptionally readable with generous line-heights and careful weight differentiation that creates natural visual hierarchy without relying on color or decoration. The rounded corners throughout the interface—from cards to buttons to input fields—soften the digital experience and create a friendly, approachable tone that aligns with the "home away from home" ethos.

The modal interactions (login, language selection, quality badges) are particularly well-executed: they're prominent enough to capture attention but never feel intrusive, with thoughtful details like the toggle checkmark and the gold quality badge that reinforce positive feelings about the platform's curation and standards.

The map integration on search results is a masterclass in progressive disclosure—it provides spatial context without overwhelming the primary card-based browsing experience. Price markers on the map are clickable and immediately scannable, respecting that for many users, budget is a primary constraint.

Overall, the design makes users feel both empowered (clear controls, abundant information) and inspired (beautiful photography, curated experiences), which is exactly the emotional duality needed for a product that sits at the intersection of practical necessity and aspirational travel.

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

* **H2 (Section Header):** 22px/28px, Semibold (600), Letter spacing -0.3px
  * Used for section titles and category headers
  * Color: `#222222`

* **H3 (Card Title):** 16px/20px, Semibold (600), Letter spacing 0px
  * Used for listing titles, property names
  * Color: `#222222`

#### Body Text

* **Body Large:** 16px/24px, Regular (400), Letter spacing 0px
  * Primary reading text for descriptions and longer content
  * Color: `#222222`

* **Body Regular:** 14px/20px, Regular (400), Letter spacing 0.2px
  * Standard text for most UI elements, descriptions
  * Color: `#222222`

* **Body Small:** 12px/16px, Regular (400), Letter spacing 0.3px
  * Metadata, secondary information, fine print
  * Color: `#717171`

#### Special Text

* **Price Text:** 16px/20px, Semibold (600), Letter spacing -0.1px
  * Prominent pricing display
  * Color: `#222222`
  * Format: ¥10,000

* **Button Text:** 16px/24px, Semibold (600), Letter spacing 0.3px
  * All button labels
  * Color: `#FFFFFF` (on primary buttons) or `#222222` (on secondary buttons)

* **Badge Text:** 12px/16px, Medium (500), Letter spacing 0.5px
  * Labels like "ゲストチョイス", "スーパーホスト", "NEW"
  * Often uppercase or small caps

* **Link Text:** 14px/20px, Medium (500), Letter spacing 0px
  * Clickable text links
  * Color: `#222222` with underline on hover

* **Rating Text:** 13px/16px, Regular (400), Letter spacing 0.2px
  * Rating numbers and review counts
  * Color: `#222222`
  * Format: "★ 4.81 (134)"

## Component Styling

### Buttons

#### Primary Button

* **Background:** Rausch Pink (`#FF385C`)
* **Text:** White (`#FFFFFF`)
* **Height:** 48px
* **Corner Radius:** 8px
* **Padding:** 24px horizontal, 14px vertical
* **Font:** 16px, Semibold (600)
* **Hover State:** Darker pink (`#E31C5F`)
* **Active State:** Scale 0.96
* **Transition:** 150ms ease-out

#### Secondary Button (Outlined)

* **Border:** 1px solid `#222222`
* **Text:** Charcoal (`#222222`)
* **Background:** Transparent
* **Height:** 48px
* **Corner Radius:** 8px
* **Padding:** 22px horizontal, 13px vertical
* **Hover State:** Background `#F7F7F7`

#### Icon Button

* **Size:** 32px × 32px (circular)
* **Background:** Transparent or white with shadow
* **Icon Color:** `#222222` or `#FFFFFF`
* **Hover State:** Background `#F7F7F7` or subtle shadow increase

#### Social Login Buttons

* **Height:** 48px
* **Corner Radius:** 8px
* **Border:** 1px solid `#DDDDDD`
* **Background:** White (`#FFFFFF`)
* **Text:** 14px, Medium (500), Charcoal (`#222222`)
* **Icon:** Brand icons at 20px × 20px, positioned left
* **Padding:** 16px
* **Hover State:** Border darkens to `#B0B0B0`

### Cards

#### Listing Card

* **Background:** Transparent (image-first design)
* **Corner Radius:** 12px (for images)
* **Image Aspect Ratio:** 4:3 or 1:1 depending on layout
* **Shadow on Image:** Subtle on hover - Y-offset 2px, Blur 8px, `rgba(0,0,0,0.08)`
* **Padding:** 0px (images bleed to edge)
* **Info Section Padding:** 12px top, 0px horizontal
* **Hover Effect:** Image subtle scale (1.03) with shadow enhancement

#### Modal Card

* **Background:** White (`#FFFFFF`)
* **Corner Radius:** 12px
* **Shadow:** Y-offset 0px, Blur 20px, `rgba(0,0,0,0.15)`
* **Max Width:** 568px (login modal), 700px (language modal)
* **Padding:** 24px (mobile), 32px (desktop)

#### Badge/Label Component

* **Background:** White with 90% opacity or solid colors for emphasis
* **Padding:** 6px horizontal, 4px vertical
* **Corner Radius:** 4px
* **Font:** 12px, Medium (500)
* **Shadow:** Subtle - Y-offset 1px, Blur 3px, `rgba(0,0,0,0.1)` (for floating badges)

### Input Fields

#### Text Input

* **Height:** 56px
* **Corner Radius:** 8px
* **Border:** 1px solid `#B0B0B0`
* **Background:** White (`#FFFFFF`)
* **Text:** 16px, Regular (400), `#222222`
* **Placeholder:** 16px, Regular (400), `#717171`
* **Padding:** 16px
* **Focus State:** Border 2px solid `#222222`, slight shadow
* **Label:** 12px, Semibold (600), `#222222`, positioned above input with 8px gap

#### Search Bar (Compound Input)

* **Height:** 64px
* **Corner Radius:** 32px (full pill shape)
* **Background:** White (`#FFFFFF`)
* **Shadow:** Y-offset 0px, Blur 16px, `rgba(0,0,0,0.15)`
* **Border:** 1px solid `#DDDDDD`
* **Sections:** Divided by 1px dividers (`#DDDDDD`)
* **Search Button:** Circular, 48px diameter, Rausch Pink background, white search icon
* **Hover State:** Enhanced shadow - Blur 24px, `rgba(0,0,0,0.18)`

#### Dropdown/Select

* **Styled like text input** with chevron icon
* **Height:** 56px
* **Icon:** 20px × 20px chevron, positioned right with 16px margin
* **Expanded State:** Dropdown appears below with 8px gap

### Icons

* **Primary Size:** 24px × 24px (for UI icons)
* **Small Size:** 16px × 16px (inline with text)
* **Large Size:** 48px × 48px (feature icons, empty states)
* **Navigation Icons:** 24px × 24px
* **Heart/Favorite Icon:** 24px × 24px with 2px stroke
* **Primary Color:** `#222222` (default icons)
* **Interactive Color:** `#FF385C` (active states, selected)
* **Style:** Outlined, 2px stroke weight, rounded line caps

### Navigation

#### Top Navigation Bar

* **Height:** 80px (desktop), 64px (mobile)
* **Background:** White (`#FFFFFF`)
* **Border Bottom:** 1px solid `#EBEBEB`
* **Logo Height:** 32px
* **Padding:** 24px horizontal
* **Sticky:** Yes (follows scroll)
* **Shadow on Scroll:** Y-offset 1px, Blur 4px, `rgba(0,0,0,0.08)`

#### Tab Bar

* **Height:** 48px
* **Background:** Transparent
* **Active Tab Indicator:** 2px bottom border, `#222222`
* **Text:** 14px, Semibold (600)
* **Text Color:** `#717171` (inactive), `#222222` (active)
* **Hover State:** Text color to `#222222`

#### Footer Links

* **Text:** 14px, Regular (400)
* **Color:** `#222222`
* **Line Height:** 24px
* **Hover:** Underline decoration
* **Section Spacing:** 48px vertical between groups

## Spacing System

* **2px** - Micro spacing (borders, fine adjustments)
* **4px** - Minimal spacing (tight grouping, badge padding)
* **8px** - Small spacing (icon-to-text gaps, between related elements)
* **12px** - Compact spacing (card internal padding top)
* **16px** - Default spacing (standard padding, between UI elements)
* **24px** - Medium spacing (card padding, section spacing, navigation padding)
* **32px** - Large spacing (modal padding, between major sections)
* **48px** - Extra large spacing (footer sections, page top/bottom margins)
* **64px** - XXL spacing (between major page sections)

## Layout Grid

* **Container Max Width:** 1760px (desktop)
* **Container Padding:** 24px (mobile), 40px (tablet), 80px (desktop)
* **Card Grid:** 
  * Mobile: 1 column
  * Tablet: 2 columns with 16px gap
  * Desktop: 3-4 columns with 24px gap
  * Large Desktop: 4-5 columns with 24px gap

## Motion & Animation

* **Micro-interactions:** 150ms, ease-out
  * Button hovers, icon state changes
* **Standard Transition:** 200ms, ease-in-out
  * Modal open/close, dropdown expand
* **Card Hover:** 300ms, ease-out
  * Image scale, shadow enhancement
* **Page Transition:** 250ms, cubic-bezier(0.25, 0.46, 0.45, 0.94)
* **Skeleton Loading:** 1.5s infinite pulse animation
* **Scroll Behavior:** Smooth with momentum (native platform behavior)

### Animation Principles

* **Favor subtle over dramatic** - Animations should feel natural, not call attention to themselves
* **Respect user preferences** - Honor prefers-reduced-motion
* **Fast follows, slow reveals** - Quick interactions (hovers), slower major state changes (modals)
* **Spring physics for natural motion** - Slight bounce on modals, elastic on important CTAs

## Elevation & Shadows

### Shadow Levels

* **Level 1 (Subtle):** `0 1px 2px rgba(0,0,0,0.08)`
  * Default card state, subtle separation

* **Level 2 (Card Hover):** `0 2px 8px rgba(0,0,0,0.12)`
  * Cards on hover, slight elevation

* **Level 3 (Dropdown):** `0 6px 16px rgba(0,0,0,0.12)`
  * Dropdowns, tooltips

* **Level 4 (Modal):** `0 10px 40px rgba(0,0,0,0.15)`
  * Modals, dialogs, important overlays

* **Level 5 (Navigation):** `0 1px 4px rgba(0,0,0,0.08)`
  * Fixed navigation bars on scroll

## Imagery Guidelines

* **Listing Photos:** 
  * Minimum 1200px × 900px
  * 4:3 aspect ratio (primary)
  * High quality, well-lit, authentic representation
  * Corner radius: 12px

* **Profile Photos:**
  * Circular crop
  * Minimum 225px × 225px
  * Border: 1px solid `#EBEBEB` (optional)

* **Badge/Icon Graphics:**
  * Vector format (SVG)
  * Single color or simple gradients
  * Clear at all sizes

## Accessibility

* **Minimum Touch Target:** 44px × 44px (following iOS/WCAG guidelines)
* **Color Contrast:** 
  * Body text: 4.5:1 minimum (AA)
  * Large text (18px+): 3:1 minimum (AA)
  * Interactive elements: 3:1 minimum
* **Focus States:** 2px solid outline in `#222222` with 2px offset
* **Screen Reader Support:** All interactive elements have proper ARIA labels
* **Keyboard Navigation:** Full tab order support, visible focus indicators

## Special Components

### Star Rating Display

* **Star Icon:** 14px × 14px, filled star in `#FF385C`
* **Format:** ★ [rating] ([review count])
* **Rating Text:** 13px, Regular (400), `#222222`
* **Spacing:** 4px between star and rating number

### Price Display

* **Large Price:** 16px, Semibold (600), `#222222`
* **Format:** ¥10,000
* **Per Night Label:** 14px, Regular (400), `#717171`
* **Strikethrough Original:** 14px, Regular (400), `#717171`, line-through

### Map Price Markers

* **Background:** White (`#FFFFFF`)
* **Text:** 14px, Semibold (600), `#222222`
* **Padding:** 8px horizontal, 6px vertical
* **Corner Radius:** 20px (pill shape)
* **Border:** 1px solid `#DDDDDD`
* **Active/Selected State:** Background `#222222`, Text `#FFFFFF`, scale 1.1
* **Hover State:** Scale 1.05, shadow enhancement

### Quality Badge (Modal)

* **Icon:** Gold medallion with Airbnb logo
* **Size:** 120px × 120px
* **Background:** White modal with rounded corners
* **Title:** 18px, Bold (700), `#222222`
* **Body Text:** 15px, Regular (400), `#717171`

### Heart/Favorite Button

* **Size:** 24px × 24px icon in 40px × 40px touch target
* **Default:** Outlined heart with 2px stroke, `#FFFFFF` with subtle shadow
* **Active:** Filled heart, `#FF385C`
* **Position:** Absolute, top-right corner of card with 12px margin
* **Background (on images):** Semi-transparent white circle, 90% opacity

## Responsive Breakpoints

* **Mobile:** 0-743px
* **Tablet:** 744px-1127px
* **Desktop:** 1128px-1439px
* **Large Desktop:** 1440px+

## State Variations

### Interactive States

* **Default:** Base styling as defined
* **Hover:** Subtle color darkening or background addition, scale or shadow enhancement
* **Active/Pressed:** Scale 0.96-0.98, slightly darker colors
* **Focus:** 2px outline, `#222222` with 2px offset
* **Disabled:** 50% opacity, `not-allowed` cursor
* **Loading:** Spinner or skeleton UI, reduced opacity on content

### Toggle States (Checkmark)

* **Container:** 48px × 28px rounded rectangle
* **Handle:** 24px circle
* **Off State:** Background `#DDDDDD`, handle positioned left
* **On State:** Background `#222222`, handle positioned right with checkmark icon
* **Transition:** 200ms ease-in-out

## Design Principles Summary

1. **Photo-First:** High-quality imagery drives inspiration and trust
2. **Clarity Over Cleverness:** Straightforward UI beats clever interactions
3. **Unified But Not Uniform:** Consistency in patterns, variety in content
4. **Build Trust:** Transparent pricing, prominent reviews, authentic photos
5. **Reduce Friction:** Persistent search, minimal form fields, smart defaults
6. **Accessible to All:** Strong contrast, readable type, keyboard navigation
7. **Subtle Delight:** Small animations, smooth transitions, thoughtful micro-interactions
8. **Content Over Chrome:** Generous white space, minimal decoration, content focus

---

*This style guide represents the Airbnb design system as observed in the provided screenshots. Airbnb continuously evolves its design language, so specific values may vary across platforms and over time.*

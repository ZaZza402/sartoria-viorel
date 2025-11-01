# 🎨 Brand Color Quick Reference

## Color Swatches

```
┌─────────────────────────────────────────────────────────────┐
│ PRIMARY - Deep Forest Green                                  │
│ #014421                                                       │
│ rgb(1, 68, 33)                                               │
│ ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■           │
│                                                              │
│ Use for: Headers, Footers, Buttons, Links                   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ BASE - Light Cool Gray                                       │
│ #EFEFEF                                                       │
│ rgb(239, 239, 239)                                           │
│ □□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□□           │
│                                                              │
│ Use for: Page Background, Text on Dark Sections             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ ACCENT - Silver                                              │
│ #BDBDBD                                                       │
│ rgb(189, 189, 189)                                           │
│ ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒           │
│                                                              │
│ Use for: Logo, Headings on Dark BG, Hover States            │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ TEXT - Charcoal                                              │
│ #333333                                                       │
│ rgb(51, 51, 51)                                              │
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           │
│                                                              │
│ Use for: Body Text, Paragraphs on Light Backgrounds         │
└─────────────────────────────────────────────────────────────┘
```

## CSS Variable Names

```css
/* Copy-paste ready */
var(--color-primary)      /* #014421 - Deep Forest Green */
var(--color-base)         /* #EFEFEF - Light Cool Gray */
var(--color-accent)       /* #BDBDBD - Silver */
var(--color-text)         /* #333333 - Charcoal */

/* Hover states */
var(--color-primary-hover)    /* #012f17 - Darker Green */
var(--color-primary-light)    /* #015829 - Lighter Green */
var(--color-accent-dark)      /* #9e9e9e - Darker Silver */
var(--color-text-light)       /* #666666 - Light Charcoal */
```

## Tailwind Classes

```tsx
/* Backgrounds */
className = "bg-brand-primary"; // Deep Forest Green
className = "bg-brand-base"; // Light Cool Gray
className = "bg-brand-accent"; // Silver

/* Text Colors */
className = "text-brand-primary"; // Deep Forest Green
className = "text-brand-base"; // Light Cool Gray
className = "text-brand-accent"; // Silver
className = "text-brand-text"; // Charcoal

/* Borders */
className = "border-brand-primary"; // Deep Forest Green
className = "border-brand-accent"; // Silver
```

## Component Examples

### Header

```tsx
<header className="bg-brand-primary">
  <h1 className="text-brand-accent">Logo</h1>
  <a className="text-brand-base hover:text-brand-accent">Link</a>
</header>
```

### Button

```tsx
<button className="bg-brand-primary text-brand-base">Primary Button</button>
```

### Content

```tsx
<section className="bg-brand-base">
  <h2 className="text-brand-primary">Heading</h2>
  <p className="text-brand-text">Body text</p>
</section>
```

## Accessibility

✅ **WCAG AA Compliant Combinations:**

| Background        | Text Color        | Contrast Ratio | Pass   |
| ----------------- | ----------------- | -------------- | ------ |
| #EFEFEF (Base)    | #333333 (Text)    | 11.4:1         | ✅ AAA |
| #014421 (Primary) | #EFEFEF (Base)    | 10.2:1         | ✅ AAA |
| #014421 (Primary) | #BDBDBD (Accent)  | 4.7:1          | ✅ AA  |
| #FFFFFF (White)   | #014421 (Primary) | 12.1:1         | ✅ AAA |

## Brand Mood

🌲 **Deep Forest Green** → Trust, Nature, Craftsmanship  
🏛️ **Silver** → Elegance, Premium Quality  
📄 **Light Gray** → Clean, Modern, Minimalist  
📝 **Charcoal** → Professional, Readable, Classic

---

**File Location:** `d:\CLIENTS\DEMO\Sartoria Viorel\COLOR_PALETTE_REFERENCE.md`

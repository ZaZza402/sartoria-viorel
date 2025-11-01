# Refined Elegant Color Palette

## Primary Colors

### Dark Tones (Headers, Footer, Backgrounds)

- **Deep Navy**: `#0f1419` - Primary dark
- **Rich Navy**: `#1a2332` - Secondary dark
- **Gradient**: `linear-gradient(135deg, #0f1419 0%, #1a2332 100%)`

### Light Tones (Backgrounds, Content Areas)

- **Warm Cream**: `#f5f1e8` - Light background
- **Soft Ivory**: `#fdfbf7` - Lighter accent
- **Gradient**: `linear-gradient(180deg, #fdfbf7 0%, #f5f1e8 100%)`

### Accent Colors (Highlights, CTAs, Borders)

- **Luxury Gold**: `#d4af37` - Primary accent
- **Muted Gold**: `#b8935f` - Secondary accent
- **Gradient**: `linear-gradient(135deg, #d4af37 0%, #b8935f 100%)`

### Text Colors

- **Deep Charcoal**: `#2a2a2a` - Primary text on light backgrounds
- **Soft Gray**: `#666666` - Secondary text
- **Pure White**: `#ffffff` - Text on dark backgrounds
- **Soft Ivory**: `#fdfbf7` - Light text on dark backgrounds
- **Warm Cream**: `#f5f1e8` - Subtle text on dark backgrounds

## Gradient Applications

### Headers & Footer

```css
background: linear-gradient(135deg, #0f1419 0%, #1a2332 100%);
```

### Content Sections

```css
background: linear-gradient(180deg, #fdfbf7 0%, #f5f1e8 100%);
```

### Accent Elements (Headings, Dividers)

```css
background: linear-gradient(135deg, #d4af37 0%, #b8935f 100%);
```

### Text Gradients

```css
background: linear-gradient(135deg, #d4af37 0%, #b8935f 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

## Usage Guidelines

1. **Always use inline styles** for colors to avoid Tailwind override issues
2. **Use gradients** for elegant, sophisticated feel
3. **Gold accents** for luxury touch on headings and CTAs
4. **Navy/Cream contrast** for readability and elegance
5. **Text gradients** for special emphasis on titles

## Components Updated

✅ Header - Navy gradient background
✅ Mobile Menu - Navy gradient with gold accents
✅ Hero Section - Gold gradient title, cream text
✅ Services Section - Cream gradient background, navy/gold titles
✅ Contact Section - Navy gradient background, gold accents
✅ Footer - Navy gradient with gold accents, includes Google Maps

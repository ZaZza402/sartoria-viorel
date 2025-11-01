# Component Structure Documentation

## Overview

This document outlines the modular component architecture of the Sartoria Viorel website. Each component is designed to be easily editable and maintainable.

---

## Component Hierarchy

### Layout Components

Located in: `src/components/layout/`

#### Header (`Header.tsx`)

- **Purpose**: Main navigation header, fixed at the top
- **Key Features**:
  - Responsive design (desktop/mobile)
  - Fixed position with backdrop blur
  - Dark green background (`bg-brand-primary`)
  - Uses Logo, DesktopNav, and MobileNav components
- **Styling**: Light text on dark background for contrast
- **Animation**: Slides down on mount with Framer Motion

#### Footer (`Footer.tsx`)

- **Purpose**: Site footer with contact info and links
- **Key Features**:
  - Three-column grid layout (responsive)
  - Quick links navigation
  - Contact information
  - Copyright notice
- **Styling**: Dark green background with light gray text

---

### UI Components

Located in: `src/components/ui/`

#### Logo (`Logo.tsx`)

- **Purpose**: Reusable brand logo component
- **Props**:
  - `size`: "sm" | "md" | "lg" | "xl" (default: "lg")
- **Styling**:
  - Italianno script font
  - Silver color (`text-brand-accent`)
  - Drop shadow for visibility
- **Usage**:
  ```tsx
  <Logo size="lg" />
  ```

#### Button (`Button.tsx`)

- **Purpose**: Reusable button component
- **Props**:
  - `variant`: "primary" | "outline" (default: "primary")
  - `size`: "sm" | "md" | "lg" (default: "md")
- **Variants**:
  - **Primary**: Dark green background, light text
  - **Outline**: Transparent background, dark green border
- **Usage**:
  ```tsx
  <Button variant="primary" size="lg">
    Prenota Appuntamento
  </Button>
  ```

#### Container (`Container.tsx`)

- **Purpose**: Responsive container wrapper
- **Features**:
  - Max width: 1280px
  - Responsive padding
  - Centers content
- **Usage**:
  ```tsx
  <Container>{/* Your content */}</Container>
  ```

---

### Navigation Components

Located in: `src/components/navigation/`

#### DesktopNav (`DesktopNav.tsx`)

- **Purpose**: Desktop navigation menu
- **Features**:
  - Hidden on mobile (`hidden md:flex`)
  - Horizontal layout
  - Light text on dark background
  - Hover effects (text turns silver)
- **Links**: Chi Siamo, Servizi, Galleria, Contatti

#### MobileNav (`MobileNav.tsx`)

- **Purpose**: Mobile hamburger menu
- **Features**:
  - Hamburger icon button (visible on mobile only)
  - Slide-out panel from right
  - Backdrop overlay
  - Close on backdrop click
  - Smooth animations with Framer Motion
- **State**: Uses `useState` for menu open/close

---

### Section Components

Located in: `src/components/sections/`

#### HeroSection (`HeroSection.tsx`)

- **Purpose**: Main hero section with CTA
- **Content**:
  - Large script brand name with gradient text
  - Subtitle: "Maestro Sarto & Alta Moda su Misura"
  - Description text
  - Two CTA buttons (primary and outline)
- **Styling**:
  - Centered layout
  - Responsive text sizes
  - Fade-in animation on mount
- **Spacing**: Extra top padding for fixed header

#### WelcomeSection (`WelcomeSection.tsx`)

- **Purpose**: Welcome message introducing the sartoria
- **Content**:
  - Heading: "Benvenuti nella Nostra Sartoria"
  - Welcome paragraph about traditional craftsmanship
- **Styling**:
  - White background
  - Centered text
  - Fade-in on scroll into view
- **Layout**: Single column, max-width content

#### ServicesSection (`ServicesSection.tsx`)

- **Purpose**: Display main services offered
- **Content**:
  - Section heading: "I Nostri Servizi"
  - Three service cards:
    1. Abiti su Misura
    2. Modifiche e Aggiustamenti
    3. Consulenza Stile
- **Styling**:
  - Light gray background (`bg-brand-base`)
  - White cards with shadow
  - Hover effect on cards
- **Layout**: Three-column grid (responsive to single column on mobile)
- **Animation**: Staggered fade-in on scroll

#### ContactSection (`ContactSection.tsx`)

- **Purpose**: Contact information and CTA
- **Content**:
  - Section heading: "Contattateci"
  - Description paragraph
  - Contact details:
    - Address: Roma, Italia
    - Hours: Mon-Fri 9-18, Sat 9-13
    - Phone: +39 XXX XXX XXXX
  - Primary CTA button: "Prenota un Appuntamento"
- **Styling**:
  - White background
  - Centered layout
  - Fade-in animation
- **Layout**: Single column, centered content

---

## Color System

### Brand Colors

Defined in `src/index.css` as CSS variables:

```css
:root {
  --color-primary: #014421; /* Deep Forest Green */
  --color-base: #efefef; /* Light Cool Gray */
  --color-accent: #bdbdbd; /* Silver */
  --color-text: #333333; /* Charcoal */
}
```

### Tailwind Classes

- `bg-brand-primary`: #014421 (Dark green)
- `bg-brand-base`: #EFEFEF (Light gray)
- `text-brand-accent`: #BDBDBD (Silver)
- `text-brand-text`: #333333 (Charcoal)

### Contrast Guidelines

- **Dark backgrounds**: Use `text-brand-base` or `text-brand-accent`
- **Light backgrounds**: Use `text-brand-primary` or `text-brand-text`

---

## Typography

### Font Families

1. **Inter** (Default): Clean, modern sans-serif for body text
2. **Playfair Display** (Serif): Elegant serif for headings
3. **Italianno** (Script): Decorative script for brand name

### Usage

- Body text: Default Inter font
- Headings (h1-h6): `font-serif` (Playfair Display)
- Brand name: `font-script` (Italianno)

---

## Animation System

All animations use **Framer Motion**:

### Common Patterns

1. **Fade in on mount**:

   ```tsx
   initial={{ opacity: 0, y: 20 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.8 }}
   ```

2. **Fade in on scroll**:

   ```tsx
   initial={{ opacity: 0 }}
   whileInView={{ opacity: 1 }}
   transition={{ duration: 0.8 }}
   viewport={{ once: true }}
   ```

3. **Staggered animations**:
   ```tsx
   transition={{ duration: 0.5, delay: index * 0.1 }}
   ```

---

## File Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   ├── navigation/
│   │   ├── DesktopNav.tsx
│   │   ├── MobileNav.tsx
│   │   └── index.ts
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── WelcomeSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── index.ts
│   └── ui/
│       ├── Button.tsx
│       ├── Container.tsx
│       ├── Logo.tsx
│       └── index.ts
├── App.tsx
└── index.css
```

---

## Editing Guide

### To Edit Header/Footer

- **File**: `src/components/layout/Header.tsx` or `Footer.tsx`
- **What to change**: Text, links, colors, layout
- **Note**: Header uses separate Logo, DesktopNav, MobileNav components

### To Edit Navigation

- **Desktop**: `src/components/navigation/DesktopNav.tsx`
- **Mobile**: `src/components/navigation/MobileNav.tsx`
- **Change**: Update the `links` array to add/remove menu items

### To Edit Logo

- **File**: `src/components/ui/Logo.tsx`
- **Change**: Text, font size, colors
- **Usage**: Import and use with different `size` props

### To Edit Sections

- **Hero**: `src/components/sections/HeroSection.tsx`
- **Welcome**: `src/components/sections/WelcomeSection.tsx`
- **Services**: `src/components/sections/ServicesSection.tsx`
- **Contact**: `src/components/sections/ContactSection.tsx`

### To Add New Section

1. Create new file in `src/components/sections/`
2. Export from `src/components/sections/index.ts`
3. Import in `App.tsx`
4. Add to JSX between Header and Footer

### To Edit Colors

- **Global**: `src/index.css` (`:root` variables)
- **Tailwind**: `tailwind.config.js` (extend theme colors)

### To Edit Fonts

- **Add font**: `index.html` (Google Fonts link)
- **Configure**: `tailwind.config.js` (fontFamily)
- **Use**: Apply with `font-serif`, `font-script`, etc.

---

## Best Practices

1. **Always use Container**: Wrap section content in `<Container>` for consistent spacing
2. **Maintain contrast**: Check text visibility on all backgrounds
3. **Use brand colors**: Stick to the defined color palette
4. **Responsive design**: Test on mobile, tablet, desktop
5. **Accessibility**: Include proper semantic HTML and ARIA labels
6. **Animation performance**: Use `transform` and `opacity` for smooth animations
7. **Component reusability**: Create new components for repeated patterns

---

## Next Steps

### Planned Enhancements

1. Add Gallery section with image grid
2. Implement About (Chi Siamo) section with story
3. Add testimonials section
4. Create appointment booking form
5. Integrate Google Maps for location
6. Add social media links in footer
7. Implement language switcher (IT/EN)

### Performance Optimizations

1. Add image optimization with lazy loading
2. Implement code splitting for sections
3. Add Progressive Web App (PWA) features
4. Optimize font loading strategy

---

**Last Updated**: Current session
**Maintainer**: Development Team

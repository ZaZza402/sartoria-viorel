# Viorel Danalache - Sartoria Website

A modern, responsive website for Viorel Danalache's custom tailoring business, built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router DOM** - Navigation
- **clsx** - Utility for constructing className strings

## 📦 Installation

All dependencies have been installed. To verify, run:

```bash
npm install
```

## 🛠️ Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components (Button, Container, etc.)
│   └── layout/          # Layout components (Header, Footer)
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── types/               # TypeScript type definitions
└── assets/              # Static assets (images, fonts, etc.)
```

## 🎨 Reusable Components

### UI Components

- **Button** - Customizable button with variants (primary, secondary, outline, ghost)
- **Container** - Responsive container with size options

### Layout Components

- **Header** - Fixed navigation bar with animations
- **Footer** - Site footer with links and contact info

## 📝 Usage Example

```tsx
import { Button, Container } from "./components/ui";
import { Header, Footer } from "./components/layout";

function MyPage() {
  return (
    <>
      <Header />
      <Container size="lg">
        <Button variant="primary" size="lg">
          Click Me
        </Button>
      </Container>
      <Footer />
    </>
  );
}
```

## 🎭 Animations

This project uses Framer Motion for smooth animations. Example:

```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Content here
</motion.div>;
```

## 🏃 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

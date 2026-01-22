# Incentive Lab - Landing Page

A modern, responsive landing page for Incentive Lab built with React and Tailwind CSS.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
   ```bash
   cd incentive-lab
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
incentive-lab/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Features/
│   │   ├── HowItWorks/
│   │   ├── Pricing/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Features

- Fully responsive design (mobile, tablet, desktop)
- Smooth scroll navigation
- Sticky header with mobile menu
- Interactive pricing toggle (monthly/annual)
- Contact form with validation
- Animated sections and hover effects
- Accessible (WCAG 2.1 compliant)
- Performance optimized

## Customization

### Colors

Edit the color palette in `tailwind.config.js`:

```js
colors: {
  primary: { ... },
  secondary: { ... },
}
```

### Content

Update the content in each component file under `src/components/`.

### Fonts

The default font is Inter. To change it, update the Google Fonts link in `index.html` and the `fontFamily` in `tailwind.config.js`.

## Deployment

Build the project:

```bash
npm run build
```

The `dist` folder contains the production-ready files. Deploy to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop `dist` folder
- **GitHub Pages**: Use `gh-pages` package

## License

MIT

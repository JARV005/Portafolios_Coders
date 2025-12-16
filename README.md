# Developer Portfolio Directory

A modern, developer-focused portfolio directory built with React + Vite. Features a dark theme inspired by code editors with smooth animations and a responsive design.

## Features

- Clean, modern UI with dark theme
- Real-time search filtering
- Responsive grid layout
- Easy to extend - just add developers to the data file
- Optimized for GitHub Pages deployment

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to see your app.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Adding New Developers

To add a new developer to the directory:

1. Open `src/data/coders.js`
2. Add a new object to the `coders` array:

```javascript
{
  id: 9, // Use next available ID
  name: "Your Name",
  cohort: "2024 Spring",
  technologies: ["React", "Node.js"], // Optional, for future use
  portfolioUrl: "https://yourportfolio.com"
}
```

3. Save the file - the changes will appear automatically!

## Deployment to GitHub Pages

### First Time Setup

1. Update `vite.config.js` with your repository name:

```javascript
export default defineConfig({
  plugins: [react()],
  base: "/your-repo-name/", // Change this!
})
```

2. In your repository settings:
   - Go to Settings > Pages
   - Set Source to "GitHub Actions" or "gh-pages branch"

### Deploy

```bash
npm run deploy
```

This will build your app and push it to the `gh-pages` branch.

Your site will be live at: `https://yourusername.github.io/your-repo-name/`

## Project Structure

```
src/
├── components/
│   ├── Header.jsx        # Top navigation
│   ├── Footer.jsx        # Bottom footer
│   ├── CoderCard.jsx     # Individual developer card
│   └── SearchBar.jsx     # Search input
├── pages/
│   └── Home.jsx          # Main page component
├── data/
│   └── coders.js         # Developer data
├── styles/
│   └── main.css          # Global styles
├── App.jsx               # Root component
└── main.jsx              # Entry point
```

## Tech Stack

- React 18
- Vite 7
- Plain CSS (no framework needed!)
- GitHub Pages compatible

## Contributing

To contribute new developer profiles:

1. Fork this repository
2. Add your profile to `src/data/coders.js`
3. Submit a pull request

Please ensure your portfolio link is valid and publicly accessible!

## License

MIT
```

```tsx file="app/page.tsx" isDeleted="true"
...deleted...

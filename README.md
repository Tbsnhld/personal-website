# Portfolio Website

A personal portfolio website showcasing my experiences, projects, and creative work. Built to provide a unique online presence with an artistic design approach.

## About

This portfolio website was designed with inspiration from the **Jugendstil** (Art Nouveau) movement of the late 1890s, combined with modern design principles. The concept creates a "wall of myself" experience, presenting my work in an engaging, visually distinctive manner.

The website was initially prototyped in **[Figma](https://www.figma.com/)** and implemented using **[Svelte](https://svelte.dev/)** with **[SvelteKit](https://kit.svelte.dev/)**.

## Technologies

- **Framework**: [SvelteKit](https://kit.svelte.dev/) - The official application framework for Svelte
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- **Build Tool**: [Vite](https://vitejs.dev/) - Next generation frontend tooling

## Project Structure

```
personal-website/
├── src/
│   ├── lib/           # Reusable components and utilities
│   ├── routes/        # Page routes and application pages
│   ├── app.html      # Base HTML template
│   └── app.d.ts      # TypeScript declarations
├── static/           # Static assets (images, fonts, etc.)
├── package.json      # Project configuration and dependencies
└── README.md         # This file
```

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/tobinhld/personal-website.git
   ```

2. Navigate to the project directory:
   ```sh
   cd personal-website
   ```

3. Install dependencies:
   ```sh
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

## Development

Start a development server with hot module replacement:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Open [http://localhost:5173](http://localhost:5173) to view the application in your browser.

## Building for Production

To create a production-ready build:

```sh
npm run build
```

This will:
- Build the Svelte components
- Generate optimized production assets
- Package the application for deployment

### Preview Production Build

You can preview the production build locally:

```sh
npm run preview
```

## Deployment

This project uses [@sveltejs/adapter-auto](https://kit.svelte.dev/docs/adapters#universal-adapters), which automatically selects the appropriate adapter based on your deployment target.

### Deploying to Popular Platforms

- **Vercel**: Install `@sveltejs/adapter-vercel` and follow [SvelteKit Vercel deployment guide](https://kit.svelte.dev/docs/adapters#supported-environmentvercel)
- **Netlify**: Install `@sveltejs/adapter-netlify` and follow [SvelteKit Netlify deployment guide](https://kit.svelte.dev/docs/adapters#supported-environmentsnetlify)
- **GitHub Pages**: Install `@sveltejs/adapter-static` for static site generation
- **Node Server**: Install `@sveltejs/adapter-node` for traditional server deployment

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |
| `npm run check` | Run type checking with SvelteKit |
| `npm run lint` | Check code formatting with Prettier |
| `npm run format` | Format code with Prettier |

## Code Quality

This project uses:

- **[Prettier](https://prettier.io/)** for consistent code formatting
- **[Svelte Check](https://kit.svelte.dev/docs/code-quality#svelte-check)** for type checking
- **[TypeScript](https://www.typescriptlang.org/)** for type safety

Run formatting:
```sh
npm run format
```

Run linting:
```sh
npm run lint
```

Run type checking:
```sh
npm run check
```

## License

This project is personal portfolio code. Feel free to explore the codebase to understand the implementation, but please respect the content and design as my personal work.

## Contact

For any questions or feedback about this portfolio, feel free to reach out.

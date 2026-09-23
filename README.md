# Chukwuemelie Jason Obumse - Portfolio

A responsive portfolio website showcasing my work as a Full Stack Software Engineer. Built with Next.js, TypeScript and Tailwind CSS, it ships as two complete design experiences over the same content.

## About This Project

This is my personal portfolio website that highlights my experience in building scalable software solutions. The site includes:

- **About Section**: Overview of my background and expertise
- **Core Skills**: Technologies and tools I specialize in
- **Impact Stories**: In-depth stories of my most significant work
- **Other Projects**: Personal projects and side work
- **Blog Posts**: Technical articles and insights on software engineering

## Tech Stack

- **Framework**: Next.js 14 (Pages Router, statically generated pages plus middleware)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4, with per-experience design tokens in `src/experiences/*/*.css`
- **Theming**: next-themes (light, dark and system)
- **Fonts** (self-hosted via `next/font/google`):
  - Roast: Bricolage Grotesque (display), Newsreader (body), JetBrains Mono (labels)
  - Monograph: Archivo (display and text), IBM Plex Mono (labels)
- **Images**: `next/image`, with `sharp` for production optimisation

## Experiences

The site has two experiences that render the same content (shared stories live in `src/content/`):

- **Roast** (default): a warm, editorial design themed around coffee roasting.
- **Monograph**: a Swiss, grid-based design with a toggleable 12-column overlay (press `G`).

Both serve the same public URLs, `/` and `/impact-stories`. The middleware in `src/middleware.ts` rewrites each request to `src/pages/experiences/<experience>/…` and picks the experience in this order:

1. The `?experience=roast` or `?experience=monograph` query parameter. This is how shareable links work, e.g. `/impact-stories?experience=monograph#wynk-limited`.
2. The `portfolio-experience` cookie, which the middleware sets for a year whenever the query parameter is used.
3. Roast, when neither is present.

The floating switcher on every page moves between experiences while keeping the current page and anchor. Each experience has its own light and dark palettes. The theme choice (light, dark or system) is shared by both and stored under the `portfolio-theme` key in local storage.

## Prerequisites

Make sure you have Node.js (version 20.9 or higher, required by `sharp`) installed on your system.

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/jason-ezenwa/chukwuemelie-jason-ezenwa-portfolio.git
   cd chukwuemelie-jason-ezenwa-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## Deployment

This project is optimized for deployment on Vercel, but can be deployed to any platform that supports Next.js applications.

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
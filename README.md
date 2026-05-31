# Kent AI Portfolio

A modern, responsive portfolio website showcasing Kent's work as an AI/ML Engineer. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Smooth Scrolling**: Navigate between sections with smooth scroll animations
- **Modern UI**: Built with shadcn/ui components and Radix UI primitives
- **Performance**: Optimized with Next.js 15 and Turbopack

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI
- **Icons**: Lucide React
- **Deployment**: Optimized for Vercel

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/ui/      # Reusable UI components
└── lib/
    ├── data.ts         # Portfolio data
    └── utils.ts        # Utility functions
```

## Customization

The portfolio content is managed in `src/lib/data.ts`. Update the following data structures:

- **Personal Info**: Name, title, and bio
- **Skills**: Technical skills and technologies
- **Projects**: Featured projects with descriptions and tech stacks
- **Education**: Educational background
- **Experience**: Professional experience
- **Social Links**: Contact information and social media

## Build and Deploy

To build for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

The site is optimized for deployment on [Vercel](https://vercel.com) with automatic builds and CDN distribution.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Modern UI components
- [TypeScript](https://www.typescriptlang.org/docs/) - Type-safe JavaScript

# Alveoli Official Website

The official launching website for Alveoli - a platform that correlates market signals with engineering telemetry to auto-generate ranked backlogs, sprint plans, and work routing.

## About

This repository contains the source code for the Alveoli official website at [alveoli.app](https://alveoli.app). The website showcases the Alveoli platform's capabilities and features through an interactive, modern web experience.

## Website Features

- **Hero Section**: Interactive introduction to the Alveoli platform
- **Principles Section**: Core values and development philosophy
- **Work Section**: Showcase of platform capabilities and features
- **Signals Section**: Timeline of platform milestones and achievements
- **Smooth Animations**: Enhanced user experience with GSAP and Framer Motion
- **Responsive Design**: Optimized for all device sizes

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animations**: Framer Motion, GSAP
- **Forms**: React Hook Form with Zod validation
- **Package Manager**: pnpm

## Development Setup

### Prerequisites

- Node.js 18 or later
- pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/alveoli-engineering/alveoli-website.git
cd alveoli-website
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Project Structure

```
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   └── ...             # Feature components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets
└── styles/             # Global styles
```

## Development

This website uses modern React patterns with TypeScript for type safety. Components are built using Radix UI primitives and styled with Tailwind CSS for a cohesive design system.

Key architectural decisions:
- Server-side rendering with Next.js App Router
- Component composition with Radix UI
- Smooth animations with Framer Motion and GSAP
- Responsive design with Tailwind CSS
- Type-safe development with TypeScript

## Deployment

The website is deployed at [alveoli.app](https://alveoli.app) and automatically updates from the main branch.

## License

Copyright (c) 2026 Alveoli Engineering Team. All rights reserved.

This software and associated documentation files (the "Software") are proprietary and confidential to Alveoli Engineering Team. No part of this Software may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of Alveoli Engineering Team, except in the case of brief quotations embodied in critical reviews and certain other noncommercial uses permitted by copyright law.

For permission requests, contact: legal@alveoli.app

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
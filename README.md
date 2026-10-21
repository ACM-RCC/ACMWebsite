# RCC ACM Website

A modern, responsive website for the **Riverside City College (RCC) ACM Chapter** built with Next.js, TypeScript, TailwindCSS, and Framer Motion.

![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.13-06B6D4?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23.12-FF0055?style=flat-square&logo=framer)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat-square&logo=react)

## Project Vision

Create an engaging, accessible hub for RCC computer science students that:

- **Builds Community** among CS students and ACM members
- **Showcases Events** including meetings, workshops, and competitions
- **Provides Resources** for learning, career development, and academic success
- **Highlights Achievements** of students and the club
- **Attracts New Members** to grow the ACM chapter

## Features

- **Modern Design** - Clean, professional interface with smooth animations and custom color palette
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **High Performance** - Fast loading with Next.js 15 optimization and Turbopack
- **Accessible** - WCAG 2.1 AA compliant design with proper semantic HTML
- **Type Safe** - Full TypeScript integration with strict mode for robust development
- **Smooth Animations** - Enhanced UX with Framer Motion and custom CSS animations
- **Dark Mode Support** - Automatic theme detection with manual toggle
- **Component Library** - Reusable UI components with variant support
- **Modern Typography** - Geist font family for optimal readability

## Quick Start

### Prerequisites

- **Node.js** 20.0+ (Alpine Linux base)
- **npm** 9.0+
- **Git** for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/rcc-acm/website.git
   cd rcc-acm-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Development Commands

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production with Turbopack
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint with flat configuration
npm run lint:fix     # Fix ESLint issues automatically
npm run type-check   # Run TypeScript compiler checks

# Deployment
./deploy.sh          # Deploy to Google Cloud Run
```

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles with custom CSS variables
│   ├── layout.tsx      # Root layout with Geist fonts
│   ├── page.tsx        # Home page with hero and features
│   └── page-*.tsx      # Alternative page implementations
├── components/         # React components
│   ├── ui/            # Reusable UI components (Button, Card)
│   ├── layout/        # Layout components (Header with animations)
│   └── features/      # Feature-specific components (EventCard)
├── hooks/             # Custom React hooks (empty, ready for use)
├── lib/               # Utility libraries and configurations
│   └── utils.ts       # Utility functions (cn, formatDate, debounce)
├── types/             # TypeScript type definitions
│   └── index.ts       # Comprehensive type definitions
└── utils/             # Helper functions (empty, ready for use)

logs/                  # Project documentation
├── releases/          # Release notes and changelogs
├── bugs/             # Bug tracking and resolution
└── future/           # Roadmap and feature planning

docs/                 # Development documentation
├── onboarding/       # New contributor guides
├── development/      # Development workflows
└── deployment/       # Deployment procedures

# Configuration Files
├── next.config.ts     # Next.js configuration with standalone output
├── tsconfig.json      # TypeScript configuration with strict mode
├── eslint.config.mjs  # ESLint flat configuration
├── postcss.config.mjs # PostCSS configuration for Tailwind
├── Dockerfile         # Multi-stage Docker build for production
├── cloudbuild.yaml    # Google Cloud Build configuration
└── deploy.sh          # Deployment script for Google Cloud Run
```

## Current Implementation Status

### ✅ Completed Features

- **Project Foundation** - Complete Next.js 15 setup with TypeScript and TailwindCSS
- **Component Library** - Button and Card components with Framer Motion animations
- **Header Component** - Responsive navigation with dark mode toggle and mobile menu
- **Home Page** - Hero section with features grid and contact information
- **Styling System** - Custom CSS variables with 2025-inspired color palette
- **Deployment Setup** - Google Cloud Run configuration with Docker and CI/CD
- **Type Definitions** - Comprehensive TypeScript types for all planned features
- **Documentation** - Complete project documentation and contribution guides

### 🚧 In Progress

- **Event Management** - Event card component structure in place
- **Resource System** - Type definitions ready for implementation
- **User Management** - User types and interfaces defined

### 📋 Planned Features

- **Event Calendar** - Interactive event scheduling and registration
- **Member Directory** - Student profiles and project showcases
- **Resource Library** - Learning materials and documentation
- **Blog System** - News and announcements
- **Contact Forms** - Member registration and inquiry handling

## Technology Stack

### Core Technologies

- **[Next.js 15.5.2](https://nextjs.org/)** - React framework with App Router and Turbopack
- **[React 19.1.0](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript 5.9.2](https://www.typescriptlang.org/)** - Type-safe JavaScript with strict mode
- **[TailwindCSS 4.1.13](https://tailwindcss.com/)** - Utility-first CSS framework with PostCSS
- **[Framer Motion 12.23.12](https://www.framer.com/motion/)** - Production-ready animation library

### Development Tools

- **[ESLint 9.35.0](https://eslint.org/)** - Code linting and quality with flat config
- **[TypeScript ESLint](https://typescript-eslint.io/)** - TypeScript-specific linting rules
- **[Next.js ESLint Config](https://nextjs.org/docs/app/building-your-application/configuring/eslint)** - Optimized for Next.js

### Utilities

- **[clsx 2.1.1](https://github.com/lukeed/clsx)** - Conditional className utility
- **[class-variance-authority 0.7.1](https://cva.style/)** - Component variant styling
- **[Lucide React 0.542.0](https://lucide.dev/)** - Beautiful, customizable icons
- **[Geist Fonts](https://vercel.com/font)** - Modern typography from Vercel

## Documentation

### For New Contributors

- [Getting Started Guide](docs/onboarding/getting-started.md)
- [Contributing Guidelines](docs/onboarding/contributing.md)
- [Design System](docs/development/design-system.md)
- [Code Style Guide](docs/development/coding-standards.md)

### For Developers

- [Architecture Overview](docs/development/architecture.md)
- [Testing Strategy](docs/development/testing.md)
- [Deployment Guide](docs/deployment/production.md)
- [API Documentation](docs/development/api.md)

### Project Management

- [Project Roadmap](logs/future/roadmap.md)
- [Bug Reports](logs/bugs/current-bugs.md)
- [Release Notes](logs/releases/)
- [Feature Requests](logs/future/feature-requests.md)

## Contributing

We welcome contributions from all RCC students and ACM members! Here's how to get involved:

### Ways to Contribute

- **Report Bugs** - Help us identify and fix issues
- **Suggest Features** - Share ideas for new functionality
- **Improve Documentation** - Help make our docs better
- **Design Contributions** - UI/UX improvements and assets
- **Code Contributions** - Bug fixes and feature implementation

### Contribution Process

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Make** your changes following our coding standards
4. **Test** your changes thoroughly
5. **Commit** with clear, descriptive messages
6. **Push** to your fork (`git push origin feature/amazing-feature`)
7. **Submit** a Pull Request

### Code Quality Standards

- All code must pass ESLint and TypeScript checks
- Include appropriate tests for new features
- Update documentation for significant changes
- Use semantic commit messages

## Deployment

### Production Environment

- **Platform**: Google Cloud Run
- **Domain**: [rccacm.com](https://rccacm.com)
- **Container**: Docker with Node.js 20 Alpine
- **SSL**: Automatic HTTPS via Google Cloud
- **CDN**: Google Cloud CDN
- **Region**: us-central1
- **Scaling**: 0-10 instances (auto-scaling)

### Environment Variables

```bash
# Add to .env.local for local development
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="RCC ACM"
NODE_ENV=production
PORT=3000
HOSTNAME=0.0.0.0
```

## Performance

### Lighthouse Scores (Target)

- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

### Core Web Vitals

- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)

## Release Cycle

We follow semantic versioning (MAJOR.MINOR.PATCH):

- **Major (1.0.0)** - Breaking changes or significant new features
- **Minor (0.1.0)** - New features and enhancements
- **Patch (0.0.1)** - Bug fixes and small improvements

### Current Status

- **Latest Release**: [v0.1.0](logs/releases/v0.1.0.md) - Project Foundation
- **Current Version**: 0.1.0
- **Next Release**: v1.0.0 - Core Website (Planned: Q1 2025)

## Learning Resources

### For New Developers

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/introduction/)

### Best Practices

- [React Best Practices](https://react.dev/learn)
- [TypeScript Best Practices](https://typescript-eslint.io/rules/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Performance Optimization](https://web.dev/performance/)

## Troubleshooting

### Common Issues

**Build Errors**

```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
```

**TypeScript Errors**

```bash
# Run type checking
npm run type-check
```

**Linting Issues**

```bash
# Auto-fix common issues
npm run lint:fix
npm run format
```

## Support & Contact

### RCC ACM Chapter

- **Email**: acm@rcc.edu
- **Discord**: [RCC ACM Server](https://discord.gg/fM2HbsJyBG)
- **Instagram**: [@rcc.acm](https://www.instagram.com/rcc.acm/)
- **GitHub**: [github.com/rcc-acm](https://github.com/rcc-acm)
- **Meetings**: Every Thursday 12:50-1:50 PM in A-210 Simulation Lab

### Development Team

- **Issues**: [GitHub Issues](https://github.com/rcc-acm/website/issues)
- **Discussions**: [GitHub Discussions](https://github.com/rcc-acm/website/discussions)
- **Project Board**: [GitHub Projects](https://github.com/rcc-acm/website/projects)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **RCC Computer Science Department** for supporting student initiatives
- **ACM (Association for Computing Machinery)** for the organizational framework
- **Open Source Community** for the amazing tools and libraries
- **Contributors** who help make this project better

---

<p align="center">
  <strong>Built with love by the RCC ACM Development Team</strong><br>
  <em>Empowering the next generation of computer scientists</em>
</p>

---

### Quick Links

- [Live Site](https://rccacm.com)
- [Documentation](docs/)
- [Report Bug](https://github.com/rcc-acm/website/issues/new?template=bug_report.md)
- [Request Feature](https://github.com/rcc-acm/website/issues/new?template=feature_request.md)
- [Project Roadmap](logs/future/roadmap.md)

**Last Updated**: September 14, 2025

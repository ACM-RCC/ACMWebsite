# RCC ACM Website

A modern, responsive website for the **Riverside City College (RCC) ACM Chapter** built with Next.js, TypeScript, TailwindCSS, and Framer Motion.

![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-06B6D4?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23.12-FF0055?style=flat-square&logo=framer)

## Project Vision

Create an engaging, accessible hub for RCC computer science students that:

- **Builds Community** among CS students and ACM members
- **Showcases Events** including meetings, workshops, and competitions
- **Provides Resources** for learning, career development, and academic success
- **Highlights Achievements** of students and the club
- **Attracts New Members** to grow the ACM chapter

## Features

- **Modern Design** - Clean, professional interface with smooth animations
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **High Performance** - Fast loading with Next.js optimization
- **Accessible** - WCAG 2.1 AA compliant design
- **Type Safe** - Full TypeScript integration for robust development
- **Smooth Animations** - Enhanced UX with Framer Motion

## Quick Start

### Prerequisites

- **Node.js** 18.0+
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
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically
npm run type-check   # Run TypeScript compiler checks
```

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   ├── layout/        # Layout components (Header, Footer)
│   └── features/      # Feature-specific components
├── hooks/             # Custom React hooks
├── lib/               # Utility libraries and configurations
├── types/             # TypeScript type definitions
└── utils/             # Helper functions

logs/                  # Project documentation
├── releases/          # Release notes and changelogs
├── bugs/             # Bug tracking and resolution
└── future/           # Roadmap and feature planning

docs/                 # Development documentation
├── onboarding/       # New contributor guides
├── development/      # Development workflows
└── deployment/       # Deployment procedures
```

## Technology Stack

### Core Technologies

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting and quality
- **[lint-staged](https://github.com/okonet/lint-staged)** - Pre-commit linting

### Utilities

- **[clsx](https://github.com/lukeed/clsx)** - Conditional className utility
- **[class-variance-authority](https://cva.style/)** - Component variant styling
- **[Lucide React](https://lucide.dev/)** - Beautiful, customizable icons

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

- **Platform**: Vercel (recommended for Next.js)
- **Domain**: [rcc-acm.vercel.app](https://rcc-acm.vercel.app) (placeholder)
- **SSL**: Automatic HTTPS
- **CDN**: Global edge network

### Environment Variables

```bash
# Add to .env.local for local development
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="RCC ACM"
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
- **Next Release**: v1.0.0 - Core Website (Planned: January 2025)

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

- **Email**: acm@rcc.edu (placeholder)
- **Discord**: [RCC ACM Server](https://discord.gg/rcc-acm) (placeholder)
- **GitHub**: [github.com/rcc-acm](https://github.com/rcc-acm) (placeholder)

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

- [Live Site](https://rcc-acm.vercel.app) (placeholder)
- [Documentation](docs/)
- [Report Bug](https://github.com/rcc-acm/website/issues/new?template=bug_report.md)
- [Request Feature](https://github.com/rcc-acm/website/issues/new?template=feature_request.md)
- [Project Roadmap](logs/future/roadmap.md)

**Last Updated**: December 2024

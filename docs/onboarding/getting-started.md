# Getting Started - RCC ACM Website

Welcome to the RCC ACM website development team! This guide will help you get set up and start contributing to our project.

## Overview

The RCC ACM website is built using modern web technologies to create an engaging platform for our computer science community. Whether you're a beginner or experienced developer, this guide will help you understand our project and start contributing effectively.

## Prerequisites

### Required Knowledge

- **Basic Programming**: Understanding of programming concepts
- **Web Fundamentals**: HTML, CSS, and JavaScript basics
- **Git & GitHub**: Version control basics (we'll help you learn!)

### Recommended Knowledge (Optional)

- React fundamentals
- TypeScript basics
- Command line usage
- Modern JavaScript (ES6+)

_Don't worry if you don't have all of these! We're here to help you learn._

## Development Environment Setup

### Step 1: Install Required Software

#### Node.js and npm

1. Visit [nodejs.org](https://nodejs.org/)
2. Download and install the LTS version (18.0+)
3. Verify installation:
   ```bash
   node --version  # Should show v18.0.0 or higher
   npm --version   # Should show 9.0.0 or higher
   ```

#### Git

1. Visit [git-scm.com](https://git-scm.com/)
2. Download and install Git
3. Configure your identity:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

#### Code Editor (Recommended: VS Code)

1. Download [Visual Studio Code](https://code.visualstudio.com/)
2. Install recommended extensions (see below)

### Step 2: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/rcc-acm/website.git
cd rcc-acm-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Step 3: Verify Setup

Open your browser and navigate to [http://localhost:3000](http://localhost:3000). You should see the RCC ACM website running locally!

## VS Code Extensions

Install these extensions for the best development experience:

### Required Extensions

- **ES7+ React/Redux/React-Native snippets** - Code snippets
- **ESLint** - Code linting and error detection
- **Tailwind CSS IntelliSense** - Tailwind CSS autocomplete

### Recommended Extensions

- **Auto Rename Tag** - Automatically rename paired HTML/JSX tags
- **Bracket Pair Colorizer** - Color matching brackets
- **GitLens** - Enhanced Git capabilities
- **Path Intellisense** - Autocomplete for file paths
- **Thunder Client** - API testing (for future API development)

## Learning Path

### Week 1: Fundamentals

1. **Project Structure**: Explore the codebase and understand the organization
2. **Technologies**: Learn about Next.js, React, and TypeScript basics
3. **Tools**: Get familiar with our development tools (ESLint, Git)
4. **First Task**: Make a simple text change and create your first pull request

### Week 2-3: Component Development

1. **React Components**: Learn to create and modify React components
2. **Styling**: Understand TailwindCSS utility classes
3. **TypeScript**: Learn basic TypeScript syntax and type definitions
4. **Task**: Create a simple UI component (button, card, etc.)

### Week 4+: Advanced Features

1. **Animations**: Learn Framer Motion for smooth animations
2. **Routing**: Understand Next.js routing and navigation
3. **State Management**: Learn React hooks and state management
4. **Task**: Implement a complete feature or page

## Your First Contribution

### 1. Find a Good First Issue

Look for issues labeled:

- `good first issue` - Perfect for beginners
- `documentation` - Help improve our docs
- `ui/ux` - Design and styling improvements
- `help wanted` - We need assistance with these

### 2. Fork and Branch

```bash
# Fork the repository on GitHub first, then:
git clone https://github.com/YOUR_USERNAME/rcc-acm-website.git
cd rcc-acm-website

# Create a new branch for your feature
git checkout -b your-feature-name
```

### 3. Make Your Changes

- Follow our [coding standards](../development/coding-standards.md)
- Test your changes locally
- Ensure all linting passes: `npm run lint`

### 4. Submit a Pull Request

```bash
# Commit your changes
git add .
git commit -m "feat: add your feature description"

# Push to your fork
git push origin your-feature-name

# Create a pull request on GitHub
```

## Essential Resources

### Project Documentation

- [README.md](../../README.md) - Project overview and setup
- [Coding Standards](../development/coding-standards.md) - Code style guide
- [Architecture](../development/architecture.md) - Project structure
- [Contributing](contributing.md) - Detailed contribution guidelines

### Learning Resources

- **Next.js**: [Next.js Tutorial](https://nextjs.org/learn)
- **React**: [React Documentation](https://react.dev/learn)
- **TypeScript**: [TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- **TailwindCSS**: [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- **Framer Motion**: [Framer Motion Introduction](https://www.framer.com/motion/introduction/)

### Practice Resources

- **Interactive Learning**: [React Tutorial](https://react.dev/learn/tutorial-tic-tac-toe)
- **TypeScript Practice**: [TypeScript Exercises](https://typescript-exercises.github.io/)
- **CSS Practice**: [Flexbox Froggy](https://flexboxfroggy.com/), [CSS Grid Garden](https://cssgridgarden.com/)

## Getting Help

### Communication Channels

- **Discord**: Join our RCC ACM Discord server for real-time help
- **GitHub Issues**: Ask questions by creating an issue
- **Office Hours**: Weekly coding sessions (check club calendar)
- **Pair Programming**: Request a buddy for collaborative coding

### Common Questions

**Q: I'm new to programming. Can I still contribute?**
A: Absolutely! We have tasks for all skill levels, and our team is here to help you learn.

**Q: What if I break something?**
A: Don't worry! That's what Git is for. We can always revert changes, and breaking things is part of learning.

**Q: How much time should I commit?**
A: Any amount helps! Even 1-2 hours per week makes a difference. Quality over quantity.

**Q: I don't know React/TypeScript. Should I learn them first?**
A: You can learn as you go! Start with simple tasks and gradually take on more complex ones.

## Setting Expectations

### What We Provide

- **Mentorship**: Experienced developers to guide you
- **Learning Resources**: Curated tutorials and documentation
- **Safe Environment**: Supportive community for asking questions
- **Real Experience**: Work on a live project used by real users

### What We Expect

- **Commitment**: Show up regularly and communicate when you can't
- **Learning Attitude**: Be open to feedback and new technologies
- **Team Player**: Help others and collaborate effectively
- **Quality Focus**: Strive for clean, maintainable code

## Development Workflow

### Daily Workflow

1. **Pull Latest Changes**: `git pull origin main`
2. **Check Issues**: Look at GitHub issues and project board
3. **Pick a Task**: Choose something appropriate for your skill level
4. **Create Branch**: `git checkout -b feature/your-task`
5. **Code & Test**: Develop and test your changes
6. **Submit PR**: Create a pull request for review

### Weekly Activities

- **Team Meetings**: Discuss progress and plan upcoming work
- **Code Reviews**: Review and learn from others' code
- **Learning Sessions**: Explore new technologies and best practices
- **Retrospectives**: Reflect on what's working and what can improve

## Growth Path

### Beginner (0-2 months)

- Understand project structure
- Make simple text/content changes
- Fix minor bugs and issues
- Learn basic React and TypeScript

### Intermediate (2-6 months)

- Create new components
- Implement small features
- Write unit tests
- Review others' code

### Advanced (6+ months)

- Lead feature development
- Mentor new contributors
- Contribute to architecture decisions
- Help with project planning

## Welcome to the Team!

You're now ready to start your journey with the RCC ACM website development team! Remember:

- **Ask Questions**: No question is too small or silly
- **Take Your Time**: Learning takes time, and that's okay
- **Have Fun**: Enjoy the process of building something meaningful
- **Make Friends**: Connect with fellow developers and CS students

## Need Help?

If you get stuck or have questions:

1. **Check Documentation**: Look through our docs first
2. **Search Issues**: See if someone else has had the same problem
3. **Ask on Discord**: Get real-time help from the team
4. **Create an Issue**: Document your question for others to learn from
5. **Schedule Office Hours**: Get one-on-one help

---

**Ready to start coding?** Head over to [GitHub Issues](https://github.com/rcc-acm/website/issues) and find your first task!

_Last updated: December 2024_

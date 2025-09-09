# Contributing to RCC ACM Website

Thank you for your interest in contributing to the RCC ACM website! This guide provides detailed information on how to contribute effectively and maintain high-quality code standards.

## Code of Conduct

We are committed to providing a welcoming and inclusive environment for all contributors. Please read and follow our code of conduct:

### Our Standards

- **Be Respectful**: Treat all contributors with respect and kindness
- **Be Inclusive**: Welcome contributors of all skill levels and backgrounds
- **Be Collaborative**: Share knowledge and help others learn
- **Be Constructive**: Provide helpful feedback and suggestions
- **Be Patient**: Remember that everyone is learning and growing

### Unacceptable Behavior

- Harassment, discrimination, or hostile behavior
- Inappropriate comments or personal attacks
- Spam or self-promotion unrelated to the project
- Sharing private information without permission

## Getting Started

### Prerequisites

Before contributing, ensure you have:

- Read the [Getting Started Guide](getting-started.md)
- Set up your development environment
- Forked the repository and cloned it locally
- Understood our project structure and technologies

### Finding Something to Work On

1. **Check GitHub Issues**: Look for issues labeled:
   - `good first issue` - Perfect for new contributors
   - `help wanted` - We need assistance with these
   - `bug` - Bug fixes needed
   - `enhancement` - New features or improvements
   - `documentation` - Documentation improvements

2. **Check the Project Board**: See our current priorities and roadmap

3. **Propose New Ideas**: Create an issue to discuss new features or improvements

## Contribution Types

### Bug Reports

Help us improve by reporting bugs you encounter:

1. **Search existing issues** to avoid duplicates
2. **Use the bug report template** when creating new issues
3. **Provide detailed information**:
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots or error messages
   - Environment details (browser, OS, etc.)

### Feature Requests

Suggest new features or improvements:

1. **Check the roadmap** to see if it's already planned
2. **Use the feature request template**
3. **Explain the problem** your feature would solve
4. **Describe your proposed solution**
5. **Consider alternative solutions**

### Documentation

Help improve our documentation:

- Fix typos or unclear instructions
- Add missing information
- Create tutorials or guides
- Improve code comments
- Update outdated information

### Code Contributions

Contribute code improvements:

- Bug fixes
- New features
- Performance improvements
- Accessibility enhancements
- Code refactoring

## Development Workflow

### 1. Fork and Clone

```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/rcc-acm-website.git
cd rcc-acm-website

# Add the original repository as upstream
git remote add upstream https://github.com/rcc-acm/website.git
```

### 2. Create a Branch

```bash
# Create and switch to a new branch
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/bug-description
```

### Branch Naming Convention

- `feature/feature-name` - New features
- `fix/bug-description` - Bug fixes
- `docs/documentation-update` - Documentation changes
- `refactor/code-improvement` - Code refactoring
- `style/ui-improvements` - UI/styling changes

### 3. Make Your Changes

#### Development Guidelines

- **Follow our coding standards** (see [Coding Standards](../development/coding-standards.md))
- **Write clear, descriptive commit messages**
- **Test your changes thoroughly**
- **Keep changes focused and atomic**
- **Update documentation when necessary**

#### Code Quality Checks

Before committing, run:

```bash
# Lint your code
npm run lint

# Fix linting issues
npm run lint:fix


# Type check
npm run type-check

# Test the build
npm run build
```

### 4. Commit Your Changes

#### Commit Message Format

We use conventional commits for clear, semantic commit messages:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:**

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, semicolons, etc.)
- `refactor` - Code refactoring
- `test` - Adding or updating tests
- `chore` - Maintenance tasks

**Examples:**

```bash
git commit -m "feat(header): add responsive navigation menu"
git commit -m "fix(button): resolve hover state color issue"
git commit -m "docs(readme): update installation instructions"
```

### 5. Push and Create Pull Request

```bash
# Push your changes to your fork
git push origin your-branch-name
```

Then create a pull request on GitHub.

## Pull Request Guidelines

### PR Title and Description

- **Use descriptive titles** that explain what the PR does
- **Fill out the PR template** completely
- **Reference related issues** using `Closes #123` or `Fixes #123`
- **Include screenshots** for UI changes
- **Explain the reasoning** behind your changes

### PR Checklist

Before submitting, ensure:

- [ ] Code follows our style guidelines
- [ ] All tests pass
- [ ] No console errors or warnings
- [ ] Documentation is updated if needed
- [ ] Commit messages follow our conventions
- [ ] PR description is clear and complete
- [ ] Screenshots included for UI changes

### Review Process

1. **Automated Checks**: Our CI will run linting, tests, and builds
2. **Code Review**: Team members will review your code
3. **Feedback**: Address any requested changes
4. **Approval**: Once approved, maintainers will merge your PR

### Responding to Feedback

- **Be open to suggestions** and constructive criticism
- **Ask questions** if feedback is unclear
- **Make requested changes** promptly
- **Thank reviewers** for their time and feedback
- **Learn from the process** to improve future contributions

## UI/UX Contributions

### Design Guidelines

- **Follow our design system** and existing patterns
- **Ensure accessibility** (WCAG 2.1 AA compliance)
- **Test on multiple devices** and screen sizes
- **Use our color palette** and typography system
- **Include hover and focus states** for interactive elements

### Before Implementing UI Changes

1. **Discuss with the team** for significant changes
2. **Create mockups or wireframes** when helpful
3. **Consider accessibility** from the start
4. **Test with real content** not just placeholder text

## Testing Guidelines

### Testing Your Changes

- **Manual Testing**: Test your changes in different browsers
- **Responsive Testing**: Check mobile, tablet, and desktop views
- **Accessibility Testing**: Use screen readers and keyboard navigation
- **Performance Testing**: Ensure changes don't impact load times

### Writing Tests (Future)

As the project grows, we'll add automated testing:

- Unit tests for components
- Integration tests for features
- End-to-end tests for critical user flows

## Learning and Development

### Skill Development

We encourage continuous learning:

- **Pair Programming**: Work with experienced contributors
- **Code Reviews**: Learn from feedback on your PRs
- **Documentation**: Improve your understanding by writing docs
- **Tutorials**: Create learning materials for others

### Knowledge Sharing

- **Internal Presentations**: Share what you've learned
- **Blog Posts**: Write about your development experience
- **Mentoring**: Help newer contributors get started
- **Discussion Forums**: Participate in technical discussions

## Recognition

### Contributor Levels

- **Contributor**: Made meaningful contributions to the project
- **Regular Contributor**: Consistent contributions over time
- **Core Contributor**: Significant ongoing contributions and leadership
- **Maintainer**: Trusted with merge access and project decisions

### Recognition Opportunities

- **Contributor Wall**: Featured on our website
- **GitHub Profile**: Contributions visible on your GitHub profile
- **Portfolio Addition**: Real project experience for your resume
- **Recommendation Letters**: For outstanding contributors
- **Conference Opportunities**: Present your work at events

## What Not to Contribute

### Avoid These Types of Contributions

- **Incomplete work** without discussion
- **Breaking changes** without prior approval
- **Unrelated dependencies** without justification
- **Large refactors** without team consensus
- **Personal preferences** that conflict with established patterns

### Code We Won't Accept

- Code that doesn't follow our standards
- Untested breaking changes
- Features without clear purpose
- Security vulnerabilities
- Copyright violations

## Development Tools and Setup

### Required Tools

- **Node.js** 18+ and npm
- **Git** for version control
- **VS Code** (recommended) with our extension pack
- **Modern browser** with dev tools

### Helpful Tools

- **GitHub CLI** for easier PR management
- **ESLint extension** for real-time code quality
- **Git GUI** like GitHub Desktop for visual Git management

## Getting Help

### Where to Ask Questions

1. **GitHub Issues**: For bug reports and feature requests
2. **GitHub Discussions**: For questions and general discussion
3. **Discord**: For real-time chat and quick questions
4. **Code Reviews**: Ask questions directly on pull requests
5. **Office Hours**: Weekly sessions for in-person help

### What Information to Include

When asking for help, provide:

- **Clear description** of the problem
- **Steps you've already tried**
- **Error messages** or screenshots
- **Your environment** (OS, browser, Node version)
- **Relevant code snippets**

## Contribution Goals

### Individual Goals

- Learn new technologies and best practices
- Build real-world development experience
- Contribute to something meaningful for RCC students
- Develop teamwork and communication skills
- Create portfolio-worthy projects

### Project Goals

- Build a high-quality website for RCC ACM
- Create a positive learning environment
- Maintain clean, maintainable code
- Foster an inclusive contributor community
- Document knowledge for future contributors

## Progress Tracking

### How We Track Contributions

- **GitHub Activity**: Commits, PRs, issues, and reviews
- **Project Board**: Feature completion and progress
- **Team Meetings**: Regular check-ins and planning
- **Documentation Updates**: Knowledge sharing and improvements

### Setting Personal Goals

Consider setting goals like:

- Contribute to X features per month
- Learn Y new technologies
- Help Z new contributors get started
- Improve code quality metrics
- Complete specific learning objectives

---

## Thank You!

Your contributions make a real difference in the RCC computer science community. Whether you're fixing typos, implementing features, or helping other contributors, you're building something valuable that will serve students for years to come.

### Questions?

Don't hesitate to reach out if you have questions about contributing. We're here to help you succeed!

---

_This contributing guide is a living document. Please suggest improvements to make it more helpful for future contributors._

**Last Updated**: December 2024

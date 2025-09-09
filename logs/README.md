# RCC ACM Website - Project Logs

This directory contains comprehensive documentation and tracking for the RCC ACM website project. It's designed to help new contributors understand the project structure, track progress, and contribute effectively.

## Directory Structure

### releases/

Contains detailed release notes following semantic versioning (v1.0.0, v1.1.0, etc.)

- **Purpose**: Track all features, bug fixes, and changes for each release
- **Format**: One markdown file per release (e.g., `v1.0.0.md`)
- **Convention**: Use semantic versioning (MAJOR.MINOR.PATCH)

### bugs/

Tracks known issues, bugs, and their resolutions

- **Current Issues**: `current-bugs.md` - Active bugs that need attention
- **Resolved Issues**: `resolved-bugs.md` - Historical bug fixes for reference
- **Bug Templates**: `bug-template.md` - Standardized format for reporting bugs

### future/

Planning and roadmap documentation

- **Roadmap**: `roadmap.md` - High-level project direction and major milestones
- **Feature Requests**: `feature-requests.md` - Community and team feature suggestions
- **Technical Debt**: `technical-debt.md` - Code improvements and refactoring needs
- **Ideas**: `ideas.md` - Brainstorming and conceptual features

## How to Use This System

### For New Contributors

1. Start with `logs/README.md` (this file) to understand the system
2. Review the latest release notes in `releases/` to understand current state
3. Check `future/roadmap.md` to see project direction
4. Look at `bugs/current-bugs.md` to find issues you can help solve

### For Maintainers

1. Update release notes for every version bump
2. Move resolved bugs from current to resolved
3. Update roadmap quarterly or after major releases
4. Review and organize feature requests regularly

## Documentation Standards

- Use clear, descriptive headers
- Include dates for all entries
- Use consistent markdown formatting
- Link to relevant GitHub issues/PRs when applicable
- Keep entries concise but informative

## Quick Links

- [Latest Release](releases/)
- [Current Bugs](bugs/current-bugs.md)
- [Project Roadmap](future/roadmap.md)
- [How to Contribute](../docs/onboarding/contributing.md)

---

_Last updated: $(date)_
_Maintained by: RCC ACM Development Team_

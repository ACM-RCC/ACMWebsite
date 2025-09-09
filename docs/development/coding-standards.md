# Coding Standards - RCC ACM Website

This document outlines the coding standards and best practices for the RCC ACM website project. Following these standards ensures code consistency, maintainability, and readability across the entire codebase.

## General Principles

### Code Quality Goals

- **Readability**: Code should be self-documenting and easy to understand
- **Consistency**: Follow established patterns and conventions
- **Maintainability**: Write code that's easy to modify and extend
- **Performance**: Optimize for user experience and load times
- **Accessibility**: Ensure inclusive design for all users

### Development Philosophy

- **TypeScript First**: Leverage strong typing for better developer experience
- **Component-Driven**: Build reusable, composable UI components
- **Mobile First**: Design for mobile devices first, then scale up
- **Progressive Enhancement**: Start with basic functionality, add enhancements
- **Test-Driven**: Write tests to ensure code reliability

## File and Folder Naming

### File Naming Conventions

- **Components**: `kebab-case.tsx` (e.g., `event-card.tsx`)
- **Pages**: `kebab-case.tsx` (e.g., `about-us.tsx`)
- **Utilities**: `kebab-case.ts` (e.g., `format-date.ts`)
- **Types**: `kebab-case.ts` or `index.ts` (e.g., `user-types.ts`)
- **Constants**: `UPPER_SNAKE_CASE.ts` (e.g., `API_ENDPOINTS.ts`)

### Folder Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   ├── layout/          # Layout components
│   └── features/        # Feature-specific components
├── hooks/               # Custom React hooks
├── lib/                 # Utility libraries
├── types/               # TypeScript definitions
└── utils/               # Helper functions
```

## Component Standards

### Component Structure

````tsx
'use client'; // Only if needed for client-side features

import * as React from 'react';
import { motion } from 'framer-motion';
import { SomeIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { ComponentProps } from '@/types';

/**
 * Component props interface with JSDoc
 */
export interface MyComponentProps extends ComponentProps {
  title: string;
  description?: string;
  onClick?: () => void;
}

/**
 * MyComponent - Brief description of what this component does
 *
 * @example
 * ```tsx
 * <MyComponent title="Hello" description="World" />
 * ```
 */
export function MyComponent({
  title,
  description,
  onClick,
  className,
  children,
}: MyComponentProps) {
  return (
    <div className={cn('base-styles', className)}>
      {/* Component content */}
    </div>
  );
}
````

### Component Naming

- **PascalCase** for component names: `EventCard`, `UserProfile`
- **Descriptive names** that clearly indicate purpose
- **Avoid abbreviations** unless widely understood
- **Use prefixes** for related components: `EventCard`, `EventList`, `EventForm`

### Props and State

- **Interface definitions** for all props with JSDoc comments
- **Optional props** should have sensible defaults
- **Use discriminated unions** for variant props
- **Destructure props** in function parameters
- **Group related state** using `useReducer` when appropriate

## Styling Standards

### Tailwind CSS Best Practices

- **Utility-first approach**: Use Tailwind utilities instead of custom CSS
- **Component variants**: Use `class-variance-authority` for component variants
- **Responsive design**: Mobile-first breakpoints (`sm:`, `md:`, `lg:`, `xl:`)
- **Dark mode support**: Use `dark:` prefix for dark mode styles
- **Consistent spacing**: Use Tailwind's spacing scale (4, 8, 12, 16, etc.)

### Class Organization

```tsx
// ✅ Good: Organized by category
className={cn(
  // Layout
  'flex items-center justify-between',
  // Sizing
  'w-full h-12 px-4 py-2',
  // Styling
  'bg-primary text-primary-foreground rounded-md',
  // States
  'hover:bg-primary/90 focus:outline-none focus:ring-2',
  // Responsive
  'sm:w-auto md:px-6',
  // Dark mode
  'dark:bg-primary-dark dark:text-primary-foreground-dark',
  className
)}
```

### CSS Custom Properties

Use CSS custom properties for values that might change:

```css
:root {
  --header-height: 4rem;
  --sidebar-width: 16rem;
  --content-max-width: 1200px;
}
```

## TypeScript Standards

### Type Definitions

- **Explicit interfaces** for all component props
- **Union types** for limited string values
- **Generic types** for reusable components
- **Utility types** to transform existing types
- **Export types** from a central location

### Type Naming

- **PascalCase** for interfaces and types: `UserProfile`, `EventType`
- **Descriptive names** that indicate purpose
- **Props suffix** for component props: `ButtonProps`, `CardProps`
- **Type suffix** for type unions: `EventType`, `UserRole`

### Type Safety

```tsx
// ✅ Good: Strict typing
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'member' | 'guest';
}

// ✅ Good: Generic components
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

// ❌ Avoid: Any types
const user: any = getData(); // Avoid this
```

## Animation Standards

### Framer Motion Best Practices

- **Subtle animations**: Enhance UX without being distracting
- **Consistent timing**: Use consistent duration and easing
- **Performance first**: Use `transform` and `opacity` for smooth animations
- **Reduced motion**: Respect user preferences for reduced motion
- **Progressive enhancement**: Ensure functionality without animations

### Animation Patterns

```tsx
// ✅ Good: Consistent animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// ✅ Good: Stagger animations for lists
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
```

## Documentation Standards

### JSDoc Comments

- **All public functions** and components should have JSDoc comments
- **Include examples** for complex components
- **Document parameters** and return values
- **Use proper JSDoc tags**: `@param`, `@returns`, `@example`

### README Files

- **Component README** for complex feature directories
- **Setup instructions** for new developers
- **Examples and usage** for component libraries
- **Architecture decisions** for complex implementations

### Code Comments

```tsx
// ✅ Good: Explain why, not what
// Calculate the registration progress percentage for the progress bar
const registrationProgress = capacity ? (registeredCount / capacity) * 100 : 0;

// ✅ Good: Explain complex logic
// Use a ref to detect clicks outside the mobile menu to close it
const mobileMenuRef = useRef<HTMLDivElement>(null);

// ❌ Avoid: Obvious comments
const name = user.name; // Get the user's name
```

## Testing Standards

### Testing Philosophy

- **Test behavior, not implementation**: Focus on what the component does
- **User-centric tests**: Test from the user's perspective
- **Accessibility testing**: Ensure components work with screen readers
- **Visual regression testing**: Catch unintended UI changes

### Test Structure

```tsx
describe('EventCard', () => {
  it('displays event information correctly', () => {
    // Arrange
    const mockEvent = createMockEvent();

    // Act
    render(<EventCard event={mockEvent} />);

    // Assert
    expect(screen.getByText(mockEvent.title)).toBeInTheDocument();
  });
});
```

## Performance Standards

### Bundle Optimization

- **Dynamic imports** for large components or libraries
- **Image optimization** using Next.js Image component
- **Lazy loading** for below-the-fold content
- **Tree shaking**: Only import what you need

### React Performance

```tsx
// ✅ Good: Memoize expensive calculations
const expensiveValue = useMemo(() => computeExpensiveValue(data), [data]);

// ✅ Good: Memoize components that receive objects
const MemoizedComponent = memo(
  Component,
  (prevProps, nextProps) => prevProps.user.id === nextProps.user.id
);

// ✅ Good: Stable callback references
const handleClick = useCallback(() => {
  onItemClick(item.id);
}, [item.id, onItemClick]);
```

## Accessibility Standards

### WCAG 2.1 AA Compliance

- **Semantic HTML**: Use proper HTML elements for their intended purpose
- **Keyboard navigation**: Ensure all interactive elements are keyboard accessible
- **Screen reader support**: Proper ARIA labels and descriptions
- **Color contrast**: Minimum 4.5:1 ratio for normal text
- **Focus management**: Clear focus indicators and logical tab order

### Accessibility Patterns

```tsx
// ✅ Good: Proper ARIA attributes
<button
  aria-label="Close modal"
  aria-expanded={isOpen}
  onClick={onClose}
>
  <X aria-hidden="true" />
</button>

// ✅ Good: Semantic HTML
<main>
  <h1>Page Title</h1>
  <section aria-labelledby="events-heading">
    <h2 id="events-heading">Upcoming Events</h2>
    {/* Event list */}
  </section>
</main>
```

## Security Standards

### Data Handling

- **Input validation**: Validate all user inputs
- **XSS prevention**: Sanitize user-generated content
- **CSRF protection**: Use proper CSRF tokens for forms
- **Secure API calls**: Authenticate and authorize API requests

### Environment Variables

```tsx
// ✅ Good: Type-safe environment variables
const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL!,
  isDevelopment: process.env.NODE_ENV === 'development',
};

// ❌ Avoid: Exposing sensitive data
// Don't use NEXT_PUBLIC_ for sensitive API keys
```

## Import/Export Standards

### Import Organization

```tsx
// 1. React and React-related imports
import * as React from 'react';
import { useState, useEffect } from 'react';

// 2. Third-party library imports
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

// 3. Internal UI component imports
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// 4. Feature component imports
import { EventCard } from '@/components/features/event-card';

// 5. Utility and type imports
import { cn, formatDate } from '@/lib/utils';
import type { Event, User } from '@/types';
```

### Export Patterns

```tsx
// ✅ Good: Named exports for components
export function EventCard({ event }: EventCardProps) {
  // Component implementation
}

// ✅ Good: Re-exports for public APIs
export { Button, type ButtonProps } from './button';
export { Card, CardHeader, CardContent } from './card';

// ✅ Good: Default export for pages
export default function HomePage() {
  // Page implementation
}
```

## Git Standards

### Commit Messages

Follow conventional commits format:

```bash
feat(button): add loading state with spinner animation
fix(header): resolve mobile menu z-index issue
docs(readme): update setup instructions
style(card): improve responsive spacing
refactor(utils): extract date formatting logic
test(event-card): add registration button tests
```

### Branch Naming

- `feature/feature-name` - New features
- `fix/bug-description` - Bug fixes
- `docs/documentation-update` - Documentation
- `refactor/code-improvement` - Code refactoring

## Error Handling

### Error Boundaries

```tsx
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}
```

### Async Error Handling

```tsx
// ✅ Good: Proper error handling
const [error, setError] = useState<string | null>(null);
const [loading, setLoading] = useState(false);

const fetchData = async () => {
  try {
    setLoading(true);
    setError(null);
    const data = await api.getData();
    setData(data);
  } catch (err) {
    setError(err instanceof Error ? err.message : 'An error occurred');
  } finally {
    setLoading(false);
  }
};
```

## Code Quality Tools

### ESLint Configuration

Our ESLint setup enforces:

- TypeScript best practices
- React hooks rules
- Import/export ordering
- Accessibility checks

### Pre-commit Hooks

- **Lint staged files**: ESLint with auto-fix
- **Type checking**: TypeScript compilation
- **Test execution**: Run relevant tests

## Review Checklist

Before submitting a pull request, ensure:

### Code Quality

- [ ] All TypeScript types are properly defined
- [ ] Components are properly documented with JSDoc
- [ ] Error handling is implemented appropriately
- [ ] Performance considerations are addressed

### Styling

- [ ] Responsive design works on all screen sizes
- [ ] Dark mode styles are implemented
- [ ] Tailwind classes are organized and efficient
- [ ] Animations enhance rather than distract

### Accessibility

- [ ] Semantic HTML is used appropriately
- [ ] ARIA attributes are correctly implemented
- [ ] Keyboard navigation works properly
- [ ] Color contrast meets WCAG standards

### Testing

- [ ] Component behavior is tested
- [ ] Edge cases are covered
- [ ] User interactions are tested
- [ ] Accessibility features are verified

---

These coding standards are living guidelines that should evolve with the project and team. Regular review and updates ensure they remain relevant and helpful for maintaining high code quality.

**Last Updated**: December 2024

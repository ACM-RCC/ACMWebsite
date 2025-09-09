import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion, type HTMLMotionProps } from 'framer-motion';

import { cn } from '@/lib/utils';

/**
 * Button component variants using class-variance-authority
 * This allows for type-safe variant props and consistent styling
 */
const buttonVariants = cva(
  // Base styles applied to all button variants
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

/**
 * Button component props interface
 * Combines HTML button props with our variant props and motion props
 */
export interface ButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'children'>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  asChild?: boolean;
  loading?: boolean;
  loadingText?: string;
}

/**
 * Motion variants for button animations
 * These create subtle hover and tap animations
 */
const buttonMotionVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

/**
 * Modern Button component with TypeScript, Tailwind CSS, and Framer Motion
 *
 * Features:
 * - Multiple variants (default, destructive, outline, secondary, ghost, link)
 * - Multiple sizes (default, sm, lg, icon)
 * - Loading state with customizable text
 * - Smooth hover and tap animations
 * - Full accessibility support
 * - Type-safe props
 *
 * @example
 * ```tsx
 * <Button variant="outline" size="lg" onClick={handleClick}>
 *   Click me
 * </Button>
 *
 * <Button loading loadingText="Saving...">
 *   Save Changes
 * </Button>
 * ```
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      loading = false,
      loadingText = 'Loading...',
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        variants={buttonMotionVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
        {...props}
      >
        {loading ? (
          <>
            {/* Loading spinner */}
            <motion.div
              className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
            {loadingText}
          </>
        ) : (
          children
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };

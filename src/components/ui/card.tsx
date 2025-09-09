import * as React from 'react';
import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

/**
 * Card component variants for different styles and interactions
 */
const cardVariants = cva(
  'rounded-xl border bg-card text-card-foreground shadow',
  {
    variants: {
      variant: {
        default: 'border-border',
        elevated: 'border-border shadow-lg',
        outlined: 'border-2 border-border shadow-none',
        filled: 'bg-muted border-transparent',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        default: 'p-6',
        lg: 'p-8',
      },
      interactive: {
        none: '',
        hover:
          'transition-all duration-200 hover:shadow-md hover:border-border/80',
        press:
          'transition-all duration-200 hover:shadow-md hover:border-border/80 active:scale-[0.98]',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'default',
      interactive: 'none',
    },
  }
);

/**
 * Motion variants for card animations
 */
const cardMotionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  hover: { y: -4, transition: { duration: 0.2 } },
  tap: { scale: 0.98 },
};

/**
 * Card component props
 */
export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  children?: React.ReactNode;
  animated?: boolean;
  clickable?: boolean;
}

/**
 * Card - A flexible container component with multiple variants and animation support
 *
 * @example
 * ```tsx
 * <Card variant="elevated" animated>
 *   <CardHeader>
 *     <CardTitle>Event Title</CardTitle>
 *     <CardDescription>Event description here</CardDescription>
 *   </CardHeader>
 *   <CardContent>
 *     Card content goes here
 *   </CardContent>
 * </Card>
 * ```
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant,
      padding,
      interactive,
      animated = false,
      clickable = false,
      children,
      ...props
    },
    ref
  ) => {
    const commonClassName = cn(
      cardVariants({ variant, padding, interactive, className }),
      clickable && 'cursor-pointer'
    );

    if (animated) {
      return (
        <motion.div
          ref={ref}
          className={commonClassName}
          variants={cardMotionVariants}
          initial="initial"
          animate="animate"
          whileHover={clickable ? 'hover' : undefined}
          whileTap={clickable ? 'tap' : undefined}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={props.onClick}
          style={props.style}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div ref={ref} className={commonClassName} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

/**
 * CardHeader - Header section of a card
 */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));

CardHeader.displayName = 'CardHeader';

/**
 * CardTitle - Title text for a card header
 */
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('leading-none font-semibold tracking-tight', className)}
    {...props}
  />
));

CardTitle.displayName = 'CardTitle';

/**
 * CardDescription - Description text for a card header
 */
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-muted-foreground text-sm', className)}
    {...props}
  />
));

CardDescription.displayName = 'CardDescription';

/**
 * CardContent - Main content area of a card
 */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));

CardContent.displayName = 'CardContent';

/**
 * CardFooter - Footer section of a card
 */
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));

CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  cardVariants,
};

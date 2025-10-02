import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Simple card component variants
 */
const cardVariants = cva("rounded-lg border bg-card text-card-foreground", {
	variants: {
		variant: {
			default: "border-neutral-200",
			elevated: "border-neutral-200 shadow-sm",
			outlined: "border-2 border-neutral-300",
		},
		padding: {
			none: "p-0",
			sm: "p-4",
			default: "p-6",
			lg: "p-8",
		},
	},
	defaultVariants: {
		variant: "default",
		padding: "default",
	},
});

/**
 * Card component props
 */
export interface CardProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof cardVariants> {
	children?: React.ReactNode;
}

/**
 * Simple Card component without animations
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
	({ className, variant, padding, children, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(cardVariants({ variant, padding, className }))}
				{...props}>
				{children}
			</div>
		);
	}
);

Card.displayName = "Card";

/**
 * CardHeader - Header section of a card
 */
const CardHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex flex-col space-y-1.5 p-6", className)}
		{...props}
	/>
));

CardHeader.displayName = "CardHeader";

/**
 * CardTitle - Title text for a card header
 */
const CardTitle = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h3
		ref={ref}
		className={cn("leading-none font-semibold tracking-tight", className)}
		{...props}
	/>
));

CardTitle.displayName = "CardTitle";

/**
 * CardDescription - Description text for a card header
 */
const CardDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p
		ref={ref}
		className={cn("text-muted-foreground text-sm", className)}
		{...props}
	/>
));

CardDescription.displayName = "CardDescription";

/**
 * CardContent - Main content area of a card
 */
const CardContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));

CardContent.displayName = "CardContent";

/**
 * CardFooter - Footer section of a card
 */
const CardFooter = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn("flex items-center p-6 pt-0", className)}
		{...props}
	/>
));

CardFooter.displayName = "CardFooter";

export {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	cardVariants,
};

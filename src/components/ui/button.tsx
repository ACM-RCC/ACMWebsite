import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Simple button component variants
 */
const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default: "bg-neutral-900 text-neutral-50 hover:bg-neutral-800",
				outline:
					"border border-neutral-300 bg-transparent hover:bg-neutral-100 text-neutral-900",
				secondary: "bg-neutral-200 text-neutral-900 hover:bg-neutral-300",
				ghost: "hover:bg-neutral-100 text-neutral-900",
				link: "text-neutral-600 underline-offset-4 hover:underline hover:text-neutral-900",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-8 px-3 text-xs",
				lg: "h-12 px-8 text-base",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

/**
 * Button component props interface
 */
export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	loading?: boolean;
	loadingText?: string;
}

/**
 * Simple Button component without animations
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant,
			size,
			loading = false,
			loadingText = "Loading...",
			disabled,
			children,
			...props
		},
		ref
	) => {
		return (
			<button
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				disabled={disabled || loading}
				{...props}>
				{loading ? (
					<>
						{/* Simple loading indicator */}
						<div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
						{loadingText}
					</>
				) : (
					children
				)}
			</button>
		);
	}
);

Button.displayName = "Button";

export { Button, buttonVariants };

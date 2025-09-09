'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, Users, Calendar, BookOpen, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/types';

/**
 * Navigation items for the header
 */
const navigationItems: NavItem[] = [
  {
    title: 'About',
    href: '#about',
    description: 'Learn about RCC ACM and our mission',
    icon: Users,
  },
  {
    title: 'Events',
    href: '#events',
    description: 'Upcoming meetings, workshops, and competitions',
    icon: Calendar,
  },
  {
    title: 'Resources',
    href: '#resources',
    description: 'Learning materials and helpful links',
    icon: BookOpen,
  },
  {
    title: 'Contact',
    href: '#contact',
    description: 'Get in touch with our club',
    icon: Mail,
  },
];

/**
 * Animation variants for mobile menu
 */
const mobileMenuVariants = {
  closed: {
    opacity: 0,
    height: 0,
  },
  open: {
    opacity: 1,
    height: 'auto',
  },
};

/**
 * Animation variants for mobile menu items
 */
const mobileMenuItemVariants = {
  closed: { opacity: 0, x: -20 },
  open: {
    opacity: 1,
    x: 0,
  },
};

/**
 * Header component props
 */
export interface HeaderProps {
  className?: string;
}

/**
 * Header - Modern navigation header with responsive design and smooth animations
 *
 * Features:
 * - Responsive design with mobile hamburger menu
 * - Smooth animations with Framer Motion
 * - Accessible navigation with keyboard support
 * - Modern glassmorphism design
 * - Type-safe navigation items
 *
 * @example
 * ```tsx
 * <Header />
 * ```
 */
export function Header({ className }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Close mobile menu when clicking outside
  const mobileMenuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    // In a real app, you'd listen to Next.js router events here
    // const handleRouteChange = () => setIsMobileMenuOpen(false);
    // router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      // router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        'border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur',
        className
      )}
    >
      <div className="container flex h-16 max-w-screen-2xl items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[var(--pastel-blue)] to-[var(--pastel-lavender)] rounded-xl flex items-center justify-center shadow-sm">
              <Code className="w-6 h-6 text-neutral-700" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-neutral-800">RCC ACM</span>
              <span className="text-xs text-neutral-500 -mt-1">Computer Science</span>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex md:items-center md:space-x-1">
          {navigationItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Link
                href={item.href}
                className={cn(
                  'group hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50'
                )}
              >
                {item.icon && (
                  <item.icon className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                )}
                {item.title}
              </Link>
            </motion.div>
          ))}

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="ml-4"
          >
            <Button asChild size="sm" className="btn btn-primary">
              <Link href="#contact">Join Us</Link>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="ml-auto md:hidden" ref={mobileMenuRef}>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="bg-background/95 border-border/40 absolute top-full right-0 w-screen border-b backdrop-blur-lg"
              >
                <nav className="container py-6">
                  <div className="flex flex-col space-y-4">
                    {navigationItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        custom={index}
                        variants={mobileMenuItemVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        transition={{
                          delay: index * 0.1,
                          duration: 0.3,
                          ease: 'easeOut',
                        }}
                      >
                        <Link
                          href={item.href}
                          className="hover:bg-accent flex items-center space-x-3 rounded-lg p-3 transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.icon && (
                            <item.icon className="text-muted-foreground h-5 w-5" />
                          )}
                          <div>
                            <div className="font-medium">{item.title}</div>
                            {item.description && (
                              <div className="text-muted-foreground text-sm">
                                {item.description}
                              </div>
                            )}
                          </div>
                        </Link>
                      </motion.div>
                    ))}

                    {/* Mobile CTA */}
                    <motion.div
                      custom={navigationItems.length}
                      variants={mobileMenuItemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      transition={{
                        delay: navigationItems.length * 0.1,
                        duration: 0.3,
                        ease: 'easeOut',
                      }}
                      className="pt-4"
                    >
                      <Button asChild className="w-full btn btn-primary">
                        <Link
                          href="#contact"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Join Our Club
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

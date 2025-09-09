'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn, formatDate } from '@/lib/utils';
import type { Event } from '@/types';

/**
 * Props for the EventCard component
 */
export interface EventCardProps {
  event: Event;
  className?: string;
  onRegister?: (eventId: string) => void;
  onViewDetails?: (eventId: string) => void;
}

/**
 * Animation variants for the event card
 */
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
  hover: {
    y: -8,
  },
};

/**
 * EventCard - A feature-rich card component for displaying ACM events
 *
 * Features:
 * - Displays event information with proper typography
 * - Shows registration status and capacity
 * - Animated interactions with Framer Motion
 * - Responsive design with TailwindCSS
 * - Type-safe props with TypeScript
 * - Accessible design patterns
 *
 * @example
 * ```tsx
 * <EventCard
 *   event={event}
 *   onRegister={(id) => handleRegister(id)}
 *   onViewDetails={(id) => router.push(`/events/${id}`)}
 * />
 * ```
 */
export function EventCard({
  event,
  className,
  onRegister,
  onViewDetails,
}: EventCardProps) {
  const {
    id,
    title,
    description,
    date,
    location,
    type,
    capacity,
    registeredCount,
    isRegistrationOpen,
    organizer,
    imageUrl,
  } = event;

  // Calculate registration progress
  const registrationProgress = capacity
    ? (registeredCount / capacity) * 100
    : 0;

  const isRegistrationFull = capacity ? registeredCount >= capacity : false;

  // Format the event date
  const formattedDate = formatDate(date, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = formatDate(date, {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  // Get event type styling
  const getEventTypeStyle = (eventType: string) => {
    const styles = {
      meeting: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      workshop:
        'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      competition: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      social:
        'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      'guest-speaker':
        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      'project-showcase':
        'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
    };
    return styles[eventType as keyof typeof styles] || styles.meeting;
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn('w-full max-w-sm', className)}
    >
      <Card
        variant="elevated"
        className="h-full transition-shadow duration-300 hover:shadow-xl"
        clickable
        onClick={() => onViewDetails?.(id)}
      >
        {/* Event Image */}
        {imageUrl && (
          <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

            {/* Event Type Badge */}
            <div className="absolute top-4 left-4">
              <span
                className={cn(
                  'rounded-full px-3 py-1 text-xs font-medium',
                  getEventTypeStyle(type)
                )}
              >
                {type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </span>
            </div>
          </div>
        )}

        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <CardTitle className="line-clamp-2 text-xl">{title}</CardTitle>
            {!imageUrl && (
              <span
                className={cn(
                  'ml-2 rounded-full px-2 py-1 text-xs font-medium',
                  getEventTypeStyle(type)
                )}
              >
                {type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </span>
            )}
          </div>
          <CardDescription className="line-clamp-3">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Event Details */}
          <div className="space-y-3">
            {/* Date and Time */}
            <div className="text-muted-foreground flex items-center gap-3 text-sm">
              <Calendar className="h-4 w-4 flex-shrink-0" />
              <div>
                <div className="font-medium">{formattedDate}</div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {formattedTime}
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="text-muted-foreground flex items-center gap-3 text-sm">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span>{location}</span>
            </div>

            {/* Registration Info */}
            {capacity && (
              <div className="text-muted-foreground flex items-center gap-3 text-sm">
                <Users className="h-4 w-4 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span>
                      {registeredCount}/{capacity} registered
                    </span>
                    <span className="text-xs">
                      {Math.round(registrationProgress)}%
                    </span>
                  </div>
                  {/* Progress Bar */}
                  <div className="bg-muted mt-1 h-2 w-full rounded-full">
                    <motion.div
                      className="bg-primary h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${registrationProgress}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Organizer */}
            <div className="text-muted-foreground text-xs">
              Organized by <span className="font-medium">{organizer}</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex gap-2 pt-0">
          {/* Register Button */}
          <Button
            variant={isRegistrationFull ? 'outline' : 'default'}
            size="sm"
            className="flex-1"
            disabled={!isRegistrationOpen || isRegistrationFull}
            onClick={e => {
              e.stopPropagation();
              onRegister?.(id);
            }}
          >
            {isRegistrationFull
              ? 'Full'
              : !isRegistrationOpen
                ? 'Closed'
                : 'Register'}
          </Button>

          {/* View Details Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={e => {
              e.stopPropagation();
              onViewDetails?.(id);
            }}
          >
            Details
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

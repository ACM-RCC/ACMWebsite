/**
 * Common types used throughout the RCC ACM website
 */

// Base entity interface that other entities can extend
export interface BaseEntity {
	id: string;
	createdAt: Date;
	updatedAt: Date;
}

// User related types
export interface User extends BaseEntity {
	name: string;
	email: string;
	studentId?: string;
	major?: string;
	graduationYear?: number;
	role: UserRole;
	profileImage?: string;
	bio?: string;
	githubUsername?: string;
	linkedinUrl?: string;
}

export type UserRole = "member" | "officer" | "admin" | "alumni";

// Event related types
export interface Event extends BaseEntity {
	title: string;
	description: string;
	date: Date;
	location: string;
	type: EventType;
	capacity?: number;
	registeredCount: number;
	isRegistrationOpen: boolean;
	organizer: string;
	tags: string[];
	imageUrl?: string;
}

export type EventType =
	| "meeting"
	| "workshop"
	| "competition"
	| "social"
	| "guest-speaker"
	| "project-showcase";

// Project related types
export interface Project extends BaseEntity {
	title: string;
	description: string;
	technologies: string[];
	githubUrl?: string;
	liveUrl?: string;
	imageUrl?: string;
	contributors: User[];
	status: ProjectStatus;
	difficulty: ProjectDifficulty;
}

export type ProjectStatus =
	| "planning"
	| "in-progress"
	| "completed"
	| "archived";
export type ProjectDifficulty = "beginner" | "intermediate" | "advanced";

// Navigation and UI types
export interface NavItem {
	title: string;
	href: string;
	description?: string;
	icon?: React.ComponentType<{ className?: string }>;
	external?: boolean;
}

export interface SidebarNavItem extends NavItem {
	items?: SidebarNavItem[];
}

// API Response types
export interface ApiResponse<T = unknown> {
	data: T;
	message: string;
	success: boolean;
	timestamp: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
	pagination: {
		page: number;
		limit: number;
		total: number;
		totalPages: number;
	};
}

// Form and validation types
export interface FormFieldError {
	field: string;
	message: string;
}

export interface FormState {
	isSubmitting: boolean;
	errors: FormFieldError[];
	success: boolean;
}

// Component prop types
export interface ComponentProps {
	className?: string;
	children?: React.ReactNode;
}

// Animation variants for Framer Motion
export interface AnimationVariants {
	initial: Record<string, unknown>;
	animate: Record<string, unknown>;
	exit?: Record<string, unknown>;
}

// Contact and communication types
export interface ContactMessage extends BaseEntity {
	name: string;
	email: string;
	subject: string;
	message: string;
	status: MessageStatus;
	response?: string;
}

export type MessageStatus = "new" | "read" | "replied" | "archived";

// Resource and learning materials
export interface Resource extends BaseEntity {
	title: string;
	description: string;
	type: ResourceType;
	url: string;
	author?: string;
	difficulty: ResourceDifficulty;
	topics: string[];
	isExternal: boolean;
}

export type ResourceType =
	| "tutorial"
	| "documentation"
	| "video"
	| "book"
	| "course"
	| "article"
	| "tool";

export type ResourceDifficulty =
	| "beginner"
	| "intermediate"
	| "advanced"
	| "all";

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Configuration types
export interface SiteConfig {
	name: string;
	description: string;
	url: string;
	ogImage: string;
	links: {
		discord?: string;
		github?: string;
		instagram?: string;
		email?: string;
	};
}

// Error handling types
export interface ErrorBoundaryState {
	hasError: boolean;
	error?: Error;
	errorInfo?: React.ErrorInfo;
}

// Countdown and meeting types
export interface CountdownTime {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

export interface ClubMeeting {
	nextMeetingDate: Date;
	isActive: boolean;
	timeUntilNext: CountdownTime;
	status: MeetingStatus;
}

export type MeetingStatus = "upcoming" | "in_progress" | "ended";

export interface CountdownConfig {
	meetingDay: number; // 0-6, where 4 = Thursday
	meetingHour: number; // 24-hour format
	meetingMinute: number;
	durationMinutes: number;
	timezone: string;
}

// Theme and styling types
export type Theme = "light" | "dark" | "system";

export interface ThemeConfig {
	defaultTheme: Theme;
	enableSystem: boolean;
	disableTransitionOnChange: boolean;
}

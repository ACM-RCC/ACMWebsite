"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { EventModal } from "./EventModal";

interface EventModalContextType {
	isOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
}

const EventModalContext = createContext<EventModalContextType | undefined>(
	undefined
);

export function useEventModal() {
	const context = useContext(EventModalContext);
	if (context === undefined) {
		throw new Error("useEventModal must be used within an EventModalProvider");
	}
	return context;
}

interface EventModalProviderProps {
	children: ReactNode;
}

export function EventModalProvider({ children }: EventModalProviderProps) {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	return (
		<EventModalContext.Provider value={{ isOpen, openModal, closeModal }}>
			{children}
			<EventModal isOpen={isOpen} onClose={closeModal} />
		</EventModalContext.Provider>
	);
}

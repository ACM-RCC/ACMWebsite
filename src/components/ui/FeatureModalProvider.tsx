"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { FeatureModal } from "./FeatureModal";

interface Feature {
	icon: React.ComponentType<{ className?: string }>;
	title: string;
	description: string;
	detailedDescription: string;
	benefits: string[];
	activities: string[];
}

interface FeatureModalContextType {
	isModalOpen: boolean;
	selectedFeature: Feature | null;
	openModal: (feature: Feature) => void;
	closeModal: () => void;
}

const FeatureModalContext = createContext<FeatureModalContextType | undefined>(
	undefined
);

export function useFeatureModal() {
	const context = useContext(FeatureModalContext);
	if (context === undefined) {
		throw new Error(
			"useFeatureModal must be used within a FeatureModalProvider"
		);
	}
	return context;
}

export function FeatureModalProvider({ children }: { children: ReactNode }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

	const openModal = (feature: Feature) => {
		setSelectedFeature(feature);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedFeature(null);
	};

	return (
		<FeatureModalContext.Provider
			value={{ isModalOpen, selectedFeature, openModal, closeModal }}>
			{children}
			{selectedFeature && (
				<FeatureModal
					isOpen={isModalOpen}
					onClose={closeModal}
					feature={selectedFeature}
				/>
			)}
		</FeatureModalContext.Provider>
	);
}

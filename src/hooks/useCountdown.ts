import { CountdownTime } from "@/types";
import { useCallback, useEffect, useState } from "react";

export function useCountdown(targetDate: Date | null): CountdownTime {
	const [timeLeft, setTimeLeft] = useState<CountdownTime>({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	const calculateTimeLeft = useCallback((target: Date): CountdownTime => {
		const now = new Date();
		const difference = target.getTime() - now.getTime();

		if (difference <= 0) {
			return { days: 0, hours: 0, minutes: 0, seconds: 0 };
		}

		const days = Math.floor(difference / (1000 * 60 * 60 * 24));
		const hours = Math.floor(
			(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((difference % (1000 * 60)) / 1000);

		return { days, hours, minutes, seconds };
	}, []);

	useEffect(() => {
		if (!targetDate) {
			setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
			return;
		}

		const updateCountdown = () => {
			setTimeLeft(calculateTimeLeft(targetDate));
		};

		// Update immediately
		updateCountdown();

		// Update every second
		const interval = setInterval(updateCountdown, 1000);

		return () => clearInterval(interval);
	}, [targetDate, calculateTimeLeft]);

	return timeLeft;
}

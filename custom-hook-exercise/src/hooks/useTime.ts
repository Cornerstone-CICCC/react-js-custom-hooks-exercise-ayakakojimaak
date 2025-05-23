function useTime<T extends string>(key: T): string {
	const date = new Date();

	if (key === "day") {
		const days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];
		return days[date.getDay()];
	}

	if (key === "hour") {
		return String(date.getHours());
	}

	return "";
}
export default useTime;

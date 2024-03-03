export function isGrandPrixThisWeek(gpDate: Date) {
	const today = new Date();
	const todayDate = today.getDate();
	const todayDay = today.getDay();

	// get first date of week
	const firstDayOfWeek = new Date(today.setDate(todayDate - todayDay));

	// get last date of week
	const lastDayOfWeek = new Date(firstDayOfWeek);
	lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);

	// if date is equal or within the first and last dates of the week
	return gpDate >= firstDayOfWeek && gpDate <= lastDayOfWeek;
}

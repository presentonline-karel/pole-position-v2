export function getDateGp(gpDate: string) {

  // Day GP
  let dateGrandPrix = new Date(gpDate);

  // 2 days earlier, start of GP weekend
  let startGpWeekend = new Date(dateGrandPrix);
  startGpWeekend.setDate(startGpWeekend.getDate() - 2); // Substract 2 days from dateGrandPrix

  // Add 0 in front of day in case day < 10
  function returnDayWithZero(day: number) {
    if(day < 10) {
      return(`0${day}`);
    } else {
      return(day);
    }
  }

  let startDay = returnDayWithZero(startGpWeekend.getDate());
  let endDay = returnDayWithZero(dateGrandPrix.getDate());
  let startMonth = startGpWeekend.toLocaleString('en-GB', { month: 'long' }).slice(0, 3);
  let endMonth = dateGrandPrix.toLocaleString('en-GB', { month: 'long' }).slice(0, 3);

  // Return right date
  if(dateGrandPrix.getMonth() !== startGpWeekend.getMonth()) {
    return(`${startDay}-${endDay} ${startMonth} - ${endMonth}`);
  } else {
    return(`${startDay}-${endDay} ${startMonth}`);
  }
}
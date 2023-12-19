export const getWeekNumber = (date: Date) => {
   const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
   const pastDaysOfTear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;

   return Math.ceil((pastDaysOfTear + firstDayOfYear.getDay() + 1) / 7)
}
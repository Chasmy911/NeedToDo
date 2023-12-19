import createDate from "./createDate";

interface CreateMonthParams{
   locale?: string;
   date?: Date;

}

export const createMonth = (params?:CreateMonthParams) => {
   const locale = params?.locale ?? 'default';
   const date = params?.date ?? new Date();
   const d = createDate({date, locale});
   const {month: monthName, year, monthNumber, monthIndex} = d
   const getDay = (dayNumber: number) => 
      createDate({date: new Date(year, monthIndex, dayNumber), locale})
   
   const creareMonthDays = () => {
      const days = [];

      

   }

   
}
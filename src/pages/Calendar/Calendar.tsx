import React from 'react';
import { App_container, Calendar__header, Calendar__header__arrow__left, Calendar__header__arrow__right, Date_container } from './style';
import { useCalendar } from '../hooks/useCalendar';
import { formatDate } from '../../utils/helpers/date/formatDate';

interface CalendarProps {
    locale?: string;
    selectedDate: Date;
    selectDate: (date: Date) => void;
    firstWeekDayNumber?: number;
}

const Calendar: React.FC<CalendarProps> = ({
    locale = 'default',
    selectedDate: date,
    selectDate,
    firstWeekDayNumber = 1
}) => {

    const { functions, state } = useCalendar({
        locale,
        selectedDate: date,
        firstWeekDayNumber
    });

    return (
        <div>

            <App_container>
                <Calendar__header >

                    <div>
                        <Calendar__header__arrow__left /> {state.mode === 'days' && (
                            <div>
                                {state.monthesNames[state.selectedMonth.monthIndex].month} {state.selectedYear}
                            </div>)}
                        <Calendar__header__arrow__right />
                        <div>  {state.mode === 'monthes' && (state.selectedYear)}</div>
                        <div>
                            {state.mode === 'years' && (
                                <div>
                                    {state.selectedYearsInterval[0]} -{' '}
                                    {state.selectedYearsInterval[state.selectedYearsInterval.length - 1]}
                                </div>
                            )}
                        </div>


                    </div>


                </Calendar__header>
                calendar
            </App_container>
        </div>

    );
};

export default Calendar;
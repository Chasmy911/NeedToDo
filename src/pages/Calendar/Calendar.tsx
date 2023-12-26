import React from 'react';
import { CalendarBox, Calendar__body, Calendar__days, Calendar__header, Calendar__pick__items__container, Calendar__unchoosable__year, Calendar__week__names, Date_container } from './style';
import { useCalendar } from '../hooks/useCalendar';
import './styleDivs.css';
import { checkIsToday } from '../../utils/helpers/date/checkIsToday';
import { checkDateIsEqual } from '../../utils/helpers/date/checkDateIsEqual';
import { ArrowBack, ArrowForward } from '@mui/icons-material'

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
    firstWeekDayNumber = 2
}) => {
    const { functions, state } = useCalendar({
        locale,
        selectedDate: date,
        firstWeekDayNumber
    });

    return (
        <CalendarBox >
            <Calendar__header>
                <ArrowBack onClick={() => functions.onClickArrow('left')}></ArrowBack>

                {state.mode === 'days' && (
                    <div aria-hidden onClick={() => functions.setMode('monthes')}>
                        {state.monthesNames[state.selectedMonth.monthIndex].month} {state.selectedYear}
                    </div>
                )}
                {state.mode === 'monthes' && (
                    <div aria-hidden onClick={() => functions.setMode('years')}>
                        {state.selectedYear}
                    </div>
                )}
                {state.mode === 'years' && (
                    <div>
                        {state.selectedYearsInterval[0]} -{' '}
                        {state.selectedYearsInterval[state.selectedYearsInterval.length - 1]}
                    </div>
                )}
                <ArrowForward onClick={() => functions.onClickArrow('right')}></ArrowForward>

            </Calendar__header>
            <Calendar__body>
                {state.mode === 'days' && (
                    <>
                        <Calendar__week__names>
                            {state.weekDaysNames.map((weekDaysName) => (
                                <div key={weekDaysName.dayShort}>{weekDaysName.dayShort}</div>
                            ))}
                        </Calendar__week__names>
                        <Calendar__days>
                            {state.calendarDays.map((day) => {
                                const isToday = checkIsToday(day.date);
                                const isSelectedDay = checkDateIsEqual(day.date, state.selectedDay.date);
                                const isAdditionalDay = day.monthIndex !== state.selectedMonth.monthIndex;

                                return (
                                    <div
                                        key={`${day.dayNumber}-${day.monthIndex}`}
                                        aria-hidden
                                        onClick={() => {
                                            functions.setSelectedDay(day);
                                            selectDate(day.date);
                                        }}
                                        className={[
                                            'calendar__day',
                                            isToday ? 'calendar__today__item' : '',
                                            isSelectedDay ? 'calendar__selected__item' : '',
                                            isAdditionalDay ? 'calendar__additional__day' : ''
                                        ].join(' ')}
                                    >
                                        {day.dayNumber}
                                    </div>
                                );
                            })}
                        </Calendar__days>
                    </>
                )}

                {state.mode === 'monthes' && (
                    <Calendar__pick__items__container>
                        {state.monthesNames.map((monthesName) => {
                            const isCurrentMonth =
                                new Date().getMonth() === monthesName.monthIndex &&
                                state.selectedYear === new Date().getFullYear();
                            const isSelectedMonth = monthesName.monthIndex === state.selectedMonth.monthIndex;

                            return (
                                <div
                                    key={monthesName.month}
                                    aria-hidden
                                    onClick={() => {
                                        functions.setSelectedMonthByIndex(monthesName.monthIndex);
                                        functions.setMode('days');
                                    }}
                                    className={[
                                        'calendar__pick__item',
                                        isSelectedMonth ? 'calendar__selected__item' : '',
                                        isCurrentMonth ? 'calendar__today__item' : ''
                                    ].join(' ')}
                                >
                                    {monthesName.monthShort}
                                </div>
                            );
                        })}
                    </Calendar__pick__items__container>
                )}

                {state.mode === 'years' && (
                    <Calendar__pick__items__container>
                        <Calendar__unchoosable__year>{state.selectedYearsInterval[0] - 1}</Calendar__unchoosable__year>
                        {state.selectedYearsInterval.map((year) => {
                            const isCurrentYear = new Date().getFullYear() === year;
                            const isSelectedYear = year === state.selectedYear;

                            return (
                                <div
                                    key={year}
                                    aria-hidden
                                    onClick={() => {
                                        functions.setSelectedYear(year);
                                        functions.setMode('monthes');
                                    }}
                                    className={[
                                        'calendar__pick__item',
                                        isCurrentYear ? 'calendar__today__item' : '',
                                        isSelectedYear ? 'calendar__selected__item' : ''
                                    ].join(' ')}
                                >
                                    {year}
                                </div>
                            );
                        })}
                        <Calendar__unchoosable__year>
                            {state.selectedYearsInterval[state.selectedYearsInterval.length - 1] + 1}
                        </Calendar__unchoosable__year>
                    </Calendar__pick__items__container>
                )}
            </Calendar__body>
        </CalendarBox>
    );
};

export default Calendar;
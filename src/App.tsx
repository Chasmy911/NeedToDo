import React from 'react';

import Calendar from './pages/Calendar/Calendar';
import { getWeekDaysNames } from './utils/helpers/date/getWeeksDaysName';
import { Date_container } from './pages/Calendar/style';
import { formatDate } from './utils/helpers/date/formatDate';




console.log('weekNames', getWeekDaysNames())

function App() {
  const [selectedDate, selectDate] = React.useState(new Date())


  return (
    <div className="App">
      <Date_container>{formatDate(selectedDate, 'DD MM YYYY')}</Date_container>
      <Calendar selectDate={selectDate} selectedDate={selectedDate}></Calendar>
    </div>
  );
}

export default App;


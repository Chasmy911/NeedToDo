import React from 'react';
import MonthPage from './pages/mainPAge/MonthPage';
import createDate from './utils/helpers/date/createDate';

console.log('createDate', createDate())

function App() {
  return (
    <div className="App">
      <MonthPage></MonthPage>
    </div>
  );
}

export default App;

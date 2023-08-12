import {
  format,
  startOfWeek,
  endOfWeek,
  addDays,
  addWeeks,
  isSameWeek,
  isSameDay,
} from 'date-fns';
import './Calendar.css';
import { CalendarProps } from './types';


function Calendar({ selectedDate, setSelectedDate }: CalendarProps) {
  
  const startOfWeekDate = startOfWeek(selectedDate, { weekStartsOn: 1 });
  const endOfWeekDate = endOfWeek(selectedDate, { weekStartsOn: 1 });
  const startDate = startOfWeekDate;
  const endDate = endOfWeekDate;

  const days: Date[] = [];
  let currentDate = startDate;

  while (currentDate <= endDate) {
    days.push(currentDate);
    currentDate = addDays(currentDate, 1);
  }

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const handlePrevWeek = () => {
    setSelectedDate(addWeeks(selectedDate, -1));
  };

  const handleNextWeek = () => {
    setSelectedDate(addWeeks(selectedDate, 1));
  };

  const dayItems = [];

  for (let i = 0; i < days.length; i++) {
    dayItems.push(
      <div key={`name-${days[i].toString()}`} className="day-name">
        {format(days[i], 'eee')}
      </div>
    );
    dayItems.push(
      <div
        key={days[i].toString()}
        className={`day ${isSameWeek(days[i], startOfWeekDate) ? '' : 'outside'}`}
        onClick={() => handleDateClick(days[i])}
      >
        <span className={`date ${isSameDay(days[i], selectedDate) ? 'selected' : ''}`}>
          {format(days[i], 'd')}
        </span>
      </div>
    );
  }

  return (
    <div className="calendar">
      {/* <h1>Calendario</h1> */}
        {/* <p>{format(displayedDate, 'dd MMM yyyy')}</p> Display the selected date */}
        <p className="calendarTitle">{format(selectedDate, 'MMM yyyy')}</p> {/* Display the selected date */}
      {/* <header>
        <h1>Calendario</h1>

        <div className="week-navigation">
          <p>{`${format(startOfWeekDate, 'dd MMM yyyy')} - ${format(
            endOfWeekDate,
            'dd MMM yyyy'
          )}`}</p>

        </div>
      </header> */}
      <button onClick={handlePrevWeek}>^</button>
      <div className="days">
        {dayItems}
      </div>
      <button onClick={handleNextWeek}>v</button>
    </div>
  );
}

export default Calendar;

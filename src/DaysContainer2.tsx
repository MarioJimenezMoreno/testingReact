import React from 'react';
import DayPreview from './DayPreview';

interface DayWithTasks {
  day: number;
  month: number;
  year: number;
  tasks: Task[];
}

interface Task {
  startHour: string;
  endHour: string;
  category: string;
  color: string;
  name: string;
}

const App: React.FC = () => {
  const daysOfThisYear: DayWithTasks[] = [
    // ... your array of day objects here
  ];

  return (
    <div className="app">
      {daysOfThisYear.map((day, index) => (
        <DayPreview
          key={index}
          day={day.day}
          month={day.month}
          year={day.year}
          tasks={day.tasks}
        />
      ))}
    </div>
  );
};

export default App;
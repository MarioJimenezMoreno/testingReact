import React from 'react';
import { format } from 'date-fns';

interface DaysContainerLoaderProps {
    selectedDate: Date;
}

const DaysContainerLoader: React.FC<DaysContainerLoaderProps> = ({ selectedDate }) => {
  return (
    <div className="daysContainer">
      <div className="dateTitle"><p>{format(selectedDate, 'eeee, dd/MM/yyyy')}</p></div>
      <p className="loadingTasks">Loading tasks...</p>
    </div>
  );
};

export default DaysContainerLoader;

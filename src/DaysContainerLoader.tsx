import React from 'react';
import { format } from 'date-fns';
import{DaysContainerLoaderProps} from './types'

const DaysContainerLoader: React.FC<DaysContainerLoaderProps> = ({ selectedDate }) => {
  return (
    <div className="dayContainer">
      <div className="dateTitle"><p>{format(selectedDate, 'eeee, dd/MM/yyyy')}</p></div>
      <div className="loaderContainer"><p className="loadingTasks">Loading tasks...</p></div>
    </div>
  );
};

export default DaysContainerLoader;

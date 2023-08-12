import React from 'react';
import { Task } from './types';
import TaskComponent from './TaskComponent';

const DaysContainer: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  return (
    <div className="daysContainer">
        <div className="dateTitle"></div>
      {tasks.map(task => (
        <TaskComponent key={task.title} task={task} />
      ))}
    </div>
  );
};

export default DaysContainer;
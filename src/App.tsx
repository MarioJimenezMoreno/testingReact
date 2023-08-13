import React, { useState, useEffect } from "react";
import Header from "./Header";
import Calendar from "./Calendar";
import DaysContainer from "./DaysContainer";
import TaskCreator from "./TaskCreator";
import { Task } from './types';
import axios from 'axios'; 
import DaysContainerLoader from "./DaysContainerLoader";
import {
  format
} from 'date-fns';

const links = [
  { label: "Feature 1", url: "/feature1" },
  { label: "Feature 2", url: "/feature2" },
  { label: "Feature 3", url: "/feature3" },
  { label: "Feature 4", url: "/feature4" },
  { label: "Profile", url: "/profile" },
];

const App: React.FC = () => {

  const [taskCreatorVisible, setTaskCreatorVisible] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]); // Initialize tasks state with an empty array
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleNewTask = () => {
    setTaskCreatorVisible(!taskCreatorVisible);    
  };

  useEffect(() => {
    axios.get(`/api/tasks?date=${format(selectedDate, 'dd/MM/yyyy')}`)
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }, []);



  return (
    <>
      <Header links={links} />
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      {tasks.length > 0 ? (
        <DaysContainer tasks={tasks} selectedDate={selectedDate}/>
      ) : (
        <DaysContainerLoader selectedDate={selectedDate} />
      )}
      <div
        className="newTaskButton"
        onClick={handleNewTask}
      >
        <img src="src/assets/plus.png" alt="Nueva Tarea" />
      </div>
      {taskCreatorVisible && (
        <>
          <div className="fader" onClick={handleNewTask}></div>
          <TaskCreator  handleNewTask={handleNewTask} selectedDate={selectedDate}/>
        </>
      )}
    </>
  );
};

export default App;

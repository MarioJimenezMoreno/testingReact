import React, { useState } from "react";
import Header from "./Header";
import Calendar from "./Calendar";
import DaysContainer2 from "./DaysContainer2";
import TaskCreator from "./TaskCreator";

const links = [
  { label: "Feature 1", url: "/feature1" },
  { label: "Feature 2", url: "/feature2" },
  { label: "Feature 3", url: "/feature3" },
  { label: "Feature 4", url: "/feature4" },
  { label: "Profile", url: "/profile" },
];

const App: React.FC = () => {
  const [taskCreatorVisible, setTaskCreatorVisible] = useState(false);

  const handleNewTask = () => {
    setTaskCreatorVisible(!taskCreatorVisible);    
  };

  return (
    <>
      <Header links={links} />
      <Calendar />
      <DaysContainer2 />
      <div
        className="newTaskButton"
        onClick={handleNewTask}
      >
        <img src="src/assets/plus.png" alt="Nueva Tarea" />
      </div>
      {taskCreatorVisible && (
        <>
          <div className="fader" onClick={handleNewTask}></div>
          <TaskCreator handleNewTask={handleNewTask}/>
        </>
      )}
    </>
  );
};

export default App;

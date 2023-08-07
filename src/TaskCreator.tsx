
import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import TimeKeeper from 'react-timekeeper';

interface TaskCreatorProps {
    handleNewTask: () => void;
  }

const TaskCreator: React.FC<TaskCreatorProps> = ({handleNewTask}) => {

    const [taskName, setTaskName] = useState("");
    const [category, setCategory] = useState("");
    const [startTime, setStartTime] = useState("")
    const [endTime, setEndTime] = useState("")
    const [isFormValid, setIsFormValid] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [showStartTime, setShowStartTime] = useState(false)
    const [showEndTime, setShowEndTime] = useState(false)

    const handleCreateTask = () => {
        handleNewTask();
    };
    
    const handleInputChange = () => {
      if (taskName !== "" && category !== "" && startTime !== "" && endTime !== "") {
        setIsFormValid(true);
      } else {
        setIsFormValid(false);
      }
    };
    

      return (
        <div className="taskCreatorContainer">
          <div className="taskCreatorWindow">
            <h2>New Task</h2>
            <form className="formNewTask">
              <span>NAME</span>
              <input
                type="text"
                name="taskName"
                className="taskNameInput"
                maxLength={10}
                required
                value={taskName}
                onChange={(e) => {
                  setTaskName(e.target.value);
                  handleInputChange();
                }}
              />
              <span>CATEGORY</span>
              <select
                name="category"
                className="categoryInput"
                required
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  handleInputChange();
                }}
              >
            <option value="">Selecciona una categoría</option>
            <option value="Ocio">Ocio</option>
            <option value="Estudio">Estudio</option>
            <option value="Trabajo">Trabajo</option>
              </select>
              </form>
              <span>INITIAL HOUR</span>
              <div>
            {showStartTime &&
                <TimeKeeper
                    startTime={startTime}
                    onChange={(newTime) => setStartTime(newTime.formatted24)}
                    hour24Mode
                    onDoneClick={() => setShowStartTime(false)}
                    switchToMinuteOnHourSelect
                />
            }
            <span>Start time: {startTime}</span>
            {!showStartTime &&
                <button onClick={() => setShowStartTime(true)}>Show</button>
            }
        </div>
<span>END HOUR</span>
<div>
            {showEndTime &&
                <TimeKeeper
                endTime={endTime}
                    onChange={(newTime) => setEndTime(newTime.formatted24)}
                    hour24Mode
                    disabledTimeRange={{ from: '23:59', to: startTime }}
                    onDoneClick={() => setShowEndTime(false)}
                    switchToMinuteOnHourSelect
                />
            }
            <span>End time: {endTime}</span>
            {!showEndTime &&
                <button onClick={() => setShowEndTime(true)}>Show</button>
            }
        </div>
<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
              <span>Date is {startDate.toLocaleDateString()}</span>
              <button
                type="button"
                className="createTaskBtn"
                disabled={!isFormValid}
                onClick={handleCreateTask}
              >
                Create
              </button>
          </div>
        </div>
      );
    };

export default TaskCreator;
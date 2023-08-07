
import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

interface TaskCreatorProps {
    handleNewTask: () => void;
  }



const TaskCreator: React.FC<TaskCreatorProps> = ({handleNewTask}) => {

    const [taskName, setTaskName] = useState("");
    const [category, setCategory] = useState("");
    const [initialHour, setInitialHour] = useState("");
    const [initialMinute, setInitialMinute] = useState("");
    const [endHour, setEndHour] = useState("");
    const [endMinute, setEndMinute] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

    const handleCreateTask = () => {
        handleNewTask();
    };
    
    const handleInputChange = () => {
        if (
          taskName !== "" &&
          category !== "" &&
          initialHour !== "" &&
          initialMinute !== "" &&
          endHour !== "" &&
          endMinute !== ""
        ) {
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
              <span>INITIAL HOUR</span>
          <div className="initialHourContainer">
            <select name="initialHour" className="initialHourInput" required value={initialHour}
                onChange={(e) => {
                  setInitialHour(e.target.value);
                  handleInputChange();
                }}>
              <option value="">Hora</option>
              <option value="00">00</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
            </select>
            <span>:</span>
            <select name="initialMinute" className="initialMinuteInput" required value={initialMinute}
                onChange={(e) => {
                  setInitialMinute(e.target.value);
                  handleInputChange();
                }}>
              <option value="">Minuto</option>
              <option value="00">00</option>
              <option value="05">05</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
              <option value="35">35</option>
              <option value="40">40</option>
              <option value="45">45</option>
              <option value="50">50</option>
              <option value="55">55</option>
            </select>
          </div>

          <span>END HOUR</span>
          <div className="endHourContainer">
            <select name="endHour" className="endHourInput" required value={endHour}
                onChange={(e) => {
                  setEndHour(e.target.value);
                  handleInputChange();
                }}>
              <option value="">Hora</option>
              <option value="00">00</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
            </select>
            <span>:</span>
            <select name="endMinute" className="endMinuteInput" required value={endMinute}
                onChange={(e) => {
                  setEndMinute(e.target.value);
                  handleInputChange();
                }}>
              <option value="">Minuto</option>
              <option value="00">00</option>
              <option value="05">05</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
              <option value="35">35</option>
              <option value="40">40</option>
              <option value="45">45</option>
              <option value="50">50</option>
              <option value="55">55</option>
            </select>
          </div>
              <button
                type="button"
                className="createTaskBtn"
                disabled={!isFormValid}
                onClick={handleCreateTask}
              >
                Create
              </button>
            </form>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

          </div>
        </div>
      );
    };

export default TaskCreator;
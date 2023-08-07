import React, { useState } from 'react';
import Timekeeper from 'react-timekeeper';

function TimePickerComponent() {
    const [selectedTime, setSelectedTime] = useState('12:00 PM');
    
    const handleTimeChange = (newTime) => {
      setSelectedTime(newTime.formatted12);
    };
  
    return (
      <div>
        <Timekeeper
          time={selectedTime}
          onChange={handleTimeChange}
        />
        <div>
          Selected Time: {selectedTime}
        </div>
      </div>
    );
  }
  
  export default TimePickerComponent;
import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import '../DatePickerTask/datePickerTask.css'

const DatePickerTask = ({startDate, setStartDate}) => {
  const now = new Date();

  return (
    <DatePicker
      selected={startDate}
      includeDateIntervals={[  
        {
          start: now,
          end: new Date(
            now.getFullYear() + 1,
            now.getMonth(),
            now.getDate()
          ),
        },
      ]}
      onChange={(date = Date) => setStartDate(date)}
    />
  );
};

export default DatePickerTask;
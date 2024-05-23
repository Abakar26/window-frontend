/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDateInput = (props) => {
  const [startDate, setStartDate] = useState(null);

  const handleChange = (date) => {
    setStartDate(date);
    props.setDOB(date);
  };

  return (
    <div className="flex flex-col mb-6 order-1 max-w-[185px] w-full mr-[218px] sm:mr-0 md:order-none md:mr-0">
      <label className="about_signup_label mb-2" htmlFor={props.id || props.name}>{props.label}</label>
      <div className="flex flex-row">
        <DatePicker
          selected={startDate}
          placeholderText="01/01/2000"
          openToDate={new Date('01/01/2000')}
          onChange={handleChange}
          value={props.value}
          tabIndex={props.tabIndex}
        />
      </div>
    </div>
  );
};
export default MyDateInput;

import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

const AddCourseStartEndDates = ({
  startDate, endDate, handleStartDateChange, handleEndDateChange
}) => (
  <fieldset>
    <legend>
      <span>Start Date</span>
    </legend>
    <div className="control-group string optional course_start_date">
      <label
        className="string optional control-label"
        htmlFor="course_start_date"
      >
        Start Date
      </label>
      <div className="controls">
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          name="startDate"
          id="course_start_date"
          className="course_end_date_datepicker picker__input"
        />
      </div>
    </div>
    <legend>
      <span>End Date</span>
    </legend>
    <div className="control-group string optional course_end_date">
      <label
        className="string optional control-label"
        htmlFor="course_end_date"
      >
        End Date
      </label>
      <div className="controls">
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          name="endDate"
          id="course_end_date"
          className="course_end_date_datepicker picker__input"
        />
      </div>
    </div>
    <div className="control-group cover-photo-wrapper">
      <div className="controls hint-container">
        <p className="hint">Course start and end dates are visible to admins and included in reports</p>
      </div>
    </div>
  </fieldset>
);

AddCourseStartEndDates.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  handleStartDateChange: PropTypes.func.isRequired,
  handleEndDateChange: PropTypes.func.isRequired
};

AddCourseStartEndDates.defaultProps = {
  startDate: null,
  endDate: null
};

export default AddCourseStartEndDates;

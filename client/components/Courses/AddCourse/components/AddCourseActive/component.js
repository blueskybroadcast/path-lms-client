import React from 'react';
import PropTypes from 'prop-types';

const AddCourseActive = ({ active, handleChange }) => (
  <fieldset>
    <legend>
      <span>Active</span>
    </legend>
    <div className="control-group active-toggle">
      <label htmlFor="active">Active</label>
      <div className="controls">
        <label
          className="label-switch"
          tabIndex="0"
          htmlFor="active"
        >
          <input
            className="boolean optional switcher optional "
            id="active"
            type="checkbox"
            onChange={handleChange}
            checked={active}
            name="active"
          />
          <div className="checkbox" />
        </label>
        <p className="help-block">Users can view this content.</p>
      </div>
    </div>
  </fieldset>
);

AddCourseActive.propTypes = {
  active: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default AddCourseActive;

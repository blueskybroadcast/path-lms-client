import React from 'react';
import PropTypes from 'prop-types';

const AddCourseFormSection = ({
  label, isRequired, children, tooltip
}) => (
  <fieldset>
    <legend>
      <span>{label}</span>
    </legend>
    <div className="control-group">
      <label htmlFor={label}>
        {label}
        <span className="has-tooltip">
          { tooltip && (
            <span
              className="tooltiped"
              data-toggle="tooltip"
              data-original-title={tooltip}
            >
              <i className="icon icon-question-circle" />
            </span>
          )}
        </span>
        { isRequired && <abbr title="required" className="required">*</abbr> }
      </label>
      {children}
    </div>
  </fieldset>
);

AddCourseFormSection.propTypes = {
  label: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  children: PropTypes.node.isRequired,
  tooltip: PropTypes.string
};

AddCourseFormSection.defaultProps = {
  isRequired: false,
  tooltip: null
};

export default AddCourseFormSection;

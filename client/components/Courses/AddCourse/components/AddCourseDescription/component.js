import React from 'react';
import PropTypes from 'prop-types';

import AddCourseFormSection from '../AddCourseFormSection';


class AddCourseDescription extends React.Component {
  static propTypes = {
    description: PropTypes.string,
    handleChange: PropTypes.func.isRequired
  }

  static defaultProps = {
    description: null
  }

  state = {
    value: null
  }

  onChange = (value) => {
    this.setState({ value });
    const { handleChange } = this.props;
    handleChange(value.toString('html'));
  }

  render() {
    const { default: RichTextEditor } = require('react-rte');
    const { value } = this.state;
    const { description } = this.props;
    const initialValue = description
      ? RichTextEditor.createValueFromString(description, 'html')
      : RichTextEditor.createEmptyValue();
    return (
      <AddCourseFormSection
        label="Description"
      >
        <div className="controls">
          <RichTextEditor
            value={value || initialValue}
            onChange={this.onChange}
            placeholder="What is the purpose of this course?"
          />
        </div>
      </AddCourseFormSection>
    );
  }
}


AddCourseDescription.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default AddCourseDescription;

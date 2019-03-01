import React from 'react';
import PropTypes from 'prop-types';

export default class HtmlEditor extends React.Component {
  static propTypes = {
    defaultValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    if (typeof window !== 'undefined') {
      this.ReactQuill = require('react-quill');
    }
  }

  render() {
    const { ReactQuill } = this;
    const { onChange, defaultValue } = this.props;

    if (typeof window !== 'undefined' && ReactQuill) {
      return (
        <ReactQuill
          onChange={onChange}
          theme="snow"
          defaultValue={defaultValue}
        />
      );
    }
    return null;
  }
}

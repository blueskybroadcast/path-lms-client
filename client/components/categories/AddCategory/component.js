import React from 'react';
import PropTypes from 'prop-types';

import CategoryFormModal from '../CategoryFormModal';

class AddCategory extends React.Component {
  state = {
    showModal: false
  }

  static propTypes = {
    addCategory: PropTypes.func.isRequired
  }

  handleShow = () => {
    this.setState({
      showModal: true
    });
  }

  handleClose = () => {
    this.setState({
      showModal: false
    });
  }

  handleCategoryAdd = (category) => {
    const { addCategory } = this.props;

    addCategory(category);
  }

  render() {
    const { showModal } = this.state;

    return (
      <>
        <a
          className="add"
          href="#new-category"
          onClick={this.handleShow}
        >
          Add Category
        </a>
        <CategoryFormModal
          show={showModal}
          handleClose={this.handleClose}
          handleSubmit={this.handleCategoryAdd}
        />
      </>
    );
  }
}

export default AddCategory;

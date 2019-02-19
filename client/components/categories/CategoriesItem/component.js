import React from 'react';
import PropTypes from 'prop-types';

import CategoryFormModal from '../CategoryFormModal';

class CategoriesItem extends React.Component {
  state = {
    showEditModal: false
  }

  handleShow = () => {
    this.setState({
      showEditModal: true
    });
  }

  handleClose = () => {
    this.setState({
      showEditModal: false
    });
  }

  handleCategoryEdit = (category) => {
    const { editCategory, id } = this.props;

    editCategory(id, category);
  }

  handleCategoryDelete = () => {
    const confirmDelete = confirm('Are you sure you want to delete this category?');

    if (confirmDelete) {
      const { deleteCategory, id } = this.props;
      deleteCategory(id);
    }
  }

  render() {
    const {
      name, parent, hidden, level
    } = this.props;
    const { showEditModal } = this.state;

    return (
      <li className={`level-${level}`}>
        <span className="category">
          { level !== 0 && (
            <>
              <i className="icon icon-level-up icon-rotated-90" />
              &nbsp;
            </>
          )}
          <span className={level > 0 || hidden ? 'italic' : 'bold-weight'}>{name}</span>
        </span>
        <div className="actions">
          <a
            className="edit"
            href="#edit-category"
            onClick={this.handleShow}
          >
            <i className="icon icon-cog" />
            &nbsp;Edit&nbsp;
          </a>
          { showEditModal && (
            <CategoryFormModal
              show={showEditModal}
              handleClose={this.handleClose}
              handleSubmit={this.handleCategoryEdit}
              mode="edit"
              name={name}
              parentId={parent.id}
              hidden={hidden}
            />
          )}
          <a
            onClick={this.handleCategoryDelete}
            className="delete"
            href="#"
          >
            <i className="icon icon-times" />
            &nbsp;Delete
          </a>
        </div>
      </li>
    );
  }
}

CategoriesItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  parent: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string
  }),
  hidden: PropTypes.bool.isRequired,
  editCategory: PropTypes.func.isRequired,
  deleteCategory: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired
};

CategoriesItem.defaultProps = {
  parent: null
};

export default CategoriesItem;

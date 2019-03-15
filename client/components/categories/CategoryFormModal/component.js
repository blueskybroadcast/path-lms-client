import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Modal, Form } from 'react-bootstrap';

import { getParentListLevelOne } from '../../../helpers/categories';

const initialState = {
  name: '',
  parentId: '',
  hidden: false
};

class CategoryFormModal extends React.Component {
  state = initialState

  componentDidMount() {
    this.initialLoad();
  }

  initialLoad = () => {
    const {
      name, parentId, hidden
    } = this.props;
    this.setState({
      name,
      parentId,
      hidden
    });
  }

  handleClose = () => {
    const { handleClose } = this.props;
    handleClose();
    this.initialLoad();
  }

  handleChange = ({ target }) => {
    const {
      type, checked, value, name
    } = target;

    const val = type === 'checkbox' ? checked : value;

    this.setState({
      [name]: val
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.validateForm()) {
      const { handleSubmit } = this.props;
      const { name, parentId, hidden } = this.state;
      handleSubmit({ name, parentId, hidden });
      this.setState(initialState);
      this.handleClose();
    }
  }

  validateForm = () => {
    const { name } = this.state;
    const isInvalid = !name;
    return isInvalid;
  }

  render() {
    const { name, parentId, hidden } = this.state;
    const {
      show, mode, categoriesSortedList, submitting
    } = this.props;
    const isFormInvalid = this.validateForm();

    const parentListLevelZero = categoriesSortedList.filter(cat => cat.level === 0);
    const parentListLevelOne = getParentListLevelOne(categoriesSortedList);
    const submitButtonLabel = mode === 'create' ? 'Create Category' : 'Update Category';

    return (
      <Modal
        show={show}
        onHide={this.handleClose}
        size="lg"
      >
        <div className="modal-inner">
          <section className="modal-form">
            <header>
              <h4>{mode === 'create' ? 'Add Category' : 'Edit Category'}</h4>
            </header>
            <div className="form-wrapper">
              <form
                noValidate="novalidate"
                className="simple_form edit_category"
                onSubmit={this.handleSubmit}
              >
                <div className="form-inner">
                  <fieldset>
                    <div className="control-group string required category_name">
                      <label
                        className="string required control-label"
                        htmlFor="category_name"
                      >
                        Name
                        <abbr title="required" className="required">*</abbr>
                      </label>
                      <div className="controls">
                        <input
                          className="string required"
                          id="category_name"
                          required="required"
                          aria-required="true"
                          type="text"
                          onChange={this.handleChange}
                          value={name}
                          name="name"
                        />
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <div className="control-group integer optional category_parent_id">
                      <label
                        className="integer optional control-label"
                        htmlFor="parentId"
                      >
                        Parent
                      </label>
                      <div className="controls">
                        <Form.Control
                          as="select"
                          name="parentId"
                          onChange={this.handleChange}
                          value={parentId}
                        >
                          <option value="">-------------</option>
                          <optgroup label="Top Level Categories">
                            {parentListLevelZero.map(cat => (
                              <option
                                key={cat.id}
                                value={cat.id}
                              >
                                {cat.name}
                              </option>
                            ))}
                          </optgroup>
                          {parentListLevelOne.map(parent => (
                            <optgroup
                              label={parent.name}
                              key={parent.name}
                            >
                              {parent.list.map(category => (
                                <option
                                  value={category.id}
                                  key={category.id}
                                >
                                  {category.name}
                                </option>
                              ))}
                            </optgroup>
                          ))}
                        </Form.Control>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <div className="control-group active-toggle">
                      <label htmlFor="category_hidden">
                        Hidden
                      </label>
                      <div className="controls">
                        <label
                          className="label-switch"
                          role="checkbox"
                          tabIndex="0"
                          htmlFor="category_hidden"
                          aria-checked="false"
                        >
                          <input
                            className="boolean optional switcher optional"
                            id="category_hidden"
                            type="checkbox"
                            checked={hidden}
                            onChange={this.handleChange}
                            name="hidden"
                          />
                          <div className="checkbox" />
                        </label>
                        <p className="help-block">
                          Hidden categories only display to admins. These also display in reports
                        </p>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <footer className="confirm">
                  <button
                    type="submit"
                    className={classNames({
                      btn: true,
                      disabled: isFormInvalid || submitting,
                      submitting
                    })}
                    onClick={this.handleSubmit}
                    disabled={isFormInvalid || submitting}
                  >
                    { submitting
                      ? 'Processing...'
                      : submitButtonLabel
                    }
                  </button>

                  <button
                    className="cancel close-modal"
                    type="button"
                    onClick={this.handleClose}
                  >
                    Cancel
                  </button>
                </footer>
              </form>
            </div>
          </section>
        </div>
      </Modal>
    );
  }
}

CategoryFormModal.propTypes = {
  name: PropTypes.string,
  parentId: PropTypes.string,
  hidden: PropTypes.bool,
  mode: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  categoriesSortedList: PropTypes.arrayOf(PropTypes.object).isRequired
};

CategoryFormModal.defaultProps = {
  name: '',
  hidden: false,
  parentId: '',
  mode: 'create'
};

export default CategoryFormModal;

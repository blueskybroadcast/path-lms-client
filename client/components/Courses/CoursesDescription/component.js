import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

import HtmlEditor from '../../HtmlEditor';

class CoursesDescription extends React.Component {
  static propTypes = {
    description: PropTypes.string,
    isAdmin: PropTypes.bool.isRequired,
    editCourseDescription: PropTypes.func.isRequired
  }

  static defaultProps = {
    description: null
  }

  constructor(props) {
    super(props);
    if (typeof window !== 'undefined') {
      this.ReactQuill = require('react-quill');
    }
  }

  state = {
    show: false,
    description: null
  }

  handleShow = () => this.setState({ show: true })

  handleClose = () => this.setState({ show: false })

  handleDescriptionChange = description => this.setState({ description })

  handleSubmit = (e) => {
    e.preventDefault();
    const { description } = this.state;
    const { editCourseDescription } = this.props;
    editCourseDescription(description).then(() => {
      this.handleClose();
    });
  }

  render() {
    const { description, isAdmin } = this.props;
    const { show } = this.state;

    return (
      <div
        className="description-wrapper"
        id="courses-description"
      >
        <div className="description">
          <div dangerouslySetInnerHTML={{__html: description }} />
          { isAdmin && (
            <>
              <div className="edit-info">
                <a
                  onClick={this.handleShow}
                  data-role="set-description"
                  data-type="courses-description"
                  href="#"
                >
                  Edit Description
                </a>
              </div>

              <Modal
                show={show}
                onHide={this.handleClose}
                size="lg"
                backdrop="static"
              >
                <div className="modal-inner">
                  <section className="modal-form">
                    <header>
                      <h4>Edit Description</h4>
                    </header>
                    <div className="form-wrapper">
                      <form
                        onSubmit={this.handleSubmit}
                        className="simple_form courses_description"
                        acceptCharset="UTF-8"
                        data-remote="true"
                        method="post"
                      >
                        <HtmlEditor
                          defaultValue={description}
                          onChange={this.handleDescriptionChange}
                        />
                        <footer className="confirm">
                          <div className="screen-readers-only">
                            <span className="accessibility-action-info">
                              To Update Description press button with label
                              <strong>&quot;Update Description&quot;</strong>
                              .
                              For cancelling press button with label
                              <strong>&quot;Cancel&quot;</strong>
                              .
                            </span>
                          </div>
                          <button
                            name="button"
                            type="submit"
                            className="btn"
                            data-processable-button="both"
                          >
                            Update Description
                          </button>
                          <button
                            onClick={this.handleClose}
                            className="cancel close-modal"
                            type="button"
                          >
                            Cancel
                          </button>
                        </footer>
                      </form>
                    </div>
                  </section>
                </div>
              </Modal>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default CoursesDescription;

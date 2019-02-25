import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

import AddCourseFormSection from './components/AddCourseFormSection';
import AddCourseCategoriesList from './components/AddCourseCategoriesList';
import AddCourseTracks from './components/AddCourseTracks';
import AddCourseAdminsList from './components/AddCourseAdminsList';
import AddCourseCoverPhoto from './components/AddCourseCoverPhoto';

const initialState = {
  show: false,
  activeTab: 'basic',
  name: '',
  description: '',
  coverDescription: '',
  categoryIds: [],
  tracksAttributes: {
    0: {
      _destroy: false,
      name: ''
    }
  },
  adminIds: [],
  active: true,
  featured: false,
  showProgress: true,
  searchKeywords: ''
};

class AddCourse extends React.Component {
  state = initialState

  componentDidMount() {
    this.handleShow();
  }

  handleShow = () => this.setState({ show: true })

  handleClose = () => this.setState(initialState)

  handleChange = ({ target }) => {
    const {
      type, checked, value, name
    } = target;

    const val = type === 'checkbox' ? checked : value;

    this.setState({ [name]: val });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.validateForm()) {
      const { addCourse } = this.props;
      const { show, ...rest } = this.state;
      addCourse({ ...rest });
      this.handleClose();
    }
  }

  handleDescriptionChange = (description) => {
    this.setState({ description });
  }

  handleCoverPhotoUrlToggle = () => {
    const { coverPhotoUrl } = this.state;
    if (coverPhotoUrl === '' || coverPhotoUrl) {
      this.setState({ coverPhotoUrl: undefined });
    } else {
      this.setState({ coverPhotoUrl: '' });
    }
  }

  handleCoverPhotoUrlChange = ({ filesUploaded }) => {
    const coverPhotoUrl = filesUploaded[0].url;
    this.setState({ coverPhotoUrl });
  }

  handleCategoryToggle = (catId, catIndex, isChecked) => {
    const { categoryIds } = this.state;
    const ids = [...categoryIds];
    if (isChecked) {
      ids.splice(catIndex, 1);
      this.setState({ categoryIds: ids });
    } else {
      ids.push(catId);
      this.setState({ categoryIds: ids });
    }
  }

  handleTrackChange = (name, id) => {
    const { tracksAttributes } = this.state;
    this.setState({
      tracksAttributes: {
        ...tracksAttributes,
        [id]: {
          ...tracksAttributes[id],
          name
        }
      }
    });
  }

  handleTrackDelete = (id) => {
    const confirmDelete = confirm('Are you sure you want to delete this track?');
    const { tracksAttributes } = this.state;
    if (confirmDelete) {
      this.setState({
        tracksAttributes: {
          ...tracksAttributes,
          [id]: {
            ...tracksAttributes[id],
            _destroy: true
          }
        }
      });
    }
  }

  handleTrackAdd = () => {
    const { tracksAttributes } = this.state;
    const newTrackNumber = (Object.keys(tracksAttributes).length).toString();
    this.setState({
      tracksAttributes: {
        ...tracksAttributes,
        [newTrackNumber]: {
          _destroy: false,
          name: ''
        }
      }
    });
  }

  handleAdminSelect = (id) => {
    const { adminIds } = this.state;
    this.setState({
      adminIds: [...adminIds, id]
    });
  }

  handleAdminRemove = (id) => {
    const { adminIds } = this.state;
    this.setState({
      adminIds: adminIds.filter(adminId => adminId !== id)
    });
  }

  validateForm = () => {
    const { name } = this.state;
    const isInvalid = !name;
    return isInvalid;
  }

  render() {
    const {
      show, activeTab, name, description, coverPhotoUrl, coverDescription, active,
      categoryIds, tracksAttributes, featured, showProgress, searchKeywords, adminIds
    } = this.state;

    const {
      visibleCategories, hiddenCategories, usersIds, usersData, history: { push }, slug
    } = this.props;

    const usersForDropdown = usersIds.filter(id => adminIds.indexOf(id) === -1);

    return (
      <Modal
        show={show}
        onHide={this.handleClose}
        size="lg"
        backdrop="static"
        onExited={() => push(`/${slug}/courses`)}
      >
        <div className="modal-inner">
          <section className="modal-form">
            <header>
              <div className="icon">
                <i className="icon-course" />
              </div>
              <h4>Add New Course</h4>
            </header>
            <div className="form-wrapper">
              <form
                className="simple_form new_course"
                id="new_course"
                encType="multipart/form-data"
                onSubmit={this.handleSubmit}
              >
                <div className="form-inner horizontally-align courses-new">
                  <section className="secondary-content">
                    <section className="active secondary-content-section" id="course-core-content">
                      <nav className="content-tabs">
                        <ul>
                          <li className={activeTab === 'basic' ? 'active' : null}>
                            <a
                              href="#"
                              onClick={() => this.setState({ activeTab: 'basic' })}
                            >
                              Basic
                            </a>
                          </li>
                          <li className={activeTab === 'advanced' ? 'active' : null}>
                            <a
                              href="#"
                              onClick={() => this.setState({ activeTab: 'advanced' })}
                            >
                              Advanced
                            </a>
                          </li>
                        </ul>
                        <div className="form-hint">
                          <div className="asterisk-explanation">
                            <p>
                              Required fields are marked with an asterisk (
                              <abbr title="required" className="required">*</abbr>
                              ).
                            </p>
                          </div>
                        </div>
                      </nav>

                      { activeTab === 'basic' && (
                        <>
                          <AddCourseFormSection
                            label="Name"
                            isRequired
                          >
                            <div className="controls">
                              <input
                                onChange={this.handleChange}
                                value={name}
                                maxLength="255"
                                className="string required"
                                aria-required="true"
                                placeholder="Blue Sky Course"
                                size="255"
                                type="text"
                                name="name"
                                id="Name"
                              />
                            </div>
                          </AddCourseFormSection>

                          <AddCourseFormSection
                            label="Description"
                          >
                            <div className="controls">
                              <textarea
                                value={description}
                                onChange={this.handleChange}
                                rows="2"
                                className="text optional"
                                name="description"
                                id="Description"
                              />
                            </div>
                          </AddCourseFormSection>

                          <AddCourseCoverPhoto
                            coverPhotoUrl={coverPhotoUrl}
                            handleCoverPhotoUrlChange={this.handleCoverPhotoUrlChange}
                            handleCoverPhotoUrlToggle={this.handleCoverPhotoUrlToggle}
                          />

                          <AddCourseFormSection
                            label="Cover Description"
                            tooltip="This shorter description will display on the homepage or course listing page only."
                          >
                            <div className="controls">
                              <textarea
                                rows="2"
                                aria-label="Cover Description"
                                className="text optional"
                                aria-required="false"
                                placeholder="What is the purpose of this course?"
                                onChange={this.handleChange}
                                value={coverDescription}
                                name="coverDescription"
                                id="Cover Description"
                              />
                            </div>
                          </AddCourseFormSection>

                          <AddCourseFormSection
                            label="Categories"
                            tooltip=""
                          >
                            <div className="controls">
                              <div className="option-list categories">
                                <div className="header">
                                  <span>Available Categories</span>
                                </div>
                                <AddCourseCategoriesList
                                  categories={visibleCategories}
                                  categoryIds={categoryIds}
                                  handleCategoryToggle={this.handleCategoryToggle}
                                />
                              </div>
                            </div>
                          </AddCourseFormSection>

                          <AddCourseFormSection
                            label="Hidden Categories"
                            tooltip=""
                          >
                            <div className="controls">
                              <div className="option-list categories">
                                <div className="header">
                                  <span>Available Hidden Categories</span>
                                </div>
                                <AddCourseCategoriesList
                                  categories={hiddenCategories}
                                  categoryIds={categoryIds}
                                  handleCategoryToggle={this.handleCategoryToggle}
                                />
                              </div>
                            </div>
                          </AddCourseFormSection>

                          <AddCourseFormSection
                            label="Tracks"
                            tooltip="Items within this course can be filtered to specific tracks. Click on the + sign to add new tracks."
                          >
                            <div className="controls">
                              <AddCourseTracks
                                tracks={tracksAttributes}
                                handleTrackChange={this.handleTrackChange}
                                handleTrackDelete={this.handleTrackDelete}
                                handleTrackAdd={this.handleTrackAdd}
                              />
                            </div>
                          </AddCourseFormSection>

                          <AddCourseAdminsList
                            adminIds={adminIds}
                            usersData={usersData}
                            usersForDropdown={usersForDropdown}
                            handleAdminSelect={this.handleAdminSelect}
                            handleAdminRemove={this.handleAdminRemove}
                          />

                          <AddCourseFormSection
                            label="Active"
                            tooltip=""
                          >
                            <div className="controls">
                              <label
                                className="label-switch"
                                tabIndex="0"
                                htmlFor="index_course_active"
                              >
                                <input
                                  className="boolean optional switcher optional "
                                  id="index_course_active"
                                  type="checkbox"
                                  onChange={this.handleChange}
                                  checked={active}
                                  name="active"
                                />
                                <div className="checkbox" />
                              </label>
                              <p className="help-block">Users can view this content.</p>
                            </div>
                          </AddCourseFormSection>
                        </>
                      )}

                      { activeTab === 'advanced' && (
                        <>
                          <AddCourseFormSection
                            label="Featured"
                          >
                            <div className="controls">
                              <label
                                className="label-switch"
                                role="checkbox"
                                tabIndex="0"
                                htmlFor="Featured"
                                aria-checked="false"
                              >
                                <input
                                  checked={featured}
                                  onChange={this.handleChange}
                                  className="boolean optional switcher optional"
                                  id="Featured"
                                  type="checkbox"
                                  name="featured"
                                />
                                <div className="checkbox" />
                              </label>
                              <p className="help-block">Course is displayed on the home page.</p>
                            </div>
                          </AddCourseFormSection>

                          <AddCourseFormSection
                            label="Show course progress"
                          >
                            <div className="controls">
                              <label
                                className="label-switch"
                                tabIndex="0"
                                htmlFor="Show course progress"
                              >
                                <input
                                  checked={showProgress}
                                  onChange={this.handleChange}
                                  className="boolean optional switcher optional"
                                  id="Show course progress"
                                  type="checkbox"
                                  name="showProgress"
                                />
                                <div className="checkbox" />
                              </label>
                              <p className="help-block">Show progress bars for this course and its sections in activity feeds</p>
                            </div>
                          </AddCourseFormSection>

                          <AddCourseFormSection
                            label="Search Keywords"
                            tooltip="Titles and descriptions are automatically placed in search. However, you may add any additional keywords here."
                          >
                            <div className="controls">
                              <input
                                value={searchKeywords}
                                onChange={this.handleChange}
                                aria-label="Search Keywords"
                                className="string optional"
                                aria-required="false"
                                placeholder="quiz, first, exam, blue sky"
                                type="text"
                                name="searchKeywords"
                                id="Search Keywords"
                              />
                              <p className="help-block">separate with commas</p>
                            </div>
                          </AddCourseFormSection>
                        </>
                      )}
                    </section>
                  </section>
                </div>
                <footer className="confirm">
                  <div className="screen-readers-only">
                    <span className="accessibility-action-info">
                      To create Course press button with label
                      <strong>&quot;Create Course&quot;</strong>
                      . For cancelling press button with label
                      <strong>&quot;Cancel&quot;</strong>
                      .
                    </span>
                  </div>
                  <button
                    name="button"
                    type="submit"
                    id="submit-course"
                    className="btn"
                    data-processable-button="both"
                  >
                    Create Course
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

AddCourse.propTypes = {
  addCourse: PropTypes.func.isRequired,
  visibleCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
  hiddenCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
  usersIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  usersData: PropTypes.objectOf(PropTypes.object).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  slug: PropTypes.string.isRequired
};

export default AddCourse;

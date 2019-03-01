import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

import AddCourseFormSection from './components/AddCourseFormSection';
import AddCourseDescription from './components/AddCourseDescription';
import AddCourseCoverPhoto from './components/AddCourseCoverPhoto';
import AddCourseCategoriesList from './components/AddCourseCategoriesList';
import AddCourseTracks from './components/AddCourseTracks';
import AddCourseAdminsList from './components/AddCourseAdminsList';
import AddCourseActive from './components/AddCourseActive';

import AddCoursePurchasable from './components/AddCoursePurchasable';
import AddCourseExpire from './components/AddCourseExpire';
import AddCourseFullSizeCoverPhoto from './components/AddCourseFullSizeCoverPhoto';

const initialState = {
  show: false,
  activeTab: 'basic',
  name: '',
  description: null,
  coverDescription: '',
  categoryIds: [],
  tracksAttributes: {
    0: {
      _destroy: false,
      name: ''
    }
  },
  adminIds: [],
  limitPurchaseAvailability: false,
  selectedSellableItems: {},
  expirable: false,
  repurchasable: false,
  expirationByDate: true,
  expirationByDays: false,
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
      const { show, activeTab, ...rest } = this.state;
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

  handleFullSizeCoverPhotoUrlToggle = () => {
    const { fullSizeCoverPhotoUrl } = this.state;
    if (fullSizeCoverPhotoUrl === '' || fullSizeCoverPhotoUrl) {
      this.setState({ fullSizeCoverPhotoUrl: undefined });
    } else {
      this.setState({ fullSizeCoverPhotoUrl: '' });
    }
  }

  handleFullSizeCoverPhotoUrlChange = ({ filesUploaded }) => {
    const fullSizeCoverPhotoUrl = filesUploaded[0].url;
    this.setState({ fullSizeCoverPhotoUrl });
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

  handleExpirationTypeChange = () => {
    const { expirationByDate, expirationByDays } = this.state;
    this.setState({
      expirationByDate: !expirationByDate,
      expirationByDays: !expirationByDays
    });
  }

  handleExpirationDateChange = (expirationDate) => {
    this.setState({ expirationDate });
  }

  handlePurchaseAvailabilityDateChange = (purchaseAvailabilityDate) => {
    this.setState({ purchaseAvailabilityDate });
  }


  handleToggleSellableItem = (index) => {
    const { selectedSellableItems } = this.state;
    const selectedInState = !!selectedSellableItems[index];
    if (selectedInState) {
      const result = { ...selectedSellableItems };
      delete result[index];

      this.setState({
        selectedSellableItems: result
      });
    } else {
      const { sellableItems } = this.props;
      const itemToAdd = sellableItems[index];

      this.setState({
        selectedSellableItems: {
          ...selectedSellableItems,
          [index]: itemToAdd
        }
      });
    }
  }

  handleSellableItemPriceChange = (index, price) => {
    const { selectedSellableItems } = this.state;
    const sellableItem = selectedSellableItems[index];

    this.setState({
      selectedSellableItems: {
        ...selectedSellableItems,
        [index]: {
          ...sellableItem,
          pricesAttributes: {
            0: {
              ...sellableItem.pricesAttributes[0],
              price
            }
          }
        }
      }
    });
  }

  handleSellableItemLabelChange = (index, label) => {
    const { selectedSellableItems } = this.state;
    const sellableItem = selectedSellableItems[index];
    this.setState({
      selectedSellableItems: {
        ...selectedSellableItems,
        [index]: {
          ...sellableItem,
          pricesAttributes: {
            0: {
              ...sellableItem.pricesAttributes[0],
              label
            }
          }
        }
      }
    });
  }

  handleSellableItemLabelToggle = (index) => {
    const { selectedSellableItems } = this.state;
    const sellableItem = selectedSellableItems[index];
    const { labelEnabled } = sellableItem;

    this.setState({
      selectedSellableItems: {
        ...selectedSellableItems,
        [index]: {
          ...sellableItem,
          labelEnabled: !labelEnabled,
          pricesAttributes: {
            0: {
              ...sellableItem.pricesAttributes[0],
              label: ''
            }
          }
        }
      }
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
      categoryIds, tracksAttributes, featured, showProgress, searchKeywords, adminIds,
      fullSizeCoverPhotoUrl, selectedSellableItems, expirable, repurchasable, expirationByDate,
      expirationByDays, expirationDate, limitPurchaseAvailability, purchaseAvailabilityDate
    } = this.state;

    const {
      visibleCategories, hiddenCategories, usersIds, usersData, history: { push },
      slug, groupsIds, sellableItems
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

                          <AddCourseDescription
                            description={description}
                            handleChange={this.handleDescriptionChange}
                          />

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

                          <AddCourseActive
                            active={active}
                            handleChange={this.handleChange}
                          />
                        </>
                      )}

                      { activeTab === 'advanced' && (
                        <>
                          <AddCoursePurchasable
                            sellableItems={sellableItems}
                            selectedSellableItems={selectedSellableItems}
                            groupsIds={groupsIds}
                            limitPurchaseAvailability={limitPurchaseAvailability}
                            purchaseAvailabilityDate={purchaseAvailabilityDate}
                            handleChange={this.handleChange}
                            handlePurchaseAvailabilityDateChange={
                              this.handlePurchaseAvailabilityDateChange
                            }
                            handleToggleSellableItem={this.handleToggleSellableItem}
                            handleSellableItemPriceChange={this.handleSellableItemPriceChange}
                            handleSellableItemLabelChange={this.handleSellableItemLabelChange}
                            handleSellableItemLabelToggle={this.handleSellableItemLabelToggle}
                          />

                          <AddCourseExpire
                            expirable={expirable}
                            repurchasable={repurchasable}
                            expirationDate={expirationDate}
                            expirationByDate={expirationByDate}
                            expirationByDays={expirationByDays}
                            handleChange={this.handleChange}
                            handleExpirationTypeChange={this.handleExpirationTypeChange}
                            handleExpirationDateChange={this.handleExpirationDateChange}
                          />

                          <fieldset>
                            <legend>
                              <span>Featured</span>
                            </legend>
                            <div className="control-group featured">
                              <label htmlFor="featured">
                                Featured
                              </label>
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
                            </div>
                          </fieldset>

                          <AddCourseFullSizeCoverPhoto
                            fullSizeCoverPhotoUrl={fullSizeCoverPhotoUrl}
                            handleFullSizeCoverPhotoUrlChange={
                              this.handleFullSizeCoverPhotoUrlChange
                            }
                            handleFullSizeCoverPhotoUrlToggle={
                              this.handleFullSizeCoverPhotoUrlToggle
                            }
                          />

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
  slug: PropTypes.string.isRequired,
  groupsIds: PropTypes.arrayOf(PropTypes.string),
  sellableItems: PropTypes.objectOf(PropTypes.object).isRequired
};

AddCourse.defaultProps = {
  groupsIds: []
};

export default AddCourse;

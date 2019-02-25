import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

import AddCourseFormSection from '../AddCourseFormSection';

const AddCourseAdminsList = ({
  usersData, usersForDropdown, adminIds, handleAdminRemove, handleAdminSelect
}) => (
  <AddCourseFormSection
    label="Course Administrators"
    tooltip="You can assign administrator(s) for the course. Course administrators can manage the course and all course items related to the course."
  >
    <div className="controls">
      <div className="admin-tools add-admins" data-role="add-admins">
        <div className="admin-actions-wrapper" data-role="admin-controls">
          <div className="select-existing-users">
            <Dropdown
              multiple
              inline
              icon={false}
              trigger={
                <a className="launch-select" href="#">
                  Add Course Administrator
                  <div className="arrow" />
                </a>
              }
            >
              <Dropdown.Menu>
                <Dropdown.Menu scrolling>
                  {usersForDropdown.map((id) => {
                    const user = usersData[id];
                    return (
                      <Dropdown.Item
                        key={user.id}
                        text={`${user.firstName} ${user.lastName} (${user.email})`}
                        onClick={() => handleAdminSelect(user.id)}
                      />
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="option-list course-admins">
        <div className="header">
          <span>Users</span>
        </div>
        <ul data-role="course-admin-list">
          { adminIds.map((id) => {
            const user = usersData[id];
            return (
              <li key={id}>
                <span className="full-name">
                  {`${user.firstName} ${user.lastName}`}
                </span>
                <span className="email">
                  (
                  {user.email}
                  )
                </span>
                <span
                  className="remove-course-admin"
                  onClick={() => handleAdminRemove(user.id)}
                >
                  <i className="icon icon-times" />
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </AddCourseFormSection>
);

AddCourseAdminsList.propTypes = {
  usersData: PropTypes.objectOf(PropTypes.object).isRequired,
  usersForDropdown: PropTypes.arrayOf(PropTypes.string).isRequired,
  adminIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleAdminRemove: PropTypes.func.isRequired,
  handleAdminSelect: PropTypes.func.isRequired
};

export default AddCourseAdminsList;

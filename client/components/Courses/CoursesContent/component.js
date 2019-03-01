import React from 'react';
import PropTypes from 'prop-types';

import CoursesPresentationItem from '../CoursesPresentationItem';

const CoursesContent = ({ coursesIds, coursesData }) => (
  <div
    className="courses-container"
    data-role="courses-container"
  >
    <div className="courses courses-list ui-sortable">
      {coursesIds && coursesIds.map(id => (
        <CoursesPresentationItem
          key={id}
          {...coursesData[id]}
        />
      ))}
    </div>
  </div>
);

CoursesContent.propTypes = {
  coursesIds: PropTypes.arrayOf(PropTypes.string),
  coursesData: PropTypes.objectOf(PropTypes.object)
};

CoursesContent.defaultProps = {
  coursesIds: null,
  coursesData: null
};

export default CoursesContent;

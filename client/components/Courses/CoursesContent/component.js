import React from 'react';
import PropTypes from 'prop-types';

import CoursesPresentationItem from '../CoursesPresentationItem';

const CoursesContent = ({ coursesIds, coursesData }) => (
  <section className="library-content">
    <div
      className="courses-container"
      data-role="courses-container"
    >
      <div className="courses courses-list ui-sortable">
        {coursesIds.map(id => (
          <CoursesPresentationItem
            key={id}
            {...coursesData[id]}
          />
        ))}
      </div>
    </div>
  </section>
);

CoursesContent.propTypes = {
  coursesIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  coursesData: PropTypes.objectOf(PropTypes.object).isRequired
};

export default CoursesContent;

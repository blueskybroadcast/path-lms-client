import React from 'react';
import PropTypes from 'prop-types';

import CoursesPresentationItem from '../CoursesPresentationItem';

const CoursesContent = ({
  coursesIds, coursesData, slug, currency
}) => (
  <div
    className="courses-container"
    data-role="courses-container"
  >
    <div className="courses courses-list ui-sortable">
      {coursesIds && coursesIds.map(id => (
        <CoursesPresentationItem
          key={id}
          slug={slug}
          currency={currency}
          {...coursesData[id]}
        />
      ))}
    </div>
  </div>
);

CoursesContent.propTypes = {
  coursesIds: PropTypes.arrayOf(PropTypes.string),
  coursesData: PropTypes.objectOf(PropTypes.object),
  slug: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
};

CoursesContent.defaultProps = {
  coursesIds: null,
  coursesData: null
};

export default CoursesContent;

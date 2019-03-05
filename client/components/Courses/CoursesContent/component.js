import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import CoursesPresentationItem from '../CoursesPresentationItem';

const CoursesContent = ({
  loading, location: { search }, coursesIds, coursesData, slug, currency
}) => {
  const queryOptions = search && queryString.parse(search, { arrayFormat: 'bracket' });
  return (
    <div
      className="courses-container"
      data-role="courses-container"
    >
      { loading ? (
        <div className="courses-container bsb-loader-container" data-role="courses-container">
          <div className="bsb-loader">
            <div className="loader-wrapper">
              <div className="spinner">
                <i className="icon icon-spinner icon-spin icon-large" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          { search && (
            <div className="search-info">
              <div className="search-results">
                Search results for
                &apos;
                {queryOptions.search}
                &apos;
              </div>
            </div>
          )}
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
        </>
      )}
    </div>
  );
};

CoursesContent.propTypes = {
  loading: PropTypes.bool.isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
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

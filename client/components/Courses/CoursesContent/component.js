import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContextProvider } from 'react-dnd';

import CoursesPresentationItem from '../CoursesPresentationItem';

const CoursesContent = ({
  loading, location: { search }, coursesIds, coursesData, slug, currency, sortCourses, isAdmin
}) => {
  const queryOptions = search && queryString.parse(search, { arrayFormat: 'bracket' });
  const moveCourseCard = (dragIndex, hoverIndex) => {
    const ids = [...coursesIds];
    const dragItem = ids[dragIndex];
    ids.splice(dragIndex, 1);
    ids.splice(hoverIndex, 0, dragItem);
    if (hoverIndex !== undefined) {
      sortCourses(ids);
    }
  };
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
            <DragDropContextProvider backend={HTML5Backend}>
              {coursesIds && coursesIds.map((id, index) => (
                <CoursesPresentationItem
                  key={id}
                  isAdmin={isAdmin}
                  slug={slug}
                  currency={currency}
                  moveCard={moveCourseCard}
                  id={id}
                  index={index}
                  canDrag={isAdmin}
                  {...coursesData[id]}
                />
              ))}
            </DragDropContextProvider>
          </div>
        </>
      )}
    </div>
  );
};

CoursesContent.propTypes = {
  isAdmin: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  coursesIds: PropTypes.arrayOf(PropTypes.string),
  coursesData: PropTypes.objectOf(PropTypes.object),
  slug: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  sortCourses: PropTypes.func.isRequired
};

CoursesContent.defaultProps = {
  isAdmin: false,
  coursesIds: null,
  coursesData: null
};

export default CoursesContent;

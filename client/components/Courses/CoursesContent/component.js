import React from 'react';

import CoursesPresentationItem from '../CoursesPresentationItem';

const CoursesContent = () => (
  <section className="library-content">
    <div
      className="courses-container"
      data-role="courses-container"
    >
      <div className="courses courses-list ui-sortable">
        {[{ id: 1 }, { id: 2 }].map(presentation => (
          <CoursesPresentationItem
            key={presentation.id}
            {...presentation}
          />
        ))}
      </div>
    </div>
  </section>
);

export default CoursesContent;

import React from 'react';
import PropTypes from 'prop-types';

const CoursesPresentationItem = ({
  coverDescription, coverPhotoUrl, id, name
}) => (
  <article className="course">
    <a title="Online Course" href={`/showroom/courses/${id}`}>
      <img
        className="course-cover-photo"
        alt=""
        src={coverPhotoUrl}
      />
      <h3 data-role="course-info" title="Online Course">
        {name}
        <span
          className="status icon icon-purchasable-usd unpaid"
          aria-label="Unpaid"
        />
        <span
          className="status icon hidden"
          aria-label=""
        />
      </h3>
      <div className="info">
        <p>{coverDescription}</p>
      </div>
      <footer className="meta-info">
        <ul>
          <li>
            <i className="icon icon-section" />
            <span>3</span>
          </li>
          <li>
            <i className="icon icon-presentation" />
            <span>2</span>
          </li>
          <li>
            <i className="icon icon-link" />
            <span>3</span>
          </li>
          <li>
            <i className="icon icon-assessment" />
            <span>2</span>
          </li>
          <li>
            <i className="icon icon-document" />
            <span>1</span>
          </li>
          <li>
            <i className="icon icon-certificate" />
            <span>1</span>
          </li>
          <li>
            <i className="icon icon-survey" />
            <span>3</span>
          </li>
          <li>
            <i className="icon icon-assignment" />
            <span>1</span>
          </li>
          <li>
            <i className="icon icon-in-person-event" />
            <span>1</span>
          </li>
        </ul>
      </footer>
    </a>
  </article>
);

CoursesPresentationItem.propTypes = {
  coverDescription: PropTypes.string,
  coverPhotoUrl: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

CoursesPresentationItem.defaultProps = {
  coverDescription: null,
  coverPhotoUrl: null
};

export default CoursesPresentationItem;

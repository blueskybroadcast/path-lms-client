import React from 'react';

const CoursesPresentationItem = () => (
  <article className="course" data-id="221">
    <a title="Online Course" href="/showroom/courses/221">
      <img
        className="course-cover-photo"
        alt=""
        src="https://deqefw538d79t.cloudfront.net/api/file/DZmCeOH4S2ygMlOvB9aw/convert?align=left&amp;cache=true&amp;fit=crop&amp;format=jpeg&amp;h=152&amp;quality=100&amp;w=320"
      />
      <h3 data-role="course-info" title="Online Course">
        Online Course&nbsp;
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
        <p>
          This is a small simple course that requires a user to complete a
          survey before they are awarded the certificate.
        </p>
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

export default CoursesPresentationItem;

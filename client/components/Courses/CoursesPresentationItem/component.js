import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MetaItem from './components/MetaItem';

const CoursesPresentationItem = ({
  coverDescription, resizedCoverPhotoUrl, id, name, permittedContent, currency,
  slug, statuses
}) => (
  <article className="course">
    <a title="Online Course" href={`/${slug}/courses/${id}`}>
      <img
        className="course-cover-photo"
        alt=""
        src={resizedCoverPhotoUrl}
      />
      <h3 data-role="course-info" title="Online Course">
        {name}
        <span
          className={classNames(
            'status icon',
            currency && `icon-purchasable-${currency}`,
            statuses.purchase && `${statuses.purchase}`
          )}
        />
      </h3>
      <div className="info">
        <p>{coverDescription}</p>
      </div>
      <footer className="meta-info">
        <ul>
          { permittedContent && (
            <>
              { permittedContent.section
                && <MetaItem count={permittedContent.section} icon="section" />
              }
              { permittedContent.presentation
                && <MetaItem count={permittedContent.presentation} icon="presentation" />
              }
              { permittedContent.link
                && <MetaItem count={permittedContent.link} icon="link" />
              }
              {/* <li>
                <i className="icon icon-assessment" />
                <span>2</span>
              </li> */}
              { permittedContent.document
                && <MetaItem count={permittedContent.document} icon="document" />
              }
              { permittedContent.certificate
                && <MetaItem count={permittedContent.certificate} icon="certificate" />
              }
              { permittedContent.survey
                && <MetaItem count={permittedContent.survey} icon="survey" />
              }
              { permittedContent.assignment
                && <MetaItem count={permittedContent.assignment} icon="assignment" />
              }
              {/* <li>
                <i className="icon icon-in-person-event" />
                <span>1</span>
              </li> */}
            </>
          )}
        </ul>
      </footer>
    </a>
  </article>
);

CoursesPresentationItem.propTypes = {
  coverDescription: PropTypes.string,
  resizedCoverPhotoUrl: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  permittedContent: PropTypes.objectOf(PropTypes.number),
  slug: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  statuses: PropTypes.shape({
    purchase: PropTypes.string
  })
};

CoursesPresentationItem.defaultProps = {
  coverDescription: null,
  resizedCoverPhotoUrl: null,
  permittedContent: null,
  statuses: {}
};

export default CoursesPresentationItem;

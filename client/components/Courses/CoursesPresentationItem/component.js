import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DragSource, DropTarget } from 'react-dnd';

import { textTruncate } from '../../../helpers';
import { cardSource, cardTarget } from '../../../helpers/dragAndDrop';
import { DRAG_AND_DROP_TYPES } from '../../../constants';
import MetaItem from './components/MetaItem';


class CoursesPresentationItem extends React.Component {
  render() {
    const {
      coverDescription, resizedCoverPhotoUrl, id, name, permittedContent, currency,
      slug, statuses, isDragging, connectDragSource, connectDropTarget, isAdmin, active
    } = this.props;
    const opacity = isDragging ? 0.5 : 1;
    return connectDragSource(
      connectDropTarget(
        <article
          style={{ opacity }}
          className="course"
        >
          <a title="Online Course" href={`/${slug}/courses/${id}`}>
            { !active && (
              <div className="inactive-notice">
                <span>
                  <i className="icon icon-warning">
                    <strong>&nbsp;Inactive&nbsp;</strong>
                  </i>
                  This course is currently hidden from users.
                </span>
              </div>
            )}
            <img
              className="course-cover-photo"
              alt=""
              src={resizedCoverPhotoUrl}
            />
            <h3 data-role="course-info" title="Online Course">
              {textTruncate(name)}
              <span
                className={classNames(
                  'status icon',
                  currency && `icon-purchasable-${currency}`,
                  statuses.purchase && `${statuses.purchase}`
                )}
              />
            </h3>
            { isAdmin && (
              <div className="reorder">
                <i className="icon icon-reorder" />
              </div>
            )}
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
                    { permittedContent.assessment
                      && <MetaItem count={permittedContent.assessment} icon="assessment" />
                    }
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
                    { permittedContent.inpersonevent
                      && <MetaItem count={permittedContent.inpersonevent} icon="in-person-event" />
                    }
                  </>
                )}
              </ul>
            </footer>
          </a>
        </article>
      )
    );
  }
}

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
  }),
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  active: PropTypes.bool.isRequired
};

CoursesPresentationItem.defaultProps = {
  coverDescription: null,
  resizedCoverPhotoUrl: null,
  permittedContent: null,
  statuses: {}
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
  canDrag: monitor.canDrag()
});

export default DropTarget(DRAG_AND_DROP_TYPES.courseCard, cardTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))(
  DragSource(DRAG_AND_DROP_TYPES.courseCard, cardSource, collect)(CoursesPresentationItem),
);

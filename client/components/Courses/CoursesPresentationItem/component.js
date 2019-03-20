import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DragSource, DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom';

import ItemTypes from '../../common/dragAndDrop';

import MetaItem from './components/MetaItem';

const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index
    };
  },
  endDrag(props, monitor) {
    console.log('end');
    const { id: droppedId, originalIndex } = monitor.getItem();
    const didDrop = monitor.didDrop();
    if (!didDrop) {
      props.moveCard(droppedId, originalIndex);
    }
  }
};

const cardTarget = {
  hover(props, monitor, component) {
    if (!component) {
      return null;
    }
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }
    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    // Determine mouse position
    const clientOffset = monitor.getClientOffset();
    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;
    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%
    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }
    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }
    // Time to actually perform the action
    props.moveCard(dragIndex, hoverIndex);
    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
};

class CoursesPresentationItem extends React.Component {
  render() {
    const {
      coverDescription, resizedCoverPhotoUrl, id, name, permittedContent, currency,
      slug, statuses,
      isDragging, connectDragSource, connectDropTarget, connectDragPreview
    } = this.props;
    const opacity = isDragging ? 0.5 : 1;
    return connectDragPreview(
      connectDropTarget(
        <article
          style={{ opacity }}
          className="course"
        >
          <a title="Online Course" href={`/${slug}/courses/${id}`}>
            <img
              className="course-cover-photo"
              alt=""
              src={resizedCoverPhotoUrl}
            />
            <h3 data-role="course-info" title="Online Course">
              {id}
              <span
                className={classNames(
                  'status icon',
                  currency && `icon-purchasable-${currency}`,
                  statuses.purchase && `${statuses.purchase}`
                )}
              />
            </h3>
            { connectDragSource(
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
  })
};

CoursesPresentationItem.defaultProps = {
  coverDescription: null,
  resizedCoverPhotoUrl: null,
  permittedContent: null,
  statuses: {}
};

export default DropTarget(ItemTypes.CARD, cardTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))(
  DragSource(ItemTypes.CARD, cardSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }))(CoursesPresentationItem),
);

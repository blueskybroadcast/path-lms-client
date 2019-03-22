import { findDOMNode } from 'react-dom';

export const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index
    };
  },
  endDrag(props, monitor) {
    const { id: droppedId, originalIndex } = monitor.getItem();
    const didDrop = monitor.didDrop();
    if (!didDrop) {
      props.moveCard(droppedId, originalIndex);
    }
  },
  canDrag(props) {
    return props.canDrag;
  }
};

export const cardTarget = {
  hover(props, monitor, component) {
    if (!component) {
      return null;
    }
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    if (dragIndex === hoverIndex) {
      return;
    }
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }
    props.moveCard(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
  }
};

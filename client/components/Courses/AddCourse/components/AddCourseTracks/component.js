import React from 'react';
import PropTypes from 'prop-types';

const AddCourseTracks = ({
  tracks, handleTrackChange, handleTrackDelete, handleTrackAdd
}) => (
  <div className="option-list tracks">
    <div className="header">
      <span>Available tracks</span>
      <a
        onClick={handleTrackAdd}
        className="add-option add-track tooltiped"
        data-placement="left"
        data-toggle="tooltip"
        title=""
        data-original-title="Add new track"
      />
    </div>
    <ul>
      { Object.entries(tracks).map(([id, data]) => {
        return !data._destroy ? (
          <li key={id}>
            <input
              value={data.name}
              onChange={({ target }) => handleTrackChange(target.value, id)}
              className="track-name"
              placeholder="Enter name"
              aria-label="Track Name"
              type="text"
              name="course[tracks_attributes][0][name]"
              id="course_tracks_attributes_0_name"
            />
            <div className="track-actions">
              <span>0 items</span>
              <a
                onClick={() => handleTrackDelete(id)}
                className="remove-track"
                href="#"
              >
                <i className="icon icon-times" />
              </a>
            </div>
          </li>
        ) : null;
      })}
    </ul>
  </div>
);

AddCourseTracks.propTypes = {
  tracks: PropTypes.objectOf(PropTypes.object).isRequired,
  handleTrackChange: PropTypes.func.isRequired,
  handleTrackDelete: PropTypes.func.isRequired,
  handleTrackAdd: PropTypes.func.isRequired
};

export default AddCourseTracks;

import React from 'react';
import PropTypes from 'prop-types';
import ReactFilestack from 'filestack-react';

const AddCourseCoverPhoto = ({
  handleCoverPhotoUrlToggle, coverPhotoUrl, handleCoverPhotoUrlChange
}) => (
  <fieldset>
    <legend>
      <span>Cover Photo</span>
    </legend>
    <div className="control-group cover-photo-wrapper">
      <label htmlFor="Cover photo">
        Cover photo
        <span className="has-tooltip">
          <span
            className="tooltiped"
            data-toggle="tooltip"
            data-original-title="This photo will be displayed on the homepage or course listing page to entice customers to click and find out more about the course."
          >
            <i className="icon icon-question-circle" />
          </span>
        </span>
      </label>
      <div className="control-pair">
        <div className="controls">
          <label
            className="label-switch"
            tabIndex="0"
            htmlFor="cover_photo"
          >
            <input
              defaultChecked={false}
              onChange={handleCoverPhotoUrlToggle}
              label="false"
              id="cover_photo"
              className="boolean optional switcher optional"
              type="checkbox"
              value="1"
              name="course[cover_photo]"
            />
            <div className="checkbox" />
          </label>
        </div>
        <div className="control-group file optional disabled course_cover_photo_url file-wrapper table-cell">
          <div className="controls">
            { coverPhotoUrl && <span className="upload-completed">Upload Complete</span> }
            { coverPhotoUrl === '' && (
              <ReactFilestack
                apikey={process.env.FILEPICKER_API_KEY}
                buttonText="Choose File"
                buttonClass="btn btn-link"
                disabled
                options={{
                  accept: 'image/*',
                  maxFiles: 1
                }}
                onSuccess={handleCoverPhotoUrlChange}
              />
            )}
          </div>
        </div>
      </div>
      <div className="controls hint-container">
        <p className="hint">Optimal photo size: 320px wide and 152px tall</p>
      </div>
    </div>
  </fieldset>
);

AddCourseCoverPhoto.propTypes = {
  handleCoverPhotoUrlToggle: PropTypes.func.isRequired,
  coverPhotoUrl: PropTypes.string,
  handleCoverPhotoUrlChange: PropTypes.func.isRequired
};

AddCourseCoverPhoto.defaultProps = {
  coverPhotoUrl: undefined
};

export default AddCourseCoverPhoto;

import React from 'react';
import PropTypes from 'prop-types';
import ReactFilestack from 'filestack-react';

const AddCourseFullSizeCoverPhoto = ({
  handleFullSizeCoverPhotoUrlToggle, fullSizeCoverPhotoUrl, handleFullSizeCoverPhotoUrlChange
}) => (
  <fieldset>
    <legend>
      <span>Cover Photo</span>
    </legend>
    <div className="control-group cover-photo-wrapper">
      <label htmlFor="Full-size cover photo">
        Full-size cover photo
        <span className="has-tooltip">
          <span
            className="tooltiped"
            data-toggle="tooltip"
            data-original-title="If this is the only course featured on the homepage, it will be given a full length view where this photo size may be appropriate. "
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
              onChange={handleFullSizeCoverPhotoUrlToggle}
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
            { fullSizeCoverPhotoUrl && <span className="upload-completed">Upload Complete</span> }
            { fullSizeCoverPhotoUrl === '' && (
              <ReactFilestack
                apikey={process.env.FILEPICKER_API_KEY}
                buttonText="Choose File"
                buttonClass="btn btn-link"
                disabled
                options={{
                  accept: 'image/*',
                  maxFiles: 1
                }}
                onSuccess={handleFullSizeCoverPhotoUrlChange}
              />
            )}
          </div>
        </div>
      </div>
      <div className="controls hint-container">
        <p className="hint">Optimal photo size: 1007px wide and 152px tall</p>
      </div>
    </div>
  </fieldset>
);

AddCourseFullSizeCoverPhoto.propTypes = {
  handleFullSizeCoverPhotoUrlToggle: PropTypes.func.isRequired,
  fullSizeCoverPhotoUrl: PropTypes.string,
  handleFullSizeCoverPhotoUrlChange: PropTypes.func.isRequired
};

AddCourseFullSizeCoverPhoto.defaultProps = {
  fullSizeCoverPhotoUrl: undefined
};

export default AddCourseFullSizeCoverPhoto;

import React from 'react';
import PropTypes from 'prop-types';

import EditCoursesDescription from './components/EditCoursesDescription';

class CoursesDescription extends React.Component {
  state = {
    editMode: false
  }

  handleEnableEditMode = () => {
    this.setState({ editMode: true });
  }

  render() {
    const { isAdmin } = this.props;
    return (
      <div
        className="description-wrapper"
        id="courses-description"
      >
        <div className="description">
          <p>
            <strong>
              <img
                src="https://s3.amazonaws.com//bluesky_portal_prod/uploads/redactor_images/1469121389.4410386_Blue_Sky_eLearn_Logo_Adobe.png"
                style={{ width: 186, float: 'left', margin: '0px 10px 10px 0px' }}
                alt=""
              />
              Our Solution Overview:
              <br />
              <br />
            </strong>
            Path Learning Platform-an intuitive, scalable, cloud-based,
            award-winning platform that is cost-effective and quick to implement.
            <br />
            <br />
          </p>
          <ul>
            <li>
              Delivers content for on-demand access and is well suited for rich
              media like webinars and meeting presentations.
            </li>
            <li>Includes robust registration for web events and full featured eCommerce.</li>
            <li>
              Scales to a full featured LMS with tools for testing, surveys, certificates, and tracking.
            </li>
            <li>Options for an integrated ad network for monetization.</li>
            <li>Integrates with most AMS’s for a seamless user and administrator experience</li>
          </ul>
          <br />
          <span style={{ fontSize: 18 }}>
            (2 Min
            <a href="http://blueskybroadcast.com/path1/">video overview</a>
            ) and (
            <a href="https://vimeo.com/user27074244/review/133701440/67d935bee1">4 Min Video from</a>
            admin perspective) (
            <a href="http://www.naylor.com/bluesky-path-learning-system/">Client Feedback Video</a>
            )
          </span>
          <br />
          <br />
          We also provide managed web event services to streamline a
          professional delivery of your education virtually that is integrated with the
          Path LMS.  (
          <a href="http://www.blueskyelearn.com/webinar-tour/">Video tour</a>
          )&nbsp;
          <br />
          <p />
          { isAdmin && <EditCoursesDescription /> }
        </div>
      </div>
    );
  }
}

CoursesDescription.propTypes = {
  isAdmin: PropTypes.bool.isRequired
}

export default CoursesDescription;

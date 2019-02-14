import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    Homes
    <Link to="/showroom/courses">Courses</Link>
  </div>
);

export default {
  component: HomePage
};

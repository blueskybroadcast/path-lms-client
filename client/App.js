import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';

import Header from './components/Header';
import Footer from './components/Footer';

import { fetchCurrentUser } from './actions';

const App = ({ route }) => (
  <>
    <Header />
    <section className="main-container" id="main-container">
      {renderRoutes(route.routes)}
    </section>
    <Footer />
  </>
);

App.propTypes = {
  route: PropTypes.shape({
    routes: PropTypes.arrayOf(PropTypes.object)
  }).isRequired
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};

import '@babel/polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';

import routes from '../client/routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

const apiHost = process.env.NODE_ENV === 'production' ? process.env.API_HOST_PROD : process.env.API_HOST_DEV;

app.use('/api_private', proxy(apiHost));
app.use(express.static('public'));

app.get('/:account/*', (request, response) => {
  const store = createStore(request);

  const accountSlug = request.params.account || '';

  const promises = matchRoutes(routes, request.path).map(({ route }) => {
    return route.loadData ? route.loadData(store, accountSlug) : null;
  }).map((promise) => {
    if (promise) {
      return new Promise((resolve, reject) => {
        promise.then(resolve).catch(resolve);
      });
    }
  });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(request, store, context);

    if (context.url) {
      return response.redirect(301, context.url);
    }

    if (context.notFound) {
      response.status(404);
    }

    response.send(content);
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

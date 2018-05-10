// import "babel-polyfill"
import React from 'react';
import { render } from 'react-dom';
import { configureStore, history, sagaMiddleware } from './store/configureStore';
import Root from './components/Root';
import categoriesSaga from './sagas/categories';
import postsSaga from './sagas/posts';
import commentsSaga from './sagas/comments';

export const store = configureStore();
sagaMiddleware.run(categoriesSaga);
sagaMiddleware.run(postsSaga);
sagaMiddleware.run(commentsSaga);
render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);

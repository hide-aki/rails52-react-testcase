// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import categories from './reducers/categories';
import posts from './reducers/posts';
import comments from './reducers/comments';

const rootReducer = combineReducers({
  categories,
  posts,
  comments,
  router
});

export default rootReducer;

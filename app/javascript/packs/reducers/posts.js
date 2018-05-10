import { POSTS_DONE, POST_DONE } from '../actions/posts';

const defaultState = {
  posts: [],
  post: {}
};

export default function posts(state = defaultState, action) {
  switch (action.type) {
    case POSTS_DONE:
      return Object.assign({}, state, { posts: action.posts });
    case POST_DONE:
      return Object.assign({}, state, { post: action.post });
    default:
      return state;
  }
};
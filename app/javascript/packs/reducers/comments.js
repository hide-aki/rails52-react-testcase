import { COMMENTS_DONE } from '../actions/comments';

const defaultState = {
  comments: []
};

export default function comments(state = defaultState, action) {
  switch (action.type) {
    case COMMENTS_DONE:
      return Object.assign({}, state, { comments: action.comments });
    default:
      return state;
  }
};
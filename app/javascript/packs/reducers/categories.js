import { CATEGORIES_DONE, CATEGORY_DONE } from '../actions/categories';

const defaultState = {
  categories: []
};

export default function categories(state = defaultState, action) {
  switch (action.type) {
    case CATEGORIES_DONE:
      return Object.assign({}, state, { categories: action.categories });
    case CATEGORY_DONE:
      return Object.assign({}, state, { category: action.category });
    default:
      return state;
  }
};
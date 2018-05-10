// action types 
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const CATEGORIES_DONE = 'CATEGORIES_DONE';
export const CATEGORY_DONE = 'CATEGORY_DONE';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const FETCH_CATEGORY = 'FETCH_CATEGORY';
export const CREATE_CATEGORY = 'CREATE_CATEGORY';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';

// actions
export const fetchCategories = () => ({ type: FETCH_CATEGORIES });
export const deleteCategory = (id) => ({ type: DELETE_CATEGORY, payload: { id }});
export const fetchCategory = (id) => ({ type: FETCH_CATEGORY, payload: { id }});
export const createCategory = (payload) => ({ type: CREATE_CATEGORY, payload });
export const updateCategory = (id, data) => ({ type: UPDATE_CATEGORY, payload: { id, data }});

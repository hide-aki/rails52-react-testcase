export const FETCH_POST = 'FETCH_POST';
export const FETCH_POSTS = 'FETCH_POSTS';
export const POSTS_DONE = 'POSTS_DONE';
export const POST_DONE = 'POST_DONE';
export const DELETE_POST = 'DELETE_POST';
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST = 'UPDATE_POST';

export const fetchPost = (id) => ({ type: FETCH_POST, payload: { id } });
export const fetchPosts = () => ({ type: FETCH_POSTS });
export const deletePost = () => ({ type: DELETE_POST, payload: { id } });
export const createPost = (payload) => ({ type: CREATE_POST, payload });
export const updatePost = (id, data) => ({ type: UPDATE_POST, payload: { id, data } });
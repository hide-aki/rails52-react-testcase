export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const COMMENTS_DONE = 'COMMENTS_DONE';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const fetchComments = () => ({ type: FETCH_COMMENTS });
export const deleteComment = (id) => ({ type: DELETE_COMMENT, payload: { id }});
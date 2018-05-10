import { select, call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { push, goBack } from 'react-router-redux';
import API from '../API';
import { FETCH_COMMENTS, COMMENTS_DONE,  DELETE_COMMENT } from '../actions/comments';

function* getAllCommentsFromAPI(action) {
  try {
    const req = yield call(API.get_comments, null);
    const comments = req.data;
    yield put({ type: COMMENTS_DONE, comments });
  } catch (e) {
    yield put({ type: COMMENTS_DONE, comments: {} });
  }
}
function* deleteCommentAPI(action) {
  try {
    const req = yield call(API.delete_comment, action.payload.id);
    yield put(push('/comments'));
  } catch (e) {
    yield put(push('/comments'));
  }
}

function* saga() {
  yield takeLatest(FETCH_COMMENTS, getAllCommentsFromAPI);
  yield takeEvery(DELETE_COMMENT, deleteCommentAPI);
}
export default saga;

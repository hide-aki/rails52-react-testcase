import { select, call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { push, goBack } from 'react-router-redux';
import API from '../API';
import { CREATE_POST, UPDATE_POST, FETCH_POSTS, FETCH_POST, POSTS_DONE, POST_DONE, DELETE_POST } from '../actions/posts';


function* getPostFromAPI(action) {
  try {
    const req = yield call(API.get_post, action.payload.id);
    const post = req.data;
    yield put({ type: POST_DONE, post });
  } catch (e) {
    yield put({ type: POST_DONE, post: {} });
  }
}

function* getPostsFromAPI(action) {
  try {
    const req = yield call(API.get_posts, action.payload);
    const posts = req.data;
    yield put({ type: POSTS_DONE, posts });
  } catch (e) {
    yield put({ type: POSTS_DONE, posts: [] });
  }
}

function* deletePostFromAPI(action) {
  try {
    const req = yield call(API.delete_post, action.payload.id);
    // refresh 
    const req2 = yield call(API.get_posts, action.payload);
    const posts = req.data;
    yield put({ type: POSTS_DONE, posts });
  } catch (e) {
    yield put({ type: POSTS_DONE, posts: [] });
  }
}

function* createPostAPI(action) {
  try {
    const req = yield call(API.create_post, action.payload);
    yield put(push('/posts'));
  } catch (e) {
    yield put(push('/posts'));
  }
}
function* updatePostAPI(action) {
  try {
    const req = yield call(API.update_post, action.payload.id, action.payload.data);
    yield put(push('/posts'));
  } catch (e) {
    yield put(push('/posts'));
  }
}

function* saga() {
  yield takeLatest(FETCH_POSTS, getPostsFromAPI);
  yield takeLatest(DELETE_POST, deletePostFromAPI);
  yield takeLatest(FETCH_POST, getPostFromAPI);
  yield takeLatest(CREATE_POST, createPostAPI);
  yield takeLatest(UPDATE_POST, updatePostAPI);
}

export default saga;
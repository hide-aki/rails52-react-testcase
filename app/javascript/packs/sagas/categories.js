import { select, call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { push, goBack } from 'react-router-redux';
import API from '../API';
import { CREATE_CATEGORY, UPDATE_CATEGORY, FETCH_CATEGORIES, FETCH_CATEGORY, CATEGORIES_DONE, CATEGORY_DONE, DELETE_CATEGORY} from '../actions/categories';


function* getCategoryFromAPI(action) {
  try {
    const categories_request = yield call(API.get_category, action.payload.id);
    const category = categories_request.data;
    yield put({ type: CATEGORY_DONE, category });
  } catch (e) {
    yield put({ type: CATEGORY_DONE, category: {} });
  }
}

function* getCategoriesFromAPI(action) {
  try {
    const categories_request = yield call(API.get_categories, action.payload);
    const categories = categories_request.data;
    yield put({ type: CATEGORIES_DONE, categories });
  } catch (e) {
    yield put({ type: CATEGORIES_DONE, categories: [] });
  }
}

function* deleteCategoryFromAPI(action) {
  try {
    const req = yield call(API.delete_category, action.payload.id);
    // refresh 
    const categories_request = yield call(API.get_categories, action.payload);
    const categories = categories_request.data;
    yield put({ type: CATEGORIES_DONE, categories });
  } catch (e) {
    yield put({ type: CATEGORIES_DONE, categories: [] });
  }
}

function* createCategoryAPI(action) {
  try {
    const req = yield call(API.create_category, action.payload);
    yield put(push('/'));
  } catch (e) {
    yield put(push('/'));
  }
}

function* updateCategoryAPI(action) {
  try {
    const req = yield call(API.update_category, action.payload.id, action.payload.data);
    yield put(push('/'));
  } catch (e) {
    yield put(push('/'));
  }
}

function* saga() {
    yield takeLatest(FETCH_CATEGORIES, getCategoriesFromAPI);
    yield takeLatest(DELETE_CATEGORY, deleteCategoryFromAPI);
    yield takeLatest(FETCH_CATEGORY, getCategoryFromAPI);
    yield takeLatest(CREATE_CATEGORY, createCategoryAPI);
    yield takeLatest(UPDATE_CATEGORY, updateCategoryAPI);
}
export default saga;
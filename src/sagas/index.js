import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import * as Types from '../actions/types';
import { api } from '../services';

function* fetchAssignments(action) {
  try {
    const assignments = yield call(api.fetchAssignments);

    yield put({ type: Types.FETCH_ASSIGNMENTS_SUCCESS, payload: assignments });
  } catch (err) {
    yield put({ type: Types.FETCH_ASSIGNMENTS_ERROR, payload: err });
  }
}

function* fetchAssignmentSubmissions(action) {
  try {
    const assignments = yield call(api.fetchAssignmentSubmissions, action.assignment);

    yield put({ type: Types.FETCH_ASSIGNMENT_SUBMISSIONS_SUCCESS, payload: assignments });
  } catch (err) {
    yield put({ type: Types.FETCH_ASSIGNMENT_SUBMISSIONS_ERROR, payload: err });
  }
}

function* mySaga() {
  yield takeLatest(Types.FETCH_ASSIGNMENTS, fetchAssignments);
  yield takeEvery(Types.FETCH_ASSIGNMENT_SUBMISSIONS, fetchAssignmentSubmissions);
}

export default mySaga;

import * as Types from '../actions/types';

const assignmentSubmissions = (state = [], action) => {
  switch (action.type) {
    case Types.FETCH_ASSIGNMENT_SUBMISSIONS:
      return [];
    case Types.FETCH_ASSIGNMENT_SUBMISSIONS_SUCCESS:
      return action.payload.data;
    default:
      return state;
  }
};

export default assignmentSubmissions;

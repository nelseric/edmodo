import * as Types from '../actions/types';

const assignments = (state = [], action) => {
  switch (action.type) {
    case Types.FETCH_ASSIGNMENTS_SUCCESS:
      return action.payload.data;
    case Types.CREATE_ASSIGNMENT:
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default assignments;

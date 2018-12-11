import * as Types from '../actions/types';

const assignments = (state = [], action) => {
  switch (action.type) {
    case Types.FETCH_ASSIGNMENTS_SUCCESS:
      return action.payload.data;
    default:
      return state;
  }
};

export default assignments;

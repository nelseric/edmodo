import { combineReducers } from 'redux';

import assignments from './assignments';
import assignment_submissions from './assignment_submissions';

export default combineReducers({
  assignments,
  assignment_submissions,
});

import * as Types from './types';

export const fetchAssignments = () => ({ type: Types.FETCH_ASSIGNMENTS });

export const fetchAssignmentSubmissions = assignment => ({
  type: Types.FETCH_ASSIGNMENT_SUBMISSIONS,
  assignment,
});

export const createAssignment = assignment => ({
  type: Types.CREATE_ASSIGNMENT,
  payload: assignment,
});

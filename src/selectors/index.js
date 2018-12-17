import { createSelector } from 'reselect';

const assignments = state => state.assignments;

const assignmentIds = createSelector(assignments, assignments =>
  assignments.map(assignment => assignment.id)
);

export const maxAssignmentId = createSelector(assignmentIds, assignmentIds =>
  Math.max(...assignmentIds)
);

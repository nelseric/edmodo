import { createSelector } from 'reselect';

const assignments = state => state.assignments;

export const maxAssignmentId = createSelector(assignments, assignments =>
  Math.max(...assignments.map(assignment => assignment.id))
);


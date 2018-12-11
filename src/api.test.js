import * as api from './api';

describe('fetchAssignments', () => {
  test('it fetches successfully', async () => {
    const assignments = await api.fetchAssignments();
    expect(assignments.status).toBe(200);
  });
});

describe('fetchAssignmentSubmissions', () => {
  test('it fetches successfully', async () => {
    const assignments = await api.fetchAssignments();

    const submission = await api.fetchAssignmentSubmissions(assignments.data[0]);

    expect(submission.status).toBe(200);
  });
});

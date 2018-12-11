import axios from 'axios';

const BASE_URL = 'https://api.edmodo.com';

const API_KEY =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDQ0ODAxNjgsImlzcyI6Imh0dHBzOi8vYXBpLmVkbW9kby5jb20iLCJ1c2VyIjp7ImlkIjoxNDQ1MTU3NTJ9LCJhcHAiOnsiaWQiOjk4OX0sImV4cGlyZXNfaW4iOjg2NDAwLCJzY29wZXMiOiJhbGwifQ.GC-MZQQNjuuHTAw61VpgZ7XGR96DUYX9E9sF4mbAIeMqs3C6CLKKW78t7LVzKbZAa7bidWxxHKh5UcjwJTvfAg';

export const fetchAssignments = () => {
  return axios.get(BASE_URL + '/assignments', { params: { access_token: API_KEY } });
};

export const fetchAssignmentSubmissions = assignment => {
  return axios.get(BASE_URL + '/assignment_submissions', {
    params: {
      access_token: API_KEY,
      assignment_id: assignment.id,
    },
  });
};

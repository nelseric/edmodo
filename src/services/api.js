import axios from 'axios';

const BASE_URL = 'https://api.edmodo.com';

const API_KEY =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NDQ1NzAxMTQsImlzcyI6Imh0dHBzOi8vYXBpLmVkbW9kby5jb20iLCJ1c2VyIjp7ImlkIjoxNDQ1MTU3NTJ9LCJhcHAiOnsiaWQiOjQ0OX0sImV4cGlyZXNfaW4iOjg2NDAwLCJzY29wZXMiOiJhbGwifQ.YAyn-4NqmCUJaQIR3R9ZmeZl9ShYjTa1NADDE0sVmBvb_RRc1d8Xkk4t8zreAjeHeK9yJMjLkKRGjrw186wBxg';

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

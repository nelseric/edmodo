import axios from 'axios';

const BASE_URL = 'https://api.edmodo.com';

const API_KEY = process.env.REACT_APP_API_KEY;

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

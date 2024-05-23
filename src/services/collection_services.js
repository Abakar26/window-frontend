import axios from 'axios';
import { API_URL } from '../Constants/Constants';

const getPreferenceBucket = () => {
  const headers = localStorage.getItem('authorization');
  const response = axios.get(`${API_URL}api/v1/home`, headers);
  return response;
};

const getUserPreferenceBucket = () => {
  const currentUser = localStorage.getItem('user');
  const headers = localStorage.getItem('authorization')
    ? { headers: { Authorization: localStorage.getItem('authorization') } }
    : '';
  const response = axios.get(
    `${API_URL}api/v1/users/${currentUser}/shopping_preferences`,
    headers,
  );
  return response;
};

const getUserSizePreferenceBucket = () => {
  const currentUser = localStorage.getItem('user');
  const headers = localStorage.getItem('authorization')
    ? { headers: { Authorization: localStorage.getItem('authorization') } }
    : '';
  const response = axios.get(
    `${API_URL}api/v1/users/${currentUser}/size_preferences`,
    headers,
  );
  return response;
};

export { getPreferenceBucket, getUserPreferenceBucket, getUserSizePreferenceBucket };

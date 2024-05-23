import axios from "axios";
import { API_URL } from "../Constants/Constants";
// const API_URL = "http://localhost:3000/";
const register = (first_name, last_name, dob, email, password, password_confirmation) => {
  return axios.post(API_URL + "api/v1/users", {
    users: {
      first_name,
      last_name,
      dob,
      email,
      password,
      password_confirmation
    }
  });
};
const login = (email, password) => {
  return axios
    .post(API_URL + 'login', {
      user: {
        email,
        password,
      }
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem('user', response.data.data['id']);
        localStorage.setItem('authorization', response.headers['authorization']);
        localStorage.setItem('first-name', response.data.data['first_name']);
        localStorage.setItem('last-name', response.data.data['last_name']);
        localStorage.setItem('dob', response.data.data['dob']);
        localStorage.setItem('email', response.data.data['email']);
      }
      return response;
    }).catch((error) => {
      throw error;
    })
};
const logout = () => {
  axios.delete(API_URL + 'logout', {
    headers: {
      "Authorization": localStorage.getItem("authorization")
    }
  })
  localStorage.clear();
  window.location.reload();
};
export default { register, login, logout, };

import { ApiBase } from './apiconfig';
import axios from 'axios';

const ax = axios.create({
  baseURL: ApiBase,
  timeout: 1000,
});

function isLoggedIn() {
  localStorage.getItem('authorization-key');
}

function logIn(username, password, remember) {
}

function logOut() {
}

function getUser() {
}

function register(username, email, password, firstName, lastName) {
}

export {
  isLoggedIn,
  logIn,
  logOut,
  getUser,
  register,
};

//
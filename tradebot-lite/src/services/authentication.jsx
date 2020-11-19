import { ApiBase } from '../config';
import axios from 'axios';
import { BehaviorSubject } from 'rxjs';

const currentUser = new BehaviorSubject(null);

const isLoggedIn = async () => {
  try {
    const req = await axios({
      method: 'get',
      baseURL: ApiBase,
      url: '/auth/is_authenticated',
      withCredentials: true,
    });

    return (req && req.data && req.data.status === true);
  } catch(err) {
    console.error(err);
    return false;
  }
};

const logInUser = async (username, password) => {
  try {
    const res = await axios({
      method: 'post',
      baseURL: ApiBase,
      url: '/auth/login/user',
      withCredentials: true,
      data: {
        username: username.toLowerCase(),
        password: password,
      },
    });

    if (res && res.status === 200) {
      await getUser();
      return { status: true };
    } else {
      return { status: false, reason: (res && res.data && res.data.reason) || '' };
    }
  } catch(err) {
    return { status: false, reason: 'authentication failed', error: err };
  }
};

const logOut = async () => {
  try {
    await axios({
      method: 'get',
      baseURL: ApiBase,
      url: '/auth/logout',
      withCredentials: true,
    });

    return true;
  } catch(err) {
    console.error(err);
    return false;
  }
};

const getUser = async () => {
  try {
    const res = await axios({
      method: 'get',
      baseURL: ApiBase,
      url: '/user/info',
      withCredentials: true,
      validateStatus: false,
    });

    if (res.status !== 200) {
      console.error('Failed to get user data');
      currentUser.next(null);
      return false;
    } else {
      currentUser.next(res.data);
      return true;
    }
  } catch(err) {
    console.error(err);
    return false;
  }
};

const register = async (username, email, password, firstName, lastName) => {
  try {
    const res = await axios({
      method: 'post',
      baseURL: ApiBase,
      url: '/auth/register',
      validateStatus: false,
      data: {
        username: username.toLowerCase(),
        email: email.toLowerCase(),
        password: password,
        fname: firstName,
        lname: lastName,
      }
    });

    console.log(res);

    if (!res || !res.status || !res.data) throw Error('Invalid response');

    return res.data;
  } catch(err) {
    return { status: false, reason: 'request failed', error: err };
  }
};

export {
  isLoggedIn,
  logInUser,
  logOut,
  getUser,
  register,
  currentUser,
};

//
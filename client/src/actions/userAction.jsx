/**
 * @maintainer: Zahirrrr
 * @license MIT
 * @project WPU-Open-Api
 */


import http from '../utils/httpService';
import { toast } from 'react-toastify';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from '../constants/userConstanst';
import errorHandler from '../errorHandler';

export const userRegister = async (newUser, history) => {
  try {
    await http.post('/api/signup', newUser);

    toast.success('Sukses Mendaftar');
    history.push('/login');
  } catch (ex) {
    errorHandler(ex);
  }
};

export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const { data } = await http.post('/api/login', { email, password });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    toast.success('Sukses Masuk');
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (ex) {
    errorHandler(ex);
  }
};

export const logout = () => async dispatch => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: 'SET_URL_RESET' });
};

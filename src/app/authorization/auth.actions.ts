import { Action } from '@ngrx/store';
import { Credentials } from '../login/credentials';

export const AuthActionTypes = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    LOGIN_SUCCESSFUL: 'LOGIN_SUCCESSFUL',
    LOGOUT_SUCCESSFUL: 'LOGOUT_SUCCESSFUL',
    LOGIN_FAILED: 'LOGIN_FAILED',
    LOGOUT_FAILED: 'LOGOUT_FAILED',
    REGISTER: 'REGISTER',
    REGISTER_SUCCESFUL: 'REGISTER_SUCCESSFUL',
    REGISTER_FAILED: 'REGISTER_FAILED'
};

export function login(credentials: Credentials): Action {
  return {
    type: AuthActionTypes.LOGIN,
    payload: credentials
  };
}

export function logout(): Action {
  return {
    type: AuthActionTypes.LOGOUT,
    payload: {}
  };
}

export function loginSuccess(response): Action {
  return {
    type: AuthActionTypes.LOGIN_SUCCESSFUL,
    payload: {
      user: response.user
    }
  };
}

export function loginFailure(error): Action {
  return {
    type: AuthActionTypes.LOGIN_FAILED,
    payload: {
      message: error.message
    }
  };
}

export function logoutSuccess(response): Action {
  return {
    type: AuthActionTypes.LOGOUT_SUCCESSFUL,
    payload: {}
  };
}

export function logoutFailure(error): Action {
  return {
    type: AuthActionTypes.LOGOUT_FAILED,
    payload: {
      message: error.message
    }
  };
}

export function register(credentials: Credentials): Action {
  return {
    type: AuthActionTypes.REGISTER,
    payload: credentials
  };
}

export function registerSuccess(response): Action {
  return {
    type: AuthActionTypes.REGISTER_SUCCESFUL,
    payload: {
      user: response.user
    }
  };
}

export function registerFailure(error): Action {
  return {
    type: AuthActionTypes.LOGIN_FAILED,
    payload: {
      message: error.message
    }
  };
}

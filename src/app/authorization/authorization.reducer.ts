import { Action } from '@ngrx/store';
import { Authorization } from './authorization.class';
import { AuthActionTypes } from './auth.actions';

export function authReducer(authorization: Authorization = new Authorization(false, {}), action: Action) {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return Object.assign({}, authorization, {inProgress: true});
    case AuthActionTypes.LOGOUT:
      return Object.assign({}, authorization, {inProgress: true});
    case AuthActionTypes.LOGIN_SUCCESSFUL:
      return Object.assign({}, authorization,
        {
          user: action.payload.user,
          authorized: true,
          inProgress: false
        });
    case AuthActionTypes.LOGIN_FAILED:
      console.log('login failed');
      return Object.assign({}, authorization,
        {
          message: action.payload.message,
          authorized: false,
          inProgress: false
        });
    case AuthActionTypes.LOGOUT_SUCCESSFUL:
      return new Authorization(false, {});
    case AuthActionTypes.REGISTER:
      return Object.assign({}, authorization, {inProgress: true});
    case AuthActionTypes.REGISTER_SUCCESFUL:
      return Object.assign({}, authorization,
        action.payload,
        {
          authorized: true,
          inProgress: false
        });
    case AuthActionTypes.REGISTER_SUCCESFUL:
      return Object.assign({}, authorization,
        {
          user: action.payload.user,
          authorized: true,
          inProgress: false
        });
    case AuthActionTypes.REGISTER_FAILED:
        return Object.assign({}, authorization,
          {
            message: action.payload.message,
            authorized: false,
            inProgress: false
          });
    default:
      return authorization;
  }
}

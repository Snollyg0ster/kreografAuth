export const actions = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
};

export const loginRequest = ({mail, pass, callback, errorCallback}) => ({
  type: actions.LOGIN_REQUEST,
  mail,
  pass,
  callback,
  errorCallback,
});

export const loginSuccess = ({user}) => ({
  type: actions.LOGIN_SUCCESS,
  user,
});

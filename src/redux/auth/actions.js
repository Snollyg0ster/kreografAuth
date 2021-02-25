export const actions = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  SIGNUP_REQUEST: 'SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
};

export const loginRequest = ({mail, pass, callback, errorCallback}) => {
  return {
    type: actions.LOGIN_REQUEST,
    mail,
    pass,
    callback,
    errorCallback,
  };
};

export const loginSuccess = ({user}) => ({
  type: actions.LOGIN_SUCCESS,
  user,
});

export const signupRequest = ({mail, pass, callback, errorCallback}) => {
  return {
    type: actions.SIGNUP_REQUEST,
    mail,
    pass,
    callback,
    errorCallback,
  };
};

export const signupSuccess = ({user}) => ({
  type: actions.SIGNUP_SUCCESS,
  user,
});

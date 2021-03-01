import {actions} from './actions';

export const exampleInitialState = {
  user: {},
};

function authReducer(state = exampleInitialState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}

export default authReducer;

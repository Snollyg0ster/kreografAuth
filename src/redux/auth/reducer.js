import _ from 'lodash';
import {actions} from './actions';

export const exampleInitialState = {
  user: {},
};

export const defaultInitialState = _.cloneDeep(exampleInitialState);

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

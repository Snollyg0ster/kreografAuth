import authReducer, {
  exampleInitialState as authInitialState,
} from './auth/reducer';

const layout = {
  authReducer,
};

export const exampleInitialState = {
  authReducer: authInitialState,
};

export default layout;

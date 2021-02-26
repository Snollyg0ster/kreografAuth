import authReducer, {
  exampleInitialState as authInitialState,
  goodsReducer,
  goodsInitialState,
} from './auth/reducer';

const layout = {
  authReducer,
  goodsReducer,
};

export const exampleInitialState = {
  authReducer: authInitialState,
  goodsReducer: goodsInitialState,
};

export default layout;

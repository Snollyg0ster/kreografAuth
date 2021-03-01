import authReducer, {
  exampleInitialState as authInitialState,
} from './auth/reducer';

import goodsReducer, {goodsInitialState} from './data/reducer';

const layout = {
  authReducer,
  goodsReducer,
};

export const exampleInitialState = {
  authReducer: authInitialState,
  goodsReducer: goodsInitialState,
};

export default layout;

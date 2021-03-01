import {all} from 'redux-saga/effects';

import authSagas from './src/redux/auth/saga';
import dataSagas from './src/redux/data/saga';

function* rootSaga() {
  yield all([...authSagas]);
  yield all([...dataSagas]);
}

export default rootSaga;

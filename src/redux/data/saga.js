import {call, takeEvery, put} from 'redux-saga/effects';
import {actions as dataRequest, dataSuccess} from './actions';
import getGoods from './../../api/getData';

function* getGood() {
  try {
    const data = yield call(getGoods);

    console.log('>Data recieve');

    yield put(dataSuccess({data}));
  } catch (err) {
    console.log('err', err);
  }
}

const dataSagas = [takeEvery(dataRequest.DATA_REQUEST, getGood)];

export default dataSagas;

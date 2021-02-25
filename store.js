import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import rootReducer, {exampleInitialState} from './src/redux/indexReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

function configureStore(initialState = exampleInitialState) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    combineReducers(rootReducer),
    initialState,
    compose(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore();
